
document.addEventListener("DOMContentLoaded",

    function (event) {

        function myFunction(x) {



            if (x.matches) { // If media query matches

                function menuclick(event) {
                    document.getElementById("upcomingevents").style.display = "none";
                    document.getElementById("event").style.display = "none";
                    var bo = document.querySelector("body");
                    bo.style.background = "url('../images/BG_MobileTab.jpg') no-repeat center  fixed";
                    bo.style.backgroundSize = "cover";

                }
                function closeclick(event) {
                    document.getElementById("upcomingevents").style.display = "block";
                    document.getElementById("event").style.display = "block";
                    var bo = document.querySelector("body");
                    bo.style.background = "url('../images/BG_MobileTab.jpg') no-repeat center  fixed";
                    bo.style.backgroundSize = "cover";


                }
                document.getElementById("menubutton")
                    .addEventListener("click", menuclick);

                document.getElementById("close")
                    .addEventListener("click", closeclick);

            }
            else {
                document.getElementById("upcomingevents").style.display = "block";
                document.getElementById("event").style.display = "block";
                var bo = document.querySelector("body");
                bo.style.background = "url('../images/BG_Tour.jpg') no-repeat center  fixed";
                bo.style.backgroundSize = "cover";
            }
        }

        var x = window.matchMedia("(max-width: 767px)");
        myFunction(x); // Call listener function at run time
        x.addListener(myFunction); // Attach listener function on state changes
        document.addEventListener("resize", myFunction(x))
    }


);
