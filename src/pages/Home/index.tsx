import React, { useState, useCallback, useEffect, useMemo } from "react";
import { CircularProgress } from "@chakra-ui/react";
import TextInput from "src/components/Input";
import { useDebounce } from "src/utils/use-debounce";
import { useSearchAllGifQuery, GifModel } from "src/services/giphy";
import GifGrid from "./GifGrid";

const delay = 500;

export default function Home() {
  const [input, setInput] = useState("all");
  const debounceInput = useDebounce(input, delay);
  const {
    data: gifs,
    isFetching,
    isLoading,
    refetch: getGifs,
  } = useSearchAllGifQuery(debounceInput);

  const handleInputChange = useCallback((value: string) => {
    setInput(value);
  }, []);

  useEffect(() => {
    getGifs();
  }, [debounceInput]);

  return (
    <div className="w-full h-[100vh] flex justify-center">
      <div className="w-[80%] my-5">
        <TextInput onChange={handleInputChange} />
        {(isFetching ?? isLoading) && gifs === undefined ? (
          <div className="mt-10 w-full h-[3rem] flex justify-center">
            <CircularProgress isIndeterminate color="green.300" />
          </div>
        ) : (
          <GifGrid data={gifs.data as GifModel[]} />
        )}
      </div>
    </div>
  );
}
