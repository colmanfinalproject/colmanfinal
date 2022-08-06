import { Button } from "@mui/material";
import React from "react";
import ItemCard from './ItemCard/ItemCard'
import './Marketplace.css'
import { useNavigate } from "react-router";

const Marketplace = () => {
    const navigate = useNavigate();

    return (
        <div className='container'>
            <Button onClick={()=> navigate('/items/create')}>+ New Item</Button>
            <ItemCard title={"tomato"} image={""} description={"Red sherry tomato"}/>
            <ItemCard title={"tomato"} image={""} description={"Red sherry tomato"}/>
            <ItemCard title={"tomato"} image={""} description={"Red sherry tomato"}/>
            <ItemCard title={"tomato"} image={""} description={"Red sherry tomato"}/>
            <ItemCard title={"tomato"} image={""} description={"Red sherry tomato"}/>
            <ItemCard title={"tomato"} image={""} description={"Red sherry tomato"}/>
            <ItemCard title={"tomato"} image={""} description={"Red sherry tomato"}/>
            <ItemCard title={"tomato"} image={""} description={"Red sherry tomato"}/>
        </div>
    );
}

export default Marketplace;