import "./index.css";
import Header from "./components/Header";
import InfoHeader from "./components/InfoHeader";
import Articles from "./components/Articles";
import Searchbar from "./components/Searchbar";
import { AppProvider } from './utils/contextApi'
function App() {
  return (
    <AppProvider>
      <div>
        <Header />
        <InfoHeader />
        <Searchbar/>
        <Articles />
      </div>
    </AppProvider>
  );
}

export default App;
