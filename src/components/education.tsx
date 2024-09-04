import { PropsType } from '../utils/types'
import { IoArrowBackCircleOutline } from 'react-icons/io5'

const Education = ({handleChange,handleSubmit,formData,errors,handleBack}:PropsType) => {
  return (
    <section className='feature'>
      <h2 className="heading">Education</h2>
      <div className='form'>
        <div className="feature-input">
          <input
            type="text"
            placeholder="Highest Qualification"
            name="qualification"
            value={formData.qualification}
            onChange={handleChange}
          />
          {errors.qualification && <p className="errors">{errors.qualification}</p>}
        </div>
        <div className="feature-input">
          <input
            type="text"
            placeholder="Specification"
            name="specification"
            value={formData.specification}
            onChange={handleChange}
          />
          {errors.specification && <p className="errors">{errors.specification}</p>}
        </div>
        <div className="feature-input">
          <input
            type="text"
            placeholder="CGPA"
            name="cgpa"
            value={formData.cgpa}
            onChange={handleChange}
          />
          {errors.cgpa && <p className="errors">{errors.cgpa}</p>}
        </div>
        <div className="feature-input">
          <input
            type="text"
            placeholder="University/Institute"
            name="university"
            value={formData.university}
            onChange={handleChange}
          />
          {errors.university && <p className="errors">{errors.university}</p>}
        </div>
        <button onClick={()=>handleSubmit('summary')}><span>Submit</span></button>
      </div>
      <p className='back' onClick={handleBack}><IoArrowBackCircleOutline size={20}/> Back</p>
    </section>
  )
}

export default Education
