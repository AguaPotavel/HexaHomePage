import "./App.css";
import Header from "./components/Header";
import SideItem from "./components/SideItem";
import Footer from "./components/Footer";
import Background from "./components/Background";
import InnerContent from "./components/InnerContent";

function App() {
  return (
    <div className="App">
      <Header />
      <SideItem />
      <Footer />
      <Background />
      <InnerContent />
    </div>
  );
}

export default App;
