import About from "../About/index.js";
import Banner from "../Banner/index.js";
import Navbar from "../Navbar.js";
import Service from "../Service/index.js";

function Home() {
    return ( 
        <>
        <Navbar/>
        <Banner/>
        <Service/>
        <About/>
        </>
     );
}

export default Home;