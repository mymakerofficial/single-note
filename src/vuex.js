import Vuex from "vuex";

const createStore = () => {
    return new Vuex.Store({
        state: {
            note: '',
            theme: ''
        },
        mutations: {
            initialiseStore(state) {
                if(localStorage && localStorage.getItem('note') != null){
                    state.note = localStorage.getItem('note')
                }

                if(localStorage && localStorage.getItem('theme') != null){
                    state.theme = localStorage.getItem('theme')
                }else {
                    state.theme = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
                }
                document.documentElement.className = state.theme
            },
            updateTheme(state, payload) {
                state.theme = payload
                localStorage.setItem('theme', payload);
                document.documentElement.className = payload
            },
            updateNote(state, payload) {
                state.note = payload
                localStorage.setItem('note', payload);
            },
        }
    });
}

export default createStore;
