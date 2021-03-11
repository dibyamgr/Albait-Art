new WOW().init();
var scroll = new SmoothScroll();



function openNav() {
  document.getElementById("Sidepanel").style.width = "250px";
}

function closeNav() {
  document.getElementById("Sidepanel").style.width = "0";
  document.getElementById("Appointment").style.width = "0";
  document.getElementById("SearchPanel").style.width = "0";
}

function bookAppointment(){
  document.getElementById("Appointment").style.width = "430px";
}

function openSearch(){
  document.getElementById("SearchPanel").style.width = "250px";
  document.getElementById("SearchPanel").style.left = "0";

}

/*-------------------
		Quantity change
	--------------------- */
  var proQty = $(".pro-qty");
  proQty.prepend('<span class="dec qtybtn">-</span>');
  proQty.append('<span class="inc qtybtn">+</span>');
  proQty.on("click", ".qtybtn", function () {
    var $button = $(this);
    var oldValue = $button.parent().find("input").val();
    if ($button.hasClass("inc")) {
      var newVal = parseFloat(oldValue) + 1;
    } else {
      // Don't allow decrementing below zero
      if (oldValue > 0) {
        var newVal = parseFloat(oldValue) - 1;
      } else {
        newVal = 0;
      }
    }
    $button.parent().find("input").val(newVal);
  });