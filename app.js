var select = document.querySelector("#meu_select");

var paises = fetch('https://restcountries.eu/rest/v2/all')
  .then((res) => { return res.json() })
  .then((data) => {
    for (var i = 0; i <= (data.length - 1); i++) {
      var option = document.createElement("option");
      if(i == 31) {
      	option.selected = true;
      }
      
      option.value = data[i].name;
      option.text = data[i].name;
      select.appendChild(option);
    }
  });