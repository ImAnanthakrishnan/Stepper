import { IoArrowBackCircleOutline } from 'react-icons/io5'
import { FormType } from '../utils/types'

const Summary = ({formData,handleBack}:{formData:FormType,handleBack: () => void}) => {
  return (
    <section className="form-listing-container">
      <p className='back' onClick={handleBack} ><IoArrowBackCircleOutline size={20}/> Back</p>
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
