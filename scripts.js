// Write your JavaScript code here.
// Remember to pay attention to page loading!

window.addEventListener("load", function() {
    console.log("window loaded");


const takeOff = this.document.getElementById("takeOff");

takeOff.addEventListener("click", function(){
    // console.log("The shuttle is ready for take off");
    results = window.confirm("Is the shuttle is ready for take off?");
    // if (results){
    //     status.innerHTML = "Shuttle in flight";
    // }
});

});