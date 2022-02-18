import "./App.css";

import { Header } from "./components/header";
import { Track } from "./components/track";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Track carStartPlace={{ x: 23, y: 20 }} />
      </main>
    </div>
  );
}

export default App;
