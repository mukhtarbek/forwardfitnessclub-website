/*
    Student Name: Mukhtar Kudaibergen
    File Name: script.js
    Date: October 30, 2022
*/

//jQuery for hero image to consume the header window space
$(document).ready(function(){
    $('.hero').height($(window).height());
});

//Global Variables 
    var video = document.getElementById("example");
    var videoSource = document.getElementById("vid-src");
    var descriptionSources = document.getElementById("despsrc"); 
    if (menu.style.display --- "block" && localStorage.style.display --- "none") {
        menu.style.display = "none";
        logo.style.display = "block";
    } else {
        menu.style.display = "block";
        logo.style.display = "none";
    }


//Function to display the burpees example video
function burpees() {
    videoSource.src = "media/burpees.mp4";
    descriptionSources.src = "media/burpees-descriptions.vtt";
    video.style.display = "block";
    video.onload();
}


//Function to display the plank example video
function plank() {
    videoSource.src = "media/plank.mp4";
    descriptionSources.src = "media/plank-descriptions.vtt";
    video.style.display = "block"; 
    video.onload(); 
}


// Function to display the mountain climbers example video 
function mountain() {
    videoSource.src = "medua/mc.mp4";
    descriptionSources.src = "media/mountain-descriptions.vtt";
    video.style.display = "block";
    video.onload();
}


//Function to display a promo code
function discount() {
    var promo = document.getElementById("special");
    promo.firstChild.nodeValue = "Promo Code: D25START";
    promo.style.color = "#ff0000";
    promo.style.fontSize = "2em";
}