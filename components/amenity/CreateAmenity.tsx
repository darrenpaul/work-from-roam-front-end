import Button from '../../elements/Button';
import Input from '../../elements/Input';
import { doCreateAmenity } from '../../services/amenity';
import { useState } from 'react';

const CreateAmenity = ({ accessToken }) => {
  const [inputData, setUserData] = useState({
    name: '',
    description: ''
  });
  const [errors, setErrors] = useState({
    name: '',
    description: ''
  });

  const handleInputChange = (id: string, value: string) => {
    // if (value) setErrors({ ...errors, [id]: "" });
    setUserData({ ...inputData, [id]: value });
  };

  const handleCreateAmenity = () => {
    doCreateAmenity(accessToken, inputData);
  };

  return (
    <div>
      <h1>Create Amenity</h1>
      <Input
        id={'name'}
        value={inputData.name}
        inputChange={handleInputChange}
        error={errors.name}
        placeholder={'Amenity name'}
      />

      <Input
        id={'description'}
        value={inputData.description}
        inputChange={handleInputChange}
        error={errors.description}
        placeholder={'Amenity description'}
      />

      <Button text={'Create Amenity'} onClick={handleCreateAmenity} />
    </div>
  );
};

export default CreateAmenity;
