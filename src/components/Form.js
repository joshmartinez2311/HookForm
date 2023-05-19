import React, {useState} from 'react';

const Form = (props) => {
    const [firstName, setFirstName] = useState("");
    const[firstNameError, setFirstNameError] =useState("");
    
    const [lastName, setLastName] = useState("");
    const [lastNameError, setLastNameError] = useState("");
    
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");

    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");

    const [confirmPassword, setConfirmPassword] =useState("");
    const [confirmPasswordError, setConfirmPasswordError] = useState("");

    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);
    
    const createUser = (e) => {
        e.preventDefault();
        if (!firstNameError && !lastNameError && !emailError && !passwordError && !confirmPasswordError) {
            if (firstName === "" || lastName === "" || email === "" || password === "" || confirmPassword === "") {
                return;
            }
        console.log({firstName, lastName, email, password})
        setHasBeenSubmitted(true);
        }
    };

    
    // will display a new message once the form is submitted
    const forMessage = () => {
        if( hasBeenSubmitted && !firstNameError && !lastNameError && !emailError && !passwordError && !confirmPassword) {
            return "Thank you for submitting the form!";
        }else{
            return "Welcome Please submit the form";
        }
    };
    
    // validation section for form fields
    const handleFirstName = (e) => {
        setFirstName(e.target.value);
        if(e.target.value.length < 1) {
            setFirstNameError("First name is required");
        } else if (e.target.value.length < 3){
            setFirstNameError("first name must be at least 3 characters long")
        }else{
            setFirstNameError("")
        }
    };

    const handleLastName = (e) => {
        setLastName(e.target.value);
        if(e.target.value.length < 1) {
            setLastNameError("Last name is required");
        } else if (e.target.value.length < 3){
            setLastNameError("last name must be at least 3 characters long")
        }else{
            setLastNameError("")
        }
    };

    const handleEmail = (e) => {
        setEmail(e.target.value);
        if(e.target.value.length < 1) {
            setEmailError("email is required");
        } else if (e.target.value.length < 3){
            setEmailError("email must be at least 8 characters long")
        }else{
            setEmailError("")
        }
    };

    
    const handlePassword = (e) => {
        setPassword(e.target.value);
        if(e.target.value.length < 1) {
            setPasswordError("Password is required");
        } else if (e.target.value.length < 8){
            setPasswordError("Password must be at least 8 characters long")
        }else{
            setPasswordError("")
        }
    };

    const handleConfirmPassword = (e) => {
        setConfirmPassword(e.target.value);
        if(e.target.value !== password) {
            setConfirmPasswordError("password must match");
        } else if (e.target.value.length < 1){
            setConfirmPasswordError("confirm password cannot be blank")
        }else{
            setConfirmPasswordError("")
        }
    };
    
    // will only render the form data if all form fields pass validations
    const checkValidationInput = !firstNameError && !lastNameError && !emailError && !passwordError && !confirmPasswordError;
    
    return(
    <div className='container col-4 mt-3'>
        <form className="form mt-3" onSubmit={ createUser }>
            <h2>{ forMessage() }</h2>
            <div className="form-group">
                <label>First Name: </label>
                <input type="text" className='form-control' value={firstName} onChange={ handleFirstName }/>
                {
                    firstNameError &&
                    <p className="text-danger">{firstNameError}</p>
                }
            </div>
            <div className='form-group'>
                <label>last Name: </label>
                <input type="text" className='form-control' value={lastName} onChange={ handleLastName }/>
                {
                    lastNameError &&
                    <p className="text-danger">{lastNameError}</p> 
                }
            </div>
            <div className='form-group'>
                <label>Email Address:</label>
                <input type="text" className='form-control' value={email} onChange={  handleEmail }/>
                {
                    emailError &&
                    <p className="text-danger">{emailError}</p>
                }
            </div>
            <div className='form-group'>
                <label>Password:</label>
                <input type="password" className='form-control' value={password} onChange={ handlePassword }/>
                {
                    passwordError &&
                    <p className="text-danger">{passwordError}</p> 
                }
            </div>
            <div className='form-group'>
                <label>Confirm Password:</label>
                <input type="password" className='form-control' value={confirmPassword} onChange={ handleConfirmPassword }/>
                {
                    confirmPasswordError &&
                    <p className="text-danger">{confirmPasswordError}</p> 
                }
            </div>
            <div className='form-group'>
                        <input type="submit"  className='btn btn-primary' value="create User"/>
                    </div>
        </form>
            {checkValidationInput && hasBeenSubmitted && (
                <div>
                    <div className='mt-5 justify-content-start'>
                        <h2>Your Form Data</h2>
                        <p>First Name: {firstName}</p>
                        <p>Last Name: {lastName}</p>
                        <p>Email: {email}</p>
                        <p>Password: {password}</p>
                        <p>Confirm Password: {confirmPassword}</p>
                    </div>
                </div>
            )}    
    </div>
    );
};
export default Form;