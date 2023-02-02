import "./App.css";
import GridTable from "./components/GridTable";
import AdvancedGrid from "./components/AdvancedGrid";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p style={{ textAlign: "center" }}>React AG-Grid</p>
      </header>
      <div className="table">
        <GridTable />
      </div>
      <div className="advanced-grid">
        <AdvancedGrid />
      </div>
    </div>
  );
}

export default App;
