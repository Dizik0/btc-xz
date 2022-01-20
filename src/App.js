import './App.css'
import Navigation from './Components/Navigation'
import RunningLine from './Components/RunningLine'
import FirstSection from './Components/FirstSection'
import About from './Components/About'

const App = () => {
  return (
    <div className="App">
      <Navigation />
      <RunningLine />
      <FirstSection />
      <About />
    </div>
  )
}

export default App
