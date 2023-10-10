import React, { useCallback } from "react";
import { InputGroup, Input, InputLeftElement } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

interface ITextInputProps {
  onChange: (value: string) => void;
}

export default function TextInput(props: ITextInputProps) {
  const { onChange } = props;

  const onInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      onChange(e.target.value);
    },
    [onChange]
  );

  return (
    <InputGroup>
      <InputLeftElement pointerEvents="none">
        <SearchIcon fontSize="20px" marginTop={2} color='white' />
      </InputLeftElement>
      <Input
        onChange={onInputChange}
        className="w-full text-white"
        placeholder="Search Gif name"
        size="lg"
      />
    </InputGroup>
  );
}
