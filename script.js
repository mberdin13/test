const verifyCheck = document.getElementById("verifyCheck");
const verifyScreen = document.getElementById("verifyScreen");
const imageContainer = document.getElementById("imageContainer");
const bgSound = document.getElementById("bgSound");

verifyCheck.addEventListener("change", async () => {

    try {
        await document.documentElement.requestFullscreen();
    } catch (err) {
        console.log("Fullscreen blocked:", err);
    }

    // Hide verification screen
    verifyScreen.style.display = "none";

    // Show animated image
    imageContainer.style.display = "flex";

    // Play audio
    bgSound.volume = 1;

    bgSound.play().catch(err => {
        console.log("Audio blocked:", err);
    });

});
