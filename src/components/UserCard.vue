<template>
  <Col :sm="24" :md="12" :lg="12" :xl="8" :xxl="6">
    <Card class="card" v-on:click="openCard(userData.id)">
      <CardMeta :title="userName" class="card__title">
        <Avatar slot="avatar" :src="userAvatar" :size="40" />
      </CardMeta>
      <div class="card__params">
        <div class="card__params__name">Репозитории:</div>
        <span>{{ userData?.public_repos }}</span>

        <div class="card__params__name">Подписчики:</div>
        <span>{{ userData?.followers }}</span>

        <div class="card__params__name">Подписки:</div>
        <span>{{ userData?.following }}</span>
      </div>
      <div class="card__open-icon"></div>
    </Card>
  </Col>
</template>

<script>
import { Col, Card, Avatar } from 'ant-design-vue'

const CardMeta = Card.Meta

export default {
  name: 'UserCard',
  components: { Col, Card, CardMeta, Avatar },
  props: ['userName', 'userAvatar', 'userData'],
  methods: {
    openCard(id) {
      console.log(id)
    },
  },
}
</script>

<style lang="scss" scoped>
.card {
  cursor: pointer;
  position: relative;
  box-shadow: none;
  transition: all 0.15s ease-in-out;

  // ::v-deep(.ant-card-body) {
  //   display: flex;
  //   flex-wrap: wrap;
  //   align-items: baseline;
  // }

  &:hover {
    box-shadow: 0px 0px 6px 2px rgb(219 216 216 / 60%);
  }

  &__title {
    display: flex;
    align-items: center;
  }

  &__params {
    display: grid;
    grid-template-columns: 90px 1fr;
    margin-top: 20px;
    margin-left: 56px;

    &__name {
      margin-bottom: 5px;
    }

    span {
      font-weight: 500;
      margin-left: 20px;
    }
  }

  &__loading {
    box-shadow: none !important;
    ::v-deep(.ant-card-body) {
      padding: 14px 24px;
    }
  }

  &__open-icon {
    position: absolute;
    right: 0;
    top: 0;
    margin: 18px 18px 0px 0px;
    width: 26px;
    height: 26px;
    background-image: url('../../public/svg/detail-icon.svg');
    background-size: contain;
    background-repeat: repeat;
    opacity: 0.1;
  }
}
</style>
