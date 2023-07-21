export default {
  state: {
    searchName: '',
    currentPage: 1,
    sortUp: true,
    usersInfo: {},
    usersData: null,
  },
  mutations: {
    setSearchName(state, name) {
      state.searchName = name
    },
    setCurrentPage(state, page) {
      state.currentPage = page
    },
    switchSort(state) {
      state.sortUp = !state.sortUp
    },
  },
}
