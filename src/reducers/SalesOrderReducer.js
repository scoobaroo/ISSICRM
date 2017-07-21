const initialState = {
    salesorders: [],
    salesorderdetail: {
      quantity: 0,
      priceperunit: 0,
      amount: 0,
      salesorderdetailid: '',
      salesorderid: '',
      product: '',
      devicespa: ''
    }
};

export default (state = initialState, action) => {
    switch (action.type) {
        case 'INITIAL_SALESORDER_FETCH':
            return {
                ...state,
                people: action.payload,
            }
        case 'SELECTED_SALESORDER':
            return {
                ...state,
                personSelected: action.payload
            }
        default:
            return state;
    }
}
