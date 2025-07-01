

import React, { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const Curdread = () => {
    const {id}=useParams()
    const navi=useNavigate()

    const [update,setUpdate]=useState([])


    useEffect(() => {
      axios
        .get(`http://localhost:3000/users/${id}`) // or use 3030 if your JSON server runs there
        .then((response) => {
            setUpdate(response.data);
            console.log(response.data.id);
          console.log(response.data); // update state with the fetched array
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    }, [id]);
  return (
    <div
      style={{ marginTop: "100px", display: "flex", justifyContent: "center" }}
    >
      {[update]?.map((item) => (
        <ul key={item.id} className="clean-list">
          <li>
            Id:
            {item.id}
          </li>
          <li>
            name:
            {item.name}
          </li>
          <li>
            email:
            {item.email}
          </li>
          <li>
            Phone:
            {item.phone}
          </li>
          
          <button onClick={()=>navi('/')}>Back </button>
        </ul>
      ))}
    </div>
  );
}

export default Curdread
