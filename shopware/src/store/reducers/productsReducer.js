import actiontypes from '../actiontypes'

const initState = {
    products: []
    
}

export default (state = initState, action) => {
    switch (action.type) {
        case actiontypes().products.set:
           state.products = action.payload
            return state

        default:
            return state
    }
}
