import Amenities from 'components/amenity/Amenities';
import Button from 'elements/Button';
import Image from 'next/image';
import ImageCrop from 'components/ImageCrop';
import ImageInput from 'elements/ImageInput';
import Input from 'elements/Input';
import Map from 'components/Map';
import MarkerCoffee from 'components/Map/markers/MarkerCoffee';
import OperatingHours from 'components/OperatingHours';
import {
  BASE_AMENITIES,
  BASE_HOURS,
  BASE_IS_OPEN,
  BASE_OPERATING_HOURS
  } from 'utils/spot';
import { blobObjectFromBlobUrl, readFile } from 'utils/file';
import { doCreateSpot } from 'services/spot';
import { SpotType } from 'types/spot';
import { uploadBlobToFirebase } from 'utils/image';
import { useState } from 'react';
const MAX_IMAGE_SIZE = 2000;
const IMAGE_SAVE_DIRECTORY = 'spots';

interface Params {
  initialSpot: SpotType;
  onSubmit: Function;
}

const SpotForm = ({ initialSpot, onSubmit }: Params) => {
  const [spotData, setSpotData] = useState({
    name: initialSpot.name || '',
    email: initialSpot.email || '',
    phoneNumber: initialSpot.phoneNumber || '',
    phoneCode: initialSpot.phoneCode || '27',
    coordinates: initialSpot.coordinates || { lat: null, lng: null },
    address: initialSpot.address || '',
    website: initialSpot.website || '',
    images: initialSpot.images || [],
    placeId: initialSpot.placeId || ''
  });
  const [amenities, setAmenities] = useState(BASE_AMENITIES);
  const [operatingHours, setOperatingHours] = useState(
    initialSpot.operatingHours || BASE_OPERATING_HOURS
  );
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    phoneCode: '',
    coordinates: '',
    address: '',
    website: '',
    operatingHours: '',
    images: '',
    placeId: ''
  });
  const [images, setImages] = useState([]);
  const [showCropper, setShowCropper] = useState(false);
  const [cropImage, setCropImage] = useState<File | null>(null);

  const handleSubmit = async () => {
    await handleImageUpload();
    onSubmit({ ...spotData, amenities, operatingHours });
  };

  const handleInputChange = (id: string, value: any) => {
    // if (value) setErrors({ ...errors, [id]: "" });
    setSpotData({ ...spotData, [id]: value });
  };

  const handleMapClick = (coordinates: { lat: string; lng: string }) => {
    setSpotData({ ...spotData, coordinates });
  };

  const handleImageSelect = async (event) => {
    const file = event.target.files[0];
    const imageSize = file.size / 1024;

    if (imageSize <= MAX_IMAGE_SIZE) {
      const imageDataUrl = await readFile(file);
      setCropImage(imageDataUrl);
      setShowCropper(true);
    }
    console.log('Image Size to large');
  };

  const handleCropSave = async (croppedImage) => {
    setImages([...images, croppedImage]);
    setShowCropper(false);
  };

  const handleImageUpload = async () => {
    const uploadedImages = [...spotData.images];
    for (const image of images) {
      const blobObject = await blobObjectFromBlobUrl(image);
      const { metadata } = await uploadBlobToFirebase(blobObject, IMAGE_SAVE_DIRECTORY);
      const { fullPath } = metadata;
      uploadedImages.push(fullPath);
    }
    handleInputChange('images', uploadedImages);
    console.log('Images Uploaded');
  };

  const handleAmenityChange = (amenities) => {
    setAmenities(amenities);
  };

  const handleOperatingHoursChange = (id, value) => {
    const merged = { ...operatingHours[id], ...value };
    const newState = { ...operatingHours, [id]: merged };
    setOperatingHours(newState);
  };

  return (
    <div>
      <h1>Add new WFH spot</h1>
      <Map initialCenter={spotData.coordinates} onMapClick={handleMapClick}>
        <MarkerCoffee lat={spotData.coordinates.lat} lng={spotData.coordinates.lng} />
      </Map>

      <ImageInput onChange={handleImageSelect} />

      {images.map((image, index) => (
        <Image
          key={index}
          src={image}
          alt={'something'}
          width={160}
          height={120}
          layout={'fixed'}
        />
      ))}

      <ImageCrop show={showCropper} image={cropImage} handleCropSave={handleCropSave} />

      <Input
        id={'name'}
        value={spotData.name}
        inputChange={handleInputChange}
        error={errors.name}
        placeholder={'Name'}
      />

      <Input
        id={'email'}
        value={spotData.email}
        inputChange={handleInputChange}
        error={errors.email}
        placeholder={'Email'}
      />

      <Input
        id={'phoneNumber'}
        value={spotData.phoneNumber}
        phoneCode={spotData.phoneCode}
        inputChange={handleInputChange}
        error={errors.phoneNumber}
        type={'telephone'}
        placeholder={'Phone Number'}
      />

      <Input
        id={'website'}
        value={spotData.website}
        inputChange={handleInputChange}
        error={errors.website}
        placeholder={'Website'}
      />

      <Input
        id={'address'}
        value={spotData.address}
        inputChange={handleInputChange}
        error={errors.address}
        placeholder={'Address'}
      />

      <OperatingHours initialData={operatingHours} onChange={handleOperatingHoursChange} />

      <Input
        id={'coordinates'}
        value={`${spotData.coordinates.lat}, ${spotData.coordinates.lng}`}
        inputChange={handleInputChange}
        error={errors.coordinates}
        placeholder={'Coordinates'}
      />

      <Amenities initialData={amenities} onChange={handleAmenityChange} />

      <Input
        id={'placeId'}
        value={spotData.placeId}
        inputChange={handleInputChange}
        error={errors.placeId}
        placeholder={'Google Place ID'}
      />

      <Button onClick={handleSubmit}>Submit</Button>

      <Button
        onClick={() => {
          console.log(operatingHours);
        }}
      >
        Print Spot Data
      </Button>
    </div>
  );
};

export async function getStaticProps() {
  return {
    props: {
      protected: true
    }
  };
}

export default SpotForm;
