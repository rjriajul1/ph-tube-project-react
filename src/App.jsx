import { Suspense } from "react";
import "./App.css";
import logo from "./assets/Logo.png";
import verified from "./assets/verified.png"
import Header from "./components/header-section/header";
import Category from "./components/categorys/category";
import Vidoes from "./components/vidoes/Vidoes";

const  categoryFetch = async  () => {
      const res = await fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
      return res.json()
}

const videoesFetch = fetch('https://openapi.programming-hero.com/api/phero-tube/videos')
.then(res=>res.json())

function App() {
  const categoryPromise = categoryFetch()
  return (
    <>
      <Header logo={logo}></Header>
      <Suspense fallback={<h2>Categoty button loading.....</h2>}>
        <Category categoryFetch={categoryPromise}></Category>
      </Suspense>

      <Suspense fallback={<h2>All videoes loading.....</h2>}>
        <Vidoes verified={verified} videoesFetch={videoesFetch}></Vidoes>
      </Suspense>
    </>
  );
}

export default App;
