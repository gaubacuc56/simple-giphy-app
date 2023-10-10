import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton
} from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";
import { GifOwnerModel } from "src/services/giphy";
import Avatar from "src/components/Avatar";
interface IGifModalProps {
  isOpen: boolean;
  onClose: () => void;
  ownerData: GifOwnerModel
}

export default function GifModal(props: IGifModalProps) {
  const { isOpen, onClose, ownerData } = props;
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalBody className="bg-[#20354b] h-[200px] p-10">
          <div className="flex items-center justify-end">
            <ModalCloseButton color='whiteAlpha.800' />
          </div>
          <div className="mt-6 w-fit mx-auto">
            <Avatar classNameTextDisplay="w-[5rem] h-[5rem] text-2xl" name={ownerData?.display_name} />
          </div>

          <p className="mt-5 italic text-center px-5 text-white">"{ownerData?.description ? ownerData.description : "No descrition yet"}"</p>

          <div className="mt-8 ">
            <h2 className="text-white font-bold text-2xl tracking-wide">{ownerData?.display_name}</h2>
            <a href={ownerData?.profile_url} target="_blank" className="text-blue-400 font-bold text-base hover:text-blue-600">@{ownerData?.username}</a>
          </div>
          {
            ownerData?.is_verified &&
            <div className="mt-2 mb-5 flex text-emerald-400 items-center">
              <CheckIcon />
              <p className="font-semibold pl-2 text-sm" >
                Verified
              </p>
            </div>
          }
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
