/**
 * @typedef Freelancer
 * @property {string} name
 * @property {string} occupation
 * @property {number} rate
 */

// === Constants ===
const NAMES = ["Alice", "Bob", "Carol", "Dave", "Eve"];
const OCCUPATIONS = ["Writer", "Teacher", "Programmer", "Designer", "Engineer"];
const PRICE_RANGE = { min: 20, max: 200 };
const NUM_FREELANCERS = 100;

//function  returns an  object with a randomly generated name, occupation, and rate
const humanAssetList = () => {
  const name = NAMES[Math.floor(Math.random() * NAMES.length)];
  const occupation =
    OCCUPATIONS[Math.floor(Math.random() * OCCUPATIONS.length)];

  const min =
    Math.random() * (PRICE_RANGE.max - PRICE_RANGE.min) + PRICE_RANGE.min;
  const max = Math.random() * (PRICE_RANGE.max - min) + min;

  const priceRangeMin = min.toFixed(2);
  const priceRangeMax = max.toFixed(2);

  const priceRange = [priceRangeMin, priceRangeMax];

  return { name, occupation, priceRange };
};

const humanAssetArray = Array.from({ length: NUM_FREELANCERS }, humanAssetList);

console.log(humanAssetArray);
