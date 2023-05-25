import { set } from 'vue';
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, addDoc } from "firebase/firestore";
import { updateDoc, deleteDoc } from "firebase/firestore";

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

const users = collection(db, "users");

// state = private properties
// mutations = private methods

const state = () => ({
    users: {},
    currentUserId: 1
})

const mutations = {
    USER_ADDING(state, tempUser) {
        const id = tempUser.id;
        console.log(`user ${id} adding`)
        set(state.users, id, { ...tempUser, loading: true })
    },
    USER_ADDED(state, userFromDatabase) {
        const id = userFromDatabase.id;
        if (state.users[id]) {
            state.users[id].loading = false;
        }
        console.log(`user ${id} added`)
    },
    USER_ADD_FAILED(state, user) {
        const id = user.id;
        console.log(`user ${id} failed`)
        delete state.users[id]
    },
    USER_LOADED(state, user) {
        const id = user.id;
        console.log(`user ${id} adding`)
        set(state.users, id, user)
    },
    USER_DELETED(state, userId) {
        delete state.users[userId];
        console.log(`User ${userId} deleted`);
      }
}

// Actions = public methods
// Getters = public properties

const actions = {
    async loadUsers({ commit }) {
        const querySnapshot = await getDocs(users);
        querySnapshot.forEach((doc) => {
          const user = { ...doc.data(), id: doc.id}
          commit('USER_LOADED', user)
        });
    },
    async addUser({ commit }, user) {
        commit('USER_ADDING', user)
        // perform call to database and wait for results
        try {
            const docRef = await addDoc(collection(db, "users"), user);
            // on success... backend returns newly created user with all augmentations
            commit('USER_ADDED', user.id)
            console.log("Document written with ID: ", docRef.id);
          } catch (e) {
            // // on error... we revert everything
            commit('USER_ADD_FAILED', user)
            console.error("Error adding document: ", e);
          }
    },
    async updateUser({ commit }, user) { 
        try {
          const docRef = collection(db, "users").doc(user.id);
          await updateDoc(docRef, user);
          commit('USER_ADDED', user.id);
          console.log("User updated: ", user.id);
        } catch (e) {
          console.error("Error updating user: ", e);
        }
      },
    
      async deleteUser({ commit }, userId) {
        try {
          const docRef = collection(db, "users").doc(userId);
          await deleteDoc(docRef);
          commit('USER_DELETED', userId);
          console.log("User deleted: ", userId);
        } catch (e) {
          console.error("Error deleting user: ", e);
        }
      }
}

const getters = {
    users: state => state.users,
    currentUser: state => state.users[state.currentUserId] || {}
}

export default {
    state,
    mutations,
    actions,
    getters
}