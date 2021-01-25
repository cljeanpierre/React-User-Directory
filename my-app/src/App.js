import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
// import {BootstrapTable, TableHeaderColumn} from "react-bootstrap-table";
// import EmployeeTable from "./src/components/EmployeeTable"

export default class App extends React.Component {

  state = {
    employees: []
  }

  // filter employees by age
  handleClick = () => {
  this.setState({ employees: this.state.employees.filter(employee => employee.dob.age) });
  };

  componentDidMount() {
    axios.get("https://randomuser.me/api?results=200&nat=us")
      .then(res => {
        const employees = res.data.results;
        this.setState({ employees });
      })
  };
  

  //Map over this.state.employees and render a component for each employee object

    render() {
      return(
        <div className="jumbotron">
          <h1 className="display-4 text-center">Employee Directory</h1>
          <br></br>
          <br></br>
              
        <button className="btn btn-primary" onClick={this.handleClick}>
            Delete Age
        </button>{" "}
        <br></br>

        {this.state.employees.map(employee => (
          <div>
          <table className="table">
            <thead className="thead-dark">
              <tr>
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">Telephone</th>
              <th scope="col">Email Address</th>
              <th scope="col">City</th>
              <th scope="col">State</th>
              <th scope="col">Zip Code</th>
              <th scope="col">Age</th>
              </tr>
            </thead>
              <tbody>
                <tr>
                <td>{employee.name.first}</td>
                <td>{employee.name.last}</td>
                <td>{employee.cell}</td>
                <td>{employee.email}</td>
                <td>{employee.location.city}</td>
                <td>{employee.location.state}</td>
                <td>{employee.location.postcode}</td>
                <td>{employee.dob.age}</td>
                </tr>
              </tbody>
            </table>
          </div>
        ))}
        </div>
      )  
    }
}
