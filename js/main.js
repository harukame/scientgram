const atomList = ["h","he","li","be","b","c","n","o","f","ne","na","mg","al","si","p","s","cl","ar","k","ca"];
atomListCapitalized = [];
for(y of atomList){atomListCapitalized.push(capitalizeFirstLetter(y)); }
var shownAtom = [];


function capitalizeFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
function Game() {
    notShownAtoms = atomListCapitalized.filter(i=>shownAtom.indexOf(i)==-1)
    //console.log(atomListCapitalized);
    //console.log(shownAtom);
    //console.log(notShownAtoms);
    count = 0;
    currentAtomId = notShownAtoms[count].toLowerCase();
    //console.log(currentAtomId);
    document.getElementById(currentAtomId).style.backgroundColor = "red";
}

function ShowAtoms() {
    mistake = 0;
    document.getElementById("show").disabled = true;
    document.getElementById("show-hard").disabled = true;
    for (let i = 0; i < 10; i++){
        
        while(true){
        var random = Math.floor( Math.random() * (atomList.length));
        capitalized = capitalizeFirstLetter(atomList[random]);
        
        if (shownAtom.includes(capitalized)){
        }
        else{
            shownAtom.push(capitalized);
            hoge = document.getElementById(atomList[random]);
            hoge.textContent = shownAtom[shownAtom.length - 1]
            
            break
        }
    }} 
    Game();
    document.getElementById("delete").disabled = false;
}
function ShowAtomsHard() {
    mistake = 0;
    document.getElementById("show").disabled = true;
    document.getElementById("show-hard").disabled = true;
    Game();
    document.getElementById("delete").disabled = false;
}
function DeleteAtoms() {
    for(x of atomList){
        document.getElementById(x).textContent = "";
    }
    shownAtom.length = 0;
    for(x of notShownAtoms){
        document.getElementById(x.toLowerCase()).style.backgroundColor = "#e0e0e0";
    }
    document.getElementById("congratulation").textContent = "";
            document.getElementById("result").textContent = "";
    document.getElementById("show").disabled = false;
    document.getElementById("show-hard").disabled = false;
    document.getElementById("delete").disabled = true;
}

function PostAnswer() {
    let answer = String(document.getElementById("answer").value);
    
    document.getElementById("form").reset();
    //console.log(atomList.indexOf(currentAtomId));
    if (atomList.indexOf(currentAtomId) === atomList.indexOf(answer.toLocaleLowerCase())){
        
        document.getElementById(currentAtomId).textContent = capitalizeFirstLetter(answer);
        document.getElementById(currentAtomId).style.backgroundColor = "#e0e0e0";
        count ++;

        if (count=== notShownAtoms.length){
            document.getElementById("congratulation").textContent = "クリアおめでとう！";
            document.getElementById("result").textContent = String("間違えた回数:"+String(mistake)+"回");
            return false;
        }
        else{
            currentAtomId = notShownAtoms[count].toLowerCase();
            document.getElementById(currentAtomId).style.backgroundColor = "red";
            return false;
        }
        
    }
    else{
        alert("違います");
        mistake ++;
        return false;
    }
    
}


