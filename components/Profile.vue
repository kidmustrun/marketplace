<template>
  <div class="container">
    <h2><b>Мои данные</b></h2>
    <p>
      <span class="info">Имя: </span>{{ user.first_name }}
      {{ user.second_name }} {{ user.last_name }}
    </p>
    <p><span class="info">Email: </span>{{ user.email }}</p>
  </div>
</template>

<script>
export default {
  name: 'Profile',
  computed: {
    user() {
      return this.$store.getters.USER
    },
  },
}
</script>
<style scoped>
h2 {
  color: #555;
}
.info {
  color: #555;
}
</style>
