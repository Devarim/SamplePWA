<template>
  <div id="app">
    <img src="dist/img/icon.png" width="200px"> <br>
    {{msg}}
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Simply Sample of PWA'
    }
  }
}
</script>

<style scoped>
#app {
  text-align: center;

}
</style>
