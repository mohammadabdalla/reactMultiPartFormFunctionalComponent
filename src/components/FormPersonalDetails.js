import React from 'react'

export const FormPersonalDetails = ({handleChange, nextStep , prevStep ,values:{step , occupation, city, bio}}) => {
 
    
    return (
        <div>
            
             <div class="form-group">
    <label for="exampleInputEmail1">occupation</label>
    <input onChange={handleChange('occupation')} defaultValue={occupation} type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="occupation"/>

  </div>
  <div class="form-group">
    <label for="exampleInputEmail1">city</label>
    <input onChange={handleChange('city')} defaultValue={city} type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="city"/>

  </div>
  <div class="form-group">
    <label for="exampleInputEmail1">bio</label>
    <input onChange={handleChange('bio')} defaultValue={bio} type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="bio"/>

  </div>

  
  
  
  <button type="submit" onClick={prevStep} class="btn btn-primary m-1">back</button>
  <button type="submit" onClick={nextStep} class="btn btn-primary m-1">continue</button>

  

        </div>
    )
}

export default FormPersonalDetails
