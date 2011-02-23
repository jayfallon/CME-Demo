//date for page blotter
$(function(){
  var m_names = new Array("Jan", "Feb", "Mar", 
  "Apr", "May", "Jun", "Jul", "Aug", "Sep", 
  "Oct", "Nov", "Dec");

  var d = new Date();
  var curr_date = d.getDate();
  var curr_month = d.getMonth();
  var curr_year = d.getFullYear();
 
	$("#fullBlotter tbody tr td:nth-child(9), #fullBlotter tbody tr td:nth-child(11)").text(curr_date + " " + m_names[curr_month] + " " + curr_year);
	
});

//full blotter table styling and sorting
$(function(){
  $("#fullBlotterWrap table").tablesorter({widgets: ['zebra']});
  $("#fullBlotterWrap tr td:nth-child(1)").addClass("right");
  $("#fullBlotterWrap tr td:nth-child(7)").addClass("right");
  $("#fullBlotterWrap tr td:nth-child(3)").addClass("left");
  $("#fullBlotterWrap tr td:nth-child(8)").addClass("left");
  $("td#buy.selected, td#sell.selected, td#twoway.selected").text('');
});