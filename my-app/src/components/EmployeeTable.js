// import React from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import {BootstrapTable, TableHeaderColumn} from "react-bootstrap-table";
// import App from "./src/App.js"

// let order = 'desc';
// class SortTable extends React.Component {

//   handleBtnClick = () => {
//     if (order === 'desc') {
//       this.refs.table.handleSort('asc', 'name');
//       order = 'asc';
//     } else {
//       this.refs.table.handleSort('desc', 'name');
//       order = 'desc';
//     }
//   }

//   render() {
//     return (
//       <div>
//         <p style={ { color: 'red' } }>You can click header to sort or click following button to perform a sorting by expose API</p>
//         <button onClick={ this.handleBtnClick }>Sort Employees</button>
//         <BootstrapTable ref='table' data={App}>
//             <TableHeaderColumn dataField='id' isKey={ true } dataSort={ true }>Product ID</TableHeaderColumn>
//             <TableHeaderColumn dataField='name' dataSort={ true }>Product Name</TableHeaderColumn>
//             <TableHeaderColumn dataField='price'>Product Price</TableHeaderColumn>
//         </BootstrapTable>
//       </div>
//     );
//   }
// }

// export default SortTable;

// function EmployeeTable(props) {
//   return (
//    // <div className="text-center">
//     //   {props.results.map(item => (
//     //     <h3>{props.firstName}</h3>
//     //     <h3>{props.lastName}</h3>
//     //     <h3>{props.telephone}</h3>
//     //     <h3>{props.email}</h3>
//     //     <h3>{props.birthDate}</h3>
//   )
// }
// export default EmployeeTable;