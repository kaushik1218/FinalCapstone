import React, { Fragment, useEffect } from 'react'
import Loader from './layout/Loader'
import MetaData from './layout/MetaData'
import { useAlert } from 'react-alert'
import { useDispatch, useSelector } from 'react-redux'
import { getCelebProducts, clearErrors } from '../actions/productActions'
import Products from './product/Products'

const Products1 = ({ match, col }) => {

    const dispatch = useDispatch();
    const alert = useAlert();
    const { loading, error, products } = useSelector(state => state.productCelebDetails)
    useEffect(() => {
        dispatch(getCelebProducts(match.params.celebid))

        if (error) {
            alert.error(error);
            dispatch(clearErrors())
        }
    }, [dispatch, alert, error, match.params.celebid])

    return (
        <Fragment>
            {loading ? <Loader /> : (
                <Fragment>
                   <MetaData title={'Choose your Product'} />
                <h1 id="products_heading">Choose Your Product</h1>

                <section id="products" className="container mt-5">
                    <div className="row">
                        {products && products.map(products => (
                            <Products key={products.celebid} products={products} />


                        ))}


                    </div>
                </section>
                </Fragment>
            )}
        </Fragment>
    )
}

export default Products1
