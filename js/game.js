(function (root) {
    var database = root.database;

    var allCities;
    var usedCities;
    var currentCity;

    var game = {
        init() {
            allCities = root.database.get_cities_collection();
            usedCities = [];
            generate_city();
        },

        proceed_answer(city) {
            var normalized_city = normalize(city);
            if ((currentCity = allCities[normalized_city.charAt(0)][normalized_city]) != undefined) {
                alert(this.generate_city(currentCity.charAt(0)));
            } else {
                alert("Город не найден");
            }
        },

        generate_city(letter) {
            var citiesByLetter = allCities[letter.toUpperCase()];
            return citiesByLetter[this.randomInRange(0, citiesByLetter.length)];
        },


        // helpers
        normalize(city) {
            return city.toLowerCase().replace('-', ' ');
        },
        getFirstLetter(word) {
            return word.charAt(0);
        },
        randomInRange(min, max) {
            return Math.floor(Math.random() * (max - min + 1) + min);
        }
    }

    root.game = game;
    // game.init();
})(this);

