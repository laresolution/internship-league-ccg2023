import { set } from 'vue';
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, addDoc } from "firebase/firestore";

  const firebaseConfig = {
    apiKey: "AIzaSyCb54FM0ibSDP40a47K-VtUsroV5ri7bGE",
    authDomain: "internship-league.firebaseapp.com",
    projectId: "internship-league",
    storageBucket: "internship-league.appspot.com",
    messagingSenderId: "119738330715",
    appId: "1:119738330715:web:7338ebe71884d60944d97e",
    measurementId: "G-WET57SG6NX"
};  
/* const firebaseConfig = {
    apiKey: "AIzaSyDy3z1VnrF995Dou415D5NZgGoLLp1LMWI",
    authDomain: "internship-league-ph-12387.firebaseapp.com",
    projectId: "internship-league-ph-12387",
    storageBucket: "internship-league-ph-12387.appspot.com",
    messagingSenderId: "657102248480",
    appId: "1:657102248480:web:333aadd607968845067a45",
    measurementId: "G-9HTYJC5RHE"
  };  // houzhihuil
  
  */ 
  
 

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

const members = collection(db, "members");

// state = private properties
// mutations = private methods

const state = () => ({
    members: {},
    currentMemberId: 1
})

const mutations = {
    MEMBER_ADDING(state, tempMember) {
        const id = tempMember.id;
        /* console.log(`member ${id} adding`) */
        set(state.members, id, { ...tempMember, loading: true })
    },
    MEMBER_ADDED(state, memberFromDatabase) {
        const id = memberFromDatabase.id;
        if (state.members[id]) {
            state.members[id].loading = false;
        }
        /* console.log(`member ${id} added`) */
    },
    MEMBER_ADD_FAILED(state, member) {
        const id = member.id;
        /* console.log(`member ${id} failed`) */
        delete state.members[id]
    },
    MEMBER_LOADED(state, member) {
        const id = member.id;
       /*  console.log(`member ${id} adding`) */
        set(state.members, id, member)
    },
    CLEAR_MEMBERS(state) {
        state.members = {}; 
      },  
}

// Actions = public methods
// Getters = public properties

const actions = {
    async loadMembers({ commit }) { 
        commit('CLEAR_MEMBERS'); // Clear existing members
         
        const querySnapshot = await getDocs(members);
        querySnapshot.forEach((doc) => {
          const member = { ...doc.data(), id: doc.id}
          commit('MEMBER_LOADED', member)
        });
    },
    async addMember({ commit }, member) {
        commit('MEMBER_ADDING', member)
        // perform call to database and wait for results
        try {
            const docRef = await addDoc(collection(db, "members"), member);
            // on success... backend returns newly created member with all augmentations
            commit('MEMBER_ADDED', member.id)
            console.log("Document written with ID: ", docRef.id);
          } catch (e) {
            // // on error... we revert everything
            commit('MEMBER_ADD_FAILED', member)
            console.error("Error adding document: ", e);
          }
    }
}

const getters = {
    members: state => state.members,
    currentMember: state => state.members[state.currentMemberId] || {}
}

export default {
    state,
    mutations,
    actions,
    getters
}