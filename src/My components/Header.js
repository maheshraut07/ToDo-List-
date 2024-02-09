import React from 'react'
import PropTypes from 'prop-types'
import { About } from './About'


export default function Header(props) {
  return (
    <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" Link="#">{props.title}</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" Link="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" Link="#" href='./About.js' target='_blank' >About</a>
            </li>
           </ul>
          { props.searchBar? <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form> : "no search bar"}
        </div>
      </div>
    </nav>
    </div>
  )
}

Header.defaultProps = {
    title: "Your Title Here",
    SeachBar : true
}






/**
 
***PROPS =  prosp are javascript objects that are passed to parent component to child component
       
      eg. in main app.js file in Header section if we write
      title = myToDoList
      then whenever we write the  {props.title}  in child file i.e in header it will take myToDolist as title

      for that function we have to take "props as perimeter" in out export default header function . after adding it will look like

      export default function header(props){
        return (

        )
      }


****PROPTYPES = proptypes are the types of prop in which we mention the datatypes of the props which we provide towards the child

     Header.propTypes = {
        title: PropTypes.string ,
        seachBar: propTypes.bool.isRequired
     }

     isRequired means user have to specify the default value of the partiular entity



***Deafault Props = if user don't specify the props then default props will be taken from the dafaultprops

eg. Header.defaultProps = {

    title :"Your Title Here",
    searchbar = PropTypes.bool
}


 */
