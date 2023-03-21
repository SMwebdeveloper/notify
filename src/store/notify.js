export default {
    state:{
        messages: [],
        messagesMain: []
    },
    mutations:{
        setMessage(state, payload){
            return state.messages = payload
        },
        setMessageMain(state, payload){
            return state.messagesMain = payload
        }
    },
    actions:{
        setMessage({commit}, payload){
            commit('setMessage', payload)
        },
        setMessageMain({commit}, payload){
            commit('setMessageMain', payload)
        }

    },
    getters:{
        getMessage (state) {
            return state.messages
        },
        getMessageMain (state) {
            return state.messagesMain
        }
    }
}