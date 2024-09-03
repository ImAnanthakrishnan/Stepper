export type PropsType = {
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleSubmit: (tab:TabType) => void;
    setStatus: React.Dispatch<React.SetStateAction<StatusFullType>>;
    formData:FormType
};
  
export type TabType = "profile" | "address" | "education";  

export type StatusType = "completed" | "progress" | "pending";

export type StatusFullType = {
    profile:StatusType;
    address:StatusType;
    education:StatusType;
}

export type FormType = {
    name:string;
    age:number;
    email:string;
    contact:string;
    qualification?:string;
    specification?:string;
    cgpa?:number;
    university?:string;
    address?:string;
    place?:string;
    pincode?:number;
    state?:string;
}