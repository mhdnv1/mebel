import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CustomContext } from "../../uilts/Context";
import { MdFavorite } from "react-icons/md";
import { MdFavoriteBorder } from "react-icons/md";

const Card = ({ item }) => {
  const { favorites, favoritesHandler, user, addCarts , addCartsPlus , removeCartsMinus } = useContext(CustomContext)
  const navigate = useNavigate()
  return (
    <div className="col-3">
      <div className="card__content">
        <span onClick={() => favoritesHandler(item)} className="card__content-favourites">
          {
            favorites.some(el => el.id === item.id) ? <MdFavorite /> : <MdFavoriteBorder />
          }
        </span>
        <Link to={`/product/${item.id}`}>
          <img src={`${item?.images[0]}`} alt="" />
        </Link>
        <h3 className="card__content-title">{item.title}</h3>
        <p className="card__content-text">{item.category}</p>
        <h4 className="card__content-price">{item.price}₽</h4>
        {
          user.carts?.some(el => el.id === item.id) 
          ?
            <div className="card__sizes__count"
              style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <button style={{ padding: "10px 20px", background: "black", color: 'white', fontSize: "20px" }}
              onClick={()=> addCartsPlus(item.id)}>+</button>
              <span>{user.carts.find(el=>el.id == item.id).count}</span>
              <button onClick={()=> removeCartsMinus(item.id)} style={{ padding: "10px 20px", background: "black", color: 'white', fontSize: "20px" }}>-</button>
            </div> :
            <button  style={{ background: 'green', color: "white", padding: '10px 20px' }}
            type="button"
              onClick={() => {
                if ('id' in user) {
                  addCarts(item)
                } else {
                  navigate('/login')
                }
              }}> Добавить в корзину</button>
        }
      </div>
    </div>
  );
};

export default Card;
