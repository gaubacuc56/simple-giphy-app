import React, { useState, useCallback, useEffect } from "react";
import { CircularProgress } from "@chakra-ui/react";
import TextInput from "src/components/Input";
import { useDebounce } from "src/utils/use-debounce";
import { useSearchAllGifQuery, GifModel } from "src/services/giphy";
import GifGrid from "./GifGrid";

const delay = 500;

export default function Home() {
  const [input, setInput] = useState("all");
  const debounceInput = useDebounce(input.length === 0 ? "all" : input, delay);
  const {
    data: gifs,
    refetch: getGifs,
  } = useSearchAllGifQuery(debounceInput);

  const handleInputChange = useCallback((value: string) => {
    setInput(value);
  }, []);

  useEffect(() => {
    getGifs();
  }, [getGifs]);

  return (
    <div className="w-full flex justify-center bg-slate-950">
      <div className="w-[80%] my-5">
        <TextInput onChange={handleInputChange} />
        {gifs !== undefined ? (
          <GifGrid data={gifs.data as GifModel[]} />
        ) : (
          <div className="mt-10 w-full h-[3rem] flex justify-center">
            <CircularProgress isIndeterminate color="green.300" />
          </div>
        )}
      </div>
    </div>
  );
}
