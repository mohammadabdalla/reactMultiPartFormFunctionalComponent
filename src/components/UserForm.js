import React , {useState} from 'react'
import NavBar from './NavBar'
import FormUserDetails from './FormUserDetails';
import FormPersonalDetails from './FormPersonalDetails';
import Confirm from './Confirm';
import Success from './Success';
export const UserForm = () => {
      const [FormData , setFormData] = useState({
        step: 1,
        firstName: '',
        lastName: '',
        email: '',
        occupation: '',
        city: '',
        bio: ''
      })
      // Proceed to next step
  const nextStep = (e) => {
    e.preventDefault();
    const { step } = FormData;
    setFormData({
      ...FormData,
      step: step + 1
      
    });
  };

  // Go back to prev step
   const prevStep = (e) => {
    e.preventDefault();
    const { step } = FormData;
    setFormData({
      ...FormData,
      step: step - 1
      
    });
  }; 
  // Handle fields change
  const handleChange = input => e => {
    e.preventDefault();
    setFormData({ ...FormData ,
      [input]: e.target.value });
  }; 
      
      const {step , firstName, lastName, email, occupation, city, bio } = FormData;
      const values = { step ,firstName, lastName, email, occupation, city, bio };
    return (
      
        <div>
          <NavBar/>
         
          
         {step === 1? <FormUserDetails
            nextStep={nextStep}
            handleChange={handleChange}
            values={values}
          />:null}

         {step === 2? <FormPersonalDetails
            nextStep={nextStep}
            prevStep={prevStep}
            handleChange={handleChange}
            values={values}
          />:null}


         {step === 3?<Confirm
            nextStep={nextStep}
            prevStep={prevStep}
            values={values}
          />:null}
             

         {step === 4?<Success />:null}
     
        </div>
    )
}

export default UserForm

