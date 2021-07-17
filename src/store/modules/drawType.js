const drawType = {
  state: () => ({
    isDisplay: [
      {id: 0, value: true},
      {id: 1, value: false},
      {id: 2, value: false},
      {id: 3, value: false},
      {id: 4, value: false},
      {id: 5, value: false},
      {id: 6, value: false},
      {id: 7, value: false},
    ],
    currentTypeId: 0,
  }),
  mutations: {
    drawTypeChange(state, id) {
      state.isDisplay[state.currentTypeId].value = false;
      state.isDisplay[id].value = true;
      state.currentTypeId = id;
    }
  },
  actions: {
    drawTypeChange(context, id) {
      context.commit('drawTypeChange', id);
    }
  }
}
export default drawType;