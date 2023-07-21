<template>
  <Row type="flex" justify="center">
    <Col span="16" class="user">
      <div class="user__breadcrumbs" v-on:click="routeBack">
        <Icon type="left"></Icon>
        Вернуться назад
      </div>
      <Row type="flex" class="user__header">
        <Col span="4" class="user__avatar__contaner">
          <Avatar :src="userData.avatar_url" class="user__avatar"></Avatar>
        </Col>
        <Col span="20" push="2" class="user__login">
          {{ userData.login }}
        </Col>
      </Row>
      <div class="user__description">
        <div class="user__description__option">Репозитории:</div>
        <span>{{ userData?.public_repos }}</span>

        <div class="user__description__option">Подписчики:</div>
        <span>{{ userData?.followers }}</span>

        <div class="user__description__option">Подписки:</div>
        <span>{{ userData?.following }}</span>

        <div class="user__description__option">Ссылка на GitHub:</div>
        <span>
          <a :href="userData?.html_url">{{ userData?.html_url }}</a>
        </span>
      </div>
    </Col>
  </Row>
</template>

<script>
import { Col, Row, Avatar, Icon } from 'ant-design-vue'

export default {
  name: 'UserView',
  components: { Col, Row, Avatar, Icon },
  props: ['userName'],
  data() {
    return {
      visible: true,
    }
  },
  computed: {
    userData() {
      return this.$store.state.userData
    },
  },
  methods: {
    closeModal() {
      this.$router.push({ path: `/` })
      this.visible = false
    },
    routeBack() {
      this.$router.go(-1)
    },
  },
  mounted() {
    this.$store.dispatch('getUserData', this._props.userName)
  },
}
</script>

<style scoped lang="scss">
.user {
  margin-top: 15vh;

  &__breadcrumbs {
    cursor: pointer;
    display: flex;
    gap: 10px;
    align-items: center;
    margin-bottom: 40px;
  }

  &__header {
    align-items: center;
    font-size: 40px;
    font-weight: 500;
    border-bottom: 1px solid #c5c5c5;
    padding-bottom: 32px;
    color: #4c4c4c;
    flex-wrap: nowrap;
  }

  &__avatar {
    width: 100%;
    height: auto;

    &__contaner {
      min-width: 60px;
    }
  }

  &__description {
    display: grid;
    grid-template-columns: 200px 1fr;
    margin-top: 20px;
    font-size: 20px;
    gap: 6px;

    span {
      font-weight: 500;
    }

    &__option {
    }
  }
}

@media screen and (max-width: 660px) {
  .user {
    &__description {
      grid-template-columns: 140px 1fr;
      font-size: 16px;
    }
  }
}

@media screen and (max-width: 480px) {
  .user {
    &__header {
      font-size: 34px;
    }

    &__description {
      grid-template-columns: 1fr;
      font-size: 16px;
      gap: 0px;

      span {
        margin-bottom: 10px;
      }
    }
  }
}
</style>
