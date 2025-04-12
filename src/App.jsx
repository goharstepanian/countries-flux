
import {  useEffect } from 'react'
import './App.css'
import { Routes,Route } from 'react-router-dom'
import { Home } from './pages/Home/Home'
import { Error } from './pages/Error/Error'
import { CountryPage } from './pages/CountryPage/CountryPage'
import { getAllThunk} from './store/reducers/requestsReducer'
import { useDispatch } from 'react-redux'


function App() {
  const dispatch = useDispatch()
  

  useEffect(() => {
dispatch(getAllThunk())
  },[])

  return (
    <div>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path="/country/:name" element={<CountryPage />} />
            <Route path="*" element={<Error />} />
        </Routes>

    </div>
  );
}

export default App
