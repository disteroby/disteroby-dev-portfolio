import "./App.css";
import HeroCarousel from "../../components/layout/HeroCarousel/HeroCarousel.tsx";
// import LandingPage from "../LandingPage/LandingPage.tsx";

function App() {
    return (
        <main className='min-h-screen w-full overflow-x-hidden bg-[#0C0C0F]'>
            {/*<LandingPage />*/}
            <HeroCarousel />
        </main>
    );
}

export default App;
