var wms_layers = [];


        var lyr_Mappa_web_Fra_0 = new ol.layer.Tile({
            'title': 'Mappa_web_Fra',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://cartodb-basemaps-a.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png'
            })
        });
var format_85_Sabato_09_00_11_35shp_1 = new ol.format.GeoJSON();
var features_85_Sabato_09_00_11_35shp_1 = format_85_Sabato_09_00_11_35shp_1.readFeatures(json_85_Sabato_09_00_11_35shp_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_85_Sabato_09_00_11_35shp_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_85_Sabato_09_00_11_35shp_1.addFeatures(features_85_Sabato_09_00_11_35shp_1);
var lyr_85_Sabato_09_00_11_35shp_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_85_Sabato_09_00_11_35shp_1, 
                style: style_85_Sabato_09_00_11_35shp_1,
                popuplayertitle: '85_Sabato_09_00_11_35.shp',
                interactive: true,
    title: '85_Sabato_09_00_11_35.shp<br />\
    <img src="styles/legend/85_Sabato_09_00_11_35shp_1_0.png" /> 1<br />\
    <img src="styles/legend/85_Sabato_09_00_11_35shp_1_1.png" /> 2<br />\
    <img src="styles/legend/85_Sabato_09_00_11_35shp_1_2.png" /> 3<br />\
    <img src="styles/legend/85_Sabato_09_00_11_35shp_1_3.png" /> 4<br />\
    <img src="styles/legend/85_Sabato_09_00_11_35shp_1_4.png" /> 5<br />\
    <img src="styles/legend/85_Sabato_09_00_11_35shp_1_5.png" /> 6<br />\
    <img src="styles/legend/85_Sabato_09_00_11_35shp_1_6.png" /> 7<br />\
    <img src="styles/legend/85_Sabato_09_00_11_35shp_1_7.png" /> 8<br />\
    <img src="styles/legend/85_Sabato_09_00_11_35shp_1_8.png" /> 9<br />\
    <img src="styles/legend/85_Sabato_09_00_11_35shp_1_9.png" /> 10<br />' });
var format_82_Sabato_09_00_11_35shp_2 = new ol.format.GeoJSON();
var features_82_Sabato_09_00_11_35shp_2 = format_82_Sabato_09_00_11_35shp_2.readFeatures(json_82_Sabato_09_00_11_35shp_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_82_Sabato_09_00_11_35shp_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_82_Sabato_09_00_11_35shp_2.addFeatures(features_82_Sabato_09_00_11_35shp_2);
var lyr_82_Sabato_09_00_11_35shp_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_82_Sabato_09_00_11_35shp_2, 
                style: style_82_Sabato_09_00_11_35shp_2,
                popuplayertitle: '82_Sabato_09_00_11_35.shp',
                interactive: true,
    title: '82_Sabato_09_00_11_35.shp<br />\
    <img src="styles/legend/82_Sabato_09_00_11_35shp_2_0.png" /> 1<br />\
    <img src="styles/legend/82_Sabato_09_00_11_35shp_2_1.png" /> 2<br />\
    <img src="styles/legend/82_Sabato_09_00_11_35shp_2_2.png" /> 3<br />\
    <img src="styles/legend/82_Sabato_09_00_11_35shp_2_3.png" /> 4<br />\
    <img src="styles/legend/82_Sabato_09_00_11_35shp_2_4.png" /> 5<br />\
    <img src="styles/legend/82_Sabato_09_00_11_35shp_2_5.png" /> 6<br />\
    <img src="styles/legend/82_Sabato_09_00_11_35shp_2_6.png" /> 7<br />' });
var format_477_Sabato_09_00_11_35shp_3 = new ol.format.GeoJSON();
var features_477_Sabato_09_00_11_35shp_3 = format_477_Sabato_09_00_11_35shp_3.readFeatures(json_477_Sabato_09_00_11_35shp_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_477_Sabato_09_00_11_35shp_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_477_Sabato_09_00_11_35shp_3.addFeatures(features_477_Sabato_09_00_11_35shp_3);
var lyr_477_Sabato_09_00_11_35shp_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_477_Sabato_09_00_11_35shp_3, 
                style: style_477_Sabato_09_00_11_35shp_3,
                popuplayertitle: '477_Sabato_09_00_11_35.shp',
                interactive: true,
    title: '477_Sabato_09_00_11_35.shp<br />\
    <img src="styles/legend/477_Sabato_09_00_11_35shp_3_0.png" /> 1<br />\
    <img src="styles/legend/477_Sabato_09_00_11_35shp_3_1.png" /> 2<br />' });
var format_476_Sabato_09_00_11_35shp_4 = new ol.format.GeoJSON();
var features_476_Sabato_09_00_11_35shp_4 = format_476_Sabato_09_00_11_35shp_4.readFeatures(json_476_Sabato_09_00_11_35shp_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_476_Sabato_09_00_11_35shp_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_476_Sabato_09_00_11_35shp_4.addFeatures(features_476_Sabato_09_00_11_35shp_4);
var lyr_476_Sabato_09_00_11_35shp_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_476_Sabato_09_00_11_35shp_4, 
                style: style_476_Sabato_09_00_11_35shp_4,
                popuplayertitle: '476_Sabato_09_00_11_35.shp',
                interactive: true,
    title: '476_Sabato_09_00_11_35.shp<br />\
    <img src="styles/legend/476_Sabato_09_00_11_35shp_4_0.png" /> 1<br />\
    <img src="styles/legend/476_Sabato_09_00_11_35shp_4_1.png" /> 2<br />\
    <img src="styles/legend/476_Sabato_09_00_11_35shp_4_2.png" /> 3<br />\
    <img src="styles/legend/476_Sabato_09_00_11_35shp_4_3.png" /> 4<br />\
    <img src="styles/legend/476_Sabato_09_00_11_35shp_4_4.png" /> 5<br />' });
var format_472_Sabato_09_00_11_35shp_5 = new ol.format.GeoJSON();
var features_472_Sabato_09_00_11_35shp_5 = format_472_Sabato_09_00_11_35shp_5.readFeatures(json_472_Sabato_09_00_11_35shp_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_472_Sabato_09_00_11_35shp_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_472_Sabato_09_00_11_35shp_5.addFeatures(features_472_Sabato_09_00_11_35shp_5);
var lyr_472_Sabato_09_00_11_35shp_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_472_Sabato_09_00_11_35shp_5, 
                style: style_472_Sabato_09_00_11_35shp_5,
                popuplayertitle: '472_Sabato_09_00_11_35.shp',
                interactive: true,
    title: '472_Sabato_09_00_11_35.shp<br />\
    <img src="styles/legend/472_Sabato_09_00_11_35shp_5_0.png" /> 1<br />\
    <img src="styles/legend/472_Sabato_09_00_11_35shp_5_1.png" /> 2<br />\
    <img src="styles/legend/472_Sabato_09_00_11_35shp_5_2.png" /> 3<br />' });
var format_470_Sabato_09_00_11_35shp_6 = new ol.format.GeoJSON();
var features_470_Sabato_09_00_11_35shp_6 = format_470_Sabato_09_00_11_35shp_6.readFeatures(json_470_Sabato_09_00_11_35shp_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_470_Sabato_09_00_11_35shp_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_470_Sabato_09_00_11_35shp_6.addFeatures(features_470_Sabato_09_00_11_35shp_6);
var lyr_470_Sabato_09_00_11_35shp_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_470_Sabato_09_00_11_35shp_6, 
                style: style_470_Sabato_09_00_11_35shp_6,
                popuplayertitle: '470_Sabato_09_00_11_35.shp',
                interactive: true,
    title: '470_Sabato_09_00_11_35.shp<br />\
    <img src="styles/legend/470_Sabato_09_00_11_35shp_6_0.png" /> 1<br />\
    <img src="styles/legend/470_Sabato_09_00_11_35shp_6_1.png" /> 2<br />\
    <img src="styles/legend/470_Sabato_09_00_11_35shp_6_2.png" /> 3<br />\
    <img src="styles/legend/470_Sabato_09_00_11_35shp_6_3.png" /> 4<br />\
    <img src="styles/legend/470_Sabato_09_00_11_35shp_6_4.png" /> 5<br />\
    <img src="styles/legend/470_Sabato_09_00_11_35shp_6_5.png" /> 6<br />\
    <img src="styles/legend/470_Sabato_09_00_11_35shp_6_6.png" /> 7<br />\
    <img src="styles/legend/470_Sabato_09_00_11_35shp_6_7.png" /> 8<br />\
    <img src="styles/legend/470_Sabato_09_00_11_35shp_6_8.png" /> 9<br />' });
var format_361_Sabato_06_00_09_00shp_7 = new ol.format.GeoJSON();
var features_361_Sabato_06_00_09_00shp_7 = format_361_Sabato_06_00_09_00shp_7.readFeatures(json_361_Sabato_06_00_09_00shp_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_361_Sabato_06_00_09_00shp_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_361_Sabato_06_00_09_00shp_7.addFeatures(features_361_Sabato_06_00_09_00shp_7);
var lyr_361_Sabato_06_00_09_00shp_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_361_Sabato_06_00_09_00shp_7, 
                style: style_361_Sabato_06_00_09_00shp_7,
                popuplayertitle: '361_Sabato_06_00_09_00.shp',
                interactive: true,
    title: '361_Sabato_06_00_09_00.shp<br />\
    <img src="styles/legend/361_Sabato_06_00_09_00shp_7_0.png" /> 1<br />' });
var format_350_Sabato_09_00_11_35shp_8 = new ol.format.GeoJSON();
var features_350_Sabato_09_00_11_35shp_8 = format_350_Sabato_09_00_11_35shp_8.readFeatures(json_350_Sabato_09_00_11_35shp_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_350_Sabato_09_00_11_35shp_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_350_Sabato_09_00_11_35shp_8.addFeatures(features_350_Sabato_09_00_11_35shp_8);
var lyr_350_Sabato_09_00_11_35shp_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_350_Sabato_09_00_11_35shp_8, 
                style: style_350_Sabato_09_00_11_35shp_8,
                popuplayertitle: '350_Sabato_09_00_11_35.shp',
                interactive: true,
    title: '350_Sabato_09_00_11_35.shp<br />\
    <img src="styles/legend/350_Sabato_09_00_11_35shp_8_0.png" /> 1<br />\
    <img src="styles/legend/350_Sabato_09_00_11_35shp_8_1.png" /> 2<br />' });
var format_35_Sabato_09_00_11_35shp_9 = new ol.format.GeoJSON();
var features_35_Sabato_09_00_11_35shp_9 = format_35_Sabato_09_00_11_35shp_9.readFeatures(json_35_Sabato_09_00_11_35shp_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_35_Sabato_09_00_11_35shp_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_35_Sabato_09_00_11_35shp_9.addFeatures(features_35_Sabato_09_00_11_35shp_9);
var lyr_35_Sabato_09_00_11_35shp_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_35_Sabato_09_00_11_35shp_9, 
                style: style_35_Sabato_09_00_11_35shp_9,
                popuplayertitle: '35_Sabato_09_00_11_35.shp',
                interactive: true,
    title: '35_Sabato_09_00_11_35.shp<br />\
    <img src="styles/legend/35_Sabato_09_00_11_35shp_9_0.png" /> 1<br />\
    <img src="styles/legend/35_Sabato_09_00_11_35shp_9_1.png" /> 2<br />\
    <img src="styles/legend/35_Sabato_09_00_11_35shp_9_2.png" /> 3<br />\
    <img src="styles/legend/35_Sabato_09_00_11_35shp_9_3.png" /> 4<br />\
    <img src="styles/legend/35_Sabato_09_00_11_35shp_9_4.png" /> 5<br />\
    <img src="styles/legend/35_Sabato_09_00_11_35shp_9_5.png" /> 6<br />\
    <img src="styles/legend/35_Sabato_09_00_11_35shp_9_6.png" /> 7<br />\
    <img src="styles/legend/35_Sabato_09_00_11_35shp_9_7.png" /> 8<br />\
    <img src="styles/legend/35_Sabato_09_00_11_35shp_9_8.png" /> 9<br />\
    <img src="styles/legend/35_Sabato_09_00_11_35shp_9_9.png" /> 10<br />' });
var format_28_Sabato_09_00_11_35shp_10 = new ol.format.GeoJSON();
var features_28_Sabato_09_00_11_35shp_10 = format_28_Sabato_09_00_11_35shp_10.readFeatures(json_28_Sabato_09_00_11_35shp_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_28_Sabato_09_00_11_35shp_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_28_Sabato_09_00_11_35shp_10.addFeatures(features_28_Sabato_09_00_11_35shp_10);
var lyr_28_Sabato_09_00_11_35shp_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_28_Sabato_09_00_11_35shp_10, 
                style: style_28_Sabato_09_00_11_35shp_10,
                popuplayertitle: '28_Sabato_09_00_11_35.shp',
                interactive: true,
    title: '28_Sabato_09_00_11_35.shp<br />\
    <img src="styles/legend/28_Sabato_09_00_11_35shp_10_0.png" /> 1<br />\
    <img src="styles/legend/28_Sabato_09_00_11_35shp_10_1.png" /> 2<br />\
    <img src="styles/legend/28_Sabato_09_00_11_35shp_10_2.png" /> 3<br />\
    <img src="styles/legend/28_Sabato_09_00_11_35shp_10_3.png" /> 4<br />' });
var format_202_Sabato_09_00_11_35shp_11 = new ol.format.GeoJSON();
var features_202_Sabato_09_00_11_35shp_11 = format_202_Sabato_09_00_11_35shp_11.readFeatures(json_202_Sabato_09_00_11_35shp_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_202_Sabato_09_00_11_35shp_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_202_Sabato_09_00_11_35shp_11.addFeatures(features_202_Sabato_09_00_11_35shp_11);
var lyr_202_Sabato_09_00_11_35shp_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_202_Sabato_09_00_11_35shp_11, 
                style: style_202_Sabato_09_00_11_35shp_11,
                popuplayertitle: '202_Sabato_09_00_11_35.shp',
                interactive: true,
    title: '202_Sabato_09_00_11_35.shp<br />\
    <img src="styles/legend/202_Sabato_09_00_11_35shp_11_0.png" /> 1<br />\
    <img src="styles/legend/202_Sabato_09_00_11_35shp_11_1.png" /> 2<br />\
    <img src="styles/legend/202_Sabato_09_00_11_35shp_11_2.png" /> 3<br />\
    <img src="styles/legend/202_Sabato_09_00_11_35shp_11_3.png" /> 4<br />' });
var format_201_Sabato_09_00_11_35shp_12 = new ol.format.GeoJSON();
var features_201_Sabato_09_00_11_35shp_12 = format_201_Sabato_09_00_11_35shp_12.readFeatures(json_201_Sabato_09_00_11_35shp_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_201_Sabato_09_00_11_35shp_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_201_Sabato_09_00_11_35shp_12.addFeatures(features_201_Sabato_09_00_11_35shp_12);
var lyr_201_Sabato_09_00_11_35shp_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_201_Sabato_09_00_11_35shp_12, 
                style: style_201_Sabato_09_00_11_35shp_12,
                popuplayertitle: '201_Sabato_09_00_11_35.shp',
                interactive: true,
    title: '201_Sabato_09_00_11_35.shp<br />\
    <img src="styles/legend/201_Sabato_09_00_11_35shp_12_0.png" /> 1<br />\
    <img src="styles/legend/201_Sabato_09_00_11_35shp_12_1.png" /> 2<br />\
    <img src="styles/legend/201_Sabato_09_00_11_35shp_12_2.png" /> 3<br />\
    <img src="styles/legend/201_Sabato_09_00_11_35shp_12_3.png" /> 4<br />\
    <img src="styles/legend/201_Sabato_09_00_11_35shp_12_4.png" /> 5<br />\
    <img src="styles/legend/201_Sabato_09_00_11_35shp_12_5.png" /> 6<br />\
    <img src="styles/legend/201_Sabato_09_00_11_35shp_12_6.png" /> 7<br />\
    <img src="styles/legend/201_Sabato_09_00_11_35shp_12_7.png" /> 8<br />\
    <img src="styles/legend/201_Sabato_09_00_11_35shp_12_8.png" /> 9<br />' });
