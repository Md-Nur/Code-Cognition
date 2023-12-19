import { useState } from "react";
import ThemeContextProvider from "./context/themeContextPorvide";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import OurServices from "./components/OurServices.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <ThemeContextProvider>
      <Navbar />
      <Hero />
      <OurServices />
    </ThemeContextProvider>
  );
}

export default App;
