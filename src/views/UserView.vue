<template>
  <Modal :visible="visible" v-on:cancel="closeModal" :footer="null">
    <pre>{{ userId }}</pre>
    <p>Какой-то текст!!1</p>
    <p>Какой-то текст!!1</p>
    <p>Какой-то текст!!1</p>
  </Modal>
</template>

<script>
import { Modal } from 'ant-design-vue'

export default {
  name: 'UserView',
  components: { Modal },
  props: ['userId'],
  data() {
    return {
      visible: true,
    }
  },
  methods: {
    closeModal() {
      console.log(this.$route.params.id)
      this.visible = false
    },
  },
}
</script>
