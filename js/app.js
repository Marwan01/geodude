
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


function getnews(city){
  var obj;
  // var url = "https://newsapi.org/v2/top-headlines?country=jp&apiKey=7b5f48dbc9e348db8616f70b532aff14";
  var url ='https://newsapi.org/v2/top-headlines?' + 
  'q=' + city + '&' +
  // 'from=2018-09-14&' +
  // 'sortBy=popularity&' +
  // 'country=us&' +
  'apiKey=7b5f48dbc9e348db8616f70b532aff14';
  var req = new Request(url);
  var x =fetch(req)
  .then((response) => response.json())
  .then((responseJSON) => {
    let newRes = responseJSON;
    // console.log(newRes.articles[0])
    $(".H_ib_tail").text(newRes.articles[0].title).
    css({
      'background-color': '#000000', 
      'font-size': '18px',
      'width': '320px',
      'height': '65px',
      'padding': '10px'
    }).toggle();
    //alert(newRes.articles[0].title)
  })
  // console.log(obj);
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
var map = new H.Map(document.getElementById('map1'),
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
        `<button onclick="getnews(\'Manchester City\')">Manchester City</button>`);
  
      addMarkerToGroup(group, {lat:53.430, lng:-2.961},
        `<button onclick="getnews(\'Manchester City\')">Liverpool</button>`);
        
        addMarkerToGroup(group, {lat:52.520, lng:13.404},
        `<button onclick="getnews(\'Berlin\')">Berlin</button>`);
  
        addMarkerToGroup(group, {lat:36.806, lng:10.181},
        `<button onclick="getnews(\'Tunis\')">Tunis</button>`);
        
        addMarkerToGroup(group, {lat:41.902, lng:12.497},
        `<button onclick="getnews(\'Rome\')">Rome</button>`);
        
        addMarkerToGroup(group, {lat:31.230, lng:121.473},
        `<button onclick="getnews(\'Shanghai\')">Shanghai</button>`);
        
        addMarkerToGroup(group, {lat:19.075, lng:72.877},
        `<button onclick="getnews(\'Mumbai\')">Mumbai</button>`);
        
        addMarkerToGroup(group, {lat:28.714, lng:77.209},
        `<button onclick="getnews(\'New Delhi\')">New Delhi</button>`);
        
        addMarkerToGroup(group, {lat:48.857, lng:2.352},
        `<button onclick="getnews(\'Paris\')">Paris</button>`);
        
        addMarkerToGroup(group, {lat:41.385, lng:2.173},
        `<button onclick="getnews(\'Barcelona\')">Barcelona</button>`);
        
        addMarkerToGroup(group, {lat:40.857, lng:-74.024},
        `<button onclick="getnews(\'Chicago\')">Chicago</button>`);
        
        addMarkerToGroup(group, {lat:4.710, lng:-74.072},
        `<button onclick="getnews(\'Bogota\')">Bogota</button>`);
    
  
  }

  /**
   * 
   *  
  var promise1 = new Promise(function(resolve, reject) {
  setTimeout(function() {
    resolve('foo');
  }, 300);
});

promise1.then(function(value) {
  console.log(value);
  // expected output: "foo"
});

console.log(promise1);
// expected output: [object Promise] 
   */
  

    //
  
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
