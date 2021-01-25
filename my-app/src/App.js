import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
// import EmployeeTable from "./src/components/EmployeeTable"


// import API from "./utils/API";

export default class App extends React.Component {

  state = {
    employees: []
  }

  componentDidMount() {
    axios.get("https://randomuser.me/api?results=200&nat=us")
      .then(res => {
        const employees = res.data.results;
        this.setState({ employees });
      })
  };

  //Map over this.state.employees and render an EmployeeTable component for each employee object
  // function App() {
  render() {
    return(
      <div>
      {this.state.employees.map(employee => (
        <div>
          <div>
            {employee.name.first}
          </div>
          <div>
            {employee.name.last}
          </div>
          <div>
            {employee.telephone}
          </div>
          <div>
            {employee.email}
          </div>
          <div>
            {employee.dob.age}
          </div>
        </div>
      ))}
      </div>
    )  
 
  
  }
}
