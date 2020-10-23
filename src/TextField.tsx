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
}

export const TextField: React.FC<Props> = () => {
  const [count, setCount] = useState<number | null | { text: string }>(5);
  const inputRef = useRef<HTMLInputElement>(null);

  // setCount({ text: 'hey' });

  return (
    <div>
      <input ref={inputRef} />
    </div>
  );
};
