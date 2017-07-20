export const selectPerson = (peopleId) => {
    return {
        type: 'SELECTED_PERSON',
        payload: peopleId,
    };
};

export const noneSelected = () => {
    return {
        type: 'NONE_SELECTED',
    };
};

export const formUpdate = ({ prop, value }) => {
    return {
        type: 'FORM_UPDATE',
        payload: { prop, value },
    };
};

export const updateContact = (personSelected) => {
    return {
        type: 'UPDATE_CONTACT',
        payload: personSelected,
    };
};

export const loadInitialSalesOrders = () => {
    return {
        type: 'LOAD_SALES_ORDERS'
    };
}
