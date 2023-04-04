#!/usr/bin/env node
import { filterAnimals, countPeopleAndAnimals } from './utils/utils'

const args = process.argv.slice(2);

const filterIndex = args.findIndex(arg => arg === '-f' || arg === '--filter');
const countIndex = args.findIndex(arg => arg === '-c' || arg === '--count');

const filterArg = filterIndex !== -1 ? args[filterIndex + 1] : undefined;
const countArg = countIndex !== -1;

/**
 * Main CLI core
 * @param args CLI arguments 
 */
const runCLI = ({ filter, count }: { filter?: string; count: boolean }) => {
  if (filter) {
    const filteredCountries = filterAnimals(filter);
    console.log(JSON.stringify(filteredCountries, null, 2));
  }

  if (count) {
    const countedCountries = countPeopleAndAnimals();
    console.log(JSON.stringify(countedCountries, null, 2));
  }
};

runCLI({ filter: filterArg, count: countArg });