import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";

interface IGifModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function GifModal(props: IGifModalProps) {
  const { isOpen, onClose } = props;
  return (
    <Modal size='3xl' isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Gif Information</ModalHeader>
        <ModalCloseButton />
        <ModalBody>Xin chào</ModalBody>
      </ModalContent>
    </Modal>
  );
}
