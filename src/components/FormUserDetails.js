import React from 'react'

export const FormUserDetails = ({handleChange , nextStep , prevStep,values:{step , firstName, lastName, email}}) => {
  
  
    return (
        <div>
         
          <div class="form-group">
    <label for="exampleInputEmail1">first name</label>
    <input onChange={handleChange('firstName')} defaultValue={firstName} type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="first name"/>

  </div>
  <div class="form-group">
    <label for="exampleInputEmail1">last name</label>
    <input onChange={handleChange('lastName')} defaultValue={lastName} type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="last name"/>

  </div>
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input onChange={handleChange('email')} defaultValue={email} type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="email"/>
       </div>
       
       <button type="submit" onClick={nextStep} class="btn btn-primary">continue</button>
  

       
        </div>
    )
}
export default FormUserDetails
