import { useEffect } from "react";
import LandingPage from "./LandingPage.tsx";

// import { Analytics } from "@vercel/analytics/react";

function App() {
    useEffect(() => {
        console.log(
            "Hey there, curious mind!\n\nEver wondered what makes things tick? Take a journey into the heart of innovation. Explore the intricate web of code that powers my portfolio: it's all right here, waiting for you to unravel its secrets.\n\nDive into the depths of creativity at: https://github.com/disteroby/disteroby-dev-portfolio.\n\nHappy exploring!",
        );
    }, []);

    return (
        <>
            {/*<Analytics />*/}
            <main className='min-h-[100svh] w-full overflow-x-hidden scroll-smooth bg-dark-gray'>
                <LandingPage />
            </main>
        </>
    );
}

export default App;
