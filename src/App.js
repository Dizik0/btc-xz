import './App.css'
import Navigation from './Components/Navigation'
import RunningLine from './Components/RunningLine'
import FirstSection from './Components/FirstSection'
import About from './Components/About'
import Guarantee from './Components/Guarantee'

const App = () => {
  return (
    <div className="App">
      <Navigation />
      <RunningLine />
      <FirstSection />
      <About />
      <Guarantee />
    </div>
  )
}

export default App
