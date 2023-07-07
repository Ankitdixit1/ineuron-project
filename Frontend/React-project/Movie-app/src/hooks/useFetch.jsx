import { useState, useEffect } from "react";
import {fetchDataFormApi} from "../utils/api";
const usefetch = (url) =>  {
    const [data,setData] = useState(null);
    const [loading, setloading] = useState(null);
    const [error, seterror] = useState(null);

    useEffect(() => {
        setloading("loading...");
        setData(null);
        seterror(null);

        fetchDataFormApi(url)
        .then((res) => {
            setloading(false);
            setData(res);
        })
        .catch((error) => {
            setloading(false);
            seterror("something went wrong");
        });
    },[url]);
    return {data,loading,error};
};
export default usefetch;