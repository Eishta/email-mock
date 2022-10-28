import "./styles.css";
import Header from "./components/Header";
import FilterBar from "./components/FilterBar";
import Main from "./components/Main";
import store from "./redux/store";
import { Provider } from "react-redux";

export default function App() {
  return (
    <Provider store={store}>
      <Header />
      <FilterBar />
      <Main />
    </Provider>
  );
}

// state management - redux
// Get_Emails
// Mark_read
// Mark_favorite
// filter_by(flag)
