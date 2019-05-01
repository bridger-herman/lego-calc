const WATTAGES = {
  'stove': 1500,
  'oven': 2400,
  'toaster': 1400,
  'microwave': 1100,
  'dishwasher': 1300,
};

function calculateEnergyUsage() {
  // (weekly uses * avg duration * wattage * 52) / 1000
  // Kitchen weekly watt hours
  let kitchenWeeklyWH =
    numStoveUses * 0.5 * WATTAGES['stove'] +
    numOvenUses * 1.0 * WATTAGES['oven'] +
    numToasterUses * 0.1 * WATTAGES['toaster'] +
    numMicrowaveUses * 0.1 * WATTAGES['microwave'] +
    numDishwasherUses * 1.0 * WATTAGES['dishwasher'];
  let refrigeratorKWH = 1575;
  let kitchenYearlyKWH = (kitchenWeeklyWH * 52) / 1000 + refrigeratorKWH;

  console.log(kitchenYearlyKWH);
}
