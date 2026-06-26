const verifyCheck = document.getElementById("verifyCheck");
const verifyScreen = document.getElementById("verifyScreen");
const video = document.getElementById("video");
const audio = document.getElementById("audio");

verifyCheck.addEventListener("change", async () => {

    try {
        await document.documentElement.requestFullscreen();
    } catch (err) {
        console.log("Fullscreen blocked:", err);
    }

    verifyScreen.style.display = "none";

    video.style.display = "block";

    try {
        await video.play();
    } catch (err) {
        console.log("Video blocked:", err);
    }

    try {
        await audio.play();
    } catch (err) {
        console.log("Audio blocked:", err);
    }

});