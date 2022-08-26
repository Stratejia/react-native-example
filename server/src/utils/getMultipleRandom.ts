type GetMultipleRandomParams<T> = {
  readonly elements: readonly T[];
  readonly amount: number;
};

function getMultipleRandom<T>({ elements, amount }: GetMultipleRandomParams<T>) {
  const shuffled = [...elements].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, amount);
}

export default getMultipleRandom;
