
import { combineReducers } from 'redux'

// REDUCERS
import cartReducer from './cartReducer'
import productsReducer from './productsReducer'
import productReducer from './productReducer'

export default combineReducers({
    cart: cartReducer,
    products: productsReducer,
    product: productReducer
})
