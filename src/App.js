import Navbar from "./components/Navbar";
import AuthDetails from "./components/AuthDetails";
import Home from "./components/Home";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import TrashCard from "./components/TrashCard";
import Footer from "./components/Footer";
import { router } from "./routes/routes";
import { RouterProvider } from "react-router-dom";

function App() {
    return (
        <div className="App">
            <Navbar />
            <RouterProvider router={router} />
            <Footer />
        </div>
    );
}

export default App;
