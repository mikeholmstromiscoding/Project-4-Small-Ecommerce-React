import React from 'react';
import { Link } from 'react-router-dom'

const ProductCard = ({product}) => {

    const style = {
        marginTop: '5.5rem'
    }

    return (
        <div style={style} className="col mb-4 text-center">
            {/* <!-- Card --> */}
            <div className="card">
                {/* <!--Card image--> */}
                <div className="view overlay">
                    <img className="card-img-top" src={product.imageLink} alt="#"/>
                    <Link to={'/product/' + product._id}>
                        <div className="mask rgba-white-slight"></div>
                    </Link>
                </div>

                {/* <!--Card content--> */}
                <div className="card-body">
                    {/* <!--Title--> */}
                    <h4 className="card-title">{product.name}</h4>
                    {/* <!--Text--> */}
                    <p className="card-text">{product.description}</p>

                    {/* <!-- Provides extra visual weight and identifies the primary action in a set of buttons --> */}

                    <Link to={'/product/' + product._id} className="btn btn-light-blue btn-md">Visa Produkt</Link>
                </div>
            </div>
            {/* <!-- Card-- > */}
        </div>
    );
}

export default ProductCard;

/*

<script>
export default {
name: 'ProductCard',
props: ['product']
}
</script>

*/