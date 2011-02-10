

//blotter table styling and sorting
$(function(){
  $("#blotter table").tablesorter({widgets: ['zebra'], headers:{1:{sorter:false}}});
  $("#blotter tr td:nth-child(4)").addClass("center");
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

//oversized numerals in stream for static data
$(function(){
  $('#myBuy li.oneway ul li, #mySell li.oneway ul li').each(function() {
      $(this).html(
          $(this).html().substr(0, $(this).html().length-3)
          + "<span style='font-size: 24px'>"
          + $(this).html().substr(-3)
          + "</span>");
      $('<a href="#" class="executeButton">Execute</a>').appendTo(this);
  });
  

  $('#myBuy01 li, #mySell01 li').each(function() {
      $(this).html(
          $(this).html().substr(0, $(this).html().length-3)
          + "<span style='font-size: 24px'>"
          + $(this).html().substr(-3)
          + "</span>");
      $('<input name="mySwap01_rdo" value="" id="" type="radio" />').appendTo(this);
  });
  
  $('#myBuy02 li, #mySell02 li').each(function() {
      $(this).html(
          $(this).html().substr(0, $(this).html().length-3)
          + "<span style='font-size: 24px'>"
          + $(this).html().substr(-3)
          + "</span>");
      $('<input name="mySwap02_rdo" value="" id="" type="radio" />').appendTo(this);
  });
  
  $('#myTwoWay li.oneway ul li').each(function() {
      $(this).html(
          $(this).html().substr(0, $(this).html().length-3)
          + "<span style='font-size: 24px'>"
          + $(this).html().substr(-3)
          + "</span>");
      $('<a href="#" class="executeButton">Execute Bid</a>').appendTo(this);
  });
  
  $('#myTwoWay li.twoway ul li').each(function() {
      $(this).html(
          $(this).html().substr(0, $(this).html().length-3)
          + "<span style='font-size: 24px'>"
          + $(this).html().substr(-3)
          + "</span>");
      $('<a href="#" class="executeButton">Execute Offer</a>').appendTo(this);
  });
});

//add clearing statement to blotter
$(function(){
  $("#blotter table tbody tr td:nth-child(6)").text("ClearPort® clearing successful");
  $("#blotter table tbody tr:lt(3) td:nth-child(6)").text("CME Group clearing successful");
});

//date for page blotter
$(function(){
  var m_names = new Array("Jan", "Feb", "Mar", 
  "Apr", "May", "Jun", "Jul", "Aug", "Sep", 
  "Oct", "Nov", "Dec");

  var d = new Date();
  var curr_date = d.getDate();
  var curr_month = d.getMonth();
  var curr_year = d.getFullYear();
  $("#blotter table tbody tr td:nth-child(1)").text(curr_date + " " + m_names[curr_month] + " " + curr_year);

	//add to full blotter as well
	$("#fullBlotter tbody tr td:nth-child(9), #fullBlotter tbody tr td:nth-child(11)").text(curr_date + " " + m_names[curr_month] + " " + curr_year);
	
});









