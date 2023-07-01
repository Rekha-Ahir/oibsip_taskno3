const calculate = () => {
    let i = document.getElementById("inp").value;
    console.log(i)
    let tempSelect = document.getElementById("tempselect");
    const valuetemp = tempselect.options[tempSelect.selectedIndex].value;
    console.log(valuetemp);
    const celtofah = (Cel) => {
      let Fahrenheit = Math.round((Cel * 9/5) + 32);
      return Fahrenheit;
    }
    const fahtocel = (fah) => {
      let celsius = Math.round((fah-32) *5/9);
      return celsius;
    }
    let result;
    if (valuetemp == 'Cel') {
      result = celtofah(i);
      console.log(result)
      resultcon.innerHTML =result + "Fahrenheit ";
    }
    else {
      result = fahtocel(i);
      document.getElementById('resultcon').innerHTML = `${result} celsius`;
    }
  }
