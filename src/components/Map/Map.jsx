import React from "react";
import styles from "./Map.module.css"



 function Map({ name }) {
  return (
    <div >
          <iframe className={styles.map}
        src={`https://www.google.com/maps?q=${name}&z=6&output=embed`}
      ></iframe>
    </div>
  );
}

export default Map