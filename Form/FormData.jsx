import React, { Component } from 'react'

function FormData(props) {
 
    let {handleBack, users}= props
    return (
      <>
      <div>
                {/* <p>Name={this.state.nameIp}</p>
                <p>Department={this.state.DepartmentIp}</p>
                <p>Rating={this.state.RatingIp}</p> */}

                {users.map((item,index)=>{
                    return(
                        <div key={index}>
                            <h3>Name= {item.nameIp}</h3>
                            <h3>Department= {item.departmentIp}</h3>
                            <h3>Rating= {item.ratingIp}</h3>
                            <hr/>
                        </div>
                    )
                })}

                <button onClick={handleBack}>Go Back</button>
            </div>
      </>
    )
  
}

export default FormData