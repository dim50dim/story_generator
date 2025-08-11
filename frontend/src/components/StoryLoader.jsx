import React, { useState,useEffect,useParams,useNavigate } from 'react'
import axios from axios;

const API_BASE_URL = "/api"
const StoryLoader = () => {
    const [story,setStory] = useState(null)
    const{id} = useParams();
    const navigate = useNavigate();
    const [loading,setLoading] = useState(true)
    const [error,setError] = useState(false);

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
  return (
    <div>
      
    </div>
  )
}

import axios from axios;

const API_BASE_URL = "/api"export default StoryLoader

const [] = useState()

