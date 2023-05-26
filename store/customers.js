import { set } from 'vue'
import { initializeApp } from 'firebase/app'
import {
  getFirestore,
  collection,
  getDocs,
  setDoc,
  doc,
} from 'firebase/firestore'
const firebaseConfig = {
  apiKey: 'AIzaSyCb54FM0ibSDP40a47K-VtUsroV5ri7bGE',
  authDomain: 'internship-league.firebaseapp.com',
  projectId: 'internship-league',
  storageBucket: 'internship-league.appspot.com',
  messagingSenderId: '119738330715',
  appId: '1:119738330715:web:7338ebe71884d60944d97e',
  measurementId: 'G-WET57SG6NX',
}
// Initialize Firebase
const app = initializeApp(firebaseConfig)
// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app)
const customers = collection(db, 'customers')
// state = private properties
// mutations = private methods
const state = () => ({
  customers: {},
  currentCustomerId: 1,
})
const mutations = {
  CUSTOMER_ADDING(state, tempCustomer) {
    const id = tempCustomer.id
    console.log(`Customer ${id} adding`)
    set(state.customers, id, { ...tempCustomer, loading: true })
  },
  CUSTOMER_ADDED(state, customerIdFromDatabase) {
    const id = customerIdFromDatabase
    if (state.customers[id]) {
      state.customers[id].loading = false
    }
    console.log(`Customer ${id} added`)
  },
  CUSTOMER_ADD_FAILED(state, customer) {
    const id = customer.id
    console.log(`Customer ${id} failed`)
    delete state.customers[id]
  },
  CUSTOMER_LOADED(state, customer) {
    const id = customer.id
    console.log(`Customer ${id} adding`)
    set(state.customers, id, customer)
  },
}
// Actions = public methods
// Getters = public properties
const actions = {
  async loadCustomers({ commit }) {
    const querySnapshot = await getDocs(customers)
    querySnapshot.forEach((doc) => {
      const customer = { ...doc.data(), id: doc.id }
      commit('CUSTOMER_LOADED', customer)
    })
  },
  async addCustomer({ commit }, customer) {
    commit('CUSTOMER_ADDING', customer)
    // perform call to database and wait for results
    try {
      // const docRef = await addDoc(collection(db, "customers"), customer);
      await setDoc(doc(db, 'customers', customer.id), customer)
      // on success... backend returns newly created user with all augmentations
      commit('CUSTOMER_ADDED', customer.id)
      console.log('Document written with ID: ', customer.id)
    } catch (e) {
      // // on error... we revert everything
      commit('CUSTOMER_ADD_FAILED', customer)
      console.error('Error adding document: ', e)
    }
  },
}
const getters = {
  customers: (state) => state.customers,
  currentCustomer: (state) => state.customers[state.currentCustomerId] || {},
}
export default {
  db,
  state,
  mutations,
  actions,
  getters,
}
