import Vue from 'vue'
import Vuex from 'vuex'
import drawType from './modules/drawType';
import canvasArea from './modules/canvasArea';
import shapes from "./modules/shapes";

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
    shapes
  }
})
