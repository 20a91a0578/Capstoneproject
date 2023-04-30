import React from 'react'
import './AdManOw.css';
import Adminnav from './Adminnav';
import { useNavigate } from 'react-router-dom';
function AdManOwn()
{
  const navi= useNavigate();
  function add(){
    localStorage.setItem('add',"Owner");
    navi('/addownuse');
  }
    return(
       <>
       <Adminnav/>
        <div className="App">
        <h3 style={{textAlign:'center',marginTop:'2%'}}>Owner Details</h3>
   <div className='row'>
    <div className='col-md-2 offset-md-10'>
    <button className="btn btn-success btn-sm" onClick={add}>Add</button>&nbsp;&nbsp;&nbsp;
    <button class="btn btn-danger btn-sm">Remove</button>
    </div>
   </div>
        <table>
          <thead>
          <tr>
            <th>S.No</th>
            <th>UserName</th>
            <th>Mobile</th>
            <th>Address</th>
            
          </tr>
          </thead>
          <tbody>
           
            </tbody>
        </table>
      </div>
       </>
        );
}
export default AdManOwn;