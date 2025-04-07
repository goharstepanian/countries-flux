import React, { useContext } from "react";
import { MyContext } from "../../App";
import { useParams } from "react-router-dom";
import Map from "../../components/Map/Map";
import styles from "./CountryPage.module.css";

export const CountryPage = () => {
  const { countries } = useContext(MyContext);
  let { name } = useParams();
  const country = countries.find((el) => el.name.common === name);

  return (
    <div className={styles.container}>
      <section>
        <div>
          <img src={country?.flags.png} alt="Country Flag" />
        </div>
        <div >
          <h2>
            <strong>Name:</strong> {country?.name.official}
          </h2>
          <h3>
            <strong>Capital:</strong> {country?.capital}
          </h3>
          <h3>
            <strong>Region:</strong> {country?.region}
          </h3>
          <h3>
            <strong>Population:</strong> {country?.population}
          </h3>
          <h3>
            <strong>Continents:</strong> {country?.continents}
          </h3>
          <h3>
            <strong>Timezone:</strong> {country?.timezones}
          </h3>
        </div>
      </section>
      <div className={styles.mapContainer}>
        <Map name={country?.name.common} />
      </div>
    </div>
  );
};
