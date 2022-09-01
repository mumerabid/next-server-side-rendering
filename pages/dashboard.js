import { useState, useEffect } from 'react'
import axios from "axios"
export default function Dashboard() {
    const [dashBoardData, setDashboardData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        async function getDataFromServer() {
            const dData = await axios.get("http://localhost:4000/dashboard");
            console.log("data", dData.data);
            setDashboardData(dData.data);
            setIsLoading(false);
        }
        getDataFromServer();
    }, []);
    if (isLoading) {
        return (
            <div>is Loading...</div>
        )
    }
    return (
        <div>
            <div>Posts: {dashBoardData.posts}</div>
            <div>Likes: {dashBoardData.likes}</div>
            <div>Followers: {dashBoardData.followers}</div>
            <div>Following: {dashBoardData.following}</div>

        </div>
    )
}
