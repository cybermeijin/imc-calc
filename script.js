document.getElementById("imcForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const gender = document.getElementById("gender").value;
  const age = parseInt(document.getElementById("age").value);
  const heightFeet = parseInt(document.getElementById("heigh-feet").value);
  const heightInches = parseInt(document.getElementById("height-inches").value);
  const weight = parseFloat(document.getElementById("weight").value);

  if (gender && age && heightFeet && heightInches && weight) {
    const heightInMeters = (heightFeet * 12 + heightInches) * 0.0254; //altura em metros
    const imc = weight / (heightInMeters * heightInMeters);
    const resultElement = document.getElementById("result");

    let category = "";

    if (imc < 18.5) {
      category = "Abaixo do peso";
    } else if (imc >= 18.5 && imc < 24.9) {
      category = "Peso normal";
    } else if (imc >= 25 && imc < 29.9) {
      category = "Sobrepeso";
    } else {
      category = "Obesidade";
    }

    let resultMessage = "Seu IMC:" + imc.toFixed(2) + "<br>";
    resultMessage += "Categoria:" + category;

    resultElement.innerHTML = resultMessage;
  }
});
