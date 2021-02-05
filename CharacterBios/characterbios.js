// Empty Character Object
var vitalStats = {
    name: null,
    age: null,
    alignment: null
}

var mainRace = {
    mainRaceName: null,
    mainRaceFeatures: []
}

var subRace = {
    subRaceName: null,
    subRaceFeatures: []
}

var race = {
    mainRace,
    subRace

}

var mainClass = {
    mainClassLevel: null,
    mainClassName: null,
    mainClassFeatures: []
}

var subClass = {
    subClassName: null,
    subClassFeatures: []
}

var characterClass = {
    mainClass,
    subClass
}

var character = {
    vitalStats,
    race,
    characterClass
}


// Function to create new character
function createNew() {
    var newName = prompt("Character Name");
    character.name = newName;
    var newRace = prompt("Race");
    character.race = newRace;
    var newClass = prompt("Class");
    character.class = newClass
}