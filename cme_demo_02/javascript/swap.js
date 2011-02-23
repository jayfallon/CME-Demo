$(function(){
	
	// modify initial static data
	$('#swapStreamWrap div div ul:nth-child(1)').addClass('lowest');
	$('#swapStreamWrap div div ul li:nth-child(1)').addClass('spread');
	$('#swapStreamWrap div div ul li:nth-child(2)').addClass('bid');
	$('#swapStreamWrap div div ul li:nth-child(3)').addClass('offer');
	$('#swapStreamWrap div div ul li:nth-child(4)').addClass('execute');

	$('#swapStreamWrap li.bid, #swapStreamWrap li.offer').each(function() {
      $(this).html(
          $(this).html().substr(0, $(this).html().length-3)
          + "<span style='font-size: 24px'>"
          + $(this).html().substr(-3)
          + "</span>");
  });
	
	$('<a href="#" class="executeButton">Execute</a>').appendTo('#swapStreamWrap #buyStream ul li.execute');
	$('<a href="#" class="executeButton">Execute</a>').appendTo('#swapStreamWrap #sellStream ul li.execute');
	$("a.executeButton").click(function(){
    location.reload();
  });
  
  //load random data
  
  $("#buyStream").everyTime(5000, function(){
    var divNumber = Math.floor(Math.random() * 5);
		$('div.myBuy').hide();
		$('div#buyStream div:eq(' + (divNumber) + ')').show();
  });
	

	$("#sellStream").everyTime(5000, function(){
    var divNumber = Math.floor(Math.random() * 5);
		$('div.mySell').hide();
		$('div#sellStream div:eq(' + (divNumber) + ')').show();
  });
  
  
  //hide button-activated content
  $(".myBuy, .mySell, .myTwoWay, #buyStream, #sellStream, #swapTimer, #expireMessage, #swapIndicator").hide();
	$('#buy01, #sell01, #twoway01').show();
  
  //stop timers
  $("#buy, #sell").click(function(){
    $("a").stopTime();
    $("span.countdown").remove();
  });
  
  //buy timer
	$("#buy").click(function(){
    $("#buy, #sell").removeClass("active");
    $("#buyStream, #sellStream, #swapIndicator").hide();
    $("#expireMessage").fadeOut("fast");
    $("#swapTimer").prepend("<span class=\"countdown\"></span>");
    $('#swapTimer span.countdown').countdown({seconds: 120});
    //start timer
    $("#swapTimer").oneTime(121000, function(){
      $("#buy").removeClass("active");
      $("#buyStream, #sellStream, #swapTimer, #swapIndicator").fadeOut("slow");
			$("#expireMessage").fadeIn("fast");
			$("#expireMessage p.msg").text("Your stream has expired. Please select again.");
    });
    $("#buyStream, #swapTimer, #swapIndicator").fadeIn("slow");
    $(this).addClass("active");
  });

	$("#sell").click(function(){
    $("#buy, #sell").removeClass("active");
    $("#buyStream, #sellStream, #swapIndicator").hide();
    $("#expireMessage").fadeOut("fast");
    $("#swapTimer").prepend("<span class=\"countdown\"></span>");
    $('#swapTimer span.countdown').countdown({seconds: 120});
    //start timer
    $("#swapTimer").oneTime(121000, function(){
      $("#sell").removeClass("active");
      $("#buyStream, #sellStream, #swapTimer, #swapIndicator").fadeOut("slow");
			$("#expireMessage").fadeIn("fast");
			$("#expireMessage p.msg").text("Your stream has expired. Please select again.");
    });
    $("#sellStream, #swapTimer, #swapIndicator").fadeIn("slow");
    $(this).addClass("active");
  });

  //date picker
  $( "input.datepicker" ).datepicker({
    dateFormat: 'dd M yy', 
    minDate: 0, 
    showOn: "button",
		buttonImage: "images/calendar.png",
		buttonImageOnly: true
  });
  
  //swap form values and text transfer
  $("#base").click(function(){
    $("#swapDelt02").text("Base");
  });
  $("#counter").click(function(){
    $("#swapDelt02").text("Counter");
  });
  $('#swapPair01').change(function () {
      $('#swapPair02').val($(this).val());
      $('#swapPair02').text($(this).val());
  });
  $('#swapAmount01').change(function () {
      $('#swapAmount02').val($(this).val());
      $('#swapAmount02').text($(this).val());
  });
  
});

