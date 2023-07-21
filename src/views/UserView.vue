<template>
  <Row type="flex" justify="center">
    <Col span="12" class="user">
      <div>
        <pre>{{ userId }}</pre>
        <p>Какой-то текст!!1</p>
        <p>Какой-то текст!!1</p>
        <p>Какой-то текст!!1</p>
      </div>
    </Col>
  </Row>
</template>

<script>
import { Col, Row } from 'ant-design-vue'

export default {
  name: 'UserView',
  components: { Col, Row },
  props: ['userId'],
  data() {
    return {
      visible: true,
    }
  },
  methods: {
    closeModal() {
      this.$router.push({ path: `/` })
      this.visible = false
    },
  },
}
</script>

<style scoped lang="scss">
.user {
  margin-top: 10vh;
}
</style>
