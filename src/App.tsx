import React from 'react'
import './App.scss'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage/HomePage'
import ItemPage from './pages/ItemPage/ItemPage'

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path='/' element={<HomePage />}></Route>
                <Route path='/item/:id' element={<ItemPage />}></Route>
            </Routes>
        </div>
    )
}

export default App
