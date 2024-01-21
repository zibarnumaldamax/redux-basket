export const increaseCount = itemId => {
    return {
      type: 'INCREASE_COUNT',
      payload: itemId
    };
  };
  
  export const decreaseCount = itemId => {
    return {
      type: 'DECREASE_COUNT',
      payload: itemId
    };
  };
  
  export const removeItem = itemId => {
    return {
      type: 'REMOVE_ITEM',
      payload: itemId
    };
  };
  
  export const addItem = newItem => {
    return {
      type: 'ADD_ITEM',
      payload: newItem
    };
  };