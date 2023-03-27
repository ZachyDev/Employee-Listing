import React, { useState } from 'react'

function Employee() {
    const [employee, setEmployee] = useState([
        { 'code': '1001', 'name': 'Fancis Xavier', 'salary': '10000', 'status': 'Active' },
        { 'code': '1002', 'name': 'Alex Raj', 'salary': '11000', 'status': 'Active' },
        { 'code': '1003', 'name': 'Robert wilson', 'salary': '11000', 'status': 'Active' },
        { 'code': '1004', 'name': 'Rahul sharma', 'salary': '12000', 'status': 'Active' },
        { 'code': '1005', 'name': 'sandeep kumar', 'salary': '13000', 'status': 'Active' }
    ])
    return (
        <div>
            <h1>Employee List</h1>
            <table>
                <thead>
                    <tr>
                        <td>Code</td>
                        <td>Name</td>
                        <td>Salary</td>
                        <td>Status</td>
                        <td>Action</td>
                    </tr>
                </thead>
                <tbody>
                    {employee.map(item => {
                        return (
                            <tr id={item.code}>
                                <td>{item.code}</td>
                                <td>{item.name}</td>
                                <td>{item.salary}</td>
                                <td>{item.status}</td>
                                <td><button>Edit</button></td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default Employee