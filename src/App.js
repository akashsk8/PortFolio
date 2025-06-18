import './App.css';
import { BrowserRouter , Routes , Route } from 'react-router-dom';
import HomeTab from './Components/HomeTab';
import AboutTab from './Components/AboutTab';
import ContactTab from './Components/ContactTab';
function App() {
  return (
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<HomeTab/>}/>
    <Route path='/About' element={<AboutTab/>}/>
    <Route path='/Contact' element={<ContactTab/>}/>
  </Routes>
  </BrowserRouter>
  )
}

export default App;
