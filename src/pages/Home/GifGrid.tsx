import React, { useState, useCallback } from "react";
import { Card, CardBody, CardFooter, Button, useToast } from "@chakra-ui/react";
import { GifModel, GifOwnerModel } from "src/services/giphy";
import GifModal from "./GifModal";

interface IGifGridProps {
  data: GifModel[];
}

export default function GifGrid(props: IGifGridProps) {
  const { data } = props;
  const toast = useToast()

  const [owner, setOwner] = useState<GifOwnerModel | undefined>(undefined);

  const handleOpenModal = useCallback((owner: GifOwnerModel) => {
    if (owner !== undefined)
      setOwner(owner);
    else toast({
      title: 'Error',
      description: "No data found !",
      status: 'error',
      duration: 1000,
      isClosable: true,
      position: "top-right"
    })
  }, [toast]);

  const handleCloseModal = useCallback(() => {
    setOwner(undefined);
  }, []);

  return (
    <div className="grid grid-cols-4 gap-4">
      {data !== undefined && data.map((item) => (
        <Card className="flex flex-col my-5 p-5 items-center">
          <CardBody className="!p-0">
            <iframe
              id={item.id}
              src={item.embed_url}
              width="100%"
              height="270"
            ></iframe>
            <h2 className="mt-3 cursor-pointer font-bold">{item.title}</h2>
          </CardBody>
          <CardFooter className="w-full flex justify-end !p-0 mt-8">
            <Button
              className="!bg-purple-500 !text-white !rounded-xl hover:!bg-purple-700"
              onClick={() => handleOpenModal(item.user)}
            >
              View owner
            </Button>
          </CardFooter>
        </Card>
      ))}
      <GifModal isOpen={owner !== undefined} onClose={handleCloseModal} ownerData={owner as GifOwnerModel} />
    </div>
  );
}
