
import React, { useState } from 'react';
import { Layout } from './components/Layout';
import { Landing } from './views/Landing';
import { RegisterLocal, RegisterForeign, RegisterCorporate } from './views/RegistrationViews';
import { Login, Success } from './views/AuthViews';
import { Dashboard } from './views/Dashboard';
import { EditProfile } from './views/ProfileViews';
import { ViewState } from './types';

function App() {
  const [currentView, setCurrentView] = useState<ViewState>(ViewState.LANDING);

  // Helper to handle successful registration
  const handleRegistrationSuccess = (data: any) => {
    // In a real app, we would send 'data' to backend here
    console.log("Registration Data:", data);
    setCurrentView(ViewState.SUCCESS);
  };

  const renderView = () => {
    switch (currentView) {
      case ViewState.LANDING:
        return <Landing setView={setCurrentView} />;
      case ViewState.REGISTER_LOCAL:
        return <RegisterLocal setView={setCurrentView} onSuccess={handleRegistrationSuccess} />;
      case ViewState.REGISTER_FOREIGN:
        return <RegisterForeign setView={setCurrentView} onSuccess={handleRegistrationSuccess} />;
      case ViewState.REGISTER_CORPORATE:
        return <RegisterCorporate setView={setCurrentView} onSuccess={handleRegistrationSuccess} />;
      case ViewState.LOGIN:
        return <Login setView={setCurrentView} />;
      case ViewState.SUCCESS:
        return <Success setView={setCurrentView} />;
      case ViewState.DASHBOARD:
        return <Dashboard setView={setCurrentView} />;
      case ViewState.EDIT_PROFILE:
        return <EditProfile setView={setCurrentView} />;
      default:
        return <Landing setView={setCurrentView} />;
    }
  };

  return (
    <Layout currentView={currentView} setView={setCurrentView}>
      {renderView()}
    </Layout>
  );
}

export default App;