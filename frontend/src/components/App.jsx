import Header from './HeaderFooter/Header';
import FAQ from './HeaderFooter/FAQ';
import PasswordSection from './PasswordSection/PasswordSection';
import './App.css'

function App() {
    return (
        <div className="app">
            <title>SudoSecure</title>
            <header>
                <Header />
            </header>

            <main className="container">
                <PasswordSection />
                <FAQ />
            </main>
        </div>
    );
}

export default App;