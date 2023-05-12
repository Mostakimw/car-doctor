import About from "./About";
import Banner from "./Banner";
import Services from "./Service/Services";

const Home = () => {
  return (
    <div className="max-w-7xl mx-auto mt-8">
      <>
        <Banner />
        <About />
        <Services />
      </>
    </div>
  );
};

export default Home;
