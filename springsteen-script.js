function randInt(n) {
    return Math.floor(Math.random() * n);
}

function generateTitle() {
    var wordsA =
    [
    "Running",
    "Racing",
    "Working",
    "Dancing",
    "Darkness",
    "Fire",
    "Death",
    "Glory",
    "Serenade",
    "Angel",
    "Lost",
    "Drive",
    "Born",
    "Crush",
    "Out",
    "Wreck",
    "Meeting",
    "Thunder"
    ];
    var wordsB =
    [
    "New York",
    "Philadelphia",
    "New Jersey",
    "Atlantic City",
    "the Street",
    "the Edge of Town",
    "my Hometown",
    "Tenth Avenue",
    "the Night",
    "the Backstreet",
    "the River",
    "the Refinery",
    "the Factory",
    "the Ranch",
    "the Highway",
    "the Hill",
    "Nebraska",
    "E Street",
    "the Darkness",
    "Fire",
    "the City",
    "the Flood",
    "57th Street"
    ];
    var wordsBPrep =
    ["in","in", "in", "in", "in", "on", "in", "on", "in", "on", "on", "in", "in", "on", "in",
     "on", "in", "on", "in", "in", "in", "in", "on"];
    var wordsC = ["Wild", "Innocent", "Hungry", "Dark", "Promised", "Stolen"];
    var wordsD = ["Cadillac", "Train", "Ranch", "Highway", "Street", "Hometown", "Night",
                    "Land", "Jungle", "Flood", "Spirit", "Road"];
    var wordsE = ["Highways", "Streets", "Cadillacs", "Spirit", "Saints"];


    var structure = Math.random();
    var songTitle = ""
    if (structure < 0.6) {
        var indexA = randInt(wordsA.length);
        var indexB = randInt(wordsB.length);
        songTitle = songTitle + wordsA[indexA] + " " + wordsBPrep[indexB]
                    + " " + wordsB[indexB];
    }
    else if (structure < 0.8) {
        var indexC = randInt(wordsC.length);
        var indexD = randInt(wordsD.length);
        songTitle = songTitle + wordsC[indexC] + " " + wordsD[indexD];
    }
    else if (structure < 1) {
        var indexE = randInt(wordsE.length);
        var indexB = randInt(wordsB.length);
        songTitle = songTitle + wordsE[indexE] + " of " + wordsB[indexB];
    }
    else {
        songTitle = "Test Song Title"
    }
    document.getElementById('songName').innerHTML = songTitle
}
