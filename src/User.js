import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export const User = () => {
  const [user, setuser] = useState([]);
  useEffect(() => {
    setuser([
      {
        id: 1,
        username: "person1",
        Email: "person1@gmail.com",
        country: "india",
        state: "tamil nadu",
        city: "kannya kumari",
        phone: "23454345",
        DOD: "23-3-1000",
        Gender: "male"
      },
      {
        id: 2,
        username: "person2",
        Email: "person2@gmail.com",
        country: "india",
        state: "tamil nadu",
        city: "chennai",
        phone: "234543452",
        DOD: "23-4-2000",
        Gender: "female"
      }, {
        id: 3,
        username: "person3",
        Email: "person3@gmail.com",
        country: "india",
        state: "tamil nadu",
        city: "chennai",
        phone: "234543452",
        DOD: "23-4-2000",
        Gender: "female"
      }
    ])
  }, [])
  return (
    <div class="container-fluid">
      <div class="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 class="h3 mb-0 text-gray-800">Users</h1>
        <Link to={"/User_create"} class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
          class="fas fa-download fa-sm text-white-50"></i>Create user</Link>
      </div>
      <div class="card shadow mb-4">
        <div class="card-header py-3">
          <h6 class="m-0 font-weight-bold text-primary">DataTables Example</h6>
          <div class="card-body">
            <div class="table-responsive">
              <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                <thead>
                  <tr>
                  <th>ID</th>
                    <th>UserName</th>
                    <th>Email</th>
                    <th>country</th>
                    <th>state</th>
                    <th>city</th>
                    <th>phone</th>
                    <th>DOD</th>
                    <th>Gender</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tfoot>
                <tr>
                  <th>ID</th>
                    <th>UserName</th>
                    <th>Email</th>
                    <th>country</th>
                    <th>state</th>
                    <th>city</th>
                    <th>phone</th>
                    <th>DOD</th>
                    <th>Gender</th>
                    <th>Action</th>
                  </tr>
                </tfoot>
                <tbody>

                  {user.map((users) => {
                    return <tr>
                      <td>{users.id}</td>
                      <td>{users.username}</td>
                      <td>{users.Email}</td>
                      <td>{users.country}</td>
                      <td>{users.state}</td>
                      <td>{users.city}</td>
                      <td>{users.phone}</td>
                      <td>{users.DOD}</td>
                      <td>{users.Gender}</td>
                      <td>
                        <Link to={`/User/${users.id}`} className='btn btn-primary' style={{marginRight:"10px"}}>view</Link>
                      
                        <Link to={`/Users/${users.id}`} className='btn btn-warning'>Edit</Link>
                      </td>
                    </tr>
                  })}


                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default User