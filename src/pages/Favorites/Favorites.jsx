import React, { useContext ,Fragment } from 'react';
import Card from '../../components/Card/Card'
import { CustomContext } from '../../uilts/Context';

const Favorites = () => {
    const {favorites}=useContext(CustomContext)
    console.log(favorites);
    if (favorites.length) {
          return (
        <section className='hit__sale'>
        <div className="container">
            <h2>Избранные товары</h2>
            <div className="hit__sale__row">
                {
                    favorites.map((item)=>(
                        <Fragment key={item.id}>
                             <Card item={item}/>
                        </Fragment>  
                    ))
                }     
            </div>
        </div>
    </section>
    );
    }else{
        return <h2 style={{textAlign:"center"}}>Список избранных пуст</h2>
    }
  
}

export default Favorites;
