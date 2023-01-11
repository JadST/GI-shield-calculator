const calculateButton = document.getElementById("calculate-button");
calculateButton.addEventListener("click", calculateShieldAbsorption);
XinyanShieldAbs = {1: [[500.55,1.0404],[588.89,1.224],[692.81, 1.44]],2: [[550.61, 1.1184],[647.78, 1.3158],[762.1, 1.548]],3: [[604.85, 1.1965],[711.59, 1.4076],[837.16, 1.656]],4: [[663.26, 1.3005],[780.3, 1.53],[918, 1.8]],5: [[725.83, 1.3785],[853.92, 1.6218],[1004.61, 1.908]],6: [[792.58, 1.4566],[932.45, 1.7136],[1097, 2.016]],7: [[863.5, 1.5606],[1015.89, 1.836],[1195.16, 2.16]],8: [[938.6, 1.6646],[1104.23, 1.9584],[1299.1, 2.304]],9: [[1017.86, 1.7687],[1197.49, 2.0808],[1408.81, 2.448]],10: [[1101.3, 1.8727],[1295.65, 2.2032],[1524.29, 2.592]],11: [[1188.91, 1.9768],[1398.72, 2.3256],[1645.55, 2.736]],12: [[1280.69, 2.0808],[1506.69, 2.448],[1772.58, 2.88]],13: [[1376.64, 2.2109],[1619.58, 2.601],[1905.39, 3.06]]};


function calculateShieldAbsorption() {
  const defInput = document.getElementById("def-input");
  const talentLevelInput = document.getElementById("talent-level-input");
  const shieldAbsorptionOutputLevel1 = document.getElementById("result-output-level1");
  const shieldAbsorptionOutputLevel2 = document.getElementById("result-output-level2");
  const shieldAbsorptionOutputLevel3 = document.getElementById("result-output-level3");
  
  if (defInput.value <= 0) {
    alert("Invalid input.");
    return;
  }
  if (talentLevelInput.value < 1 || talentLevelInput.value > 13) {
    alert("Invalid input.");
    return;
  }
  const shieldAbsorptionLevel1 = XinyanShieldAbs[talentLevelInput.value][0][0] + (defInput.value*XinyanShieldAbs[talentLevelInput.value][0][1]);
  const shieldAbsorptionLevel2 = XinyanShieldAbs[talentLevelInput.value][1][0] + (defInput.value*XinyanShieldAbs[talentLevelInput.value][1][1]);
  const shieldAbsorptionLevel3 = XinyanShieldAbs[talentLevelInput.value][2][0] + (defInput.value*XinyanShieldAbs[talentLevelInput.value][2][1]);
  shieldAbsorptionOutputLevel1.value = shieldAbsorptionLevel1.toFixed(2);
  shieldAbsorptionOutputLevel2.value = shieldAbsorptionLevel2.toFixed(2);
  shieldAbsorptionOutputLevel3.value = shieldAbsorptionLevel3.toFixed(2);
}