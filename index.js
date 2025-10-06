let homeScore = document.getElementById("home-score")
let guestScore = document.getElementById("guest-score")
let score1 = 0
let score2 = 0

function addPoints(team, points) {
    if (team === "home") {
        score1 += points
        homeScore.textContent = score1
    } else {
        score2 += points
        guestScore.textContent = score2
    }
}

