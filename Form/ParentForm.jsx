import React, {useState } from 'react'
import ActualForm from './ActualForm';
import FormData  from './FormData';
import './form.css';

function ParentForm() {
  
    const[nameIp,setName] = useState('');
    const[departmentIp,setDepartment] = useState('');
    const[ratingIp,setRating] = useState('');
    const[myObj,setMyObj] = useState({});
    const[users,setUsers] = useState([]);
    const[isSubmitted,setisSubmitted] = useState(false);
    
        const handleChangeName=(e)=>{
            console.log('typing...');
            setName(e.target.value);
    
        }

        const handleChangeDepartment=(e)=>{
            console.log('typing...');
            setDepartment(e.target.value);
    
        }

        const handleChangeRating=(e)=>{
            console.log('typing...');
            setRating(e.target.value);
    
        }
    
        const handleSubmit=(e)=>{
            e.preventDefault();
            //step 2. create temperory object
            let tempObj = myObj;
            tempObj={
                nameIp:nameIp,
                departmentIp:departmentIp,
                ratingIp:ratingIp
            }
    
            //step.3 
            let tempArr = users;
            tempArr.push(tempObj);

            setUsers(()=>([
                ...tempArr
            ]))
           console.log(users);
                setisSubmitted(!isSubmitted)
       
        }
    
        const handleBack=()=>{
            setisSubmitted(!isSubmitted)
    
        }

        let myStyle = {
            backgroundColor: 'aqua',
            border:'3px solid black'
        }
    return (
      <>
      {!isSubmitted?
      <ActualForm handleChangeName={handleChangeName} handleChangeDepartment={handleChangeDepartment} handleChangeRating={handleChangeRating} handleSubmit={handleSubmit} style={myStyle}/>
      :
      <FormData users={users} handleBack={handleBack}/>
      }
      
     
      </>
    )
    
}

export default ParentForm