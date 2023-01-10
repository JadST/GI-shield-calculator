const calculateButton = document.getElementById("calculate-button");
calculateButton.addEventListener("click", calculateShieldAbsorption);
ZhongliShieldAbs = {1: [1232, 0.1280], 2: [1355, 0.1376], 3: [1489, 0.1472], 4: [1633, 0.16], 5: [1787, 0.1696], 6: [1951, 0.1792], 7: [1196, 0.108], 8: [2310, 0.192], 9: [2506, 0.2176],  10: [2711, 0.2304], 11: [2927, 0.2432],  12: [3153, 0.256], 13: [3389, 0.2720]};

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
  const shieldAbsorption = ZhongliShieldAbs[talentLevelInput.value][0] + (hpInput.value*ZhongliShieldAbs[talentLevelInput.value][1]);
  shieldAbsorptionOutput.value = shieldAbsorption.toFixed(2);
}