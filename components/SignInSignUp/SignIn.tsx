import Button from 'elements/Button';
import Heading5 from 'elements/typography/Heading5';
import Input from 'elements/Input';
import { formContainerStyle } from 'shared/styles/forms';
import { signInFormValidation } from 'utils/validation';
import { useState } from 'react';

interface Params {
  onSignIn: Function;
}

const SignIn = ({ onSignIn }: Params) => {
  const [userData, setUserData] = useState({
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState({
    email: '',
    password: '',
  });

  const handleSignInUser = async () => {
    const { errors, isValid } = signInFormValidation(userData);

    setErrors(errors);

    if (isValid) {
      await onSignIn(userData);
    }
  };

  const handleInputChange = (id: string, value: string) => {
    // if (value) setErrors({ ...errors, [id]: "" });
    setUserData({ ...userData, [id]: value.trim() });
  };

  const handleKeypress = (event) => {
    console.log(event);
  };

  return (
    <div className={formContainerStyle()}>
      <Heading5>Sign into your account</Heading5>
      <Input
        id="email"
        value={userData.email}
        inputChange={handleInputChange}
        error={errors.email}
        label="Email"
        placeholder="Enter your email"
        styles={'mt-item'}
        required
      />

      <Input
        id="password"
        value={userData.password}
        inputChange={handleInputChange}
        error={errors.password}
        label="Password"
        placeholder="Enter your password"
        type="password"
        required
      />

      <Button onClick={handleSignInUser}>Sign In</Button>
    </div>
  );
};

export default SignIn;
