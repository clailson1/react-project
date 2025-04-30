import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import Paths from "./routes/Paths";

const App = () => {
  return (  
    // parte visível do componente
    <>
      <Header />
        <Paths />
      <Footer />
    </>
  );
}
 
export default App;