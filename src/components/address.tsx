import React from "react";
import { PropsType } from "../utils/types";

const Address = ({ handleChange, handleSubmit, formData }: PropsType) => {
  return (
    <section className="feature">
      <h2 className="heading">Location</h2>
      <form onSubmit={()=>handleSubmit('address')}>
        <div className="feature-input">
          <input
            type="text"
            placeholder="Address"
            name="address"
            value={formData.address}
            onChange={handleChange}
          />
          {/*errors.email && <p className="errors">{errors.email}</p>*/}
        </div>
        <div className="feature-input">
          <input
            type="text"
            placeholder="Place"
            name="place"
            value={formData.place}
            onChange={handleChange}
          />
          {/*errors.password && <p className="errors">{errors.password}</p>*/}
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
          {/*errors.password && <p className="errors">{errors.password}</p>*/}
        </div>
        <div className="feature-input">
          <input
            type="text"
            name="state"
            value={formData.state}
            placeholder="State"
            id=""
          />
          {/*errors.password && <p className="errors">{errors.password}</p>*/}
        </div>
        <button>
          <span>Submit</span>
        </button>
      </form>
    </section>
  );
};

export default Address;
