$(function(){
  
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
        $("#content").fadeOut("fast");
        $("#receipt").fadeIn("fast");
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
        $("#content").fadeOut("fast");
        $("#receipt").fadeIn("fast");
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
        $("#content").fadeOut("fast");
        $("#receipt").fadeIn("fast");
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
          $('<a href="#" class="executeButton">Execute Offer</a>').appendTo(this);
      });
      $("a.executeButton").click(function(){
        $("#content").fadeOut("fast");
        $("#receipt").fadeIn("fast");
      });
    });
  });
  
  
  $("#myTwoWay, #myBuy, #mySell, #expireMessage, #receipt").hide();
  
  //stop timers
  $("#buy, #sell, #twoway").click(function(){
    $("a").stopTime();
    $("span.countdown").remove();
  });
  
  //timers
  $("#buy").click(function(){
    $("#buy, #sell, #twoway").removeClass("active");
    $("#myTwoWay, #myBuy, #mySell").hide();
    $("#expireMessage").fadeOut("fast");
    $("#timer01").prepend("<span class=\"countdown\"></span>");
    $('#timer01 span.countdown').countdown({seconds: 240});
    $("#timer01").oneTime(241000, function(){
      $("#buy").removeClass("active");
      $("#myTwoWay, #myBuy, #mySell").fadeOut("slow");
			$("#expireMessage").fadeIn("fast");
			$("#expireMessage p.msg").text("Your Buy stream has expired. Please select again.");
			$('#timer01 span.countdown').text("");
    });
    $("#myBuy").fadeIn("fast");
    $(this).addClass("active");
  });
  
  $("#sell").click(function(){
    $("#buy, #sell, #twoway").removeClass("active");
    $("#myTwoWay, #myBuy, #mySell").hide();
    $("#expireMessage").fadeOut("fast");
    $("#timer02").prepend("<span class=\"countdown\"></span>");
    $('#timer02 span.countdown').countdown({seconds: 240});
    $("#timer02").oneTime(241000, function(){
      $("#sell").removeClass("active");
      $("#myTwoWay, #myBuy, #mySell").fadeOut("slow");
			$("#expireMessage").fadeIn("fast");
			$("#expireMessage p.msg").text("Your Sell stream has expired. Please select again.");
			$('#timer02 span.countdown').text("");
    });
    $("#mySell").fadeIn("fast");
    $(this).addClass("active");
  });
  
  $("#twoway").click(function(){
    $("#buy, #sell, #twoway").removeClass("active");
    $("#myTwoWay, #myBuy, #mySell").hide();
    $("#expireMessage").fadeOut("fast");
    $("#timer03").prepend("<span class=\"countdown\"></span>");
    $('#timer03 span.countdown').countdown({seconds: 240});
    $("#timer03").oneTime(241000, function(){
      $("#twoway").removeClass("active");
      $("#myTwoWay, #myBuy, #mySell").fadeOut("slow");
			$("#expireMessage").fadeIn("fast");
			$("#expireMessage p.msg").text("Your Two-way stream has expired. Please select again.");
			$('#timer03 span.countdown').text("");
    });
    $("#myTwoWay").fadeIn("fast");
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



  //forward receipt
  $("a.executeButton").click(function(){
    $("#content").fadeOut("fast");
    $("#receipt").fadeIn("fast");
  });

  $("#receiptOk").click(function(){
    $("#receipt").fadeOut("fast");
    $("#content").fadeIn("fast");
  });
  
});

			  
