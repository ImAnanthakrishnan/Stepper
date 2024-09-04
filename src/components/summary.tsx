import React from 'react'
import { FormType } from '../utils/types'

const Summary = ({formData}:{formData:FormType}) => {
  return (
    <section className="form-listing-container">
      <h1 style={{textAlign:'center',marginBottom:'10px'}}>Summary</h1>
      <div className="form-row">
        <div className="form-section">
          <h2>Profile</h2>
          <p>Name: {formData.name}</p>
          <p>Age: {formData.age}</p>
          <p>Email: {formData.email}</p>
          <p>Contact: {formData.contact}</p>
        </div>

        <div className="form-section">
          <h2>Location</h2>
          <p>Address: {formData.address}</p>
          <p>Place: {formData.place}</p>
          <p>Pincode: {formData.pincode}</p>
          <p>State: {formData.state}</p>
        </div>
      <div className="form-section">
        <h2>Education</h2>
        <p>Qualification: {formData.qualification}</p>
        <p>Specification: {formData.specification}</p>
        <p>CGPA: {formData.cgpa}</p>
        <p>University: {formData.university}</p>
      </div>
      </div>
    </section>
  )
}

export default Summary
