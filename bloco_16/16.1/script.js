const ESTADO_INICIAL = {
  colors: ['white', 'black', 'red', 'green', 'blue', 'yellow'],
  index: 0,
};

window.onload = function() {
  const NEXT_COLOR = 'NEXT_COLOR';
  const PREVIOUS_COLOR = 'PREVIOUS_COLOR';

  function backgroundColorReducer(state = ESTADO_INICIAL, action) {
    switch(action.type) {
      case NEXT_COLOR:
        return {...state, index: state.index === state.colors.length - 1 ? 0 : state.index + 1,};

      case PREVIOUS_COLOR:
        return;
      default:
        return {index: state.index === 0 ? state.colors.length - 1 : state.index - 1,};
    }
  }
}

const store = Redux.createStore(backgroundColorReducer);
