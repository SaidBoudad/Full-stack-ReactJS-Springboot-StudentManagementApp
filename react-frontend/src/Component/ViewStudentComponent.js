import React , { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import StudentService from '../Services/StudentService';


const ViewStudentComponent = (props) => {
  const { id } = useParams(); // Use useParams hook to get the id
  const [student, setStudent] = useState({});

  useEffect(() => {
    StudentService.getStudentById(id).then((res) => {
      setStudent(res.data);
    });
  }, [id]);

  return (
    <div>
      <br></br>
       <div className="container">
        <div className="row">
          <div className="card col-md-6 offset-md-3 offset-md-3">
            <h3 className="text-center"> View Employee Details</h3>
              <div className="card-body">
                <div className="row">
                  <label> Student First Name: </label>
                  <div> {student.firstName}</div>
                </div>
                <div className="row">
                  <label> Student Last Name: </label>
                  <div> {student.lastName}</div>
                </div>
                <div className="row">
                  <label> Student Email ID: </label>
                  <div> {student.emailId}</div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>    
  );
};
  

export default ViewStudentComponent
