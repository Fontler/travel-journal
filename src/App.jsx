import data from "./data"
import Navbar from './components/Navbar'
import Card from './components/Card'
import Footer from "./components/Footer"
import './style.scss'

function App() {
  const locations = data.map(location => 
    <Card key={location.key} {...location}/>
  )

  return (
    <>
      <Navbar />
      <section className="location-list">
        {locations}
      </section>
      <Footer />
    </>
  )
}

export default App