import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux"
import { unsetUser } from "../reducers/user/userSlice"
import { useNavigate } from 'react-router-dom';
import axios, * as others from 'axios';

import { ProductsList } from "../components/ProductsList";

export const Home = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()   

    
    const [products, setProducts] = useState([])

    const user = useSelector(state => state.user)
    useEffect(() => {
        axios.get("http://localhost:3000/productos")
          .then(response => {
            setProducts(response.data);
          })
      }, [])


    const handleLogout = () => {
        dispatch(unsetUser());
        navigate("/");
      };



    return(
        <>
        <h2>Home</h2>
        <p>Welcome {user.fullName} / {user.email}</p>
        <button className="btn btn-primary" onClick={handleLogout}>Log out</button>
        <hr />
        <ProductsList products={products} />
      </>
    )
}