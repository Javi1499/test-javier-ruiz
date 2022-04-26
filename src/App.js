import { Button, Gallery } from "components";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Button>Photos your liked</Button>
        <Gallery />
      </div>
    </Provider>
  );
}

export default App;
