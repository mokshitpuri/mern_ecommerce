import axios from "axios";

const BASE_URL = "https://ecommerce-mern-cwyq.onrender.com/api/";
// Attempt to get the persisted data from localStorage
const persistedData = localStorage.getItem("persist:root");

if (!persistedData) {
    console.error("Persisted data not found in localStorage");
}

// Attempt to parse the user data from persistedData
const userData = persistedData ? JSON.parse(JSON.parse(persistedData).user) : null;

// Attempt to get the access token from userData
const TOKEN = userData && userData.currentUser ? userData.currentUser.accessToken : null;

// Log the access token (or any error if present)
console.log("Access Token:", TOKEN || "No access token available");
export const publicRequest = axios.create({
    baseURL: BASE_URL,
});

//ERROR AA SAKTI HAI WHEN YOU'LL RUN THE CLIENT KYUKI YAHA ADMIN VALA PASTE KIA HAI INSTEAD OF ACCESS TOKEN.

export const userRequest = axios.create({
    baseURL: BASE_URL,
    header:{token: `Bearer ${TOKEN}`}
});
