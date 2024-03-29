import React, { useContext } from "react";
import image from "../Cart/image 2.png";
import { CustomContext } from "../../uilts/Context";
import { useForm } from "react-hook-form";


const Room = () => {
  const { user , addorders} = useContext(CustomContext);
  const {
    register,
    handleSubmit,
    formState:{
      errors
    }
  } = useForm()
  const submitForm=(data)=>{
      let order = {
        ...data,
        order:user.carts,
        tatlPrice:user.carts?.reduce((acc, rec) => acc + rec.price * rec.count, 0)
      }
      addorders(order)
  }  
  return (
    <section className="room">
      <div className="container">
        <div className="room__bonus">
          <div className="room__bonus-head">
            <h3 className="room__bonus-title">Бонусная программа</h3>
            <div>
              <p className="room__bonus-count">
                У вас <span>0</span> бонусных баллов
              </p>
              <a href="#" className="room__bonus-rules">
                Правила бонусной программы
              </a>
            </div>
          </div>
          <div className="room__bonus-return">
            <p className="room__bonus-text">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="27"
                  height="25"
                  viewBox="0 0 27 25"
                  fill="none"
                >
                  <path
                    d="M13.5564 11.8937C12.228 11.8937 11.1475 10.9293 11.1475 9.74363C11.1475 8.55801 12.2284 7.59318 13.5564 7.59318C14.8844 7.59318 15.9654 8.55801 15.9654 9.74363C15.9654 10.1751 16.3124 10.5252 16.7399 10.5252C17.1675 10.5252 17.5145 10.1751 17.5145 9.74363C17.5145 7.94488 16.1439 6.44156 14.331 6.10236V4.34503C14.331 3.91361 13.984 3.56348 13.5564 3.56348C13.1289 3.56348 12.7819 3.91361 12.7819 4.34503V6.10236C10.969 6.44117 9.59837 7.94449 9.59837 9.74363C9.59837 11.7909 11.3741 13.4568 13.5564 13.4568C14.8848 13.4568 15.9654 14.4216 15.9654 15.6076C15.9654 16.7937 14.8848 17.7585 13.5564 17.7585C12.0863 17.7585 10.9907 16.9719 10.766 15.755C10.6874 15.3306 10.2823 15.05 9.8625 15.1301C9.4419 15.2091 9.16461 15.6174 9.24284 16.0418C9.56196 17.7683 10.9438 18.9949 12.7819 19.2645V20.6553C12.7819 21.0867 13.1289 21.4369 13.5564 21.4369C13.984 21.4369 14.331 21.0867 14.331 20.6553V19.2493C16.1435 18.9105 17.5145 17.4068 17.5145 15.6076C17.5141 13.5596 15.7384 11.8937 13.5564 11.8937Z"
                    fill="black"
                  />
                  <path
                    d="M19.7743 22.3173C19.5633 21.9426 19.09 21.8101 18.7182 22.0234C14.4945 24.4416 9.14253 23.7077 5.70381 20.2376C2.44053 16.9449 1.69849 12.059 3.47304 8.03867L4.60856 9.18443C4.7565 9.3341 4.9548 9.41342 5.15657 9.41342C5.2561 9.41342 5.35719 9.39389 5.45285 9.35403C5.74254 9.23289 5.93115 8.94801 5.93115 8.63187V4.211C5.93115 4.1598 5.92572 4.10861 5.91604 4.05781C5.91139 4.03476 5.90287 4.01326 5.89629 3.99099C5.88854 3.96442 5.88235 3.93784 5.87189 3.91205C5.86105 3.88587 5.84633 3.86203 5.83278 3.83702C5.82193 3.81709 5.81341 3.79638 5.80063 3.77723C5.7437 3.69165 5.67089 3.61779 5.58569 3.56035C5.56748 3.54824 5.54812 3.54003 5.52914 3.52948C5.50397 3.51541 5.47918 3.49978 5.45207 3.48845C5.42729 3.47829 5.40172 3.47243 5.37655 3.46461C5.3537 3.45758 5.33163 3.44859 5.30761 3.4439C5.25843 3.43413 5.20886 3.42905 5.1589 3.42866C5.15812 3.42866 5.15696 3.42827 5.15618 3.42827H0.774806C0.46149 3.42827 0.179158 3.61858 0.0590994 3.91049C-0.0609596 4.20279 0.00526652 4.53886 0.227182 4.76238L2.31079 6.86477C-0.0311388 11.5541 0.732979 17.4306 4.60856 21.3415C6.99076 23.7452 10.1758 25 13.3911 25C15.4801 25 17.5811 24.4705 19.4827 23.3814C19.8549 23.17 19.9854 22.6928 19.7743 22.3173Z"
                    fill="black"
                  />
                  <path
                    d="M26.517 20.2376L24.433 18.1348C26.7745 13.4455 26.0108 7.56895 22.1352 3.65805C18.2058 -0.306789 12.0898 -1.1454 7.26109 1.61779C6.88891 1.83077 6.75839 2.30791 6.96946 2.68344C7.18092 3.05898 7.6538 3.19068 8.02559 2.9777C12.2505 0.559566 17.602 1.29423 21.04 4.76317C24.3033 8.05625 25.0453 12.9422 23.2712 16.9621L22.1352 15.8163C21.9133 15.5924 21.5806 15.526 21.291 15.6467C21.0016 15.7679 20.813 16.0527 20.813 16.3689V20.7898C20.813 20.8409 20.8185 20.8921 20.8281 20.9429C20.8328 20.9664 20.8413 20.9879 20.8479 21.0105C20.8556 21.0367 20.8615 21.0633 20.8719 21.0887C20.8828 21.1157 20.8979 21.1399 20.9118 21.1653C20.9223 21.1844 20.9308 21.2048 20.9432 21.2231C21.0001 21.3091 21.0729 21.3826 21.1581 21.44C21.1767 21.4525 21.1965 21.4607 21.2154 21.4717C21.2406 21.4857 21.2646 21.501 21.2913 21.5119C21.3165 21.5225 21.3428 21.5283 21.3688 21.5361C21.3913 21.5428 21.4126 21.5514 21.4358 21.5561C21.4858 21.5662 21.5365 21.5713 21.5876 21.5713H25.9694C26.2827 21.5713 26.565 21.381 26.6851 21.0891C26.8051 20.7968 26.7389 20.4607 26.517 20.2376Z"
                    fill="black"
                  />
                </svg>
              </span>
              Возвращаем до 7% на бонусный счет
            </p>
            <p className="room__bonus-text">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  viewBox="0 0 25 25"
                  fill="none"
                >
                  <path
                    d="M14.069 6.27603H10.1465C9.74199 6.27603 9.41406 6.60396 9.41406 7.00845V12.5521H8.57749C8.173 12.5521 7.84507 12.88 7.84507 13.2845C7.84507 13.689 8.173 14.0169 8.57749 14.0169H9.41406V15.6901H8.57749C8.173 15.6901 7.84507 16.018 7.84507 16.4225C7.84507 16.827 8.173 17.1549 8.57749 17.1549H9.41406V18.776C9.41406 19.1805 9.74199 19.5084 10.1465 19.5084C10.551 19.5084 10.8789 19.1805 10.8789 18.776V17.1549H14.069C14.4735 17.1549 14.8015 16.827 14.8015 16.4225C14.8015 16.018 14.4735 15.6901 14.069 15.6901H10.8789V14.0169H14.069C16.2032 14.0169 17.9395 12.2806 17.9395 10.1464C17.9395 7.95952 16.1581 6.27603 14.069 6.27603ZM14.069 12.5521H10.8789V7.74087H14.069C15.3875 7.74087 16.4747 8.80435 16.4747 10.1465C16.4746 11.4729 15.3955 12.5521 14.069 12.5521Z"
                    fill="black"
                  />
                  <path
                    d="M12.5 0C5.60747 0 0 5.60747 0 12.5C0 19.3925 5.60747 25 12.5 25C19.3925 25 25 19.3925 25 12.5C25 5.60747 19.3925 0 12.5 0ZM12.5 23.5352C6.41519 23.5352 1.46484 18.5848 1.46484 12.5C1.46484 6.41519 6.41519 1.46484 12.5 1.46484C18.5848 1.46484 23.5352 6.41519 23.5352 12.5C23.5352 18.5848 18.5848 23.5352 12.5 23.5352Z"
                    fill="black"
                  />
                </svg>
              </span>
              1 бонус = 1 рубль
            </p>
            <p className="room__bonus-text">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M21.4286 12H2.57143M21.4286 12C22.2964 12 23 11.2964 23 10.4286V8.85714C23 7.98927 22.2964 7.28571 21.4286 7.28571H2.57143C1.70355 7.28571 1 7.98927 1 8.85714V10.4286C1 11.2964 1.70355 12 2.57143 12M21.4286 12V19.8571C21.4286 21.5929 20.0215 23 18.2857 23H5.71429C3.97853 23 2.57143 21.5929 2.57143 19.8571L2.57143 12M12 7.28571V5.71429M12 7.28571H6.83673C5.34895 7.28571 4.14286 6.07962 4.14286 4.59184V4.14286C4.14286 2.40711 5.54996 1 7.28571 1C9.88934 1 12 3.11066 12 5.71429M12 7.28571H17.1633C18.6511 7.28571 19.8571 6.07962 19.8571 4.59184V4.14286C19.8571 2.40711 18.45 1 16.7143 1C14.1107 1 12 3.11066 12 5.71429M12 7.28571V23"
                    stroke="black"
                    stroke-width="1.3"
                  />
                </svg>
              </span>
              Оплачивайте бонусами до 20% от покупки
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            <form className="room__form" onSubmit={handleSubmit(submitForm)}>
              <h2 className="room__form-data">Личные данные</h2>
              <div className="room__form-inputs">
                <label>
                  <p className="room__form-text">Имя</p>
                  <input
                    {...register('username')}
                    defaultValue={user.username}
                    type="text"
                    className="room__form-input"
                  />
                </label>
                <label>
                  <p className="room__form-text">Email</p>
                  <input
                    {...register('email')}
                    defaultValue={user.email}
                    type="email"
                    className="room__form-input"
                  />
                </label>
                <label>
                  <p className="room__form-text">Фамилия</p>
                  <input
                  {...register('surname')}
                    defaultValue={user.surname}
                    type="text"
                    className="room__form-input"
                  />
                </label>
                <label>
                  <p className="room__form-text">Номер телефона</p>
                  <input
                  {...register('phone')}
                    defaultValue={user.phone}
                    type="tel"
                    className="room__form-input"
                  />
                </label>
              </div>
              <label>
                <p className="room__form-text">Город</p>
                <input {...register('city')} className="room__form-input width" type="text" />
              </label>
              <label>
                <p className="room__form-text">Улица</p>
                <input {...register('street')} className="room__form-input width" type="text" />
              </label>
              <div className="room__form-address">
                <label>
                  <p className="room__form-text">Дом/Корпус</p>
                  <input {...register('house')} className="room__form-input width" type="text" />
                </label>
                <label>
                  <p className="room__form-text">Квартира</p>
                  <input {...register('apartament')} className="room__form-input width" type="text" />
                </label>
              </div>
              <div className="room__form-change">
                <button>Оформить</button>
              </div>
            </form>
          </div>
          <div className="col-6">
            <div className="room__orders">
              <h3 className="room__orders-title">Мои заказы</h3>
              <table cellSpacing={0} className="room__table">
                <tr>
                  <th className="room__orders-td">
                    <p className="room__orders-text">Товар</p>
                  </th>
                  <th className="room__orders-td">
                    <p className="room__orders-text">Товар</p>
                  </th>
                  <th className="room__orders-td">
                    <p className="room__orders-text">Товар</p>
                  </th>
                  <th className="room__orders-td">
                    <p className="room__orders-text">Товар</p>
                  </th>
                </tr>
                {user.carts?.map((item) => (
                  <tr>
                    <td className="room__orders-td">
                      <div>
                        <img src={image} alt="" />
                        <h3 className="roow__orders-sTitle">
                          {item.title}
                        </h3>
                      </div>
                    </td>
                    <td className="room__orders-td">
                      <p className="room__orders-text">{item.price}p</p>
                    </td>
                    <td className="room__orders-td">
                      <p className="room__orders-text">{item.count}</p>
                    </td>
                    <td className="room__orders-td">
                      <p className="room__orders-text">Ожидается</p>
                    </td>
                  </tr>
                ))}
              </table>
              <a href="#" className="room__orders-more">
             { user.carts?.reduce((acc, rec) => acc + rec.price * rec.count, 0)}p
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Room;
