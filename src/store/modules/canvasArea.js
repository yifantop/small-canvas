const canvasArea = {
  state: () => ({
    canvasAreaSize: {
      canvasAreaWidth: window.innerWidth - 360,
      canvasAreaHeight: window.innerHeight - 12,
    },
  }),
  mutations: {
    changeCanvasAreaWidth(state) {
      state.canvasAreaSize.canvasAreaWidth = window.innerWidth - 360;
    },
    changeCanvasAreaHeight(state) {
      state.canvasAreaSize.canvasAreaHeight = window.innerHeight - 12;
    }
  },
  actions: {
    changeCanvasAreaWidth(context) {
      context.commit('changeCanvasAreaWidth');
    },
    changeCanvasAreaHeight(context) {
      context.commit('changeCanvasAreaHeight');
    }
  }
};
export default canvasArea;