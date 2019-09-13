document.addEventListener("DOMContentLoaded",
    function (event) {
        function pinkcloseclick(event) {
            document.getElementById("albumlinks").style.display = "none";
        }
        document.getElementById("albcross").addEventListener("click", pinkcloseclick);

        

        function myFunction(x) {



            if (x.matches) {


                function menuclick(event) {
                    document.getElementById("albumlinks").style.display = "none";
                    var bo = document.querySelector("body");
                    bo.style.background = "url('../images/rebgs/Sid\ Acharya\ 8.jpg') no-repeat center  fixed";
                    bo.style.backgroundSize = "cover";
                }


                function closeclick(event) {
                    document.getElementById("albumlinks").style.display = "block";
                    document.getElementById("albumlinks").style.display = "none";
                    var mc = document.querySelector("#main-content");
                    mc.style.background = "url('../images/rebgs/Sid\ Acharya\ 5.jpg') no-repeat center  fixed";
                    mc.style.backgroundSize = "cover";
                }

                document.getElementById("menubutton")
                    .addEventListener("click", menuclick);

                document.getElementById("close")
                    .addEventListener("click", closeclick);

            }
            else {
                document.getElementById("albumlinks").style.display = "block";
                var mc = document.querySelector("body");
                mc.style.background = "url('../images/rebgs/Sid\ Acharya\ 5.jpg') no-repeat center  fixed";
                mc.style.backgroundSize = "cover";
                mc.style.zIndex = "3";
                document.getElementById("fx-icon").style.zIndex = "4";
                document.getElementById("menunav").style.zIndex = "4";
                
                
            }
        }

        var x = window.matchMedia("(max-width: 767px)");
        myFunction(x); // Call listener function at run time
        x.addListener(myFunction); // Attach listener function on state changes
        document.addEventListener("resize", myFunction(x))
    }
);

