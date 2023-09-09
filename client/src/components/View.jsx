import { onAuthStateChanged } from "firebase/auth";
import React, { useState, useEffect } from "react";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

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
        fetch("http://localhost:3001/api/quests")
            .then((response) => response.json())
            .then((data) => {
                // Extract the array from the data object
                setQuests(data.data.filter((quest) => quest.marker === 1));
            })
            .catch((error) => console.error("Error fetching data:", error));
    }, []);

    const markAsCompleted = (id) => {
        // Update the data object at localhost:3001/api/quests/:id
        fetch(`http://localhost:3001/api/quests/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ marker: 0 }),
        })
            .then(() => {
                // Re-fetch data to update the UI
                fetch("http://localhost:3001/api/quests")
                    .then((response) => response.json())
                    .then((data) => {
                        // Extract the array from the data object
                        setQuests(
                            data.data.filter((quest) => quest.marker === 1)
                        );
                    })
                    .catch((error) =>
                        console.error("Error fetching data:", error)
                    );
            })
            .catch((error) => console.error("Error updating data:", error));
    };

    return (
        <div className=" mt-10 mb-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {quests.map((quest) => (
                <>
                    <div
                        class="max-w-sm rounded overflow-hidden shadow-lg bg-green-100"
                        key={quest.id}>
                        <img
                            class="w-full"
                            src={quest.image}
                            alt="Sunset in the mountains"
                        />
                        <div class="px-6 py-4">
                            <div class="font-bold text-xl mb-2">
                                {quest.location}
                            </div>
                            <p class="text-gray-700 text-base">
                                {quest.description}
                            </p>
                        </div>
                        <div class="px-6 pt-4 pb-2">
                            <span class="inline-block bg-green-50 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                                #photography
                            </span>
                            <span class="inline-block bg-green-50 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                                #travel
                            </span>
                            <span class="inline-block bg-green-50 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                                #winter
                            </span>
                        </div>
                        <button
                            onClick={() => markAsCompleted(quest._id)}
                            className="bg-blue-500 text-white px-4 py-2 mt-4 rounded-md">
                            Mark as Completed
                        </button>
                    </div>
                </>
            ))}
        </div>
    );
};

export default Quests;
