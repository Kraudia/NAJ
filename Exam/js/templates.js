function getCarTemplate(carObj) {
    return  "<div class='car'>" +
    			"<span id='model'>" + carObj.model + "</span>" +
    			"<span id='car'>"  + carObj.marka + "</span>" +
            	"<button class='deleteCar'>Usuń</button>"
            "</div>";
}
