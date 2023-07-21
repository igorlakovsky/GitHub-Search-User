<template>
  <div class="not-found">
    <span>404</span>
    Страница не найдена
    <a href="/">Вернуться на главную</a>
  </div>
</template>

<script>
export default {
  name: 'NotFoundView',
}
</script>

<style lang="scss" scoped>
.not-found {
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 14px;

  font-size: 18px;

  span {
    font-size: 82px;
    font-weight: 600;
  }

  a {
    font-size: 16px;
  }
}
</style>
