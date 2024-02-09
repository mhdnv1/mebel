import { createContext } from "react";
import { useState ,useEffect } from "react";
import { json, useNavigate } from "react-router-dom";
import axios from "axios";

export const CustomContext = createContext()

export const Context=(props)=>{
    const navigate = useNavigate()
    const [user , setUser] = useState({email:""})
    const [hitSale , setHitSale] = useState([])
    const [favorites , setFavorites] = useState([])

    // users
    useEffect(() => {
        if (localStorage.getItem('user') !== null) {
            setUser(JSON.parse(localStorage.getItem('user')))
        }
        // if (localStorage.getItem('favorites') !== null) {
        //     setFavorites(JSON.parse(localStorage.getItem('favorites')))
        // }
    }, []);
    const registerUser = (data)=>{
        axios.post('http://localhost:8080/register', {
            ...data, carts:[],orders:[]
        })
        .then((res)=>{
            setUser(res.data.user) 
            navigate('/')
            localStorage.setItem('user' , JSON.stringify(res.data.user))
        } 
       )
    }
    const loginUser = (data)=>{
        axios.post('http://localhost:8080/login', data)
        .then((res)=> {
            setUser(res.data.user)
            navigate('/')
            localStorage.setItem('user' , JSON.stringify(res.data.user))
        } )
    }
    const logOutUser = ()=>{
        setUser({email:""})
        localStorage.removeItem('user')
        navigate('/')
    }

// carts basket
    const addCarts =(product)=>{
        axios.patch(`http://localhost:8080/users/${user.id}`,{
            carts:[...user.carts , {...product , count:1}]
        })
        .then((res)=>{
            setUser(res.data);
            localStorage.setItem('user' , JSON.stringify(res.data))
        })
    }

    const addCartsPlus=(id)=>{
        axios.patch(`http://localhost:8080/users/${user.id}`,{
            carts:user.carts.map(item=>{
                if (item.id == id) {
                    return {...item , count: item.count + 1}
                }
                return item
            })
        }).then((res)=>{
            setUser(res.data)
            localStorage.setItem('user' , JSON.stringify(res.data))
        })
    }
    const removeCartsMinus=(id)=>{
        axios.patch(`http://localhost:8080/users/${user.id}`,{
            carts: user.carts.find(item => item.id === id).count > 1 ?
            user.carts.map(item=>{
                if (item.id == id) {
                    return {...item , count: item.count - 1}
                }
                return item
            }) : user.carts.filter((item)=> item.id !== id)
        }).then((res)=>{
            setUser(res.data)
            localStorage.setItem('user' , JSON.stringify(res.data))
        })
    }


      // product
      const getHitSale=()=>{
        axios('http://localhost:8080/product?_sort=sale&_order=dsc&_limit=12')
        .then((res)=> setHitSale(res.data))
        .catch((err)=> console.log(err))
    }

    // favorites
    const favoritesHandler=(product)=>{
           let findProduct =favorites.some(item => item.id === product.id)
           if (findProduct) {
              setFavorites(prev => prev.filter(item => item.id !== product.id))
           }else{
            setFavorites(prev => [...prev , product])
           }

    }
    useEffect(()=>{
        localStorage.setItem('favorites' , JSON.stringify(favorites))
    },[favorites])

    // orders
const addorders=(data)=>{
        axios.patch(`http://localhost:8080/users/${user.id}`,{
            orders:[...user.orders , data]
        }).then((res)=> {
            setUser(res.data)
            localStorage.setItem('user', JSON.stringify(res.data))
            navigate('/')
        }).then((res)=> alert('ваш заказ принял'))
}

    const varObject={
          registerUser , loginUser , setUser ,user,logOutUser, hitSale , getHitSale,
          favorites , favoritesHandler, addCarts , addCartsPlus, removeCartsMinus
          , addorders
    }

  
    return <CustomContext.Provider value={varObject}>
          {props.children}
    </CustomContext.Provider>
}