var format_85_Venerdi_08_00_11_35shp_13 = new ol.format.GeoJSON();
var features_85_Venerdi_08_00_11_35shp_13 = format_85_Venerdi_08_00_11_35shp_13.readFeatures(json_85_Venerdi_08_00_11_35shp_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_85_Venerdi_08_00_11_35shp_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_85_Venerdi_08_00_11_35shp_13.addFeatures(features_85_Venerdi_08_00_11_35shp_13);
var lyr_85_Venerdi_08_00_11_35shp_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_85_Venerdi_08_00_11_35shp_13, 
                style: style_85_Venerdi_08_00_11_35shp_13,
                popuplayertitle: '85_Venerdi_08_00_11_35.shp',
                interactive: true,
    title: '85_Venerdi_08_00_11_35.shp<br />\
    <img src="styles/legend/85_Venerdi_08_00_11_35shp_13_0.png" /> 1<br />\
    <img src="styles/legend/85_Venerdi_08_00_11_35shp_13_1.png" /> 2<br />\
    <img src="styles/legend/85_Venerdi_08_00_11_35shp_13_2.png" /> 3<br />\
    <img src="styles/legend/85_Venerdi_08_00_11_35shp_13_3.png" /> 4<br />\
    <img src="styles/legend/85_Venerdi_08_00_11_35shp_13_4.png" /> 5<br />\
    <img src="styles/legend/85_Venerdi_08_00_11_35shp_13_5.png" /> 6<br />\
    <img src="styles/legend/85_Venerdi_08_00_11_35shp_13_6.png" /> 7<br />\
    <img src="styles/legend/85_Venerdi_08_00_11_35shp_13_7.png" /> 8<br />\
    <img src="styles/legend/85_Venerdi_08_00_11_35shp_13_8.png" /> 9<br />\
    <img src="styles/legend/85_Venerdi_08_00_11_35shp_13_9.png" /> 10<br />' });
var format_82_Venerdi_08_00_11_35shp_14 = new ol.format.GeoJSON();
var features_82_Venerdi_08_00_11_35shp_14 = format_82_Venerdi_08_00_11_35shp_14.readFeatures(json_82_Venerdi_08_00_11_35shp_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_82_Venerdi_08_00_11_35shp_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_82_Venerdi_08_00_11_35shp_14.addFeatures(features_82_Venerdi_08_00_11_35shp_14);
var lyr_82_Venerdi_08_00_11_35shp_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_82_Venerdi_08_00_11_35shp_14, 
                style: style_82_Venerdi_08_00_11_35shp_14,
                popuplayertitle: '82_Venerdi_08_00_11_35.shp',
                interactive: true,
    title: '82_Venerdi_08_00_11_35.shp<br />\
    <img src="styles/legend/82_Venerdi_08_00_11_35shp_14_0.png" /> 1<br />\
    <img src="styles/legend/82_Venerdi_08_00_11_35shp_14_1.png" /> 2<br />\
    <img src="styles/legend/82_Venerdi_08_00_11_35shp_14_2.png" /> 3<br />\
    <img src="styles/legend/82_Venerdi_08_00_11_35shp_14_3.png" /> 4<br />\
    <img src="styles/legend/82_Venerdi_08_00_11_35shp_14_4.png" /> 5<br />\
    <img src="styles/legend/82_Venerdi_08_00_11_35shp_14_5.png" /> 6<br />\
    <img src="styles/legend/82_Venerdi_08_00_11_35shp_14_6.png" /> 7<br />' });
var format_477_Venerdi_08_00_11_35shp_15 = new ol.format.GeoJSON();
var features_477_Venerdi_08_00_11_35shp_15 = format_477_Venerdi_08_00_11_35shp_15.readFeatures(json_477_Venerdi_08_00_11_35shp_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_477_Venerdi_08_00_11_35shp_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_477_Venerdi_08_00_11_35shp_15.addFeatures(features_477_Venerdi_08_00_11_35shp_15);
var lyr_477_Venerdi_08_00_11_35shp_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_477_Venerdi_08_00_11_35shp_15, 
                style: style_477_Venerdi_08_00_11_35shp_15,
                popuplayertitle: '477_Venerdi_08_00_11_35.shp',
                interactive: true,
    title: '477_Venerdi_08_00_11_35.shp<br />\
    <img src="styles/legend/477_Venerdi_08_00_11_35shp_15_0.png" /> 1<br />\
    <img src="styles/legend/477_Venerdi_08_00_11_35shp_15_1.png" /> 2<br />' });
var format_476_Venerdi_08_00_11_35shp_16 = new ol.format.GeoJSON();
var features_476_Venerdi_08_00_11_35shp_16 = format_476_Venerdi_08_00_11_35shp_16.readFeatures(json_476_Venerdi_08_00_11_35shp_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_476_Venerdi_08_00_11_35shp_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_476_Venerdi_08_00_11_35shp_16.addFeatures(features_476_Venerdi_08_00_11_35shp_16);
var lyr_476_Venerdi_08_00_11_35shp_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_476_Venerdi_08_00_11_35shp_16, 
                style: style_476_Venerdi_08_00_11_35shp_16,
                popuplayertitle: '476_Venerdi_08_00_11_35.shp',
                interactive: true,
    title: '476_Venerdi_08_00_11_35.shp<br />\
    <img src="styles/legend/476_Venerdi_08_00_11_35shp_16_0.png" /> 1<br />\
    <img src="styles/legend/476_Venerdi_08_00_11_35shp_16_1.png" /> 2<br />\
    <img src="styles/legend/476_Venerdi_08_00_11_35shp_16_2.png" /> 3<br />\
    <img src="styles/legend/476_Venerdi_08_00_11_35shp_16_3.png" /> 4<br />\
    <img src="styles/legend/476_Venerdi_08_00_11_35shp_16_4.png" /> 5<br />' });
var format_472_Venerdi_08_00_11_35shp_17 = new ol.format.GeoJSON();
var features_472_Venerdi_08_00_11_35shp_17 = format_472_Venerdi_08_00_11_35shp_17.readFeatures(json_472_Venerdi_08_00_11_35shp_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_472_Venerdi_08_00_11_35shp_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_472_Venerdi_08_00_11_35shp_17.addFeatures(features_472_Venerdi_08_00_11_35shp_17);
var lyr_472_Venerdi_08_00_11_35shp_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_472_Venerdi_08_00_11_35shp_17, 
                style: style_472_Venerdi_08_00_11_35shp_17,
                popuplayertitle: '472_Venerdi_08_00_11_35.shp',
                interactive: true,
    title: '472_Venerdi_08_00_11_35.shp<br />\
    <img src="styles/legend/472_Venerdi_08_00_11_35shp_17_0.png" /> 1<br />\
    <img src="styles/legend/472_Venerdi_08_00_11_35shp_17_1.png" /> 2<br />\
    <img src="styles/legend/472_Venerdi_08_00_11_35shp_17_2.png" /> 3<br />' });
var format_470_Venerdi_08_00_11_35shp_18 = new ol.format.GeoJSON();
var features_470_Venerdi_08_00_11_35shp_18 = format_470_Venerdi_08_00_11_35shp_18.readFeatures(json_470_Venerdi_08_00_11_35shp_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_470_Venerdi_08_00_11_35shp_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_470_Venerdi_08_00_11_35shp_18.addFeatures(features_470_Venerdi_08_00_11_35shp_18);
var lyr_470_Venerdi_08_00_11_35shp_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_470_Venerdi_08_00_11_35shp_18, 
                style: style_470_Venerdi_08_00_11_35shp_18,
                popuplayertitle: '470_Venerdi_08_00_11_35.shp',
                interactive: true,
    title: '470_Venerdi_08_00_11_35.shp<br />\
    <img src="styles/legend/470_Venerdi_08_00_11_35shp_18_0.png" /> 1<br />\
    <img src="styles/legend/470_Venerdi_08_00_11_35shp_18_1.png" /> 2<br />\
    <img src="styles/legend/470_Venerdi_08_00_11_35shp_18_2.png" /> 3<br />\
    <img src="styles/legend/470_Venerdi_08_00_11_35shp_18_3.png" /> 4<br />\
    <img src="styles/legend/470_Venerdi_08_00_11_35shp_18_4.png" /> 5<br />\
    <img src="styles/legend/470_Venerdi_08_00_11_35shp_18_5.png" /> 6<br />\
    <img src="styles/legend/470_Venerdi_08_00_11_35shp_18_6.png" /> 7<br />\
    <img src="styles/legend/470_Venerdi_08_00_11_35shp_18_7.png" /> 8<br />\
    <img src="styles/legend/470_Venerdi_08_00_11_35shp_18_8.png" /> 9<br />' });
var format_361_Venerdi_08_00_11_35shp_19 = new ol.format.GeoJSON();
var features_361_Venerdi_08_00_11_35shp_19 = format_361_Venerdi_08_00_11_35shp_19.readFeatures(json_361_Venerdi_08_00_11_35shp_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_361_Venerdi_08_00_11_35shp_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_361_Venerdi_08_00_11_35shp_19.addFeatures(features_361_Venerdi_08_00_11_35shp_19);
var lyr_361_Venerdi_08_00_11_35shp_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_361_Venerdi_08_00_11_35shp_19, 
                style: style_361_Venerdi_08_00_11_35shp_19,
                popuplayertitle: '361_Venerdi_08_00_11_35.shp',
                interactive: true,
    title: '361_Venerdi_08_00_11_35.shp<br />\
    <img src="styles/legend/361_Venerdi_08_00_11_35shp_19_0.png" /> 1<br />' });
var format_350_Venerdi_08_00_11_35shp_20 = new ol.format.GeoJSON();
var features_350_Venerdi_08_00_11_35shp_20 = format_350_Venerdi_08_00_11_35shp_20.readFeatures(json_350_Venerdi_08_00_11_35shp_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_350_Venerdi_08_00_11_35shp_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_350_Venerdi_08_00_11_35shp_20.addFeatures(features_350_Venerdi_08_00_11_35shp_20);
var lyr_350_Venerdi_08_00_11_35shp_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_350_Venerdi_08_00_11_35shp_20, 
                style: style_350_Venerdi_08_00_11_35shp_20,
                popuplayertitle: '350_Venerdi_08_00_11_35.shp',
                interactive: true,
    title: '350_Venerdi_08_00_11_35.shp<br />\
    <img src="styles/legend/350_Venerdi_08_00_11_35shp_20_0.png" /> 1<br />\
    <img src="styles/legend/350_Venerdi_08_00_11_35shp_20_1.png" /> 2<br />' });
var format_35_Venerdi_08_00_11_35shp_21 = new ol.format.GeoJSON();
var features_35_Venerdi_08_00_11_35shp_21 = format_35_Venerdi_08_00_11_35shp_21.readFeatures(json_35_Venerdi_08_00_11_35shp_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_35_Venerdi_08_00_11_35shp_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_35_Venerdi_08_00_11_35shp_21.addFeatures(features_35_Venerdi_08_00_11_35shp_21);
var lyr_35_Venerdi_08_00_11_35shp_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_35_Venerdi_08_00_11_35shp_21, 
                style: style_35_Venerdi_08_00_11_35shp_21,
                popuplayertitle: '35_Venerdi_08_00_11_35.shp',
                interactive: true,
    title: '35_Venerdi_08_00_11_35.shp<br />\
    <img src="styles/legend/35_Venerdi_08_00_11_35shp_21_0.png" /> 1<br />\
    <img src="styles/legend/35_Venerdi_08_00_11_35shp_21_1.png" /> 2<br />\
    <img src="styles/legend/35_Venerdi_08_00_11_35shp_21_2.png" /> 3<br />\
    <img src="styles/legend/35_Venerdi_08_00_11_35shp_21_3.png" /> 4<br />\
    <img src="styles/legend/35_Venerdi_08_00_11_35shp_21_4.png" /> 5<br />\
    <img src="styles/legend/35_Venerdi_08_00_11_35shp_21_5.png" /> 6<br />\
    <img src="styles/legend/35_Venerdi_08_00_11_35shp_21_6.png" /> 7<br />\
    <img src="styles/legend/35_Venerdi_08_00_11_35shp_21_7.png" /> 8<br />\
    <img src="styles/legend/35_Venerdi_08_00_11_35shp_21_8.png" /> 9<br />\
    <img src="styles/legend/35_Venerdi_08_00_11_35shp_21_9.png" /> 10<br />' });
var format_28_Venerdi_08_00_11_35shp_22 = new ol.format.GeoJSON();
var features_28_Venerdi_08_00_11_35shp_22 = format_28_Venerdi_08_00_11_35shp_22.readFeatures(json_28_Venerdi_08_00_11_35shp_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_28_Venerdi_08_00_11_35shp_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_28_Venerdi_08_00_11_35shp_22.addFeatures(features_28_Venerdi_08_00_11_35shp_22);
var lyr_28_Venerdi_08_00_11_35shp_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_28_Venerdi_08_00_11_35shp_22, 
                style: style_28_Venerdi_08_00_11_35shp_22,
                popuplayertitle: '28_Venerdi_08_00_11_35.shp',
                interactive: true,
    title: '28_Venerdi_08_00_11_35.shp<br />\
    <img src="styles/legend/28_Venerdi_08_00_11_35shp_22_0.png" /> 1<br />\
    <img src="styles/legend/28_Venerdi_08_00_11_35shp_22_1.png" /> 2<br />\
    <img src="styles/legend/28_Venerdi_08_00_11_35shp_22_2.png" /> 3<br />\
    <img src="styles/legend/28_Venerdi_08_00_11_35shp_22_3.png" /> 4<br />' });
var format_202_Venerdi_08_00_11_35shp_23 = new ol.format.GeoJSON();
var features_202_Venerdi_08_00_11_35shp_23 = format_202_Venerdi_08_00_11_35shp_23.readFeatures(json_202_Venerdi_08_00_11_35shp_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_202_Venerdi_08_00_11_35shp_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_202_Venerdi_08_00_11_35shp_23.addFeatures(features_202_Venerdi_08_00_11_35shp_23);
var lyr_202_Venerdi_08_00_11_35shp_23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_202_Venerdi_08_00_11_35shp_23, 
                style: style_202_Venerdi_08_00_11_35shp_23,
                popuplayertitle: '202_Venerdi_08_00_11_35.shp',
                interactive: true,
    title: '202_Venerdi_08_00_11_35.shp<br />\
    <img src="styles/legend/202_Venerdi_08_00_11_35shp_23_0.png" /> 1<br />\
    <img src="styles/legend/202_Venerdi_08_00_11_35shp_23_1.png" /> 2<br />\
    <img src="styles/legend/202_Venerdi_08_00_11_35shp_23_2.png" /> 3<br />\
    <img src="styles/legend/202_Venerdi_08_00_11_35shp_23_3.png" /> 4<br />' });
var format_201_Venerdi_08_00_11_35shp_24 = new ol.format.GeoJSON();
var features_201_Venerdi_08_00_11_35shp_24 = format_201_Venerdi_08_00_11_35shp_24.readFeatures(json_201_Venerdi_08_00_11_35shp_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_201_Venerdi_08_00_11_35shp_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_201_Venerdi_08_00_11_35shp_24.addFeatures(features_201_Venerdi_08_00_11_35shp_24);
var lyr_201_Venerdi_08_00_11_35shp_24 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_201_Venerdi_08_00_11_35shp_24, 
                style: style_201_Venerdi_08_00_11_35shp_24,
                popuplayertitle: '201_Venerdi_08_00_11_35.shp',
                interactive: true,
    title: '201_Venerdi_08_00_11_35.shp<br />\
    <img src="styles/legend/201_Venerdi_08_00_11_35shp_24_0.png" /> 1<br />\
    <img src="styles/legend/201_Venerdi_08_00_11_35shp_24_1.png" /> 2<br />\
    <img src="styles/legend/201_Venerdi_08_00_11_35shp_24_2.png" /> 3<br />\
    <img src="styles/legend/201_Venerdi_08_00_11_35shp_24_3.png" /> 4<br />\
    <img src="styles/legend/201_Venerdi_08_00_11_35shp_24_4.png" /> 5<br />\
    <img src="styles/legend/201_Venerdi_08_00_11_35shp_24_5.png" /> 6<br />\
    <img src="styles/legend/201_Venerdi_08_00_11_35shp_24_6.png" /> 7<br />\
    <img src="styles/legend/201_Venerdi_08_00_11_35shp_24_7.png" /> 8<br />\
    <img src="styles/legend/201_Venerdi_08_00_11_35shp_24_8.png" /> 9<br />' });
