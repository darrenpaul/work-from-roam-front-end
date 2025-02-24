import Button from 'elements/Button';
import Heading3 from 'elements/typography/Heading3';
import Input from 'elements/Input';
import { AuthUserType } from 'types/user';
import { doUpdateUser } from 'services/user';
import { errorNotification, successNotification } from 'utils/notifications';
import { useState } from 'react';
import Flex from 'containers/Flex';

interface Params {
  authUser: AuthUserType;
  styles: string;
}

const UserUpdateForm = ({ authUser, styles }: Params) => {
  const [userInfo, setUserInfo] = useState({
    firstName: authUser?.user?.firstName || '',
    lastName: authUser?.user?.lastName || '',
  });
  const [errors, setErrors] = useState({
    firstName: '',
    lastName: '',
  });

  const { accessToken } = authUser;

  const handleSubmit = async () => {
    try {
      const id = authUser.user.uid;
      await doUpdateUser(accessToken, userInfo, id);
      successNotification('User updated successfully');
    } catch (error) {
      errorNotification(error.message);
    }
  };

  const handleInputChange = (id: string, value: any) => {
    setUserInfo({ ...userInfo, [id]: value });
  };

  return (
    <Flex column align="center">
      <Flex width_md="screen-1/2" column mt="item">
        <Heading3>User Information</Heading3>

        <Input
          id="firstName"
          value={userInfo.firstName}
          inputChange={handleInputChange}
          error={errors.firstName}
          label="First Name"
          required={true}
          placeholder="Enter first name"
          styles="mt-item"
        />

        <Input
          id="lastName"
          value={userInfo.lastName}
          inputChange={handleInputChange}
          error={errors.lastName}
          label="Last Name"
          required={true}
          placeholder="Enter last name"
        />

        <Button onClick={handleSubmit}>Update</Button>
      </Flex>
    </Flex>
  );
};

export async function getStaticProps(context) {
  return {
    props: {
      protected: true,
    },
  };
}

export default UserUpdateForm;
