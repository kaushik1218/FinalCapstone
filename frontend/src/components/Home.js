import React, { Fragment, useEffect } from 'react'
import MetaData from './layout/MetaData'
import Loader from './layout/Loader'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../actions/productActions'
import Celebrity from './product/Celebrity'

import { useAlert } from 'react-alert';

const Home = () => {
    
    const alert = useAlert();
    const dispatch = useDispatch();
    const { loading, home, error, celebrityCount } = useSelector(state => state.home)

    useEffect(() => {

        if(error) {
            
            return alert.error(error)
        }
        dispatch(getProducts());
         
        
    }, [dispatch, alert, error])

    return (
        <Fragment>
            {loading ? <Loader/> : (
            <Fragment>
                <MetaData title={'Choose your Celeb'} />
                <h1 id="products_heading">Choose Your Celebrity</h1>

                <section id="products" className="container mt-5">
                    <div className="row">
                        {home && home.map(homes => (
                            <Celebrity key={homes._id} homes={homes} />


                        ))}


                    </div>
                </section>
            </Fragment>
            )}

        </Fragment>
    )
}

export default Home
