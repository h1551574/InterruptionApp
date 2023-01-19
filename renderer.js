var startButton = document.getElementById("start-button")
startButton.addEventListener("click", function() {
    const participantID = document.getElementById("participant-id").value
    window.fs.makeNewDataSet(participantID)
    window.location.replace("black.html")
})


