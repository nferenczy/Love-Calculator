prompt("What's your name?");
prompt("What's their name?");

let loveScore = Math.random() * 100;
loveScore = Math.floor(loveScore) + 1;

if (loveScore > 70) {
    alert("Your love score is " + loveScore + "%. You are a perfect match!")
} if (loveScore > 30 && loveScore <= 70) {
    alert("Your love score is " + loveScore + "%. You might be okay, but it'll be tough!");
} if (loveScore <= 30) {
    alert("Your love score is " + loveScore + "%. You are doomed.");
}





