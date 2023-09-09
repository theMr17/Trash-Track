import { onAuthStateChanged } from 'firebase/auth';
import React, { useState, useEffect } from 'react';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';

const Quests = () => {
  const [quests, setQuests] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (!user) {
        navigate("/");
      }
    });
    // Fetch data from localhost:3001/api/quests
    fetch('http://localhost:3001/api/quests')
      .then((response) => response.json())
      .then((data) => {
        // Extract the array from the data object
        setQuests(data.data.filter((quest) => quest.marker === 1));
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  const markAsCompleted = (id) => {
    // Update the data object at localhost:3001/api/quests/:id
    fetch(`http://localhost:3001/api/quests/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ marker: 0 }),
    })
      .then(() => {
        // Re-fetch data to update the UI
        fetch('http://localhost:3001/api/quests')
          .then((response) => response.json())
          .then((data) => {
            // Extract the array from the data object
            setQuests(data.data.filter((quest) => quest.marker === 1));
          })
          .catch((error) => console.error('Error fetching data:', error));
      })
      .catch((error) => console.error('Error updating data:', error));
  };

  return (
    <div className=" mt-10 mb-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {quests.map((quest) => (
        <div key={quest._id} className="bg-white p-4 shadow-md rounded-lg">
          <img src={quest.image} alt="Quest" className="w-full h-auto" />
          <p className="text-lg font-semibold mt-2">{quest.location}</p>
          <p className="mt-2">{quest.description}</p>
          <button
            onClick={() => markAsCompleted(quest._id)}
            className="bg-blue-500 text-white px-4 py-2 mt-4 rounded-md"
          >
            Mark as Completed
          </button>
        </div>
      ))}
    </div>
  );
};

export default Quests;
