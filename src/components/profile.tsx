import React from "react";
import { PropsType } from "../utils/types";


const Profile = ({ handleChange,handleSubmit,formData }: PropsType) => {
  return (
    <section className="feature">
        <h2 className="heading">Profile</h2>
      <form onSubmit={() => handleSubmit('profile')}>
        <div className="feature-input">
          <input
            type="text"
            placeholder="Fullname"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          {/*errors.email && <p className="errors">{errors.email}</p>*/}
        </div>
        <div className="feature-input">
          <input
            type="number"
            placeholder="Age"
            name="age"
            value={formData.age}
            min={1}
            onChange={handleChange}
          />
          {/*errors.password && <p className="errors">{errors.password}</p>*/}
        </div>
        <div className="feature-input">
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={formData.email}
            min={1}
            onChange={handleChange}
          />
          {/*errors.password && <p className="errors">{errors.password}</p>*/}
        </div>
        <div className="feature-input">
          <input
            type="text"
            placeholder="Contact Number"
            name="contact"
            value={formData.contact}
            onChange={handleChange}
          />
          {/*errors.password && <p className="errors">{errors.password}</p>*/}
        </div>
        <button><span>Submit</span></button>
      </form>
    </section>
  );
};

export default Profile;
