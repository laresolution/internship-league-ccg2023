import Vue from 'vue'

// state = private properties
// mutations = private methods

const state = () => ({
    users: {
    1: {
        name: 'Alex Vinet',
        id: 1,
        favoriteColor: 'blue'
    },
    2: {
        name: 'John Doe',
        id: 2,
        favoriteColor: 'red'
    },
    3: {
        name: 'Jane Doe',
        id: 3,
        favoriteColor: 'green'
    }},
    currentUserId: 1
})

const mutations = {
    USER_ADDING(state, { name, id, favoriteColor }) {
        console.log(`user ${id} adding`)
        Vue.set(state.users, id, { name, id, favoriteColor, loading: true })
    },
    USER_ADDED(state, userFromDatabase) {
        console.log(`user ${userFromDatabase.id} added`)
        // state.users[userFromDatabase.id] = Object.assign({}, state.users[userFromDatabase.id], userFromDatabase)
    },
    USER_ADD_FAILED(state, user) {
        console.log(`user ${user.id} failed`)
        // delete state.users[user.id]
    }
}

// Actions = public methods
// Getters = public properties

const actions = {
    addUser({ commit }, user) {
        commit('USER_ADDING', user)
        // perform call to database and wait for results
        // on success... backend returns newly created user with all augmentations
        const databaseUser = user; // should come from backend success instead
        commit('USER_ADDED', databaseUser)

        // on error... we revert everything
        commit('USER_ADD_FAILED', user)
    }
}

const getters = {
    users: state => state.users,
    currentUser: state => state.users[state.currentUserId]
}

export default {
    state,
    mutations,
    actions,
    getters
}