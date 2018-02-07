$(document).ready(function() {

    var chosen;
    var reservationNumber;
    var reservationName;
    var partySize;


    $("#formDiv").hide();
    $(".available").click(function() {
        chosen = $(this);
        tableNumber = $(event.target).text();
        var chosen = $(".num").html(tableNumber);
        $("#formDiv").show();
    });

    $(".saveButton").click(function() {
        var formNumber = $(".num").text();
        event.preventDefault();
        $(".circles:contains(" + formNumber + ")").removeClass("available").addClass("reserved");
        getHoverData();
        $("#formDiv").hide();
    });

    $(".cancelButton").click(function() {
        $().toggleClass("reserved")
        $("#formDiv").hide();
    });


    function getHoverData() {
        var formNumber = $(".num").text();
        var reservationName = $("#nameInput").val();
        var partySize = $("#guestInput").val();
        $("#" + formNumber).append('<div class=hover><p>Name: <span id = nameSpan>' + reservationName + '</span> </p><p>Size of Party: <span id = partySpan>' + partySize + '</span></p>');
    }

    // var tableEl;
    // //when you click a table, you need to:
    //  $(".available").click(function(){
    //      tableEl = $(this);
    //      var tableNum = tableEl.attr("data-tablenum");
    //      $("#formDiv").fadeIn();// show form
    //      // fill in the table num on the form
    //      $("#tableNumber").text(tableNum);
    //  })


    // //when you submit the form
    //  $("#formDiv").submit(function(event){
    //      event.preventDefault();
    //      //- reserve the table (add the class)
    //      tableEl.addClass("reserved").removeClass("available");
    //      //- add the hover data to the table
    //      addHoverData();
    //      //- form hides
    //      $("#reserveForm")
    //      $("reserveForm").hide();
    //  });

    //  function addHoverData(){
    //      var name = $("#guestName").val();
    //      var partySize = $("#partySize").val();
    //      tableEl.append('<div class="hoverData"<div>Guest Name:' + name + ' David </div><div>Party Size: ' + partySize + '</div></div>'>)
    //      tableEl.append(
    //          $'<div class="hoverData"').append
    //  }



    // //when you x out of the form
    // // - form hides
    //  $(".exitIcon").click(function(){
    //      $("reserveForm").hide();
    //  });



});