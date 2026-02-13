const startBtn = document.getElementById("startBtn");
const mission = document.getElementById("mission");
const status = document.getElementById("status")
const YesBtn = document.getElementById("YesBtn")
const NoBtn = document.getElementById("NoBtn")
startBtn.addEventListener("click", function (){
    mission.classList.remove("hidden");
    startBtn.style.display = "none";
});

YesBtn.addEventListener("click", function () {
    status.textContent = "Resmi! - 100%"
    YesBtn.style.display = "none";
    NoBtn.style.display = "none";
})

NoBtn.addEventListener("click", function () {
    status.textContent = "Penolakan! - 0%"
    YesBtn.style.display = "none";
    NoBtn.style.display = "none";
})