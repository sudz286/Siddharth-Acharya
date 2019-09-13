document.addEventListener("DOMContentLoaded",

    function (event) {




        function myFunction(x) {



            if (x.matches) { // If media query matches
                document.getElementById("fx-icon").style.display = "none";
                document.getElementById("menunav").style.display = "none";
                document.getElementById("cross").style.display = "none";


                function menuclick(event) {
                    var men = document.querySelector("#fx-container");
                    men.style.display = "none";
                    document.getElementById("fx-icon").style.display = "block";
                    document.getElementById("menunav").style.display = "block";
                    document.getElementById("cross").style.display = "block";
                    var main = document.getElementById("main-content");
                    main.style.position = "relative";
                    main.style.justifyContent = "flex-end";


                    var mc = document.querySelector("#main-content");
                    mc.style.background = "none";
                    mc.style.backgroundColor = "#0A1938";
                    mc.style.opacity = "0.7";

                    var bo = document.querySelector("body");
                    bo.style.background = "url('../images/rebgs/Sid\ Acharya\ 5.jpg') no-repeat center  fixed";
                    bo.style.backgroundSize = "cover";
                    bo.style.backgroundPosition = "right calc(55%) bottom calc(50%)";


                }
                function closeclick(event) {
                    var men = document.querySelector("#fx-container");
                    men.style.display = "block";
                    document.getElementById("fx-icon").style.display = "none";
                    document.getElementById("menunav").style.display = "none";
                    document.getElementById("cross").style.display = "none";

                    var main = document.getElementById("main-content");
                    main.style.position = "static";
                    main.style.justifyContent = "flex-start";

                    var mc = document.querySelector("#main-content");
                    mc.style.backgroundColor = "transparent";
                    mc.style.opacity = "1";
                    // mc.style.background = "url('../images/BG_LandingPage.jpg') no-repeat center  fixed";
                    // mc.style.backgroundSize = "cover";
                    // var bo = document.querySelector("body");
                    // bo.style.background = "none";
                    // Dont know why it doesnt work with bg pc set on main content and not body


                }
                document.getElementById("menubutton")
                    .addEventListener("click", menuclick);

                document.getElementById("close")
                    .addEventListener("click", closeclick);

            }
            else {
                document.getElementById("fx-icon").style.display = "block";
                document.getElementById("menunav").style.display = "block";
                document.getElementById("cross").style.display = "none";
                var men = document.querySelector("#fx-container");
                men.style.display = "block";
                document.getElementById("fx-icon").style.display = "block";
                document.getElementById("menunav").style.display = "block";
                document.getElementById("cross").style.display = "none";
                var mc = document.querySelector("#main-content");
                mc.style.backgroundColor = "transparent";
                mc.style.opacity = "1";




            }
        }

        var x = window.matchMedia("(max-width: 767px)");
        myFunction(x); // Call listener function at run time
        x.addListener(myFunction); // Attach listener function on state changes
        document.addEventListener("resize", myFunction(x))
    }


);





