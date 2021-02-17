import React from 'react';
import ProductCardDeck from '../components/products/ProductCardDeck';


const Products = () => {

    return (
        <div>
            <ProductCardDeck />
        </div>
    )
}

export default Products;

/*

<template>
  <div>
   <app-product-card-deck></app-product-card-deck>
  </div>
</template>

<script>

import appProductCardDeck from '@/components/products/ProductCardDeck.vue'

export default {
  name: 'Products',
  components:{
    appProductCardDeck
  }

}
</script>

*/


