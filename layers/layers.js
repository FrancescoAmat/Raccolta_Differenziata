var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Confini_Comune_Milanodissolto_1 = new ol.format.GeoJSON();
var features_Confini_Comune_Milanodissolto_1 = format_Confini_Comune_Milanodissolto_1.readFeatures(json_Confini_Comune_Milanodissolto_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Confini_Comune_Milanodissolto_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Confini_Comune_Milanodissolto_1.addFeatures(features_Confini_Comune_Milanodissolto_1);
var lyr_Confini_Comune_Milanodissolto_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Confini_Comune_Milanodissolto_1, 
                style: style_Confini_Comune_Milanodissolto_1,
                popuplayertitle: 'Confini_Comune_Milano — dissolto',
                interactive: false,
                title: '<img src="styles/legend/Confini_Comune_Milanodissolto_1.png" /> Confini_Comune_Milano — dissolto'
            });
var format_477_Venerdi_08_00_11_35_2 = new ol.format.GeoJSON();
var features_477_Venerdi_08_00_11_35_2 = format_477_Venerdi_08_00_11_35_2.readFeatures(json_477_Venerdi_08_00_11_35_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_477_Venerdi_08_00_11_35_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_477_Venerdi_08_00_11_35_2.addFeatures(features_477_Venerdi_08_00_11_35_2);
var lyr_477_Venerdi_08_00_11_35_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_477_Venerdi_08_00_11_35_2, 
                style: style_477_Venerdi_08_00_11_35_2,
                popuplayertitle: '477_Venerdi_08_00_11_35',
                interactive: true,
    title: '477_Venerdi_08_00_11_35<br />\
    <img src="styles/legend/477_Venerdi_08_00_11_35_2_0.png" /> 1<br />\
    <img src="styles/legend/477_Venerdi_08_00_11_35_2_1.png" /> 2<br />' });
var format_476_Venerdi_08_00_11_35_3 = new ol.format.GeoJSON();
var features_476_Venerdi_08_00_11_35_3 = format_476_Venerdi_08_00_11_35_3.readFeatures(json_476_Venerdi_08_00_11_35_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_476_Venerdi_08_00_11_35_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_476_Venerdi_08_00_11_35_3.addFeatures(features_476_Venerdi_08_00_11_35_3);
var lyr_476_Venerdi_08_00_11_35_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_476_Venerdi_08_00_11_35_3, 
                style: style_476_Venerdi_08_00_11_35_3,
                popuplayertitle: '476_Venerdi_08_00_11_35',
                interactive: true,
    title: '476_Venerdi_08_00_11_35<br />\
    <img src="styles/legend/476_Venerdi_08_00_11_35_3_0.png" /> 1<br />\
    <img src="styles/legend/476_Venerdi_08_00_11_35_3_1.png" /> 2<br />\
    <img src="styles/legend/476_Venerdi_08_00_11_35_3_2.png" /> 3<br />\
    <img src="styles/legend/476_Venerdi_08_00_11_35_3_3.png" /> 4<br />\
    <img src="styles/legend/476_Venerdi_08_00_11_35_3_4.png" /> 5<br />' });
var format_472_Venerdi_08_00_11_35_4 = new ol.format.GeoJSON();
var features_472_Venerdi_08_00_11_35_4 = format_472_Venerdi_08_00_11_35_4.readFeatures(json_472_Venerdi_08_00_11_35_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_472_Venerdi_08_00_11_35_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_472_Venerdi_08_00_11_35_4.addFeatures(features_472_Venerdi_08_00_11_35_4);
var lyr_472_Venerdi_08_00_11_35_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_472_Venerdi_08_00_11_35_4, 
                style: style_472_Venerdi_08_00_11_35_4,
                popuplayertitle: '472_Venerdi_08_00_11_35',
                interactive: true,
    title: '472_Venerdi_08_00_11_35<br />\
    <img src="styles/legend/472_Venerdi_08_00_11_35_4_0.png" /> 1<br />\
    <img src="styles/legend/472_Venerdi_08_00_11_35_4_1.png" /> 2<br />\
    <img src="styles/legend/472_Venerdi_08_00_11_35_4_2.png" /> 3<br />' });
var format_470_Venerdi_08_00_11_35_5 = new ol.format.GeoJSON();
var features_470_Venerdi_08_00_11_35_5 = format_470_Venerdi_08_00_11_35_5.readFeatures(json_470_Venerdi_08_00_11_35_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_470_Venerdi_08_00_11_35_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_470_Venerdi_08_00_11_35_5.addFeatures(features_470_Venerdi_08_00_11_35_5);
var lyr_470_Venerdi_08_00_11_35_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_470_Venerdi_08_00_11_35_5, 
                style: style_470_Venerdi_08_00_11_35_5,
                popuplayertitle: '470_Venerdi_08_00_11_35',
                interactive: true,
    title: '470_Venerdi_08_00_11_35<br />\
    <img src="styles/legend/470_Venerdi_08_00_11_35_5_0.png" /> 1<br />\
    <img src="styles/legend/470_Venerdi_08_00_11_35_5_1.png" /> 2<br />\
    <img src="styles/legend/470_Venerdi_08_00_11_35_5_2.png" /> 3<br />\
    <img src="styles/legend/470_Venerdi_08_00_11_35_5_3.png" /> 4<br />\
    <img src="styles/legend/470_Venerdi_08_00_11_35_5_4.png" /> 5<br />\
    <img src="styles/legend/470_Venerdi_08_00_11_35_5_5.png" /> 6<br />\
    <img src="styles/legend/470_Venerdi_08_00_11_35_5_6.png" /> 7<br />\
    <img src="styles/legend/470_Venerdi_08_00_11_35_5_7.png" /> 8<br />\
    <img src="styles/legend/470_Venerdi_08_00_11_35_5_8.png" /> 9<br />' });
var format_361_Venerdi_08_00_11_35_6 = new ol.format.GeoJSON();
var features_361_Venerdi_08_00_11_35_6 = format_361_Venerdi_08_00_11_35_6.readFeatures(json_361_Venerdi_08_00_11_35_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_361_Venerdi_08_00_11_35_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_361_Venerdi_08_00_11_35_6.addFeatures(features_361_Venerdi_08_00_11_35_6);
var lyr_361_Venerdi_08_00_11_35_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_361_Venerdi_08_00_11_35_6, 
                style: style_361_Venerdi_08_00_11_35_6,
                popuplayertitle: '361_Venerdi_08_00_11_35',
                interactive: true,
    title: '361_Venerdi_08_00_11_35<br />\
    <img src="styles/legend/361_Venerdi_08_00_11_35_6_0.png" /> 1<br />' });
var format_350_Venerdi_08_00_11_35_7 = new ol.format.GeoJSON();
var features_350_Venerdi_08_00_11_35_7 = format_350_Venerdi_08_00_11_35_7.readFeatures(json_350_Venerdi_08_00_11_35_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_350_Venerdi_08_00_11_35_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_350_Venerdi_08_00_11_35_7.addFeatures(features_350_Venerdi_08_00_11_35_7);
var lyr_350_Venerdi_08_00_11_35_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_350_Venerdi_08_00_11_35_7, 
                style: style_350_Venerdi_08_00_11_35_7,
                popuplayertitle: '350_Venerdi_08_00_11_35',
                interactive: true,
    title: '350_Venerdi_08_00_11_35<br />\
    <img src="styles/legend/350_Venerdi_08_00_11_35_7_0.png" /> 1<br />\
    <img src="styles/legend/350_Venerdi_08_00_11_35_7_1.png" /> 2<br />' });
var format_202_Venerdi_08_00_11_35_8 = new ol.format.GeoJSON();
var features_202_Venerdi_08_00_11_35_8 = format_202_Venerdi_08_00_11_35_8.readFeatures(json_202_Venerdi_08_00_11_35_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_202_Venerdi_08_00_11_35_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_202_Venerdi_08_00_11_35_8.addFeatures(features_202_Venerdi_08_00_11_35_8);
var lyr_202_Venerdi_08_00_11_35_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_202_Venerdi_08_00_11_35_8, 
                style: style_202_Venerdi_08_00_11_35_8,
                popuplayertitle: '202_Venerdi_08_00_11_35',
                interactive: true,
    title: '202_Venerdi_08_00_11_35<br />\
    <img src="styles/legend/202_Venerdi_08_00_11_35_8_0.png" /> 1<br />\
    <img src="styles/legend/202_Venerdi_08_00_11_35_8_1.png" /> 2<br />\
    <img src="styles/legend/202_Venerdi_08_00_11_35_8_2.png" /> 3<br />\
    <img src="styles/legend/202_Venerdi_08_00_11_35_8_3.png" /> 4<br />' });
var format_201_Venerdi_08_00_11_35_9 = new ol.format.GeoJSON();
var features_201_Venerdi_08_00_11_35_9 = format_201_Venerdi_08_00_11_35_9.readFeatures(json_201_Venerdi_08_00_11_35_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_201_Venerdi_08_00_11_35_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_201_Venerdi_08_00_11_35_9.addFeatures(features_201_Venerdi_08_00_11_35_9);
var lyr_201_Venerdi_08_00_11_35_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_201_Venerdi_08_00_11_35_9, 
                style: style_201_Venerdi_08_00_11_35_9,
                popuplayertitle: '201_Venerdi_08_00_11_35',
                interactive: true,
    title: '201_Venerdi_08_00_11_35<br />\
    <img src="styles/legend/201_Venerdi_08_00_11_35_9_0.png" /> 1<br />\
    <img src="styles/legend/201_Venerdi_08_00_11_35_9_1.png" /> 2<br />\
    <img src="styles/legend/201_Venerdi_08_00_11_35_9_2.png" /> 3<br />\
    <img src="styles/legend/201_Venerdi_08_00_11_35_9_3.png" /> 4<br />\
    <img src="styles/legend/201_Venerdi_08_00_11_35_9_4.png" /> 5<br />\
    <img src="styles/legend/201_Venerdi_08_00_11_35_9_5.png" /> 6<br />\
    <img src="styles/legend/201_Venerdi_08_00_11_35_9_6.png" /> 7<br />\
    <img src="styles/legend/201_Venerdi_08_00_11_35_9_7.png" /> 8<br />\
    <img src="styles/legend/201_Venerdi_08_00_11_35_9_8.png" /> 9<br />' });
var format_85_Venerdi_08_00_11_35_10 = new ol.format.GeoJSON();
var features_85_Venerdi_08_00_11_35_10 = format_85_Venerdi_08_00_11_35_10.readFeatures(json_85_Venerdi_08_00_11_35_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_85_Venerdi_08_00_11_35_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_85_Venerdi_08_00_11_35_10.addFeatures(features_85_Venerdi_08_00_11_35_10);
var lyr_85_Venerdi_08_00_11_35_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_85_Venerdi_08_00_11_35_10, 
                style: style_85_Venerdi_08_00_11_35_10,
                popuplayertitle: '85_Venerdi_08_00_11_35',
                interactive: true,
    title: '85_Venerdi_08_00_11_35<br />\
    <img src="styles/legend/85_Venerdi_08_00_11_35_10_0.png" /> 1<br />\
    <img src="styles/legend/85_Venerdi_08_00_11_35_10_1.png" /> 2<br />\
    <img src="styles/legend/85_Venerdi_08_00_11_35_10_2.png" /> 3<br />\
    <img src="styles/legend/85_Venerdi_08_00_11_35_10_3.png" /> 4<br />\
    <img src="styles/legend/85_Venerdi_08_00_11_35_10_4.png" /> 5<br />\
    <img src="styles/legend/85_Venerdi_08_00_11_35_10_5.png" /> 6<br />\
    <img src="styles/legend/85_Venerdi_08_00_11_35_10_6.png" /> 7<br />\
    <img src="styles/legend/85_Venerdi_08_00_11_35_10_7.png" /> 8<br />\
    <img src="styles/legend/85_Venerdi_08_00_11_35_10_8.png" /> 9<br />\
    <img src="styles/legend/85_Venerdi_08_00_11_35_10_9.png" /> 10<br />' });
var format_82_Venerdi_08_00_11_35_11 = new ol.format.GeoJSON();
var features_82_Venerdi_08_00_11_35_11 = format_82_Venerdi_08_00_11_35_11.readFeatures(json_82_Venerdi_08_00_11_35_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_82_Venerdi_08_00_11_35_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_82_Venerdi_08_00_11_35_11.addFeatures(features_82_Venerdi_08_00_11_35_11);
var lyr_82_Venerdi_08_00_11_35_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_82_Venerdi_08_00_11_35_11, 
                style: style_82_Venerdi_08_00_11_35_11,
                popuplayertitle: '82_Venerdi_08_00_11_35',
                interactive: true,
    title: '82_Venerdi_08_00_11_35<br />\
    <img src="styles/legend/82_Venerdi_08_00_11_35_11_0.png" /> 1<br />\
    <img src="styles/legend/82_Venerdi_08_00_11_35_11_1.png" /> 2<br />\
    <img src="styles/legend/82_Venerdi_08_00_11_35_11_2.png" /> 3<br />\
    <img src="styles/legend/82_Venerdi_08_00_11_35_11_3.png" /> 4<br />\
    <img src="styles/legend/82_Venerdi_08_00_11_35_11_4.png" /> 5<br />\
    <img src="styles/legend/82_Venerdi_08_00_11_35_11_5.png" /> 6<br />\
    <img src="styles/legend/82_Venerdi_08_00_11_35_11_6.png" /> 7<br />' });
