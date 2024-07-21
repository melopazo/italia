		var mapabase2 = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png?{foo}', {
			maxZoom: 20,
			foo: 'bar',
			attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'			
		});					


		var mapabase = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png?{foo}', {
			maxZoom: 20,
			foo: 'bar',
			attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
		});		

		var OSMde = L.tileLayer('https://{s}.tile.openstreetmap.de/{z}/{x}/{y}.png?{foo}', {
			maxZoom: 20,
			foo: 'bar',
			attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
		});		


		var mapaSin = L.tileLayer('', {
			maxZoom: 20,
			foo: 'bar',
		});			

//no va
		var mapaOSMBN = L.tileLayer('https://tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png', {
			maxZoom: 20,
			foo: 'bar', 
			attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'			
		});  		

//no va
		var mapaOSMBN2 = L.tileLayer('https://tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png', {
			maxZoom: 20,
			foo: 'bar', 
			attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'			
		});  		

//no va
		var mapabaseSin = L.tileLayer('https://tiles.wmflabs.org/osm-no-labels/{z}/{x}/{y}.png?{foo}', {
			maxZoom: 20,
			foo: 'bar',
			attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
		});				

		var mapaToner = L.tileLayer('http://b.tile.stamen.com/toner/{z}/{x}/{y}.png?{foo}', {
			maxZoom: 18,
			foo: 'bar',
			attribution: '&copy; <a href="http://maps.stamen.com">Stamen</a>'
		});	

		var mapaTerrain = L.tileLayer('http://b.tile.stamen.com/terrain/{z}/{x}/{y}.png?{foo}', {
			maxZoom: 18,
			foo: 'bar',
			attribution: '&copy; <a href="http://maps.stamen.com">Stamen</a>'
		});				

		var mapaTerrainSin = L.tileLayer('http://tile.stamen.com/terrain-background/{z}/{x}/{y}.png?{foo}', {
			maxZoom: 18,
			foo: 'bar',
			attribution: '&copy; <a href="http://maps.stamen.com">Stamen</a>'
		});			


  		var capaFalsa = L.tileLayer.wms("", {
			layers: '',
			format: 'image/png',
			transparent: true,
          	maxZoom: 25,           
			attribution: ""
		});  					

		var OSM_FR = L.tileLayer('https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png?{foo}', {
			maxZoom: 20,
			foo: 'bar',
			attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap France</a>'
		});		

		var OSM_DE = L.tileLayer('https://{s}.tile.openstreetmap.de/{z}/{x}/{y}.png?{foo}', {
			maxZoom: 20,
			foo: 'bar',
			attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap France</a>'
		});				

		var OSM_CatVal= L.tileLayer('https://tile.openstreetmap.bzh/ca/{z}/{x}/{y}.png?{foo}', {
			maxZoom: 20,
			foo: 'bar',
			attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap France</a>'
		});		

		var OSM_Euskera = L.tileLayer('https://tile.openstreetmap.bzh/eu/{z}/{x}/{y}.png?{foo}', {
			maxZoom: 20,
			foo: 'bar',
			attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap France</a>'
		});			

		var OSM_Occitan= L.tileLayer('https://tile.openstreetmap.bzh/oc/{z}/{x}/{y}.png?{foo}', {
			maxZoom: 20,
			foo: 'bar',
			attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap France</a>'
		});		

		var OSM_Breton= L.tileLayer('https://tile.openstreetmap.bzh/br/{z}/{x}/{y}.png?{foo}', {
			maxZoom: 20,
			foo: 'bar',
			attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap France</a>'
		});		


		

		var OSMGPX= L.tileLayer('https://b.gps-tile.openstreetmap.org/lines/{z}/{x}/{y}.png.png?{foo}', {
			maxZoom: 20,
			foo: 'bar',
			attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
		});									
  
// Open Topo Map -------------------------------------------------------------------------------------------------------	
		
		var mapaOpenTopoMap = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png?{foo}', {
			maxZoom: 17, 
			foo: 'bar', 
			attribution: '&copy; <a href="https://opentopomap.org/about">OpenTopoMap</a>'
		});

// 4UMaps -------------------------------------------------------------------------------------------------------	
// No va
		var mapa4UMaps = L.tileLayer('https://tileserver.4umaps.com/{z}/{x}/{y}.png?{foo}', {
			maxZoom: 15,
			foo: 'bar',
			attribution: '&copy; <a href="https://www.4umaps.eu">4UMaps</a>, &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
		});		  
  
