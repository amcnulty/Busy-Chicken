if (window.attachEvent) {window.attachEvent('onload', load);}
else if (window.addEventListener) {window.addEventListener('load', load, false);}
else {document.addEventListener('load', load, false);}
function load() {
    /**
     * Checks clientWidth and clientHeight to see if screen is in landscape or portrait.
     * Calls readyToStart function and passes true if in landscape false if in portrait.
     */
    function checkOrientation() {
        width = document.documentElement.clientWidth;;
        height = document.documentElement.clientHeight;
        // if in portrait mode
        if (width < height) {
            // display message saying to switch to landscape and hide start button
            readyToStart(false);

        }
        // else if in landscape
        else {
            // remove message and show start button
            readyToStart(true);
        }
    }
    /**
    * Receives a boolean parameter if ready to start. If true will display the start button to user. If false will hide start button and display message to user to change to landscape orientation.
     * @param {boolean} bool
     * The boolean parameter if the show is ready to be started.
     */
    function readyToStart(bool) {
        if (bool) {
            startButton.style.visibility = "visible";
            landscapeMessage.style.visibility = "hidden";
        }
        else {
            startButton.style.visibility = "hidden";
            landscapeMessage.style.visibility = "visible";
        }
    }
    /**
     * Starts the show by setting all appropriate class names.
     */
    function startShow() {
        curtain.className = "up moving";
        for (var i = 0; i < pages.length; i++) {
            pages[i].className = "pages start";
        }
        s1chick.className = "s1chick s1chick-go";
        s1text.className = "s1text s1text-go";
        s2chick.className = "s2chick s2chick-go";
        s2text.className = "s2text s2text-go";
        s3chick.className = "s3chick s3chick-go";
        s3text.className = "s3text s3text-go";
        smallDot.className = "smallDot smallDot-go";
        medDot.className = "medDot medDot-go";
        largeDot.className = "largeDot largeDot-go";
        cloud.className = "cloud cloud-go";
        s4chick.className = "s4chick s4chick-go";
        s4text.className = "s4text s4text-go";
        hammer.className = "hammer hammer-go";
        impact.className = "impact impact-go";
        s5text.className = "s5text s5text-go";
        note1.className = "notes notes-go";
        note2.className = "notes notes-go";
        s6text.className = "s6text s6text-go";
        // when show is done reset everything to run again
        resetShow();
    }
    /**
     * Called at the end of start show. Everything in this function is wrapped in a set timeout for the length of the show. All class names are reset so show can be replayed.
     */
    function resetShow() {
        window.setTimeout(function() {
            curtain.className = "up";
            s1chick.className = "s1chick";
            s1text.className = "s1text";
            s2chick.className = "s2chick";
            s2text.className = "s2text";
            s3chick.className = "s3chick";
            s3text.className = "s3text";
            smallDot.className = "smallDot";
            medDot.className = "medDot";
            largeDot.className = "largeDot";
            cloud.className = "cloud";
            s4chick.className = "s4chick";
            hammer.className = "hammer";
            impact.className = "impact";
            s4text.className = "s4text";
            s5text.className = "s5text";
            note1.className = "notes";
            note2.className = "notes";
            s6text.className = "s6text";
            for (var i = 0; i < pages.length; i++) {
                pages[i].className = "pages";
            }
        }, 60400);
    }
    // Width of the user's browser screen.
    var width;
    // Height of the user's browser screen.
    var height;
    // The start button on the home screen
    var startButton = document.getElementById("startButton");
    // The landscape message
    var landscapeMessage = document.getElementById("landscapeMessage");
    // The curtain
    var curtain = document.getElementById("curtain");
    // A collection of the different pages
    var pages = document.getElementsByClassName("pages");
    // scene one variables
    // The chicken
    var s1chick = document.getElementById("swimmingChicken");
    // The text
    var s1text = document.getElementById("swimmingText");
    // scene two variables
    // The chicken
    var s2chick = document.getElementById("programmingChicken");
    // The text
    var s2text = document.getElementById("programmingText");
    // scene three
    // The chicken
    var s3chick = document.getElementById("mathChicken");
    // The text
    var s3text = document.getElementById("mathText");
    // small dot
    var smallDot = document.getElementById("smallDot");
    // medium dot
    var medDot = document.getElementById("medDot");
    // large dot
    var largeDot = document.getElementById("largeDot");
    // The thought cloud
    var cloud = document.getElementById("cloud");
    // scene four
    // The chicken
    var s4chick = document.getElementById("houseChicken");
    // The text
    var s4text = document.getElementById("houseText");
    // The hammer
    var hammer = document.getElementById("hammer");
    // The hammer impact
    var impact = document.getElementById("impact");
    // scene five
    // The text
    var s5text = document.getElementById("musicText");
    // The notes
    var note1 = document.getElementById("notes");
    var note2 = document.getElementById("notes2");
    // scene 6
    // The text
    var s6text = document.getElementById("bedText");
    // Event listener for the start button
    startButton.addEventListener("click", startShow, false);
    // Calls the checkOrientation function every half second.
    checkOrientation();
    window.setInterval(checkOrientation, 500);
}