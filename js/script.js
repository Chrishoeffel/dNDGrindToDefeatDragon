console.log("Sanity Check!")
let char =0;
let i = 0;
let player;
let enemy;
let dragon;


async function dndCharacter() {
    //e.preventDefault();
    //const userInput = $('input[type="text"]').val();    
    const url = 'https://www.dnd5eapi.co/api/classes/';

    const response = await fetch(url);
    const data = await response.json();
    //if data null

    //function allClasses(\) { //loops through api for character classes
    for (i; i <data.results.length; i++) {
        const charClassesArr = data.results[i].name;
        console.log(charClassesArr);
        //dom manipulation
        const newCharlist = document.createElement("button"); //button element created
        newCharlist.id = charClassesArr; //add id to newCharlist
        newCharlist.textContent = charClassesArr;//added content to newcharlist 
        document.querySelector('ul').appendChild(newCharlist);//added newcharlist to parent ul
    }
    //}
    // function hideOtherClasses()
    $("button").click(clickClassSelection);//synAC
}
function clickClassSelection(event){ //Single out classType
    const classType = event.target.id;
    console.log(classType);
    const btnSelector = document.getElementById(classType);//select button
    console.log(btnSelector);
    //append li to button
    //list as skills from ap 
};
let classType;  
dndCharacter();
function Playercharacter(classType) {
    this.classType = classType,
    this.health = 40,
    this.attack = 15
};

function Enemy() {objects

    this.enemytype = "Goblin",
    this.health = 40,
    this.attack = 15
};

function Dragon() {
    this.health =  v,//random #700hp -1500hp
    this.attack =  x//random #35-75
};
// const GameManager = {
//     setGameStart : function (classType) {
//         this.resetPlayer(classType);
//         this.setPreFight();
//     },
//     resetPlayer: function(classType) {
//         switch (classType) {
//             case 
//         };
//     },
//     setPreFight : function() {

//     }
// };
console.log(Playercharacter);
console.log(classType);
