import axios from 'axios'

export default {
  state: {},
  mutations: {},
  actions: {
    paymentTopup(context, payload) {
      console.log(payload)
      return new Promise((resolve, reject) => {
        axios
          .post(`${process.env.VUE_APP_URL}/payment/top-up`, payload)
          .then(response => {
            resolve(response.data)
          })
          .catch(error => {
            reject(error.response.data)
          })
      })
    }
  },
  getters: {}
}
