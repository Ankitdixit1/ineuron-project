import { useEffect, useState } from "react";
import { fetchDataFormApi } from "./utils/api.js";
function App() {
  useEffect(() => {
    apitesting();
  }, []);

  const apitesting = () => {
    fetchDataFormApi('/movie/popular').then((res) => {
      console.log(res);
    });
  };
  return 
  <>
     app
  </>;
}

export default App;
