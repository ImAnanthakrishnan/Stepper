import { useState } from "react";
import Profile from "../components/profile";
import Address from "../components/address";
import Education from "../components/education";
import Stepper from "../components/stepper";
import { FormType, StatusFullType, TabType } from "../utils/types";
import { addressValidation, educationValidation, profileValidation } from "../utils/helper";
import Summary from "../components/summary";

const Home = () => {
  const [tab, setTab] = useState<TabType>("profile");
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [status, setStatus] = useState<StatusFullType>({
    profile: "progress",
    address: "pending",
    education: "pending",
    summary:"pending"
  });
  const [formData, setFormData] = useState<FormType>({
    name: "",
    age: "",
    email: "",
    contact: "",
    qualification: "",
    specification: "",
    cgpa: "",
    university: "",
    address: "",
    place: "",
    pincode: "",
    state: "",
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  
  const handleSubmit = (currenTab: TabType) => { 
    let validationErrors:{[key:string]:string} = {};
    if (currenTab === "address") {
      validationErrors = profileValidation(formData);
    } else if (currenTab === "education") {
      validationErrors = addressValidation(formData);
    } else if(currenTab === "summary"){
      validationErrors = educationValidation(formData);
    }
    setErrors(validationErrors);
    let hasErrors = Object.keys(validationErrors).some(error => error !== '');
    if (hasErrors) {
      return;
    }
    setTab(currenTab);
    if(currenTab === "address"){
      setStatus((prev) => ({
        ...prev,
        profile:"completed",
        address:"progress"
      }));
    } else if(currenTab === "education"){
      setStatus((prev) => ({
        ...prev,
        address:"completed",
        education:"progress"
      }));
    } else if(currenTab === "summary"){
      setStatus((prev) => ({
        ...prev,
        education:"completed",
        summary:"completed"
      }));
    }
  };

  const handleBack = () => {
    if(tab === "address"){
      setTab("profile");
      setStatus((prev)=>({
        ...prev,
        profile:"progress",
        address:"pending"
      }))
    } else if(tab === "education"){
      setTab("address");
      setStatus((prev)=>({
        ...prev,
        address:"progress",
        education:"pending"
      }))
    } else if(tab === "summary"){
      setTab("education");
      setStatus((prev)=>({
        ...prev,
        education:"progress",
        summary:"pending"
      }))
    }
  }


  return (
    <section className="container">
      {tab === "profile" ? (
        <Profile
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          setStatus={setStatus}
          formData={formData}
          errors={errors}
        />
      ) : tab === "address" ? (
        <Address
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          setStatus={setStatus}
          formData={formData}
          errors={errors}
          handleBack={handleBack}
        />
      ) : tab === "education" ? (
        <Education
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          setStatus={setStatus}
          formData={formData}
          errors={errors}
          handleBack={handleBack}
        />
      ) : 
      (<Summary formData={formData} handleBack={handleBack}/>)
      }
      <Stepper setTab={setTab} tab={tab} status={status} />
    </section>
  );
};

export default Home;
