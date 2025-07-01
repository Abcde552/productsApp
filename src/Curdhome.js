import React, { useEffect, useState } from 'react';
import axios from "axios";
import './App.css';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Curdhome = () => {
    const navi =useNavigate()
    const [names,setNames]=useState([])
    useEffect(() => {
      axios
        .get("http://localhost:3000/users") // or use 3030 if your JSON server runs there
        .then((response) => {
          setNames(response.data); // update state with the fetched array
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    }, []);


 const handler=(item)=>{
  console.log(item.id)
 navi(`/read/${item.id}`)
}
const handlerss = (item) => {
  console.log(item.id);
  navi(`/update/${item.id}`);
}

const clickHandler = (item) => {
  axios
    .delete(`http://localhost:3000/users/${item.id}`)
    .then((response) => {
      
      // Optionally refresh the list or navigate
    window.location.reload();
    })
    .catch((error) => {
      console.error("Error deleting user:", error);
    });
};

    // axios
    //     .delete(`http://localhost:3000/users/`+id) // or use 3030 if your JSON server runs there
    //     .then((response) => {
    //       navi('/'); // update state with the fetched array
    //     })
    //     .catch((error) => {
    //       console.error("Error fetching data:", error);
    //     });
    // }, [];







  return (
    <div>
      <center>
        <h1>Users Added Data</h1>
      </center>
      <div className="button-container">
        <Link to="/create" className="btn btn">
          Add New Data
        </Link>
      </div>
      <div className="users-container">
        {names.map((item) => (
          <ul key={item.id} className="clean-list">
            <li>ID: {item.id}</li>
            <li>Name: {item.name}</li>
            <li>Email: {item.email}</li>
            <li>Phone: {item.phone}</li>

            <button className="btn btn-update" onClick={() => handler(item)}>
              Read
            </button>
            <button onClick={() => handlerss(item)} className="btn btn-edit">
              Edit
            </button>
            <button onClick={()=>clickHandler(item)} className="btn btn-delete">
              Delete
            </button>
          </ul>
        ))}
      </div>
    </div>
  );


  
}

export default Curdhome
