$(function(){
  
  //load random data
  var fileNumber = Math.floor(Math.random() * 6);
  
  $("#myBuy01").everyTime(5000, function(){
    var fileNumber = Math.floor(Math.random() * 6);
    $("#myBuy01").load('data/data0' + fileNumber + '.html', function(){
      $('#myBuy01 li').each(function() {
          $(this).html(
              $(this).html().substr(0, $(this).html().length-3)
              + "<span style='font-size: 24px'>"
              + $(this).html().substr(-3)
              + "</span>");
          $('<input name="mySwap01_rdo" value="" id="" type="radio" />').appendTo(this);
      });
      $("a.executeButton").click(function(){
        location.reload();
      });
    });
  });
  
  $("#myBuy02").everyTime(5000, function(){
    var fileNumber = Math.floor(Math.random() * 6);
    $("#myBuy02").load('data/data0' + fileNumber + '.html', function(){
      $('#myBuy02 li').each(function() {
          $(this).html(
              $(this).html().substr(0, $(this).html().length-3)
              + "<span style='font-size: 24px'>"
              + $(this).html().substr(-3)
              + "</span>");
          $('<input name="mySwap02_rdo" value="" id="" type="radio" />').appendTo(this);
      });
      $("a.executeButton").click(function(){
        location.reload();
      });
    });
  });
  
  $("#mySell01").everyTime(5000, function(){
    var fileNumber = Math.floor(Math.random() * 6);
    $("#mySell01").load('data/sell/data0' + fileNumber + '.html', function(){
      $('#mySell01 li').each(function() {
          $(this).html(
              $(this).html().substr(0, $(this).html().length-3)
              + "<span style='font-size: 24px'>"
              + $(this).html().substr(-3)
              + "</span>");
          $('<input name="mySwap01_rdo" value="" id="" type="radio" />').appendTo(this);
      });
      $("a.executeButton").click(function(){
        location.reload();
      });
    });
  });
  
  $("#mySell02").everyTime(5000, function(){
    var fileNumber = Math.floor(Math.random() * 6);
    $("#mySell02").load('data/sell/data0' + fileNumber + '.html', function(){
      $('#mySell02 li').each(function() {
          $(this).html(
              $(this).html().substr(0, $(this).html().length-3)
              + "<span style='font-size: 24px'>"
              + $(this).html().substr(-3)
              + "</span>");
          $('<input name="mySwap02_rdo" value="" id="" type="radio" />').appendTo(this);
      });
      $("a.executeButton").click(function(){
        location.reload();
      });
    });
  });
  
  //hide button-activated content
  $("#myBuy01, #myBuy02, #mySell01, #mySell02, #expireMessage01, #expireMessage02, li.swapDataListItem a.executeButton, #swapTimer, #buyIndicator, #sellIndicator").hide();
  
  //stop timers
  $("#buy01, #sell01").click(function(){
    $("a").stopTime();
    $("span.countdown").remove();
  });
  
  //swap timer
  $("#buy01, #sell01").click(function(){
    $("#swapTimer").prepend("<span class=\"countdown\"></span>");
    $('#swapTimer span.countdown').countdown({seconds: 240});
    $("#swapTimer").oneTime(241000, function(){
      $("#buy01, #sell01").removeClass("active");
      $("#myBuy01, #myBuy02, #mySell01, #mySell02, li.swapDataListItem a.executeButton, #swapTimer").fadeOut("slow");
			$("#expireMessage01").fadeIn("fast");
			$("#expireMessage01 p.msg").text("Your stream has expired. Please select again.");
    });
  });
  
  //swap button-activated content
  $("#buy01").click(function(){
    $("#expireMessage01, #confirmMessage").fadeOut("fast");
    $("#buy01, #sell01").removeClass("active");
    $("#myBuy01, #mySell01, #myBuy02, #mySell02, #buyIndicator, #sellIndicator").hide();
    $("#streamWrap01, #myBuy01, #mySell02, #sellIndicator, li.swapDataListItem a.executeButton, #swapTimer").fadeIn("slow");
    $(this).addClass("active");
  });
  
  // $("#buy02").click(function(){
  //     $("#expireMessage02, #confirmMessage").fadeOut("fast");
  //     $("#buy02, #sell02").removeClass("active");
  //     $("#myBuy02, #mySell02").hide();
  //     $("#streamWrap01, #myBuy02, li.swapDataListItem a.executeButton, #swapTimer").fadeIn("slow");
  //     $(this).addClass("active");
  //   });
  
  $("#sell01").click(function(){
    $("#expireMessage01, #confirmMessage").fadeOut("fast");
    $("#buy01, #sell01").removeClass("active");
    $("#myBuy01, #mySell01, #myBuy02, #mySell02, #buyIndicator, #sellIndicator").hide();
    $("#streamWrap01, #mySell01, #myBuy02, #buyIndicator, li.swapDataListItem a.executeButton, #swapTimer").fadeIn("slow");
    $(this).addClass("active");
  });
  
  // $("#sell02").click(function(){
  //     $("#expireMessage02, #confirmMessage").fadeOut("fast");
  //     $("#buy02, #sell02").removeClass("active");
  //     $("#myBuy02, #mySell02").hide();
  //     $("#streamWrap01, #mySell02, li.swapDataListItem a.executeButton, #swapTimer").fadeIn("slow");
  //     $(this).addClass("active");
  //   });
  
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

