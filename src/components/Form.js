import React, {useState} from 'react';

const Form = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] =useState("");
    const createUser = (e) => {
        e.preventDefault();
    console.log({firstName, lastName, email, password});
};

return(
    <div className='container col-4'>
        <form onSubmit={ createUser }>
            <div className="form-group">
                <label>First Name: </label>
                <input type="text" className='form-control' value={firstName} onChange={ (e) => setFirstName(e.target.value)}/>
            </div>
            <div className='form-group'>
                <label>last Name: </label>
                <input type="text" className='form-control' value={lastName} onChange={ (e) => setLastName(e.target.value)}/>
            </div>
            <div className='form-group'>
                <label>Email Address:</label>
                <input type="text" className='form-control' value={email} onChange={ (e) => setEmail(e.target.value)}/>
            </div>
            <div className='form-group'>
                <label>Password:</label>
                <input type="password" className='form-control' value={password} onChange={ (e) => setPassword(e.target.value)}/>
            </div>
            <div className='form-group'>
                <label>Confirm Password:</label>
                <input type="password" className='form-control' value={confirmPassword} onChange={ (e) => setConfirmPassword(e.target.value)}/>
            </div>
            <div className='form-group'>
                <input type="submit"  className='btn btn-primary' value="create User" />
            </div>
        </form>
        <div className='mt-5 justify-content-start'>
            <h2>Your Form Data</h2>
            <p>First Name: {firstName}</p>
            <p>Last Name: {lastName}</p>
            <p>Email: {email}</p>
            <p>Password: {password}</p>
            <p>Confirm Password: {confirmPassword}</p>
        </div>
    </div>    
    );
};
export default Form;