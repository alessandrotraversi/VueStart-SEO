<template lang="pug">
  <div class="hello">
    img(src="../assets/logo.png")/
    p.myclass
      | aaa
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <router-view></router-view>
    <ul>
      <li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>
      <li><a href="https://gitter.im/vuejs/vue" target="_blank">Gitter Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>
      <br>
      <li><a href="http://vuejs-templates.github.io/webpack/" target="_blank">Docs for This Template</a></li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
      <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
      <li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
    </ul>
  </div>
</template>

<script>

$(document).ready(function(){
  $('.myclass').css('color','#f00');
});

console.log('componente home.vue caricato');

export default {
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  metaInfo:{
    // if no subcomponents specify a metaInfo.title, this title will be used
    title: 'Default Title',
    // all titles will be injected into this template
    titleTemplate: '%s | My Awesome Webapp',
    //OUTPUT => <title>Default Title | My Awesome Webapp</title>

    htmlAttrs: {
      foo: 'bar',
      amp: undefined
    },
    //OUTPUT => <html foo="bar" amp></html>

    meta: [
      { 
        charset: 'utf-8' 
      },
      { 
        name: 'viewport', 
        content: 'width=device-width, initial-scale=1' 
      }
    ],
    //OUTPUT => <meta charset="utf-8">
    //          <meta name="viewport" content="width=device-width, initial-scale=1">

    link: [
      { 
        rel: 'stylesheet', 
        href: '/css/index.css' 
      },
      { 
        rel: 'favicon', 
        href: 'favicon.ico' 
      }
    ],
    //OUTPUT => <link rel="stylesheet" href="/css/index.css">
    //          <link rel="favicon" href="favicon.ico">


  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
