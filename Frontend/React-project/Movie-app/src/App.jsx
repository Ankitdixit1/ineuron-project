import { useEffect, useState } from "react";
import {BrowserRouter, Routes, Route } from "react-router-dom";
import { fetchDataFormApi } from "./utils/api.js";
import { useSelector, useDispatch } from 'react-redux'
import {getconfiguration} from "./store/homeslice.js"
import Header from "./components/header/Header.jsx";
import Footer from "./components/footer/footer.jsx";
import Home from "./pages/home/home.jsx";
import Details from "./pages/details/Details";
import SearchResult from "./pages/searchResult/SearchResult";
 import Explore from "./pages/explore/Explore";
import PageNotFound from "./pages/404/PageNoteFound.jsx";

function App() {
  const dispatch = useDispatch();
  const {url} = useSelector((state) => state.home);
console.log(url);
  
  useEffect(() => {
    fetchApiconfig();
  }, []);

  const fetchApiconfig = () => {
    fetchDataFormApi('/configuration').then((res) => {
      console.log(res);
      const url = {
        backdrop: res.images.secure_base_url + "original",
        poster: res.images.secure_base_url + "original",
        profile: res.images.secure_base_url + "original",
        
      };
      dispatch(getconfiguration(url));
    });
  }
  return (
  <BrowserRouter>
  {<Header/>}
  <Routes>
    <Route path="/" element={<Home />}/>
    <Route path="/:MediaType/:id" element={<Details />}/>
    <Route path="/search/:query" element={<SearchResult />}/>
    <Route path="/explore/:mediaType" element={<Explore />}/>
    <Route path="*" element={<PageNotFound />}/>
  </Routes>
  {/* {<Footer/>} */}
  </BrowserRouter>
  );
}

export default App;
