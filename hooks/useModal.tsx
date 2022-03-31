import { useState } from 'react';

const useShowModal = () => {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return { showModal, handleShowModal, handleCloseModal };
};

export default useShowModal;
