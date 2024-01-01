// Replace 'YOUR_RAPIDAPI_KEY' with your actual RapidAPI key
const apiKey = '085ea9905amsh4e15504a0f2ccb8p1ca5b6jsn50fcdafe43ae';

function calculateLove() {
  const fname = document.getElementById('fname').value;
  const sname = document.getElementById('sname').value;

  fetch(`https://love-calculator.p.rapidapi.com/getPercentage?fname=${fname}&sname=${sname}`, {
    method: 'GET',
    headers: {
      'x-rapidapi-key': apiKey,
      'x-rapidapi-host': 'love-calculator.p.rapidapi.com',
    }
  })
  .then(response => response.json())
  .then(data => {
    displayResult(data);
  })
  .catch(err => {
    console.error(err);
    document.getElementById('result').innerText = 'An error occurred. Please try again.';
  });
}

function displayResult(data) {
  const resultDiv = document.getElementById('result');
  if (data && data.result) {
    const { fname, sname, percentage, result } = data;
    resultDiv.innerHTML = `
      <p>Love Percentage between ${fname.toUpperCase()} and ${sname.toUpperCase()}: ${percentage}%</p>
      <p>${result}</p>
    `;
  } else {
    resultDiv.innerText = 'No result found.';
  }
}
function reset(){
  window.location.reload();  
}