var format_35_Venerdi_08_00_11_35_12 = new ol.format.GeoJSON();
var features_35_Venerdi_08_00_11_35_12 = format_35_Venerdi_08_00_11_35_12.readFeatures(json_35_Venerdi_08_00_11_35_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_35_Venerdi_08_00_11_35_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_35_Venerdi_08_00_11_35_12.addFeatures(features_35_Venerdi_08_00_11_35_12);
var lyr_35_Venerdi_08_00_11_35_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_35_Venerdi_08_00_11_35_12, 
                style: style_35_Venerdi_08_00_11_35_12,
                popuplayertitle: '35_Venerdi_08_00_11_35',
                interactive: true,
    title: '35_Venerdi_08_00_11_35<br />\
    <img src="styles/legend/35_Venerdi_08_00_11_35_12_0.png" /> 1<br />\
    <img src="styles/legend/35_Venerdi_08_00_11_35_12_1.png" /> 2<br />\
    <img src="styles/legend/35_Venerdi_08_00_11_35_12_2.png" /> 3<br />\
    <img src="styles/legend/35_Venerdi_08_00_11_35_12_3.png" /> 4<br />\
    <img src="styles/legend/35_Venerdi_08_00_11_35_12_4.png" /> 5<br />\
    <img src="styles/legend/35_Venerdi_08_00_11_35_12_5.png" /> 6<br />\
    <img src="styles/legend/35_Venerdi_08_00_11_35_12_6.png" /> 7<br />\
    <img src="styles/legend/35_Venerdi_08_00_11_35_12_7.png" /> 8<br />\
    <img src="styles/legend/35_Venerdi_08_00_11_35_12_8.png" /> 9<br />\
    <img src="styles/legend/35_Venerdi_08_00_11_35_12_9.png" /> 10<br />' });
var format_28_Venerdi_08_00_11_35_13 = new ol.format.GeoJSON();
var features_28_Venerdi_08_00_11_35_13 = format_28_Venerdi_08_00_11_35_13.readFeatures(json_28_Venerdi_08_00_11_35_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_28_Venerdi_08_00_11_35_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_28_Venerdi_08_00_11_35_13.addFeatures(features_28_Venerdi_08_00_11_35_13);
var lyr_28_Venerdi_08_00_11_35_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_28_Venerdi_08_00_11_35_13, 
                style: style_28_Venerdi_08_00_11_35_13,
                popuplayertitle: '28_Venerdi_08_00_11_35',
                interactive: true,
    title: '28_Venerdi_08_00_11_35<br />\
    <img src="styles/legend/28_Venerdi_08_00_11_35_13_0.png" /> 1<br />\
    <img src="styles/legend/28_Venerdi_08_00_11_35_13_1.png" /> 2<br />\
    <img src="styles/legend/28_Venerdi_08_00_11_35_13_2.png" /> 3<br />\
    <img src="styles/legend/28_Venerdi_08_00_11_35_13_3.png" /> 4<br />' });
var format_477_Giovedi_08_00_11_35_14 = new ol.format.GeoJSON();
var features_477_Giovedi_08_00_11_35_14 = format_477_Giovedi_08_00_11_35_14.readFeatures(json_477_Giovedi_08_00_11_35_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_477_Giovedi_08_00_11_35_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_477_Giovedi_08_00_11_35_14.addFeatures(features_477_Giovedi_08_00_11_35_14);
var lyr_477_Giovedi_08_00_11_35_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_477_Giovedi_08_00_11_35_14, 
                style: style_477_Giovedi_08_00_11_35_14,
                popuplayertitle: '477_Giovedi_08_00_11_35',
                interactive: true,
    title: '477_Giovedi_08_00_11_35<br />\
    <img src="styles/legend/477_Giovedi_08_00_11_35_14_0.png" /> 1<br />\
    <img src="styles/legend/477_Giovedi_08_00_11_35_14_1.png" /> 2<br />' });
var format_476_Giovedi_08_00_11_35_15 = new ol.format.GeoJSON();
var features_476_Giovedi_08_00_11_35_15 = format_476_Giovedi_08_00_11_35_15.readFeatures(json_476_Giovedi_08_00_11_35_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_476_Giovedi_08_00_11_35_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_476_Giovedi_08_00_11_35_15.addFeatures(features_476_Giovedi_08_00_11_35_15);
var lyr_476_Giovedi_08_00_11_35_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_476_Giovedi_08_00_11_35_15, 
                style: style_476_Giovedi_08_00_11_35_15,
                popuplayertitle: '476_Giovedi_08_00_11_35',
                interactive: true,
    title: '476_Giovedi_08_00_11_35<br />\
    <img src="styles/legend/476_Giovedi_08_00_11_35_15_0.png" /> 1<br />\
    <img src="styles/legend/476_Giovedi_08_00_11_35_15_1.png" /> 2<br />\
    <img src="styles/legend/476_Giovedi_08_00_11_35_15_2.png" /> 3<br />\
    <img src="styles/legend/476_Giovedi_08_00_11_35_15_3.png" /> 4<br />\
    <img src="styles/legend/476_Giovedi_08_00_11_35_15_4.png" /> 5<br />' });
var format_472_Giovedi_08_00_11_35_16 = new ol.format.GeoJSON();
var features_472_Giovedi_08_00_11_35_16 = format_472_Giovedi_08_00_11_35_16.readFeatures(json_472_Giovedi_08_00_11_35_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_472_Giovedi_08_00_11_35_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_472_Giovedi_08_00_11_35_16.addFeatures(features_472_Giovedi_08_00_11_35_16);
var lyr_472_Giovedi_08_00_11_35_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_472_Giovedi_08_00_11_35_16, 
                style: style_472_Giovedi_08_00_11_35_16,
                popuplayertitle: '472_Giovedi_08_00_11_35',
                interactive: true,
    title: '472_Giovedi_08_00_11_35<br />\
    <img src="styles/legend/472_Giovedi_08_00_11_35_16_0.png" /> 1<br />\
    <img src="styles/legend/472_Giovedi_08_00_11_35_16_1.png" /> 2<br />\
    <img src="styles/legend/472_Giovedi_08_00_11_35_16_2.png" /> 3<br />' });
var format_470_Giovedi_08_00_11_35_17 = new ol.format.GeoJSON();
var features_470_Giovedi_08_00_11_35_17 = format_470_Giovedi_08_00_11_35_17.readFeatures(json_470_Giovedi_08_00_11_35_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_470_Giovedi_08_00_11_35_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_470_Giovedi_08_00_11_35_17.addFeatures(features_470_Giovedi_08_00_11_35_17);
var lyr_470_Giovedi_08_00_11_35_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_470_Giovedi_08_00_11_35_17, 
                style: style_470_Giovedi_08_00_11_35_17,
                popuplayertitle: '470_Giovedi_08_00_11_35',
                interactive: true,
    title: '470_Giovedi_08_00_11_35<br />\
    <img src="styles/legend/470_Giovedi_08_00_11_35_17_0.png" /> 1<br />\
    <img src="styles/legend/470_Giovedi_08_00_11_35_17_1.png" /> 2<br />\
    <img src="styles/legend/470_Giovedi_08_00_11_35_17_2.png" /> 3<br />\
    <img src="styles/legend/470_Giovedi_08_00_11_35_17_3.png" /> 4<br />\
    <img src="styles/legend/470_Giovedi_08_00_11_35_17_4.png" /> 5<br />\
    <img src="styles/legend/470_Giovedi_08_00_11_35_17_5.png" /> 6<br />\
    <img src="styles/legend/470_Giovedi_08_00_11_35_17_6.png" /> 7<br />\
    <img src="styles/legend/470_Giovedi_08_00_11_35_17_7.png" /> 8<br />\
    <img src="styles/legend/470_Giovedi_08_00_11_35_17_8.png" /> 9<br />' });
var format_361_Giovedi_08_00_11_35_18 = new ol.format.GeoJSON();
var features_361_Giovedi_08_00_11_35_18 = format_361_Giovedi_08_00_11_35_18.readFeatures(json_361_Giovedi_08_00_11_35_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_361_Giovedi_08_00_11_35_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_361_Giovedi_08_00_11_35_18.addFeatures(features_361_Giovedi_08_00_11_35_18);
var lyr_361_Giovedi_08_00_11_35_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_361_Giovedi_08_00_11_35_18, 
                style: style_361_Giovedi_08_00_11_35_18,
                popuplayertitle: '361_Giovedi_08_00_11_35',
                interactive: true,
    title: '361_Giovedi_08_00_11_35<br />\
    <img src="styles/legend/361_Giovedi_08_00_11_35_18_0.png" /> 1<br />' });
var format_350_Giovedi_08_00_11_35_19 = new ol.format.GeoJSON();
var features_350_Giovedi_08_00_11_35_19 = format_350_Giovedi_08_00_11_35_19.readFeatures(json_350_Giovedi_08_00_11_35_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_350_Giovedi_08_00_11_35_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_350_Giovedi_08_00_11_35_19.addFeatures(features_350_Giovedi_08_00_11_35_19);
var lyr_350_Giovedi_08_00_11_35_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_350_Giovedi_08_00_11_35_19, 
                style: style_350_Giovedi_08_00_11_35_19,
                popuplayertitle: '350_Giovedi_08_00_11_35',
                interactive: true,
    title: '350_Giovedi_08_00_11_35<br />\
    <img src="styles/legend/350_Giovedi_08_00_11_35_19_0.png" /> 1<br />\
    <img src="styles/legend/350_Giovedi_08_00_11_35_19_1.png" /> 2<br />' });
var format_202_Giovedi_08_00_11_35_20 = new ol.format.GeoJSON();
var features_202_Giovedi_08_00_11_35_20 = format_202_Giovedi_08_00_11_35_20.readFeatures(json_202_Giovedi_08_00_11_35_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_202_Giovedi_08_00_11_35_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_202_Giovedi_08_00_11_35_20.addFeatures(features_202_Giovedi_08_00_11_35_20);
var lyr_202_Giovedi_08_00_11_35_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_202_Giovedi_08_00_11_35_20, 
                style: style_202_Giovedi_08_00_11_35_20,
                popuplayertitle: '202_Giovedi_08_00_11_35',
                interactive: true,
    title: '202_Giovedi_08_00_11_35<br />\
    <img src="styles/legend/202_Giovedi_08_00_11_35_20_0.png" /> 1<br />\
    <img src="styles/legend/202_Giovedi_08_00_11_35_20_1.png" /> 2<br />\
    <img src="styles/legend/202_Giovedi_08_00_11_35_20_2.png" /> 3<br />\
    <img src="styles/legend/202_Giovedi_08_00_11_35_20_3.png" /> 4<br />' });
var format_201_Giovedi_08_00_11_35_21 = new ol.format.GeoJSON();
var features_201_Giovedi_08_00_11_35_21 = format_201_Giovedi_08_00_11_35_21.readFeatures(json_201_Giovedi_08_00_11_35_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_201_Giovedi_08_00_11_35_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_201_Giovedi_08_00_11_35_21.addFeatures(features_201_Giovedi_08_00_11_35_21);
var lyr_201_Giovedi_08_00_11_35_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_201_Giovedi_08_00_11_35_21, 
                style: style_201_Giovedi_08_00_11_35_21,
                popuplayertitle: '201_Giovedi_08_00_11_35',
                interactive: true,
    title: '201_Giovedi_08_00_11_35<br />\
    <img src="styles/legend/201_Giovedi_08_00_11_35_21_0.png" /> 1<br />\
    <img src="styles/legend/201_Giovedi_08_00_11_35_21_1.png" /> 2<br />\
    <img src="styles/legend/201_Giovedi_08_00_11_35_21_2.png" /> 3<br />\
    <img src="styles/legend/201_Giovedi_08_00_11_35_21_3.png" /> 4<br />\
    <img src="styles/legend/201_Giovedi_08_00_11_35_21_4.png" /> 5<br />\
    <img src="styles/legend/201_Giovedi_08_00_11_35_21_5.png" /> 6<br />\
    <img src="styles/legend/201_Giovedi_08_00_11_35_21_6.png" /> 7<br />\
    <img src="styles/legend/201_Giovedi_08_00_11_35_21_7.png" /> 8<br />\
    <img src="styles/legend/201_Giovedi_08_00_11_35_21_8.png" /> 9<br />' });
