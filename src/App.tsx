import { Routes, Route, Navigate } from 'react-router-dom';
import './App.scss';
import Table from './components/Table';
import ModalForm from './components/ModalForm';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Table />} />
        <Route path="/home" element={<Navigate to="/" replace />} />
        <Route path="/form" element={<ModalForm />} />
        <Route path="*" element={<h1>Page not found</h1>} />
      </Routes>
    </div>
  );
}

export default App;
