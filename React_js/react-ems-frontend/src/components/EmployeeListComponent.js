import React,{useState, useEffect} from 'react'
import EmployeeService from '../services/EmployeeService'

const EmployeeListComponent = () => {

  const [employees, setEmployees] = useState([])

  useEffect(() => {
    
        EmployeeService.getAllEmployees().then((response) => {
            setEmployees(response.data)
            console.log(response.data);
        }).catch(error => {
            console.log(error);
        })

  }, [])
  

  return (
    <div className="container">
        <h2 className="text-center">Employees List</h2>
        <table className="table table-bordered table-striped">
            <thead>
                <th>Employee ID</th>
                <th>First name</th>
                <th>Last name</th>
                <th>Employee Email Adress</th>
            </thead>
            <tbody>
                {
                    employees.map(
                        employee => 
                        <tr key={employee.id}>
                            <td>{employee.id}</td>
                            <td>{employee.firstName}</td>
                            <td>{employee.lastName}</td>
                            <td>{employee.emailId}</td>
                        </tr>
                    )
                }
            </tbody>
        </table>
    </div>
  )
}

export default EmployeeListComponent