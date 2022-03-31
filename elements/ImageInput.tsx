interface Params {
  onChange: Required<Function>;
}

const ImageInput = ({ onChange }: Params) => {
  return <input type="file" onChange={(event) => onChange(event)} />;
};

export default ImageInput;
