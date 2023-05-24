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

const callbacks = collection(db, "callbacks");

// state = private properties
// mutations = private methods

const state = () => ({
    callbacks: {},
    currentCallbackId: 1
})

const mutations = {
    CALLBACK_ADDING(state, tempCallback) {
        const id = tempCallback.id;
        console.log(`Callback ${id} adding`)
        set(state.callbacks, id, { ...tempCallback, loading: true })
    },
    CALLBACK_ADDED(state, callbackIdFromDatabase) {
        const id = callbackIdFromDatabase;
        if (state.callbacks[id]) {
            state.callbacks[id].loading = false;
        }
        console.log(`Callback ${id} added`)
    },
    CALLBACK_ADD_FAILED(state, callback) {
        const id = callback.id;
        console.log(`Callback ${id} failed`)
        delete state.callbacks[id]
    },
    CALLBACK_LOADED(state, callback) {
        const id = callback.id;
        console.log(`Callback ${id} adding`)
        set(state.callbacks, id, callback)
    },
}

// Actions = public methods
// Getters = public properties

const actions = {
    async loadCallbacks({ commit }) {
        const querySnapshot = await getDocs(callbacks);
        querySnapshot.forEach((doc) => {
          const callback = { ...doc.data(), id: doc.id}
          commit('CALLBACK_LOADED', callback)
        });
    },
    async addCallback({ commit }, callback) {
        commit('CALLBACK_ADDING', callback)
        // perform call to database and wait for results
        try {
            // const docRef = await addDoc(collection(db, "callbacks"), callback);
            await setDoc(doc(db, "callbacks", callback.id), callback);
            // on success... backend returns newly created user with all augmentations
            commit('CALLBACK_ADDED', callback.id)
            console.log("Document written with ID: ", callback.id);
          } catch (e) {
            // // on error... we revert everything
            commit('CALLBACK_ADD_FAILED', callback)
            console.error("Error adding document: ", e);
          }
    }
}

const getters = {
    callbacks: state => state.callbacks,
    currentCallback: state => state.callbacks[state.currentCallbackId] || {}
}

export default {
    db,
    state,
    mutations,
    actions,
    getters
}