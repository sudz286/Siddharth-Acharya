document.addEventListener("DOMContentLoaded",

    function (event) {






        //////////////////////////////////////
        var hid = 1;
        var first = document.querySelectorAll(".firsttour");
        var second = document.querySelectorAll(".secondtour");
        var third = document.querySelectorAll(".thirdtour");
        var arrowleft = document.getElementById("left");
        var arrowright = document.getElementById("right");
        var j;
        for (j = 0; j < first.length; j++) {
            first[j].style.display = "block";
        };
        for (j = 0; j < second.length; j++) {
            second[j].style.display = "none";
        };
        for(j=0;j < third.length; j++){
            third[j].style.display = "none";
        }
        arrowleft.style.visibility = "hidden";

        function rightclick(event) {

            console.log("before right" + hid);
            if (hid == 4) {
                hid = 1;
            }
            hid++;

            console.log("after right" + hid);
            if (hid == 1) {
                for (j = 0; j < first.length; j++) {
                    first[j].style.display = "block";
                };
                for (j = 0; j < second.length; j++) {
                    second[j].style.display = "none";
                };
                for(j=0; j < third.length; j++){
                    third[j].display = "none";
                }
            }
            else if (hid == 2) {
                for (j = 0; j < first.length; j++) {
                    first[j].style.display = "none";
                };
                for (j = 0; j < second.length; j++) {
                    second[j].style.display = "block";
                };
                for (j = 0; j < third.length; j++) {
                    third[j].style.display = "none";
                };
                arrowleft.style.visibility = "visible";
                arrowright.style.display = "visible";
            }
            else if (hid == 3) {
                for (j = 0; j < first.length; j++) {
                    first[j].style.display = "none";
                };
                for (j = 0; j < second.length; j++) {
                    second[j].style.display = "none";
                };
                for (j = 0; j < third.length; j++) {
                    third[j].style.display = "block";
                };
                arrowleft.style.visibility = "visible";
                arrowright.style.visibility = "hidden";
            }
            
        };
        document.getElementById("right")
            .addEventListener("click", rightclick);

        function leftclick(event) {

            console.log("before left" + hid);
            if (hid == 4) {
                hid = 1;
            }
            hid--;

            console.log("after left " + hid);
            if (hid == 1) {
                for (j = 0; j < first.length; j++) {
                    first[j].style.display = "block";
                };
                for (j = 0; j < second.length; j++) {
                    second[j].style.display = "none";
                };
                for (j = 0; j < third.length; j++) {
                    third[j].style.display = "none";
                };
                arrowleft.style.visibility = "hidden";
                arrowright.style.visibility = "visible";
            }
            else if (hid == 2) {
                for (j = 0; j < first.length; j++) {
                    first[j].style.display = "none";
                };
                for (j = 0; j < second.length; j++) {
                    second[j].style.display = "block";
                };
                for (j = 0; j < third.length; j++) {
                    third[j].style.display = "none";
                };
                arrowleft.style.visibility = "visible";
                arrowright.style.visibility = "visible";
            }
            else if (hid == 3) {
                for (j = 0; j < first.length; j++) {
                    first[j].style.display = "none";
                };
                for (j = 0; j < second.length; j++) {
                    second[j].style.display = "none";
                };
                for (j = 0; j < third.length; j++) {
                    third[j].style.display = "block";                 
                };
                arrowleft.style.visibility = "visible";
                arrowright.style.visibility = "hidden";
            }
        };
        document.getElementById("left")
            .addEventListener("click", leftclick);

        function myFunction(x) {



            if (x.matches) { // If media query matches

                function menuclick(event) {

                    document.getElementById("maintour").style.display = "none";
                    var bo = document.querySelector("body");
                    bo.style.background = "url('../images/rebgs/Sid\ Acharya\ 8.jpg') no-repeat center  fixed";
                    bo.style.backgroundSize = "cover";


                }
                function closeclick(event) {
                    document.getElementById("maintour").style.display = "block";
                    var bo = document.querySelector("body");
                    bo.style.background = "url('../images/rebgs/Sid\ Acharya\ 8.jpg') no-repeat center  fixed";
                    bo.style.backgroundSize = "cover";


                }
                document.getElementById("menubutton")
                    .addEventListener("click", menuclick);

                document.getElementById("close")
                    .addEventListener("click", closeclick);

            }
            else {
                document.getElementById("maintour").style.display = "block";
                var bo = document.querySelector("body");
                bo.style.background = "url('../images/rebgs/Sid\ Acharya\ 4.jpg') no-repeat center  fixed";
                bo.style.backgroundSize = "cover";
            }
        }

        var x = window.matchMedia("(max-width: 767px)");
        myFunction(x); // Call listener function at run time
        x.addListener(myFunction); // Attach listener function on state changes
        document.addEventListener("resize", myFunction(x))
    }


);










