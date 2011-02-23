//add clearing statement to blotter
$(function(){
  $("#blotterWrap #blotter table tbody tr td:nth-child(6)").text("ClearPort® clearing successful");
  $("#blotterWrap #blotter table tbody tr:lt(3) td:nth-child(6)").text("CME Group clearing successful");
});

//date for page blotter
$(function(){
  var m_names = new Array("Jan", "Feb", "Mar", 
  "Apr", "May", "Jun", "Jul", "Aug", "Sep", 
  "Oct", "Nov", "Dec");

  var d = new Date();
	var hour = d.getHours();
	var minute = d.getMinutes();
  var curr_date = d.getDate();
  var curr_month = d.getMonth();
  var curr_year = d.getFullYear();
  $("#blotterWrap #blotter table tbody tr td:nth-child(1)").text(curr_date + " " + m_names[curr_month] + " " + curr_year);
  $('#execDate span').text(curr_date + " " + m_names[curr_month] + " " + curr_year);
	$('#execTime span').text(hour + ":" + minute);
	
});

//blotter table styling and sorting
$(function(){
  $("#blotter table").tablesorter({widgets: ['zebra'], headers:{1:{sorter:false}}});
  $("#blotter tr td:nth-child(4)").addClass("center");
});