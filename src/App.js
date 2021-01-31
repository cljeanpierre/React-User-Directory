import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import FilterBox from "../src/components/FilterBox"


export default class App extends React.Component {

  state = {
    employees: [],
    filteredEmployees: [],
    filterValue: "",
    sortCategory: "",
    isSorted: false,
    isFiltered: false,
  }



  componentDidMount() {
    axios.get("https://randomuser.me/api?results=200&nat=us")
      .then(res => {
        const employees = res.data.results;
        this.setState({ employees });
      })
  };
  
  // Store user filter input in React state
  handleInput = e => {
    console.log (e.target.value);
    this.setState({filterValue: e.target.value});
  }


  //Handle submission of the user's filter
  submitFilter = () => {
    // If the user has entered a filter, apply it.
    if (this.state.filterValue.length) {
      return this.setState({
        isFiltered: true,
        filteredEmployees: this.state.employees.filter(employee => {
          return +employee.dob.age === +this.state.filterValue;
        })
      })
    // If the user clears the filter, or it is already empty, reset the filtered tool
    } else {
      return this.setState({
        isFiltered: false,
      })
    }
  }

  handleSort = (category) => {
    //category will be 'age'
    return this.setState({
      isSorted: true, 
      filterValue: '',
      isFiltered: false,
      filteredEmployees: [],
      sortCategory: category,
      employees: this.state.employees.sort((a, b) => +a.dob.age - +b.dob.age),
    })
  };

  //Map over this.state.employees and render a component for each employee object

    render() {
      // const stateKeyToRender = this.state.isFiltered ? 'filteredEmployees' : 'employees'
      let stateKeyToRender; 
      if (this.state.isFiltered) {
        stateKeyToRender = 'filteredEmployees';
      } else {
        stateKeyToRender = 'employees';
      };

      return(
        <div className="jumbotron">
          <h1 className="display-4 text-center">Employee Directory</h1>
          <br></br>
          <br></br>
        <FilterBox 
          filterValue = {this.state.filterValue}
          handleInput = {this.handleInput}
          submitFilter = {this.submitFilter} 
        />    
        <br></br>
          <div>
          <table className="table">
            <thead className="thead-dark">
              <tr>
              <th scope="col First Name">First Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">Telephone</th>
              <th scope="col">Email Address</th>
              <th scope="col">City</th>
              <th scope="col">State</th>
              <th scope="col">Zip Code</th>
              <th scope="col" onClick={() => this.handleSort('age')}>Age</th>
              </tr>
            </thead>
              <tbody>
                {this.state[stateKeyToRender].map(employee => {
                  return (
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
                  )
                }
                )}
              </tbody>
            </table>
          </div>
        ))
        </div>
      )  
    }
}
