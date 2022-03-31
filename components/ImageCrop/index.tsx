import Button from '../../elements/Button';
import Cropper from 'react-easy-crop';
import getCroppedImg from '../../utils/image';
import React, { useCallback, useState } from 'react';
import { Area, Point } from 'react-easy-crop/types';
import {
  Container,
  ControlContainer,
  CropContainer,
  StyledImage
  } from './styles';

const ImageCrop = ({ show, image, handleCropSave }) => {
  const [crop, setCrop] = useState<Point>({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);

  const onCropComplete = useCallback((croppedArea: Area, croppedAreaPixels: Area) => {
    setCroppedAreaPixels(croppedAreaPixels);
  }, []);

  const showCroppedImage = useCallback(async () => {
    try {
      const croppedImage = await getCroppedImg(image, croppedAreaPixels);
      handleCropSave(croppedImage);
    } catch (error) {
      console.error(error);
    }
  }, [croppedAreaPixels]);

  return (
    <div className="ImageCrop">
      {show && (
        <Container>
          <CropContainer>
            <Cropper
              image={image}
              crop={crop}
              zoom={zoom}
              aspect={4 / 3}
              onCropChange={setCrop}
              onCropComplete={onCropComplete}
              onZoomChange={setZoom}
            />
          </CropContainer>

          <ControlContainer>
            <Button
              onClick={() => {
                showCroppedImage();
              }}
            >
              Crop
            </Button>
          </ControlContainer>
        </Container>
      )}
    </div>
  );
};

const readFile = async (file: File) => {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.addEventListener('load', () => resolve(reader.result), false);
    reader.readAsDataURL(file);
  });
};

export default ImageCrop;
