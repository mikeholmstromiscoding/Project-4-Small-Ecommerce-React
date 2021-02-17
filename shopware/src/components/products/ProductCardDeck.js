import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../../store/actions/productsActions'
import ProductCard from './ProductCard'

const ProductCardDeck = () => {
    const dispatch = useDispatch()
    const products = useSelector(state => state.products.products)

    useEffect(() => {
        dispatch(getProducts())
    }, [dispatch]);


    return (
         <div className="row row-cols-1 row-cols-md-3">
             {
                    products.map((product) => {
                     return <ProductCard product={product} key={product._id} />
                 })
             }
        </div>
        
    );
}

export default ProductCardDeck;
