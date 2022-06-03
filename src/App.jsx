import { BrowserRouter as Router } from "react-router-dom";
import AppProvider from "./hooks";
import { RoutesApp } from './routes'
import { GlobalStyle } from '../src/styles/global'
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.min.css'


function App() {
  return (
    <Router>
      <AppProvider>
        <RoutesApp />
      </AppProvider>

      <GlobalStyle />
      <ToastContainer />
    </Router>
  );
}

export default App