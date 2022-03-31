import { createStore } from 'vuex'

export default createStore({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
    async fetchCurrency() {
      const key = process.env.VUE_APP_FIXER2;
      // const res = fetch(`http://data.fixer.io/api/latest?access_key=${key}&symbols=USD,EUR,RUB`);
      const res = fetch(`http://api.currencylayer.com/live?access_key=${key}&currencies=USD,EUR,RUB`)
    return (await res).json();
    }
  },
  modules: {
  }
})
