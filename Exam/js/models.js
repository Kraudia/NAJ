window.addEventListener('DOMContentLoaded', function () {
    
    var models = [
        "audi",
        "polonez",
        "fiat",
        "BMW",
        "inny"
    ];
    
    function addModelToSelect(select, model) {
        var option = document.createElement('option');
        option.text = model;
        select.appendChild(option);
    }
    
    var modelsSelect = document.querySelector('#models');
    models.forEach(function(model) {
        addModelToSelect(modelsSelect, model);
    });
});
