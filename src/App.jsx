import { BrowserRouter as Router } from 'react-router-dom';
import { AuthProvider } from './context/AuthProvider';
import Header from './components/Header/Header';
import AppRouter from './routes/AppRouter';
import './App.css';

export default function App() {
  return (
    <AuthProvider>
      <Router>
        <Header />
        <AppRouter />
      </Router>
    </AuthProvider>
  );
}
