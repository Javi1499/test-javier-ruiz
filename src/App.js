import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GalleryView from "pages/GalleryView";
import { Layout } from "components";
import Footer from "components/Layout/Footer";
function App() {
  return (
    <>
      <Router>
        <Provider store={store}>
          <Layout>
            <Routes>
              <Route exact path="/" element={<GalleryView />} />
            </Routes>
          </Layout>
        </Provider>
      </Router>
      <Footer />
    </>
  );
}

export default App;
