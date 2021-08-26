const atomList = ["h","he","li","be","b","c","n","o","f","ne","na","mg","al","si","p","s","cl","ar","k","ca"];
atomListCapitalized = [];
for(y of atomList){atomListCapitalized.push(capitalizeFirstLetter(y)); }
var shownAtom = [];
function capitalizeFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
function Game() {
    
    notShownAtoms = atomListCapitalized.filter(i=>shownAtom.indexOf(i)==-1)
    console.log(atomListCapitalized);
    console.log(shownAtom);
    console.log(notShownAtoms);
    for (currentAtom of atomList){
        if(currentAtom in notShownAtoms){
            /*ここになんかすごいコードがはいる*/
        }
    }
}

function ShowAtoms() {
    document.getElementById("show").disabled = true;
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
function DeleteAtoms() {
    for(x of atomList){
        document.getElementById(x).textContent = "";
    }
    shownAtom.length = 0;
    document.getElementById("show").disabled = false;
    document.getElementById("delete").disabled = true;
}

function PostAnswer() {
    console.log(String(document.getElementById("answer").value));
    document.getElementById("current").textContent = String(document.getElementById("answer").value);
}

