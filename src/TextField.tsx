import React, { useRef, useState } from 'react';

interface Person {
  firstName: string;
  lastName: string;
}

interface Props {
  text: string;
  ok?: boolean; // ? makes it optional!
  age?: number;
  fn?: (bob: string) => void;
  person: Person;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const TextField: React.FC<Props> = ({ handleChange }) => {
  const [count, setCount] = useState<number | null | { text: string }>(5);
  const inputRef = useRef<HTMLInputElement>(null);

  // setCount({ text: 'hey' });

  return (
    <div>
      <input ref={inputRef} onChange={handleChange} />
    </div>
  );
};