var format_85_Giovedi_08_00_11_35_22 = new ol.format.GeoJSON();
var features_85_Giovedi_08_00_11_35_22 = format_85_Giovedi_08_00_11_35_22.readFeatures(json_85_Giovedi_08_00_11_35_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_85_Giovedi_08_00_11_35_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_85_Giovedi_08_00_11_35_22.addFeatures(features_85_Giovedi_08_00_11_35_22);
var lyr_85_Giovedi_08_00_11_35_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_85_Giovedi_08_00_11_35_22, 
                style: style_85_Giovedi_08_00_11_35_22,
                popuplayertitle: '85_Giovedi_08_00_11_35',
                interactive: true,
    title: '85_Giovedi_08_00_11_35<br />\
    <img src="styles/legend/85_Giovedi_08_00_11_35_22_0.png" /> 1<br />\
    <img src="styles/legend/85_Giovedi_08_00_11_35_22_1.png" /> 2<br />\
    <img src="styles/legend/85_Giovedi_08_00_11_35_22_2.png" /> 3<br />\
    <img src="styles/legend/85_Giovedi_08_00_11_35_22_3.png" /> 4<br />\
    <img src="styles/legend/85_Giovedi_08_00_11_35_22_4.png" /> 5<br />\
    <img src="styles/legend/85_Giovedi_08_00_11_35_22_5.png" /> 6<br />\
    <img src="styles/legend/85_Giovedi_08_00_11_35_22_6.png" /> 7<br />\
    <img src="styles/legend/85_Giovedi_08_00_11_35_22_7.png" /> 8<br />\
    <img src="styles/legend/85_Giovedi_08_00_11_35_22_8.png" /> 9<br />\
    <img src="styles/legend/85_Giovedi_08_00_11_35_22_9.png" /> 10<br />' });
var format_82_Giovedi_08_00_11_35_23 = new ol.format.GeoJSON();
var features_82_Giovedi_08_00_11_35_23 = format_82_Giovedi_08_00_11_35_23.readFeatures(json_82_Giovedi_08_00_11_35_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_82_Giovedi_08_00_11_35_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_82_Giovedi_08_00_11_35_23.addFeatures(features_82_Giovedi_08_00_11_35_23);
var lyr_82_Giovedi_08_00_11_35_23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_82_Giovedi_08_00_11_35_23, 
                style: style_82_Giovedi_08_00_11_35_23,
                popuplayertitle: '82_Giovedi_08_00_11_35',
                interactive: true,
    title: '82_Giovedi_08_00_11_35<br />\
    <img src="styles/legend/82_Giovedi_08_00_11_35_23_0.png" /> 1<br />\
    <img src="styles/legend/82_Giovedi_08_00_11_35_23_1.png" /> 2<br />\
    <img src="styles/legend/82_Giovedi_08_00_11_35_23_2.png" /> 3<br />\
    <img src="styles/legend/82_Giovedi_08_00_11_35_23_3.png" /> 4<br />\
    <img src="styles/legend/82_Giovedi_08_00_11_35_23_4.png" /> 5<br />\
    <img src="styles/legend/82_Giovedi_08_00_11_35_23_5.png" /> 6<br />\
    <img src="styles/legend/82_Giovedi_08_00_11_35_23_6.png" /> 7<br />' });
var format_35_Giovedi_08_00_11_35_24 = new ol.format.GeoJSON();
var features_35_Giovedi_08_00_11_35_24 = format_35_Giovedi_08_00_11_35_24.readFeatures(json_35_Giovedi_08_00_11_35_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_35_Giovedi_08_00_11_35_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_35_Giovedi_08_00_11_35_24.addFeatures(features_35_Giovedi_08_00_11_35_24);
var lyr_35_Giovedi_08_00_11_35_24 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_35_Giovedi_08_00_11_35_24, 
                style: style_35_Giovedi_08_00_11_35_24,
                popuplayertitle: '35_Giovedi_08_00_11_35',
                interactive: true,
    title: '35_Giovedi_08_00_11_35<br />\
    <img src="styles/legend/35_Giovedi_08_00_11_35_24_0.png" /> 1<br />\
    <img src="styles/legend/35_Giovedi_08_00_11_35_24_1.png" /> 2<br />\
    <img src="styles/legend/35_Giovedi_08_00_11_35_24_2.png" /> 3<br />\
    <img src="styles/legend/35_Giovedi_08_00_11_35_24_3.png" /> 4<br />\
    <img src="styles/legend/35_Giovedi_08_00_11_35_24_4.png" /> 5<br />\
    <img src="styles/legend/35_Giovedi_08_00_11_35_24_5.png" /> 6<br />\
    <img src="styles/legend/35_Giovedi_08_00_11_35_24_6.png" /> 7<br />\
    <img src="styles/legend/35_Giovedi_08_00_11_35_24_7.png" /> 8<br />\
    <img src="styles/legend/35_Giovedi_08_00_11_35_24_8.png" /> 9<br />\
    <img src="styles/legend/35_Giovedi_08_00_11_35_24_9.png" /> 10<br />' });
var format_28_Giovedi_08_00_11_35_25 = new ol.format.GeoJSON();
var features_28_Giovedi_08_00_11_35_25 = format_28_Giovedi_08_00_11_35_25.readFeatures(json_28_Giovedi_08_00_11_35_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_28_Giovedi_08_00_11_35_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_28_Giovedi_08_00_11_35_25.addFeatures(features_28_Giovedi_08_00_11_35_25);
var lyr_28_Giovedi_08_00_11_35_25 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_28_Giovedi_08_00_11_35_25, 
                style: style_28_Giovedi_08_00_11_35_25,
                popuplayertitle: '28_Giovedi_08_00_11_35',
                interactive: true,
    title: '28_Giovedi_08_00_11_35<br />\
    <img src="styles/legend/28_Giovedi_08_00_11_35_25_0.png" /> 1<br />\
    <img src="styles/legend/28_Giovedi_08_00_11_35_25_1.png" /> 2<br />\
    <img src="styles/legend/28_Giovedi_08_00_11_35_25_2.png" /> 3<br />\
    <img src="styles/legend/28_Giovedi_08_00_11_35_25_3.png" /> 4<br />' });
var format_477_Mercoledi_08_00_11_35_26 = new ol.format.GeoJSON();
var features_477_Mercoledi_08_00_11_35_26 = format_477_Mercoledi_08_00_11_35_26.readFeatures(json_477_Mercoledi_08_00_11_35_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_477_Mercoledi_08_00_11_35_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_477_Mercoledi_08_00_11_35_26.addFeatures(features_477_Mercoledi_08_00_11_35_26);
var lyr_477_Mercoledi_08_00_11_35_26 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_477_Mercoledi_08_00_11_35_26, 
                style: style_477_Mercoledi_08_00_11_35_26,
                popuplayertitle: '477_Mercoledi_08_00_11_35',
                interactive: true,
    title: '477_Mercoledi_08_00_11_35<br />\
    <img src="styles/legend/477_Mercoledi_08_00_11_35_26_0.png" /> 1<br />\
    <img src="styles/legend/477_Mercoledi_08_00_11_35_26_1.png" /> 2<br />' });
var format_476_Mercoledi_08_00_11_35_27 = new ol.format.GeoJSON();
var features_476_Mercoledi_08_00_11_35_27 = format_476_Mercoledi_08_00_11_35_27.readFeatures(json_476_Mercoledi_08_00_11_35_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_476_Mercoledi_08_00_11_35_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_476_Mercoledi_08_00_11_35_27.addFeatures(features_476_Mercoledi_08_00_11_35_27);
var lyr_476_Mercoledi_08_00_11_35_27 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_476_Mercoledi_08_00_11_35_27, 
                style: style_476_Mercoledi_08_00_11_35_27,
                popuplayertitle: '476_Mercoledi_08_00_11_35',
                interactive: true,
    title: '476_Mercoledi_08_00_11_35<br />\
    <img src="styles/legend/476_Mercoledi_08_00_11_35_27_0.png" /> 1<br />\
    <img src="styles/legend/476_Mercoledi_08_00_11_35_27_1.png" /> 2<br />\
    <img src="styles/legend/476_Mercoledi_08_00_11_35_27_2.png" /> 3<br />\
    <img src="styles/legend/476_Mercoledi_08_00_11_35_27_3.png" /> 4<br />\
    <img src="styles/legend/476_Mercoledi_08_00_11_35_27_4.png" /> 5<br />' });
var format_472_Mercoledi_08_00_11_35_28 = new ol.format.GeoJSON();
var features_472_Mercoledi_08_00_11_35_28 = format_472_Mercoledi_08_00_11_35_28.readFeatures(json_472_Mercoledi_08_00_11_35_28, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_472_Mercoledi_08_00_11_35_28 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_472_Mercoledi_08_00_11_35_28.addFeatures(features_472_Mercoledi_08_00_11_35_28);
var lyr_472_Mercoledi_08_00_11_35_28 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_472_Mercoledi_08_00_11_35_28, 
                style: style_472_Mercoledi_08_00_11_35_28,
                popuplayertitle: '472_Mercoledi_08_00_11_35',
                interactive: true,
    title: '472_Mercoledi_08_00_11_35<br />\
    <img src="styles/legend/472_Mercoledi_08_00_11_35_28_0.png" /> 1<br />\
    <img src="styles/legend/472_Mercoledi_08_00_11_35_28_1.png" /> 2<br />\
    <img src="styles/legend/472_Mercoledi_08_00_11_35_28_2.png" /> 3<br />' });
var format_470_Mercoledi_08_00_11_35_29 = new ol.format.GeoJSON();
var features_470_Mercoledi_08_00_11_35_29 = format_470_Mercoledi_08_00_11_35_29.readFeatures(json_470_Mercoledi_08_00_11_35_29, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_470_Mercoledi_08_00_11_35_29 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_470_Mercoledi_08_00_11_35_29.addFeatures(features_470_Mercoledi_08_00_11_35_29);
var lyr_470_Mercoledi_08_00_11_35_29 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_470_Mercoledi_08_00_11_35_29, 
                style: style_470_Mercoledi_08_00_11_35_29,
                popuplayertitle: '470_Mercoledi_08_00_11_35',
                interactive: true,
    title: '470_Mercoledi_08_00_11_35<br />\
    <img src="styles/legend/470_Mercoledi_08_00_11_35_29_0.png" /> 1<br />\
    <img src="styles/legend/470_Mercoledi_08_00_11_35_29_1.png" /> 2<br />\
    <img src="styles/legend/470_Mercoledi_08_00_11_35_29_2.png" /> 3<br />\
    <img src="styles/legend/470_Mercoledi_08_00_11_35_29_3.png" /> 4<br />\
    <img src="styles/legend/470_Mercoledi_08_00_11_35_29_4.png" /> 5<br />\
    <img src="styles/legend/470_Mercoledi_08_00_11_35_29_5.png" /> 6<br />\
    <img src="styles/legend/470_Mercoledi_08_00_11_35_29_6.png" /> 7<br />\
    <img src="styles/legend/470_Mercoledi_08_00_11_35_29_7.png" /> 8<br />\
    <img src="styles/legend/470_Mercoledi_08_00_11_35_29_8.png" /> 9<br />' });
var format_361_Mercoledi_08_00_11_35_30 = new ol.format.GeoJSON();
var features_361_Mercoledi_08_00_11_35_30 = format_361_Mercoledi_08_00_11_35_30.readFeatures(json_361_Mercoledi_08_00_11_35_30, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_361_Mercoledi_08_00_11_35_30 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_361_Mercoledi_08_00_11_35_30.addFeatures(features_361_Mercoledi_08_00_11_35_30);
var lyr_361_Mercoledi_08_00_11_35_30 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_361_Mercoledi_08_00_11_35_30, 
                style: style_361_Mercoledi_08_00_11_35_30,
                popuplayertitle: '361_Mercoledi_08_00_11_35',
                interactive: true,
    title: '361_Mercoledi_08_00_11_35<br />\
    <img src="styles/legend/361_Mercoledi_08_00_11_35_30_0.png" /> 1<br />' });
var format_350_Mercoledi_05_30_08_00_31 = new ol.format.GeoJSON();
var features_350_Mercoledi_05_30_08_00_31 = format_350_Mercoledi_05_30_08_00_31.readFeatures(json_350_Mercoledi_05_30_08_00_31, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_350_Mercoledi_05_30_08_00_31 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_350_Mercoledi_05_30_08_00_31.addFeatures(features_350_Mercoledi_05_30_08_00_31);
var lyr_350_Mercoledi_05_30_08_00_31 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_350_Mercoledi_05_30_08_00_31, 
                style: style_350_Mercoledi_05_30_08_00_31,
                popuplayertitle: '350_Mercoledi_05_30_08_00',
                interactive: true,
    title: '350_Mercoledi_05_30_08_00<br />\
    <img src="styles/legend/350_Mercoledi_05_30_08_00_31_0.png" /> 1<br />\
    <img src="styles/legend/350_Mercoledi_05_30_08_00_31_1.png" /> 2<br />\
    <img src="styles/legend/350_Mercoledi_05_30_08_00_31_2.png" /> 3<br />' });
