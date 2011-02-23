$(function() {
	
	// modify initial static data
	$('#streamWrap #buyStream ul li, #streamWrap #sellStream ul li').each(function() {
      $(this).html(
          $(this).html().substr(0, $(this).html().length-3)
          + "<span style='font-size: 24px'>"
          + $(this).html().substr(-3)
          + "</span>");
  });
	$('<a href="#" class="executeButton">Execute Bid</a>').appendTo('#streamWrap div.myBuy ul li.right');
	$('<a href="#" class="executeButton">Execute Offer</a>').appendTo('#streamWrap div.mySell ul li.right');
	$("a.executeButton").click(function(){
	  location.reload();
	});

	$('#streamWrap #twoWayStream ul li').each(function() {
      $(this).html(
          $(this).html().substr(0, $(this).html().length-3)
          + "<span style='font-size: 24px'>"
          + $(this).html().substr(-3)
          + "</span>");
  });
	$('#streamWrap #twoWayStream ul li:nth-child(1)').each(function(){
		$('<input type="radio" name="group01" />').appendTo(this);
	});
	$('#streamWrap #twoWayStream ul li:nth-child(2)').each(function(){
		$('<input type="radio" name="group02" />').appendTo(this);
	});
	
	//hide all button-activated content
  $(".myBuy, .mySell, .myTwoWay, #buyStream, #sellStream, #twoWayStream, #timer01, #timer02, #timer03, #expireMessage, #execute, #twoWayIndicator").hide();
	//show default streams
	$('#buy01, #sell01, #twoway01').show();
  
  //load random data
  var divNumber = Math.floor(Math.random() * 5);
  
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
	

	$("#twoWayStream").everyTime(5000, function(){
    var divNumber = Math.floor(Math.random() * 5);
		$('div.myTwoWay').hide();
		$('div#twoWayStream div:eq(' + (divNumber) + ')').show();
  });
	
  
  //stop timers
  $("#buy, #sell, #twoway").click(function(){
    $("#timer01, #timer02, #timer03").stopTime().hide();
		$('#buyStream, #sellStream, #twoWayStream').hide();
    $("span.countdown").remove();
  });
  
  //buy timer
  $("#buy").click(function(){
    $("#buy, #sell, #twoway").removeClass("active");
    $("#execute, #twoWayIndicator, #buyStream, #sellStream, #twoWayStream").hide();
    $("#expireMessage, #confirmMessage").fadeOut("fast");
    $("#timer01").prepend("<span class=\"countdown\"></span>");
    $('#timer01 span.countdown').countdown({seconds: 120});
    //start timer
    $("#timer01").oneTime(121000, function(){
      $("#buy").removeClass("active");
      $("#buyStream, #sellStream, #twoWayStream, #timer02, #execute, #twoWayIndicator").fadeOut("slow");
			$("#expireMessage").fadeIn("fast");
			$("#expireMessage p.msg").text("Your Sellstream has expired. Please select again.");
			$('span.countdown').remove();
    });
    $("#buyStream, #timer01").fadeIn("fast");
    $(this).addClass("active");
  });
  
  //sell timer
  $("#sell").click(function(){
    $("#buy, #sell, #twoway").removeClass("active");
    $("#execute, #twoWayIndicator, #buyStream, #sellStream, #twoWayStream").hide();
    $("#expireMessage, #confirmMessage").fadeOut("fast");
    $("#timer02").prepend("<span class=\"countdown\"></span>");
    $('#timer02 span.countdown').countdown({seconds: 120});
    //start timer
    $("#timer02").oneTime(121000, function(){
      $("#sell").removeClass("active");
      $("#buyStream, #sellStream, #twoWayStream, #timer02, #execute, #twoWayIndicator").fadeOut("slow");
			$("#expireMessage").fadeIn("fast");
			$("#expireMessage p.msg").text("Your Sellstream has expired. Please select again.");
			$('span.countdown').remove();
    });
    $("#sellStream, #timer02").fadeIn("fast");
    $(this).addClass("active");
  });
  
  //twoway timer
  $("#twoway").click(function(){
    $("#buy, #sell, #twoway").removeClass("active");
    $("#execute, #twoWayIndicator, #buyStream, #sellStream, #twoWayStream").hide();
    $("#expireMessage, #confirmMessage").fadeOut("fast");
    $("#timer03").prepend("<span class=\"countdown\"></span>");
    $('#timer03 span.countdown').countdown({seconds: 120});
    //start timer
    $("#timer03").oneTime(121000, function(){
      $("#twoway").removeClass("active");
      $("#buyStream, #sellStream, #twoWayStream, #timer03, #execute, #twoWayIndicator").fadeOut("slow");
			$("#expireMessage").fadeIn("fast");
			$("#expireMessage p.msg").text("Your Two-way stream has expired. Please select again.");
			$('span.countdown').remove();
    });
    $("#twoWayStream, #timer03, #execute, #twoWayIndicator").fadeIn("fast");
    $(this).addClass("active");
  });
  
  
});

