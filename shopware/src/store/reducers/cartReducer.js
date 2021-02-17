import actiontypes from '../actiontypes'
import jwt from 'jsonwebtoken'
const secretKey = 'c218b83b09494a81bf7afe03e160b1cf'

const initState = {
    shoppingCart: [],
    shoppingCartItemCount: 0,
    shoppingCartTotal: 0
}

export default (state = initState, action) => {
    let itemIndex

    switch (action.type) {
        case actiontypes().cart.add:
            try {
                itemIndex = state.shoppingCart.findIndex(product => product._id === action.product._id)

                itemIndex < 0
                    ? state.shoppingCart = [...state.shoppingCart, action.product]
                    : state.shoppingCart[itemIndex].quantity += 1

                state.shoppingCartItemCount = getshoppingCartItemCount(state.shoppingCart)
                state.shoppingCartTotal = getshoppingCartTotal(state.shoppingCart)

                localStorage.setItem('c_c218b83b09494a81bf7afe03e160b1cf', jwt.sign(state, secretKey))
            }
            catch { }

            return state

        case actiontypes().cart.deleteOneProduct:

            itemIndex = state.shoppingCart.findIndex(product => product._id === action.id)
            state.shoppingCart[itemIndex].quantity = 1

            state.shoppingCart = state.shoppingCart.filter(product => product._id !== action.id)
            state.shoppingCartItemCount = getshoppingCartItemCount(state.shoppingCart)
            state.shoppingCartTotal = getshoppingCartTotal(state.shoppingCart)
            localStorage.setItem('c_c218b83b09494a81bf7afe03e160b1cf', jwt.sign(state, secretKey))

            return state

        case actiontypes().cart.remove:

            try {
                itemIndex = state.shoppingCart.findIndex(product => product._id === action.id)

                state.shoppingCart[itemIndex].quantity === 1
                    ? state.shoppingCart = state.shoppingCart.filter(item => item._id !== action.id)
                    : state.shoppingCart[itemIndex].quantity -= 1

                state.shoppingCartItemCount = getshoppingCartItemCount(state.shoppingCart)
                state.shoppingCartTotal = getshoppingCartTotal(state.shoppingCart)

                localStorage.setItem('c_c218b83b09494a81bf7afe03e160b1cf', jwt.sign(state, secretKey))

            }
            catch { }

            return state

        case actiontypes().cart.clear:
            try {

                state.shoppingCart.forEach(product => {
                    product.quantity = 1
                })

                state.shoppingCart = []
                state.shoppingCartItemCount = 0
                state.shoppingCartTotal = 0

                localStorage.removeItem('c_c218b83b09494a81bf7afe03e160b1cf')
            }
            catch { }

            return state

        default:
            let cart = jwt.decode(localStorage.getItem('c_c218b83b09494a81bf7afe03e160b1cf'))

            if (cart)
                state = cart

            return state
    }
}

const getshoppingCartItemCount = (items) => {
    let total = 0

    items.forEach(product => {
        total += product.quantity
    });

    return total
}

const getshoppingCartTotal = (items) => {
    let total = 0

    items.forEach(product => {
        total += product.price * product.quantity
    });

    return total
}

