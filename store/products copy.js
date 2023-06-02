import { v4 } from 'uuid'
import { set } from 'vue';
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, setDoc, doc} from "firebase/firestore";
 

const firebaseConfig = {
    apiKey: "AIzaSyCb54FM0ibSDP40a47K-VtUsroV5ri7bGE",
    authDomain: "internship-league.firebaseapp.com",
    projectId: "internship-league",
    storageBucket: "internship-league.appspot.com",
    messagingSenderId: "119738330715",
    appId: "1:119738330715:web:7338ebe71884d60944d97e",
    measurementId: "G-WET57SG6NX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

const products = collection(db, "products");

// state = private properties
// mutations = private methods

const state = () => ({
    products: {},
    currentProductId: 1
})

const mutations = {
    PRODUCT_ADDING(state, tempProduct) {
        const id = tempProduct.id;
        set(state.products, id, { ...tempProduct, loading: true })
    },
    PRODUCT_ADDED(state, productIdFromDatabase) {
        const id = productIdFromDatabase;
        if (state.products[id]) {
            state.products[id].loading = false;
        }
    },
    PRODUCT_ADD_FAILED(state, product) {
        const id = product.id;
        delete state.products[id]
    },
    PRODUCT_LOADED(state, product) {
        const id = product.id;
        set(state.products, id, product)
    },
}

// Actions = public methods
// Getters = public properties

const actions = {
    async loadProducts({ commit }) {
        const querySnapshot = await getDocs(products);
        querySnapshot.forEach((doc) => {
          const product = { ...doc.data(), id: doc.id}
          commit('PRODUCT_LOADED', product)
        });
    },
    async addProduct({ commit }, product) {
        product.id = v4()
        commit('PRODUCT_ADDING', product)
        try {
            await setDoc(doc(db, "products", product.id), product);
            commit('PRODUCT_ADDED', product.id)
          } catch (e) {
            commit('PRODUCT_ADD_FAILED', product)
          }
    }
}

const getters = {
    products: state => state.products,
    currentProduct: state => state.products[state.currentProductId] || {}
}

export default {
    db,
    state,
    mutations,
    actions,
    getters
}