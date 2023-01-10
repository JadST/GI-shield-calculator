const calculateButton = document.getElementById("calculate-button");
calculateButton.addEventListener("click", calculateShieldAbsorption);
thomaShieldAbs = {1: [693.3, 0.072], 2: [762.6, 0.0774], 3: [837.7, 0.0828], 4: [918.7, 0.09], 5: [1005, 0.0954], 6: [1097, 0.1008], 7: [1196, 0.108], 8: [1300, 0.1152], 9: [1409, 0.1224],  10: [1525, 0.1296], 11: [1646, 0.1368],  12: [1773, 0.144], 13: [1906, 0.153]};
maxThomaShieldAbs = {1: [1887, 0.196], 2: [2076, 0.2107], 3: [2280, 0.2254], 4: [2500, 0.245], 5: [2736, 0.2597], 6: [2988, 0.2744], 7: [3255, 0.294], 8: [3539, 0.3136], 9: [3838, 0.3332], 10: [4152, 0.3528], 11: [4482, 0.3724], 12: [4829, 0.392], 13: [5190, 0.4165]};

function calculateShieldAbsorption() {
  const hpInput = document.getElementById("hp-input");
  const talentLevelInput = document.getElementById("talent-level-input");
  const shieldAbsorptionOutput = document.getElementById("result-output");
  const maxShieldAbsorptionOutput = document.getElementById("max-result-output");
  
  if (hpInput.value <= 0) {
    alert("Invalid input.");
    return;
  }
  if (talentLevelInput.value < 1 || talentLevelInput.value > 13) {
    alert("Invalid input.");
    return;
  }
  const shieldAbsorption = thomaShieldAbs[talentLevelInput.value][0] + (hpInput.value*thomaShieldAbs[talentLevelInput.value][1]);
  const maxShieldAbsorption = (hpInput.value * maxThomaShieldAbs[talentLevelInput.value][1]) + maxThomaShieldAbs[talentLevelInput.value][0];
  shieldAbsorptionOutput.value = shieldAbsorption.toFixed(2);
  maxShieldAbsorptionOutput.value = maxShieldAbsorption.toFixed(2);
}