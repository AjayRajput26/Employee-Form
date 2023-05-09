import React from 'react'

function ActualForm(props)  {
  
    //destructing of propes object
    let {handleChangeName, handleChangeDepartment, handleChangeRating, handleSubmit, style} = props
    return (

      <div style={style}>
<form className='container'>
    <h1 className='heading'>EMPLOYEE FEEDBACK FORM</h1>
    <label className="lb">Name:</label>
           <input id="nameIp" type='text'  placeholder='Enter your name' onChange={handleChangeName}/>
           <br></br><br></br>
           <label className="lb">Department:</label>
           <input id="departmentIp" type='text'  placeholder='Enter your dep' onChange={handleChangeDepartment}/>
           <br></br><br></br>
           <label className="lb">Rating:</label>
           <input id="ratingIp" type='text'  placeholder='Enter rating'onChange={handleChangeRating}/>
           <br></br><br></br>
           <button className='button' onClick = {handleSubmit}>Submit</button>
           

           </form>

      </div>
    )
  
}

export default ActualForm