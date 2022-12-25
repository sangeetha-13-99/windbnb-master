import './App.css';
import Header from "./components/Layout/Header";
import Section from "./components/Layout/Section";
import Modal from "./components/Layout/Modal";
import {useContext} from "react";
import ModalContext from "./utils/modal-context";
import ModalWrapper from "./components/Layout/ModalWrapper"
function App() {
  const context=useContext(ModalContext);
  return (
    <div className="App">
      {context.isModal && <ModalWrapper/>}
      <Header/>
      <Section/>
    </div>
  );
}

export default App;
