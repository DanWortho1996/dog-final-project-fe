import React, {useState} from 'react';
import './UpdateProfile.css';

function UpdateProfile() {
    const [form1, setForm1] = useState({username: '', email: '', password: ''});
    const [form2, setForm2] = useState({username: '', email: '', password: ''});

    const handleForm1Change = (e) => {
        const {name, value } = e.target;
        setForm1({... form1, [name]: value});
    };

    const handleForm2Change = (e) => {
        const { name, value } = e.target;
        setForm2({...form2,[name]: value});
    };

    const handleForm1Submit = (e) => {
        e.preventDefault();
        console.log('form 1 data:', form1);
    };

    const handleForm2Submit = (e) => {
        e.preventDefault();
        console.log('form 2 Data:', form2);
    };

    return (
        <div>
          <h2></h2>
    
          {/* Flex container to hold both forms side by side */}
          <div className="form-wrapper">
            {/* Form 1 - Fill in Details */}
            <div className="form-container">
              <h3>Fill in Details</h3>
              <form onSubmit={handleForm1Submit}>
                <div className="form-row">
                  <label>Username:</label>
                  <input
                    type="text"
                    name="username"
                    value={form1.username}
                    onChange={handleForm1Change}
                    required
                    className="input-small"
                  />
                </div>
                <div className="form-row">
                  <label>Email:</label>
                  <input
                    type="email"
                    name="email"
                    value={form1.email}
                    onChange={handleForm1Change}
                    required
                    className="input-small"
                  />
                </div>
                <div className="form-row">
                  <label>Password:</label>
                  <input
                    type="password"
                    name="password"
                    value={form1.password}
                    onChange={handleForm1Change}
                    required
                    className="input-small"
                  />
                </div>
                <button type="submit">Submit</button>
              </form>
            </div>
    
            {/* Form 2 - Update Information */}
            <div className="form-container">
              <h3>Update Information</h3>
              <form onSubmit={handleForm2Submit}>
                <div className="form-row">
                  <label>Username:</label>
                  <input
                    type="text"
                    name="username"
                    value={form2.username}
                    onChange={handleForm2Change}
                    required
                    className="input-small"
                  />
                </div>
                <div className="form-row">
                  <label>Email:</label>
                  <input
                    type="email"
                    name="email"
                    value={form2.email}
                    onChange={handleForm2Change}
                    required
                    className="input-small"
                  />
                </div>
                <div className="form-row">
                  <label>Password:</label>
                  <input
                    type="password"
                    name="password"
                    value={form2.password}
                    onChange={handleForm2Change}
                    required
                    className="input-small"
                  />
                </div>
                <button type="submit">Update</button>
              </form>
            </div>
          </div>
        </div>
      );
    }
    
    export default UpdateProfile;
    
    