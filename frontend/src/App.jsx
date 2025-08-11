
import './App.css'
import StoryLoader from './components/StoryLoader'
import ThemeInput from './components/ThemeInput'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
function App() {

  return (
    <>
        <Router>
            <div className="app-container">
               <header>
                <h1>Interactive Story Generator</h1>
               </header>
               <main>
                  <Routes>
                    <Route path={"/story/:id"} element={<StoryLoader/>}></Route>
                  </Routes>
               </main>
            </div>
        </Router>
    </>
  )
}

export default App
