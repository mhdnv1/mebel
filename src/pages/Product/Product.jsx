import React, { useState , useEffect } from 'react';
import ProductSlider from '../../components/ProductSlider/ProductSlider';
import ProductInfo from '../../components/ProductInfo/ProductInfo';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Product = () => {
    const params = useParams()
    
    const [product , setProduct ] = useState({})
    
    useEffect(() => {
       axios(`http://localhost:8080/product/${params.id}`)
       .then((res)=>setProduct(res.data))
       .catch((err)=>console.log(err))
    }, []);
    console.log(product);
    return (
        <section className='product'>
            <div className="container">
                <div className="product__row">
                    <ProductSlider/>
                    <ProductInfo product={product}/>
                </div>
            </div>
        </section>
    );
}

export default Product;
