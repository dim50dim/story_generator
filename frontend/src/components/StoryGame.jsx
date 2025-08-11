import React, { useEffect, useState } from 'react'

const StoryGame = ({story,onNewStory}) => {
  const [currentNodeId, setCurrentNodeId] = useState(null);
    const [currentNode, setCurrentNode] = useState(null)
    const [options, setOptions] = useState([])
    const [isEnding, setIsEnding] = useState(false)
    const [isWinningEnding, setIsWinningEnding] = useState(false)
    
    useEffect(() => {
           if(story && story.root_node){
            const rootNodeId = story.root_node.id 
            setCurrentNodeId(rootNodeId)
           }
    },[story])
 
   useEffect(() => {
        if (currentNodeId && story && story.all_nodes) {
            const node = story.all_nodes[currentNodeId]

            setCurrentNode(node)
            setIsEnding(node.is_ending)
            setIsWinningEnding(node.is_winning_endig)

            if (!node.is_ending && node.options && node.options.length > 0) {
                setOptions(node.options)
            } else {
                setOptions([])
            }
        }
    }, [currentNodeId, story])

  return (
    <div>
      
    </div>
  )
}

export default StoryGame
