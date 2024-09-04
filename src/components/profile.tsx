import { PropsType } from "../utils/types";

const Profile = ({
  handleChange,
  handleSubmit,
  formData,
  errors,
}: PropsType) => {
  return (
    <section className="feature">
      <h2 className="heading">Profile</h2>
      <div className="form">
        <div className="feature-input">
          <input
            type="text"
            placeholder="Fullname"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <p className="errors">{errors.name}</p>}
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
          {errors.age && <p className="errors">{errors.age}</p>}
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
          {errors.email && <p className="errors">{errors.email}</p>}
        </div>
        <div className="feature-input">
          <input
            type="text"
            placeholder="Contact Number"
            name="contact"
            value={formData.contact}
            onChange={handleChange}
          />
          {errors.contact && <p className="errors">{errors.contact}</p>}
        </div>
        <button onClick={() => handleSubmit("address")}>
          <span>Submit</span>
        </button>
      </div>
    </section>
  );
};

export default Profile;
