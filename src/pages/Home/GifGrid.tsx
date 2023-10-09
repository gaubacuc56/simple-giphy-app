import React, { useState, useCallback } from "react";
import { Card, CardBody, CardFooter, Button } from "@chakra-ui/react";
import { GifModel } from "src/services/giphy";
import GifModal from "./GifModal";

interface IGifGridProps {
  data: GifModel[];
}

export default function GifGrid(props: IGifGridProps) {
  const { data } = props;

  const [isShowInfo, setIsShowInfo] = useState(false);

  const handleOpenModal = useCallback(() => {
    setIsShowInfo(true);
  }, []);

  const handleCloseModal = useCallback(() => {
    setIsShowInfo(false);
  }, []);

  return (
    <div className="grid grid-cols-4 gap-4">
      {data.map((item) => (
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
          <CardFooter className="w-full flex justify-end !p-0">
            <Button
              className="!bg-purple-500 !text-white !rounded-xl hover:!bg-purple-700"
              onClick={handleOpenModal}
            >
              View details
            </Button>
          </CardFooter>
        </Card>
      ))}
      {isShowInfo && (
        <GifModal isOpen={isShowInfo} onClose={handleCloseModal} />
      )}
    </div>
  );
}
