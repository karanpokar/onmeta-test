import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    /* global onMetaWidget */
  if(document.getElementById('widget').innerHTML === ""){
    let createWidget = new onMetaWidget({
      elementId: "widget",
      apiKey: "b911cb3f-3e53-4faa-a4ad-43509c19baf2",
      walletAddress: "0xFFc39eab0fb83Es0c536c35C44D578F450FDBB6E",
    });
    createWidget.init();
    createWidget.on("ALL_EVENTS", (status) => console.log(status));
    console.log('OnMetaWidget')
  }
      

    
    
    //console.log(document.body,script)
  }, []);
  return (
    <div className="App">
      <div id={'widget'}/>
    </div>
  );
}

export default App;
