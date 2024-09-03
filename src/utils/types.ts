export type PropsType = {
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleSubmit: (tab:TabType) => void;
    setStatus: React.Dispatch<React.SetStateAction<StatusFullType>>;
    formData:FormType;
    errors:{[key:string]:string};
    handleBack?:() => void;
};
  
export type TabType = "profile" | "address" | "education" | "summary";  

export type StatusType = "completed" | "progress" | "pending";

export type StatusFullType = {
    profile:StatusType;
    address:StatusType;
    education:StatusType;
    summary:StatusType;
}

export type FormType = {
    name:string;
    age:number|string;
    email:string;
    contact:string;
    qualification?:string;
    specification?:string;
    cgpa?:number|string;
    university?:string;
    address?:string;
    place?:string;
    pincode?:number|string;
    state?:string;
}