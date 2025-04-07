import React, { useContext } from 'react'
import { MyContext } from '../../App'
import { Country } from '../../components/Country/Country'
import styles from "./Home.module.css"
export const Home = () => {
    const {countries} = useContext(MyContext)
  return (
      <div className={styles.homeContainer}>
          {
              countries.map((c) => {
                  return (
                      <Country
                          key= {c.name.common}
                          flag={c.flags.png}
                          name={c.name.common}
                          capital={c.capital}
                          population = {c.population}
                          
                      />
                      
                  )
              })
          }
    </div>
  )
}
