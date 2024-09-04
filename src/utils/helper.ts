export const profileValidation = (values: any): { [key: string]: string } => {
  const errors: { [key: string]: string } = {};
  const isValidEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  if (!values.name) {
    errors.name = "Name is required";
  }

  if (!values.email) {
    errors.email = "Email is required";
  } else if (!isValidEmail(values.email)) {
    errors.email = "Email is not valid";
  }

  if (!values.age) {
    errors.age = "Age is required";
  } else if(typeof values.age !== "string"){
    errors.age = "Enter valid age";
  }

  if (!values.contact) {
    errors.contact = "Contact is required";
  }
  return errors;
};

export const addressValidation = (values: any): { [key: string]: string } => {
    const errors: { [key: string]: string } = {};

    if (!values.address) {
      errors.address = "Address is required";
    }
  
    if (!values.place) {
      errors.place = "Place is required";
    }
  
    if (!values.pincode) {
      errors.pincode = "pincode is required";
    }
  
    if (!values.state) {
      errors.state = "State is required";
    }
  
    return errors;
};

export const educationValidation = (values: any): { [key: string]: string } => {
    const errors: { [key: string]: string } = {};

    if (!values.qualification) {
      errors.qualification = "Qualification is required";
    }
  
    if (!values.specification) {
      errors.specification = "Specification is required";
    }
  
    if (!values.cgpa) {
      errors.cgpa = "cgpa is required";
    }
  
    if (!values.university) {
      errors.university = "University is required";
    }
  
    return errors;
};
