import Button from 'elements/Button';
import Input from 'elements/Input';
import { formContainerStyle } from 'shared/styles/forms';
import { useState } from 'react';

interface Params {
  onSignUp: Function;
}

const SignUp = ({ onSignUp }: Params) => {
  const [userData, setUserData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState({
    firstName: '',
    lastName: '',
    password: '',
  });

  const handleSignUpUser = () => {
    onSignUp(userData);
  };

  const handleInputChange = (id: string, value: string) => {
    // if (value) setErrors({ ...errors, [id]: "" });
    setUserData({ ...userData, [id]: value });
  };

  return (
    <div className={formContainerStyle()}>
      <Input
        id="firstName"
        value={userData.firstName}
        inputChange={handleInputChange}
        error={errors.firstName}
        label="First Name"
        placeholder="Enter your first name"
      />

      <Input
        id="lastName"
        value={userData.lastName}
        inputChange={handleInputChange}
        error={errors.lastName}
        label="Last Name"
        placeholder="Enter your last name"
      />

      <Input
        id="email"
        value={userData.email}
        inputChange={handleInputChange}
        error={errors.email}
        label="Email"
        placeholder="Enter your email"
      />

      <Input
        id="password"
        value={userData.password}
        inputChange={handleInputChange}
        error={errors.password}
        label="Password"
        placeholder="Enter your password"
        type="password"
      />

      <Button onClick={handleSignUpUser}>Sign Up</Button>
    </div>
  );
};

export default SignUp;
