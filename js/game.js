var cities_all;
var cities_used;
var current_city;

window.onload=init;

function init() {
    debugger;
    cities_all = parse_cities();
    cities_used = [];
    generate_city();
}

function proceed_answer(city) {

}

function parse_cities() {
    fetch('src/cities.json')
            .then(res => res.json())
            .then(data => cities_all = data)
}

function generate_city() {

}

