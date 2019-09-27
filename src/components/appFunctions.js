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
