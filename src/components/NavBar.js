import React from 'react'

export const NavBar = () => {
    const mystyle = {
        color: "white",
        backgroundColor: "green",
        
      };
    return (
        <nav class="navbar navbar-dark bg-primary">
  <div class="container-fluid">
    <a class="navbar-brand">Navbar</a>
    <form class="d-flex">
      <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
      <button class="btn btn-outline-success"  style={mystyle} type="submit">Search</button>
    </form>
  </div>
  
</nav>
        
    )
}

export default NavBar
