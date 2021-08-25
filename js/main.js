const atomList = ["h","he","li","be","b","c","n","o","f","ne","na","mg","al","si","p","s","cl","ar","k","ca"];
var shownAtom = [];
function capitalizeFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function ShowAtoms() {
    document.getElementById("show").disabled = true;
    for (let i = 0; i < 10; i++){
        console.log(shownAtom);
        while(true){
        var random = Math.floor( Math.random() * (atomList.length));
        capitalized = capitalizeFirstLetter(atomList[random]);
        
        if (shownAtom.includes(capitalized)){
        }
        else{
            shownAtom.push(capitalized);
            hoge = document.getElementById(atomList[random]);
            hoge.textContent = shownAtom[shownAtom.length - 1]
            console.log(shownAtom.length);
            break
        }
    }} 
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