import React, { useContext } from "react";
import img from "./image 2.png";
import { CustomContext } from "../../uilts/Context";
import { Link } from "react-router-dom";

const Cart = () => {
  const { user, addCartsPlus , removeCartsMinus } = useContext(CustomContext);
  return (
    <div className="cart">
      <div className="container">
        <div className="cart__nav">
          <h3 className="cart__nav-title">Ваша корзина</h3>
          <h3 className="cart__nav-count">
            <span>{user.carts?.reduce((acc, res) => acc + res.count, 0)}</span>{" "}
            предмета
          </h3>
        </div>
        <div className="cart__container">
          {user.carts?.map((item) => (
            <div className="cart__product">
              <img src={img} alt="" />
              <div>
                <div className="cart__product-nav">
                  <h3 className="cart__product-title">{item.title}</h3>
                  <h3 className="cart__product-price">
                    {item.price}₽ <br /> {item.price * item.count}₽
                  </h3>
                </div>
                <div className="cart__product-feature">
                  <p className="cart__product-text">
                    Цвет: <span>Темно-синий</span>
                  </p>
                  <p className="cart__product-text">
                    Количество: <span>{item.count}</span>
                  </p>
                  <p className="cart__product-text">
                    Размер(Ш×Д×В): <span>218 СМ × 95 СМ × 90 СМ</span>
                  </p>
                </div>
              </div>
              <div
                className="card__sizes__count"
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <button
                  style={{
                    padding: "10px 20px",
                    background: "black",
                    color: "white",
                    fontSize: "20px",
                  }}
                  onClick={() => addCartsPlus(item.id)}
                >
                  +
                </button>
                <span>{user.carts.find((el) => el.id == item.id).count}</span>
                <button
                  onClick={() => removeCartsMinus(item.id)}
                  style={{
                    padding: "10px 20px",
                    background: "black",
                    color: "white",
                    fontSize: "20px",
                  }}
                >
                  -
                </button>
              </div>
              <button className="cart__delete">&times;</button>
            </div>
          ))}
        </div>
        <div className="cart__total">
          <p className="cart__total-price">
            Итоговая стоимость:{" "}
            <h3>
              {user.carts?.reduce((acc, rec) => acc + rec.price * rec.count, 0)}
              ₽
            </h3>
          </p>
          <Link to={'/room'}><button className="cart__total-btn">Оформить заказ</button></Link>     
        </div>
      </div>
    </div>
  );
};

export default Cart;
