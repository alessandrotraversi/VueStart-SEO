import Vue from 'vue';
import Vuex from 'vuex';
import storeData from './store.data';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        storeData
    }
});