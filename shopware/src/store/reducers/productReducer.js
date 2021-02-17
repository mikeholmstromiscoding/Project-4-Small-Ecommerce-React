import actiontypes from '../actiontypes'

const initState = {
    product: {}
    
}

export default (state = initState, action) => {
    switch (action.type) {
        case actiontypes().product.set:
            state.product = action.payload
            return state

        default:
            return state
    }
}
