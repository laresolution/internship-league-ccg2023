import { v4 } from 'uuid';
import { set } from 'vue';

import { collection, getDocs, setDoc, doc } from "firebase/firestore";
import { db } from './firebase';
const contactforms = collection(db, "contactforms");

const state = () => ({
  contactforms: {},
  currentContactFormId: 1
});

const mutations = {
    CONTACTFORM_ADDING(state, tempContactForm) {
        const id = tempContactForm.id;
        set(state.contactforms, id, { ...tempContactForm, loading: true })
    },
    CONTACTFORM_ADDED(state, contactformIdFromDatabase) {
        const id = contactformIdFromDatabase;
        if (state.contactforms[id]) {
            state.contactforms[id].loading = false;
        }
    },
    CONTACTFORM_ADD_FAILED(state, contactform) {
        const id = contactform.id;
        delete state.contactforms[id]
    },
    CONTACTFORM_LOADED(state, contactform) {
        const id = contactform.id;
        set(state.contactforms, id, contactform)
    },
}

const actions = {
    async loadContactForms({ commit }) {
        const querySnapshot = await getDocs(contactforms);
        querySnapshot.forEach((doc) => {
          const contactform = { ...doc.data(), id: doc.id}
          commit('CONTACTFORM_LOADED', contactform)
        });
    },
    async addContactForm({ commit }, contactform) {
        contactform.id = v4()
        commit('CONTACTFORM_ADDING', contactform)
        try {
            await setDoc(doc(db, "contactforms", contactform.id), contactform);
            commit('CONTACTFORM_ADDED', contactform.id)
          } catch (e) {
            commit('CONTACTFORM_ADD_FAILED', contactform)
          }
    }
}

const getters = {
    contactforms: state => state.contactforms,
    currentContactForm: state => state.contactforms[state.currentContactFormId] || {}
}


export default {
  state,
  mutations,
  actions,
  getters
};