var format_202_Mercoledi_08_00_11_35_32 = new ol.format.GeoJSON();
var features_202_Mercoledi_08_00_11_35_32 = format_202_Mercoledi_08_00_11_35_32.readFeatures(json_202_Mercoledi_08_00_11_35_32, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_202_Mercoledi_08_00_11_35_32 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_202_Mercoledi_08_00_11_35_32.addFeatures(features_202_Mercoledi_08_00_11_35_32);
var lyr_202_Mercoledi_08_00_11_35_32 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_202_Mercoledi_08_00_11_35_32, 
                style: style_202_Mercoledi_08_00_11_35_32,
                popuplayertitle: '202_Mercoledi_08_00_11_35',
                interactive: true,
    title: '202_Mercoledi_08_00_11_35<br />\
    <img src="styles/legend/202_Mercoledi_08_00_11_35_32_0.png" /> 1<br />\
    <img src="styles/legend/202_Mercoledi_08_00_11_35_32_1.png" /> 2<br />\
    <img src="styles/legend/202_Mercoledi_08_00_11_35_32_2.png" /> 3<br />\
    <img src="styles/legend/202_Mercoledi_08_00_11_35_32_3.png" /> 4<br />' });
var format_201_Mercoledi_08_00_11_35_33 = new ol.format.GeoJSON();
var features_201_Mercoledi_08_00_11_35_33 = format_201_Mercoledi_08_00_11_35_33.readFeatures(json_201_Mercoledi_08_00_11_35_33, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_201_Mercoledi_08_00_11_35_33 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_201_Mercoledi_08_00_11_35_33.addFeatures(features_201_Mercoledi_08_00_11_35_33);
var lyr_201_Mercoledi_08_00_11_35_33 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_201_Mercoledi_08_00_11_35_33, 
                style: style_201_Mercoledi_08_00_11_35_33,
                popuplayertitle: '201_Mercoledi_08_00_11_35',
                interactive: true,
    title: '201_Mercoledi_08_00_11_35<br />\
    <img src="styles/legend/201_Mercoledi_08_00_11_35_33_0.png" /> 1<br />\
    <img src="styles/legend/201_Mercoledi_08_00_11_35_33_1.png" /> 2<br />\
    <img src="styles/legend/201_Mercoledi_08_00_11_35_33_2.png" /> 3<br />\
    <img src="styles/legend/201_Mercoledi_08_00_11_35_33_3.png" /> 4<br />\
    <img src="styles/legend/201_Mercoledi_08_00_11_35_33_4.png" /> 5<br />\
    <img src="styles/legend/201_Mercoledi_08_00_11_35_33_5.png" /> 6<br />\
    <img src="styles/legend/201_Mercoledi_08_00_11_35_33_6.png" /> 7<br />\
    <img src="styles/legend/201_Mercoledi_08_00_11_35_33_7.png" /> 8<br />\
    <img src="styles/legend/201_Mercoledi_08_00_11_35_33_8.png" /> 9<br />' });
var format_85_Mercoledi_08_00_11_35_34 = new ol.format.GeoJSON();
var features_85_Mercoledi_08_00_11_35_34 = format_85_Mercoledi_08_00_11_35_34.readFeatures(json_85_Mercoledi_08_00_11_35_34, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_85_Mercoledi_08_00_11_35_34 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_85_Mercoledi_08_00_11_35_34.addFeatures(features_85_Mercoledi_08_00_11_35_34);
var lyr_85_Mercoledi_08_00_11_35_34 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_85_Mercoledi_08_00_11_35_34, 
                style: style_85_Mercoledi_08_00_11_35_34,
                popuplayertitle: '85_Mercoledi_08_00_11_35',
                interactive: true,
    title: '85_Mercoledi_08_00_11_35<br />\
    <img src="styles/legend/85_Mercoledi_08_00_11_35_34_0.png" /> 1<br />\
    <img src="styles/legend/85_Mercoledi_08_00_11_35_34_1.png" /> 2<br />\
    <img src="styles/legend/85_Mercoledi_08_00_11_35_34_2.png" /> 3<br />\
    <img src="styles/legend/85_Mercoledi_08_00_11_35_34_3.png" /> 4<br />\
    <img src="styles/legend/85_Mercoledi_08_00_11_35_34_4.png" /> 5<br />\
    <img src="styles/legend/85_Mercoledi_08_00_11_35_34_5.png" /> 6<br />\
    <img src="styles/legend/85_Mercoledi_08_00_11_35_34_6.png" /> 7<br />\
    <img src="styles/legend/85_Mercoledi_08_00_11_35_34_7.png" /> 8<br />\
    <img src="styles/legend/85_Mercoledi_08_00_11_35_34_8.png" /> 9<br />\
    <img src="styles/legend/85_Mercoledi_08_00_11_35_34_9.png" /> 10<br />' });
var format_82_Mercoledi_08_00_11_35_35 = new ol.format.GeoJSON();
var features_82_Mercoledi_08_00_11_35_35 = format_82_Mercoledi_08_00_11_35_35.readFeatures(json_82_Mercoledi_08_00_11_35_35, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_82_Mercoledi_08_00_11_35_35 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_82_Mercoledi_08_00_11_35_35.addFeatures(features_82_Mercoledi_08_00_11_35_35);
var lyr_82_Mercoledi_08_00_11_35_35 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_82_Mercoledi_08_00_11_35_35, 
                style: style_82_Mercoledi_08_00_11_35_35,
                popuplayertitle: '82_Mercoledi_08_00_11_35',
                interactive: true,
    title: '82_Mercoledi_08_00_11_35<br />\
    <img src="styles/legend/82_Mercoledi_08_00_11_35_35_0.png" /> 1<br />\
    <img src="styles/legend/82_Mercoledi_08_00_11_35_35_1.png" /> 2<br />\
    <img src="styles/legend/82_Mercoledi_08_00_11_35_35_2.png" /> 3<br />\
    <img src="styles/legend/82_Mercoledi_08_00_11_35_35_3.png" /> 4<br />\
    <img src="styles/legend/82_Mercoledi_08_00_11_35_35_4.png" /> 5<br />\
    <img src="styles/legend/82_Mercoledi_08_00_11_35_35_5.png" /> 6<br />\
    <img src="styles/legend/82_Mercoledi_08_00_11_35_35_6.png" /> 7<br />' });
var format_35_Mercoledi_08_00_11_35_36 = new ol.format.GeoJSON();
var features_35_Mercoledi_08_00_11_35_36 = format_35_Mercoledi_08_00_11_35_36.readFeatures(json_35_Mercoledi_08_00_11_35_36, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_35_Mercoledi_08_00_11_35_36 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_35_Mercoledi_08_00_11_35_36.addFeatures(features_35_Mercoledi_08_00_11_35_36);
var lyr_35_Mercoledi_08_00_11_35_36 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_35_Mercoledi_08_00_11_35_36, 
                style: style_35_Mercoledi_08_00_11_35_36,
                popuplayertitle: '35_Mercoledi_08_00_11_35',
                interactive: true,
    title: '35_Mercoledi_08_00_11_35<br />\
    <img src="styles/legend/35_Mercoledi_08_00_11_35_36_0.png" /> 1<br />\
    <img src="styles/legend/35_Mercoledi_08_00_11_35_36_1.png" /> 2<br />\
    <img src="styles/legend/35_Mercoledi_08_00_11_35_36_2.png" /> 3<br />\
    <img src="styles/legend/35_Mercoledi_08_00_11_35_36_3.png" /> 4<br />\
    <img src="styles/legend/35_Mercoledi_08_00_11_35_36_4.png" /> 5<br />\
    <img src="styles/legend/35_Mercoledi_08_00_11_35_36_5.png" /> 6<br />\
    <img src="styles/legend/35_Mercoledi_08_00_11_35_36_6.png" /> 7<br />\
    <img src="styles/legend/35_Mercoledi_08_00_11_35_36_7.png" /> 8<br />\
    <img src="styles/legend/35_Mercoledi_08_00_11_35_36_8.png" /> 9<br />\
    <img src="styles/legend/35_Mercoledi_08_00_11_35_36_9.png" /> 10<br />' });
var format_28_Mercoledi_08_00_11_35_37 = new ol.format.GeoJSON();
var features_28_Mercoledi_08_00_11_35_37 = format_28_Mercoledi_08_00_11_35_37.readFeatures(json_28_Mercoledi_08_00_11_35_37, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_28_Mercoledi_08_00_11_35_37 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_28_Mercoledi_08_00_11_35_37.addFeatures(features_28_Mercoledi_08_00_11_35_37);
var lyr_28_Mercoledi_08_00_11_35_37 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_28_Mercoledi_08_00_11_35_37, 
                style: style_28_Mercoledi_08_00_11_35_37,
                popuplayertitle: '28_Mercoledi_08_00_11_35',
                interactive: true,
    title: '28_Mercoledi_08_00_11_35<br />\
    <img src="styles/legend/28_Mercoledi_08_00_11_35_37_0.png" /> 1<br />\
    <img src="styles/legend/28_Mercoledi_08_00_11_35_37_1.png" /> 2<br />\
    <img src="styles/legend/28_Mercoledi_08_00_11_35_37_2.png" /> 3<br />\
    <img src="styles/legend/28_Mercoledi_08_00_11_35_37_3.png" /> 4<br />' });
var format_477_Martedi_08_00_11_35_38 = new ol.format.GeoJSON();
var features_477_Martedi_08_00_11_35_38 = format_477_Martedi_08_00_11_35_38.readFeatures(json_477_Martedi_08_00_11_35_38, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_477_Martedi_08_00_11_35_38 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_477_Martedi_08_00_11_35_38.addFeatures(features_477_Martedi_08_00_11_35_38);
var lyr_477_Martedi_08_00_11_35_38 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_477_Martedi_08_00_11_35_38, 
                style: style_477_Martedi_08_00_11_35_38,
                popuplayertitle: '477_Martedi_08_00_11_35',
                interactive: true,
    title: '477_Martedi_08_00_11_35<br />\
    <img src="styles/legend/477_Martedi_08_00_11_35_38_0.png" /> 1<br />\
    <img src="styles/legend/477_Martedi_08_00_11_35_38_1.png" /> 2<br />' });
var format_476_Martedi_08_00_11_35_39 = new ol.format.GeoJSON();
var features_476_Martedi_08_00_11_35_39 = format_476_Martedi_08_00_11_35_39.readFeatures(json_476_Martedi_08_00_11_35_39, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_476_Martedi_08_00_11_35_39 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_476_Martedi_08_00_11_35_39.addFeatures(features_476_Martedi_08_00_11_35_39);
var lyr_476_Martedi_08_00_11_35_39 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_476_Martedi_08_00_11_35_39, 
                style: style_476_Martedi_08_00_11_35_39,
                popuplayertitle: '476_Martedi_08_00_11_35',
                interactive: true,
    title: '476_Martedi_08_00_11_35<br />\
    <img src="styles/legend/476_Martedi_08_00_11_35_39_0.png" /> 1<br />\
    <img src="styles/legend/476_Martedi_08_00_11_35_39_1.png" /> 2<br />\
    <img src="styles/legend/476_Martedi_08_00_11_35_39_2.png" /> 3<br />\
    <img src="styles/legend/476_Martedi_08_00_11_35_39_3.png" /> 4<br />\
    <img src="styles/legend/476_Martedi_08_00_11_35_39_4.png" /> 5<br />' });
var format_472_Martedi_08_00_11_35_40 = new ol.format.GeoJSON();
var features_472_Martedi_08_00_11_35_40 = format_472_Martedi_08_00_11_35_40.readFeatures(json_472_Martedi_08_00_11_35_40, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_472_Martedi_08_00_11_35_40 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_472_Martedi_08_00_11_35_40.addFeatures(features_472_Martedi_08_00_11_35_40);
var lyr_472_Martedi_08_00_11_35_40 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_472_Martedi_08_00_11_35_40, 
                style: style_472_Martedi_08_00_11_35_40,
                popuplayertitle: '472_Martedi_08_00_11_35',
                interactive: true,
    title: '472_Martedi_08_00_11_35<br />\
    <img src="styles/legend/472_Martedi_08_00_11_35_40_0.png" /> 1<br />\
    <img src="styles/legend/472_Martedi_08_00_11_35_40_1.png" /> 2<br />\
    <img src="styles/legend/472_Martedi_08_00_11_35_40_2.png" /> 3<br />' });
