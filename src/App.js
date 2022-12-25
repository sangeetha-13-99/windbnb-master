import './App.css';
import Header from "./components/Layout/Header";
import Section from "./components/Layout/Section";
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
      <div className='footer'>created by <span>Sangeeth Jula</span>- devChallenges.io</div>
    </div>
  );
}

export default App;
