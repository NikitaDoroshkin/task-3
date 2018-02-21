(function (root) {
    function get_JSON() {
        var data = '{"А" : {"амстердам":"Амстердам", "анапа":"Анапа"}, "Б" : {"бангладеш":"Бангладеш"}, "М" : {"магдебург":"Магдебург"}}';
        return data;
    }

    var database = {
        get_cities_collection() {
            return JSON.parse(get_JSON());
        }
    }
    root.database = database;
})(this);
