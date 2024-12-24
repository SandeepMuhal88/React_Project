import React from 'react'
import Header from './Header/Header'
import SideBar from './SideBar/SideBar'
import Recommanded from './Recommanded/Recommanded'
import Footer from './Footer/Footer'
const App = () => {
  return (
    <>
        <div>
      <SideBar />
    </div>
    <div>
      <Header />
      <Recommanded />
      <Footer />
    </div>
    </>
  )
}

export default App;