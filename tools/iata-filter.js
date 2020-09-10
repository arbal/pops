import data from "../data/index.js";
import iata from "../data/iata-unfiltered.js";
//import _ from "lodash";

const keys = Object.keys(data.providers);
let pops = [];
for (const key of keys) {
  const map1 = new Map(
    [...iata].filter(([k]) => data.providers[key].pops.includes(k))
  );

  for (let value of map1.keys()) {
    pops.push(value);
  }
}
let unique_pops = [...new Set(pops)].sort();

console.log(`/** IATA airports location filtered*/
const iata = new Map([`);
for (let e of unique_pops) {
  console.log(`["${e}",[${iata.get(e)}]],`);
}
console.log(`]);

export default iata;`);
