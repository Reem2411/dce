import './App.css';
import Panel from './components/Panel/panel';

function App() {

  const student = {
    id: 1,
    image:
      "https://www.compass-insurance-agency.com/wp-content/uploads/2016/09/girl-education-980x653.jpg",
    firstName: "Velos",
    lastName: "Erpator",
    email: "velos@pangea.edu",
    hobby: 'Running',
  };

  return (
    <div className="App">
      <Panel>
        <Panel type='student'>
          <h1>{student.firstName} {student.lastName}</h1>
          <img src={student.image}/>
          <p> Email: {student.email}</p>
          <p> Favorite hobby: {student.hobby}</p>  
        </Panel>
      </Panel>
    </div>
  );
}

export default App;
