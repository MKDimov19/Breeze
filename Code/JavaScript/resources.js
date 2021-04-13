function Team1() {
    document.getElementById("button-resources-team1").value = "Отбор 1 пътува към теб!";
    document.getElementById("button-resources-team2").disabled = true;
    document.getElementById("button-resources-team3").disabled = true;
}
function Team2() {
    document.getElementById("button-resources-team2").value = "Отбор 2 пътува към теб!";
    document.getElementById("button-resources-team1").disabled = true;
    document.getElementById("button-resources-team3").disabled = true;
}
function Team3() {
    document.getElementById("button-resources-team3").value = "Отбор 3 пътува към теб!";
    document.getElementById("button-resources-team1").disabled = true;
    document.getElementById("button-resources-team2").disabled = true;
}