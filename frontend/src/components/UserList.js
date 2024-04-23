import React, { useState, useEffect } from "react";
import axios from "axios";

export default function UserList() {
  const [users, setUsers] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredUsers, setFilteredUsers] = useState([]);

  useEffect(() => {
    // Fetch users data when the component mounts
    axios.get("http://localhost:8070/user")
      .then(response => {
        setUsers(response.data);
      })
      .catch(error => {
        console.error("Error fetching users:", error);
      });
  }, []);

  useEffect(() => {
    // Filter users based on search query
    const filtered = users.filter(user => {
      const fullName = `${user.first_name} ${user.last_name}`;
      return fullName.toLowerCase().includes(searchQuery.toLowerCase());
    });
    setFilteredUsers(filtered);
  }, [searchQuery, users]);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="card">
            <div className="card-body">
              <h2>User List</h2>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search by name"
                  value={searchQuery}
                  onChange={handleSearch}
                />
              </div>
              <table className="table">
                <thead>
                  <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Date of Birth</th>
                    <th>Gender</th>
                    <th>Mobile Number</th>
                    <th>Email</th>
                    
                  </tr>
                </thead>
                <tbody>
                  {filteredUsers.map((user, index) => (
                    <tr key={index}>
                      <td>{user.first_name}</td>
                      <td>{user.last_name}</td>
                      <td>{user.dob}</td>
                      <td>{user.gender}</td>
                      <td>{user.mobile_number}</td>
                      <td>{user.email}</td>
                      
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
