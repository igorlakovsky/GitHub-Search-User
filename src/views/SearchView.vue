<!-- eslint-disable vue/no-use-v-if-with-v-for -->

<template>
  <Row type="flex" justify="center">
    <Col span="12" class="search">
      <Row>
        <Col span="6">
          <img class="search__logo" src="svg/logo.svg" />
        </Col>
        <Col span="24">
          <Search
            size="large"
            placeholder="Введите логин"
            enter-button="Поиск"
            v-on:search="fetchUsers"
          ></Search>
        </Col>
      </Row>
    </Col>
    <Col span="16" class="users">
      <Row :gutter="[16, 16]">
        <Col span="8" v-for="index in 3" :key="index" v-if="true">
          <Card>
            <Skeleton active avatar></Skeleton>
          </Card>
        </Col>
        <Col span="8" v-for="user in usersData" :key="user.id">
          <Card>
            <CardMeta :title="user.login" class="users__card">
              <Avatar slot="avatar" :src="user.avatar_url" :size="40" />
            </CardMeta>
          </Card>
        </Col>
      </Row>
    </Col>
  </Row>
</template>

<script>
import axios from 'axios'

import { Col, Row, Input, Skeleton, Card, Avatar } from 'ant-design-vue'

const Search = Input.Search
const CardMeta = Card.Meta

export default {
  name: 'SearchView',
  components: { Col, Row, Search, Skeleton, Card, CardMeta, Avatar },
  data: function () {
    return {
      loading: false,
      usersData: null,
    }
  },
  methods: {
    async fetchUsers(username) {
      if (username) {
        try {
          this.loading = true
          const response = await axios.get(
            `https://api.github.com/search/users?q=${username}`
          )
          this.usersData = response.data.items
        } catch (error) {
          console.log(error)
        } finally {
          this.loading = false
        }
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.search {
  margin-top: 10vh;

  &__logo {
    width: -webkit-fill-available;
    margin-bottom: 24px;
  }
}

.users {
  margin-top: 60px;

  &__card {
    display: flex;
    align-items: center;
  }
}
</style>
