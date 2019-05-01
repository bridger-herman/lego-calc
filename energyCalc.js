const WATTAGES = {
  'stove': 1500,
  'oven': 2400,
  'toaster': 1400,
  'microwave': 1100,
  'dishwasher': 1300,
};

function calculateEnergyUsage() {
  // (weekly uses * avg duration * wattage * 52) / 1000

  let numStoveUses = $('#kitchen').find('#electric-stove-input').val() || 0;
  let numOvenUses = $('#kitchen').find('#electric-oven-input').val() || 0;
  let numToasterUses = $('#kitchen').find('#toaster-input').val() || 0;
  let numMicrowaveUses = $('#kitchen').find('#microwave-input').val() || 0;
  let numDishwasherUses = $('#kitchen').find('#dishwasher-input').val() || 0;

  // Kitchen weekly watt hours
  let kitchenWeeklyWH =
    numStoveUses * 0.5 * WATTAGES['stove'] +
    numOvenUses * 1.0 * WATTAGES['oven'] +
    numToasterUses * 0.1 * WATTAGES['toaster'] +
    numMicrowaveUses * 0.1 * WATTAGES['microwave'] +
    numDishwasherUses * 1.0 * WATTAGES['dishwasher'];
  let refrigeratorKWH = 1575;
  let kitchenYearlyKWH = (kitchenWeeklyWH * 52) / 1000 + refrigeratorKWH;

  return [kitchenYearlyKWH, 0, 0, 0];
}

function calculateNumLegos(usage) {
  return [Math.floor(usage[0] / 1000), 0, 0, 0];
}

function totalEnergyUsage(usage) {
  return Math.floor(usage[0] + usage[1] + usage[2] + usage[3]);
} 
