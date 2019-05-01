const WATTAGES = {
  // Kitchen
  'stove': 1500,
  'oven': 2400,
  'toaster': 1400,
  'microwave': 1100,
  'dishwasher': 1300,

  // Laundry
  'electric-dryer': 3000,
  'gas-dryer': 1500,
  'washer': 500,

  // HVAC
  'window-ac': 1000,
  'central-ac': 3500,

  // Electronics
  'smartphone': 6,
  'laptop': 100,
  'desktop': 500,
  'tv': 200,
};

function calculateEnergyUsage() {
  // (weekly uses * avg duration * wattage * 52) / 1000

  let numStoveUses = $('#kitchen').find('#electric-stove-input').val() || 0;
  let numOvenUses = $('#kitchen').find('#electric-oven-input').val() || 0;
  let numToasterUses = $('#kitchen').find('#toaster-input').val() || 0;
  let numMicrowaveUses = $('#kitchen').find('#microwave-input').val() || 0;
  let numDishwasherUses = $('#kitchen').find('#dishwasher-input').val() || 0;

  let numGasDryerUses = $('#laundry').find('#gas-dryer-input').val() || 0;
  let numElectricDryerUses = $('#laundry').find('#electric-dryer-input').val() || 0;
  let numWasherUses = $('#laundry').find('#washer-input').val() || 0;

  let windowACTime = $('#hvac').find('#window-ac-input').val() || 0;
  let centralACTime = $('#hvac').find('#central-ac-input').val() || 0;

  let smartphoneTime = $('#electronics').find('#smartphone-input').val() || 0;
  let laptopTime = $('#electronics').find('#laptop-input').val() || 0;
  let desktopTime = $('#electronics').find('#desktop-input').val() || 0;
  let tvTime = $('#electronics').find('#tv-input').val() || 0;

  // Kitchen weekly watt hours
  let kitchenWeeklyWH =
    numStoveUses * 0.5 * WATTAGES['stove'] +
    numOvenUses * 1.0 * WATTAGES['oven'] +
    numToasterUses * 0.1 * WATTAGES['toaster'] +
    numMicrowaveUses * 0.1 * WATTAGES['microwave'] +
    numDishwasherUses * 1.0 * WATTAGES['dishwasher'];
  let refrigeratorKWH = 1575;
  let kitchenYearlyKWH = (kitchenWeeklyWH * 52) / 1000 + refrigeratorKWH;

  // Laundry weekly watt hours
  let laundryWeeklyWH =
    numWasherUses * 0.75 * WATTAGES['washer'] +
    numGasDryerUses * 1.0 * WATTAGES['gas-dryer'] +
    numElectricDryerUses * 1.0 * WATTAGES['electric-dryer'];
  let laundryYearlyKWH = (laundryWeeklyWH * 52) / 1000;

  // HVAC weekly watt hours (percentage on-time * 24 * 7)
  let hvacWeeklyWH =
    7 * windowACTime * 24 * WATTAGES['window-ac'] + 
    7 * centralACTime * 24 * WATTAGES['central-ac'];
  let hvacYearlyKWH = (hvacWeeklyWH * 52) / 1000;

  // Eletronics weekly watt hours (hours per day * 7)
  let electronicsWeeklyWH =
    7 * smartphoneTime * WATTAGES['smartphone'] +
    7 * laptopTime * WATTAGES['laptop'] +
    7 * desktopTime * WATTAGES['desktop'] +
    7 * tvTime * WATTAGES['tv'];
  let electronicsYearlyKWH = (electronicsWeeklyWH * 52) / 1000;

  return [kitchenYearlyKWH, laundryYearlyKWH, hvacYearlyKWH, electronicsYearlyKWH];
}

function calculateNumLegos(usage) {
  // Arbitrary multipliers to get a nice number of legos
  return [
    usage[0] / 1000,
    usage[1] / 100,
    usage[2] / 4000,
    usage[3] / 1000,
  ].map(Math.floor);
}

function totalEnergyUsage(usage) {
  return Math.floor(usage[0] + usage[1] + usage[2] + usage[3]);
}
