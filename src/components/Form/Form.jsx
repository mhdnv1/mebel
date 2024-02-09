import React , {useState , useRef, useContext} from 'react';
import { Link , useLocation} from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { FaEyeSlash } from "react-icons/fa";
import { IoEyeSharp } from "react-icons/io5";
import { CustomContext } from '../../uilts/Context';

const Form = () => {
    const {registerUser , loginUser} =useContext(CustomContext)
    const [eyes , setEyes] = useState(false)
    const location = useLocation()
    const {
        register,
        handleSubmit,
        formState:{
            errors
        },
        reset,
        watch
    } = useForm(
        {mode:"onBlur"}
    )
 
    const submitForm=(data)=>{
        let {confirm ,...user} = data
        if (location.pathname == '/login') {
            loginUser(user)
        }else{
            registerUser(user)
        }
    }

    const password = useRef()
    password.current = watch('password', '')
    
    return (
        <div className='form'>
            <div className="form__left">
                <span className='form__logo'>Your Logo</span>
                <form className='form__content' onSubmit={handleSubmit(submitForm)}>
                    <h2>{
                        location.pathname == '/login' ? 'Sign in' :"Sign up"
                        }</h2>
                    {
                        location.pathname == '/login' ?
                        <p>If you don’t have an account register <br />
                        You can <Link to={'/register'}>Register here !</Link>
                        </p> : 
                        <p>If you don’t have an account login <br />
                        You can <Link to={'/login'}>Login here !</Link>
                        </p>
                    }
                  
                    <label htmlFor="">
                        <span>Email</span>
                        <div>
                            <span>
                                <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.49414 2.6765H15.5059C16.3297 2.6765 17 3.34677 17 4.17064V12.8294C17 13.6533 16.3297 14.3236 15.5059 14.3236H1.49414C0.670271 14.3236 0 13.6533 0 12.8294V4.17064C0 3.34677 0.670271 2.6765 1.49414 2.6765ZM1.68914 3.67259L1.88856 3.83864L7.90719 8.85035C8.25071 9.13637 8.74936 9.13637 9.09281 8.85035L15.1114 3.83864L15.3109 3.67259H1.68914ZM16.0039 4.39171L11.1001 8.47513L16.0039 11.7388V4.39171ZM1.49414 13.3275H15.5059C15.7465 13.3275 15.9478 13.1559 15.9939 12.9287L10.3014 9.14015L9.73018 9.61582C9.37377 9.91259 8.93685 10.061 8.49997 10.061C8.06308 10.061 7.62619 9.91259 7.26976 9.61582L6.69853 9.14015L1.00605 12.9286C1.05221 13.1559 1.25348 13.3275 1.49414 13.3275ZM0.996094 11.7388L5.89993 8.47516L0.996094 4.39171V11.7388Z" fill="#000842" />
                                </svg>

                            </span>
                            <input {...register('email', {
                                required:{
                                    message:"Email обязательно к заполнению",
                                    value:true
                                },
                                minLength:{
                                    message:'Минимум 10 символов',
                                    value:10
                                },
                                pattern:{
                                    message:"Напишите правильно саой email",
                                    value:/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
                                }
                            })} type="text" placeholder='Enter your email address' />
                        </div>
                        <p>
                            {errors.email && errors.email ?.message}
                        </p>
                    </label>

                    {
                        location.pathname == '/register' ? <label htmlFor="">
                        <span>Username</span>
                        <div>
                            <span>
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.88599 7.70726C8.94482 7.70726 9.86157 7.3275 10.6108 6.57823C11.3599 5.82909 11.7397 4.91247 11.7397 3.85351C11.7397 2.79492 11.36 1.87817 10.6107 1.12878C9.86145 0.37976 8.9447 0 7.88599 0C6.82703 0 5.9104 0.37976 5.16125 1.1289C4.41211 1.87805 4.03223 2.79479 4.03223 3.85351C4.03223 4.91247 4.41211 5.82921 5.16125 6.57836C5.91064 7.32738 6.82739 7.70726 7.88599 7.70726ZM5.82434 1.79187C6.39917 1.21704 7.07349 0.93762 7.88599 0.93762C8.69836 0.93762 9.3728 1.21704 9.94775 1.79187C10.5226 2.36682 10.8021 3.04125 10.8021 3.85351C10.8021 4.66601 10.5226 5.34032 9.94775 5.91527C9.3728 6.49022 8.69836 6.76964 7.88599 6.76964C7.07373 6.76964 6.39941 6.4901 5.82434 5.91527C5.24939 5.34044 4.96985 4.66601 4.96985 3.85351C4.96985 3.04125 5.24939 2.36682 5.82434 1.79187Z" fill="black"/>
<path d="M14.629 12.3032C14.6074 11.9914 14.5637 11.6513 14.4994 11.2922C14.4344 10.9304 14.3508 10.5883 14.2507 10.2757C14.1472 9.9526 14.0067 9.63351 13.8328 9.32773C13.6525 9.01034 13.4406 8.73398 13.2028 8.50656C12.9541 8.26865 12.6497 8.07736 12.2976 7.93784C11.9468 7.79904 11.558 7.72873 11.1421 7.72873C10.9788 7.72873 10.8208 7.79575 10.5157 7.99436C10.328 8.11679 10.1084 8.25839 9.86328 8.41501C9.65369 8.54855 9.36975 8.67368 9.01904 8.78696C8.67688 8.89767 8.32947 8.95383 7.98645 8.95383C7.64368 8.95383 7.29626 8.89767 6.95386 8.78696C6.60352 8.6738 6.31946 8.54868 6.11023 8.41513C5.86743 8.25998 5.64771 8.11838 5.45715 7.99423C5.15234 7.79563 4.99438 7.72861 4.83105 7.72861C4.41504 7.72861 4.02637 7.79904 3.67566 7.93796C3.32385 8.07724 3.01929 8.26853 2.77039 8.50668C2.53259 8.73422 2.32068 9.01047 2.1405 9.32773C1.9668 9.63351 1.82617 9.95248 1.72266 10.2758C1.62268 10.5885 1.53906 10.9304 1.47412 11.2922C1.40967 11.6508 1.36609 11.9911 1.34448 12.3036C1.32324 12.6091 1.3125 12.9271 1.3125 13.2484C1.3125 14.0836 1.578 14.7597 2.10156 15.2584C2.61865 15.7504 3.30273 16 4.13489 16H11.839C12.6709 16 13.355 15.7504 13.8722 15.2584C14.3959 14.7601 14.6614 14.0837 14.6614 13.2483C14.6613 12.9259 14.6504 12.6079 14.629 12.3032ZM13.2257 14.5791C12.884 14.9043 12.4304 15.0623 11.8389 15.0623H4.13489C3.54321 15.0623 3.0896 14.9043 2.74805 14.5792C2.41296 14.2602 2.25012 13.8248 2.25012 13.2484C2.25012 12.9486 2.26001 12.6526 2.27979 12.3684C2.29907 12.0896 2.3385 11.7833 2.39697 11.4579C2.45471 11.1364 2.5282 10.8348 2.6156 10.5617C2.69946 10.2999 2.81384 10.0406 2.95569 9.79086C3.09106 9.55282 3.24683 9.3486 3.4187 9.18405C3.57947 9.03012 3.7821 8.90414 4.02087 8.80966C4.2417 8.72226 4.48987 8.67441 4.75928 8.66721C4.79211 8.68466 4.85059 8.71799 4.94531 8.77975C5.13806 8.90536 5.36023 9.04868 5.60583 9.20554C5.88269 9.38205 6.23938 9.54147 6.66553 9.67904C7.1012 9.81991 7.54553 9.89145 7.98657 9.89145C8.42761 9.89145 8.87207 9.81991 9.3075 9.67917C9.73401 9.54135 10.0906 9.38205 10.3678 9.20529C10.6191 9.04465 10.8351 8.90549 11.0278 8.77975C11.1226 8.71811 11.181 8.68466 11.2139 8.66721C11.4834 8.67441 11.7316 8.72226 11.9525 8.80966C12.1912 8.90414 12.3938 9.03024 12.5546 9.18405C12.7264 9.34848 12.8822 9.5527 13.0176 9.79098C13.1595 10.0406 13.274 10.3 13.3578 10.5616C13.4453 10.835 13.5189 11.1366 13.5765 11.4577C13.6349 11.7838 13.6744 12.0902 13.6937 12.3685V12.3687C13.7136 12.6518 13.7236 12.9477 13.7238 13.2484C13.7236 13.8249 13.5608 14.2602 13.2257 14.5791Z" fill="black"/>
</svg>

                            </span>
                            <input {...register('username', {
                                required:{
                                    message:"Username обязательно к заполнению",
                                    value:true
                                },
                                minLength:{
                                    message:'Минимум 2 символов',
                                    value:2
                                },
                                pattern:{
                                    message:"Напишите правильно саой Username",
                                    value:/^[a-zA-Z\-]+$/
                                }
                            })} type="text" placeholder='Username your email address' />
                        </div>
                        <p>
                            {errors.username && errors.username ?.message}
                        </p>
                    </label> : ''
                    }
                    {
                        location.pathname == '/register' ? <label htmlFor="">
                        <span>Surname</span>
                        <div>
                            <span>
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.88599 7.70726C8.94482 7.70726 9.86157 7.3275 10.6108 6.57823C11.3599 5.82909 11.7397 4.91247 11.7397 3.85351C11.7397 2.79492 11.36 1.87817 10.6107 1.12878C9.86145 0.37976 8.9447 0 7.88599 0C6.82703 0 5.9104 0.37976 5.16125 1.1289C4.41211 1.87805 4.03223 2.79479 4.03223 3.85351C4.03223 4.91247 4.41211 5.82921 5.16125 6.57836C5.91064 7.32738 6.82739 7.70726 7.88599 7.70726ZM5.82434 1.79187C6.39917 1.21704 7.07349 0.93762 7.88599 0.93762C8.69836 0.93762 9.3728 1.21704 9.94775 1.79187C10.5226 2.36682 10.8021 3.04125 10.8021 3.85351C10.8021 4.66601 10.5226 5.34032 9.94775 5.91527C9.3728 6.49022 8.69836 6.76964 7.88599 6.76964C7.07373 6.76964 6.39941 6.4901 5.82434 5.91527C5.24939 5.34044 4.96985 4.66601 4.96985 3.85351C4.96985 3.04125 5.24939 2.36682 5.82434 1.79187Z" fill="black"/>
<path d="M14.629 12.3032C14.6074 11.9914 14.5637 11.6513 14.4994 11.2922C14.4344 10.9304 14.3508 10.5883 14.2507 10.2757C14.1472 9.9526 14.0067 9.63351 13.8328 9.32773C13.6525 9.01034 13.4406 8.73398 13.2028 8.50656C12.9541 8.26865 12.6497 8.07736 12.2976 7.93784C11.9468 7.79904 11.558 7.72873 11.1421 7.72873C10.9788 7.72873 10.8208 7.79575 10.5157 7.99436C10.328 8.11679 10.1084 8.25839 9.86328 8.41501C9.65369 8.54855 9.36975 8.67368 9.01904 8.78696C8.67688 8.89767 8.32947 8.95383 7.98645 8.95383C7.64368 8.95383 7.29626 8.89767 6.95386 8.78696C6.60352 8.6738 6.31946 8.54868 6.11023 8.41513C5.86743 8.25998 5.64771 8.11838 5.45715 7.99423C5.15234 7.79563 4.99438 7.72861 4.83105 7.72861C4.41504 7.72861 4.02637 7.79904 3.67566 7.93796C3.32385 8.07724 3.01929 8.26853 2.77039 8.50668C2.53259 8.73422 2.32068 9.01047 2.1405 9.32773C1.9668 9.63351 1.82617 9.95248 1.72266 10.2758C1.62268 10.5885 1.53906 10.9304 1.47412 11.2922C1.40967 11.6508 1.36609 11.9911 1.34448 12.3036C1.32324 12.6091 1.3125 12.9271 1.3125 13.2484C1.3125 14.0836 1.578 14.7597 2.10156 15.2584C2.61865 15.7504 3.30273 16 4.13489 16H11.839C12.6709 16 13.355 15.7504 13.8722 15.2584C14.3959 14.7601 14.6614 14.0837 14.6614 13.2483C14.6613 12.9259 14.6504 12.6079 14.629 12.3032ZM13.2257 14.5791C12.884 14.9043 12.4304 15.0623 11.8389 15.0623H4.13489C3.54321 15.0623 3.0896 14.9043 2.74805 14.5792C2.41296 14.2602 2.25012 13.8248 2.25012 13.2484C2.25012 12.9486 2.26001 12.6526 2.27979 12.3684C2.29907 12.0896 2.3385 11.7833 2.39697 11.4579C2.45471 11.1364 2.5282 10.8348 2.6156 10.5617C2.69946 10.2999 2.81384 10.0406 2.95569 9.79086C3.09106 9.55282 3.24683 9.3486 3.4187 9.18405C3.57947 9.03012 3.7821 8.90414 4.02087 8.80966C4.2417 8.72226 4.48987 8.67441 4.75928 8.66721C4.79211 8.68466 4.85059 8.71799 4.94531 8.77975C5.13806 8.90536 5.36023 9.04868 5.60583 9.20554C5.88269 9.38205 6.23938 9.54147 6.66553 9.67904C7.1012 9.81991 7.54553 9.89145 7.98657 9.89145C8.42761 9.89145 8.87207 9.81991 9.3075 9.67917C9.73401 9.54135 10.0906 9.38205 10.3678 9.20529C10.6191 9.04465 10.8351 8.90549 11.0278 8.77975C11.1226 8.71811 11.181 8.68466 11.2139 8.66721C11.4834 8.67441 11.7316 8.72226 11.9525 8.80966C12.1912 8.90414 12.3938 9.03024 12.5546 9.18405C12.7264 9.34848 12.8822 9.5527 13.0176 9.79098C13.1595 10.0406 13.274 10.3 13.3578 10.5616C13.4453 10.835 13.5189 11.1366 13.5765 11.4577C13.6349 11.7838 13.6744 12.0902 13.6937 12.3685V12.3687C13.7136 12.6518 13.7236 12.9477 13.7238 13.2484C13.7236 13.8249 13.5608 14.2602 13.2257 14.5791Z" fill="black"/>
</svg>

                            </span>
                            <input {...register('surname', {
                                required:{
                                    message:"Surname обязательно к заполнению",
                                    value:true
                                },
                                minLength:{
                                    message:'Минимум 2 символов',
                                    value:2
                                },
                                pattern:{
                                    message:"Напишите правильно саой Surname",
                                    value:/^[a-zA-Z\-]+$/
                                }
                            })} type="text" placeholder='Surname your email address' />
                        </div>
                        <p>
                            {errors.surname && errors.surname ?.message}
                        </p>
                    </label> : ""
                    }
                    {
                        location.pathname == '/register' ?  <label htmlFor="">
                        <span>Phone</span>
                        <div>
                            <span>
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.88599 7.70726C8.94482 7.70726 9.86157 7.3275 10.6108 6.57823C11.3599 5.82909 11.7397 4.91247 11.7397 3.85351C11.7397 2.79492 11.36 1.87817 10.6107 1.12878C9.86145 0.37976 8.9447 0 7.88599 0C6.82703 0 5.9104 0.37976 5.16125 1.1289C4.41211 1.87805 4.03223 2.79479 4.03223 3.85351C4.03223 4.91247 4.41211 5.82921 5.16125 6.57836C5.91064 7.32738 6.82739 7.70726 7.88599 7.70726ZM5.82434 1.79187C6.39917 1.21704 7.07349 0.93762 7.88599 0.93762C8.69836 0.93762 9.3728 1.21704 9.94775 1.79187C10.5226 2.36682 10.8021 3.04125 10.8021 3.85351C10.8021 4.66601 10.5226 5.34032 9.94775 5.91527C9.3728 6.49022 8.69836 6.76964 7.88599 6.76964C7.07373 6.76964 6.39941 6.4901 5.82434 5.91527C5.24939 5.34044 4.96985 4.66601 4.96985 3.85351C4.96985 3.04125 5.24939 2.36682 5.82434 1.79187Z" fill="black"/>
<path d="M14.629 12.3032C14.6074 11.9914 14.5637 11.6513 14.4994 11.2922C14.4344 10.9304 14.3508 10.5883 14.2507 10.2757C14.1472 9.9526 14.0067 9.63351 13.8328 9.32773C13.6525 9.01034 13.4406 8.73398 13.2028 8.50656C12.9541 8.26865 12.6497 8.07736 12.2976 7.93784C11.9468 7.79904 11.558 7.72873 11.1421 7.72873C10.9788 7.72873 10.8208 7.79575 10.5157 7.99436C10.328 8.11679 10.1084 8.25839 9.86328 8.41501C9.65369 8.54855 9.36975 8.67368 9.01904 8.78696C8.67688 8.89767 8.32947 8.95383 7.98645 8.95383C7.64368 8.95383 7.29626 8.89767 6.95386 8.78696C6.60352 8.6738 6.31946 8.54868 6.11023 8.41513C5.86743 8.25998 5.64771 8.11838 5.45715 7.99423C5.15234 7.79563 4.99438 7.72861 4.83105 7.72861C4.41504 7.72861 4.02637 7.79904 3.67566 7.93796C3.32385 8.07724 3.01929 8.26853 2.77039 8.50668C2.53259 8.73422 2.32068 9.01047 2.1405 9.32773C1.9668 9.63351 1.82617 9.95248 1.72266 10.2758C1.62268 10.5885 1.53906 10.9304 1.47412 11.2922C1.40967 11.6508 1.36609 11.9911 1.34448 12.3036C1.32324 12.6091 1.3125 12.9271 1.3125 13.2484C1.3125 14.0836 1.578 14.7597 2.10156 15.2584C2.61865 15.7504 3.30273 16 4.13489 16H11.839C12.6709 16 13.355 15.7504 13.8722 15.2584C14.3959 14.7601 14.6614 14.0837 14.6614 13.2483C14.6613 12.9259 14.6504 12.6079 14.629 12.3032ZM13.2257 14.5791C12.884 14.9043 12.4304 15.0623 11.8389 15.0623H4.13489C3.54321 15.0623 3.0896 14.9043 2.74805 14.5792C2.41296 14.2602 2.25012 13.8248 2.25012 13.2484C2.25012 12.9486 2.26001 12.6526 2.27979 12.3684C2.29907 12.0896 2.3385 11.7833 2.39697 11.4579C2.45471 11.1364 2.5282 10.8348 2.6156 10.5617C2.69946 10.2999 2.81384 10.0406 2.95569 9.79086C3.09106 9.55282 3.24683 9.3486 3.4187 9.18405C3.57947 9.03012 3.7821 8.90414 4.02087 8.80966C4.2417 8.72226 4.48987 8.67441 4.75928 8.66721C4.79211 8.68466 4.85059 8.71799 4.94531 8.77975C5.13806 8.90536 5.36023 9.04868 5.60583 9.20554C5.88269 9.38205 6.23938 9.54147 6.66553 9.67904C7.1012 9.81991 7.54553 9.89145 7.98657 9.89145C8.42761 9.89145 8.87207 9.81991 9.3075 9.67917C9.73401 9.54135 10.0906 9.38205 10.3678 9.20529C10.6191 9.04465 10.8351 8.90549 11.0278 8.77975C11.1226 8.71811 11.181 8.68466 11.2139 8.66721C11.4834 8.67441 11.7316 8.72226 11.9525 8.80966C12.1912 8.90414 12.3938 9.03024 12.5546 9.18405C12.7264 9.34848 12.8822 9.5527 13.0176 9.79098C13.1595 10.0406 13.274 10.3 13.3578 10.5616C13.4453 10.835 13.5189 11.1366 13.5765 11.4577C13.6349 11.7838 13.6744 12.0902 13.6937 12.3685V12.3687C13.7136 12.6518 13.7236 12.9477 13.7238 13.2484C13.7236 13.8249 13.5608 14.2602 13.2257 14.5791Z" fill="black"/>
</svg>

                            </span>
                            <input {...register('phone', {
                                required:{
                                    message:"Phone обязательно к заполнению",
                                    value:true
                                },
                                minLength:{
                                    message:'Минимум 10 символов',
                                    value:10
                                },
                                pattern:{
                                    message:"Напишите правильно саой phone",
                                    value:/^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/
                                }
                            })} type="tel" placeholder='Phone your email address' />
                        </div>
                        <p>
                            {errors.phone && errors.phone ?.message}
                        </p>
                    </label> : ""
                    }
                   
                    <label htmlFor="">
                        <span>Password</span>
                        <div>
                            <span onClick={()=> setEyes(prev=> !prev)}>
                                {
                                    eyes ? <IoEyeSharp/> : <FaEyeSlash/> 
                                }
                            </span>
                            <input {...register('password', {
                                required:{
                                    message:"Password обязательно к заполнению",
                                    value:true
                                },
                                minLength:{
                                    message:'Минимум 8 символов',
                                    value:8
                                },
                                pattern:{
                                    message:"Напишите правильно саой password",
                                    value:/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*(\W|_)).{5,}$/
                                }
                            })} type={eyes ? 'text' :"password"} placeholder='Password your email address' />
                        </div>
                        <p>
                            {errors.password && errors.password ?.message}
                        </p>
                    </label>
                    {
                        location.pathname == '/register' ? <label htmlFor="">
                        <span>Confirm Passowrd</span>
                        <div>
                            <span onClick={()=> setEyes(prev=> !prev)}>
                                {
                                    eyes ? <IoEyeSharp/> : <FaEyeSlash/> 
                                }
                            </span>
                            <input {...register('confirm', {
                                validate: value=> value == password.current || "the password do not match"
                            })} type={eyes ? 'text' :"password"} placeholder='Confirm Password your email address' />
                        </div>
                        <p>
                            {errors.confirm && errors.confirm ?.message}
                        </p>
                    </label> : ""
                    }
                   
                    <button className='form__submit'>Login</button>
                </form>
            </div>
            <div className="form__right"></div>
        </div>
    );
}

export default Form;

