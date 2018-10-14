
/**
 * Creates a new marker and adds it to a group
 * @param {H.map.Group} group       The group holding the new marker
 * @param {H.geo.Point} coordinate  The location of the marker
 * @param {String} html             Data associated with the marker
 */


function addMarkerToGroup(group, coordinate, html) {
  var marker = new H.map.Marker(coordinate);
  // add custom data to the marker
  marker.setData(html);
  group.addObject(marker);
}

/**
 * Add two markers showing the position of Liverpool and Manchester City football clubs.
 * Clicking on a marker opens an infobubble which holds HTML content related to the marker.
 * @param  {H.Map} map      A HERE Map instance within the application
 */
function addInfoBubble(map) {
  var group = new H.map.Group();

  map.addObject(group);

  // add 'tap' event listener, that opens info bubble, to the group
  group.addEventListener('tap', function (evt) {
    // event target is the marker itself, group is a parent event target
    // for all objects that it contains
    var bubble =  new H.ui.InfoBubble(evt.target.getPosition(), {
      // read custom data
      content: evt.target.getData()
    });
    // show info bubble
    ui.addBubble(bubble);
  }, false);
    addMarkerToGroup(group, {lat:53.439, lng:-2.221},
      '<div onclick=getnews(\'Manchester City\') ><a href=\'http://www.mcfc.co.uk\' >Manchester City</a>');

    addMarkerToGroup(group, {lat:53.430, lng:-2.961},
      '<div onclick=getnews(\'Liverpool\')><a href=\'http://www.liverpoolfc.tv\' >Liverpool</a>');
      
      addMarkerToGroup(group, {lat:52.520, lng:13.404},
      '<div onclick=getnews(\'Berlin\')><a href=\'http://www.liverpoolfc.tv\' >Berlin</a>');
      
      addMarkerToGroup(group, {lat:36.806, lng:10.181},
      '<div onclick=getnews(\'Tunis\')><a href=\'http://www.liverpoolfc.tv\' >Tunis</a>');
      
      addMarkerToGroup(group, {lat:41.902, lng:12.497},
      '<div onclick=getnews(\'Rome\')><a href=\'http://www.liverpoolfc.tv\' >Rome</a>');
      
      addMarkerToGroup(group, {lat:31.230, lng:121.473},
      '<div onclick=getnews(\'Shangai\')><a href=\'http://www.liverpoolfc.tv\' >Shangai</a>');
      
      addMarkerToGroup(group, {lat:19.075, lng:72.877},
      '<div onclick=getnews(\'Mumbai\')><a href=\'http://www.liverpoolfc.tv\' >Mumbai</a>');
      
      addMarkerToGroup(group, {lat:28.714, lng:77.209},
      '<div onclick=getnews(\'New Delhi\')><a href=\'http://www.liverpoolfc.tv\' >New Delhi</a>');
      
      addMarkerToGroup(group, {lat:48.857, lng:2.352},
      '<div onclick=getnews(\'Paris\')><a href=\'http://www.liverpoolfc.tv\' >Paris</a>');
      
      addMarkerToGroup(group, {lat:41.385, lng:2.173},
      '<div onclick=getnews(\'Barcelona\')><a href=\'http://www.liverpoolfc.tv\' >Barcelona</a>');
      
      addMarkerToGroup(group, {lat:40.857, lng:-74.024},
      '<div onclick=getnews(\'Moscow\')><a href=\'http://www.liverpoolfc.tv\' >Moscow</a>');
      
      addMarkerToGroup(group, {lat:4.710, lng:-74.072},
      '<div onclick=getnews(\'Bogota\')><a href=\'http://www.liverpoolfc.tv\' >Bogota</a>');
  

}


function getnews(city){
  var url = 'https://newsapi.org/v2/top-headlines?' + 
  'q=' + city + "&'" +
  'from=2018-09-14&' +
  'sortBy=popularity&' +
  'country=us&' +
  'apiKey=7b5f48dbc9e348db8616f70b532aff14';
  var req = new Request(url);
  fetch(req)
  .then(function(response) {
  console.log(response.json());
  })
}
/**
 * Boilerplate map initialization code starts below:
 */

// initialize communication with the platform
var platform = new H.service.Platform({
  app_id: '{YOUR_APP_ID}',
  app_code: '{YOUR_APP_CODE}',
  useCIT: true,
  useHTTPS: true
});
var defaultLayers = platform.createDefaultLayers();

// initialize a map - this map is centered over Europe
var map = new H.Map(document.getElementById('map'),
  defaultLayers.normal.map,{
  center: {lat: 53.430, lng: -2.961},
  zoom: 7
});

// MapEvents enables the event system
// Behavior implements default interactions for pan/zoom (also on mobile touch environments)
var behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(map));

// create default UI with layers provided by the platform
var ui = H.ui.UI.createDefault(map, defaultLayers);

// Now use the map as required...
addInfoBubble(map);