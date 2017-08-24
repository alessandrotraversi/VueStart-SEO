// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import AppComponent from './App.vue';
import newFilter from './filters/filters';
import newEvent from './events/event';
import NewModel from './models/new.model';
import newService from './services/new.service';
import store from './store/store';
import router from './router/router';

Vue.config.productionTip = false;

/* eslint-disable no-new */
let myVue = new Vue({
  router,
  el: '#app',
  components: {
    'app': AppComponent
  },
  store,
  newFilter,
  newEvent,
  NewModel,
  newService
})
