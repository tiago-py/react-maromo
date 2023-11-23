import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";
import { Main } from "../components/Main/index";
import "./index.css";

function App() {
    return (
        <main>
            <Header />
                <Main.Root>
                    <Main.Card/>
                    <Main.Card/>
                    <Main.Card/>
                </Main.Root>
            <Footer/>
        </main>
    );
}

export default App;
