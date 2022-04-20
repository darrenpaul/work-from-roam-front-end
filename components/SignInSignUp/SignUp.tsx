import Button from 'elements/Button';
import Heading5 from 'elements/typography/Heading5';
import Input from 'elements/Input';
import { formContainerStyle } from 'shared/styles/forms';
import { ITEM_SPACE } from 'shared/styles/spacing';
import { signUpFormValidation } from 'utils/validation';
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
    email: '',
    password: '',
  });

  const handleSignUpUser = async () => {
    const { errors, isValid } = signUpFormValidation(userData);

    setErrors(errors);

    if (isValid) {
      await onSignUp(userData);
    }
  };

  const handleInputChange = (id: string, value: string) => {
    // if (value) setErrors({ ...errors, [id]: "" });
    setUserData({ ...userData, [id]: value });
  };

  return (
    <div className={formContainerStyle()}>
      <Heading5>Create a new account</Heading5>

      <Input
        id="firstName"
        value={userData.firstName}
        inputChange={handleInputChange}
        error={errors.firstName}
        label="First Name"
        placeholder="Enter your first name"
        styles={`${ITEM_SPACE}`}
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
