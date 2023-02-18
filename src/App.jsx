import Experties from "./components/Experties/Experties";
import Footer from "./components/Footer/Footer";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import People from "./components/People/People";
import Portfolio from "./components/Portfolio/Portfolio";
import Skills from "./components/Skills/Skills";
import Works from "./components/Works/Works";
import css from "./styles/app.module.scss";

const App = () => {
  return (
    <>
      <div className={`bg-primary ${css.container}`}>
        <Header />
        <Hero />
        <Experties/>
        <Works />
        <Portfolio/>
        {/* <People/> */}
        <Skills/>
        <Footer/>
      </div>
    </>
  );
};

export default App;
