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
    "Thunder",
    "Opera",
    "Hustling",
    "Romance"
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
    "57th Street",
    "the Turnpike",
    "the Alley"
    ];
    var wordsBPrep =
    [
    "in",
    "in",
    "in",
    "in",
    "in",
    "on",
    "in",
    "on",
    "in",
    "on",
    "Across",
    "in",
    "in",
    "on",
    "in",
    "on",
    "in",
    "on",
    "in",
    "in",
    "in",
    "in",
    "on",
    "on",
    "in"
    ];
    var wordsC = ["Wild", "Innocent", "Hungry", "Dark", "Promised", "Stolen", "Ruined",
                    "Runaway", "Lonesome", "Empty", "Rising", "Thunder", "Outlaw",
                    "Shackled", "Lucky"];
    var wordsD = ["Cadillac", "Train", "Ranch", "Highway", "Street", "Hometown", "Night",
                    "Land", "Jungle", "Flood", "Spirit", "Road", "Promises", "Machine",
                    "River", "Car", "Heart", "Factory", "City", "Freeze-Out",
                    "Angel", "Sky"];
    var wordsE = ["Highways", "Streets", "Cadillacs", "Spirit", "Saints", "Soul"];


    var structure = Math.random();
    var songTitle = ""
    if (structure < 0.5) {
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
