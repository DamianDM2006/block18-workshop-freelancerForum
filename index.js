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

//  console.log(humanAssetArray);

//  function returns the average rate of each freelancers
const findAvgRates = () => {
  const getRates = humanAssetArray.map((getRate) => getRate.priceRange);
  getRates.forEach((rateValue) => {
    rateValue.min = Number(rateValue.min);
    rateValue.max = Number(rateValue.max);
  });
  const medianRates = getRates.map(
    (medianRate) => (medianRate.min + medianRate.max) / 2
  );
  const averageRates = medianRates;

  //  console.log(averageRates);

  return averageRates;
};

//  function return the average rate of all freelancers

const findAverageOfAll = () => {
  const averageRates = findAvgRates();
  const initialVal = averageRates[0];
  const totalOfAll = averageRates.reduce(
    (accumulator, currentVal) => accumulator + currentVal,
    initialVal
  );

  const avgerageOfAll = totalOfAll / averageRates.length;

//  console.log(avgerageOfAll.toFixed(2));

  return avgerageOfAll.toFixed(2);
};

const averageRateofAllFrLance = findAverageOfAll();

//  Write a component function to represent a single freelancer.

const AssetDataCard = (Asset) => {
  const { name, occupation, priceRange } = assetData;

  const $dataCard = document.createElement("tbody");
    $dataCard.classList.add("assetData");
    $dataCard.innerHTML = 
//    <table>
//      <thead>
//        <tr>
//          <th scope="col">Name</th>
//          <th scope="col">Occupation</th>
//          <th scope="col">PriceRange</th>
//        </tr>
//      </thead>
        `<tbody>
          <tr>
            <th scope="row">${name}</th>
            <td>${occupation}</td>
            <td>${priceRange}</td>
          </tr>
        </tbody>
        `
//    </table> 
    ;
  return $dataCard;
}

const AssetDataCards = () => {
  const $dataCard = document.createElement("table");
    $dataCard.classList.add("assetData");
}