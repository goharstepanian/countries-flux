import React from 'react'
import { NavLink } from 'react-router-dom' 
import styles from  "./Country.module.css" 

export const Country = ({flag,name,capital,population}) => {
  return (
      <div className={styles.box}>
          <NavLink to={`/country/${name}`}>
              <img src={flag } alt={`Flag of ${name}`} className={styles.image}  />
          </NavLink>
          <div>
              <h2 className={styles.name}>{name}</h2>
              <p className={styles.capital}><strong>Capital: </strong>{capital }</p>
              <p className={styles.pop}><strong>Population: </strong>{population }</p>
          </div>
    </div>
  )
}
