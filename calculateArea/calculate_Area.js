let length;
let width;
function calculateArea() {
 length = parseFloat(document.getElementById('length').value);
 width = parseFloat(document.getElementById('width').value);

let area = length * width;
 document.getElementById('result').innerText = `The area of the rectangle is: ${area}`;
}

function calculateExpenditure() {
    gro1 = parseFloat(document.getElementById('grocery1').value);
    gro2 = parseFloat(document.getElementById('grocery2').value);
    gro3 = parseFloat(document.getElementById('grocery3').value);
   let cost = gro1 + gro2 + gro3;
    document.getElementById('answer').innerText = `The grocery cost is: £ ${cost}`;
   }