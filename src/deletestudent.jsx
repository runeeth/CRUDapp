import React, { useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

export default function Delete() {
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .delete(`http://localhost:3001/deletestudentdetails/${id}`)
      .then((res) => {
        console.log("Deleted:", res.data);
        navigate("/admindashboard"); // ✅ Only navigate after successful delete
      })
      .catch((err) => {
        console.error("Error deleting student:", err);
      });
  }, [id, navigate]); // ✅ Effect runs only once

  return (
    <div>
      <h3>Deleting student...</h3>
    </div>
  );
}
