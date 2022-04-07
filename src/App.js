import { Routes, Route } from "react-router-dom";
import { Home } from './pages/Home';
import { GlobalStyle } from "./styles/global";


function App() {
  return (

    <>

      {/* CSS Global */}
      <GlobalStyle />

      <Routes>

        <Route path="/" element={<Home />} />

      </Routes>

    </>

  );
}

export default App;