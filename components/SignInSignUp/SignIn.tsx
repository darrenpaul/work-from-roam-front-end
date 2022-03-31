import Button from 'elements/Button';
import Input from 'elements/Input';
import { useState } from 'react';

interface Params {
  onSignIn: Function;
}

const SignIn = ({ onSignIn }: Params) => {
  const [userData, setUserData] = useState({
    email: 'drobertpaul@gmail.com',
    password: '@Apples10'
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
    setUserData({ ...userData, [id]: value });
  };

  return (
    <div>
      <Input
        id={'email'}
        value={userData.email}
        inputChange={handleInputChange}
        error={errors.email}
        placeholder={'Email'}
      />

      <Input
        id={'password'}
        value={userData.password}
        inputChange={handleInputChange}
        error={errors.password}
        placeholder={'Password'}
        type={'password'}
      />

      <Button onClick={handleSignInUser}>Sign In</Button>
    </div>
  );
};

export default SignIn;