var format_470_Martedi_08_00_11_35_41 = new ol.format.GeoJSON();
var features_470_Martedi_08_00_11_35_41 = format_470_Martedi_08_00_11_35_41.readFeatures(json_470_Martedi_08_00_11_35_41, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_470_Martedi_08_00_11_35_41 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_470_Martedi_08_00_11_35_41.addFeatures(features_470_Martedi_08_00_11_35_41);
var lyr_470_Martedi_08_00_11_35_41 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_470_Martedi_08_00_11_35_41, 
                style: style_470_Martedi_08_00_11_35_41,
                popuplayertitle: '470_Martedi_08_00_11_35',
                interactive: true,
    title: '470_Martedi_08_00_11_35<br />\
    <img src="styles/legend/470_Martedi_08_00_11_35_41_0.png" /> 1<br />\
    <img src="styles/legend/470_Martedi_08_00_11_35_41_1.png" /> 2<br />\
    <img src="styles/legend/470_Martedi_08_00_11_35_41_2.png" /> 3<br />\
    <img src="styles/legend/470_Martedi_08_00_11_35_41_3.png" /> 4<br />\
    <img src="styles/legend/470_Martedi_08_00_11_35_41_4.png" /> 5<br />\
    <img src="styles/legend/470_Martedi_08_00_11_35_41_5.png" /> 6<br />\
    <img src="styles/legend/470_Martedi_08_00_11_35_41_6.png" /> 7<br />\
    <img src="styles/legend/470_Martedi_08_00_11_35_41_7.png" /> 8<br />\
    <img src="styles/legend/470_Martedi_08_00_11_35_41_8.png" /> 9<br />' });
var format_361_Martedi_08_00_11_35_42 = new ol.format.GeoJSON();
var features_361_Martedi_08_00_11_35_42 = format_361_Martedi_08_00_11_35_42.readFeatures(json_361_Martedi_08_00_11_35_42, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_361_Martedi_08_00_11_35_42 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_361_Martedi_08_00_11_35_42.addFeatures(features_361_Martedi_08_00_11_35_42);
var lyr_361_Martedi_08_00_11_35_42 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_361_Martedi_08_00_11_35_42, 
                style: style_361_Martedi_08_00_11_35_42,
                popuplayertitle: '361_Martedi_08_00_11_35',
                interactive: true,
    title: '361_Martedi_08_00_11_35<br />\
    <img src="styles/legend/361_Martedi_08_00_11_35_42_0.png" /> 1<br />' });
var format_350_Martedi_08_00_11_35_43 = new ol.format.GeoJSON();
var features_350_Martedi_08_00_11_35_43 = format_350_Martedi_08_00_11_35_43.readFeatures(json_350_Martedi_08_00_11_35_43, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_350_Martedi_08_00_11_35_43 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_350_Martedi_08_00_11_35_43.addFeatures(features_350_Martedi_08_00_11_35_43);
var lyr_350_Martedi_08_00_11_35_43 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_350_Martedi_08_00_11_35_43, 
                style: style_350_Martedi_08_00_11_35_43,
                popuplayertitle: '350_Martedi_08_00_11_35',
                interactive: true,
    title: '350_Martedi_08_00_11_35<br />\
    <img src="styles/legend/350_Martedi_08_00_11_35_43_0.png" /> 1<br />\
    <img src="styles/legend/350_Martedi_08_00_11_35_43_1.png" /> 2<br />\
    <img src="styles/legend/350_Martedi_08_00_11_35_43_2.png" /> 3<br />' });
var format_202_Martedi_08_00_11_35_44 = new ol.format.GeoJSON();
var features_202_Martedi_08_00_11_35_44 = format_202_Martedi_08_00_11_35_44.readFeatures(json_202_Martedi_08_00_11_35_44, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_202_Martedi_08_00_11_35_44 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_202_Martedi_08_00_11_35_44.addFeatures(features_202_Martedi_08_00_11_35_44);
var lyr_202_Martedi_08_00_11_35_44 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_202_Martedi_08_00_11_35_44, 
                style: style_202_Martedi_08_00_11_35_44,
                popuplayertitle: '202_Martedi_08_00_11_35',
                interactive: true,
    title: '202_Martedi_08_00_11_35<br />\
    <img src="styles/legend/202_Martedi_08_00_11_35_44_0.png" /> 1<br />\
    <img src="styles/legend/202_Martedi_08_00_11_35_44_1.png" /> 2<br />\
    <img src="styles/legend/202_Martedi_08_00_11_35_44_2.png" /> 3<br />\
    <img src="styles/legend/202_Martedi_08_00_11_35_44_3.png" /> 4<br />' });
var format_201_Martedi_08_00_11_35_45 = new ol.format.GeoJSON();
var features_201_Martedi_08_00_11_35_45 = format_201_Martedi_08_00_11_35_45.readFeatures(json_201_Martedi_08_00_11_35_45, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_201_Martedi_08_00_11_35_45 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_201_Martedi_08_00_11_35_45.addFeatures(features_201_Martedi_08_00_11_35_45);
var lyr_201_Martedi_08_00_11_35_45 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_201_Martedi_08_00_11_35_45, 
                style: style_201_Martedi_08_00_11_35_45,
                popuplayertitle: '201_Martedi_08_00_11_35',
                interactive: true,
    title: '201_Martedi_08_00_11_35<br />\
    <img src="styles/legend/201_Martedi_08_00_11_35_45_0.png" /> 1<br />\
    <img src="styles/legend/201_Martedi_08_00_11_35_45_1.png" /> 2<br />\
    <img src="styles/legend/201_Martedi_08_00_11_35_45_2.png" /> 3<br />\
    <img src="styles/legend/201_Martedi_08_00_11_35_45_3.png" /> 4<br />\
    <img src="styles/legend/201_Martedi_08_00_11_35_45_4.png" /> 5<br />\
    <img src="styles/legend/201_Martedi_08_00_11_35_45_5.png" /> 6<br />\
    <img src="styles/legend/201_Martedi_08_00_11_35_45_6.png" /> 7<br />\
    <img src="styles/legend/201_Martedi_08_00_11_35_45_7.png" /> 8<br />\
    <img src="styles/legend/201_Martedi_08_00_11_35_45_8.png" /> 9<br />' });
var format_85_Martedi_08_00_11_35_46 = new ol.format.GeoJSON();
var features_85_Martedi_08_00_11_35_46 = format_85_Martedi_08_00_11_35_46.readFeatures(json_85_Martedi_08_00_11_35_46, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_85_Martedi_08_00_11_35_46 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_85_Martedi_08_00_11_35_46.addFeatures(features_85_Martedi_08_00_11_35_46);
var lyr_85_Martedi_08_00_11_35_46 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_85_Martedi_08_00_11_35_46, 
                style: style_85_Martedi_08_00_11_35_46,
                popuplayertitle: '85_Martedi_08_00_11_35',
                interactive: true,
    title: '85_Martedi_08_00_11_35<br />\
    <img src="styles/legend/85_Martedi_08_00_11_35_46_0.png" /> 1<br />\
    <img src="styles/legend/85_Martedi_08_00_11_35_46_1.png" /> 2<br />\
    <img src="styles/legend/85_Martedi_08_00_11_35_46_2.png" /> 3<br />\
    <img src="styles/legend/85_Martedi_08_00_11_35_46_3.png" /> 4<br />\
    <img src="styles/legend/85_Martedi_08_00_11_35_46_4.png" /> 5<br />\
    <img src="styles/legend/85_Martedi_08_00_11_35_46_5.png" /> 6<br />\
    <img src="styles/legend/85_Martedi_08_00_11_35_46_6.png" /> 7<br />\
    <img src="styles/legend/85_Martedi_08_00_11_35_46_7.png" /> 8<br />\
    <img src="styles/legend/85_Martedi_08_00_11_35_46_8.png" /> 9<br />\
    <img src="styles/legend/85_Martedi_08_00_11_35_46_9.png" /> 10<br />' });
var format_82_Martedi_08_00_11_35_47 = new ol.format.GeoJSON();
var features_82_Martedi_08_00_11_35_47 = format_82_Martedi_08_00_11_35_47.readFeatures(json_82_Martedi_08_00_11_35_47, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_82_Martedi_08_00_11_35_47 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_82_Martedi_08_00_11_35_47.addFeatures(features_82_Martedi_08_00_11_35_47);
var lyr_82_Martedi_08_00_11_35_47 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_82_Martedi_08_00_11_35_47, 
                style: style_82_Martedi_08_00_11_35_47,
                popuplayertitle: '82_Martedi_08_00_11_35',
                interactive: true,
    title: '82_Martedi_08_00_11_35<br />\
    <img src="styles/legend/82_Martedi_08_00_11_35_47_0.png" /> 1<br />\
    <img src="styles/legend/82_Martedi_08_00_11_35_47_1.png" /> 2<br />\
    <img src="styles/legend/82_Martedi_08_00_11_35_47_2.png" /> 3<br />\
    <img src="styles/legend/82_Martedi_08_00_11_35_47_3.png" /> 4<br />\
    <img src="styles/legend/82_Martedi_08_00_11_35_47_4.png" /> 5<br />\
    <img src="styles/legend/82_Martedi_08_00_11_35_47_5.png" /> 6<br />\
    <img src="styles/legend/82_Martedi_08_00_11_35_47_6.png" /> 7<br />' });
var format_35_Martedi_08_00_11_35_48 = new ol.format.GeoJSON();
var features_35_Martedi_08_00_11_35_48 = format_35_Martedi_08_00_11_35_48.readFeatures(json_35_Martedi_08_00_11_35_48, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_35_Martedi_08_00_11_35_48 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_35_Martedi_08_00_11_35_48.addFeatures(features_35_Martedi_08_00_11_35_48);
var lyr_35_Martedi_08_00_11_35_48 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_35_Martedi_08_00_11_35_48, 
                style: style_35_Martedi_08_00_11_35_48,
                popuplayertitle: '35_Martedi_08_00_11_35',
                interactive: true,
    title: '35_Martedi_08_00_11_35<br />\
    <img src="styles/legend/35_Martedi_08_00_11_35_48_0.png" /> 1<br />\
    <img src="styles/legend/35_Martedi_08_00_11_35_48_1.png" /> 2<br />\
    <img src="styles/legend/35_Martedi_08_00_11_35_48_2.png" /> 3<br />\
    <img src="styles/legend/35_Martedi_08_00_11_35_48_3.png" /> 4<br />\
    <img src="styles/legend/35_Martedi_08_00_11_35_48_4.png" /> 5<br />\
    <img src="styles/legend/35_Martedi_08_00_11_35_48_5.png" /> 6<br />\
    <img src="styles/legend/35_Martedi_08_00_11_35_48_6.png" /> 7<br />\
    <img src="styles/legend/35_Martedi_08_00_11_35_48_7.png" /> 8<br />\
    <img src="styles/legend/35_Martedi_08_00_11_35_48_8.png" /> 9<br />\
    <img src="styles/legend/35_Martedi_08_00_11_35_48_9.png" /> 10<br />' });
var format_28_Martedi_08_00_11_35_49 = new ol.format.GeoJSON();
var features_28_Martedi_08_00_11_35_49 = format_28_Martedi_08_00_11_35_49.readFeatures(json_28_Martedi_08_00_11_35_49, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_28_Martedi_08_00_11_35_49 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_28_Martedi_08_00_11_35_49.addFeatures(features_28_Martedi_08_00_11_35_49);
var lyr_28_Martedi_08_00_11_35_49 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_28_Martedi_08_00_11_35_49, 
                style: style_28_Martedi_08_00_11_35_49,
                popuplayertitle: '28_Martedi_08_00_11_35',
                interactive: true,
    title: '28_Martedi_08_00_11_35<br />\
    <img src="styles/legend/28_Martedi_08_00_11_35_49_0.png" /> 1<br />\
    <img src="styles/legend/28_Martedi_08_00_11_35_49_1.png" /> 2<br />\
    <img src="styles/legend/28_Martedi_08_00_11_35_49_2.png" /> 3<br />\
    <img src="styles/legend/28_Martedi_08_00_11_35_49_3.png" /> 4<br />' });
var format_477_Lunedi_08_00_11_35_50 = new ol.format.GeoJSON();
var features_477_Lunedi_08_00_11_35_50 = format_477_Lunedi_08_00_11_35_50.readFeatures(json_477_Lunedi_08_00_11_35_50, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_477_Lunedi_08_00_11_35_50 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_477_Lunedi_08_00_11_35_50.addFeatures(features_477_Lunedi_08_00_11_35_50);
var lyr_477_Lunedi_08_00_11_35_50 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_477_Lunedi_08_00_11_35_50, 
                style: style_477_Lunedi_08_00_11_35_50,
                popuplayertitle: '477_Lunedi_08_00_11_35',
                interactive: true,
    title: '477_Lunedi_08_00_11_35<br />\
    <img src="styles/legend/477_Lunedi_08_00_11_35_50_0.png" /> 1<br />\
    <img src="styles/legend/477_Lunedi_08_00_11_35_50_1.png" /> 2<br />' });
