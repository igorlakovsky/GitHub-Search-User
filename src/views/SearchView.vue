<!-- eslint-disable vue/no-use-v-if-with-v-for -->

<template>
  <div>
    <Row type="flex" justify="center">
      <Col span="12" class="search">
        <Row>
          <Col span="6">
            <img class="search__logo" src="svg/logo.svg" />
          </Col>
          <Col span="24">
            <Search
              :defaultValue="searchName"
              size="large"
              placeholder="Введите логин"
              enter-button="Поиск"
              :loading="loading"
              v-on:search="searchUsers($event, currentPage)"
            ></Search>
          </Col>
        </Row>
      </Col>
      <Col span="16" class="users">
        <div v-if="usersData" class="users__filter" v-on:click="switchSort">
          Сортировать по репозиториям
          <Icon :type="sortUp ? 'down' : 'up'"></Icon>
        </div>
        <Row :gutter="[16, 16]">
          <UserCard
            v-for="(user, index) in usersInfo.items"
            :key="user.id"
            v-bind:user-name="user.login"
            v-bind:user-avatar="user.avatar_url"
            v-bind:user-data="usersData[index]"
          ></UserCard>
        </Row>
      </Col>
      <Col v-if="usersData" span="16" class="users__pagination">
        <Pagination
          :total="usersInfo.total_count"
          :defaultPageSize="12"
          v-on:change="changePage"
        >
        </Pagination>
      </Col>
    </Row>
    <router-view></router-view>
  </div>
</template>

<script>
import axios from 'axios'

import { Col, Row, Input, Pagination, Icon } from 'ant-design-vue'
import UserCard from '../components/UserCard.vue'

const Search = Input.Search

export default {
  name: 'SearchView',
  components: { Col, Row, Search, UserCard, Pagination, Icon },
  data: function () {
    return {
      loading: false,
    }
  },
  computed: {
    searchName() {
      return this.$store.state.searchName
    },
    usersData() {
      return this.$store.state.usersData
    },
    usersInfo() {
      return this.$store.state.usersInfo
    },
    currentPage() {
      return this.$store.state.currentPage
    },
    sortUp() {
      return this.$store.state.sortUp
    },
  },
  methods: {
    async fetchUsers() {
      if (this.$store.state.searchName) {
        try {
          this.loading = true
          const response = await axios.get(
            `https://api.github.com/search/users?sort=repositories&per_page=12
            &q=${this.$store.state.searchName}
            &page=${this.$store.state.currentPage}
            &order=${this.$store.state.sortUp ? 'desc' : 'asc'}`,
            {
              headers: {
                Authorization: `Bearer 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`,
              },
            }
          )
          this.$store.state.usersInfo = response.data
          this.$store.state.usersData = []
          this.$store.state.usersInfo.items.forEach(async (user) => {
            const response = await axios.get(user.url, {
              headers: {
                Authorization: `Bearer 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`,
              },
            })
            this.$store.state.usersData.push(response.data)
          })
        } catch (error) {
          console.log(error)
        } finally {
          this.loading = false
        }
      }
    },

    searchUsers($event) {
      this.$store.commit('setSearchName', $event)
      this.fetchUsers()
    },

    changePage($event) {
      this.$store.commit('setCurrentPage', $event)
      this.fetchUsers()
    },

    switchSort() {
      this.$store.commit('switchSort')
      this.fetchUsers()
    },
  },
}
</script>

<style lang="scss" scoped>
.search {
  margin-top: 10vh;

  &__logo {
    min-width: 120px;
    width: -webkit-fill-available;
    margin-bottom: 24px;
  }
}

.users {
  &__filter {
    cursor: pointer;
    margin-top: 40px;
    margin-bottom: 20px;

    ::v-deep(svg) {
      margin-left: 6px;
      width: 12px;
      height: 12px;
    }
  }

  &__pagination {
    display: flex;
    justify-content: center;
    margin-bottom: 40px;
    margin-top: 20px;
  }
}
</style>
