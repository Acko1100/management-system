import React, { useState } from 'react'
import {useHistory} from 'react-router-dom';
import EmployeeService from '../services/EmployeeService'
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { toast } from 'react-toastify';


const AddEmployeeComponent = () => {


  const [firstName,setFirstName] = useState('')
  const [lastName,setLastName] = useState('')
  const [emailId,setEmailId] = useState('')
  const history = useHistory();

  const saveEmployee = (event) => {
    event.preventDefault();

    if (!firstName || !lastName || !emailId) {
      toast.error('Please fill in all fields before submitting.');
      return;
    }

    const employee = {firstName, lastName, emailId}

    EmployeeService.addEmployee(employee).then ((response) => {
      
      console.log(response.data)

      history.push("/employees"); 

    }).catch(error => {
      console.log(error);
    })

  }

  return (
    <div>
        
        <div className="container py-5">
          <div className="row">
            <div className="card col-md-6 ofset-md-3 offset-md-3">
                <h2 className="text-center">Add Employee</h2>
                  <div className="card-body">
                    <form>
                      <div className="form-group mb-2">
                        <label className="form-label"> First Name </label>
                        <input
                          type="text"
                          placeholder="Enter employee's first name"
                          name="firstName"
                          className="form-control"
                          value={firstName}
                          onChange={(event) => setFirstName(event.target.value)}>

                         </input>
                      </div>


                      <div className="form-group mb-2">
                        <label className="form-label"> Last Name </label>
                        <input
                          type="text"
                          placeholder="Enter employee's last name"
                          name="lastName"
                          className="form-control"
                          value={lastName}
                          onChange={(event) => setLastName(event.target.value)}>

                         </input>
                      </div>

                      <div className="form-group mb-2">
                        <label className="form-label"> Email </label>
                        <input
                          type="email"
                          placeholder="Enter employee's email adress"
                          name="emailId"
                          className="form-control"
                          value={emailId}
                          onChange={(event) => setEmailId(event.target.value)}>

                         </input>
                      </div>


                    <div className="button-container">
                      <button className="btn btn-success" onClick={(event) => saveEmployee(event)}> Submit</button>
                      <div className="spacer"></div>
                      <Link to = "/employees" className="btn btn-danger"> Cancel </Link>
                    </div>

                    </form>
                      
                  </div>
            </div>

          </div>
        </div>

    </div>
  )
}

export default AddEmployeeComponent