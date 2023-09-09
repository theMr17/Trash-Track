import Navbar from "./components/Navbar";
import AuthDetails from "./components/AuthDetails";
import Home from "./components/Home";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import TrashCard from "./components/TrashCard";
import Footer from "./components/Footer";
import { router } from "./routes/routes";
import { RouterProvider } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

function App() {
    return (
        <div className="App">
            <Navbar />
            <RouterProvider router={router} />
            <Footer />
            <ToastContainer/>
        </div>
    );
}

export default App;
