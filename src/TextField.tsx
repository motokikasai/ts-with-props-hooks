import React, { useState } from 'react';

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
  const [count, setCount] = useState<number | null>(5);

  return (
    <div>
      <input />
    </div>
  );
};
