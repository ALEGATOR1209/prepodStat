function gradient(firstColor, secondColor, coef) {
  const [r1, g1, b1] = firstColor;
  const [r2, g2, b2] = secondColor;
  const avg = [r1 + (r2 - r1) * coef, g1 + (g2 - g1) * coef, b1 + (b2 - b1) * coef];
  const max = Math.max(...avg);
  const normalize = 255 / max;
  return avg.map(val => val * normalize);
}

function updateNumbers(contract, listening, respondents, total, confidenceInt) {
  const contractEl = document.getElementById('contract-percent');
  contractEl.innerHTML = contract + '%';

  const listeningEl = document.getElementById('listening-percent');
  listeningEl.innerHTML = listening + '%';

  const respondentsEl = document.getElementById('respondents-num');
  respondentsEl.innerHTML = respondents;

  const totalEl = document.getElementById('total-num');
  totalEl.innerHTML = total;

  const confidenceEl = document.getElementById('confidence-interval');
  confidenceEl.innerHTML = 'Confidence interval: ' + Math.round(confidenceInt * 1000) / 1000;

  const colorContract = gradient([255, 0, 0], [0, 255, 0], contract / 100);
  const colorListening = gradient([255, 0, 0], [0, 255, 0], listening / 100);
  const colorConfidence = gradient([0, 255, 0], [255, 0, 0], confidenceInt);
  
  contractEl.style.color = `rgb(${colorContract[0]}, ${colorContract[1]}, ${colorContract[2]})`;
  listeningEl.style.color = `rgb(${colorListening[0]}, ${colorListening[1]}, ${colorListening[2]})`;
  confidenceEl.style.color = `rgb(${colorConfidence[0]}, ${colorConfidence[1]}, ${colorConfidence[2]})`;
}