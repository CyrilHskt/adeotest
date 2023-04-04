#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("./utils/utils");
var args = process.argv.slice(2);
var filterIndex = args.findIndex(function (arg) { return arg === '-f' || arg === '--filter'; });
var countIndex = args.findIndex(function (arg) { return arg === '-c' || arg === '--count'; });
var filterArg = filterIndex !== -1 ? args[filterIndex + 1] : undefined;
var countArg = countIndex !== -1;
/**
 * Main CLI core
 * @param args CLI arguments
 */
var runCLI = function (_a) {
    var filter = _a.filter, count = _a.count;
    if (filter) {
        var filteredCountries = (0, utils_1.filterAnimals)(filter);
        console.log(JSON.stringify(filteredCountries, null, 2));
    }
    if (count) {
        var countedCountries = (0, utils_1.countPeopleAndAnimals)();
        console.log(JSON.stringify(countedCountries, null, 2));
    }
};
runCLI({ filter: filterArg, count: countArg });
