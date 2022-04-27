import { Button, Gallery } from "components";
import { Provider } from "react-redux";
import store from "./store";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GalleryView from "pages/GalleryView";
function App() {
  return (
    <Router>
      <Provider store={store}>
        <Routes>
          <Route exact path="/" element={<GalleryView />} />
        </Routes>
      </Provider>
    </Router>
  );
}

export default App;
