declare type CatFact = {
  readonly text: string;
  readonly createdAt: number;
};

declare type CatFactCreationParams = {
  readonly text: string;
};

export { CatFact, CatFactCreationParams };
