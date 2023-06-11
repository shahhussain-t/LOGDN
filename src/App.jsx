
import Currentrequest from './components/Currentrequest/Currentrequest'
import Navleft from './components/Navleft/Navleft'
import styles from './App.module.css'
import Complete from './components/complete/Complete'
import { Route, Routes } from 'react-router-dom'
import Maincurrent from './components/maincurrent/Maincurrent'

function App() {
 
  return (
    <>
    <Navleft/>
    
    <Routes>
     
      <Route path='/' element={<Complete/>}/>
    </Routes>
    {/* <Complete/> */}
    
    </>
  )
}

export default App