var format_85_Giovedi_08_00_11_35shp_25 = new ol.format.GeoJSON();
var features_85_Giovedi_08_00_11_35shp_25 = format_85_Giovedi_08_00_11_35shp_25.readFeatures(json_85_Giovedi_08_00_11_35shp_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_85_Giovedi_08_00_11_35shp_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_85_Giovedi_08_00_11_35shp_25.addFeatures(features_85_Giovedi_08_00_11_35shp_25);
var lyr_85_Giovedi_08_00_11_35shp_25 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_85_Giovedi_08_00_11_35shp_25, 
                style: style_85_Giovedi_08_00_11_35shp_25,
                popuplayertitle: '85_Giovedi_08_00_11_35.shp',
                interactive: true,
    title: '85_Giovedi_08_00_11_35.shp<br />\
    <img src="styles/legend/85_Giovedi_08_00_11_35shp_25_0.png" /> 1<br />\
    <img src="styles/legend/85_Giovedi_08_00_11_35shp_25_1.png" /> 2<br />\
    <img src="styles/legend/85_Giovedi_08_00_11_35shp_25_2.png" /> 3<br />\
    <img src="styles/legend/85_Giovedi_08_00_11_35shp_25_3.png" /> 4<br />\
    <img src="styles/legend/85_Giovedi_08_00_11_35shp_25_4.png" /> 5<br />\
    <img src="styles/legend/85_Giovedi_08_00_11_35shp_25_5.png" /> 6<br />\
    <img src="styles/legend/85_Giovedi_08_00_11_35shp_25_6.png" /> 7<br />\
    <img src="styles/legend/85_Giovedi_08_00_11_35shp_25_7.png" /> 8<br />\
    <img src="styles/legend/85_Giovedi_08_00_11_35shp_25_8.png" /> 9<br />\
    <img src="styles/legend/85_Giovedi_08_00_11_35shp_25_9.png" /> 10<br />' });
var format_82_Giovedi_08_00_11_35shp_26 = new ol.format.GeoJSON();
var features_82_Giovedi_08_00_11_35shp_26 = format_82_Giovedi_08_00_11_35shp_26.readFeatures(json_82_Giovedi_08_00_11_35shp_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_82_Giovedi_08_00_11_35shp_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_82_Giovedi_08_00_11_35shp_26.addFeatures(features_82_Giovedi_08_00_11_35shp_26);
var lyr_82_Giovedi_08_00_11_35shp_26 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_82_Giovedi_08_00_11_35shp_26, 
                style: style_82_Giovedi_08_00_11_35shp_26,
                popuplayertitle: '82_Giovedi_08_00_11_35.shp',
                interactive: true,
    title: '82_Giovedi_08_00_11_35.shp<br />\
    <img src="styles/legend/82_Giovedi_08_00_11_35shp_26_0.png" /> 1<br />\
    <img src="styles/legend/82_Giovedi_08_00_11_35shp_26_1.png" /> 2<br />\
    <img src="styles/legend/82_Giovedi_08_00_11_35shp_26_2.png" /> 3<br />\
    <img src="styles/legend/82_Giovedi_08_00_11_35shp_26_3.png" /> 4<br />\
    <img src="styles/legend/82_Giovedi_08_00_11_35shp_26_4.png" /> 5<br />\
    <img src="styles/legend/82_Giovedi_08_00_11_35shp_26_5.png" /> 6<br />\
    <img src="styles/legend/82_Giovedi_08_00_11_35shp_26_6.png" /> 7<br />' });
var format_477_Giovedi_08_00_11_35shp_27 = new ol.format.GeoJSON();
var features_477_Giovedi_08_00_11_35shp_27 = format_477_Giovedi_08_00_11_35shp_27.readFeatures(json_477_Giovedi_08_00_11_35shp_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_477_Giovedi_08_00_11_35shp_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_477_Giovedi_08_00_11_35shp_27.addFeatures(features_477_Giovedi_08_00_11_35shp_27);
var lyr_477_Giovedi_08_00_11_35shp_27 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_477_Giovedi_08_00_11_35shp_27, 
                style: style_477_Giovedi_08_00_11_35shp_27,
                popuplayertitle: '477_Giovedi_08_00_11_35.shp',
                interactive: true,
    title: '477_Giovedi_08_00_11_35.shp<br />\
    <img src="styles/legend/477_Giovedi_08_00_11_35shp_27_0.png" /> 1<br />\
    <img src="styles/legend/477_Giovedi_08_00_11_35shp_27_1.png" /> 2<br />' });
var format_476_Giovedi_08_00_11_35shp_28 = new ol.format.GeoJSON();
var features_476_Giovedi_08_00_11_35shp_28 = format_476_Giovedi_08_00_11_35shp_28.readFeatures(json_476_Giovedi_08_00_11_35shp_28, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_476_Giovedi_08_00_11_35shp_28 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_476_Giovedi_08_00_11_35shp_28.addFeatures(features_476_Giovedi_08_00_11_35shp_28);
var lyr_476_Giovedi_08_00_11_35shp_28 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_476_Giovedi_08_00_11_35shp_28, 
                style: style_476_Giovedi_08_00_11_35shp_28,
                popuplayertitle: '476_Giovedi_08_00_11_35.shp',
                interactive: true,
    title: '476_Giovedi_08_00_11_35.shp<br />\
    <img src="styles/legend/476_Giovedi_08_00_11_35shp_28_0.png" /> 1<br />\
    <img src="styles/legend/476_Giovedi_08_00_11_35shp_28_1.png" /> 2<br />\
    <img src="styles/legend/476_Giovedi_08_00_11_35shp_28_2.png" /> 3<br />\
    <img src="styles/legend/476_Giovedi_08_00_11_35shp_28_3.png" /> 4<br />\
    <img src="styles/legend/476_Giovedi_08_00_11_35shp_28_4.png" /> 5<br />' });
var format_472_Giovedi_08_00_11_35shp_29 = new ol.format.GeoJSON();
var features_472_Giovedi_08_00_11_35shp_29 = format_472_Giovedi_08_00_11_35shp_29.readFeatures(json_472_Giovedi_08_00_11_35shp_29, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_472_Giovedi_08_00_11_35shp_29 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_472_Giovedi_08_00_11_35shp_29.addFeatures(features_472_Giovedi_08_00_11_35shp_29);
var lyr_472_Giovedi_08_00_11_35shp_29 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_472_Giovedi_08_00_11_35shp_29, 
                style: style_472_Giovedi_08_00_11_35shp_29,
                popuplayertitle: '472_Giovedi_08_00_11_35.shp',
                interactive: true,
    title: '472_Giovedi_08_00_11_35.shp<br />\
    <img src="styles/legend/472_Giovedi_08_00_11_35shp_29_0.png" /> 1<br />\
    <img src="styles/legend/472_Giovedi_08_00_11_35shp_29_1.png" /> 2<br />\
    <img src="styles/legend/472_Giovedi_08_00_11_35shp_29_2.png" /> 3<br />' });
var format_470_Giovedi_08_00_11_35shp_30 = new ol.format.GeoJSON();
var features_470_Giovedi_08_00_11_35shp_30 = format_470_Giovedi_08_00_11_35shp_30.readFeatures(json_470_Giovedi_08_00_11_35shp_30, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_470_Giovedi_08_00_11_35shp_30 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_470_Giovedi_08_00_11_35shp_30.addFeatures(features_470_Giovedi_08_00_11_35shp_30);
var lyr_470_Giovedi_08_00_11_35shp_30 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_470_Giovedi_08_00_11_35shp_30, 
                style: style_470_Giovedi_08_00_11_35shp_30,
                popuplayertitle: '470_Giovedi_08_00_11_35.shp',
                interactive: true,
    title: '470_Giovedi_08_00_11_35.shp<br />\
    <img src="styles/legend/470_Giovedi_08_00_11_35shp_30_0.png" /> 1<br />\
    <img src="styles/legend/470_Giovedi_08_00_11_35shp_30_1.png" /> 2<br />\
    <img src="styles/legend/470_Giovedi_08_00_11_35shp_30_2.png" /> 3<br />\
    <img src="styles/legend/470_Giovedi_08_00_11_35shp_30_3.png" /> 4<br />\
    <img src="styles/legend/470_Giovedi_08_00_11_35shp_30_4.png" /> 5<br />\
    <img src="styles/legend/470_Giovedi_08_00_11_35shp_30_5.png" /> 6<br />\
    <img src="styles/legend/470_Giovedi_08_00_11_35shp_30_6.png" /> 7<br />\
    <img src="styles/legend/470_Giovedi_08_00_11_35shp_30_7.png" /> 8<br />\
    <img src="styles/legend/470_Giovedi_08_00_11_35shp_30_8.png" /> 9<br />' });
var format_361_Giovedi_08_00_11_35shp_31 = new ol.format.GeoJSON();
var features_361_Giovedi_08_00_11_35shp_31 = format_361_Giovedi_08_00_11_35shp_31.readFeatures(json_361_Giovedi_08_00_11_35shp_31, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_361_Giovedi_08_00_11_35shp_31 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_361_Giovedi_08_00_11_35shp_31.addFeatures(features_361_Giovedi_08_00_11_35shp_31);
var lyr_361_Giovedi_08_00_11_35shp_31 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_361_Giovedi_08_00_11_35shp_31, 
                style: style_361_Giovedi_08_00_11_35shp_31,
                popuplayertitle: '361_Giovedi_08_00_11_35.shp',
                interactive: true,
    title: '361_Giovedi_08_00_11_35.shp<br />\
    <img src="styles/legend/361_Giovedi_08_00_11_35shp_31_0.png" /> 1<br />' });
var format_350_Giovedi_08_00_11_35shp_32 = new ol.format.GeoJSON();
var features_350_Giovedi_08_00_11_35shp_32 = format_350_Giovedi_08_00_11_35shp_32.readFeatures(json_350_Giovedi_08_00_11_35shp_32, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_350_Giovedi_08_00_11_35shp_32 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_350_Giovedi_08_00_11_35shp_32.addFeatures(features_350_Giovedi_08_00_11_35shp_32);
var lyr_350_Giovedi_08_00_11_35shp_32 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_350_Giovedi_08_00_11_35shp_32, 
                style: style_350_Giovedi_08_00_11_35shp_32,
                popuplayertitle: '350_Giovedi_08_00_11_35.shp',
                interactive: true,
    title: '350_Giovedi_08_00_11_35.shp<br />\
    <img src="styles/legend/350_Giovedi_08_00_11_35shp_32_0.png" /> 1<br />\
    <img src="styles/legend/350_Giovedi_08_00_11_35shp_32_1.png" /> 2<br />' });
var format_35_Giovedi_08_00_11_35shp_33 = new ol.format.GeoJSON();
var features_35_Giovedi_08_00_11_35shp_33 = format_35_Giovedi_08_00_11_35shp_33.readFeatures(json_35_Giovedi_08_00_11_35shp_33, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_35_Giovedi_08_00_11_35shp_33 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_35_Giovedi_08_00_11_35shp_33.addFeatures(features_35_Giovedi_08_00_11_35shp_33);
var lyr_35_Giovedi_08_00_11_35shp_33 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_35_Giovedi_08_00_11_35shp_33, 
                style: style_35_Giovedi_08_00_11_35shp_33,
                popuplayertitle: '35_Giovedi_08_00_11_35.shp',
                interactive: true,
    title: '35_Giovedi_08_00_11_35.shp<br />\
    <img src="styles/legend/35_Giovedi_08_00_11_35shp_33_0.png" /> 1<br />\
    <img src="styles/legend/35_Giovedi_08_00_11_35shp_33_1.png" /> 2<br />\
    <img src="styles/legend/35_Giovedi_08_00_11_35shp_33_2.png" /> 3<br />\
    <img src="styles/legend/35_Giovedi_08_00_11_35shp_33_3.png" /> 4<br />\
    <img src="styles/legend/35_Giovedi_08_00_11_35shp_33_4.png" /> 5<br />\
    <img src="styles/legend/35_Giovedi_08_00_11_35shp_33_5.png" /> 6<br />\
    <img src="styles/legend/35_Giovedi_08_00_11_35shp_33_6.png" /> 7<br />\
    <img src="styles/legend/35_Giovedi_08_00_11_35shp_33_7.png" /> 8<br />\
    <img src="styles/legend/35_Giovedi_08_00_11_35shp_33_8.png" /> 9<br />\
    <img src="styles/legend/35_Giovedi_08_00_11_35shp_33_9.png" /> 10<br />' });
var format_28_Giovedi_08_00_11_35shp_34 = new ol.format.GeoJSON();
var features_28_Giovedi_08_00_11_35shp_34 = format_28_Giovedi_08_00_11_35shp_34.readFeatures(json_28_Giovedi_08_00_11_35shp_34, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_28_Giovedi_08_00_11_35shp_34 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_28_Giovedi_08_00_11_35shp_34.addFeatures(features_28_Giovedi_08_00_11_35shp_34);
var lyr_28_Giovedi_08_00_11_35shp_34 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_28_Giovedi_08_00_11_35shp_34, 
                style: style_28_Giovedi_08_00_11_35shp_34,
                popuplayertitle: '28_Giovedi_08_00_11_35.shp',
                interactive: true,
    title: '28_Giovedi_08_00_11_35.shp<br />\
    <img src="styles/legend/28_Giovedi_08_00_11_35shp_34_0.png" /> 1<br />\
    <img src="styles/legend/28_Giovedi_08_00_11_35shp_34_1.png" /> 2<br />\
    <img src="styles/legend/28_Giovedi_08_00_11_35shp_34_2.png" /> 3<br />\
    <img src="styles/legend/28_Giovedi_08_00_11_35shp_34_3.png" /> 4<br />' });
var format_202_Giovedi_08_00_11_35shp_35 = new ol.format.GeoJSON();
var features_202_Giovedi_08_00_11_35shp_35 = format_202_Giovedi_08_00_11_35shp_35.readFeatures(json_202_Giovedi_08_00_11_35shp_35, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_202_Giovedi_08_00_11_35shp_35 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_202_Giovedi_08_00_11_35shp_35.addFeatures(features_202_Giovedi_08_00_11_35shp_35);
var lyr_202_Giovedi_08_00_11_35shp_35 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_202_Giovedi_08_00_11_35shp_35, 
                style: style_202_Giovedi_08_00_11_35shp_35,
                popuplayertitle: '202_Giovedi_08_00_11_35.shp',
                interactive: true,
    title: '202_Giovedi_08_00_11_35.shp<br />\
    <img src="styles/legend/202_Giovedi_08_00_11_35shp_35_0.png" /> 1<br />\
    <img src="styles/legend/202_Giovedi_08_00_11_35shp_35_1.png" /> 2<br />\
    <img src="styles/legend/202_Giovedi_08_00_11_35shp_35_2.png" /> 3<br />\
    <img src="styles/legend/202_Giovedi_08_00_11_35shp_35_3.png" /> 4<br />' });
var format_201_Giovedi_08_00_11_35shp_36 = new ol.format.GeoJSON();
var features_201_Giovedi_08_00_11_35shp_36 = format_201_Giovedi_08_00_11_35shp_36.readFeatures(json_201_Giovedi_08_00_11_35shp_36, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_201_Giovedi_08_00_11_35shp_36 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_201_Giovedi_08_00_11_35shp_36.addFeatures(features_201_Giovedi_08_00_11_35shp_36);
var lyr_201_Giovedi_08_00_11_35shp_36 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_201_Giovedi_08_00_11_35shp_36, 
                style: style_201_Giovedi_08_00_11_35shp_36,
                popuplayertitle: '201_Giovedi_08_00_11_35.shp',
                interactive: true,
    title: '201_Giovedi_08_00_11_35.shp<br />\
    <img src="styles/legend/201_Giovedi_08_00_11_35shp_36_0.png" /> 1<br />\
    <img src="styles/legend/201_Giovedi_08_00_11_35shp_36_1.png" /> 2<br />\
    <img src="styles/legend/201_Giovedi_08_00_11_35shp_36_2.png" /> 3<br />\
    <img src="styles/legend/201_Giovedi_08_00_11_35shp_36_3.png" /> 4<br />\
    <img src="styles/legend/201_Giovedi_08_00_11_35shp_36_4.png" /> 5<br />\
    <img src="styles/legend/201_Giovedi_08_00_11_35shp_36_5.png" /> 6<br />\
    <img src="styles/legend/201_Giovedi_08_00_11_35shp_36_6.png" /> 7<br />\
    <img src="styles/legend/201_Giovedi_08_00_11_35shp_36_7.png" /> 8<br />\
    <img src="styles/legend/201_Giovedi_08_00_11_35shp_36_8.png" /> 9<br />' });
