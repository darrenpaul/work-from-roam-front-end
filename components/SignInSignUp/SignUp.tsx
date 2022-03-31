import Button from 'elements/Button';
import Input from 'elements/Input';
import { useState } from 'react';

interface Params {
  onSignUp: Function;
}

const SignUp = ({ onSignUp }: Params) => {
  const [userData, setUserData] = useState({
    firstName: 'darren',
    lastName: 'paul',
    email: 'pears@gmail.com',
    password: '@Apples10'
  });
  const [errors, setErrors] = useState({
    firstName: '',
    lastName: '',
    password: ''
  });

  const handleSignUpUser = () => {
    onSignUp(userData);
  };

  const handleInputChange = (id: string, value: string) => {
    // if (value) setErrors({ ...errors, [id]: "" });
    setUserData({ ...userData, [id]: value });
  };

  return (
    <div>
      <Input
        id={'firstName'}
        value={userData.firstName}
        inputChange={handleInputChange}
        error={errors.firstName}
        placeholder={'First Name'}
      />

      <Input
        id={'lastName'}
        value={userData.lastName}
        inputChange={handleInputChange}
        error={errors.lastName}
        placeholder={'Last Name'}
      />

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

      <Button onClick={handleSignUpUser}>Sign Up</Button>
    </div>
  );
};

export default SignUp;
