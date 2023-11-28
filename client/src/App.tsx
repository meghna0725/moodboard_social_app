import React from 'react';
import './App.css';
import SignIn from './pages/SignIn';
import Dashboard from './pages/Dashboard';
import Router from './components/Router';

function App() {

  const clientId = process.env.GOOGLE_CLIENT_ID || '209727573780-hqa2oathlqi3pjemqct7afsk7cavodn1.apps.googleusercontent.com';

  // configure router
  return (
    <div className="App">
        <SignIn />
    </div>
  );
}

export default App;
