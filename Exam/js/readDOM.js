function readCar() {
    var modelCar = document.querySelector('#modelCar');
    var markaCar = document.querySelector('#markaCar');
    
    return {
        model: modelCar.value,
        marka: markaCar.value,
    };
}

function readCheckMarkaCar() {
    var markaCarCheckSelect = document.querySelector('#markaCarCheck');
    return markaCarCheckSelect.value;
}