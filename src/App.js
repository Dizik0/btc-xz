import './App.css'
import { HomePage, AboutUs, Terms } from './Components/Page'
import { Suspense, lazy } from 'react'
import { Route, Routes, Redirect, BrowserRouter } from 'react-router-dom'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/terms" element={<Terms />} />
      </Routes>
    </BrowserRouter>
  )
}

//  <Suspense fallback={<h1 className={style.loading}>Loaging...</h1>}></Suspense>

export default App
