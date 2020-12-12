import React from 'react'

export const Confirm = ({nextStep , prevStep ,values:{step , firstName, lastName, email, occupation, city, bio}}) => {
    return (
        <div class="mt-4">
           
            <form>
  <div class="form-group">
    <label for="exampleInputEmail1">first name</label>
    <input defaultValue={firstName} type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="first name"/>

  </div>
  <div class="form-group">
    <label for="exampleInputEmail1">last name</label>
    <input defaultValue={lastName} type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="last name"/>

  </div>
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input defaultValue={email} type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="email"/>

  </div>
  <div class="form-group">
    <label for="exampleInputEmail1">occupation</label>
    <input defaultValue={occupation} type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="occupation"/>

  </div>
  <div class="form-group">
    <label for="exampleInputEmail1">city</label>
    <input defaultValue={city} type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="city"/>

  </div>
  <div class="form-group">
    <label for="exampleInputEmail1">bio</label>
    <input defaultValue={bio} type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="bio"/>

  </div>

  
  
  <button type="submit" onClick={prevStep} class="btn btn-primary m-1">back</button>
  <button type="submit" onClick={nextStep} class="btn btn-primary m-1">continue</button>

</form>
        </div>
    )
}
export default Confirm
