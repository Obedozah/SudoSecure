import Header from "./HeaderFooter/Header";
import { useState } from "react";
import FAQ from "./HeaderFooter/FAQ";
import PasswordSection from "./PasswordSection/PasswordSection";
import "./App.css";

function App() {
  const [serverdata, setServerdata] = useState(null);

  return (
    <div className="app">
      <header>
        <Header />
      </header>

      <main className="container">
        <PasswordSection
          serverdata={serverdata}
          setServerdata={setServerdata}
        />
        <FAQ />
      </main>
    </div>
  );
}

export default App;
