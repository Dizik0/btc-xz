import './App.css'
import Navigation from './Components/Navigation'
import RunningLine from './Components/RunningLine'
import FirstSection from './Components/FirstSection'
import About from './Components/About'
import Guarantee from './Components/Guarantee'
import BuildPortfolio from './Components/BuildPortfolio'
import Transactions from './Components/Transactions'
import Cooperation from './Components/Cooperation'
import Footer from './Components/Footer'

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
      <Footer />
    </div>
  )
}

export default App
