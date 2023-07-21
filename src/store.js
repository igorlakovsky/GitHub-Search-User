import axios from 'axios'
import { notification } from 'ant-design-vue'

export default {
  state: {
    searchName: '',
    currentPage: 1,
    sortUp: true,
    usersInfo: {},
    usersData: null,
    userData: {},
  },
  mutations: {
    setSearchName(state, name) {
      state.searchName = name
    },
    setCurrentPage(state, page) {
      state.currentPage = page
    },
    setUserData(state, data) {
      state.userData = data
    },
    switchSort(state) {
      state.sortUp = !state.sortUp
    },
  },
  actions: {
    async getUserData({ commit, state }, login) {
      const userData = state.usersData?.find((user) => {
        return user.login === login
      })
      if (userData) {
        commit('setUserData', userData)
      } else {
        try {
          const responce = await axios.get(
            `https://api.github.com/users/${login}`,
            {
              headers: {
                Authorization: process.env.GITHUB_TOKEN,
              },
            }
          )
          commit('setUserData', responce.data)
        } catch (error) {
          notification.error({
            message: 'Ошибка запроса',
            description: error.response?.data.message ?? error.message,
          })
        }
      }
    },
  },
}
