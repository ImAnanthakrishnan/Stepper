import React from 'react'
import { PropsType } from '../utils/types'
import { IoArrowBackCircleOutline } from 'react-icons/io5'

const Education = ({handleChange,handleSubmit,formData}:PropsType) => {
  return (
    <section className='feature'>
      <h2 className="heading">Education</h2>
      <form onSubmit={()=>handleSubmit('education')}>
        <div className="feature-input">
          <input
            type="text"
            placeholder="Highest Qualification"
            name="qualification"
            value={formData.qualification}
            onChange={handleChange}
          />
          {/*errors.email && <p className="errors">{errors.email}</p>*/}
        </div>
        <div className="feature-input">
          <input
            type="text"
            placeholder="Specification"
            name="specification"
            value={formData.specification}
            onChange={handleChange}
          />
          {/*errors.password && <p className="errors">{errors.password}</p>*/}
        </div>
        <div className="feature-input">
          <input
            type="text"
            placeholder="CGPA"
            name="cgpa"
            value={formData.cgpa}
            onChange={handleChange}
          />
          {/*errors.password && <p className="errors">{errors.password}</p>*/}
        </div>
        <div className="feature-input">
          <input
            type="text"
            placeholder="University/Institute"
            name="university"
            value={formData.university}
            onChange={handleChange}
          />
          {/*errors.password && <p className="errors">{errors.password}</p>*/}
        </div>
        <button><span>Submit</span></button>
      </form>
      <p className='back'><IoArrowBackCircleOutline size={20}/> Back</p>
    </section>
  )
}

export default Education
