console.log("Sanity Check!")

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
    for (let i = 0; i <data.results.length; i++) {
        const charClassesArr = data.results[i].name;
        console.log(charClassesArr);
        //dom manipulation
        const newCharlist = document.createElement("button"); //button element created
        newCharlist.setAttribute("type", "submit")

        newCharlist.id = charClassesArr; //add id to newCharlist
        newCharlist.textContent = charClassesArr;//added content to newcharlist 
        document.querySelector('ul').appendChild(newCharlist);//added newcharlist to parent ul
        //set attribute
    }
    //}
    // function hideOtherClasses()
    $("button").click(clickClassSelection);//synAC
}
function removeExtraClasses(classType) {
    const allBtns = document.getElementsByTagName("button");
    console.log(allBtns);
    let lengthAllBtns = allBtns.length 
    for(let btn=0; btn < lengthAllBtns; btn++ ) {
        if (allBtns[btn].id !== classType) {
            console.log(allBtns[btn].id,classType);
            document.getElementById(allBtns[btn].id).style.visibility="hidden";
        }
    }
}
player = {
    classType : "",
    health : 40,   
    attack : 15
}
function displayclass()
function clickClassSelection(event){ //Single out classType
    event.preventDefault();
    const classType = event.target.id;
    console.log(classType);
    const charselection  = new Playercharacter(classType);
    Playercharacter.type = classType;
    console.log(charselection);
    
    // console.log(Playercharacter.classType)
    // console.log(classType);
    // const btnSelector = document.getElementById(classType);//select button
    // console.log(btnSelector);
    // console.log(charClassesArr);
    $("#charClasses").hide();
    const newPlayerBtn = document.createElement("h2");//Playerbtn
    console.log();
    //remove all li items   
    //create new div section
    

    //append li to button
    //list as skills from ap 
};
//display function
let classType;  
dndCharacter();

class Playercharacter {
    constructor (type, health, attack) {
    this.type = type;
    this.health = 40;   
    this.attack = 15;   
    }
};

class Enemy {
    constructor (type, health, attack) {
    this.type = "goblin";
    this.health = Math.floor((Math.random()*45)+35);
    this.attack = Math.floor((Math.random()*17)+10);
    };

}

class Dragon {
    constructor (health,attack) {
    this.health =  Math.floor((Math.random()*1500)+700);//random #700hp -1500hp
    this.attack =  Math.floor((Math.random()*75)+45);//random #35-75
    }

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
// console.log(Playercharacter);
// console.log(classType);
