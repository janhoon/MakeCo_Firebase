export var itemsReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return [
        ...state,
        action.item
      ]
    default:
      return state;
  }
}

export var usersReducer = (state = undefined, action) => {
  switch (action.type) {
    case 'REGISTER_USER':
    default:
      return state;
  }
}
