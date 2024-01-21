const defaultState = [
    { id: 1, title: 'Велосипед', count: 5 },
    { id: 2, title: 'Самокат', count: 4 },
    { id: 3, title: 'Гантели', count: 7 },
    { id: 4, title: 'Ракетки', count: 1 }
  ];
  
  const cartReducer = (state = defaultState, action) => {
    switch (action.type) {
      case 'INCREASE_COUNT':
        return state.map(item =>
          item.id === action.payload ? { ...item, count: Math.min(item.count + 1, 25) } : item
        );
      case 'DECREASE_COUNT':
        return state.map(item =>
          item.id === action.payload ? { ...item, count: Math.max(item.count - 1, 0) } : item
        ).filter(item => item.count !== 0);
      case 'REMOVE_ITEM':
        return state.filter(item => item.id !== action.payload);
      case 'ADD_ITEM':
        return [...state, action.payload];
      default:
        return state;
    }
  };
  
  export default cartReducer;