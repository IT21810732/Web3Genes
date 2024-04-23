import React, { useState } from "react";
import axios from "axios";

export default function UserOnboard() {
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [mobile_number, setMobileNumber] = useState("");
  const [email, setEmail] = useState("");
  const [submitting, setSubmitting] = useState(false); // To track form submission status

  // Function to clear form data
  const clearForm = () => {
    setFirstName("");
    setLastName("");
    setDob("");
    setGender("");
    setMobileNumber("");
    setEmail("");
  };

  function handleSubmit(e) {
    e.preventDefault();
    // Prepare data object to be sent to the backend
    const userData = {
      first_name,
      last_name,
      dob,
      gender,
      mobile_number,
      email
    };

    // Set submitting status to true
    setSubmitting(true);

    // Make an HTTP POST request to your backend API endpoint
    axios
      .post("http://localhost:8070/user/add", userData)
      .then((response) => {
        console.log("Data successfully submitted:", response.data);
        // Optionally, you can handle success, e.g., show a success message
      })
      .catch((error) => {
        console.error("Error submitting data:", error);
        // Optionally, you can handle errors, e.g., show an error message
      })
      .finally(() => {
        // Set submitting status to false after request is completed
        setSubmitting(false);
      });
  }

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="card">
            <div className="card-body">
              <h2>User Onboard</h2>
              <form onSubmit={handleSubmit}>
                <div className="form-section">
                  <h5>Basic Details</h5>
                  <div className="form-row">
                    <div className="col-md-4">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="First Name"
                        value={first_name}
                        onChange={(e) => setFirstName(e.target.value)}
                        required
                      />
                    </div>
                    <div className="col-md-4">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Last Name"
                        value={last_name}
                        onChange={(e) => setLastName(e.target.value)}
                        required
                      />
                    </div>
                    <div className="col-md-4">
                      <input
                        type="date"
                        className="form-control"
                        placeholder="Date of Birth"
                        value={dob}
                        onChange={(e) => setDob(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  <div className="mb-3">
                    <select
                      className="form-select"
                      placeholder="Select Gender"
                      value={gender}
                      onChange={(e) => setGender(e.target.value)}
                      required
                    >
                      <option value="">Select Gender</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>
                <div className="form-section">
                  <h5>Contact Details</h5>
                  <div className="form-row">
                    <div className="col-md-6">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Mobile Number"
                        value={mobile_number}
                        onChange={(e) => setMobileNumber(e.target.value)}
                        required
                      />
                    </div>
                    <div className="col-md-6">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                </div>
                <div className="d-flex justify-content-end"> {/* Align buttons to the right */}
                  <button
                    type="button"
                    className="btn btn-outline-primary me-2"
                    onClick={clearForm} // Call clearForm function on click
                  >
                    Clear
                  </button>
                  <button type="submit" className="btn btn-primary" disabled={submitting}>
                    {submitting ? "Submitting..." : "Save"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
