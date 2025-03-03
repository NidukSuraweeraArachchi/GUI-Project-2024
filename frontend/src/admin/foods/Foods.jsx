import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './foods.css';
import add from './../../assets/f6.jpg';

function Foods() {
  const [foods, setFoods] = useState([]);

  // Fetch all food items
  useEffect(() => {
    const fetchFoods = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/foods');
        const data = await response.json();
        setFoods(data);
      } catch (error) {
        console.error('Error fetching foods:', error);
      }
    };

    fetchFoods();
  }, []);

  // Handle delete food
  const deleteFood = async (id) => {
    try {
      await fetch(`http://localhost:5000/api/foods/${id}`, {
        method: 'DELETE',
      });
      setFoods(foods.filter(food => food.id !== id)); // Update state after deletion
    } catch (error) {
      console.error('Error deleting food:', error);
    }
  };

  return (
    <div>
      <h1>Admin - Food Items</h1>
      <Link to="/admin/foods/add">
        <button>Add New Item</button>
      </Link>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Image</th>
            <th>Title</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
       </thead>
        <tbody>
          {foods.map(food => (
            <tr key={food.id}>
              <td>{food.id}</td>
             <td><img src={add} alt={add} width={50} /></td>
              <td>{food.title}</td>
              <td>LKR {food.price}</td>
              <td>
                <Link to={`/admin/foods/edit/${food.id}`}>
                  <button>Edit</button>
                </Link>
                <button onClick={() => deleteFood(food.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Foods;
