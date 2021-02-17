import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getProduct } from '../store/actions/productsActions';
import { addToCart } from '../store/actions/cartActions'

const Product = ({ match }) => {
    const id = match.params.id
    const dispatch = useDispatch()
    const product = useSelector(
    state => state.product.product
    )
    
    useEffect(() => {
        dispatch(getProduct(id))
    },  [dispatch, id]);

    
    const addProductToCart = () => {
        dispatch(addToCart(product))
    }

    const style = {
        marginTop: '8.5rem'
    }

    return (

        <div>
            {/* här ska en if sats göras som ska kapsla in nedan kod */}
            
                <div style={style} className="container  py-5 z-depth-1" >
                    {/*<!-- Section Content -->*/}

                    <section className="text-center">

                        {/*<!-- Section heading -->*/}

                        <h3 className="font-weight-bold mb-5">Produktinformation</h3>

                        <div className="row">

                            <div className="col-lg-6">

                                {/*<!-- Carousel Wrapper -->*/}

                                <div id="carousel-thumb" className="carousel slide carousel-fade carousel-thumbnails" data-ride="carousel">

                                    {/*<!-- Slides-->*/}

                                    <div className="carousel-inner text-center text-md-left" role="listbox">
                                        <div className="carousel-item active">
                                            <img src={product.imageLink} alt="" className="img-fluid" />
                                        </div>
                                    </div>

                                    {/*<!-- Slides-->*/}

                                    {/*<!-- Thumbnails -->*/}

                                    <a className="carousel-control-prev" href="#carousel-thumb" role="button" data-slide="prev">
                                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span className="sr-only">Previous</span>
                                    </a>
                                    <a className="carousel-control-next" href="#carousel-thumb" role="button" data-slide="next">
                                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span className="sr-only">Next</span>
                                    </a>
                                    {/*<!-- Thumbnails -->*/}

                                </div>

                                {/*<!-- Carousel Wrapper -->*/}

                            </div>

                            <div className="col-lg-5 text-center text-md-left">

                                <h2 className="h2-responsive text-center text-md-left product-name font-weight-bold dark-grey-text mb-1 ml-xl-0 ml-4">
                                    <strong>{product.name}</strong>
                                </h2>
                                <span className="badge badge-danger product mb-4 ml-xl-0 ml-4">bestseller</span>
                                <h3 className="h3-responsive text-center text-md-left mb-5 ml-xl-0 ml-4">
                                    <span className="red-text font-weight-bold">
                                        <strong>{product.price} SEK</strong>
                                    </span>
                                </h3>

                                {/*<!-- Accordion wrapper -->*/}

                                <div className="accordion md-accordion" id="accordionEx" role="tablist" aria-multiselectable="true">

                                    {/*<!-- Accordion card  -->*/}

                                    <div className="card">

                                        {/*<!--Card header-->*/}

                                        <div className="card-header" role="tab" id="headingOne1">
                                            <a data-toggle="collapse" data-parent="#accordionEx" href="#collapseOne1" aria-expanded="true"
                                                aria-controls="collapseOne1">
                                                <h5 className="mb-0">
                                                    Beskrivning
                                                    <i className="fas fa-angle-down rotate-icon"></i>
                                                </h5>
                                            </a>
                                        </div>

                                        {/*<!--Card body -->*/}

                                        <div id="collapseOne1" className="collapse show" role="tabpanel" aria-labelledby="headingOne1"
                                            data-parent="#accordionEx">
                                            <div className="card-body"> {product.description}</div>
                                        </div>
                                    </div>
                                    {/* <!-- Accordion card --> */}

                                    {/* <!-- Accordion card --> */}
                                    <div className="card">

                                        {/* <!-- Card header --> */}
                                        <div className="card-header" role="tab" id="headingTwo2">
                                            <a className="collapsed" data-toggle="collapse" data-parent="#accordionEx" href="#collapseTwo2"
                                                aria-expanded="false" aria-controls="collapseTwo2">
                                                <h5 className="mb-0">
                                                    Details
                                                <i className="fas fa-angle-down rotate-icon"></i>
                                                </h5>
                                            </a>
                                        </div>

                                        {/* <!-- Card body --> */}
                                        <div id="collapseTwo2" className="collapse" role="tabpanel" aria-labelledby="headingTwo2"
                                            data-parent="#accordionEx">
                                            <div className="card-body">
                                                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.
                                                3 wolf moon officia aute,
                                                non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf
                                                moon
                                                tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!-- Accordion card --> */}

                                    {/* <!-- Accordion card --> */}
                                    <div className="card">
                                        {/* <!-- Card header --> */}
                                        <div className="card-header" role="tab" id="headingThree3">
                                            <a className="collapsed" data-toggle="collapse" data-parent="#accordionEx" href="#collapseThree3"
                                                aria-expanded="false" aria-controls="collapseThree3">
                                                <h5 className="mb-0">
                                                    Shipping
                                                    <i className="fas fa-angle-down rotate-icon"></i>
                                                </h5>
                                            </a>
                                        </div>
                                        <div id="collapseThree3" className="collapse" role="tabpanel" aria-labelledby="headingThree3"
                                            data-parent="#accordionEx">
                                            <div className="card-body">
                                                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.
                                                3 wolf moon officia aute,
                                                non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf
                                                moon
                                                tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <section className="color">
                                    <div className="mt-5">
                                        <p className="grey-text"></p>
                                        <div className="row text-center text-md-left">

                                            <div className="col-md-4 col-12">
                                                {/* <!--Radio group--> */}
                                                <div className="form-group"></div>
                                            </div>
                                            <div className="col-md-4">
                                                {/* <!--Radio group--> */}
                                                <div className="form-group"></div>
                                            </div>
                                            <div className="col-md-4">
                                                {/* <!--Radio group--> */}
                                                <div className="form-group"></div>
                                            </div>
                                        </div>
                                        <div className="row mt-3">
                                            <div className="col-md-12 text-center text-md-left text-md-right">
                                                <button onClick={addProductToCart} className="btn btn-primary btn-rounded">
                                                    <i className="fas fa-cart-plus mr-2" aria-hidden="true"></i> Lägg till varukorgen
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                                {/* <!-- /.Add to Cart --> */}
                            </div>
                        </div>
                    </section>
                    {/* <!--Section: Content--> */}
                </div>
            

        </div>
    );
}

export default Product;

/* <script>

import {mapActions, mapGetters} from 'vuex'

export default {

name: 'Product',

props: ['id'],

data() {
return {
    quantity: 1
}
},
methods: {
    // Hämtar från mina actions i store modules/products
    ...mapActions(['getProductById', 'addProductToCart'])
},
created() {
    this.getProductById(this.id)
},
computed: {
    // Hämtar product från mina actions i store modules/products
    ...mapGetters(['product'])
}

}
</script>

*/
