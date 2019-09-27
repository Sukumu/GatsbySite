(function(){
function ac_add_to_head(el){
	var head = document.getElementsByTagName('head')[0];
	head.insertBefore(el,head.firstChild);
}
function ac_add_link(url){
	var el = document.createElement('link');
	el.rel='stylesheet';el.type='text/css';el.media='all';el.href=url;
	ac_add_to_head(el);
}
function ac_add_style(css){
	var ac_style = document.createElement('style');
	if (ac_style.styleSheet) ac_style.styleSheet.cssText = css;
	else ac_style.appendChild(document.createTextNode(css));
	ac_add_to_head(ac_style);
}

ac_add_link('https://cdn.jsdelivr.net/gh/Sukumu/GatsbySite@latest/src/components/all.sass');
ac_add_link('https://cdn.anychart.com/releases/8.7.0/css/anychart-ui.min.css');
ac_add_link('https://cdn.anychart.com/releases/v8/fonts/css/anychart-font.min.css');
ac_add_style(document.getElementById("SukumuStyle").innerHTML);
ac_add_style(".SukumuDiv{width:600px;height:450px;}");
})();

anychart.onDocumentReady(function () {

//**********************************************************************
var api_key = "demo";    
var data_type = "csv";
var FXfunction =  "FX_DAILY";    //document.getElementById("Forex_Function").innerHTML; //FunctionObj.options[FunctionObj.selectedIndex].text; 
var from_symbol =  "EUR";   //str.substring(0, str.indexOf("/"));
var to_symbol = "USD";    //str.substring(lastSlash+1)
var pair = from_symbol + to_symbol;
var today = new Date();
var getCSV = "https://www.alphavantage.co/query?"+"function="+FXfunction+"&from_symbol="+from_symbol+"&to_symbol="+to_symbol+"&apikey="+api_key+"&datatype="+data_type;
//**********************************************************************

//anychart.data.loadCsvFile(getCSV, function (data) {
     var dataTable = anychart.data.table();
     dataTable.addData(get_csco_daily_short_data());
      //dataTable.addData(data);
      
    //var mapping = dataTable.mapAs({'open': 1, 'high': 2, 'low': 3, 'close': 4});
    var mapping = dataTable.mapAs({"value": 1, "value": 2, "value": 3, "value": 4});  
    var chart = anychart.stock(); 
    plot = chart.plot(0);  
    var series = plot.line(mapping);
    series.name(pair);  
    chart.title(FXfunction);
    chart.container("container"); 
    chart.draw();

    // reset the select list to the first option
    chart.listen("annotationDrawingFinish", function(){document.getElementById("typeSelect").value = "default";});

});

// create annotations
function create() {var select = document.getElementById("typeSelect");
  plot.annotations().startDrawing(select.value);}

// remove all annotations
function removeAll() {plot.annotations().removeAllAnnotations();}
