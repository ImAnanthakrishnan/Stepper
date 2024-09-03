import { useState } from "react";
import Profile from "../components/profile";
import Address from "../components/address";
import Education from "../components/education";
import Stepper from "../components/stepper";
import { FormType, StatusFullType,TabType } from "../utils/types";

const Home = () => {
  const [tab, setTab] = useState<TabType>("profile");
  const [status, setStatus] = useState<StatusFullType>({profile:"progress",address:"pending",education:"pending"});
  const [formData,setFormData] = useState<FormType>({
    name:"",age:0,email:"",contact:"",
    qualification:"",specification:"",cgpa:0,university:"",
    address:"",place:"",pincode:0,state:""
  })
  const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name] : e.target.value
    }))
  };
  const handleSubmit = (currenTab:TabType) => {
      setTab(currenTab)
  };

  return (
    <section className="container">
      {tab === "profile" ? (
        <Profile handleChange={handleChange} handleSubmit={handleSubmit} setStatus={setStatus} formData={formData}/>
      ) : tab === "address" ? (
        <Address handleChange={handleChange} handleSubmit={handleSubmit} setStatus={setStatus} formData={formData}/>
      ) : (
        <Education handleChange={handleChange} handleSubmit={handleSubmit} setStatus={setStatus} formData={formData}/>
      )}
      <Stepper setTab={setTab} tab={tab} status={status}/>
    </section>
  );
};

export default Home;
