import React, { useContext, useEffect , Fragment } from 'react';
import Card from '../../../components/Card/Card'
import { CustomContext } from '../../../uilts/Context';

const HItSale = () => {
    const {hitSale , getHitSale} = useContext(CustomContext)
    useEffect(() => {
       getHitSale()
    }, []);
    return (
        <section className='hit__sale'>
            <div className="container">
                <h2>Хиты продаж</h2>
                <div className="hit__sale__row">
                    {
                        hitSale.map((item)=>(
                            <Fragment key={item.id}>
                                 <Card item={item}/>
                            </Fragment>  
                        ))
                    }
                    
                </div>
            </div>
        </section>
    );
}

export default HItSale;
