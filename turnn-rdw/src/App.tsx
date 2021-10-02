import React from 'react';
import logo from './logo.png';
import './App.css';
import RdwForm from './RdwForm';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div className="rdw-form">
          <p><b>Hoe werkt het?</b><br />
            In de gele kentekenplaat kunt u het Nederlandse kenteken invoeren en vervolgens op [Gegevens opvragen] klikken. Alle voor deze dienst beschikbare voertuiggegevens worden getoond, verdeeld over een aantal tabbladen. Voor meer informatie over een bepaald gegeven klikt u op de informatieknop. Voor sommige voertuiggegevens wordt een code getoond die bestaat uit alleen een letter of een letter en een getal.</p>
          <p><b>Vul hieronder uw kenteken in:</b></p>
          <RdwForm/>
      </div>
    </div>
  );
}

export default App;
