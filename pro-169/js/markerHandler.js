AFRAME.registerComponent("markerhandler", {
  init: async function () {

    //markerFound event
    this.el.addEventListener("markerFound", () => {
      console.log("marker is found");     
      this.handleMarkerFound()
    });

    //markerLost event
    this.el.addEventListener("markerLost", () => {
      console.log("marker is lost");
      this.handleMarkerLost();
    });

  },
  handleMarkerFound: function () {
    // Changing button div visibility
    var buttonDiv = document.getElementById("button-div");
    buttonDiv.style.display = "flex";

    var orderButton = document.getElementById("order-button");
    var orderSummaryButtton = document.getElementById("order-summary-button");

    // Handling Click Events
    orderButton.addEventListener("click", () => {
      swal({
        icon: "https://i.imgur.com/4NZ6uLY.jpg",
        title: "Thanks For Order !",
        text: "Your order will serve soon on your table!",
        timer: 2000,
        buttons: false
      });
    });

    orderSummaryButtton.addEventListener("click", () => {
      swal({
        icon: "warning",
        title: "Order Summary",
        text: "Work In Progress"
      });
    });

   },

  handleMarkerLost: function () {
    // Changing button div visibility
    var buttonDiv = document.getElementById("button-div");
    buttonDiv.style.display = "none";
  },
});