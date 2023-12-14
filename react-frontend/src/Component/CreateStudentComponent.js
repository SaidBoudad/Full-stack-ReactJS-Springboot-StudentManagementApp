import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import StudentService from '../Services/StudentService';

const CreateStudentComponent = (props) => {
  const { id } = useParams(); // Use useParams hook to get the id
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [emailId, setEmailId] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    if (id && id !== '_add') {
      StudentService.getStudentById(id).then((res) => {
        let student = res.data;
        setFirstName(student.firstName);
        setLastName(student.lastName);
        setEmailId(student.emailId);
      });
    } else {
      // Handle the '_add' case, perhaps by setting default values or doing nothing
      setFirstName('');
      setLastName('');
      setEmailId('');
    }
  }, [id]);

  const saveOrUpdateStudent = (e) => {
    e.preventDefault();
    let student = { firstName, lastName, emailId };

    if (id && id !== '_add') {
      StudentService.updateStudent(student, id).then((res) => {
        navigate('/students');
      });
    } else {
      StudentService.createStudent(student).then((res) => {
        navigate('/students');
      });
    }
  };


  const changeFirstNameHandler = (event) => {
    setFirstName(event.target.value);
  };

  const changeLastNameHandler = (event) => {
    setLastName(event.target.value);
  };

  const changeEmailHandler = (event) => {
    setEmailId(event.target.value);
  };

  const cancel = () => {
    props.history.push('/students');
  };

  const getTitle = () => {
    return id === '_add' ? <h3 className="text-center">Add Student</h3> : <h3 className="text-center">Update Student</h3>;
  };

  return (
    <div>
      <br></br>
      <div className="container">
        <div className="row">
          <div className="card col-md-6 offset-md-3 offset-md-3">
            {getTitle()}
            <div className="card-body">
              <form>
                <div className="form-group">
                  <label> First Name: </label>
                  <input
                    placeholder="First Name"
                    name="firstName"
                    className="form-control"
                    value={firstName}
                    onChange={changeFirstNameHandler}
                  />
                </div>
                <div className="form-group">
                  <label> Last Name: </label>
                  <input
                    placeholder="Last Name"
                    name="lastName"
                    className="form-control"
                    value={lastName}
                    onChange={changeLastNameHandler}
                  />
                </div>
                <div className="form-group">
                  <label> Email Id: </label>
                  <input
                    placeholder="Email Address"
                    name="emailId"
                    className="form-control"
                    value={emailId}
                    onChange={changeEmailHandler}
                  />
                </div>

                <button className="btn btn-success" onClick={saveOrUpdateStudent}>
                  Save
                </button>
                <button className="btn btn-danger" onClick={cancel} style={{ marginLeft: '10px' }}>
                  Cancel
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateStudentComponent

