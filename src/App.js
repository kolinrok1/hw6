import logo from "./logo.svg";
import "./App.css";
import { Form } from "./conponents/Form";
import { Provider } from "react-redux";
import { store } from "./conponents/store/store";
import { ProductList } from "./conponents/ProductList";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Form />
        <ProductList />
      </div>
    </Provider>
  );
}

export default App;