// Map1.eu -------------------------------------------------------------------------------------------------------	
//No va
		var mapaMap1 = L.tileLayer('http://beta.map1.eu/tiles/{z}/{x}/{y}.jpg?{foo}', {
			minZoom: 5,
			maxZoom: 15,
			foo: 'bar',
			attribution: '&copy; <a href="http://www.map1.eu/">map1</a>, &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
		});		

// MTB map Europe -------------------------------------------------------------------------------------------------------	
		
		var mapaMTBMap = L.tileLayer('https://tile.mtbmap.cz/mtbmap_tiles/{z}/{x}/{y}.png', {
			maxZoom: 18,
			foo: 'bar',
			attribution: '&copy; <a href="http://mtbmap.cz">MTB map Europe</a>, &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
		});		

// Hike -------------------------------------------------------------------------------------------------------	
//No va
		var mapaHike = L.tileLayer('http://{s}.tiles.wmflabs.org/hikebike/{z}/{x}/{y}.png?{foo}', {
			maxZoom: 20,
			foo: 'bar',
			attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
		});	


// Bergfex -------------------------------------------------------------------------------------------------------	

		var mapaBergfex = L.tileLayer('https://tiles.bergfex.at/styles/bergfex-osm/{z}/{x}/{y}@2x.jpg?', {
			attribution: '<a href="https://www.bergfex.com" target="_blank">Bergfex</a>'
		});			


// F4map -------------------------------------------------------------------------------------------------------	
// Carga con fallos

		var mapaF4map = L.tileLayer('https://tile1.f4map.com/tiles/f4_2d/{z}/{x}/{y}.png?{foo}', {
			maxZoom: 15,
			foo: 'bar',
			attribution: '&copy; <a href="https://www.f4map.com/">F4Map</a>'
		});		


// Falk -------------------------------------------------------------------------------------------------------	

		var mapaFalk = L.tileLayer('https://map.tourinfra.com/tiles/falk-original/{z}/{x}/{y}.png', {
			maxZoom: 13,
			foo: 'bar',
			attribution: '&copy; <a href="https://www.falk.de/maps">Falk</a>'
		});		

// Kartogiraffe map -------------------------------------------------------------------------------------------------------	

		var mapaKartogiraffe = L.tileLayer('https://tiles.kartogiraffe.de/tiles/map/{z}/{x}/{y}.png?{foo}', {
			maxZoom: 18,
			foo: 'bar',
			attribution: '&copy; <a href="https://www.kartogiraffe.de/">Kartogiraffe</a>'
		});		

// OSM Public Transport -------------------------------------------------------------------------------------------------------	

		var mapaOSMPublicTrans= L.tileLayer('https://tileserver.memomaps.de/tilegen/{z}/{x}/{y}.png?{foo}', {
			maxZoom: 18,
			foo: 'bar',
			attribution: '&copy; <a href="https://memomaps.de">MeMoMaps</a>'
		});		

// Humanitario -----------------------------------------------------------------------------------------------------------------

		var mapaOSMHumanitarian = L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
			maxZoom: 20,
			foo: 'bar',
			attribution: '&copy; <a href="https://www.hotosm.org">Humanitarian</a>'
			});					

// Mapy.cz -------------------------------------------------------------------------------------------------------	
//No va
		var mapaMapyTurist= L.tileLayer('https://mapserver.mapy.cz/turist-m/{z}-{x}-{y}', {
			maxZoom: 18,
			foo: 'bar',
			attribution: '&copy; <a href="https://mapy.cz">mapy.cz</a>'
		});	

// CyclOSM -------------------------------------------------------------------------------------------------------	

		var mapaCyclOSM = L.tileLayer('https://{s}.tile-cyclosm.openstreetmap.fr/cyclosm/{z}/{x}/{y}.png', {
			maxZoom: 20,
			attribution: '<a href="https://www.cyclosm.org">CyclOSM</a>'
		});

// Sombreado (solo emisferio Norte) -------------------------------------------------------------------------------------------------------	
// No va
		var mapaHill= L.tileLayer('http://{s}.tiles.wmflabs.org/hillshading/{z}/{x}/{y}.png?{foo}', {
			maxZoom: 20,
			foo: 'bar',
			attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
		});	


// Transporte público -----------------------------------------------------------------------------------------------------------------
// No va
		var capaTransPubl = L.tileLayer('http://www.openptmap.org/tiles/{z}/{x}/{y}.png', {
			maxZoom: 11,
			foo: 'bar',
			attribution: '&copy; <a href="http://www.openptmap.org/">Public Transport Lines</a>'			
			});	


