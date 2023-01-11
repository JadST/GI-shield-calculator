const calculateButton = document.getElementById("calculate-button");
calculateButton.addEventListener("click", calculateShieldAbsorption);
LaylaShieldAbs = {1: [1040.01, 0.108], 2: [1144.02, 0.1161], 3: [1256.71, 0.1242], 4: [1378.06, 0.135], 5: [1508.08, 0.1431], 6: [1646.76, 0.1512], 7: [1794.12, 0.162], 8: [1950.14, 0.1728], 9: [2114.83, 0.1836],  10: [2288.19, 0.1944], 11: [2470.22, 0.2052],  12: [2660.91, 0.216], 13: [2860.27, 0.2295]};

function calculateShieldAbsorption() {
  const hpInput = document.getElementById("hp-input");
  const talentLevelInput = document.getElementById("talent-level-input");
  const shieldAbsorptionOutput = document.getElementById("result-output");
  
  if (hpInput.value <= 0) {
    alert("Invalid input.");
    return;
  }
  if (talentLevelInput.value < 1 || talentLevelInput.value > 13) {
    alert("Invalid input.");
    return;
  }
  const shieldAbsorption = LaylaShieldAbs[talentLevelInput.value][0] + (hpInput.value*LaylaShieldAbs[talentLevelInput.value][1]);
  shieldAbsorptionOutput.value = shieldAbsorption.toFixed(2);
}