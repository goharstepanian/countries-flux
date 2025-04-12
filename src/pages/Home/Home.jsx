import React from "react";
import { Country } from "../../components/Country/Country";
import styles from "./Home.module.css";
import { useSelector } from "react-redux";



export const Home = () => {
 
    const { countries }    = useSelector((state) => state.homePage);
  
    
    
    return (
    <div className={styles.homeContainer}>
      {countries.map((c) => {
        return (
          <Country
            key={c.name.common}
            flag={c.flags.png}
            name={c.name.common}
            capital={c.capital}
                population={c.population}
          />
        );
      })}
    </div>
  );
};
