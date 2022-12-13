import { combineReducers } from "redux"

export const updateProductReducer = (products = [], action) => {
    if (action.type === 'add') {
        console.log("qwertyuio")
        return [...products, action.payload]
    }
    else if(action.type === 'delete'){
        return products.filter(product => product.id !== action.payload)
    }
    return products
}

export default combineReducers({
    products: updateProductReducer
})