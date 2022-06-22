import Amenities from 'components/amenity/Amenities';
import Button from 'elements/Button';
import Heading3 from 'elements/typography/Heading3';
import Heading4 from 'elements/typography/Heading4';
import Image from 'next/image';
import ImageCrop from 'components/ImageCrop';
import ImageInput from 'elements/ImageInput';
import Input from 'elements/Input';
import Map from 'components/shared/Map';
import MarkerCoffee from 'components/shared/Map/markers/MarkerCoffee';
import OperatingHours from 'components/OperatingHours';
import Paragraph from 'elements/typography/Paragraphy';
import { BASE_AMENITIES, BASE_OPERATING_HOURS } from 'utils/spot';
import { blobObjectFromBlobUrl, readFile } from 'utils/file';
import { errorNotification } from 'utils/notifications';
import { spotFormValidation } from 'utils/validation';
import { SpotType } from 'types/spot';
import { uploadBlobToFirebase } from 'utils/image';
import { useEffect, useState } from 'react';
import { getCopy } from 'utils/copyReader';
import Divider from 'elements/Divider';
import Flex from 'containers/Flex';
import { DEFAULT_CENTER_COORDINATES } from 'utils/map';

const MAX_IMAGE_SIZE = 2000;
const IMAGE_SAVE_DIRECTORY = 'spots';

interface Params {
  initialSpot: SpotType;
  onSubmit: Function;
  showHomeMarker: boolean;
  isAdmin: boolean;
}

const SpotForm = ({ initialSpot, onSubmit, showHomeMarker = true, isAdmin = false }: Params) => {
  const [spotData, setSpotData] = useState({
    company: initialSpot.company || '',
    email: initialSpot.email || '',
    phoneNumber: initialSpot.phoneNumber || '',
    phoneCode: initialSpot.phoneCode || '27',
    coordinates: initialSpot.coordinates || DEFAULT_CENTER_COORDINATES,
    address: initialSpot.address || '',
    suburb: initialSpot.suburb || '',
    city: initialSpot.city || '',
    zipCode: initialSpot.zipCode || '',
    country: initialSpot.country || '',
    website: initialSpot.website || '',
    images: initialSpot.images || [],
    placeId: initialSpot.placeId || '',
  });
  const [amenities, setAmenities] = useState(initialSpot.amenities || BASE_AMENITIES);
  const [operatingHours, setOperatingHours] = useState(
    initialSpot.operatingHours || BASE_OPERATING_HOURS,
  );
  const [errors, setErrors] = useState({
    company: '',
    email: '',
    phoneNumber: '',
    phoneCode: '',
    coordinates: '',
    address: '',
    suburb: '',
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

  useEffect(() => {
    if (!initialSpot.coordinates) {
      getUserLocation();
    }
  }, []);

  const getUserLocation = () => {
    if (navigator && navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function (position) {
        const { latitude, longitude } = position.coords;
        const coordinates = { lat: latitude, lng: longitude };
        setSpotData({ ...spotData, coordinates });
      });
    }
  };

  const handleSubmit = async () => {
    const { errors, isValid } = spotFormValidation(spotData);

    setErrors(errors);

    if (isValid) {
      await handleImageUpload();
      onSubmit({ ...spotData, amenities, operatingHours });
      return;
    }

    errorNotification('There are errors');
    if (Object.keys(errors).includes('coordinates')) {
      errorNotification('Please select a location on the map');
    }
  };

  const handleInputChange = (id: string, value: any) => {
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

  const handleBatchOperatingHoursChange = (id, value) => {
    const newState = { ...operatingHours };
    const keys = Object.keys(operatingHours);
    keys.forEach((element) => {
      newState[element] = { ...operatingHours[element], [id]: value };
    });
    setOperatingHours(newState);
  };

  return (
    <Flex column align="center">
      <Map
        initialCenter={spotData.coordinates}
        onMapClick={handleMapClick}
        onChildClick={() => {}}
        onMapLoaded={(mapLoaded) => {
          setMapLoaded(mapLoaded);
        }}
        showHomeMarker={showHomeMarker}
      >
        {mapLoaded && spotData.coordinates?.lat && spotData.coordinates?.lng && (
          <MarkerCoffee lat={spotData.coordinates.lat} lng={spotData.coordinates.lng} />
        )}
      </Map>

      <Flex width_md="screen-1/2" column mt="item">
        <Heading3 styles="mt-sides">{getCopy('spotFormCopy:pageTitle')}</Heading3>
        <Paragraph>Fill in as much as you can and we'll do this rest!</Paragraph>

        <Divider styles={'mt-2'} />

        {/* <ImageInput onChange={handleImageSelect} />
        {images.map((image, index) => (
          <Image key={index} src={image} alt="something" width={160} height={120} layout="fixed" />
        ))} */}

        {/* <ImageCrop show={showCropper} image={cropImage} handleCropSave={handleCropSave} /> */}

        <Input
          id="company"
          autoComplete="none"
          value={spotData.company}
          inputChange={handleInputChange}
          error={errors.company}
          label="Shop Name"
          required={true}
          placeholder="Enter shop name"
          styles="mt-item"
        />

        <Input
          id="email"
          autoComplete="none"
          value={spotData.email}
          inputChange={handleInputChange}
          error={errors.email}
          label="Email"
          placeholder="Enter shop email"
        />

        <Input
          id="phoneNumber"
          autoComplete="none"
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
          autoComplete="none"
          value={spotData.website}
          inputChange={handleInputChange}
          error={errors.website}
          label="Website"
          placeholder="Enter shop website"
        />

        <Input
          id="address"
          autoComplete="none"
          value={spotData.address}
          inputChange={handleInputChange}
          error={errors.address}
          label="Address"
          placeholder="Enter the address for the shop"
        />

        <Input
          id="suburb"
          autoComplete="none"
          value={spotData.suburb}
          inputChange={handleInputChange}
          error={errors.suburb}
          label="Suburb"
          placeholder="Enter the suburb where the shop is located"
        />

        <Input
          id="city"
          autoComplete="none"
          value={spotData.city}
          inputChange={handleInputChange}
          error={errors.city}
          label="City"
          placeholder="Enter the city where the shop is located"
        />

        <Input
          id="zipCode"
          autoComplete="none"
          value={spotData.zipCode}
          inputChange={handleInputChange}
          error={errors.zipCode}
          label="Zip Code"
          placeholder="Enter the zip code where the shop is located"
        />

        <Input
          id="country"
          autoComplete="none"
          value={spotData.country}
          inputChange={handleInputChange}
          error={errors.country}
          label="Country"
          placeholder="Enter the country where the shop is located"
        />

        <OperatingHours
          styles={'mt-item'}
          data={operatingHours}
          onChange={handleOperatingHoursChange}
          onBatchChange={handleBatchOperatingHoursChange}
        />

        <Amenities styles={'mt-item'} initialData={amenities} onChange={handleAmenityChange} />

        {isAdmin && (
          <Input
            id="placeId"
            value={spotData.placeId}
            inputChange={handleInputChange}
            error={errors.placeId}
            placeholder="Google Place ID"
          />
        )}

        <Button onClick={handleSubmit}>Submit</Button>
      </Flex>
    </Flex>
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
