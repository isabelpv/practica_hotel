var hotel = {
    name: "",
    location: "",
}

hotel.name = prompt ("Introduce el nombre del hotel");
// var concatNamehotel = "Hotel " + nameHotel;
document.getElementById("hotel-name").innerHTML = "Hotel " + hotel.name;

hotel["location"] = prompt("introduce la ubicación del hotel");
document.getElementById("hotel-location").innerHTML = hotel["location"];

console.log(hotel)