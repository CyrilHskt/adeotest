import { data } from '../data/data'
import { Country, Person, Animal } from '../models/models'

/**
 * Returns the list of countries in which people own an animal whose name contains the {pattern}. 
 * If entire countries or people don't have any animals matching the criteria, remove them from the list.
 * @param pattern A string that will be used to filter animal names
 * @returns A list of countries, containing People that own patterns named animals
 */
export function filterAnimals(pattern: string) {
    return data.map((country: Country) => ({
        name: country.name,
        people: country.people.map((person: Person) => ({
            name: person.name,
            animals: person.animals.filter((animal: Animal) => animal.name.includes(pattern))
        })).filter((person: Person) => person.animals.length > 0)
     })).filter((country: Country) => country.people.length > 0)
};

/**
 * Returns data with a counter in the main title counting the members of the 
 * categories (Country Population, Folk Animals)
 * @returns A list of countries whose inhabitants own animals.
 */
export function countPeopleAndAnimals(): Country[] {
  return data.map((country: Country) => ({
    name: `${country.name} [${country.people.length}]`,
    people: country.people.map((person: Person) => ({
      name: `${person.name} [${person.animals.length}]`,
      animals: person.animals,
    })),
  }));
};