// Thunderforest-------------------------------------------------------------------------------------------------------	
//Pide key		

		var mapaOpenCycleMap = L.tileLayer('https://{s}.tile.thunderforest.com/cycle/{z}/{x}/{y}.png?{foo}', {
			maxZoom: 20, foo: 'bar', 
			attribution: '&copy; <a href="http://www.thunderforest.com/">Thunderforest</a>, &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
			});
			
		var mapaTransport = L.tileLayer('https://{s}.tile.thunderforest.com/transport/{z}/{x}/{y}.png?', {
			maxZoom: 20, foo: 'bar', 
			attribution: '&copy; <a href="http://www.thunderforest.com/">Thunderforest</a>, &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
			});
			
		var mapaTransportDark = L.tileLayer('https://{s}.tile.thunderforest.com/transport-dark/{z}/{x}/{y}.png?', {
			maxZoom: 20, foo: 'bar', 
			attribution: '&copy; <a href="http://www.thunderforest.com/">Thunderforest</a>, &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
			});			

		var mapaPaisaje = L.tileLayer('https://{s}.tile.thunderforest.com/landscape/{z}/{x}/{y}.png', {
			maxZoom: 20, foo: 'bar', 
			attribution: '&copy; <a href="http://www.thunderforest.com/">Thunderforest</a>, &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
			});			
			
		var mapaAireLibre = L.tileLayer('https://{s}.tile.thunderforest.com/outdoors/{z}/{x}/{y}.png', {
			maxZoom: 20, foo: 'bar', 
			attribution: '&copy; <a href="http://www.thunderforest.com/">Thunderforest</a>, &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
			});		

		var mapaPioneer = L.tileLayer('https://{s}.tile.thunderforest.com/pioneer/{z}/{x}/{y}.png', {
			maxZoom: 20, foo: 'bar', 
			attribution: '&copy; <a href="http://www.thunderforest.com/">Thunderforest</a>, &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
			});		

		var mapaMobileAtlas = L.tileLayer('https://{s}.tile.thunderforest.com/mobile-atlas/{z}/{x}/{y}.png', {
			maxZoom: 20, foo: 'bar', 
			attribution: '&copy; <a href="http://www.thunderforest.com/">Thunderforest</a>, &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
			});	


// Relief -------------------------------------------------------------------------------------------------------		
			
		var mapaRelief = L.tileLayer('https://maps-for-free.com/layer/relief/z{z}/row{y}/{z}_{x}-{y}.jpg', {
			maxZoom: 11,
			foo: 'bar',
			attribution: '&copy; <a href="https://maps-for-free.com">Relief Maps</a>'			
			});	

		var capaAgua = L.tileLayer('https://maps-for-free.com/layer/water/z{z}/row{y}/{z}_{x}-{y}.gif', {
			maxZoom: 11,
			foo: 'bar',
			attribution: '&copy; <a href="https://maps-for-free.com">Relief Maps</a>'			
			});		

		var capaAdmin = L.tileLayer('https://maps-for-free.com/layer/admin/z{z}/row{y}/{z}_{x}-{y}.gif', {
			maxZoom: 11,
			foo: 'bar',
			attribution: '&copy; <a href="https://maps-for-free.com">Relief Maps</a>'			
			});								

		var capaStreets = L.tileLayer('https://maps-for-free.com/layer/streets/z{z}/row{y}/{z}_{x}-{y}.gif', {
			maxZoom: 11,
			foo: 'bar',
			attribution: '&copy; <a href="https://maps-for-free.com">Relief Maps</a>'			
			});		
	
		var capaCountry = L.tileLayer('https://maps-for-free.com/layer/country/z{z}/row{y}/{z}_{x}-{y}.gif', {
			maxZoom: 11,
			foo: 'bar',
			attribution: '&copy; <a href="https://maps-for-free.com">Relief Maps</a>'			
			});			

		var capaCrop = L.tileLayer('https://maps-for-free.com/layer/crop/z{z}/row{y}/{z}_{x}-{y}.gif', {
			maxZoom: 11,
			foo: 'bar',
			attribution: '&copy; <a href="https://maps-for-free.com">Relief Maps</a>'			
			});		

		var capaGrass = L.tileLayer('https://maps-for-free.com/layer/grass/z{z}/row{y}/{z}_{x}-{y}.gif', {
			maxZoom: 11,
			foo: 'bar',
			attribution: '&copy; <a href="https://maps-for-free.com">Relief Maps</a>'			
			});	

		var capaForest = L.tileLayer('https://maps-for-free.com/layer/forest/z{z}/row{y}/{z}_{x}-{y}.gif', {
			maxZoom: 11,
			foo: 'bar',
			attribution: '&copy; <a href="https://maps-for-free.com">Relief Maps</a>'			
			});	

		var capaTundra = L.tileLayer('https://maps-for-free.com/layer/tundra/z{z}/row{y}/{z}_{x}-{y}.gif', {
			maxZoom: 11,
			foo: 'bar',
			attribution: '&copy; <a href="https://maps-for-free.com">Relief Maps</a>'			
			});		

		var capaSand = L.tileLayer('https://maps-for-free.com/layer/sand/z{z}/row{y}/{z}_{x}-{y}.gif', {
			maxZoom: 11,
			foo: 'bar',
			attribution: '&copy; <a href="https://maps-for-free.com">Relief Maps</a>'			
			});										

		var capaSwamp = L.tileLayer('https://maps-for-free.com/layer/swamp/z{z}/row{y}/{z}_{x}-{y}.gif', {
			maxZoom: 11,
			foo: 'bar',
			attribution: '&copy; <a href="https://maps-for-free.com">Relief Maps</a>'			
			});		

		var capaIce = L.tileLayer('https://maps-for-free.com/layer/ice/z{z}/row{y}/{z}_{x}-{y}.gif', {
			maxZoom: 11,
			foo: 'bar',
			attribution: '&copy; <a href="https://maps-for-free.com">Relief Maps</a>'			
			});		

