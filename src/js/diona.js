const calculateButton = document.getElementById("calculate-button");
calculateButton.addEventListener("click", calculateShieldAbsorption);
DionaShieldAbs = {1: [692.8, 0.072], 2: [762, 0.0774], 3: [837.16, 0.0828], 4: [918, 0.09], 5: [1004, 0.0954], 6: [1096, 0.1008], 7: [1195, 0.108], 8: [1299, 0.1152], 9: [1408, 0.1224],  10: [1524, 0.1296], 11: [1645, 0.1368],  12: [1772, 0.144], 13: [1905, 0.153]};
function calculateShieldAbsorption() {
  const hpInput = document.getElementById("hp-input");
  const talentLevelInput = document.getElementById("talent-level-input");
  const hasConstellation2 = document.getElementById("constellation-2").checked;
  const shieldAbsorptionOutput = document.getElementById("result-output");
  let shieldAbsorption = DionaShieldAbs[talentLevelInput.value][0] + (hpInput.value*DionaShieldAbs[talentLevelInput.value][1]);
  if (hpInput.value <= 0) {
    alert("Invalid input.");
    return;
  }
  if (talentLevelInput.value < 1 || talentLevelInput.value > 13) {
    alert("Invalid input.");
    return;
  }
  if (hasConstellation2) {
  shieldAbsorption += hpInput.value*0.15;
  }
  shieldAbsorptionOutput.value = shieldAbsorption.toFixed(2);
}