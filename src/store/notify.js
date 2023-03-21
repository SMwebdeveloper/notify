import loadMore from "@/assets/js/loadMore"

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
        },
        loadMessages(state, payload) {
           return  state.messagesMain = [...state.messagesMain, ...payload]
        }
    },
    actions:{
        setMessage({commit}, payload){
            commit('setMessage', payload)
        },
        setMessageMain({commit}, payload){
            commit('setMessageMain', payload)
        },
        loadMessages({commit, getters}) {
            let res = getters.getMessageFilter
            commit('loadMessages', loadMore(res))
        }

    },
    getters:{
        getMessage (state) {
            return state.messages
        },
        getMessageFilter (state) {
           return state.messages.filter(mes => {
            return mes.main === false
           })
        },
        getMessageMain (state) {
            return state.messagesMain
        }
    }
}