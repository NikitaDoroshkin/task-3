(function (root) {

    ymaps.ready(init);

    function init() {
        myMap = new ymaps.Map("map", {
            center: [55.76, 37.64],
            zoom: 11
        });
    }
})(this);
