import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom'; // Use useNavigate instead of useHistory

function EditFood() {
  const [food, setFood] = useState({});
  const [title, setTitle] = useState('');
  const [image, setImage] = useState('');
  const [price, setPrice] = useState('');
  const { id } = useParams();
  const navigate = useNavigate(); // Initialize useNavigate

  useEffect(() => {
    const fetchFood = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/foods/${id}`);
        const data = await response.json();
        setFood(data);
        setTitle(data.title);
        setImage(data.image);
        setPrice(data.price);
      } catch (error) {
        console.error('Error fetching food:', error);
      }
    };

    fetchFood();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const updatedFood = { title, image, price };

    try {
      await fetch(`http://localhost:5000/api/foods/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedFood),
      });
      navigate('/admin/foods'); // Use navigate to redirect
    } catch (error) {
      console.error('Error editing food:', error);
    }
  };

  return (
    <div>
      <h1>Edit Food Item</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
        </div>
        <div>
          <label>Image URL:</label>
          <input type="text" value={image} onChange={(e) => setImage(e.target.value)} required />
        </div>
        <div>
          <label>Price:</label>
          <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} required />
        </div>
        <button type="submit">Update Food</button>
      </form>
    </div>
  );
}

export default EditFood;