var format_476_Lunedi_08_00_11_35_51 = new ol.format.GeoJSON();
var features_476_Lunedi_08_00_11_35_51 = format_476_Lunedi_08_00_11_35_51.readFeatures(json_476_Lunedi_08_00_11_35_51, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_476_Lunedi_08_00_11_35_51 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_476_Lunedi_08_00_11_35_51.addFeatures(features_476_Lunedi_08_00_11_35_51);
var lyr_476_Lunedi_08_00_11_35_51 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_476_Lunedi_08_00_11_35_51, 
                style: style_476_Lunedi_08_00_11_35_51,
                popuplayertitle: '476_Lunedi_08_00_11_35',
                interactive: true,
    title: '476_Lunedi_08_00_11_35<br />\
    <img src="styles/legend/476_Lunedi_08_00_11_35_51_0.png" /> 1<br />\
    <img src="styles/legend/476_Lunedi_08_00_11_35_51_1.png" /> 2<br />\
    <img src="styles/legend/476_Lunedi_08_00_11_35_51_2.png" /> 3<br />\
    <img src="styles/legend/476_Lunedi_08_00_11_35_51_3.png" /> 4<br />\
    <img src="styles/legend/476_Lunedi_08_00_11_35_51_4.png" /> 5<br />' });
var format_472_Lunedi_08_00_11_35_52 = new ol.format.GeoJSON();
var features_472_Lunedi_08_00_11_35_52 = format_472_Lunedi_08_00_11_35_52.readFeatures(json_472_Lunedi_08_00_11_35_52, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_472_Lunedi_08_00_11_35_52 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_472_Lunedi_08_00_11_35_52.addFeatures(features_472_Lunedi_08_00_11_35_52);
var lyr_472_Lunedi_08_00_11_35_52 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_472_Lunedi_08_00_11_35_52, 
                style: style_472_Lunedi_08_00_11_35_52,
                popuplayertitle: '472_Lunedi_08_00_11_35',
                interactive: true,
    title: '472_Lunedi_08_00_11_35<br />\
    <img src="styles/legend/472_Lunedi_08_00_11_35_52_0.png" /> 1<br />\
    <img src="styles/legend/472_Lunedi_08_00_11_35_52_1.png" /> 2<br />\
    <img src="styles/legend/472_Lunedi_08_00_11_35_52_2.png" /> 3<br />' });
var format_470_Lunedi_08_00_11_35_53 = new ol.format.GeoJSON();
var features_470_Lunedi_08_00_11_35_53 = format_470_Lunedi_08_00_11_35_53.readFeatures(json_470_Lunedi_08_00_11_35_53, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_470_Lunedi_08_00_11_35_53 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_470_Lunedi_08_00_11_35_53.addFeatures(features_470_Lunedi_08_00_11_35_53);
var lyr_470_Lunedi_08_00_11_35_53 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_470_Lunedi_08_00_11_35_53, 
                style: style_470_Lunedi_08_00_11_35_53,
                popuplayertitle: '470_Lunedi_08_00_11_35',
                interactive: true,
    title: '470_Lunedi_08_00_11_35<br />\
    <img src="styles/legend/470_Lunedi_08_00_11_35_53_0.png" /> 1<br />\
    <img src="styles/legend/470_Lunedi_08_00_11_35_53_1.png" /> 2<br />\
    <img src="styles/legend/470_Lunedi_08_00_11_35_53_2.png" /> 3<br />\
    <img src="styles/legend/470_Lunedi_08_00_11_35_53_3.png" /> 4<br />\
    <img src="styles/legend/470_Lunedi_08_00_11_35_53_4.png" /> 5<br />\
    <img src="styles/legend/470_Lunedi_08_00_11_35_53_5.png" /> 6<br />\
    <img src="styles/legend/470_Lunedi_08_00_11_35_53_6.png" /> 7<br />\
    <img src="styles/legend/470_Lunedi_08_00_11_35_53_7.png" /> 8<br />\
    <img src="styles/legend/470_Lunedi_08_00_11_35_53_8.png" /> 9<br />' });
var format_361_Lunedi_08_00_11_35_54 = new ol.format.GeoJSON();
var features_361_Lunedi_08_00_11_35_54 = format_361_Lunedi_08_00_11_35_54.readFeatures(json_361_Lunedi_08_00_11_35_54, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_361_Lunedi_08_00_11_35_54 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_361_Lunedi_08_00_11_35_54.addFeatures(features_361_Lunedi_08_00_11_35_54);
var lyr_361_Lunedi_08_00_11_35_54 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_361_Lunedi_08_00_11_35_54, 
                style: style_361_Lunedi_08_00_11_35_54,
                popuplayertitle: '361_Lunedi_08_00_11_35',
                interactive: true,
    title: '361_Lunedi_08_00_11_35<br />\
    <img src="styles/legend/361_Lunedi_08_00_11_35_54_0.png" /> 1<br />' });
var format_350_Lunedi_08_00_11_35_55 = new ol.format.GeoJSON();
var features_350_Lunedi_08_00_11_35_55 = format_350_Lunedi_08_00_11_35_55.readFeatures(json_350_Lunedi_08_00_11_35_55, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_350_Lunedi_08_00_11_35_55 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_350_Lunedi_08_00_11_35_55.addFeatures(features_350_Lunedi_08_00_11_35_55);
var lyr_350_Lunedi_08_00_11_35_55 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_350_Lunedi_08_00_11_35_55, 
                style: style_350_Lunedi_08_00_11_35_55,
                popuplayertitle: '350_Lunedi_08_00_11_35',
                interactive: true,
    title: '350_Lunedi_08_00_11_35<br />\
    <img src="styles/legend/350_Lunedi_08_00_11_35_55_0.png" /> 1<br />\
    <img src="styles/legend/350_Lunedi_08_00_11_35_55_1.png" /> 2<br />\
    <img src="styles/legend/350_Lunedi_08_00_11_35_55_2.png" /> 3<br />' });
var format_202_Lunedi_08_00_11_35_56 = new ol.format.GeoJSON();
var features_202_Lunedi_08_00_11_35_56 = format_202_Lunedi_08_00_11_35_56.readFeatures(json_202_Lunedi_08_00_11_35_56, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_202_Lunedi_08_00_11_35_56 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_202_Lunedi_08_00_11_35_56.addFeatures(features_202_Lunedi_08_00_11_35_56);
var lyr_202_Lunedi_08_00_11_35_56 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_202_Lunedi_08_00_11_35_56, 
                style: style_202_Lunedi_08_00_11_35_56,
                popuplayertitle: '202_Lunedi_08_00_11_35',
                interactive: true,
    title: '202_Lunedi_08_00_11_35<br />\
    <img src="styles/legend/202_Lunedi_08_00_11_35_56_0.png" /> 1<br />\
    <img src="styles/legend/202_Lunedi_08_00_11_35_56_1.png" /> 2<br />\
    <img src="styles/legend/202_Lunedi_08_00_11_35_56_2.png" /> 3<br />\
    <img src="styles/legend/202_Lunedi_08_00_11_35_56_3.png" /> 4<br />' });
var format_201_Lunedi_08_00_11_35_57 = new ol.format.GeoJSON();
var features_201_Lunedi_08_00_11_35_57 = format_201_Lunedi_08_00_11_35_57.readFeatures(json_201_Lunedi_08_00_11_35_57, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_201_Lunedi_08_00_11_35_57 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_201_Lunedi_08_00_11_35_57.addFeatures(features_201_Lunedi_08_00_11_35_57);
var lyr_201_Lunedi_08_00_11_35_57 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_201_Lunedi_08_00_11_35_57, 
                style: style_201_Lunedi_08_00_11_35_57,
                popuplayertitle: '201_Lunedi_08_00_11_35',
                interactive: true,
    title: '201_Lunedi_08_00_11_35<br />\
    <img src="styles/legend/201_Lunedi_08_00_11_35_57_0.png" /> 1<br />\
    <img src="styles/legend/201_Lunedi_08_00_11_35_57_1.png" /> 2<br />\
    <img src="styles/legend/201_Lunedi_08_00_11_35_57_2.png" /> 3<br />\
    <img src="styles/legend/201_Lunedi_08_00_11_35_57_3.png" /> 4<br />\
    <img src="styles/legend/201_Lunedi_08_00_11_35_57_4.png" /> 5<br />\
    <img src="styles/legend/201_Lunedi_08_00_11_35_57_5.png" /> 6<br />\
    <img src="styles/legend/201_Lunedi_08_00_11_35_57_6.png" /> 7<br />\
    <img src="styles/legend/201_Lunedi_08_00_11_35_57_7.png" /> 8<br />\
    <img src="styles/legend/201_Lunedi_08_00_11_35_57_8.png" /> 9<br />' });
var format_85_Lunedi_08_00_11_35_58 = new ol.format.GeoJSON();
var features_85_Lunedi_08_00_11_35_58 = format_85_Lunedi_08_00_11_35_58.readFeatures(json_85_Lunedi_08_00_11_35_58, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_85_Lunedi_08_00_11_35_58 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_85_Lunedi_08_00_11_35_58.addFeatures(features_85_Lunedi_08_00_11_35_58);
var lyr_85_Lunedi_08_00_11_35_58 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_85_Lunedi_08_00_11_35_58, 
                style: style_85_Lunedi_08_00_11_35_58,
                popuplayertitle: '85_Lunedi_08_00_11_35',
                interactive: true,
    title: '85_Lunedi_08_00_11_35<br />\
    <img src="styles/legend/85_Lunedi_08_00_11_35_58_0.png" /> 1<br />\
    <img src="styles/legend/85_Lunedi_08_00_11_35_58_1.png" /> 2<br />\
    <img src="styles/legend/85_Lunedi_08_00_11_35_58_2.png" /> 3<br />\
    <img src="styles/legend/85_Lunedi_08_00_11_35_58_3.png" /> 4<br />\
    <img src="styles/legend/85_Lunedi_08_00_11_35_58_4.png" /> 5<br />\
    <img src="styles/legend/85_Lunedi_08_00_11_35_58_5.png" /> 6<br />\
    <img src="styles/legend/85_Lunedi_08_00_11_35_58_6.png" /> 7<br />\
    <img src="styles/legend/85_Lunedi_08_00_11_35_58_7.png" /> 8<br />\
    <img src="styles/legend/85_Lunedi_08_00_11_35_58_8.png" /> 9<br />\
    <img src="styles/legend/85_Lunedi_08_00_11_35_58_9.png" /> 10<br />' });
var format_82_Lunedi_08_00_11_35_59 = new ol.format.GeoJSON();
var features_82_Lunedi_08_00_11_35_59 = format_82_Lunedi_08_00_11_35_59.readFeatures(json_82_Lunedi_08_00_11_35_59, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_82_Lunedi_08_00_11_35_59 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_82_Lunedi_08_00_11_35_59.addFeatures(features_82_Lunedi_08_00_11_35_59);
var lyr_82_Lunedi_08_00_11_35_59 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_82_Lunedi_08_00_11_35_59, 
                style: style_82_Lunedi_08_00_11_35_59,
                popuplayertitle: '82_Lunedi_08_00_11_35',
                interactive: true,
    title: '82_Lunedi_08_00_11_35<br />\
    <img src="styles/legend/82_Lunedi_08_00_11_35_59_0.png" /> 1<br />\
    <img src="styles/legend/82_Lunedi_08_00_11_35_59_1.png" /> 2<br />\
    <img src="styles/legend/82_Lunedi_08_00_11_35_59_2.png" /> 3<br />\
    <img src="styles/legend/82_Lunedi_08_00_11_35_59_3.png" /> 4<br />\
    <img src="styles/legend/82_Lunedi_08_00_11_35_59_4.png" /> 5<br />\
    <img src="styles/legend/82_Lunedi_08_00_11_35_59_5.png" /> 6<br />\
    <img src="styles/legend/82_Lunedi_08_00_11_35_59_6.png" /> 7<br />' });
