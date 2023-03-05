import Header from "./components/Header";
import MainPage from "./pages/MainPage";
import MyWatchList from "./pages/MyWatchList";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />

      <Router>
        <Routes>
          <Route exact path="/" element={<MainPage />} />
          <Route exact path="/my-watch-list" element={<MyWatchList />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
