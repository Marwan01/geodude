
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
  var url ='https://newsapi.org/v2/top-headlines?' + 
  'q=' + city + '&' +
  'sortBy=popularity&' +
  'apiKey=7b5f48dbc9e348db8616f70b532aff14';
  var req = new Request(url);
  var x =fetch(req)
  .then((response) => response.json())
  .then((responseJSON) => {
    let newRes = responseJSON;
    swal({
      title: newRes.articles[0].title,
      text: newRes.articles[0].content,
      icon: "info",
      buttons: [true,"See Full Article"],
    }).then(okay => {
      if (okay) {
        window.location.href = newRes.articles[0].url;
      }
    });
  }).catch(swal({
    title: "Error",
    text: "No News at the moment. Try again later.",
    icon: "warning"
  }))
}

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
  center: {lat: 0, lng: 0},
  zoom: 2
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

        addMarkerToGroup(group, {lat:38.627, lng:-90.1994},
        `<button onclick="getnews(\'St. Louis\')">St. Louis</button>`);
  
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
        `<button onclick="getnews(\'New York\')">New York</button>`);
        
        addMarkerToGroup(group, {lat:4.710, lng:-74.072},
          `<button onclick="getnews(\'Bogota\')">Bogota</button>`);

        addMarkerToGroup(group, {lat:-33.8688, lng:151.2093},
          `<button onclick="getnews(\'Sydney\')">Sydney</button>`);
    
        addMarkerToGroup(group, {lat:-30.559483, lng:22.937506},
          `<button onclick="getnews(\'South Africa\')">South Africa</button>`);

        addMarkerToGroup(group, {lat:-35.675148, lng:-71.542969},
          `<button onclick="getnews(\'Chile\')">Chile</button>`);

        addMarkerToGroup(group, {lat:-14.235004, lng:-51.925282},
          `<button onclick="getnews(\'Brasil\')">Brasil</button>`);

        addMarkerToGroup(group, {lat:45.501690, lng:-73.567253},
          `<button onclick="getnews(\'Montreal\')">Montreal</button>`);

        addMarkerToGroup(group, {lat:59.938480, lng:30.312481},
          `<button onclick="getnews(\'Saint Petersbourg\')">Saint Petersbourg</button>`);

        addMarkerToGroup(group, {lat:53.349804, lng:-6.260310},
          `<button onclick="getnews(\'Dublin\')">Dublin</button>`);

       addMarkerToGroup(group, {lat:9.081999, lng:8.675277},
          `<button onclick="getnews(\'Nigeria\')">Nigeria</button>`);

         addMarkerToGroup(group, {lat:41.299496, lng:69.240074},
            `<button onclick="getnews(\'Tashkent\')">Tashkent</button>`);

        addMarkerToGroup(group, {lat:47.606209, lng:-122.332069},
          `<button onclick="getnews(\'Seattle\')">Seattle</button>`);

        addMarkerToGroup(group, {lat:37.774929, lng:-122.419418},
          `<button onclick="getnews(\'San Francisco\')">San Francisco</button>`);
  }
  
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
    center: {lat: 0, lng: 0},
    zoom: 7
  });
  
  // MapEvents enables the event system
  // Behavior implements default interactions for pan/zoom (also on mobile touch environments)
  var behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(map));
  
  // create default UI with layers provided by the platform
  var ui = H.ui.UI.createDefault(map, defaultLayers);
  
  // Now use the map as required...
  addInfoBubble(map);
