import React, { useState,useEffect,useParams,useNavigate } from 'react'
import axios from axios;
import LoadingStatus from './LoadingStatus';


const API_BASE_URL = "/api"
const StoryLoader = () => {
    const [story,setStory] = useState(null)
    const{id} = useParams();
    const navigate = useNavigate();
    const [loading,setLoading] = useState(true)
    const [error,setError] = useState(false);

    useEffect(() => {
loadStory(id)
    },[id])
     
    const loadStory = async (storyId) => {
        setLoading(true)
        setError(null)

        try{
            const response = await axios.get(`${API_BASE_URL}/stories/${storyId}/complete`)
            setStory(response.data)
            setLoading(false)
        }catch(err){
              setError("Failed to load story")
        }finally{
            setLoading(false)
        }

    } 
    const createNewStory =() => {
        navigate("/")
    }
    if(loading){
        return <LoadingStatus theme={"story"}/>
    }
    if(error){
        return <div className="story-loader">
            <div className="error-message">
                <h2>Story Not Found</h2>
                <p>{error}</p>
                <button onClick={createNewStory}>Go to Story Generator</button>
            </div>
        </div>
    }
  return (
    <div>
      
    </div>
  )
}

