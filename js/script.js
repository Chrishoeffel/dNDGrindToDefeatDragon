console.log("Sanity Check!")
let char =0;
let i = 0;

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
    $("button").click(skillstoCharListBtn);//synAC
}
function skillstoCharListBtn(event){
    console.log(event.target.id);
    const btnName = event.target.id;
    console.log(btnName);
    const btnSelector = document.getElementById(btnName);//select button
    console.log(btnSelector);
    return btnName;


    //append li to button
    //list as skills from ap
    
};
dndCharacter();
const playerCharacter = {
    charclass : `${btnName}`,


}   
console.log(playerCharacter);