var format_85_Mercoledi_08_00_11_35shp_37 = new ol.format.GeoJSON();
var features_85_Mercoledi_08_00_11_35shp_37 = format_85_Mercoledi_08_00_11_35shp_37.readFeatures(json_85_Mercoledi_08_00_11_35shp_37, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_85_Mercoledi_08_00_11_35shp_37 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_85_Mercoledi_08_00_11_35shp_37.addFeatures(features_85_Mercoledi_08_00_11_35shp_37);
var lyr_85_Mercoledi_08_00_11_35shp_37 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_85_Mercoledi_08_00_11_35shp_37, 
                style: style_85_Mercoledi_08_00_11_35shp_37,
                popuplayertitle: '85_Mercoledi_08_00_11_35.shp',
                interactive: true,
    title: '85_Mercoledi_08_00_11_35.shp<br />\
    <img src="styles/legend/85_Mercoledi_08_00_11_35shp_37_0.png" /> 1<br />\
    <img src="styles/legend/85_Mercoledi_08_00_11_35shp_37_1.png" /> 2<br />\
    <img src="styles/legend/85_Mercoledi_08_00_11_35shp_37_2.png" /> 3<br />\
    <img src="styles/legend/85_Mercoledi_08_00_11_35shp_37_3.png" /> 4<br />\
    <img src="styles/legend/85_Mercoledi_08_00_11_35shp_37_4.png" /> 5<br />\
    <img src="styles/legend/85_Mercoledi_08_00_11_35shp_37_5.png" /> 6<br />\
    <img src="styles/legend/85_Mercoledi_08_00_11_35shp_37_6.png" /> 7<br />\
    <img src="styles/legend/85_Mercoledi_08_00_11_35shp_37_7.png" /> 8<br />\
    <img src="styles/legend/85_Mercoledi_08_00_11_35shp_37_8.png" /> 9<br />\
    <img src="styles/legend/85_Mercoledi_08_00_11_35shp_37_9.png" /> 10<br />' });
var format_82_Mercoledi_08_00_11_35shp_38 = new ol.format.GeoJSON();
var features_82_Mercoledi_08_00_11_35shp_38 = format_82_Mercoledi_08_00_11_35shp_38.readFeatures(json_82_Mercoledi_08_00_11_35shp_38, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_82_Mercoledi_08_00_11_35shp_38 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_82_Mercoledi_08_00_11_35shp_38.addFeatures(features_82_Mercoledi_08_00_11_35shp_38);
var lyr_82_Mercoledi_08_00_11_35shp_38 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_82_Mercoledi_08_00_11_35shp_38, 
                style: style_82_Mercoledi_08_00_11_35shp_38,
                popuplayertitle: '82_Mercoledi_08_00_11_35.shp',
                interactive: true,
    title: '82_Mercoledi_08_00_11_35.shp<br />\
    <img src="styles/legend/82_Mercoledi_08_00_11_35shp_38_0.png" /> 1<br />\
    <img src="styles/legend/82_Mercoledi_08_00_11_35shp_38_1.png" /> 2<br />\
    <img src="styles/legend/82_Mercoledi_08_00_11_35shp_38_2.png" /> 3<br />\
    <img src="styles/legend/82_Mercoledi_08_00_11_35shp_38_3.png" /> 4<br />\
    <img src="styles/legend/82_Mercoledi_08_00_11_35shp_38_4.png" /> 5<br />\
    <img src="styles/legend/82_Mercoledi_08_00_11_35shp_38_5.png" /> 6<br />\
    <img src="styles/legend/82_Mercoledi_08_00_11_35shp_38_6.png" /> 7<br />' });
var format_477_Mercoledi_08_00_11_35shp_39 = new ol.format.GeoJSON();
var features_477_Mercoledi_08_00_11_35shp_39 = format_477_Mercoledi_08_00_11_35shp_39.readFeatures(json_477_Mercoledi_08_00_11_35shp_39, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_477_Mercoledi_08_00_11_35shp_39 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_477_Mercoledi_08_00_11_35shp_39.addFeatures(features_477_Mercoledi_08_00_11_35shp_39);
var lyr_477_Mercoledi_08_00_11_35shp_39 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_477_Mercoledi_08_00_11_35shp_39, 
                style: style_477_Mercoledi_08_00_11_35shp_39,
                popuplayertitle: '477_Mercoledi_08_00_11_35.shp',
                interactive: true,
    title: '477_Mercoledi_08_00_11_35.shp<br />\
    <img src="styles/legend/477_Mercoledi_08_00_11_35shp_39_0.png" /> 1<br />\
    <img src="styles/legend/477_Mercoledi_08_00_11_35shp_39_1.png" /> 2<br />' });
var format_476_Mercoledi_08_00_11_35shp_40 = new ol.format.GeoJSON();
var features_476_Mercoledi_08_00_11_35shp_40 = format_476_Mercoledi_08_00_11_35shp_40.readFeatures(json_476_Mercoledi_08_00_11_35shp_40, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_476_Mercoledi_08_00_11_35shp_40 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_476_Mercoledi_08_00_11_35shp_40.addFeatures(features_476_Mercoledi_08_00_11_35shp_40);
var lyr_476_Mercoledi_08_00_11_35shp_40 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_476_Mercoledi_08_00_11_35shp_40, 
                style: style_476_Mercoledi_08_00_11_35shp_40,
                popuplayertitle: '476_Mercoledi_08_00_11_35.shp',
                interactive: true,
    title: '476_Mercoledi_08_00_11_35.shp<br />\
    <img src="styles/legend/476_Mercoledi_08_00_11_35shp_40_0.png" /> 1<br />\
    <img src="styles/legend/476_Mercoledi_08_00_11_35shp_40_1.png" /> 2<br />\
    <img src="styles/legend/476_Mercoledi_08_00_11_35shp_40_2.png" /> 3<br />\
    <img src="styles/legend/476_Mercoledi_08_00_11_35shp_40_3.png" /> 4<br />\
    <img src="styles/legend/476_Mercoledi_08_00_11_35shp_40_4.png" /> 5<br />' });
var format_472_Mercoledi_08_00_11_35shp_41 = new ol.format.GeoJSON();
var features_472_Mercoledi_08_00_11_35shp_41 = format_472_Mercoledi_08_00_11_35shp_41.readFeatures(json_472_Mercoledi_08_00_11_35shp_41, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_472_Mercoledi_08_00_11_35shp_41 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_472_Mercoledi_08_00_11_35shp_41.addFeatures(features_472_Mercoledi_08_00_11_35shp_41);
var lyr_472_Mercoledi_08_00_11_35shp_41 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_472_Mercoledi_08_00_11_35shp_41, 
                style: style_472_Mercoledi_08_00_11_35shp_41,
                popuplayertitle: '472_Mercoledi_08_00_11_35.shp',
                interactive: true,
    title: '472_Mercoledi_08_00_11_35.shp<br />\
    <img src="styles/legend/472_Mercoledi_08_00_11_35shp_41_0.png" /> 1<br />\
    <img src="styles/legend/472_Mercoledi_08_00_11_35shp_41_1.png" /> 2<br />\
    <img src="styles/legend/472_Mercoledi_08_00_11_35shp_41_2.png" /> 3<br />' });
var format_470_Mercoledi_08_00_11_35shp_42 = new ol.format.GeoJSON();
var features_470_Mercoledi_08_00_11_35shp_42 = format_470_Mercoledi_08_00_11_35shp_42.readFeatures(json_470_Mercoledi_08_00_11_35shp_42, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_470_Mercoledi_08_00_11_35shp_42 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_470_Mercoledi_08_00_11_35shp_42.addFeatures(features_470_Mercoledi_08_00_11_35shp_42);
var lyr_470_Mercoledi_08_00_11_35shp_42 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_470_Mercoledi_08_00_11_35shp_42, 
                style: style_470_Mercoledi_08_00_11_35shp_42,
                popuplayertitle: '470_Mercoledi_08_00_11_35.shp',
                interactive: true,
    title: '470_Mercoledi_08_00_11_35.shp<br />\
    <img src="styles/legend/470_Mercoledi_08_00_11_35shp_42_0.png" /> 1<br />\
    <img src="styles/legend/470_Mercoledi_08_00_11_35shp_42_1.png" /> 2<br />\
    <img src="styles/legend/470_Mercoledi_08_00_11_35shp_42_2.png" /> 3<br />\
    <img src="styles/legend/470_Mercoledi_08_00_11_35shp_42_3.png" /> 4<br />\
    <img src="styles/legend/470_Mercoledi_08_00_11_35shp_42_4.png" /> 5<br />\
    <img src="styles/legend/470_Mercoledi_08_00_11_35shp_42_5.png" /> 6<br />\
    <img src="styles/legend/470_Mercoledi_08_00_11_35shp_42_6.png" /> 7<br />\
    <img src="styles/legend/470_Mercoledi_08_00_11_35shp_42_7.png" /> 8<br />\
    <img src="styles/legend/470_Mercoledi_08_00_11_35shp_42_8.png" /> 9<br />' });
var format_361_Mercoledi_08_00_11_35shp_43 = new ol.format.GeoJSON();
var features_361_Mercoledi_08_00_11_35shp_43 = format_361_Mercoledi_08_00_11_35shp_43.readFeatures(json_361_Mercoledi_08_00_11_35shp_43, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_361_Mercoledi_08_00_11_35shp_43 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_361_Mercoledi_08_00_11_35shp_43.addFeatures(features_361_Mercoledi_08_00_11_35shp_43);
var lyr_361_Mercoledi_08_00_11_35shp_43 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_361_Mercoledi_08_00_11_35shp_43, 
                style: style_361_Mercoledi_08_00_11_35shp_43,
                popuplayertitle: '361_Mercoledi_08_00_11_35.shp',
                interactive: true,
    title: '361_Mercoledi_08_00_11_35.shp<br />\
    <img src="styles/legend/361_Mercoledi_08_00_11_35shp_43_0.png" /> 1<br />' });
var format_350_Mercoledi_05_30_08_00shp_44 = new ol.format.GeoJSON();
var features_350_Mercoledi_05_30_08_00shp_44 = format_350_Mercoledi_05_30_08_00shp_44.readFeatures(json_350_Mercoledi_05_30_08_00shp_44, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_350_Mercoledi_05_30_08_00shp_44 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_350_Mercoledi_05_30_08_00shp_44.addFeatures(features_350_Mercoledi_05_30_08_00shp_44);
var lyr_350_Mercoledi_05_30_08_00shp_44 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_350_Mercoledi_05_30_08_00shp_44, 
                style: style_350_Mercoledi_05_30_08_00shp_44,
                popuplayertitle: '350_Mercoledi_05_30_08_00.shp',
                interactive: true,
    title: '350_Mercoledi_05_30_08_00.shp<br />\
    <img src="styles/legend/350_Mercoledi_05_30_08_00shp_44_0.png" /> 1<br />\
    <img src="styles/legend/350_Mercoledi_05_30_08_00shp_44_1.png" /> 2<br />\
    <img src="styles/legend/350_Mercoledi_05_30_08_00shp_44_2.png" /> 3<br />' });
var format_35_Mercoledi_08_00_11_35shp_45 = new ol.format.GeoJSON();
var features_35_Mercoledi_08_00_11_35shp_45 = format_35_Mercoledi_08_00_11_35shp_45.readFeatures(json_35_Mercoledi_08_00_11_35shp_45, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_35_Mercoledi_08_00_11_35shp_45 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_35_Mercoledi_08_00_11_35shp_45.addFeatures(features_35_Mercoledi_08_00_11_35shp_45);
var lyr_35_Mercoledi_08_00_11_35shp_45 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_35_Mercoledi_08_00_11_35shp_45, 
                style: style_35_Mercoledi_08_00_11_35shp_45,
                popuplayertitle: '35_Mercoledi_08_00_11_35.shp',
                interactive: true,
    title: '35_Mercoledi_08_00_11_35.shp<br />\
    <img src="styles/legend/35_Mercoledi_08_00_11_35shp_45_0.png" /> 1<br />\
    <img src="styles/legend/35_Mercoledi_08_00_11_35shp_45_1.png" /> 2<br />\
    <img src="styles/legend/35_Mercoledi_08_00_11_35shp_45_2.png" /> 3<br />\
    <img src="styles/legend/35_Mercoledi_08_00_11_35shp_45_3.png" /> 4<br />\
    <img src="styles/legend/35_Mercoledi_08_00_11_35shp_45_4.png" /> 5<br />\
    <img src="styles/legend/35_Mercoledi_08_00_11_35shp_45_5.png" /> 6<br />\
    <img src="styles/legend/35_Mercoledi_08_00_11_35shp_45_6.png" /> 7<br />\
    <img src="styles/legend/35_Mercoledi_08_00_11_35shp_45_7.png" /> 8<br />\
    <img src="styles/legend/35_Mercoledi_08_00_11_35shp_45_8.png" /> 9<br />\
    <img src="styles/legend/35_Mercoledi_08_00_11_35shp_45_9.png" /> 10<br />' });
var format_28_Mercoledi_08_00_11_35shp_46 = new ol.format.GeoJSON();
var features_28_Mercoledi_08_00_11_35shp_46 = format_28_Mercoledi_08_00_11_35shp_46.readFeatures(json_28_Mercoledi_08_00_11_35shp_46, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_28_Mercoledi_08_00_11_35shp_46 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_28_Mercoledi_08_00_11_35shp_46.addFeatures(features_28_Mercoledi_08_00_11_35shp_46);
var lyr_28_Mercoledi_08_00_11_35shp_46 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_28_Mercoledi_08_00_11_35shp_46, 
                style: style_28_Mercoledi_08_00_11_35shp_46,
                popuplayertitle: '28_Mercoledi_08_00_11_35.shp',
                interactive: true,
    title: '28_Mercoledi_08_00_11_35.shp<br />\
    <img src="styles/legend/28_Mercoledi_08_00_11_35shp_46_0.png" /> 1<br />\
    <img src="styles/legend/28_Mercoledi_08_00_11_35shp_46_1.png" /> 2<br />\
    <img src="styles/legend/28_Mercoledi_08_00_11_35shp_46_2.png" /> 3<br />\
    <img src="styles/legend/28_Mercoledi_08_00_11_35shp_46_3.png" /> 4<br />' });
var format_202_Mercoledi_08_00_11_35shp_47 = new ol.format.GeoJSON();
var features_202_Mercoledi_08_00_11_35shp_47 = format_202_Mercoledi_08_00_11_35shp_47.readFeatures(json_202_Mercoledi_08_00_11_35shp_47, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_202_Mercoledi_08_00_11_35shp_47 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_202_Mercoledi_08_00_11_35shp_47.addFeatures(features_202_Mercoledi_08_00_11_35shp_47);
var lyr_202_Mercoledi_08_00_11_35shp_47 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_202_Mercoledi_08_00_11_35shp_47, 
                style: style_202_Mercoledi_08_00_11_35shp_47,
                popuplayertitle: '202_Mercoledi_08_00_11_35.shp',
                interactive: true,
    title: '202_Mercoledi_08_00_11_35.shp<br />\
    <img src="styles/legend/202_Mercoledi_08_00_11_35shp_47_0.png" /> 1<br />\
    <img src="styles/legend/202_Mercoledi_08_00_11_35shp_47_1.png" /> 2<br />\
    <img src="styles/legend/202_Mercoledi_08_00_11_35shp_47_2.png" /> 3<br />\
    <img src="styles/legend/202_Mercoledi_08_00_11_35shp_47_3.png" /> 4<br />' });
var format_201_Mercoledi_08_00_11_35shp_48 = new ol.format.GeoJSON();
var features_201_Mercoledi_08_00_11_35shp_48 = format_201_Mercoledi_08_00_11_35shp_48.readFeatures(json_201_Mercoledi_08_00_11_35shp_48, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_201_Mercoledi_08_00_11_35shp_48 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_201_Mercoledi_08_00_11_35shp_48.addFeatures(features_201_Mercoledi_08_00_11_35shp_48);
var lyr_201_Mercoledi_08_00_11_35shp_48 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_201_Mercoledi_08_00_11_35shp_48, 
                style: style_201_Mercoledi_08_00_11_35shp_48,
                popuplayertitle: '201_Mercoledi_08_00_11_35.shp',
                interactive: true,
    title: '201_Mercoledi_08_00_11_35.shp<br />\
    <img src="styles/legend/201_Mercoledi_08_00_11_35shp_48_0.png" /> 1<br />\
    <img src="styles/legend/201_Mercoledi_08_00_11_35shp_48_1.png" /> 2<br />\
    <img src="styles/legend/201_Mercoledi_08_00_11_35shp_48_2.png" /> 3<br />\
    <img src="styles/legend/201_Mercoledi_08_00_11_35shp_48_3.png" /> 4<br />\
    <img src="styles/legend/201_Mercoledi_08_00_11_35shp_48_4.png" /> 5<br />\
    <img src="styles/legend/201_Mercoledi_08_00_11_35shp_48_5.png" /> 6<br />\
    <img src="styles/legend/201_Mercoledi_08_00_11_35shp_48_6.png" /> 7<br />\
    <img src="styles/legend/201_Mercoledi_08_00_11_35shp_48_7.png" /> 8<br />\
    <img src="styles/legend/201_Mercoledi_08_00_11_35shp_48_8.png" /> 9<br />' });
