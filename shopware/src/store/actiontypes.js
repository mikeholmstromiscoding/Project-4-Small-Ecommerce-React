export default () => {
    return {
        cart: {
            add: 'ADD_TO_CART',
            remove: 'REMOVE_FROM_CART',
            deleteOneProduct: 'DELETE_ONE_PRODUCT',
            // checkout: 'CHECKOUT_CART',
            clear: 'CLEAR_CART'
        },
        products: {
            set: 'SET_PRODUCTS'
        },
        product: {
            set: 'SET_PRODUCT'
        }
    }
}
