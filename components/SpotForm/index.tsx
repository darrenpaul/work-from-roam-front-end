import Amenities from 'components/amenity/Amenities';
import Button from 'elements/Button';
import Heading3 from 'elements/typography/Heading3';
import Image from 'next/image';
import ImageCrop from 'components/ImageCrop';
import ImageInput from 'elements/ImageInput';
import Input from 'elements/Input';
import Map from 'components/Map';
import MarkerCoffee from 'components/Map/markers/MarkerCoffee';
import OperatingHours from 'components/OperatingHours';
import { BASE_AMENITIES, BASE_OPERATING_HOURS } from 'utils/spot';
import { blobObjectFromBlobUrl, readFile } from 'utils/file';
import { errorNotification } from 'utils/notifications';
import { spotFormContainerStyle, spotFormInputsContainerStyle } from './styles';
import { spotFormValidation } from 'utils/validation';
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
    coordinates: initialSpot.coordinates || { lat: '', lng: '' },
    address: initialSpot.address || '',
    city: initialSpot.city || '',
    zipCode: initialSpot.zipCode || '',
    country: initialSpot.country || '',
    website: initialSpot.website || '',
    images: initialSpot.images || [],
    placeId: initialSpot.placeId || '',
  });
  const [amenities, setAmenities] = useState(BASE_AMENITIES);
  const [operatingHours, setOperatingHours] = useState(
    initialSpot.operatingHours || BASE_OPERATING_HOURS,
  );
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    phoneCode: '',
    coordinates: '',
    address: '',
    city: '',
    zipCode: '',
    country: '',
    website: '',
    operatingHours: '',
    images: '',
    placeId: '',
  });
  const [images, setImages] = useState([]);
  const [showCropper, setShowCropper] = useState(false);
  const [cropImage, setCropImage] = useState<File | null>(null);
  const [mapLoaded, setMapLoaded] = useState(false);

  const handleSubmit = async () => {
    const { errors, isValid } = spotFormValidation(spotData);

    setErrors(errors);

    if (isValid) {
      await handleImageUpload();
      onSubmit({ ...spotData, amenities, operatingHours });
      return;
    }

    errorNotification('There are errors');
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
    <div className={spotFormContainerStyle()}>
      <Map
        fullHeight={true}
        initialCenter={spotData.coordinates}
        onMapClick={handleMapClick}
        onChildClick={() => {}}
        onMapLoaded={(mapLoaded) => {
          setMapLoaded(mapLoaded);
        }}
      >
        {mapLoaded && (
          <MarkerCoffee lat={spotData.coordinates.lat} lng={spotData.coordinates.lng} />
        )}
      </Map>

      <div className={spotFormInputsContainerStyle()}>
        <Heading3>Add a new spot</Heading3>

        <Image Input onChange={handleImageSelect} />

        {images.map((image, index) => (
          <Image
            unoptimized={true}
            key={index}
            src={image}
            alt="something"
            width={160}
            height={120}
            layout="fixed"
          />
        ))}

        <Image
          unoptimized={true}
          Crop
          show={showCropper}
          image={cropImage}
          handleCropSave={handleCropSave}
        />

        <Input
          id="name"
          value={spotData.name}
          inputChange={handleInputChange}
          error={errors.name}
          label="Shop Name"
          required={true}
          placeholder="Enter shop name"
        />

        <Input
          id="email"
          value={spotData.email}
          inputChange={handleInputChange}
          error={errors.email}
          label="Email"
          placeholder="Enter shop email"
        />

        <Input
          id="phoneNumber"
          value={spotData.phoneNumber}
          phoneCode={spotData.phoneCode}
          inputChange={handleInputChange}
          error={errors.phoneNumber}
          type="telephone"
          label="Phone Number"
          placeholder="Enter shop phone number"
        />

        <Input
          id="website"
          value={spotData.website}
          inputChange={handleInputChange}
          error={errors.website}
          label="Website"
          placeholder="Enter shop website"
        />

        <Input
          id="address"
          value={spotData.address}
          inputChange={handleInputChange}
          error={errors.address}
          label="Address"
          required={true}
          placeholder="Enter the address for the shop"
        />

        <Input
          id="city"
          value={spotData.city}
          inputChange={handleInputChange}
          error={errors.city}
          label="City"
          required={true}
          placeholder="Enter the city where the shop is located"
        />

        <Input
          id="zipCode"
          value={spotData.zipCode}
          inputChange={handleInputChange}
          error={errors.zipCode}
          label="Zip Code"
          required={true}
          placeholder="Enter the zip code where the shop is located"
        />
        <Input
          id="country"
          value={spotData.country}
          inputChange={handleInputChange}
          error={errors.country}
          label="Country"
          required={true}
          placeholder="Enter the country where the shop is located"
        />

        <OperatingHours data={operatingHours} onChange={handleOperatingHoursChange} />

        <Amenities initialData={amenities} onChange={handleAmenityChange} />

        <Input
          id="placeId"
          value={spotData.placeId}
          inputChange={handleInputChange}
          error={errors.placeId}
          placeholder="Google Place ID"
        />

        <Button onClick={handleSubmit}>Submit</Button>
      </div>
    </div>
  );
};

export async function getStaticProps() {
  return {
    props: {
      protected: true,
    },
  };
}

export default SpotForm;
