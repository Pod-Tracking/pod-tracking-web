import { ChangeEvent, useState } from 'react';
import { Input } from '../../components/ui/input';

export function SearchCommander() {
  const [userInput, setUserInput] = useState<string>('');

  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    setUserInput(event.target.value);
  };
  const fetchCommanders = async (name: string) => {
    const response = await fetch(
      `https://api.magicthegathering.io/v1/cards?name=${name}`
    );
    const resultsPromise = response.json();
    const results = await Promise.resolve(resultsPromise);
    console.log(results);
  };
  return (
    <>
      <Input value={userInput} onChange={handleOnChange} />
      <button onClick={() => fetchCommanders(userInput)}>Search</button>
    </>
  );
}