// OpenRailwayMap -----------------------------------------------------------------------------------------------------------------


		var capaOpenRailInfra = new L.TileLayer('https://{s}.tiles.openrailwaymap.org/standard/{z}/{x}/{y}.png',
		{
			attribution: '<a href="http://www.openrailwaymap.org/">© OpenRailwayMap</a> and OSM',
			minZoom: 2,
			maxZoom: 19,
			tileSize: 256
		});

		var capaOpenRailMax = new L.TileLayer('https://{s}.tiles.openrailwaymap.org/maxspeed/{z}/{x}/{y}.png',
		{
			attribution: '<a href="http://www.openrailwaymap.org/">© OpenRailwayMap</a> and OSM',
			minZoom: 2,
			maxZoom: 19,
			tileSize: 256
		});		

		var capaOpenRailSignals = new L.TileLayer('https://{s}.tiles.openrailwaymap.org/signals/{z}/{x}/{y}.png',
		{
			attribution: '<a href="http://www.openrailwaymap.org/">© OpenRailwayMap</a> and OSM',
			minZoom: 2,
			maxZoom: 19,
			tileSize: 256
		});				

		var capaOpenRailElec = new L.TileLayer('https://{s}.tiles.openrailwaymap.org/electrification/{z}/{x}/{y}.png',
		{
			attribution: '<a href="http://www.openrailwaymap.org/">© OpenRailwayMap</a> and OSM',
			minZoom: 2,
			maxZoom: 19,
			tileSize: 256
		});	

		var capaOpenRailGauge = new L.TileLayer('https://{s}.tiles.openrailwaymap.org/gauge/{z}/{x}/{y}.png',
		{
			attribution: '<a href="http://www.openrailwaymap.org/">© OpenRailwayMap</a> and OSM',
			minZoom: 2,
			maxZoom: 19,
			tileSize: 256
		});			


// AllRailMap -----------------------------------------------------------------------------------------------------------------

		var mapaAllRailMap = L.tileLayer('https://map.allrailmap.com/rail/{z}/{x}/{y}.png?', {
			maxZoom: 14, 
			attribution: '<a href="https://allrailmap.com/" target="_blank">AllRailMap</a>'
		});  




// Strava -----------------------------------------------------------------------------------------------------------------

