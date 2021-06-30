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
};
//function displayclass();
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
    $(".charSelection").hide();
    const createPlayerInterface = document.createElement("div");
    createPlayerInterface.setAttribute("class", "player interface");
    createPlayerInterface.textContent = `After each encounter your ${charselection.type}'s health and attack will inscrease. Good Luck!`
    document.querySelector("body").appendChild(createPlayerInterface);
    // interface(charselection,Enemy);
    const newPlayerHeader = document.createElement("h2");//Playerbtn
    newPlayerHeader.setAttribute("class", `${classType}`)
    newPlayerHeader.textContent =  charselection.type;
    document.querySelector("body").appendChild(newPlayerHeader);
    const playerHealthStatus = document.createElement("h3");
    playerHealthStatus.setAttribute("class", "Health");
    playerHealthStatus.textContent = `Health: ${charselection.health}`;
    document.querySelector("body").appendChild(playerHealthStatus);
    const playerAttackStatus = document.createElement("h3");
    playerAttackStatus.setAttribute("class", "attack");
    playerAttackStatus.textContent = `Attack: ${charselection.attack}`;
    document.querySelector("body").appendChild(playerAttackStatus);
    // const createPlayerInterface = document.createElement("div");
    // createPlayerInterface.setAttribute("class", "Emeny interface");
    console.log(playerAttackStatus)
    console.log(charselection.health)
    // //remove all li items    
    //create new div section
    let rounds = 0; 

    //append li to button
    //list as skills from ap 
};


function interface(Playercharacter,Enemy) {
    const newPlayerHeader = document.createElement("h2");//Playerbtn
    newPlayerHeader.textContent = Playercharacter.type;
    document.querySelector(".player interface").appendChild(newPlayerHeader);
    const createPlayerInterface = document.createElement("div");
    createPlayerInterface.setAttribute("class", "player interface");
    createPlayerInterface.textContent = `After each encounter your ${Playercharacter.type}'s health and attack will inscrease. Good Luck!`
    document.querySelector("body").appendChild(createPlayerInterface);
    

    //remove all li items   
}
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
