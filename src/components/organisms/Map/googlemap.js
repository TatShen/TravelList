Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var GoogleMap = function () {

  /**
   * Instantiate a new google map object.
   *
   * @param  {Node} canvas
   * @param  {Object} options
   * @return {void}
   */

  function GoogleMap(canvas) {
    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    _classCallCheck(this, GoogleMap);

    this.canvas = canvas;
    this.options = options;

    this.drawMap();
  }

  /**
  * Draw a new map.
  *
  * @return {void}
  */


  _createClass(GoogleMap, [{
    key: 'drawMap',
    value: function drawMap() {
      this.map = new google.maps.Map(this.canvas, this.options);
      this.bounds = new google.maps.LatLngBounds();
      this.markerCoords = JSON.parse(this.canvas.dataset.markers || '[]');

      this.drawMarkers();
    }

    /**
     * Draw the markers on the map.
     *
     * @return {void}
     */

  }, {
    key: 'drawMarkers',
    value: function drawMarkers() {
      var _this = this;

      this.markerCoords.map(function (data) {
        var position = new google.maps.LatLng(data.latitude, data.longitude);

        var marker = new google.maps.Marker({
          position: position,
          map: _this.map,
          title: data.title || ''
        });

        _this.attachClickEvent(marker, data);

        _this.bounds.extend(marker.position);
      });

      this.map.fitBounds(this.bounds);
      this.map.setZoom(this.options.zoom || 10);
    }

    /**
     * Attach a click event on to a marker.
     *
     * @param  {google.maps.Marker} marker
     * @param  {Object} data
     * @return {void}
     */

  }, {
    key: 'attachClickEvent',
    value: function attachClickEvent(marker, data) {
      var _this2 = this;

      marker.addListener('click', function () {
        return _this2.options.markerClickCallback(marker, data);
      });
    }
  }]);

  return GoogleMap;
}();

exports.default = GoogleMap;