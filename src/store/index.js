import Vue from 'vue'
import Vuex from 'vuex'
import drawType from './modules/drawType';
import canvasArea from './modules/canvasArea';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {

  },
  mutations: {

  },
  actions: {

  },
  modules: {
    drawType,
    canvasArea,
  }
})
