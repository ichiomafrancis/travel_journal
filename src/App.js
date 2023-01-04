import Header from "./components/Header/Header";
import Location from "./components/Location/Location";
import data from "./Data";
import "./App.css";

function App() {
  const tours = data.map((item) => {
    return <Location {...item} />;
  });

  return (
    <div className="app">
      <Header />
      <section className="tour-list">{tours}</section>
    </div>
  );
}

export default App;
