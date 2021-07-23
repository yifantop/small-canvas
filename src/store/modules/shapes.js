const shapes = {
  state: () => ({
    shapesInfo: [],
  }),
  mutations: {
    addShapeToShapesInfo(state, shape) {
      state.shapesInfo.push(shape);
    }
  },
  actions: {
    addShapeToShapesInfo(context, shape) {
      context.commit('addShapeToShapesInfo', shape);
    }
  }
}
export default shapes;