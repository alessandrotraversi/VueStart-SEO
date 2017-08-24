<template>
  <div class="container">
    <p>{{msg}}</p>
    <router-view></router-view>
  </div>
</template>

<script>
console.log('App.vue caricato');
export default {
  name: 'app',
  data () {
    return {
      msg: 'Dummy text'
    }
  }
}
</script>

<style lang="scss">
@import './app.scss';

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
