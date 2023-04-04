"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.countPeopleAndAnimals = exports.filterAnimals = void 0;
var data_1 = require("../data/data");
/**
 * Returns the list of countries in which people own an animal whose name contains the {pattern}.
 * If entire countries or people don't have any animals matching the criteria, remove them from the list.
 * @param pattern A string that will be used to filter animal names
 * @returns A list of countries, containing People that own patterns named animals
 */
function filterAnimals(pattern) {
    return data_1.data.map(function (country) { return ({
        name: country.name,
        people: country.people.map(function (person) { return ({
            name: person.name,
            animals: person.animals.filter(function (animal) { return animal.name.includes(pattern); })
        }); }).filter(function (person) { return person.animals.length > 0; })
    }); }).filter(function (country) { return country.people.length > 0; });
}
exports.filterAnimals = filterAnimals;
;
/**
 * Returns data with a counter in the main title counting the members of the
 * categories (Country Population, Folk Animals)
 * @returns A list of countries whose inhabitants own animals.
 */
function countPeopleAndAnimals() {
    return data_1.data.map(function (country) { return ({
        name: "".concat(country.name, " [").concat(country.people.length, "]"),
        people: country.people.map(function (person) { return ({
            name: "".concat(person.name, " [").concat(person.animals.length, "]"),
            animals: person.animals,
        }); }),
    }); });
}
exports.countPeopleAndAnimals = countPeopleAndAnimals;
;
