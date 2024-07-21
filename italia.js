		var map = new L.Map('map', {
            center: new L.LatLng(42.4, 13.08),
            zoom: 6,
            zoomControl:false,            			
			fullscreenControl: true,
			fullscreenControlOptions: { // optional
				title:"Mostrar en pantalla completa",
				titleCancel:"Salir de la pantalla completa"
			}
		});


// Topografía -------------------------------------------------------------------------------------------------------

        var agostiniIT2 = L.tileLayer('http://www.pcn.minambiente.it/arcgis/rest/services/immagini/deAgostini/MapServer/tile/{z}/{x}/{y}.png', {
            maxZoom: 20,
            attribution: '<a href="http://www.pcn.minambiente.it/">Geoportale Nazionale</a>'
        });    

        var igmIT = L.tileLayer('https://www.igmi.org/porta-magna/wmts/tiles2.php?t=bart&z;=${z}&y;=${y}&x;=${x}', {
            maxZoom: 13,
            foo: 'bar',
            attribution: '<a href="https://www.igmi.org/" target="_blank">Istituto Geografico Militare (IGM)</a>'
        });            

        var igmIT2 = L.tileLayer.wms("https://www.igmi.org/wms2", {
            layers: 'sfondo_main',
            format: 'image/jpeg',
            transparent: true,
            maxZoom: 18,
            minZoom: 1,
            attribution: '<a href="https://www.igmi.org/">Istituto Geografico Militare (IGM)</a>'
        });     

        var topoIT = L.nonTiledLayer.wms("https://wms.pcn.minambiente.it/ogc?map=/ms_ogc/WMS_v1.3/Vettoriali/Toponimi_2011.map", {
            layers: 'NG.TOPONIMI',
            format: 'image/png',
            transparent: true,
            maxZoom: 18,
            minZoom: 16,
            attribution: '<a href="http://www.pcn.minambiente.it/">Geoportale Nazionale</a>'
        });           

        var topo250IT = L.nonTiledLayer.wms("http://wms.pcn.minambiente.it/ogc?map=/ms_ogc/WMS_v1.3/raster/IGM_250000.map", {
            layers: ['CB.IGM250000.32', 'CB.IGM250000.33'],
            format: 'image/png',
            transparent: true,
            maxZoom: 13,
            minZoom: 11,
            attribution: '<a href="http://www.pcn.minambiente.it/">Geoportale Nazionale</a>'
        });       

        var topo100IT = L.nonTiledLayer.wms("http://wms.pcn.minambiente.it/ogc?map=/ms_ogc/WMS_v1.3/raster/IGM_100000.map", {
            layers: ['MB.IGM100000.32', 'MB.IGM100000.33'],
            format: 'image/png',
            transparent: true,
            maxZoom: 15,
            minZoom: 12,
            attribution: '<a href="http://www.pcn.minambiente.it/">Geoportale Nazionale</a>'
        });   

        var topo25IT = L.nonTiledLayer.wms("http://wms.pcn.minambiente.it/ogc?map=/ms_ogc/WMS_v1.3/raster/IGM_25000.map", {
            layers: ['CB.IGM25000.32', 'CB.IGM25000.33'],
            format: 'image/png',
            transparent: true,
            maxZoom: 18,
            minZoom: 13,
            attribution: '<a href="http://www.pcn.minambiente.it/">Geoportale Nazionale</a>'
        });                       

        var agostiniIT = L.nonTiledLayer.wms("http://wms.pcn.minambiente.it/ogc?map=/ms_ogc/WMS_v1.3/raster/de_agostini.map", {
            layers: 'CB.DEAGOSTINI.32',
            format: 'image/png',
            transparent: true,
            maxZoom: 20,
            minZoom: 1,
            attribution: '<a href="http://www.pcn.minambiente.it/">Geoportale Nazionale</a>'
        });    

        var ortoITCapital = L.nonTiledLayer.wms("http://wms.pcn.minambiente.it/ogc?map=/ms_ogc/WMS_v1.3/raster/ortofoto_colore_capoluoghi.map", {
            layers: ['OI.ORTOIMMAGINI.CAPOLUOGHI.32', 'OI.ORTOIMMAGINI.CAPOLUOGHI.33'], //OI.DATEVOLO.CAPOLUOGHI
            format: 'image/png',
            transparent: true,
            maxZoom: 20,
            minZoom: 13,
            attribution: '<a href="http://www.pcn.minambiente.it/">Geoportale Nazionale</a>'
        });    

        var ortoIT2012 = L.nonTiledLayer.wms("http://wms.pcn.minambiente.it/ogc?map=/ms_ogc/WMS_v1.3/raster/ortofoto_colore_12.map", {
            layers: ['OI.ORTOIMMAGINI.2012.32', 'OI.ORTOIMMAGINI.2012.33'],
            format: 'image/png',
            transparent: true,
            maxZoom: 20,
            minZoom: 13,
            attribution: '<a href="http://www.pcn.minambiente.it/">Geoportale Nazionale</a>'
        });    

        var ortoIT2008 = L.nonTiledLayer.wms("http://wms.pcn.minambiente.it/ogc?map=/ms_ogc/WMS_v1.3/raster/ortofoto_colore_08.map", {
            layers: 'OI.ORTOIMMAGINI.2008.33',
            format: 'image/png',
            transparent: true,
            maxZoom: 20,
            minZoom: 13,
            attribution: '<a href="http://www.pcn.minambiente.it/">Geoportale Nazionale</a>'
        });    

        var ortoIT2006 = L.nonTiledLayer.wms("http://wms.pcn.minambiente.it/ogc?map=/ms_ogc/WMS_v1.3/raster/ortofoto_colore_06.map", {
            layers: ['OI.ORTOIMMAGINI.2006.32', 'OI.ORTOIMMAGINI.2006.33'],
            format: 'image/png',
            transparent: true,
            maxZoom: 20,
            minZoom: 13,
            attribution: '<a href="http://www.pcn.minambiente.it/">Geoportale Nazionale</a>'
        });    

        var ortoIT2000 = L.nonTiledLayer.wms("http://wms.pcn.minambiente.it/ogc?map=/ms_ogc/WMS_v1.3/raster/ortofoto_colore_00.map", {
            layers: ['OI.ORTOIMMAGINI.2000.32', 'OI.ORTOIMMAGINI.2000.33'],
            format: 'image/png',
            transparent: true,
            maxZoom: 20,
            minZoom: 13,
            attribution: '<a href="http://www.pcn.minambiente.it/">Geoportale Nazionale</a>'
        });                    

        var ortoIT1994_1998 = L.nonTiledLayer.wms("http://wms.pcn.minambiente.it/ogc?map=/ms_ogc/WMS_v1.3/raster/ortofoto_bn_94.map", {
            layers: ['OI.ORTOIMMAGINI.1994.32', 'OI.ORTOIMMAGINI.1994.33'],
            format: 'image/png',
            transparent: true,
            maxZoom: 20,
            minZoom: 13,
            attribution: '<a href="http://www.pcn.minambiente.it/">Geoportale Nazionale</a>'
        });    

        var ortoIT1988_1989 = L.nonTiledLayer.wms("http://wms.pcn.minambiente.it/ogc?map=/ms_ogc/WMS_v1.3/raster/ortofoto_bn_88.map", {
            layers: ['OI.ORTOIMMAGINI.1988.32', 'OI.ORTOIMMAGINI.1988.33'],
            format: 'image/png',
            transparent: true,
            maxZoom: 20,
            minZoom: 13,
            attribution: '<a href="http://www.pcn.minambiente.it/">Geoportale Nazionale</a>'
        });    

        var geoIT = L.WMS.layer("http://wms.pcn.minambiente.it/ogc?map=/ms_ogc/WMS_v1.3/Vettoriali/Carta_geologica.map", "GE.CARTAGEOLOGICA",{
            format: 'image/png',
            uppercase: true,
            transparent: true,
            continuousWorld : true,
            tiled: false,
            minZoom: 1,
            maxZoom: 18,
            info_format: 'application/vnd.ogc.gml',
            opacity: 0.6,
            attribution: '<a href="http://www.pcn.minambiente.it/">Geoportale Nazionale</a>'
        }); 

        var mdtIT20 = L.nonTiledLayer.wms("http://wms.pcn.minambiente.it/ogc?map=/ms_ogc/WMS_v1.3/raster/DTM_20M.map", {
            layers: 'EL.DTM.20M',
            format: 'image/png',
            transparent: true,
            maxZoom: 15,
            minZoom: 1,
            attribution: '<a href="http://www.pcn.minambiente.it/">Geoportale Nazionale</a>'
        });    



		igmIT.addTo(map);
        mapabase2.addTo(map);

  
        var baseTree = [

                    {label: 'Open Street Map',
                children: [
                    {label: 'OSM', layer: mapabase},
                    //{label: 'OSM (de)', layer: OSMde},
                    {label: 'OSM B/N', layer: mapaOSMBN},
                    {label: 'OSM (sin nombres)', layer: mapabaseSin},                    
                    {label: 'Open Topo Map', layer: mapaOpenTopoMap}, 
                    {label: 'Hike & Bike Map', layer: mapaHike},
                    {label: 'MTB map Europe', layer: mapaMTBMap}, 
                    //{label: 'Mapa1.eu', layer: mapaMap1},     
                    {label: 'Toner', layer: mapaToner}, 
                    {label: 'Terrain', layer: mapaTerrain}, 
                    {label: 'Bergfex', layer: mapaBergfex}, 
                    //Carga con fallos {label: 'F4map', layer: mapaF4map}, 
                    {label: 'Kartogiraffe', layer: mapaKartogiraffe}, 
                    //{label: 'Mapy Turist', layer: mapaMapyTurist}, 
                    {label: 'Relieve', layer: mapaRelief}, 


                ]
            },  
                    {label: 'IGM', layer: igmIT},
                    {label: 'DeAgostini', layer: agostiniIT},


                    {label: 'Topográfico',
                children: [
                    {label: '1:250.000', layer: topo250IT},
                    {label: '1:100.000', layer: topo100IT},
                    {label: '1:25.000', layer: topo25IT},   
                ]
            },  


                    {label: 'Ortofoto',
                children: [
                    {label: 'Capitales', layer: ortoITCapital},               
                    {label: '2012', layer: ortoIT2012},
                    {label: '2008', layer: ortoIT2008},
                    {label: '2006', layer: ortoIT2006},
                    {label: '2000', layer: ortoIT2000},
                    {label: '1994-1998', layer: ortoIT1994_1998},                    
                    {label: '1988-1989', layer: ortoIT1988_1989},
                ]
            },  

                    {label: 'MDT 20', layer: mdtIT20},
                                

        ];

        var overlayTree = [


                    {label: 'Toponimia', layer: topoIT},
                    {label: 'Geológico 1:500.000', layer: geoIT},

            {label: 'OSM',
                children: [
                    {label: 'GPX', layer: OSMGPX},
                    {label: 'Transporte público', layer: capaTransPubl},

                    {label: 'Rios', layer: capaAgua},
                    {label: 'Límites administrativos', layer: capaAdmin},
                    {label: 'Carreteras y ferrocarriles', layer: capaStreets},
                    {label: 'Cultivos', layer: capaCrop},
                    {label: 'Pastos', layer: capaGrass},
                    {label: 'Forestal', layer: capaForest},
                    {label: 'Tundra', layer: capaForest},
                    {label: 'Arenales', layer: capaSand},
                    {label: 'Pantanosos', layer: capaSwamp},
                    {label: 'Hielo', layer: capaIce},
                    {label: 'Sombreado SRTM3 v2', layer: mapaHill},
                ]
            },       


            {label: 'Strava',
                children: [
                {label: 'Todo', layer: mapaStrava},               
                {label: 'Ciclismo', layer: mapaStravaCycling},
                {label: 'Correr', layer: mapaStravaRun},
                {label: 'Natación', layer: mapaStravaSwiming},
                {label: 'Invierno', layer: mapaStravaWinter},

                ]
            },          

            {label: 'Rutas',
                children: [
                {label: 'Senderismo', layer: mapaSenderismo},               
                {label: 'MTB', layer: mapaMTB},
                {label: 'Ciclismo', layer: mapaCiclismo},

                ]
            },                      
                       
        ];

		var layers = L.control.layers.tree(baseTree, overlayTree, {position: 'topright'}).addTo(map).collapseTree(overlayTree).collapseTree();	
  

        map.addControl(new L.Control.Permalink({text: '', position:'bottomright', useAnchor: true, useLocation: true, useLocalStorage: false, layers: layers}));

        var loadingControl = L.Control.loading({
                separate: true
            });
        map.addControl(loadingControl); 
		
		var measureControl = L.control.measure({ 
							position: 'topleft', 
							primaryLengthUnit: 'meters', 
							secondaryLengthUnit: 'kilometers', 
							primaryAreaUnit: 'hectares', 
							secondaryAreaUnit: 'sqmeters', 
							activeColor: '#333333',
							completedColor: '#707070',
							localization: 'es',
							decPoint: ',',
							thousandsSep: '.', 
							someNewUnit: {
								factor: 0.001,
								display: 'Metros',
								decimals: 2 
										},
							myOtherNewUnit: {
								factor: 1234,
								display: 'Kilómetros',
								decimals: 0
							} });	
		measureControl.addTo(map);
	 
		
		//map.addControl(new L.Control.Permalink({text: 'Permalink', position:'bottomright', layers: layers}));


		
	  
      	L.control.scale({imperial: false}).addTo(map);

		L.Control.geocoder({
			collapsed:true,
			position:'topleft',
			showResultIcons: false,
			errorMessage: "Lugar no encontrado",
			placeholder: 'Buscar lugar',
		}).addTo(map);

        L.Control.FileLayerLoad.LABEL = '<i class="fa fa-folder-open"></i>';		
		L.Control.fileLayerLoad({
        // Allows you to use a customized version of L.geoJson.  
        // For example if you are using the Proj4Leaflet leaflet plugin, 
        // you can pass L.Proj.geoJson and load the files into the
        // L.Proj.GeoJson instead of the L.geoJson.  
        layer: L.geoJson,
        // See http://leafletjs.com/reference.html#geojson-options
        layerOptions: {style: {color:'red'}},
        // Add to map after loading (default: true) ?
        addToMap: true,
        // File size limit in kb (default: 1024) ?
        fileSizeLimit: 1024000,
        // Restrict accepted file formats (default: .geojson, .kml, and .gpx) ?
        formats: [
            '.geojson',
            '.kml',
			'.gpx',
        ]
		}).addTo(map);
		
		
				// detect fullscreen toggling
		map.on('enterFullscreen', function(){
			if(window.console) window.console.log('enterFullscreen');
		});
		map.on('exitFullscreen', function(){
			if(window.console) window.console.log('exitFullscreen');
		});
         
      	var osmUrl='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
        var osmAttrib='Map data &copy; OpenStreetMap contributors';
      	var osm = new L.TileLayer(osmUrl, {minZoom: 5, maxZoom: 18, attribution: osmAttrib});
   		var osm2 = new L.TileLayer(osmUrl, {minZoom: 0, maxZoom: 13, attribution: osmAttrib });
		var miniMap = new L.Control.MiniMap(osm2, { toggleDisplay: true, minimized: true}).addTo(map);

        L.control.locate({
            drawCircle: false,
            flyTo: false,
            showPopup: false,
            strings: {
                title: "Mi ubicación GPS",
                popup: "You are within meters from this point",
            },
            locateOptions: {
                    maxZoom: 15,
                    enableHighAccuracy: true
            }

        }).addTo(map);             


