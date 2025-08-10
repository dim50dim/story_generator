import React from 'react'

const LoadingStatus = ({theme}) => {
  return (
    <div>
           <div className="loading-container">
            <h2>Generating Your{theme}</h2>
            <div className="loading-animation">
                <div className="spinner"></div>
            </div>
            <p className="loading-info">
                Please wait while we generate your story...
            </p>
           </div>
    </div>
  )
}

export default LoadingStatus
