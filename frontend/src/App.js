import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import PrivateRoute from './utils/PrivateRoute'
import { AuthProvider } from './context/AuthContext'

import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import RegistrationPage from'./pages/RegistrationPage'
import Header from './components/Header'
import NewContactPage from './pages/NewContactPage'
import UpdateContactPage from './pages/UpdateContactPage'
import UploadExcel from './pages/UploadExcel'

function App() {
  return (
    <div className="App">
      <Router>
        <AuthProvider>
          <Header />
          <PrivateRoute component={HomePage} path="/" exact/>
          <PrivateRoute component={NewContactPage} path="/new-contact" exact/>
          <PrivateRoute component={UpdateContactPage} path="/contact" exact/>
          <PrivateRoute component={UploadExcel} path="/upload-excel" />
          <Route component={LoginPage} path="/login"/>
          <Route component={RegistrationPage} path="/signup"/>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;