var format_85_Martedi_08_00_11_35shp_49 = new ol.format.GeoJSON();
var features_85_Martedi_08_00_11_35shp_49 = format_85_Martedi_08_00_11_35shp_49.readFeatures(json_85_Martedi_08_00_11_35shp_49, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_85_Martedi_08_00_11_35shp_49 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_85_Martedi_08_00_11_35shp_49.addFeatures(features_85_Martedi_08_00_11_35shp_49);
var lyr_85_Martedi_08_00_11_35shp_49 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_85_Martedi_08_00_11_35shp_49, 
                style: style_85_Martedi_08_00_11_35shp_49,
                popuplayertitle: '85_Martedi_08_00_11_35.shp',
                interactive: true,
    title: '85_Martedi_08_00_11_35.shp<br />\
    <img src="styles/legend/85_Martedi_08_00_11_35shp_49_0.png" /> 1<br />\
    <img src="styles/legend/85_Martedi_08_00_11_35shp_49_1.png" /> 2<br />\
    <img src="styles/legend/85_Martedi_08_00_11_35shp_49_2.png" /> 3<br />\
    <img src="styles/legend/85_Martedi_08_00_11_35shp_49_3.png" /> 4<br />\
    <img src="styles/legend/85_Martedi_08_00_11_35shp_49_4.png" /> 5<br />\
    <img src="styles/legend/85_Martedi_08_00_11_35shp_49_5.png" /> 6<br />\
    <img src="styles/legend/85_Martedi_08_00_11_35shp_49_6.png" /> 7<br />\
    <img src="styles/legend/85_Martedi_08_00_11_35shp_49_7.png" /> 8<br />\
    <img src="styles/legend/85_Martedi_08_00_11_35shp_49_8.png" /> 9<br />\
    <img src="styles/legend/85_Martedi_08_00_11_35shp_49_9.png" /> 10<br />' });
var format_82_Martedi_08_00_11_35shp_50 = new ol.format.GeoJSON();
var features_82_Martedi_08_00_11_35shp_50 = format_82_Martedi_08_00_11_35shp_50.readFeatures(json_82_Martedi_08_00_11_35shp_50, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_82_Martedi_08_00_11_35shp_50 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_82_Martedi_08_00_11_35shp_50.addFeatures(features_82_Martedi_08_00_11_35shp_50);
var lyr_82_Martedi_08_00_11_35shp_50 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_82_Martedi_08_00_11_35shp_50, 
                style: style_82_Martedi_08_00_11_35shp_50,
                popuplayertitle: '82_Martedi_08_00_11_35.shp',
                interactive: true,
    title: '82_Martedi_08_00_11_35.shp<br />\
    <img src="styles/legend/82_Martedi_08_00_11_35shp_50_0.png" /> 1<br />\
    <img src="styles/legend/82_Martedi_08_00_11_35shp_50_1.png" /> 2<br />\
    <img src="styles/legend/82_Martedi_08_00_11_35shp_50_2.png" /> 3<br />\
    <img src="styles/legend/82_Martedi_08_00_11_35shp_50_3.png" /> 4<br />\
    <img src="styles/legend/82_Martedi_08_00_11_35shp_50_4.png" /> 5<br />\
    <img src="styles/legend/82_Martedi_08_00_11_35shp_50_5.png" /> 6<br />\
    <img src="styles/legend/82_Martedi_08_00_11_35shp_50_6.png" /> 7<br />' });
var format_477_Martedi_08_00_11_35shp_51 = new ol.format.GeoJSON();
var features_477_Martedi_08_00_11_35shp_51 = format_477_Martedi_08_00_11_35shp_51.readFeatures(json_477_Martedi_08_00_11_35shp_51, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_477_Martedi_08_00_11_35shp_51 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_477_Martedi_08_00_11_35shp_51.addFeatures(features_477_Martedi_08_00_11_35shp_51);
var lyr_477_Martedi_08_00_11_35shp_51 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_477_Martedi_08_00_11_35shp_51, 
                style: style_477_Martedi_08_00_11_35shp_51,
                popuplayertitle: '477_Martedi_08_00_11_35.shp',
                interactive: true,
    title: '477_Martedi_08_00_11_35.shp<br />\
    <img src="styles/legend/477_Martedi_08_00_11_35shp_51_0.png" /> 1<br />\
    <img src="styles/legend/477_Martedi_08_00_11_35shp_51_1.png" /> 2<br />' });
var format_476_Martedi_08_00_11_35shp_52 = new ol.format.GeoJSON();
var features_476_Martedi_08_00_11_35shp_52 = format_476_Martedi_08_00_11_35shp_52.readFeatures(json_476_Martedi_08_00_11_35shp_52, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_476_Martedi_08_00_11_35shp_52 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_476_Martedi_08_00_11_35shp_52.addFeatures(features_476_Martedi_08_00_11_35shp_52);
var lyr_476_Martedi_08_00_11_35shp_52 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_476_Martedi_08_00_11_35shp_52, 
                style: style_476_Martedi_08_00_11_35shp_52,
                popuplayertitle: '476_Martedi_08_00_11_35.shp',
                interactive: true,
    title: '476_Martedi_08_00_11_35.shp<br />\
    <img src="styles/legend/476_Martedi_08_00_11_35shp_52_0.png" /> 1<br />\
    <img src="styles/legend/476_Martedi_08_00_11_35shp_52_1.png" /> 2<br />\
    <img src="styles/legend/476_Martedi_08_00_11_35shp_52_2.png" /> 3<br />\
    <img src="styles/legend/476_Martedi_08_00_11_35shp_52_3.png" /> 4<br />\
    <img src="styles/legend/476_Martedi_08_00_11_35shp_52_4.png" /> 5<br />' });
var format_472_Martedi_08_00_11_35shp_53 = new ol.format.GeoJSON();
var features_472_Martedi_08_00_11_35shp_53 = format_472_Martedi_08_00_11_35shp_53.readFeatures(json_472_Martedi_08_00_11_35shp_53, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_472_Martedi_08_00_11_35shp_53 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_472_Martedi_08_00_11_35shp_53.addFeatures(features_472_Martedi_08_00_11_35shp_53);
var lyr_472_Martedi_08_00_11_35shp_53 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_472_Martedi_08_00_11_35shp_53, 
                style: style_472_Martedi_08_00_11_35shp_53,
                popuplayertitle: '472_Martedi_08_00_11_35.shp',
                interactive: true,
    title: '472_Martedi_08_00_11_35.shp<br />\
    <img src="styles/legend/472_Martedi_08_00_11_35shp_53_0.png" /> 1<br />\
    <img src="styles/legend/472_Martedi_08_00_11_35shp_53_1.png" /> 2<br />\
    <img src="styles/legend/472_Martedi_08_00_11_35shp_53_2.png" /> 3<br />' });
var format_470_Martedi_08_00_11_35shp_54 = new ol.format.GeoJSON();
var features_470_Martedi_08_00_11_35shp_54 = format_470_Martedi_08_00_11_35shp_54.readFeatures(json_470_Martedi_08_00_11_35shp_54, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_470_Martedi_08_00_11_35shp_54 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_470_Martedi_08_00_11_35shp_54.addFeatures(features_470_Martedi_08_00_11_35shp_54);
var lyr_470_Martedi_08_00_11_35shp_54 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_470_Martedi_08_00_11_35shp_54, 
                style: style_470_Martedi_08_00_11_35shp_54,
                popuplayertitle: '470_Martedi_08_00_11_35.shp',
                interactive: true,
    title: '470_Martedi_08_00_11_35.shp<br />\
    <img src="styles/legend/470_Martedi_08_00_11_35shp_54_0.png" /> 1<br />\
    <img src="styles/legend/470_Martedi_08_00_11_35shp_54_1.png" /> 2<br />\
    <img src="styles/legend/470_Martedi_08_00_11_35shp_54_2.png" /> 3<br />\
    <img src="styles/legend/470_Martedi_08_00_11_35shp_54_3.png" /> 4<br />\
    <img src="styles/legend/470_Martedi_08_00_11_35shp_54_4.png" /> 5<br />\
    <img src="styles/legend/470_Martedi_08_00_11_35shp_54_5.png" /> 6<br />\
    <img src="styles/legend/470_Martedi_08_00_11_35shp_54_6.png" /> 7<br />\
    <img src="styles/legend/470_Martedi_08_00_11_35shp_54_7.png" /> 8<br />\
    <img src="styles/legend/470_Martedi_08_00_11_35shp_54_8.png" /> 9<br />' });
var format_361_Martedi_08_00_11_35shp_55 = new ol.format.GeoJSON();
var features_361_Martedi_08_00_11_35shp_55 = format_361_Martedi_08_00_11_35shp_55.readFeatures(json_361_Martedi_08_00_11_35shp_55, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_361_Martedi_08_00_11_35shp_55 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_361_Martedi_08_00_11_35shp_55.addFeatures(features_361_Martedi_08_00_11_35shp_55);
var lyr_361_Martedi_08_00_11_35shp_55 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_361_Martedi_08_00_11_35shp_55, 
                style: style_361_Martedi_08_00_11_35shp_55,
                popuplayertitle: '361_Martedi_08_00_11_35.shp',
                interactive: true,
    title: '361_Martedi_08_00_11_35.shp<br />\
    <img src="styles/legend/361_Martedi_08_00_11_35shp_55_0.png" /> 1<br />' });
var format_350_Martedi_08_00_11_35shp_56 = new ol.format.GeoJSON();
var features_350_Martedi_08_00_11_35shp_56 = format_350_Martedi_08_00_11_35shp_56.readFeatures(json_350_Martedi_08_00_11_35shp_56, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_350_Martedi_08_00_11_35shp_56 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_350_Martedi_08_00_11_35shp_56.addFeatures(features_350_Martedi_08_00_11_35shp_56);
var lyr_350_Martedi_08_00_11_35shp_56 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_350_Martedi_08_00_11_35shp_56, 
                style: style_350_Martedi_08_00_11_35shp_56,
                popuplayertitle: '350_Martedi_08_00_11_35.shp',
                interactive: true,
    title: '350_Martedi_08_00_11_35.shp<br />\
    <img src="styles/legend/350_Martedi_08_00_11_35shp_56_0.png" /> 1<br />\
    <img src="styles/legend/350_Martedi_08_00_11_35shp_56_1.png" /> 2<br />\
    <img src="styles/legend/350_Martedi_08_00_11_35shp_56_2.png" /> 3<br />' });
var format_35_Martedi_08_00_11_35shp_57 = new ol.format.GeoJSON();
var features_35_Martedi_08_00_11_35shp_57 = format_35_Martedi_08_00_11_35shp_57.readFeatures(json_35_Martedi_08_00_11_35shp_57, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_35_Martedi_08_00_11_35shp_57 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_35_Martedi_08_00_11_35shp_57.addFeatures(features_35_Martedi_08_00_11_35shp_57);
var lyr_35_Martedi_08_00_11_35shp_57 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_35_Martedi_08_00_11_35shp_57, 
                style: style_35_Martedi_08_00_11_35shp_57,
                popuplayertitle: '35_Martedi_08_00_11_35.shp',
                interactive: true,
    title: '35_Martedi_08_00_11_35.shp<br />\
    <img src="styles/legend/35_Martedi_08_00_11_35shp_57_0.png" /> 1<br />\
    <img src="styles/legend/35_Martedi_08_00_11_35shp_57_1.png" /> 2<br />\
    <img src="styles/legend/35_Martedi_08_00_11_35shp_57_2.png" /> 3<br />\
    <img src="styles/legend/35_Martedi_08_00_11_35shp_57_3.png" /> 4<br />\
    <img src="styles/legend/35_Martedi_08_00_11_35shp_57_4.png" /> 5<br />\
    <img src="styles/legend/35_Martedi_08_00_11_35shp_57_5.png" /> 6<br />\
    <img src="styles/legend/35_Martedi_08_00_11_35shp_57_6.png" /> 7<br />\
    <img src="styles/legend/35_Martedi_08_00_11_35shp_57_7.png" /> 8<br />\
    <img src="styles/legend/35_Martedi_08_00_11_35shp_57_8.png" /> 9<br />\
    <img src="styles/legend/35_Martedi_08_00_11_35shp_57_9.png" /> 10<br />' });
var format_28_Martedi_08_00_11_35shp_58 = new ol.format.GeoJSON();
var features_28_Martedi_08_00_11_35shp_58 = format_28_Martedi_08_00_11_35shp_58.readFeatures(json_28_Martedi_08_00_11_35shp_58, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_28_Martedi_08_00_11_35shp_58 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_28_Martedi_08_00_11_35shp_58.addFeatures(features_28_Martedi_08_00_11_35shp_58);
var lyr_28_Martedi_08_00_11_35shp_58 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_28_Martedi_08_00_11_35shp_58, 
                style: style_28_Martedi_08_00_11_35shp_58,
                popuplayertitle: '28_Martedi_08_00_11_35.shp',
                interactive: true,
    title: '28_Martedi_08_00_11_35.shp<br />\
    <img src="styles/legend/28_Martedi_08_00_11_35shp_58_0.png" /> 1<br />\
    <img src="styles/legend/28_Martedi_08_00_11_35shp_58_1.png" /> 2<br />\
    <img src="styles/legend/28_Martedi_08_00_11_35shp_58_2.png" /> 3<br />\
    <img src="styles/legend/28_Martedi_08_00_11_35shp_58_3.png" /> 4<br />' });
var format_202_Martedi_08_00_11_35shp_59 = new ol.format.GeoJSON();
var features_202_Martedi_08_00_11_35shp_59 = format_202_Martedi_08_00_11_35shp_59.readFeatures(json_202_Martedi_08_00_11_35shp_59, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_202_Martedi_08_00_11_35shp_59 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_202_Martedi_08_00_11_35shp_59.addFeatures(features_202_Martedi_08_00_11_35shp_59);
var lyr_202_Martedi_08_00_11_35shp_59 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_202_Martedi_08_00_11_35shp_59, 
                style: style_202_Martedi_08_00_11_35shp_59,
                popuplayertitle: '202_Martedi_08_00_11_35.shp',
                interactive: true,
    title: '202_Martedi_08_00_11_35.shp<br />\
    <img src="styles/legend/202_Martedi_08_00_11_35shp_59_0.png" /> 1<br />\
    <img src="styles/legend/202_Martedi_08_00_11_35shp_59_1.png" /> 2<br />\
    <img src="styles/legend/202_Martedi_08_00_11_35shp_59_2.png" /> 3<br />\
    <img src="styles/legend/202_Martedi_08_00_11_35shp_59_3.png" /> 4<br />' });
var format_201_Martedi_08_00_11_35shp_60 = new ol.format.GeoJSON();
var features_201_Martedi_08_00_11_35shp_60 = format_201_Martedi_08_00_11_35shp_60.readFeatures(json_201_Martedi_08_00_11_35shp_60, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_201_Martedi_08_00_11_35shp_60 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_201_Martedi_08_00_11_35shp_60.addFeatures(features_201_Martedi_08_00_11_35shp_60);
var lyr_201_Martedi_08_00_11_35shp_60 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_201_Martedi_08_00_11_35shp_60, 
                style: style_201_Martedi_08_00_11_35shp_60,
                popuplayertitle: '201_Martedi_08_00_11_35.shp',
                interactive: true,
    title: '201_Martedi_08_00_11_35.shp<br />\
    <img src="styles/legend/201_Martedi_08_00_11_35shp_60_0.png" /> 1<br />\
    <img src="styles/legend/201_Martedi_08_00_11_35shp_60_1.png" /> 2<br />\
    <img src="styles/legend/201_Martedi_08_00_11_35shp_60_2.png" /> 3<br />\
    <img src="styles/legend/201_Martedi_08_00_11_35shp_60_3.png" /> 4<br />\
    <img src="styles/legend/201_Martedi_08_00_11_35shp_60_4.png" /> 5<br />\
    <img src="styles/legend/201_Martedi_08_00_11_35shp_60_5.png" /> 6<br />\
    <img src="styles/legend/201_Martedi_08_00_11_35shp_60_6.png" /> 7<br />\
    <img src="styles/legend/201_Martedi_08_00_11_35shp_60_7.png" /> 8<br />\
    <img src="styles/legend/201_Martedi_08_00_11_35shp_60_8.png" /> 9<br />' });
