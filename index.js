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

  const priceRangeMin =
    Math.random() * (PRICE_RANGE.max - PRICE_RANGE.min) + PRICE_RANGE.min;
  const priceRangeMax =
    Math.random() * (PRICE_RANGE.max - priceRangeMin) + priceRangeMin;

  const min = priceRangeMin.toFixed(2);
  const max = priceRangeMax.toFixed(2);

  const priceRange = { min, max };

  return { name, occupation, priceRange };
};

const humanAssetArray = Array.from({ length: NUM_FREELANCERS }, humanAssetList);

console.log(humanAssetArray);

// Initialize a state variable to an array of `NUM_FREELANCERS` freelancer objects.
