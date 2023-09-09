import { onAuthStateChanged } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

export default function TrashCard() {
    const [image, setImage] = useState(null);
    const [location, setLocation] = useState("");
    const [description, setDescription] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
          if (!user) {
            navigate("/");
          }
        });
      }, []);

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = () => {
        // Prepare the data to be sent to the API
        const dataToSend = {
            image,
            location,
            description,
            marker: 1,
        };

        // Send data to the API using fetch or axios
        // Replace 'apiEndpoint' with your actual API endpoint
        fetch("http://localhost:3001/api/quests", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(dataToSend),
        })
            .then((response) => response.json())
            .then((responseData) => {
                // Handle the API response here
                console.log(responseData);
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    };

    return (
        <div className="mt-10 mb-10 max-w-md mx-auto p-4 bg-white shadow-md rounded-lg text-center">
            {image && (
                <div className="h-80 w-full overflow-hidden rounded-lg bg-white">
                    <img
                        src={image}
                        alt="Uploaded Image"
                        className="h-full w-full object-cover object-center"
                    />
                </div>
            )}
            <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="mt-4 p-2 border rounded-md w-full file:bg-sky-100 file:text-sky-500 file:rounded-md file:border-none"
            />
            <div className="mt-4">
                <label
                    htmlFor="location"
                    className="block text-sm font-medium text-gray-700">
                    Location:
                </label>
                <input
                    type="text"
                    id="location"
                    name="location"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="mt-1 p-2 border rounded-md w-full"
                />
            </div>
            <div className="mt-4">
                <label
                    htmlFor="description"
                    className="block text-sm font-medium text-gray-700">
                    Description:
                </label>
                <textarea
                    id="description"
                    name="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="mt-1 p-2 border rounded-md w-full"
                    rows="4"></textarea>
            </div>
            <button
                onClick={handleSubmit}
                className="mt-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
                Submit
            </button>
        </div>
    );
}
