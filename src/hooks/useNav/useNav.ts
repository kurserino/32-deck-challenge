import { AboutModal, HowItWorksModal } from '@components';
import { ModalContext } from '@contexts';
import { useContext } from 'react';

export const useNav = () => {
  const { openModal } = useContext(ModalContext);

  const openHowItWorksModal = (callback?: () => void) => {
    openModal(HowItWorksModal);
    callback?.();
  };

  const openAboutModal = (callback?: () => void) => {
    openModal(AboutModal);
    callback?.();
  };

  return {
    openHowItWorksModal,
    openAboutModal,
  };
};
