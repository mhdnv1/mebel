import React,{Fragment,useEffect, useState} from 'react';
import Card from '../../components/Card/Card';
import axios from 'axios';

const Catalog = () => {
    const [product , setProduct]=useState([])
    useEffect(()=>{
        axios('http://localhost:8080/product')
        .then((res)=> setProduct(res.data))
    })
    return (
        <main>
            <section className='hit__sale'>
                <div className="container">
                    <h2>Хиты продаж</h2>
                    <div className="hit__sale__row">
                        {
                            product.map((item) => (
                                <Fragment key={item.id}>
                                    <Card item={item} />
                                </Fragment>
                            ))
                        }

                    </div>
                </div>
            </section>

        </main>
    );
}

export default Catalog;
