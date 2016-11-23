function readCar() {
    var modelCar = document.querySelector('#modelCar');
    var modelCarSelect = document.querySelector('#models');
    
    return {
        model: modelCar.value,
        marka: modelCarSelect.value,
    };
}

function readCheckMarkaCar() {
    var markaCarCheckSelect = document.querySelector('#markaCarCheck');
    return markaCarCheckSelect.value;
}