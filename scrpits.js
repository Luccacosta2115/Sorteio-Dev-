function generateNumber() {

    const max = Math.floor(document.querySelector('.input-max').value);

    const result = Math.floor(Math.random() * (max - Math.ceil(document.querySelector('.input-min').value) + 1)) + Math.ceil(document.querySelector('.input-min').value);

    alert(result);
}