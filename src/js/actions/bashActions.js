import axios from 'axios'
import _ from 'lodash'

const get = (method, config) => {
    return axios.get(`http://pidev.in:8080/api/${method}`, config)
};

export function fetchScripts() {
    return (dispatcher) => {

    }
}