var format_85_Lunedi_08_00_11_35shp_61 = new ol.format.GeoJSON();
var features_85_Lunedi_08_00_11_35shp_61 = format_85_Lunedi_08_00_11_35shp_61.readFeatures(json_85_Lunedi_08_00_11_35shp_61, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_85_Lunedi_08_00_11_35shp_61 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_85_Lunedi_08_00_11_35shp_61.addFeatures(features_85_Lunedi_08_00_11_35shp_61);
var lyr_85_Lunedi_08_00_11_35shp_61 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_85_Lunedi_08_00_11_35shp_61, 
                style: style_85_Lunedi_08_00_11_35shp_61,
                popuplayertitle: '85_Lunedi_08_00_11_35.shp',
                interactive: true,
    title: '85_Lunedi_08_00_11_35.shp<br />\
    <img src="styles/legend/85_Lunedi_08_00_11_35shp_61_0.png" /> 1<br />\
    <img src="styles/legend/85_Lunedi_08_00_11_35shp_61_1.png" /> 2<br />\
    <img src="styles/legend/85_Lunedi_08_00_11_35shp_61_2.png" /> 3<br />\
    <img src="styles/legend/85_Lunedi_08_00_11_35shp_61_3.png" /> 4<br />\
    <img src="styles/legend/85_Lunedi_08_00_11_35shp_61_4.png" /> 5<br />\
    <img src="styles/legend/85_Lunedi_08_00_11_35shp_61_5.png" /> 6<br />\
    <img src="styles/legend/85_Lunedi_08_00_11_35shp_61_6.png" /> 7<br />\
    <img src="styles/legend/85_Lunedi_08_00_11_35shp_61_7.png" /> 8<br />\
    <img src="styles/legend/85_Lunedi_08_00_11_35shp_61_8.png" /> 9<br />\
    <img src="styles/legend/85_Lunedi_08_00_11_35shp_61_9.png" /> 10<br />' });
var format_82_Lunedi_08_00_11_35shp_62 = new ol.format.GeoJSON();
var features_82_Lunedi_08_00_11_35shp_62 = format_82_Lunedi_08_00_11_35shp_62.readFeatures(json_82_Lunedi_08_00_11_35shp_62, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_82_Lunedi_08_00_11_35shp_62 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_82_Lunedi_08_00_11_35shp_62.addFeatures(features_82_Lunedi_08_00_11_35shp_62);
var lyr_82_Lunedi_08_00_11_35shp_62 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_82_Lunedi_08_00_11_35shp_62, 
                style: style_82_Lunedi_08_00_11_35shp_62,
                popuplayertitle: '82_Lunedi_08_00_11_35.shp',
                interactive: true,
    title: '82_Lunedi_08_00_11_35.shp<br />\
    <img src="styles/legend/82_Lunedi_08_00_11_35shp_62_0.png" /> 1<br />\
    <img src="styles/legend/82_Lunedi_08_00_11_35shp_62_1.png" /> 2<br />\
    <img src="styles/legend/82_Lunedi_08_00_11_35shp_62_2.png" /> 3<br />\
    <img src="styles/legend/82_Lunedi_08_00_11_35shp_62_3.png" /> 4<br />\
    <img src="styles/legend/82_Lunedi_08_00_11_35shp_62_4.png" /> 5<br />\
    <img src="styles/legend/82_Lunedi_08_00_11_35shp_62_5.png" /> 6<br />\
    <img src="styles/legend/82_Lunedi_08_00_11_35shp_62_6.png" /> 7<br />' });
var format_477_Lunedi_08_00_11_35shp_63 = new ol.format.GeoJSON();
var features_477_Lunedi_08_00_11_35shp_63 = format_477_Lunedi_08_00_11_35shp_63.readFeatures(json_477_Lunedi_08_00_11_35shp_63, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_477_Lunedi_08_00_11_35shp_63 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_477_Lunedi_08_00_11_35shp_63.addFeatures(features_477_Lunedi_08_00_11_35shp_63);
var lyr_477_Lunedi_08_00_11_35shp_63 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_477_Lunedi_08_00_11_35shp_63, 
                style: style_477_Lunedi_08_00_11_35shp_63,
                popuplayertitle: '477_Lunedi_08_00_11_35.shp',
                interactive: true,
    title: '477_Lunedi_08_00_11_35.shp<br />\
    <img src="styles/legend/477_Lunedi_08_00_11_35shp_63_0.png" /> 1<br />\
    <img src="styles/legend/477_Lunedi_08_00_11_35shp_63_1.png" /> 2<br />' });
var format_476_Lunedi_08_00_11_35shp_64 = new ol.format.GeoJSON();
var features_476_Lunedi_08_00_11_35shp_64 = format_476_Lunedi_08_00_11_35shp_64.readFeatures(json_476_Lunedi_08_00_11_35shp_64, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_476_Lunedi_08_00_11_35shp_64 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_476_Lunedi_08_00_11_35shp_64.addFeatures(features_476_Lunedi_08_00_11_35shp_64);
var lyr_476_Lunedi_08_00_11_35shp_64 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_476_Lunedi_08_00_11_35shp_64, 
                style: style_476_Lunedi_08_00_11_35shp_64,
                popuplayertitle: '476_Lunedi_08_00_11_35.shp',
                interactive: true,
    title: '476_Lunedi_08_00_11_35.shp<br />\
    <img src="styles/legend/476_Lunedi_08_00_11_35shp_64_0.png" /> 1<br />\
    <img src="styles/legend/476_Lunedi_08_00_11_35shp_64_1.png" /> 2<br />\
    <img src="styles/legend/476_Lunedi_08_00_11_35shp_64_2.png" /> 3<br />\
    <img src="styles/legend/476_Lunedi_08_00_11_35shp_64_3.png" /> 4<br />\
    <img src="styles/legend/476_Lunedi_08_00_11_35shp_64_4.png" /> 5<br />' });
var format_472_Lunedi_08_00_11_35shp_65 = new ol.format.GeoJSON();
var features_472_Lunedi_08_00_11_35shp_65 = format_472_Lunedi_08_00_11_35shp_65.readFeatures(json_472_Lunedi_08_00_11_35shp_65, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_472_Lunedi_08_00_11_35shp_65 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_472_Lunedi_08_00_11_35shp_65.addFeatures(features_472_Lunedi_08_00_11_35shp_65);
var lyr_472_Lunedi_08_00_11_35shp_65 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_472_Lunedi_08_00_11_35shp_65, 
                style: style_472_Lunedi_08_00_11_35shp_65,
                popuplayertitle: '472_Lunedi_08_00_11_35.shp',
                interactive: true,
    title: '472_Lunedi_08_00_11_35.shp<br />\
    <img src="styles/legend/472_Lunedi_08_00_11_35shp_65_0.png" /> 1<br />\
    <img src="styles/legend/472_Lunedi_08_00_11_35shp_65_1.png" /> 2<br />\
    <img src="styles/legend/472_Lunedi_08_00_11_35shp_65_2.png" /> 3<br />' });
var format_470_Lunedi_08_00_11_35shp_66 = new ol.format.GeoJSON();
var features_470_Lunedi_08_00_11_35shp_66 = format_470_Lunedi_08_00_11_35shp_66.readFeatures(json_470_Lunedi_08_00_11_35shp_66, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_470_Lunedi_08_00_11_35shp_66 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_470_Lunedi_08_00_11_35shp_66.addFeatures(features_470_Lunedi_08_00_11_35shp_66);
var lyr_470_Lunedi_08_00_11_35shp_66 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_470_Lunedi_08_00_11_35shp_66, 
                style: style_470_Lunedi_08_00_11_35shp_66,
                popuplayertitle: '470_Lunedi_08_00_11_35.shp',
                interactive: true,
    title: '470_Lunedi_08_00_11_35.shp<br />\
    <img src="styles/legend/470_Lunedi_08_00_11_35shp_66_0.png" /> 1<br />\
    <img src="styles/legend/470_Lunedi_08_00_11_35shp_66_1.png" /> 2<br />\
    <img src="styles/legend/470_Lunedi_08_00_11_35shp_66_2.png" /> 3<br />\
    <img src="styles/legend/470_Lunedi_08_00_11_35shp_66_3.png" /> 4<br />\
    <img src="styles/legend/470_Lunedi_08_00_11_35shp_66_4.png" /> 5<br />\
    <img src="styles/legend/470_Lunedi_08_00_11_35shp_66_5.png" /> 6<br />\
    <img src="styles/legend/470_Lunedi_08_00_11_35shp_66_6.png" /> 7<br />\
    <img src="styles/legend/470_Lunedi_08_00_11_35shp_66_7.png" /> 8<br />\
    <img src="styles/legend/470_Lunedi_08_00_11_35shp_66_8.png" /> 9<br />' });
var format_361_Lunedi_08_00_11_35shp_67 = new ol.format.GeoJSON();
var features_361_Lunedi_08_00_11_35shp_67 = format_361_Lunedi_08_00_11_35shp_67.readFeatures(json_361_Lunedi_08_00_11_35shp_67, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_361_Lunedi_08_00_11_35shp_67 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_361_Lunedi_08_00_11_35shp_67.addFeatures(features_361_Lunedi_08_00_11_35shp_67);
var lyr_361_Lunedi_08_00_11_35shp_67 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_361_Lunedi_08_00_11_35shp_67, 
                style: style_361_Lunedi_08_00_11_35shp_67,
                popuplayertitle: '361_Lunedi_08_00_11_35.shp',
                interactive: true,
    title: '361_Lunedi_08_00_11_35.shp<br />\
    <img src="styles/legend/361_Lunedi_08_00_11_35shp_67_0.png" /> 1<br />' });
var format_350_Lunedi_08_00_11_35shp_68 = new ol.format.GeoJSON();
var features_350_Lunedi_08_00_11_35shp_68 = format_350_Lunedi_08_00_11_35shp_68.readFeatures(json_350_Lunedi_08_00_11_35shp_68, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_350_Lunedi_08_00_11_35shp_68 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_350_Lunedi_08_00_11_35shp_68.addFeatures(features_350_Lunedi_08_00_11_35shp_68);
var lyr_350_Lunedi_08_00_11_35shp_68 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_350_Lunedi_08_00_11_35shp_68, 
                style: style_350_Lunedi_08_00_11_35shp_68,
                popuplayertitle: '350_Lunedi_08_00_11_35.shp',
                interactive: true,
    title: '350_Lunedi_08_00_11_35.shp<br />\
    <img src="styles/legend/350_Lunedi_08_00_11_35shp_68_0.png" /> 1<br />\
    <img src="styles/legend/350_Lunedi_08_00_11_35shp_68_1.png" /> 2<br />\
    <img src="styles/legend/350_Lunedi_08_00_11_35shp_68_2.png" /> 3<br />' });
var format_35_Lunedi_08_00_11_35shp_69 = new ol.format.GeoJSON();
var features_35_Lunedi_08_00_11_35shp_69 = format_35_Lunedi_08_00_11_35shp_69.readFeatures(json_35_Lunedi_08_00_11_35shp_69, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_35_Lunedi_08_00_11_35shp_69 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_35_Lunedi_08_00_11_35shp_69.addFeatures(features_35_Lunedi_08_00_11_35shp_69);
var lyr_35_Lunedi_08_00_11_35shp_69 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_35_Lunedi_08_00_11_35shp_69, 
                style: style_35_Lunedi_08_00_11_35shp_69,
                popuplayertitle: '35_Lunedi_08_00_11_35.shp',
                interactive: true,
    title: '35_Lunedi_08_00_11_35.shp<br />\
    <img src="styles/legend/35_Lunedi_08_00_11_35shp_69_0.png" /> 1<br />\
    <img src="styles/legend/35_Lunedi_08_00_11_35shp_69_1.png" /> 2<br />\
    <img src="styles/legend/35_Lunedi_08_00_11_35shp_69_2.png" /> 3<br />\
    <img src="styles/legend/35_Lunedi_08_00_11_35shp_69_3.png" /> 4<br />\
    <img src="styles/legend/35_Lunedi_08_00_11_35shp_69_4.png" /> 5<br />\
    <img src="styles/legend/35_Lunedi_08_00_11_35shp_69_5.png" /> 6<br />\
    <img src="styles/legend/35_Lunedi_08_00_11_35shp_69_6.png" /> 7<br />\
    <img src="styles/legend/35_Lunedi_08_00_11_35shp_69_7.png" /> 8<br />\
    <img src="styles/legend/35_Lunedi_08_00_11_35shp_69_8.png" /> 9<br />\
    <img src="styles/legend/35_Lunedi_08_00_11_35shp_69_9.png" /> 10<br />' });
var format_28_Lunedi_08_00_11_35shp_70 = new ol.format.GeoJSON();
var features_28_Lunedi_08_00_11_35shp_70 = format_28_Lunedi_08_00_11_35shp_70.readFeatures(json_28_Lunedi_08_00_11_35shp_70, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_28_Lunedi_08_00_11_35shp_70 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_28_Lunedi_08_00_11_35shp_70.addFeatures(features_28_Lunedi_08_00_11_35shp_70);
var lyr_28_Lunedi_08_00_11_35shp_70 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_28_Lunedi_08_00_11_35shp_70, 
                style: style_28_Lunedi_08_00_11_35shp_70,
                popuplayertitle: '28_Lunedi_08_00_11_35.shp',
                interactive: true,
    title: '28_Lunedi_08_00_11_35.shp<br />\
    <img src="styles/legend/28_Lunedi_08_00_11_35shp_70_0.png" /> 1<br />\
    <img src="styles/legend/28_Lunedi_08_00_11_35shp_70_1.png" /> 2<br />\
    <img src="styles/legend/28_Lunedi_08_00_11_35shp_70_2.png" /> 3<br />\
    <img src="styles/legend/28_Lunedi_08_00_11_35shp_70_3.png" /> 4<br />' });
var format_202_Lunedi_08_00_11_35shp_71 = new ol.format.GeoJSON();
var features_202_Lunedi_08_00_11_35shp_71 = format_202_Lunedi_08_00_11_35shp_71.readFeatures(json_202_Lunedi_08_00_11_35shp_71, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_202_Lunedi_08_00_11_35shp_71 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_202_Lunedi_08_00_11_35shp_71.addFeatures(features_202_Lunedi_08_00_11_35shp_71);
var lyr_202_Lunedi_08_00_11_35shp_71 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_202_Lunedi_08_00_11_35shp_71, 
                style: style_202_Lunedi_08_00_11_35shp_71,
                popuplayertitle: '202_Lunedi_08_00_11_35.shp',
                interactive: true,
    title: '202_Lunedi_08_00_11_35.shp<br />\
    <img src="styles/legend/202_Lunedi_08_00_11_35shp_71_0.png" /> 1<br />\
    <img src="styles/legend/202_Lunedi_08_00_11_35shp_71_1.png" /> 2<br />\
    <img src="styles/legend/202_Lunedi_08_00_11_35shp_71_2.png" /> 3<br />\
    <img src="styles/legend/202_Lunedi_08_00_11_35shp_71_3.png" /> 4<br />' });
var format_201_Lunedi_08_00_11_35shp_72 = new ol.format.GeoJSON();
var features_201_Lunedi_08_00_11_35shp_72 = format_201_Lunedi_08_00_11_35shp_72.readFeatures(json_201_Lunedi_08_00_11_35shp_72, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_201_Lunedi_08_00_11_35shp_72 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_201_Lunedi_08_00_11_35shp_72.addFeatures(features_201_Lunedi_08_00_11_35shp_72);
var lyr_201_Lunedi_08_00_11_35shp_72 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_201_Lunedi_08_00_11_35shp_72, 
                style: style_201_Lunedi_08_00_11_35shp_72,
                popuplayertitle: '201_Lunedi_08_00_11_35.shp',
                interactive: true,
    title: '201_Lunedi_08_00_11_35.shp<br />\
    <img src="styles/legend/201_Lunedi_08_00_11_35shp_72_0.png" /> 1<br />\
    <img src="styles/legend/201_Lunedi_08_00_11_35shp_72_1.png" /> 2<br />\
    <img src="styles/legend/201_Lunedi_08_00_11_35shp_72_2.png" /> 3<br />\
    <img src="styles/legend/201_Lunedi_08_00_11_35shp_72_3.png" /> 4<br />\
    <img src="styles/legend/201_Lunedi_08_00_11_35shp_72_4.png" /> 5<br />\
    <img src="styles/legend/201_Lunedi_08_00_11_35shp_72_5.png" /> 6<br />\
    <img src="styles/legend/201_Lunedi_08_00_11_35shp_72_6.png" /> 7<br />\
    <img src="styles/legend/201_Lunedi_08_00_11_35shp_72_7.png" /> 8<br />\
    <img src="styles/legend/201_Lunedi_08_00_11_35shp_72_8.png" /> 9<br />' });
