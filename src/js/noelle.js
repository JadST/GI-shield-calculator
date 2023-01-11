const calculateButton = document.getElementById("calculate-button");
calculateButton.addEventListener("click", calculateShieldAbsorption);
NoelleShieldAbs = {1: [769.79, 1.60], 2: [846.77, 1.72], 3: [930.18, 1.84], 4: [1020, 2.00], 5: [1116.24, 2.12], 6: [1218.89, 2.24], 7: [1327.96, 2.40], 8: [1443.44, 2.56], 9: [1565.34, 2.72],  10: [1693.66, 2.88], 11: [1828.39, 3.04],  12: [1969.53, 3.20], 13: [2117.1, 3.40]};

function calculateShieldAbsorption() {
  const defInput = document.getElementById("def-input");
  const talentLevelInput = document.getElementById("talent-level-input");
  const shieldAbsorptionOutput = document.getElementById("result-output");
  const shieldPassiveAbsorptionOutput = document.getElementById("result-output-passive");
  
  if (defInput.value <= 0) {
    alert("Invalid input.");
    return;
  }
  if (talentLevelInput.value < 1 || talentLevelInput.value > 13) {
    alert("Invalid input.");
    return;
  }
  const shieldAbsorption = NoelleShieldAbs[talentLevelInput.value][0] + (defInput.value*NoelleShieldAbs[talentLevelInput.value][1]);
  const shieldPassiveAbsorption = defInput.value*4;
  shieldAbsorptionOutput.value = shieldAbsorption.toFixed(2);
  shieldPassiveAbsorptionOutput.value = shieldPassiveAbsorption.toFixed(2);
}