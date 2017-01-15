import _ from 'lodash';

const savedData = localStorage.user || {};

const initialState = {
    fetched: false,
    user_id: 0,
    scripts: [],
    ...savedData
};

export default function (store=initialState, action) {

    return store;
}