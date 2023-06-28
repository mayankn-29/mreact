import Hlo from "./Components/Hlo";
import Nav from "./Components/Nav";
import TextForm from "./Components/TextForm";


function App(){
  return (
    <>
    <Nav title="Home"/>
    <div className="container ny-3">
    <TextForm/>
    </div>
    <Hlo/>
    </>
  );
}

export default App;