var group_Lunedi = new ol.layer.Group({
                                layers: [lyr_85_Lunedi_08_00_11_35shp_61,lyr_82_Lunedi_08_00_11_35shp_62,lyr_477_Lunedi_08_00_11_35shp_63,lyr_476_Lunedi_08_00_11_35shp_64,lyr_472_Lunedi_08_00_11_35shp_65,lyr_470_Lunedi_08_00_11_35shp_66,lyr_361_Lunedi_08_00_11_35shp_67,lyr_350_Lunedi_08_00_11_35shp_68,lyr_35_Lunedi_08_00_11_35shp_69,lyr_28_Lunedi_08_00_11_35shp_70,lyr_202_Lunedi_08_00_11_35shp_71,lyr_201_Lunedi_08_00_11_35shp_72,],
                                fold: 'close',
                                title: 'Lunedi'});
var group_Martedi = new ol.layer.Group({
                                layers: [lyr_85_Martedi_08_00_11_35shp_49,lyr_82_Martedi_08_00_11_35shp_50,lyr_477_Martedi_08_00_11_35shp_51,lyr_476_Martedi_08_00_11_35shp_52,lyr_472_Martedi_08_00_11_35shp_53,lyr_470_Martedi_08_00_11_35shp_54,lyr_361_Martedi_08_00_11_35shp_55,lyr_350_Martedi_08_00_11_35shp_56,lyr_35_Martedi_08_00_11_35shp_57,lyr_28_Martedi_08_00_11_35shp_58,lyr_202_Martedi_08_00_11_35shp_59,lyr_201_Martedi_08_00_11_35shp_60,],
                                fold: 'close',
                                title: 'Martedi'});
var group_Mercoledi = new ol.layer.Group({
                                layers: [lyr_85_Mercoledi_08_00_11_35shp_37,lyr_82_Mercoledi_08_00_11_35shp_38,lyr_477_Mercoledi_08_00_11_35shp_39,lyr_476_Mercoledi_08_00_11_35shp_40,lyr_472_Mercoledi_08_00_11_35shp_41,lyr_470_Mercoledi_08_00_11_35shp_42,lyr_361_Mercoledi_08_00_11_35shp_43,lyr_350_Mercoledi_05_30_08_00shp_44,lyr_35_Mercoledi_08_00_11_35shp_45,lyr_28_Mercoledi_08_00_11_35shp_46,lyr_202_Mercoledi_08_00_11_35shp_47,lyr_201_Mercoledi_08_00_11_35shp_48,],
                                fold: 'close',
                                title: 'Mercoledi'});
var group_Giovedi = new ol.layer.Group({
                                layers: [lyr_85_Giovedi_08_00_11_35shp_25,lyr_82_Giovedi_08_00_11_35shp_26,lyr_477_Giovedi_08_00_11_35shp_27,lyr_476_Giovedi_08_00_11_35shp_28,lyr_472_Giovedi_08_00_11_35shp_29,lyr_470_Giovedi_08_00_11_35shp_30,lyr_361_Giovedi_08_00_11_35shp_31,lyr_350_Giovedi_08_00_11_35shp_32,lyr_35_Giovedi_08_00_11_35shp_33,lyr_28_Giovedi_08_00_11_35shp_34,lyr_202_Giovedi_08_00_11_35shp_35,lyr_201_Giovedi_08_00_11_35shp_36,],
                                fold: 'close',
                                title: 'Giovedi'});
var group_Venerdi = new ol.layer.Group({
                                layers: [lyr_85_Venerdi_08_00_11_35shp_13,lyr_82_Venerdi_08_00_11_35shp_14,lyr_477_Venerdi_08_00_11_35shp_15,lyr_476_Venerdi_08_00_11_35shp_16,lyr_472_Venerdi_08_00_11_35shp_17,lyr_470_Venerdi_08_00_11_35shp_18,lyr_361_Venerdi_08_00_11_35shp_19,lyr_350_Venerdi_08_00_11_35shp_20,lyr_35_Venerdi_08_00_11_35shp_21,lyr_28_Venerdi_08_00_11_35shp_22,lyr_202_Venerdi_08_00_11_35shp_23,lyr_201_Venerdi_08_00_11_35shp_24,],
                                fold: 'close',
                                title: 'Venerdi'});
var group_Sabato = new ol.layer.Group({
                                layers: [lyr_85_Sabato_09_00_11_35shp_1,lyr_82_Sabato_09_00_11_35shp_2,lyr_477_Sabato_09_00_11_35shp_3,lyr_476_Sabato_09_00_11_35shp_4,lyr_472_Sabato_09_00_11_35shp_5,lyr_470_Sabato_09_00_11_35shp_6,lyr_361_Sabato_06_00_09_00shp_7,lyr_350_Sabato_09_00_11_35shp_8,lyr_35_Sabato_09_00_11_35shp_9,lyr_28_Sabato_09_00_11_35shp_10,lyr_202_Sabato_09_00_11_35shp_11,lyr_201_Sabato_09_00_11_35shp_12,],
                                fold: 'close',
                                title: 'Sabato'});