var format_35_Lunedi_08_00_11_35_60 = new ol.format.GeoJSON();
var features_35_Lunedi_08_00_11_35_60 = format_35_Lunedi_08_00_11_35_60.readFeatures(json_35_Lunedi_08_00_11_35_60, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_35_Lunedi_08_00_11_35_60 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_35_Lunedi_08_00_11_35_60.addFeatures(features_35_Lunedi_08_00_11_35_60);
var lyr_35_Lunedi_08_00_11_35_60 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_35_Lunedi_08_00_11_35_60, 
                style: style_35_Lunedi_08_00_11_35_60,
                popuplayertitle: '35_Lunedi_08_00_11_35',
                interactive: true,
    title: '35_Lunedi_08_00_11_35<br />\
    <img src="styles/legend/35_Lunedi_08_00_11_35_60_0.png" /> 1<br />\
    <img src="styles/legend/35_Lunedi_08_00_11_35_60_1.png" /> 2<br />\
    <img src="styles/legend/35_Lunedi_08_00_11_35_60_2.png" /> 3<br />\
    <img src="styles/legend/35_Lunedi_08_00_11_35_60_3.png" /> 4<br />\
    <img src="styles/legend/35_Lunedi_08_00_11_35_60_4.png" /> 5<br />\
    <img src="styles/legend/35_Lunedi_08_00_11_35_60_5.png" /> 6<br />\
    <img src="styles/legend/35_Lunedi_08_00_11_35_60_6.png" /> 7<br />\
    <img src="styles/legend/35_Lunedi_08_00_11_35_60_7.png" /> 8<br />\
    <img src="styles/legend/35_Lunedi_08_00_11_35_60_8.png" /> 9<br />\
    <img src="styles/legend/35_Lunedi_08_00_11_35_60_9.png" /> 10<br />' });
var format_28_Lunedi_08_00_11_35_61 = new ol.format.GeoJSON();
var features_28_Lunedi_08_00_11_35_61 = format_28_Lunedi_08_00_11_35_61.readFeatures(json_28_Lunedi_08_00_11_35_61, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_28_Lunedi_08_00_11_35_61 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_28_Lunedi_08_00_11_35_61.addFeatures(features_28_Lunedi_08_00_11_35_61);
var lyr_28_Lunedi_08_00_11_35_61 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_28_Lunedi_08_00_11_35_61, 
                style: style_28_Lunedi_08_00_11_35_61,
                popuplayertitle: '28_Lunedi_08_00_11_35',
                interactive: true,
    title: '28_Lunedi_08_00_11_35<br />\
    <img src="styles/legend/28_Lunedi_08_00_11_35_61_0.png" /> 1<br />\
    <img src="styles/legend/28_Lunedi_08_00_11_35_61_1.png" /> 2<br />\
    <img src="styles/legend/28_Lunedi_08_00_11_35_61_2.png" /> 3<br />\
    <img src="styles/legend/28_Lunedi_08_00_11_35_61_3.png" /> 4<br />' });
var group_Lunedi = new ol.layer.Group({
                                layers: [lyr_477_Lunedi_08_00_11_35_50,lyr_476_Lunedi_08_00_11_35_51,lyr_472_Lunedi_08_00_11_35_52,lyr_470_Lunedi_08_00_11_35_53,lyr_361_Lunedi_08_00_11_35_54,lyr_350_Lunedi_08_00_11_35_55,lyr_202_Lunedi_08_00_11_35_56,lyr_201_Lunedi_08_00_11_35_57,lyr_85_Lunedi_08_00_11_35_58,lyr_82_Lunedi_08_00_11_35_59,lyr_35_Lunedi_08_00_11_35_60,lyr_28_Lunedi_08_00_11_35_61,],
                                fold: 'close',
                                title: 'Lunedi'});
var group_Martedi = new ol.layer.Group({
                                layers: [lyr_477_Martedi_08_00_11_35_38,lyr_476_Martedi_08_00_11_35_39,lyr_472_Martedi_08_00_11_35_40,lyr_470_Martedi_08_00_11_35_41,lyr_361_Martedi_08_00_11_35_42,lyr_350_Martedi_08_00_11_35_43,lyr_202_Martedi_08_00_11_35_44,lyr_201_Martedi_08_00_11_35_45,lyr_85_Martedi_08_00_11_35_46,lyr_82_Martedi_08_00_11_35_47,lyr_35_Martedi_08_00_11_35_48,lyr_28_Martedi_08_00_11_35_49,],
                                fold: 'close',
                                title: 'Martedi'});
var group_Mercoledi = new ol.layer.Group({
                                layers: [lyr_477_Mercoledi_08_00_11_35_26,lyr_476_Mercoledi_08_00_11_35_27,lyr_472_Mercoledi_08_00_11_35_28,lyr_470_Mercoledi_08_00_11_35_29,lyr_361_Mercoledi_08_00_11_35_30,lyr_350_Mercoledi_05_30_08_00_31,lyr_202_Mercoledi_08_00_11_35_32,lyr_201_Mercoledi_08_00_11_35_33,lyr_85_Mercoledi_08_00_11_35_34,lyr_82_Mercoledi_08_00_11_35_35,lyr_35_Mercoledi_08_00_11_35_36,lyr_28_Mercoledi_08_00_11_35_37,],
                                fold: 'close',
                                title: 'Mercoledi'});
var group_Giovedi = new ol.layer.Group({
                                layers: [lyr_477_Giovedi_08_00_11_35_14,lyr_476_Giovedi_08_00_11_35_15,lyr_472_Giovedi_08_00_11_35_16,lyr_470_Giovedi_08_00_11_35_17,lyr_361_Giovedi_08_00_11_35_18,lyr_350_Giovedi_08_00_11_35_19,lyr_202_Giovedi_08_00_11_35_20,lyr_201_Giovedi_08_00_11_35_21,lyr_85_Giovedi_08_00_11_35_22,lyr_82_Giovedi_08_00_11_35_23,lyr_35_Giovedi_08_00_11_35_24,lyr_28_Giovedi_08_00_11_35_25,],
                                fold: 'close',
                                title: 'Giovedi'});
var group_Venerdi = new ol.layer.Group({
                                layers: [lyr_477_Venerdi_08_00_11_35_2,lyr_476_Venerdi_08_00_11_35_3,lyr_472_Venerdi_08_00_11_35_4,lyr_470_Venerdi_08_00_11_35_5,lyr_361_Venerdi_08_00_11_35_6,lyr_350_Venerdi_08_00_11_35_7,lyr_202_Venerdi_08_00_11_35_8,lyr_201_Venerdi_08_00_11_35_9,lyr_85_Venerdi_08_00_11_35_10,lyr_82_Venerdi_08_00_11_35_11,lyr_35_Venerdi_08_00_11_35_12,lyr_28_Venerdi_08_00_11_35_13,],
                                fold: 'close',
                                title: 'Venerdi'});

