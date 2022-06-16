import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "src/components/pages/home";
import NotFoundPage from "src/components/pages/notfound";
import "styles/general.scss";

const App = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="*" element={<NotFoundPage />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default App;
