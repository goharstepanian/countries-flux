import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Map from "../../components/Map/Map";
import styles from "./CountryPage.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getCountryThunk } from "../../store/reducers/countryReducer";

export const CountryPage = () => {
  const { name } = useParams();
  const dispatch = useDispatch();
  
  const {country} = useSelector((state)=> state.countryPage)
  
  useEffect(() => {
    dispatch(getCountryThunk(name));
  }, [name]);

 const c= country[0]
  return (
    <div>
      {country ? (
        <div className={styles.container}>
          <section>
            <div>
              <img src={c?.flags?.png} alt="Country Flag" />
            </div>
            <div>
              <h2>
                <strong>Name:</strong> {c?.name?.official}
              </h2>
              <h3>
                <strong>Capital:</strong> {c?.capital}
              </h3>
              <h3>
                <strong>Region:</strong> {c?.region}
              </h3>
              <h3>
                <strong>Population:</strong> {c?.population}
              </h3>
              <h3>
                <strong>Continents:</strong> {c?.continents}
              </h3>
              <h3>
                <strong>Timezone:</strong> {c?.timezones}
              </h3>
            </div>
          </section>
          <div className={styles.mapContainer}>
            <Map name={c?.name?.common} />
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
  };
