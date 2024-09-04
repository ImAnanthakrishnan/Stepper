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
  console.log(status);
  return (
    <section className="stepper-container">
      <div className="top-stepper">
        { status.profile === "progress" ? (
          <MdOutlineRadioButtonChecked color="orange" size={30} />
        ) : status.profile === "completed" ? (
          <BsCheckCircleFill color="green" size={30} />
        ) : (
          <BsCircleFill color="lightblue" size={30}/>
        )}
        <BsDashLg size={60} />
        {status.address === "progress" ? (
          <MdOutlineRadioButtonChecked color="orange" size={30} />
        ) : status.address === "completed" ? (
          <BsCheckCircleFill color="green" size={30} />
        ) : (
          <BsCircleFill color="lightblue" size={30}/>
        )}
        <BsDashLg size={60} />
        {status.education === "progress" ? (
          <MdOutlineRadioButtonChecked color="orange" size={30} />
        ) : status.education === "completed" ? (
          <BsCheckCircleFill color="green" size={30} />
        ) : (
          <BsCircleFill color="lightblue" size={30}/>
        )}
        <BsDashLg size={60} />
        {status.summary === "pending" ? <BsCircleFill color="lightblue" size={30} /> : <BsCheckCircleFill color="green" size={30} />}
      </div>
      <div className="bottom-stepper">
        <div className="bottom-container">
          <h5>STEP 1</h5>
          <h3>Profile</h3>
          <h5 style={status.profile =="completed" ? {color:'yellowgreen'} : status.profile == "progress" ? {color:'orange'} : {color:'lightblue'}  }>{status.profile}</h5>
        </div>
        <div className="bottom-container">
          <h5>STEP 2</h5>
          <h3>Location</h3>
          <h5  style={status.address =="completed" ? {color:'yellowgreen'} : status.address == "progress" ? {color:'orange'} : {color:'lightblue'}  }>{status.address}</h5>
        </div>
        <div className="bottom-container">
          <h5>STEP 3</h5>
          <h3>Education</h3>
          <h5  style={status.education =="completed" ? {color:'yellowgreen'} : status.education == "progress" ? {color:'orange'} : {color:'lightblue'}  }>{status.education}</h5>
        </div>
        <div className="bottom-container">
          <h5>STEP 5</h5>
          <h3>Summary</h3>
          <h5  style={status.summary =="completed" ? {color:'yellowgreen'} : status.summary == "progress" ? {color:'orange'} : {color:'lightblue'}  }>{status.summary}</h5>
        </div>
      </div>
    </section>
  );
};

export default Stepper;
