import React, {useState} from "react";
import TextField from '@mui/material/TextField';
import './CreateItem.css'
import { Button, FormControl, Select, MenuItem, InputLabel } from "@mui/material";
import axios from 'axios';
import {categories} from '../../../assets/consts';

const CreateItem = () => {
    const [title, setTitle] = useState()
    const [description, setDescription] = useState()
    const [image, setImage] = useState()
    const [category, setCategory] = useState()

    console.log(category)


    return (
        <div className='container'>
        <TextField fullWidth id="standard-basic" label="Title" variant="standard" onChange={(event) => setTitle(event.target.value)}/>
        <TextField fullWidth id="standard-basic" label="Description" variant="standard" onChange={(event) => setDescription(event.target.value)}/>
        <TextField fullWidth id="standard-basic" label="Image URL" variant="standard" onChange={(event) => setImage(event.target.value)}/>

        <FormControl fullWidth>
        <InputLabel id="select-label">Category</InputLabel>
        <Select
            labelId="select-label"
            id="select"
            value={category}
            label="Category"
            onChange={(event) => setCategory(event.target.value)}
        >
            {categories.map((item, index)=> {return (<MenuItem key={index} value={item}>{item}</MenuItem>)})}
        </Select>
        </FormControl>

        <Button onClick={()=> {axios.post('http://localhost:5000/items/create', {
            title,
            description,
            image,
            category,
        })}}>Submit</Button>
        </div>
    );
}

export default CreateItem;