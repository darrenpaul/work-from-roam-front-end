import Input from 'elements/Input';
import { formContainerStyle } from 'shared/styles/forms';
import { useState } from 'react';
import Button, from 'elements/Button';

interface Params {
  onSignIn: Function;
}

const SignIn = ({ onSignIn }: Params) => {
  const [userData, setUserData] = useState({
    email: '',
    password: ''
  });
  const [errors, setErrors] = useState({
    email: '',
    password: ''
  });

  const handleSignInUser = () => {
    onSignIn(userData);
  };

  const handleInputChange = (id: string, value: string) => {
    // if (value) setErrors({ ...errors, [id]: "" });
    setUserData({ ...userData, [id]: value.trim() });
  };

  return (
    <div className={formContainerStyle()}>
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

      <Button onClick={handleSignInUser}>
        Sign In
      </Button>
    </div>
  );
};

export default SignIn;
