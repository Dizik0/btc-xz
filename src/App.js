import './App.css'
import Navigation from './Components/Navigation'
import RunningLine from './Components/RunningLine'
import FirstSection from './Components/FirstSection'
import About from './Components/About'
import Guarantee from './Components/Guarantee'
import BuildPortfolio from './Components/BuildPortfolio'
import Transactions from './Components/Transactions'
import Cooperation from './Components/Cooperation'

const App = () => {
  return (
    <div className="App">
      <Navigation />
      <RunningLine />
      <FirstSection />
      <About />
      <Guarantee />
      <BuildPortfolio />
      <Transactions />
      <Cooperation />
    </div>
  )
}

export default App
