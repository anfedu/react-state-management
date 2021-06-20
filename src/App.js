import logo from "./logo.svg";
import "./App.css";
import { TicketProvider } from "./context";
import Home from "./pages";

function App() {
  return (
    <div className="App">
      <TicketProvider>
        <header className="App-header">
          <Home />
        </header>
      </TicketProvider>
    </div>
  );
}

export default App;
