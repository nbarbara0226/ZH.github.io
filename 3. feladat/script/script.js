document.getElementById('calculate-area-side-height').addEventListener('click', function() {
    const side = parseFloat(document.getElementById('side').value);
    const height = parseFloat(document.getElementById('height').value);
    const area = side * height;
    document.getElementById('parallelogram-result').innerText = 'Paralelogramma területe: ' + area + ' négyzetegység';
});

document.getElementById('calculate-area-sides-angle').addEventListener('click', function() {
    const side1 = parseFloat(document.getElementById('side1').value);
    const side2 = parseFloat(document.getElementById('side2').value);
    const angle = parseFloat(document.getElementById('angle').value);
    const area = side1 * side2 * Math.sin(angle * Math.PI / 180);
    document.getElementById('parallelogram-result').innerText = 'Paralelogramma területe: ' + area + ' négyzetegység';
});

document.getElementById('select-elements').addEventListener('click', function() {
    const userString = document.getElementById('user-string').value.split(' ');
    if(userString.length >= 5 && userString.length <= 7) {
        const selectedElements = [];
        while(selectedElements.length < 3) {
            const randomIndex = Math.floor(Math.random() * userString.length);
            if(!selectedElements.includes(userString[randomIndex])) {
                selectedElements.push(userString[randomIndex]);
            }
        }
        document.getElementById('string-result').innerText = 'Kiválasztott elemek: ' + selectedElements.join(', ');
    } else {
        document.getElementById('string-result').innerText = 'Kérlek adj meg egy 5-7 elemű stringet!';
    }
});
