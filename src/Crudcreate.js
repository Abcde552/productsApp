import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const Crudcreate = () => {
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    email: "",
    phone: "",
  });

  const navigate = useNavigate(); // For navigating back

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:3000/users", formData)
      .then(() => {
        alert("User created successfully!");
        navigate("/");
      })
      .catch((error) => {
        console.error("Error creating user:", error);
        alert("Failed to create user");
      });
  };

  return (
    <div style={styles.container}>
      <form onSubmit={handleSubmit} style={styles.form}>
        <h2 style={{ textAlign: "center" }}>Create User</h2>

        <label>
          ID:
          <input
            style={{ marginLeft: "35px" }}
            type="text"
            name="id"
            value={formData.id}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Name:
          <input
            style={{ marginLeft: "8px" }}
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Email:
          <input
            style={{ marginLeft: "12px" }}
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Phone:
          <input
            style={{ marginLeft: "5px" }}
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </label>

        <div style={styles.buttonGroup}>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => navigate("/")}
          >
            Back
          </button>
        </div>
      </form>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    background: "#f9f9f9",
    minWidth: "300px",
  },
  buttonGroup: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "10px",
  },
};

export default Crudcreate;
