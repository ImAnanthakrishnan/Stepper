import React, { useState } from "react";
import { BsCheckCircleFill } from "react-icons/bs";
import { BsCircleFill } from "react-icons/bs";
import { MdOutlineRadioButtonChecked } from "react-icons/md";
import { BsDashLg } from "react-icons/bs";
import { StatusFullType, TabType } from "../utils/types";
const Stepper = ({
  setTab,
  tab,
  status
}: {
  setTab: React.Dispatch<React.SetStateAction<TabType>>;
  tab: string;
  status:StatusFullType
}) => {
  console.log(tab);
  return (
    <section className="stepper-container">
      <div className="top-stepper">
        {tab === "profile" && status.profile === "progress" ? (
          <MdOutlineRadioButtonChecked color="lightblue" size={30} />
        ) : tab === "profile" && status.profile === "completed" ? (
          <BsCheckCircleFill color="green" size={30} />
        ) : (
          <BsCircleFill color="lightblue" size={30}/>
        )}
        <BsDashLg size={60} />
        {tab === "location" && status.address === "progress" ? (
          <MdOutlineRadioButtonChecked color="lightblue" size={30} />
        ) : tab === "location" && status.address === "completed" ? (
          <BsCheckCircleFill color="green" size={30} />
        ) : (
          <BsCircleFill color="lightblue" size={30}/>
        )}
        <BsDashLg size={60} />
        {tab === "education" && status.education === "progress" ? (
          <MdOutlineRadioButtonChecked color="lightblue" size={30} />
        ) : tab === "education" && status.education === "completed" ? (
          <BsCheckCircleFill color="green" size={30} />
        ) : (
          <BsCircleFill color="lightblue" size={30}/>
        )}
        <BsDashLg size={60} />
        {<BsCircleFill color="lightblue" size={30} />}
      </div>
      <div className="bottom-stepper">
        <div className="bottom-container">
          <h5>STEP 1</h5>
          <h3>Profile</h3>
          <h5>{}</h5>
        </div>
        <div className="bottom-container">
          <h5>STEP 2</h5>
          <h3>Location</h3>
          <h5>{}</h5>
        </div>
        <div className="bottom-container">
          <h5>STEP 3</h5>
          <h3>Education</h3>
          <h5>{}</h5>
        </div>
        <div className="bottom-container">
          <h5>STEP 5</h5>
          <h3>Summary</h3>
          <h5>{}</h5>
        </div>
      </div>
    </section>
  );
};

export default Stepper;