lyr_OpenStreetMap_0.setVisible(true);lyr_Confini_Comune_Milanodissolto_1.setVisible(true);lyr_477_Venerdi_08_00_11_35_2.setVisible(false);lyr_476_Venerdi_08_00_11_35_3.setVisible(false);lyr_472_Venerdi_08_00_11_35_4.setVisible(false);lyr_470_Venerdi_08_00_11_35_5.setVisible(false);lyr_361_Venerdi_08_00_11_35_6.setVisible(false);lyr_350_Venerdi_08_00_11_35_7.setVisible(false);lyr_202_Venerdi_08_00_11_35_8.setVisible(false);lyr_201_Venerdi_08_00_11_35_9.setVisible(false);lyr_85_Venerdi_08_00_11_35_10.setVisible(false);lyr_82_Venerdi_08_00_11_35_11.setVisible(false);lyr_35_Venerdi_08_00_11_35_12.setVisible(false);lyr_28_Venerdi_08_00_11_35_13.setVisible(false);lyr_477_Giovedi_08_00_11_35_14.setVisible(false);lyr_476_Giovedi_08_00_11_35_15.setVisible(false);lyr_472_Giovedi_08_00_11_35_16.setVisible(false);lyr_470_Giovedi_08_00_11_35_17.setVisible(false);lyr_361_Giovedi_08_00_11_35_18.setVisible(false);lyr_350_Giovedi_08_00_11_35_19.setVisible(false);lyr_202_Giovedi_08_00_11_35_20.setVisible(false);lyr_201_Giovedi_08_00_11_35_21.setVisible(false);lyr_85_Giovedi_08_00_11_35_22.setVisible(false);lyr_82_Giovedi_08_00_11_35_23.setVisible(false);lyr_35_Giovedi_08_00_11_35_24.setVisible(false);lyr_28_Giovedi_08_00_11_35_25.setVisible(false);lyr_477_Mercoledi_08_00_11_35_26.setVisible(false);lyr_476_Mercoledi_08_00_11_35_27.setVisible(false);lyr_472_Mercoledi_08_00_11_35_28.setVisible(false);lyr_470_Mercoledi_08_00_11_35_29.setVisible(false);lyr_361_Mercoledi_08_00_11_35_30.setVisible(false);lyr_350_Mercoledi_05_30_08_00_31.setVisible(false);lyr_202_Mercoledi_08_00_11_35_32.setVisible(false);lyr_201_Mercoledi_08_00_11_35_33.setVisible(false);lyr_85_Mercoledi_08_00_11_35_34.setVisible(false);lyr_82_Mercoledi_08_00_11_35_35.setVisible(false);lyr_35_Mercoledi_08_00_11_35_36.setVisible(false);lyr_28_Mercoledi_08_00_11_35_37.setVisible(false);lyr_477_Martedi_08_00_11_35_38.setVisible(false);lyr_476_Martedi_08_00_11_35_39.setVisible(false);lyr_472_Martedi_08_00_11_35_40.setVisible(false);lyr_470_Martedi_08_00_11_35_41.setVisible(false);lyr_361_Martedi_08_00_11_35_42.setVisible(false);lyr_350_Martedi_08_00_11_35_43.setVisible(false);lyr_202_Martedi_08_00_11_35_44.setVisible(false);lyr_201_Martedi_08_00_11_35_45.setVisible(false);lyr_85_Martedi_08_00_11_35_46.setVisible(false);lyr_82_Martedi_08_00_11_35_47.setVisible(false);lyr_35_Martedi_08_00_11_35_48.setVisible(false);lyr_28_Martedi_08_00_11_35_49.setVisible(false);lyr_477_Lunedi_08_00_11_35_50.setVisible(false);lyr_476_Lunedi_08_00_11_35_51.setVisible(false);lyr_472_Lunedi_08_00_11_35_52.setVisible(false);lyr_470_Lunedi_08_00_11_35_53.setVisible(false);lyr_361_Lunedi_08_00_11_35_54.setVisible(false);lyr_350_Lunedi_08_00_11_35_55.setVisible(false);lyr_202_Lunedi_08_00_11_35_56.setVisible(false);lyr_201_Lunedi_08_00_11_35_57.setVisible(true);lyr_85_Lunedi_08_00_11_35_58.setVisible(false);lyr_82_Lunedi_08_00_11_35_59.setVisible(false);lyr_35_Lunedi_08_00_11_35_60.setVisible(false);lyr_28_Lunedi_08_00_11_35_61.setVisible(false);
var layersList = [lyr_OpenStreetMap_0,lyr_Confini_Comune_Milanodissolto_1,group_Venerdi,group_Giovedi,group_Mercoledi,group_Martedi,group_Lunedi];
lyr_Confini_Comune_Milanodissolto_1.set('fieldAliases', {'fid': 'fid', 'AREA': 'AREA', 'PERIMETRO': 'PERIMETRO', });
lyr_477_Venerdi_08_00_11_35_2.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'tipo_giorn': 'tipo_giorn', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_476_Venerdi_08_00_11_35_3.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'tipo_giorn': 'tipo_giorn', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_472_Venerdi_08_00_11_35_4.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'tipo_giorn': 'tipo_giorn', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_470_Venerdi_08_00_11_35_5.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'tipo_giorn': 'tipo_giorn', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_361_Venerdi_08_00_11_35_6.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'tipo_giorn': 'tipo_giorn', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_350_Venerdi_08_00_11_35_7.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'tipo_giorn': 'tipo_giorn', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_202_Venerdi_08_00_11_35_8.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'tipo_giorn': 'tipo_giorn', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_201_Venerdi_08_00_11_35_9.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'tipo_giorn': 'tipo_giorn', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_85_Venerdi_08_00_11_35_10.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'tipo_giorn': 'tipo_giorn', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_82_Venerdi_08_00_11_35_11.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'tipo_giorn': 'tipo_giorn', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_35_Venerdi_08_00_11_35_12.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'tipo_giorn': 'tipo_giorn', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_28_Venerdi_08_00_11_35_13.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'tipo_giorn': 'tipo_giorn', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_477_Giovedi_08_00_11_35_14.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'tipo_giorn': 'tipo_giorn', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_476_Giovedi_08_00_11_35_15.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'tipo_giorn': 'tipo_giorn', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_472_Giovedi_08_00_11_35_16.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'tipo_giorn': 'tipo_giorn', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_470_Giovedi_08_00_11_35_17.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'tipo_giorn': 'tipo_giorn', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_361_Giovedi_08_00_11_35_18.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'tipo_giorn': 'tipo_giorn', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_350_Giovedi_08_00_11_35_19.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'tipo_giorn': 'tipo_giorn', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_202_Giovedi_08_00_11_35_20.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'tipo_giorn': 'tipo_giorn', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_201_Giovedi_08_00_11_35_21.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'tipo_giorn': 'tipo_giorn', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_85_Giovedi_08_00_11_35_22.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'tipo_giorn': 'tipo_giorn', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_82_Giovedi_08_00_11_35_23.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'tipo_giorn': 'tipo_giorn', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_35_Giovedi_08_00_11_35_24.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'tipo_giorn': 'tipo_giorn', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_28_Giovedi_08_00_11_35_25.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'tipo_giorn': 'tipo_giorn', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_477_Mercoledi_08_00_11_35_26.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'tipo_giorn': 'tipo_giorn', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_476_Mercoledi_08_00_11_35_27.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'tipo_giorn': 'tipo_giorn', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_472_Mercoledi_08_00_11_35_28.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'tipo_giorn': 'tipo_giorn', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_470_Mercoledi_08_00_11_35_29.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'tipo_giorn': 'tipo_giorn', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_361_Mercoledi_08_00_11_35_30.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'tipo_giorn': 'tipo_giorn', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_350_Mercoledi_05_30_08_00_31.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'tipo_giorn': 'tipo_giorn', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_202_Mercoledi_08_00_11_35_32.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'tipo_giorn': 'tipo_giorn', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_201_Mercoledi_08_00_11_35_33.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'tipo_giorn': 'tipo_giorn', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_85_Mercoledi_08_00_11_35_34.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'tipo_giorn': 'tipo_giorn', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_82_Mercoledi_08_00_11_35_35.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'tipo_giorn': 'tipo_giorn', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_35_Mercoledi_08_00_11_35_36.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'tipo_giorn': 'tipo_giorn', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_28_Mercoledi_08_00_11_35_37.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'tipo_giorn': 'tipo_giorn', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_477_Martedi_08_00_11_35_38.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'tipo_giorn': 'tipo_giorn', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_476_Martedi_08_00_11_35_39.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'tipo_giorn': 'tipo_giorn', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_472_Martedi_08_00_11_35_40.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'tipo_giorn': 'tipo_giorn', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_470_Martedi_08_00_11_35_41.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'tipo_giorn': 'tipo_giorn', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_361_Martedi_08_00_11_35_42.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'tipo_giorn': 'tipo_giorn', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_350_Martedi_08_00_11_35_43.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'tipo_giorn': 'tipo_giorn', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_202_Martedi_08_00_11_35_44.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'tipo_giorn': 'tipo_giorn', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_201_Martedi_08_00_11_35_45.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'tipo_giorn': 'tipo_giorn', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_85_Martedi_08_00_11_35_46.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'tipo_giorn': 'tipo_giorn', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_82_Martedi_08_00_11_35_47.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'tipo_giorn': 'tipo_giorn', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_35_Martedi_08_00_11_35_48.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'tipo_giorn': 'tipo_giorn', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_28_Martedi_08_00_11_35_49.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'tipo_giorn': 'tipo_giorn', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_477_Lunedi_08_00_11_35_50.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'tipo_giorn': 'tipo_giorn', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_476_Lunedi_08_00_11_35_51.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'tipo_giorn': 'tipo_giorn', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_472_Lunedi_08_00_11_35_52.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'tipo_giorn': 'tipo_giorn', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_470_Lunedi_08_00_11_35_53.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'tipo_giorn': 'tipo_giorn', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_361_Lunedi_08_00_11_35_54.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'tipo_giorn': 'tipo_giorn', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_350_Lunedi_08_00_11_35_55.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'tipo_giorn': 'tipo_giorn', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_202_Lunedi_08_00_11_35_56.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'tipo_giorn': 'tipo_giorn', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_201_Lunedi_08_00_11_35_57.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'tipo_giorn': 'tipo_giorn', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_85_Lunedi_08_00_11_35_58.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'tipo_giorn': 'tipo_giorn', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_82_Lunedi_08_00_11_35_59.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'tipo_giorn': 'tipo_giorn', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_35_Lunedi_08_00_11_35_60.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'tipo_giorn': 'tipo_giorn', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_28_Lunedi_08_00_11_35_61.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'tipo_giorn': 'tipo_giorn', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_Confini_Comune_Milanodissolto_1.set('fieldImages', {'fid': 'TextEdit', 'AREA': 'TextEdit', 'PERIMETRO': 'TextEdit', });
lyr_477_Venerdi_08_00_11_35_2.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'giorno': '', 'tipo_giorn': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_476_Venerdi_08_00_11_35_3.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'giorno': '', 'tipo_giorn': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_472_Venerdi_08_00_11_35_4.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'giorno': '', 'tipo_giorn': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_470_Venerdi_08_00_11_35_5.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'giorno': '', 'tipo_giorn': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_361_Venerdi_08_00_11_35_6.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'giorno': '', 'tipo_giorn': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_350_Venerdi_08_00_11_35_7.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'giorno': '', 'tipo_giorn': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_202_Venerdi_08_00_11_35_8.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'giorno': '', 'tipo_giorn': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_201_Venerdi_08_00_11_35_9.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'giorno': '', 'tipo_giorn': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_85_Venerdi_08_00_11_35_10.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'giorno': '', 'tipo_giorn': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_82_Venerdi_08_00_11_35_11.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'giorno': '', 'tipo_giorn': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_35_Venerdi_08_00_11_35_12.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'giorno': '', 'tipo_giorn': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_28_Venerdi_08_00_11_35_13.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'giorno': '', 'tipo_giorn': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_477_Giovedi_08_00_11_35_14.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'giorno': '', 'tipo_giorn': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_476_Giovedi_08_00_11_35_15.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'giorno': '', 'tipo_giorn': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_472_Giovedi_08_00_11_35_16.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'giorno': '', 'tipo_giorn': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_470_Giovedi_08_00_11_35_17.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'giorno': '', 'tipo_giorn': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_361_Giovedi_08_00_11_35_18.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'giorno': '', 'tipo_giorn': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_350_Giovedi_08_00_11_35_19.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'giorno': '', 'tipo_giorn': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_202_Giovedi_08_00_11_35_20.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'giorno': '', 'tipo_giorn': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_201_Giovedi_08_00_11_35_21.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'giorno': '', 'tipo_giorn': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_85_Giovedi_08_00_11_35_22.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'giorno': '', 'tipo_giorn': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_82_Giovedi_08_00_11_35_23.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'giorno': '', 'tipo_giorn': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_35_Giovedi_08_00_11_35_24.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'giorno': '', 'tipo_giorn': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_28_Giovedi_08_00_11_35_25.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'giorno': '', 'tipo_giorn': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_477_Mercoledi_08_00_11_35_26.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'giorno': '', 'tipo_giorn': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_476_Mercoledi_08_00_11_35_27.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'giorno': '', 'tipo_giorn': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_472_Mercoledi_08_00_11_35_28.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'giorno': '', 'tipo_giorn': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_470_Mercoledi_08_00_11_35_29.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'giorno': '', 'tipo_giorn': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_361_Mercoledi_08_00_11_35_30.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'giorno': '', 'tipo_giorn': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_350_Mercoledi_05_30_08_00_31.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'giorno': '', 'tipo_giorn': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_202_Mercoledi_08_00_11_35_32.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'giorno': '', 'tipo_giorn': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_201_Mercoledi_08_00_11_35_33.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'giorno': '', 'tipo_giorn': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_85_Mercoledi_08_00_11_35_34.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'giorno': '', 'tipo_giorn': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_82_Mercoledi_08_00_11_35_35.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'giorno': '', 'tipo_giorn': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_35_Mercoledi_08_00_11_35_36.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'giorno': '', 'tipo_giorn': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_28_Mercoledi_08_00_11_35_37.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'giorno': '', 'tipo_giorn': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_477_Martedi_08_00_11_35_38.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'giorno': '', 'tipo_giorn': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_476_Martedi_08_00_11_35_39.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'giorno': '', 'tipo_giorn': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_472_Martedi_08_00_11_35_40.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'giorno': '', 'tipo_giorn': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_470_Martedi_08_00_11_35_41.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'giorno': '', 'tipo_giorn': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_361_Martedi_08_00_11_35_42.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'giorno': '', 'tipo_giorn': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_350_Martedi_08_00_11_35_43.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'giorno': '', 'tipo_giorn': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_202_Martedi_08_00_11_35_44.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'giorno': '', 'tipo_giorn': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_201_Martedi_08_00_11_35_45.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'giorno': '', 'tipo_giorn': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_85_Martedi_08_00_11_35_46.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'giorno': '', 'tipo_giorn': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_82_Martedi_08_00_11_35_47.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'giorno': '', 'tipo_giorn': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_35_Martedi_08_00_11_35_48.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'giorno': '', 'tipo_giorn': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_28_Martedi_08_00_11_35_49.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'giorno': '', 'tipo_giorn': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_477_Lunedi_08_00_11_35_50.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'giorno': '', 'tipo_giorn': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_476_Lunedi_08_00_11_35_51.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'giorno': '', 'tipo_giorn': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_472_Lunedi_08_00_11_35_52.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'giorno': '', 'tipo_giorn': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_470_Lunedi_08_00_11_35_53.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'giorno': '', 'tipo_giorn': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_361_Lunedi_08_00_11_35_54.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'giorno': '', 'tipo_giorn': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_350_Lunedi_08_00_11_35_55.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'giorno': '', 'tipo_giorn': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_202_Lunedi_08_00_11_35_56.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'giorno': '', 'tipo_giorn': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_201_Lunedi_08_00_11_35_57.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'giorno': '', 'tipo_giorn': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_85_Lunedi_08_00_11_35_58.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'giorno': '', 'tipo_giorn': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_82_Lunedi_08_00_11_35_59.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'giorno': '', 'tipo_giorn': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_35_Lunedi_08_00_11_35_60.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'giorno': '', 'tipo_giorn': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_28_Lunedi_08_00_11_35_61.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'giorno': '', 'tipo_giorn': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_Confini_Comune_Milanodissolto_1.set('fieldLabels', {'fid': 'inline label - always visible', 'AREA': 'inline label - always visible', 'PERIMETRO': 'inline label - always visible', });
lyr_477_Venerdi_08_00_11_35_2.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_476_Venerdi_08_00_11_35_3.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_472_Venerdi_08_00_11_35_4.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_470_Venerdi_08_00_11_35_5.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_361_Venerdi_08_00_11_35_6.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_350_Venerdi_08_00_11_35_7.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_202_Venerdi_08_00_11_35_8.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_201_Venerdi_08_00_11_35_9.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_85_Venerdi_08_00_11_35_10.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_82_Venerdi_08_00_11_35_11.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_35_Venerdi_08_00_11_35_12.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_28_Venerdi_08_00_11_35_13.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_477_Giovedi_08_00_11_35_14.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_476_Giovedi_08_00_11_35_15.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_472_Giovedi_08_00_11_35_16.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_470_Giovedi_08_00_11_35_17.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_361_Giovedi_08_00_11_35_18.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_350_Giovedi_08_00_11_35_19.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_202_Giovedi_08_00_11_35_20.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_201_Giovedi_08_00_11_35_21.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_85_Giovedi_08_00_11_35_22.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_82_Giovedi_08_00_11_35_23.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_35_Giovedi_08_00_11_35_24.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_28_Giovedi_08_00_11_35_25.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_477_Mercoledi_08_00_11_35_26.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_476_Mercoledi_08_00_11_35_27.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_472_Mercoledi_08_00_11_35_28.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_470_Mercoledi_08_00_11_35_29.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_361_Mercoledi_08_00_11_35_30.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_350_Mercoledi_05_30_08_00_31.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_202_Mercoledi_08_00_11_35_32.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_201_Mercoledi_08_00_11_35_33.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_85_Mercoledi_08_00_11_35_34.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_82_Mercoledi_08_00_11_35_35.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_35_Mercoledi_08_00_11_35_36.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_28_Mercoledi_08_00_11_35_37.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_477_Martedi_08_00_11_35_38.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_476_Martedi_08_00_11_35_39.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_472_Martedi_08_00_11_35_40.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_470_Martedi_08_00_11_35_41.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_361_Martedi_08_00_11_35_42.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_350_Martedi_08_00_11_35_43.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_202_Martedi_08_00_11_35_44.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_201_Martedi_08_00_11_35_45.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_85_Martedi_08_00_11_35_46.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_82_Martedi_08_00_11_35_47.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_35_Martedi_08_00_11_35_48.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_28_Martedi_08_00_11_35_49.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_477_Lunedi_08_00_11_35_50.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_476_Lunedi_08_00_11_35_51.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_472_Lunedi_08_00_11_35_52.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_470_Lunedi_08_00_11_35_53.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_361_Lunedi_08_00_11_35_54.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_350_Lunedi_08_00_11_35_55.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_202_Lunedi_08_00_11_35_56.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_201_Lunedi_08_00_11_35_57.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_85_Lunedi_08_00_11_35_58.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_82_Lunedi_08_00_11_35_59.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_35_Lunedi_08_00_11_35_60.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_28_Lunedi_08_00_11_35_61.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_28_Lunedi_08_00_11_35_61.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});