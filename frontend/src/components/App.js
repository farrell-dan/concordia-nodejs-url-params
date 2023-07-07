import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import Top50 from "./Top50";
import SongPage from "./SongPage";
import PopularArtistPage from "./PopularArtistPage";
import ArtistPage from "./ArtistPage";
import GlobalStyles from "./GlobalStyles";

const App = () => {
    return (
        <BrowserRouter>
            <GlobalStyles />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/music" element={<Top50 />} />
                <Route path="/music/:songRank" element={<SongPage />} />
                <Route path="/music/artist/:artistName" element={<ArtistPage />} />
                <Route path="/most-popular-artist" element={<PopularArtistPage />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
