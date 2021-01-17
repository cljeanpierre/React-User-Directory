import React from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Table from "./components/Table";

function App() {
  return (
    <div className="jumbotron">
      <p className="title">
        Employee Directory
      </p>
      <Table />;
    </div>
  );
}

export default App;
