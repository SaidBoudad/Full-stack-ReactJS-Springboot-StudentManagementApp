
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HeaderComponent from './Component/HeaderComponent';
import FooterComponent from './Component/FooterComponent';
import ListStudentComponent from './Component/ListStudentComponent';
import CreateStudentComponent from './Component/CreateStudentComponent';
import ViewStudentComponent from './Component/ViewStudentComponent';


function App() {
  return (
      <Router>
        <div className="container">
          <HeaderComponent />
          <Routes>
            <Route path="/" element={<ListStudentComponent />} />
            <Route path="/students" element={<ListStudentComponent />} />
            <Route path="/students/add" element={<CreateStudentComponent />} />
            <Route path="/students/update/:id" element={<CreateStudentComponent />} />        
            <Route path="/students/view/:id" element={<ViewStudentComponent />} />          
          </Routes>       
          <FooterComponent />
        </div>
      </Router>
  );
}

export default App;