lyr_Mappa_web_Fra_0.setVisible(true);lyr_85_Sabato_09_00_11_35shp_1.setVisible(true);lyr_82_Sabato_09_00_11_35shp_2.setVisible(true);lyr_477_Sabato_09_00_11_35shp_3.setVisible(true);lyr_476_Sabato_09_00_11_35shp_4.setVisible(true);lyr_472_Sabato_09_00_11_35shp_5.setVisible(true);lyr_470_Sabato_09_00_11_35shp_6.setVisible(true);lyr_361_Sabato_06_00_09_00shp_7.setVisible(true);lyr_350_Sabato_09_00_11_35shp_8.setVisible(true);lyr_35_Sabato_09_00_11_35shp_9.setVisible(true);lyr_28_Sabato_09_00_11_35shp_10.setVisible(true);lyr_202_Sabato_09_00_11_35shp_11.setVisible(true);lyr_201_Sabato_09_00_11_35shp_12.setVisible(true);lyr_85_Venerdi_08_00_11_35shp_13.setVisible(true);lyr_82_Venerdi_08_00_11_35shp_14.setVisible(true);lyr_477_Venerdi_08_00_11_35shp_15.setVisible(true);lyr_476_Venerdi_08_00_11_35shp_16.setVisible(true);lyr_472_Venerdi_08_00_11_35shp_17.setVisible(true);lyr_470_Venerdi_08_00_11_35shp_18.setVisible(true);lyr_361_Venerdi_08_00_11_35shp_19.setVisible(true);lyr_350_Venerdi_08_00_11_35shp_20.setVisible(true);lyr_35_Venerdi_08_00_11_35shp_21.setVisible(true);lyr_28_Venerdi_08_00_11_35shp_22.setVisible(true);lyr_202_Venerdi_08_00_11_35shp_23.setVisible(true);lyr_201_Venerdi_08_00_11_35shp_24.setVisible(true);lyr_85_Giovedi_08_00_11_35shp_25.setVisible(true);lyr_82_Giovedi_08_00_11_35shp_26.setVisible(true);lyr_477_Giovedi_08_00_11_35shp_27.setVisible(true);lyr_476_Giovedi_08_00_11_35shp_28.setVisible(true);lyr_472_Giovedi_08_00_11_35shp_29.setVisible(true);lyr_470_Giovedi_08_00_11_35shp_30.setVisible(true);lyr_361_Giovedi_08_00_11_35shp_31.setVisible(true);lyr_350_Giovedi_08_00_11_35shp_32.setVisible(true);lyr_35_Giovedi_08_00_11_35shp_33.setVisible(true);lyr_28_Giovedi_08_00_11_35shp_34.setVisible(true);lyr_202_Giovedi_08_00_11_35shp_35.setVisible(true);lyr_201_Giovedi_08_00_11_35shp_36.setVisible(true);lyr_85_Mercoledi_08_00_11_35shp_37.setVisible(true);lyr_82_Mercoledi_08_00_11_35shp_38.setVisible(true);lyr_477_Mercoledi_08_00_11_35shp_39.setVisible(true);lyr_476_Mercoledi_08_00_11_35shp_40.setVisible(true);lyr_472_Mercoledi_08_00_11_35shp_41.setVisible(true);lyr_470_Mercoledi_08_00_11_35shp_42.setVisible(true);lyr_361_Mercoledi_08_00_11_35shp_43.setVisible(true);lyr_350_Mercoledi_05_30_08_00shp_44.setVisible(true);lyr_35_Mercoledi_08_00_11_35shp_45.setVisible(true);lyr_28_Mercoledi_08_00_11_35shp_46.setVisible(true);lyr_202_Mercoledi_08_00_11_35shp_47.setVisible(true);lyr_201_Mercoledi_08_00_11_35shp_48.setVisible(true);lyr_85_Martedi_08_00_11_35shp_49.setVisible(true);lyr_82_Martedi_08_00_11_35shp_50.setVisible(true);lyr_477_Martedi_08_00_11_35shp_51.setVisible(true);lyr_476_Martedi_08_00_11_35shp_52.setVisible(true);lyr_472_Martedi_08_00_11_35shp_53.setVisible(true);lyr_470_Martedi_08_00_11_35shp_54.setVisible(true);lyr_361_Martedi_08_00_11_35shp_55.setVisible(true);lyr_350_Martedi_08_00_11_35shp_56.setVisible(true);lyr_35_Martedi_08_00_11_35shp_57.setVisible(true);lyr_28_Martedi_08_00_11_35shp_58.setVisible(true);lyr_202_Martedi_08_00_11_35shp_59.setVisible(true);lyr_201_Martedi_08_00_11_35shp_60.setVisible(true);lyr_85_Lunedi_08_00_11_35shp_61.setVisible(true);lyr_82_Lunedi_08_00_11_35shp_62.setVisible(true);lyr_477_Lunedi_08_00_11_35shp_63.setVisible(true);lyr_476_Lunedi_08_00_11_35shp_64.setVisible(true);lyr_472_Lunedi_08_00_11_35shp_65.setVisible(true);lyr_470_Lunedi_08_00_11_35shp_66.setVisible(true);lyr_361_Lunedi_08_00_11_35shp_67.setVisible(true);lyr_350_Lunedi_08_00_11_35shp_68.setVisible(true);lyr_35_Lunedi_08_00_11_35shp_69.setVisible(true);lyr_28_Lunedi_08_00_11_35shp_70.setVisible(true);lyr_202_Lunedi_08_00_11_35shp_71.setVisible(true);lyr_201_Lunedi_08_00_11_35shp_72.setVisible(true);
var layersList = [lyr_Mappa_web_Fra_0,group_Sabato,group_Venerdi,group_Giovedi,group_Mercoledi,group_Martedi,group_Lunedi];
lyr_85_Sabato_09_00_11_35shp_1.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'Giorno': 'Giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'loc_ref': 'loc_ref', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_82_Sabato_09_00_11_35shp_2.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'Giorno': 'Giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'loc_ref': 'loc_ref', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_477_Sabato_09_00_11_35shp_3.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'Giorno': 'Giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'loc_ref': 'loc_ref', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_476_Sabato_09_00_11_35shp_4.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'Giorno': 'Giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'loc_ref': 'loc_ref', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_472_Sabato_09_00_11_35shp_5.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'Giorno': 'Giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'loc_ref': 'loc_ref', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_470_Sabato_09_00_11_35shp_6.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'Giorno': 'Giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'loc_ref': 'loc_ref', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_361_Sabato_06_00_09_00shp_7.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'Giorno': 'Giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'loc_ref': 'loc_ref', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_350_Sabato_09_00_11_35shp_8.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'Giorno': 'Giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'loc_ref': 'loc_ref', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_35_Sabato_09_00_11_35shp_9.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'Giorno': 'Giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'loc_ref': 'loc_ref', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_28_Sabato_09_00_11_35shp_10.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'Giorno': 'Giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'loc_ref': 'loc_ref', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_202_Sabato_09_00_11_35shp_11.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'Giorno': 'Giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'loc_ref': 'loc_ref', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_201_Sabato_09_00_11_35shp_12.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'Giorno': 'Giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'loc_ref': 'loc_ref', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_85_Venerdi_08_00_11_35shp_13.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'Giorno': 'Giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'loc_ref': 'loc_ref', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_82_Venerdi_08_00_11_35shp_14.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'Giorno': 'Giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'loc_ref': 'loc_ref', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_477_Venerdi_08_00_11_35shp_15.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'Giorno': 'Giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'loc_ref': 'loc_ref', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_476_Venerdi_08_00_11_35shp_16.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'Giorno': 'Giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'loc_ref': 'loc_ref', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_472_Venerdi_08_00_11_35shp_17.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'Giorno': 'Giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'loc_ref': 'loc_ref', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_470_Venerdi_08_00_11_35shp_18.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'Giorno': 'Giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'loc_ref': 'loc_ref', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_361_Venerdi_08_00_11_35shp_19.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'Giorno': 'Giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'loc_ref': 'loc_ref', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_350_Venerdi_08_00_11_35shp_20.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'Giorno': 'Giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'loc_ref': 'loc_ref', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_35_Venerdi_08_00_11_35shp_21.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'Giorno': 'Giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'loc_ref': 'loc_ref', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_28_Venerdi_08_00_11_35shp_22.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'Giorno': 'Giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'loc_ref': 'loc_ref', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_202_Venerdi_08_00_11_35shp_23.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'Giorno': 'Giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'loc_ref': 'loc_ref', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_201_Venerdi_08_00_11_35shp_24.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'Giorno': 'Giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'loc_ref': 'loc_ref', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_85_Giovedi_08_00_11_35shp_25.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'Giorno': 'Giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'loc_ref': 'loc_ref', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_82_Giovedi_08_00_11_35shp_26.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'Giorno': 'Giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'loc_ref': 'loc_ref', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_477_Giovedi_08_00_11_35shp_27.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'Giorno': 'Giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'loc_ref': 'loc_ref', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_476_Giovedi_08_00_11_35shp_28.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'Giorno': 'Giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'loc_ref': 'loc_ref', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_472_Giovedi_08_00_11_35shp_29.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'Giorno': 'Giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'loc_ref': 'loc_ref', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_470_Giovedi_08_00_11_35shp_30.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'Giorno': 'Giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'loc_ref': 'loc_ref', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_361_Giovedi_08_00_11_35shp_31.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'Giorno': 'Giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'loc_ref': 'loc_ref', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_350_Giovedi_08_00_11_35shp_32.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'Giorno': 'Giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'loc_ref': 'loc_ref', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_35_Giovedi_08_00_11_35shp_33.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'Giorno': 'Giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'loc_ref': 'loc_ref', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_28_Giovedi_08_00_11_35shp_34.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'Giorno': 'Giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'loc_ref': 'loc_ref', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_202_Giovedi_08_00_11_35shp_35.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'Giorno': 'Giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'loc_ref': 'loc_ref', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_201_Giovedi_08_00_11_35shp_36.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'Giorno': 'Giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'loc_ref': 'loc_ref', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_85_Mercoledi_08_00_11_35shp_37.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'Giorno': 'Giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'loc_ref': 'loc_ref', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_82_Mercoledi_08_00_11_35shp_38.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'Giorno': 'Giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'loc_ref': 'loc_ref', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_477_Mercoledi_08_00_11_35shp_39.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'Giorno': 'Giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'loc_ref': 'loc_ref', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_476_Mercoledi_08_00_11_35shp_40.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'Giorno': 'Giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'loc_ref': 'loc_ref', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_472_Mercoledi_08_00_11_35shp_41.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'Giorno': 'Giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'loc_ref': 'loc_ref', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_470_Mercoledi_08_00_11_35shp_42.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'Giorno': 'Giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'loc_ref': 'loc_ref', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_361_Mercoledi_08_00_11_35shp_43.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'Giorno': 'Giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'loc_ref': 'loc_ref', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_350_Mercoledi_05_30_08_00shp_44.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'Giorno': 'Giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'loc_ref': 'loc_ref', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_35_Mercoledi_08_00_11_35shp_45.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'Giorno': 'Giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'loc_ref': 'loc_ref', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_28_Mercoledi_08_00_11_35shp_46.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'Giorno': 'Giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'loc_ref': 'loc_ref', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_202_Mercoledi_08_00_11_35shp_47.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'Giorno': 'Giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'loc_ref': 'loc_ref', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_201_Mercoledi_08_00_11_35shp_48.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'Giorno': 'Giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'loc_ref': 'loc_ref', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_85_Martedi_08_00_11_35shp_49.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'Giorno': 'Giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'loc_ref': 'loc_ref', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_82_Martedi_08_00_11_35shp_50.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'Giorno': 'Giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'loc_ref': 'loc_ref', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_477_Martedi_08_00_11_35shp_51.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'Giorno': 'Giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'loc_ref': 'loc_ref', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_476_Martedi_08_00_11_35shp_52.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'Giorno': 'Giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'loc_ref': 'loc_ref', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_472_Martedi_08_00_11_35shp_53.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'Giorno': 'Giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'loc_ref': 'loc_ref', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_470_Martedi_08_00_11_35shp_54.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'Giorno': 'Giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'loc_ref': 'loc_ref', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_361_Martedi_08_00_11_35shp_55.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'Giorno': 'Giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'loc_ref': 'loc_ref', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_350_Martedi_08_00_11_35shp_56.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'Giorno': 'Giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'loc_ref': 'loc_ref', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_35_Martedi_08_00_11_35shp_57.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'Giorno': 'Giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'loc_ref': 'loc_ref', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_28_Martedi_08_00_11_35shp_58.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'Giorno': 'Giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'loc_ref': 'loc_ref', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_202_Martedi_08_00_11_35shp_59.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'Giorno': 'Giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'loc_ref': 'loc_ref', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_201_Martedi_08_00_11_35shp_60.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'Giorno': 'Giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'loc_ref': 'loc_ref', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_85_Lunedi_08_00_11_35shp_61.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'Giorno': 'Giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'loc_ref': 'loc_ref', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_82_Lunedi_08_00_11_35shp_62.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'Giorno': 'Giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'loc_ref': 'loc_ref', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_477_Lunedi_08_00_11_35shp_63.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'Giorno': 'Giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'loc_ref': 'loc_ref', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_476_Lunedi_08_00_11_35shp_64.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'Giorno': 'Giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'loc_ref': 'loc_ref', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_472_Lunedi_08_00_11_35shp_65.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'Giorno': 'Giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'loc_ref': 'loc_ref', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_470_Lunedi_08_00_11_35shp_66.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'Giorno': 'Giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'loc_ref': 'loc_ref', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_361_Lunedi_08_00_11_35shp_67.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'Giorno': 'Giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'loc_ref': 'loc_ref', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_350_Lunedi_08_00_11_35shp_68.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'Giorno': 'Giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'loc_ref': 'loc_ref', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_35_Lunedi_08_00_11_35shp_69.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'Giorno': 'Giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'loc_ref': 'loc_ref', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_28_Lunedi_08_00_11_35shp_70.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'Giorno': 'Giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'loc_ref': 'loc_ref', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_202_Lunedi_08_00_11_35shp_71.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'Giorno': 'Giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'loc_ref': 'loc_ref', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_201_Lunedi_08_00_11_35shp_72.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'Giorno': 'Giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'loc_ref': 'loc_ref', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_85_Sabato_09_00_11_35shp_1.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'Giorno': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'loc_ref': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_82_Sabato_09_00_11_35shp_2.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'Giorno': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'loc_ref': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_477_Sabato_09_00_11_35shp_3.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'Giorno': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'loc_ref': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_476_Sabato_09_00_11_35shp_4.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'Giorno': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'loc_ref': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_472_Sabato_09_00_11_35shp_5.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'Giorno': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'loc_ref': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_470_Sabato_09_00_11_35shp_6.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'Giorno': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'loc_ref': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_361_Sabato_06_00_09_00shp_7.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'Giorno': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'loc_ref': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_350_Sabato_09_00_11_35shp_8.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'Giorno': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'loc_ref': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_35_Sabato_09_00_11_35shp_9.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'Giorno': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'loc_ref': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_28_Sabato_09_00_11_35shp_10.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'Giorno': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'loc_ref': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_202_Sabato_09_00_11_35shp_11.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'Giorno': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'loc_ref': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_201_Sabato_09_00_11_35shp_12.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'Giorno': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'loc_ref': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_85_Venerdi_08_00_11_35shp_13.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'Giorno': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'loc_ref': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_82_Venerdi_08_00_11_35shp_14.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'Giorno': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'loc_ref': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_477_Venerdi_08_00_11_35shp_15.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'Giorno': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'loc_ref': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_476_Venerdi_08_00_11_35shp_16.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'Giorno': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'loc_ref': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_472_Venerdi_08_00_11_35shp_17.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'Giorno': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'loc_ref': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_470_Venerdi_08_00_11_35shp_18.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'Giorno': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'loc_ref': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_361_Venerdi_08_00_11_35shp_19.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'Giorno': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'loc_ref': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_350_Venerdi_08_00_11_35shp_20.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'Giorno': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'loc_ref': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_35_Venerdi_08_00_11_35shp_21.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'Giorno': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'loc_ref': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_28_Venerdi_08_00_11_35shp_22.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'Giorno': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'loc_ref': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_202_Venerdi_08_00_11_35shp_23.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'Giorno': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'loc_ref': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_201_Venerdi_08_00_11_35shp_24.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'Giorno': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'loc_ref': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_85_Giovedi_08_00_11_35shp_25.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'Giorno': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'loc_ref': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_82_Giovedi_08_00_11_35shp_26.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'Giorno': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'loc_ref': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_477_Giovedi_08_00_11_35shp_27.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'Giorno': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'loc_ref': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_476_Giovedi_08_00_11_35shp_28.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'Giorno': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'loc_ref': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_472_Giovedi_08_00_11_35shp_29.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'Giorno': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'loc_ref': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_470_Giovedi_08_00_11_35shp_30.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'Giorno': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'loc_ref': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_361_Giovedi_08_00_11_35shp_31.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'Giorno': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'loc_ref': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_350_Giovedi_08_00_11_35shp_32.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'Giorno': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'loc_ref': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_35_Giovedi_08_00_11_35shp_33.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'Giorno': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'loc_ref': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_28_Giovedi_08_00_11_35shp_34.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'Giorno': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'loc_ref': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_202_Giovedi_08_00_11_35shp_35.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'Giorno': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'loc_ref': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_201_Giovedi_08_00_11_35shp_36.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'Giorno': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'loc_ref': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_85_Mercoledi_08_00_11_35shp_37.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'Giorno': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'loc_ref': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_82_Mercoledi_08_00_11_35shp_38.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'Giorno': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'loc_ref': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_477_Mercoledi_08_00_11_35shp_39.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'Giorno': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'loc_ref': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_476_Mercoledi_08_00_11_35shp_40.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'Giorno': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'loc_ref': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_472_Mercoledi_08_00_11_35shp_41.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'Giorno': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'loc_ref': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_470_Mercoledi_08_00_11_35shp_42.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'Giorno': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'loc_ref': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_361_Mercoledi_08_00_11_35shp_43.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'Giorno': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'loc_ref': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_350_Mercoledi_05_30_08_00shp_44.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'Giorno': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'loc_ref': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_35_Mercoledi_08_00_11_35shp_45.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'Giorno': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'loc_ref': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_28_Mercoledi_08_00_11_35shp_46.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'Giorno': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'loc_ref': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_202_Mercoledi_08_00_11_35shp_47.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'Giorno': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'loc_ref': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_201_Mercoledi_08_00_11_35shp_48.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'Giorno': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'loc_ref': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_85_Martedi_08_00_11_35shp_49.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'Giorno': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'loc_ref': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_82_Martedi_08_00_11_35shp_50.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'Giorno': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'loc_ref': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_477_Martedi_08_00_11_35shp_51.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'Giorno': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'loc_ref': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_476_Martedi_08_00_11_35shp_52.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'Giorno': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'loc_ref': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_472_Martedi_08_00_11_35shp_53.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'Giorno': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'loc_ref': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_470_Martedi_08_00_11_35shp_54.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'Giorno': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'loc_ref': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_361_Martedi_08_00_11_35shp_55.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'Giorno': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'loc_ref': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_350_Martedi_08_00_11_35shp_56.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'Giorno': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'loc_ref': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_35_Martedi_08_00_11_35shp_57.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'Giorno': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'loc_ref': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_28_Martedi_08_00_11_35shp_58.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'Giorno': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'loc_ref': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_202_Martedi_08_00_11_35shp_59.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'Giorno': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'loc_ref': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_201_Martedi_08_00_11_35shp_60.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'Giorno': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'loc_ref': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_85_Lunedi_08_00_11_35shp_61.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'Giorno': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'loc_ref': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_82_Lunedi_08_00_11_35shp_62.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'Giorno': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'loc_ref': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_477_Lunedi_08_00_11_35shp_63.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'Giorno': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'loc_ref': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_476_Lunedi_08_00_11_35shp_64.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'Giorno': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'loc_ref': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_472_Lunedi_08_00_11_35shp_65.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'Giorno': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'loc_ref': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_470_Lunedi_08_00_11_35shp_66.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'Giorno': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'loc_ref': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_361_Lunedi_08_00_11_35shp_67.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'Giorno': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'loc_ref': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_350_Lunedi_08_00_11_35shp_68.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'Giorno': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'loc_ref': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_35_Lunedi_08_00_11_35shp_69.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'Giorno': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'loc_ref': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_28_Lunedi_08_00_11_35shp_70.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'Giorno': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'loc_ref': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_202_Lunedi_08_00_11_35shp_71.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'Giorno': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'loc_ref': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_201_Lunedi_08_00_11_35shp_72.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'Giorno': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'loc_ref': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_85_Sabato_09_00_11_35shp_1.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'Giorno': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'loc_ref': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_82_Sabato_09_00_11_35shp_2.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'Giorno': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'loc_ref': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_477_Sabato_09_00_11_35shp_3.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'Giorno': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'loc_ref': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_476_Sabato_09_00_11_35shp_4.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'Giorno': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'loc_ref': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_472_Sabato_09_00_11_35shp_5.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'Giorno': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'loc_ref': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_470_Sabato_09_00_11_35shp_6.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'Giorno': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'loc_ref': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_361_Sabato_06_00_09_00shp_7.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'Giorno': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'loc_ref': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_350_Sabato_09_00_11_35shp_8.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'Giorno': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'loc_ref': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_35_Sabato_09_00_11_35shp_9.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'Giorno': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'loc_ref': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_28_Sabato_09_00_11_35shp_10.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'Giorno': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'loc_ref': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_202_Sabato_09_00_11_35shp_11.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'Giorno': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'loc_ref': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_201_Sabato_09_00_11_35shp_12.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'Giorno': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'loc_ref': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_85_Venerdi_08_00_11_35shp_13.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'Giorno': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'loc_ref': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_82_Venerdi_08_00_11_35shp_14.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'Giorno': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'loc_ref': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_477_Venerdi_08_00_11_35shp_15.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'Giorno': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'loc_ref': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_476_Venerdi_08_00_11_35shp_16.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'Giorno': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'loc_ref': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_472_Venerdi_08_00_11_35shp_17.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'Giorno': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'loc_ref': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_470_Venerdi_08_00_11_35shp_18.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'Giorno': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'loc_ref': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_361_Venerdi_08_00_11_35shp_19.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'Giorno': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'loc_ref': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_350_Venerdi_08_00_11_35shp_20.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'Giorno': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'loc_ref': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_35_Venerdi_08_00_11_35shp_21.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'Giorno': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'loc_ref': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_28_Venerdi_08_00_11_35shp_22.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'Giorno': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'loc_ref': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_202_Venerdi_08_00_11_35shp_23.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'Giorno': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'loc_ref': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_201_Venerdi_08_00_11_35shp_24.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'Giorno': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'loc_ref': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_85_Giovedi_08_00_11_35shp_25.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'Giorno': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'loc_ref': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_82_Giovedi_08_00_11_35shp_26.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'Giorno': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'loc_ref': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_477_Giovedi_08_00_11_35shp_27.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'Giorno': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'loc_ref': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_476_Giovedi_08_00_11_35shp_28.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'Giorno': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'loc_ref': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_472_Giovedi_08_00_11_35shp_29.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'Giorno': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'loc_ref': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_470_Giovedi_08_00_11_35shp_30.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'Giorno': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'loc_ref': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_361_Giovedi_08_00_11_35shp_31.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'Giorno': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'loc_ref': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_350_Giovedi_08_00_11_35shp_32.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'Giorno': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'loc_ref': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_35_Giovedi_08_00_11_35shp_33.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'Giorno': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'loc_ref': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_28_Giovedi_08_00_11_35shp_34.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'Giorno': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'loc_ref': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_202_Giovedi_08_00_11_35shp_35.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'Giorno': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'loc_ref': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_201_Giovedi_08_00_11_35shp_36.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'Giorno': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'loc_ref': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_85_Mercoledi_08_00_11_35shp_37.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'Giorno': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'loc_ref': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_82_Mercoledi_08_00_11_35shp_38.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'Giorno': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'loc_ref': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_477_Mercoledi_08_00_11_35shp_39.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'Giorno': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'loc_ref': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_476_Mercoledi_08_00_11_35shp_40.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'Giorno': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'loc_ref': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_472_Mercoledi_08_00_11_35shp_41.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'Giorno': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'loc_ref': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_470_Mercoledi_08_00_11_35shp_42.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'Giorno': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'loc_ref': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_361_Mercoledi_08_00_11_35shp_43.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'Giorno': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'loc_ref': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_350_Mercoledi_05_30_08_00shp_44.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'Giorno': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'loc_ref': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_35_Mercoledi_08_00_11_35shp_45.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'Giorno': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'loc_ref': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_28_Mercoledi_08_00_11_35shp_46.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'Giorno': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'loc_ref': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_202_Mercoledi_08_00_11_35shp_47.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'Giorno': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'loc_ref': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_201_Mercoledi_08_00_11_35shp_48.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'Giorno': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'loc_ref': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_85_Martedi_08_00_11_35shp_49.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'Giorno': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'loc_ref': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_82_Martedi_08_00_11_35shp_50.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'Giorno': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'loc_ref': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_477_Martedi_08_00_11_35shp_51.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'Giorno': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'loc_ref': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_476_Martedi_08_00_11_35shp_52.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'Giorno': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'loc_ref': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_472_Martedi_08_00_11_35shp_53.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'Giorno': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'loc_ref': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_470_Martedi_08_00_11_35shp_54.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'Giorno': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'loc_ref': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_361_Martedi_08_00_11_35shp_55.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'Giorno': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'loc_ref': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_350_Martedi_08_00_11_35shp_56.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'Giorno': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'loc_ref': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_35_Martedi_08_00_11_35shp_57.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'Giorno': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'loc_ref': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_28_Martedi_08_00_11_35shp_58.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'Giorno': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'loc_ref': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_202_Martedi_08_00_11_35shp_59.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'Giorno': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'loc_ref': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_201_Martedi_08_00_11_35shp_60.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'Giorno': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'loc_ref': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_85_Lunedi_08_00_11_35shp_61.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'Giorno': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'loc_ref': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_82_Lunedi_08_00_11_35shp_62.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'Giorno': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'loc_ref': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_477_Lunedi_08_00_11_35shp_63.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'Giorno': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'loc_ref': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_476_Lunedi_08_00_11_35shp_64.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'Giorno': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'loc_ref': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_472_Lunedi_08_00_11_35shp_65.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'Giorno': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'loc_ref': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_470_Lunedi_08_00_11_35shp_66.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'Giorno': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'loc_ref': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_361_Lunedi_08_00_11_35shp_67.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'Giorno': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'loc_ref': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_350_Lunedi_08_00_11_35shp_68.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'Giorno': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'loc_ref': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_35_Lunedi_08_00_11_35shp_69.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'Giorno': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'loc_ref': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_28_Lunedi_08_00_11_35shp_70.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'Giorno': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'loc_ref': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_202_Lunedi_08_00_11_35shp_71.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'Giorno': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'loc_ref': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_201_Lunedi_08_00_11_35shp_72.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'Giorno': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'loc_ref': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_201_Lunedi_08_00_11_35shp_72.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});