import LandingPage from "../LandingPage/LandingPage.tsx";
import "./App.css";

function App() {
    return (
        <main className='min-h-screen w-full overflow-x-hidden bg-dark-gray'>
            <LandingPage />
            <div className='fixed top-0 right-0 m-4 md:m-8 text-white text-xl z-50'>
                <span className='md:hidden'>sm</span>
                <span className='max-md:hidden lg:hidden'>md</span>
                <span className='max-lg:hidden xl:hidden'>lg</span>
                <span className='max-xl:hidden 2xl:hidden'>xl</span>
                <span className='max-2xl:hidden'>2xl</span>
            </div>
        </main>
    );
}

export default App;
