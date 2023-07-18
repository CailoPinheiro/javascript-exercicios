console.log(getScore(1000));
alert(getScore(1000));

function getScore(value) {
    /*
  let scoreA = value >= 90 && value <= 100;
  let scoreB = value >= 80 && value <= 89;
  let scoreC = value >= 70 && value <= 79;
  let scoreD = value >= 60 && value <= 69;
  let scoreF = value < 60;
  let scores = [scoreA, scoreB, scoreC, scoreD, scoreF];
  */
  // outra maneira
  let scores = [
    (scoreA = value >= 90 && value <= 100),
    (scoreB = value >= 80 && value <= 89),
    (scoreC = value >= 70 && value <= 79),
    (scoreD = value >= 60 && value <= 69),
    (scoreF = value < 60),
  ];

  let scoreLabels = ["A", "B", "C", "D", "F"];
  let resultado;

  if (value < 0 || value > 100) {
    resultado = "Nota Inválida!";
    
  } else {
    for (let i = 0; i < scores.length; i++) {
      if (scores[i]) {
        resultado = "Nota: " + scoreLabels[i];
        break;
      }
    }
  }

  return resultado;
}
