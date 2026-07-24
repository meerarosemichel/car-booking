import "./App.css";

import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Gallery from "./components/gallery/gallery";
import Reviews from "./components/reviews/reviews";
import About from "./components/about/about";
import Contact from "./components/contact/contact";
import Footer from "./components/footer/footer";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Home />
        <Gallery />
         <Reviews />
         <About/>
         <Contact/>
         <Footer />
      </main>
    </>
  );
}

export default App;