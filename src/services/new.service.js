
import Vue from 'vue';
import VueResource from 'vue-resource';

Vue.use(VueResource);

const NewService = Vue.resource('http://localhost:8000/api/NewModel');

export default NewService;