// maxzoom: 11 https://heatmap-external-c.strava.com/tiles/all/hot/{z}/{x}/{y}.png?
// maxzoom: 15 https://proxy.nakarte.me/https/heatmap-external-a.strava.com/tiles-auth/ride/orange/{z}/{x}/{y}.png?	
// maxzoom: 16 https://strava-heatmap.tiles.freemap.sk/run/purble/{z}/{x}/{y}.png?	


		var mapaStrava = L.tileLayer('https://proxy.nakarte.me/https/heatmap-external-a.strava.com/tiles-auth/all/hot/{z}/{x}/{y}.png?', {
			maxZoom: 20, 
			foo: 'bar', 
			maxNativeZoom: 15,
			attribution: '<a href="https://www.strava.com/heatmap" target="_blank">© Strava</a>'
		});  

		var mapaStravaCycling = L.tileLayer('https://proxy.nakarte.me/https/heatmap-external-a.strava.com/tiles-auth/ride/orange/{z}/{x}/{y}.png?', {
			maxZoom: 20, 
			foo: 'bar', 
			maxNativeZoom: 15,			
			attribution: '<a href="https://www.strava.com/heatmap" target="_blank">© Strava</a>'
		});  		

		var mapaStravaRun = L.tileLayer('https://proxy.nakarte.me/https/heatmap-external-a.strava.com/tiles-auth/run/purble/{z}/{x}/{y}.png?', {
			maxZoom: 20, 
			foo: 'bar', 
			maxNativeZoom: 15,			
			attribution: '<a href="https://www.strava.com/heatmap" target="_blank">© Strava</a>'
		});  		

		var mapaStravaWinter = L.tileLayer('https://proxy.nakarte.me/https/heatmap-external-a.strava.com/tiles-auth/winter/blue/{z}/{x}/{y}.png?', {
			maxZoom: 20, 
			foo: 'bar', 
			maxNativeZoom: 15,			
			attribution: '<a href="https://www.strava.com/heatmap" target="_blank">© Strava</a>'
		});  		

		var mapaStravaSwiming = L.tileLayer('https://proxy.nakarte.me/https/heatmap-external-a.strava.com/tiles-auth/water/gray/{z}/{x}/{y}.png?', {
			maxZoom: 20, 
			foo: 'bar', 
			maxNativeZoom: 15,			
			attribution: '<a href="https://www.strava.com/heatmap" target="_blank">© Strava</a>'
		});  	


// Waymarketdtrails -------------------------------------------------------------------------------------------------------	
		
		var mapaSenderismo = L.tileLayer('https://tile.waymarkedtrails.org/hiking/{z}/{x}/{y}.png?', {
			maxZoom: 18,
			foo: 'bar',
			attribution: '&copy; <a href="https://hiking.waymarkedtrails.org">Hiking Waymarked Trails</a>'			
		});		
			
		var mapaCiclismo= L.tileLayer('https://tile.waymarkedtrails.org/cycling/{z}/{x}/{y}.png?', {
			maxZoom: 18,
			foo: 'bar',
			attribution: '&copy; <a href="https://waymarkedtrails.org">Waymarked Trails</a>'			
		});	
		
		var mapaMTB = L.tileLayer('https://tile.waymarkedtrails.org/mtb/{z}/{x}/{y}.png?', {
			maxZoom: 18,
			foo: 'bar',
			attribution: '&copy; <a href="https://waymarkedtrails.org">Waymarked Trails</a>'			
		});				
			
		var mapaEquitacion = L.tileLayer('https://tile.waymarkedtrails.org/riding/{z}/{x}/{y}.png?', {
			maxZoom: 18,
			foo: 'bar',
			attribution: '&copy; <a href="https://waymarkedtrails.org">Waymarked Trails</a>'			
		});		

		var mapaPatinaje = L.tileLayer('https://tile.waymarkedtrails.org/skating/{z}/{x}/{y}.png?', {
			maxZoom: 18,
			foo: 'bar',
			attribution: '&copy; <a href="https://waymarkedtrails.org">Waymarked Trails</a>'			
		});	

		var mapaEsqui = L.tileLayer('https://tile.waymarkedtrails.org/slopes/{z}/{x}/{y}.png?', {
			maxZoom: 18,
			foo: 'bar',
			attribution: '&copy; <a href="https://waymarkedtrails.org">Waymarked Trails</a>'			
		});		

// OpenStreetMap WMS, bereitgestellt durch terrestris GmbH und Co. KG. -------------------------------------------------------------------------------------------------------	

		var mundialisTopoAlt = L.tileLayer.wms("https://ows.mundialis.de/services/service?", {
			layers: ['TOPO-OSM-WMS', 'SRTM30-Contour'],
			format: 'image/png',
			transparent: true,
			time: mAhoraM1,
			maxZoom: 11,
			version: '1.1.1',
			attribution: "<a href=https://www.mundialis.de/>OpenStreetMap GmbH und Co. KG.</a>",
		});	   

 

