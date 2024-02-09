import React from 'react';

const ProductInfo = ({product}) => {
    const colors = ['red','green','blue']
    return (
        <div className='product__info'>
            <h2 className='product__title'>{product.title}</h2>
            <p className='product__info__category'>{product.category}</p>
            <div className="product__info__row">
                <p className='product__info__price'>{product.price}₽</p>
                <button className='product__info__btn'>Купить</button>
                <p> 
                    <span>
                    <svg width="19" height="17" viewBox="0 0 19 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.29442 8.54442L9.75 16L17.2056 8.54442C18.0344 7.71562 18.5 6.59152 18.5 5.41942C18.5 2.97864 16.5214 1 14.0806 1C12.9085 1 11.7844 1.46562 10.9556 2.29442L9.75 3.5L8.54442 2.29442C7.71562 1.46562 6.59152 1 5.41942 1C2.97864 1 1 2.97864 1 5.41942C1 6.59152 1.46561 7.71561 2.29442 8.54442Z" stroke="black" stroke-linejoin="round"/>
</svg>

                    </span>
                     Добавить в желаемое</p>
            </div>
            <div className='product__info__selects'>
                <ul className='product__info__colors'>
                    <li>Цвет</li>
                          {
                            colors.map((item,idx)=>(
                                <li key={idx} style={{background: item}}>ss</li>
                            ))
                          }
                </ul>
                <ul className='product__info__count'>
                    <li>Количество</li>
                    <li>1</li>
                </ul>
                <ul className='product__info__sizes'>
                    <li>Размер (Д × Ш × В)</li>
                    <li>{product.width} СМ x {product.height} СМ x {product.deep} СМ</li>
                </ul>
            </div>
            <div className="product__info__description">
                <h2>Описание</h2>
                <p>{product.description}</p>
            </div>
        </div>
    );
}

export default ProductInfo;
