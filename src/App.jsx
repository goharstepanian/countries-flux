
import { createContext, useEffect, useReducer } from 'react'
import './App.css'
import { getAllActionCreator, initState, reducer } from './store/store'
import { API } from './api/api'
import { Routes,Route } from 'react-router-dom'
import { Home } from './pages/Home/Home'
import { Error } from './pages/Error/Error'
import { CountryPage } from './pages/CountryPage/CountryPage'

export const MyContext = createContext(null)

function App() {
  const [state, dispatch] = useReducer(reducer, initState)
  

  useEffect(() => {
    API.getAll()
    .then((res)=>dispatch(getAllActionCreator(res)))
  },[])

console.log(state);

  return (
    <div>
      <MyContext.Provider value={state}>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="/country/:name" element={<CountryPage />} />
            <Route path="*" element={<Error />} />
          </Route>
        </Routes>
      </MyContext.Provider>
    </div>
  );
}

export default App
