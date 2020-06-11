function nonsense(string){
    var blab = function(){
        alert(string);
    }
    blab()
}


// *****************
function nonsense(string){
    var blab = function(){
        alert(string);
    }
    setTimeout(() => {blab()},2000)
}

//********************
function nonsense(string){
    var blab = function(){
        alert(string);
    }
    return blab;
}

const blabLater = nonsense("later");
const blabAgainLater = nonsense("blabAgainLater");
//They will alert with the input string.

//******************** 
var lastNameTrier = function(firstName){
    //does stuff

     var innerFunction = function(lastName) {
         return `${firstName} ${lastName}`;
     };
        return innerFunction
 };
 var firstNameFarmer = lastNameTrier('Farmer'); //logs nothing
 firstNameFarmer('Brown'); //logs 'Farmer Brown'

//*********************
function storyWriter(){
    let story = "";
    function addWords(storyLine){
        story += storyLine
        return story
    }
    function erase(){
        story = ""
        return story;
    }
    return {addWords,erase}
}


var farmLoveStory = storyWriter();
	console.log(farmLoveStory.addWords('There was once a lonely cow.')); // 'There was once a lonely cow.'
	console.log(farmLoveStory.addWords('It saw a friendly face.')); //'There was once a lonely cow. It saw a friendly face.

console.log(farmLoveStory.erase())
