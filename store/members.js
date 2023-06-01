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
        set(state.members, id, { ...tempMember, loading: true })
    },
    MEMBER_ADDED(state, memberIdFromDatabase) {
        const id = memberIdFromDatabase;
        if (state.members[id]) {
            state.members[id].loading = false;
        }
    },
    MEMBER_ADD_FAILED(state, member) {
        const id = member.id;
        delete state.members[id]
    },
    MEMBER_LOADED(state, member) {
        const id = member.id;
        set(state.members, id, member)
    },
}

// Actions = public methods
// Getters = public properties

const actions = {
    async loadMembers({ commit }) {
        const querySnapshot = await getDocs(members);
        querySnapshot.forEach((doc) => {
          const member = { ...doc.data(), id: doc.id}
          commit('MEMBER_LOADED', member)
        });
    },
    async addMember({ commit }, member) {
        member.id = v4()
        commit('MEMBER_ADDING', member)
        try {
            await setDoc(doc(db, "members", member.id), member);
            commit('MEMBER_ADDED', member.id)
          } catch (e) {
            commit('MEMBER_ADD_FAILED', member)
          }
    }
}

const getters = {
    members: state => state.members,
    currentMember: state => state.members[state.currentMemberId] || {}
}

export default {
    db,
    state,
    mutations,
    actions,
    getters
}