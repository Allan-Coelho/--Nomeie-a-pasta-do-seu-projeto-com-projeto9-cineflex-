import "./css/cssreset.css";
import "./css/style.css";
import Movies from "./pages/Movies/Movies";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MoviePage from "./pages/MoviePage/MoviePage";
import MovieTheaterSeats from "./pages/MovieTheaterSeats/MovieTheaterSeats";
import Success from "./pages/Success/Success";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Movies />} />
        <Route path="/sessoes/:idFilme" element={<MoviePage />} />
        <Route path="/assentos/:idSessao" element={<MovieTheaterSeats />} />
        <Route path="/sucesso" element={<Success />} />
      </Routes>
    </BrowserRouter>
  );
}
