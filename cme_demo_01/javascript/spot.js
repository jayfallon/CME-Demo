
	$(function() {
	  
	  //load random data
	  var fileNumber = Math.floor(Math.random() * 6);
    
    $("#myBuy").everyTime(5000, function(){
      var fileNumber = Math.floor(Math.random() * 6);
      $("#myBuy li.oneway ul").load('data/data0' + fileNumber + '.html', function(){
        $('#myBuy li.oneway ul li').each(function() {
            $(this).html(
                $(this).html().substr(0, $(this).html().length-3)
                + "<span style='font-size: 24px'>"
                + $(this).html().substr(-3)
                + "</span>");
            $('<a href="#" class="executeButton">Execute</a>').appendTo(this);
        });
        $("a.executeButton").click(function(){
          location.reload();
        });
      });
    });
    
    $("#mySell").everyTime(5000, function(){
      var fileNumber = Math.floor(Math.random() * 6);
      $("#mySell li.oneway ul").load('data/sell/data0' + fileNumber + '.html', function(){
        $('#mySell li.oneway ul li').each(function() {
            $(this).html(
                $(this).html().substr(0, $(this).html().length-3)
                + "<span style='font-size: 24px'>"
                + $(this).html().substr(-3)
                + "</span>");
            $('<a href="#" class="executeButton">Execute</a>').appendTo(this);
        });
        $("a.executeButton").click(function(){
          location.reload();
        });
      });
    });
    
    $("#myTwoWay li.oneway").everyTime(5000, function(){
      var fileNumber = Math.floor(Math.random() * 6);
      $("#myTwoWay li.oneway ul").load('data/sell/data0' + fileNumber + '.html', function(){
        $('#myTwoWay li.oneway ul li').each(function() {
            $(this).html(
                $(this).html().substr(0, $(this).html().length-3)
                + "<span style='font-size: 24px'>"
                + $(this).html().substr(-3)
                + "</span>");
            $('<a href="#" class="executeButton">Execute Bid</a>').appendTo(this);
        });
        $("a.executeButton").click(function(){
          location.reload();
        });
      });
    });
    
    $("#myTwoWay li.twoway").everyTime(5000, function(){
      var fileNumber = Math.floor(Math.random() * 6);
      $("#myTwoWay li.twoway ul").load('data/data0' + fileNumber + '.html', function(){
        $('#myTwoWay li.twoway ul li').each(function() {
            $(this).html(
                $(this).html().substr(0, $(this).html().length-3)
                + "<span style='font-size: 24px'>"
                + $(this).html().substr(-3)
                + "</span>");
            $('<a href="#" class="executeButton">Execute Ask</a>').appendTo(this);
        });
        $("a.executeButton").click(function(){
          location.reload();
        });
      });
    });
	  
	  //hide all button-activated content
	  $("#myTwoWay, #myBuy, #mySell, #expireMessage").hide();
	  
	  //stop timers
	  $("#buy, #sell, #twoway").click(function(){
	    $("a").stopTime();
	    $("span.countdown").remove();
	  });
	  
	  //buy timer
	  $("#buy").click(function(){
	    $("#buy, #sell, #twoway").removeClass("active");
      $("#myTwoWay, #myBuy, #mySell").hide();
      $("#expireMessage, #confirmMessage").fadeOut("fast");
      $("#timer01").prepend("<span class=\"countdown\"></span>");
      $('#timer01 span.countdown').countdown({seconds: 240});
      //start timer
	    $("#timer01").oneTime(241000, function(){
        $("#buy").removeClass("active");
        $("#myTwoWay, #myBuy, #mySell").fadeOut("slow");
  			$("#expireMessage").fadeIn("fast");
  			$("#expireMessage p.msg").text("Your Buy stream has expired. Please select again.");
  			$('span.countdown').remove();
      });
      $("#myBuy").fadeIn("fast");
      $(this).addClass("active");
	  });
	  
	  //sell timer
	  $("#sell").click(function(){
	    $("#buy, #sell, #twoway").removeClass("active");
      $("#myTwoWay, #myBuy, #mySell").hide();
      $("#expireMessage, #confirmMessage").fadeOut("fast");
      $("#timer02").prepend("<span class=\"countdown\"></span>");
	    $('#timer02 span.countdown').countdown({seconds: 240});
	    //start timer
	    $("#timer02").oneTime(241000, function(){
        $("#sell").removeClass("active");
        $("#myTwoWay, #myBuy, #mySell").fadeOut("slow");
  			$("#expireMessage").fadeIn("fast");
  			$("#expireMessage p.msg").text("Your Sell stream has expired. Please select again.");
  			$('span.countdown').remove();
      });
      $("#mySell").fadeIn("fast");
      $(this).addClass("active");
	  });
	  
	  //twoway timer
	  $("#twoway").click(function(){
	    $("#buy, #sell, #twoway").removeClass("active");
      $("#myTwoWay, #myBuy, #mySell").hide();
      $("#expireMessage, #confirmMessage").fadeOut("fast");
      $("#timer03").prepend("<span class=\"countdown\"></span>");
	    $('#timer03 span.countdown').countdown({seconds: 240});
	    //start timer
	    $("#timer03").oneTime(241000, function(){
        $("#twoway").removeClass("active");
        $("#myTwoWay, #myBuy, #mySell").fadeOut("slow");
  			$("#expireMessage").fadeIn("fast");
  			$("#expireMessage p.msg").text("Your Two-way stream has expired. Please select again.");
  			$('span.countdown').remove();
      });
      $("#myTwoWay").fadeIn("fast");
      $(this).addClass("active");
	  });
	  
	  
	});

