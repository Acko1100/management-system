
import './App.css';
import EmployeeListComponent from './components/EmployeeListComponent';
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';

function App() {
  return (
    <div>
       <HeaderComponent></HeaderComponent>
       <EmployeeListComponent></EmployeeListComponent>
       <FooterComponent></FooterComponent>
    </div>
  );
}


export default App;
