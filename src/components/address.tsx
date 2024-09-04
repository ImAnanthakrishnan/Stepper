import { PropsType } from "../utils/types";
import { IoArrowBackCircleOutline } from "react-icons/io5";

const Address = ({ handleChange, handleSubmit, formData,errors,handleBack }: PropsType) => {
  return (
    <section className="feature">
      <h2 className="heading">Location</h2>
      <div className="form">
        <div className="feature-input">
          <input
            type="text"
            placeholder="Address"
            name="address"
            value={formData.address}
            onChange={handleChange}
          />
          {errors.address && <p className="errors">{errors.address}</p>}
        </div>
        <div className="feature-input">
          <input
            type="text"
            placeholder="Place"
            name="place"
            value={formData.place}
            onChange={handleChange}
          />
          {errors.place && <p className="errors">{errors.place}</p>}
        </div>
        <div className="feature-input">
          <input
            type="text"
            placeholder="Pincode"
            name="pincode"
            value={formData.pincode}
            min={1}
            onChange={handleChange}
          />
          {errors.pincode && <p className="errors">{errors.pincode}</p>}
        </div>
        <div className="feature-input">
          <input
            type="text"
            name="state"
            value={formData.state}
            placeholder="State"
            onChange={handleChange}
            id=""
          />
          {errors.state && <p className="errors">{errors.state}</p>}
        </div>
        <button onClick={()=>handleSubmit('education')}>
          <span>Submit</span>
        </button>
      </div>
      <p className='back' onClick={handleBack}><IoArrowBackCircleOutline size={20}/> Back</p>
    </section>
  );
};

export default Address;
