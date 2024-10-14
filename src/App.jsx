import './css/main.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BusinessPerformance from './pages/BusinessPerformance';
import Driver from './pages/Driver';
import Quality from './pages/Quality';
import Operation from './pages/Operation';

// export default function App() {

//   return (
//     <div><BusinessPerformance/></div>
//     // <div><Driver/></div>
//     // <div><Quality/></div>
//     // <div><Operation/></div>
    
//   )
// }
export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/business-performance" element={<BusinessPerformance />} />
        <Route path="/driver" element={<Driver />} />
        <Route path="/quality" element={<Quality />} />
        <Route path="/operation" element={<Operation />} />
        <Route path="/" element={<BusinessPerformance />} /> 
      </Routes>
    </Router>
  );
}
