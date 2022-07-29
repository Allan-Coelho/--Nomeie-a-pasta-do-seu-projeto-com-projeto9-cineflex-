import "./css/cssreset.css";
import "./css/style.css";
import Movies from "./pages/Movies/Movies";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MoviePage from "./pages/MoviePage/MoviePage";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Movies />} />
        <Route path="/sessoes/:idFilme" element={<MoviePage />} />
      </Routes>
    </BrowserRouter>
  );
}
