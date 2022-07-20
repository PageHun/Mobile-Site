let media = document.documentElement.clientWidth;
let switchMedia = document.querySelector(".media");

    if(media <= "1274"){
        switchMedia.getAttribute("content") == "width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"
        switchMedia.content = "width=1274"
    }
    else{
        switchMedia.content = "width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"
    }
