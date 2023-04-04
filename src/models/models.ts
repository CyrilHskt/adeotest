export type Animal = {
    name: string;
  };

export type Person = {
    name: string;
    animals: Animal[];
};

export type Country = {
    name: string;
    people: Person[];
};