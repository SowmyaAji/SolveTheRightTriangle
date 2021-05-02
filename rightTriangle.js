 

function randomNumber(min, max) { 
    return Math.random() * (max - min) + min;
}

let num1 = randomNumber(1, 15).toFixed(2)
let num2 = randomNumber(15,80).toFixed(2)



const sineList = [
    `A ${ num1 } meter long ladder leans against a building. If the ladder makes an angle of ${ num2 } degrees with the ground, how far up the wall does the ladder reach?`, `Young Dennis is playing with a toy rocket that is all set to be launched. His father has set up a camera with an angle of ${ num2 } degrees to click the picture when  it reaches maximum altitude. If the distance from the maximum altitude point to the camera is ${ num1 } ft, how high did the rocket go?`, `A ${ num1 } ft wire connects a point on the ground to the top of a pole. The cable makes an angle of ${ num2 } with the ground. Find the height of the pole.`, `A railroad crossing arm that is ${ num1 } feet long is stuck with an angle of elevation of ${ num2 }. How far is it from the ground?`
    ]

const sine2List = [
    `A railroad crossing arm  is stuck with an angle of elevation of ${ num2 }. If it is ${ num1 } feet from the ground, how long is the arm?`, `A ladder leans against a building. If the ladder makes an angle of ${ num2 } degrees with the ground, and is placed ${ num1} feet up the wall, how long is the ladder?`
]

const arcSineList = [
    `Young Dennis is playing with a toy rocket that is all set to be launched. His father has set up a camera to click the picture when  it reaches maximum altitude of ${ num1 }. If the distance from the maximum altitude point to the camera is ${ num2 } ft, what is the angle the camera is aimed at?`, `A ${ num2 } ft wire connects a point on the ground to the top of a pole. The  the height of the pole is ${ num1 }. What is the angle the cable makes with the ground?`,
]

let tanList = [
    `Hermione is ${ num1 } feet away from  Malfoy Manor  and sees Dobby sitting on a ledge jutting from the house.  If the angle of elevation from Hermione to the ledge is close to ${ num2 }, how far is Dobby from the ground?`, `The length of a tree\’s shadow is ${ num1 } feet when the angle of elevation to the sun is ${ num2 }. How tall is the tree`, `A bird is sitting on top of a high tower. A birder has aimed his small telescope at an angle of ${ num2 } degrees to see the bird. If he has set up his  telescope ${ num1 } m away from the tower, what is the height of the tower?`, `A ${ num1 } foot ramp rises from the first floor to the second floor of a parking garage. The ramp makes an angle of ${ num2 } with the ground. How high above the first floor is the second floor?`]

let tan2List = [
    `There is a ${ num1 } feet tall tree.  When the angle of elevation to the sun is ${ num2 }, what is the length of the tree's shadow?`, `A foot ramp rises from the first floor to the second floor of a parking garage. The ramp makes an angle of ${ num2 } with the ground. If  the first floor is ${ num1 } feet higher than the second floor, how long is the ramp?`
]

let arcTanList = [
    `In areas that get a lot of snow, roofs must be inclined at a certain angle to meet building code. That way the snow will slide off the roof and not crush the house. A builder is making a roof with a rise of ${ num1 } feet for every ${ num2 } feet of run. What is the angle of the roof  incline?`, `A bird is sitting on top of a ${ num1 } m high tower that is ${ num2 } m away from an avid birder. What angle should the birder use to aim his small telescope to see the bird?`]

let cosList = [
    `You were flying a kite on a bluff, but you managed somehow to dump your kite into the lake below. You know that you've given out ${ num1 } feet of string. A surveyor tells you that the angle of declination from your position to the kite is ${ num2 } degrees. How high is the bluff where you and the surveyor are standing?`, `Suppose that from atop a vertical cliff a ship is spotted at an angle of depression of ${ num2 } degrees.  If  the distance from the top of the cliff to the ship is ${ num1}, how high is the cliff?`, `Your doll is at the top of a model roller coaster.  The angle of depression from where she is, is ${ num2 } degrees. If the line of sight from you looking up at  her is  ${ num1 } feet long, how high is she from the ground?`, `A railroad crossing arm that is ${ num1 } feet long is stuck with an angle of elevation of ${ num2 } degrees. What is the length of its shadow on the road?`,   `A ${ num1 } meter long ladder leans against a building. If the ladder makes an angle of ${ num2 } degrees with the ground,how far from the wall is the base of the ladder?` 
]

let cos2List = [
    `Suppose that from the top of a vertical cliff a ship is spotted at an angle of depression of ${ num2 } degrees.  If the cliff is ${ num1 } feet high, what is the distance from the top of the cliff to the ship?`, `Your doll is at the top of a ${ num1 } feet  model roller coaster.  The angle of depression from where she is, is ${ num2 } degrees. How long is the line of sight from you looking up at  her?`
]

let arcCosList = [
    `A ${ num2 } meter long ladder leans against a building. If the ladder is ${ num1 } feet from the wall, what is the angle it makes with the ground?`,
    `Your doll is at the top of a model ${ num1 } feet high roller coaster.   If the line of sight from you looking up at  her is  ${ num2 } feet long, what is the angle she is looking down at you?`

]

let pythoList = [
    `Pedro is admiring a statue in Newton Park. The statue is ${ num1 } feet taller than he is, and Pedro is standing ${ num2 } feet away. How far is it from the top of the statue to Pedro's head?`,`Nancy is fishing from a small boat. A fish, swimming at the same depth as the hook at the end of her fishing line, is ${ num1 } feet away from the hook. If the hook is ${ num2 } feet below, how far is the fish from Nancy?`, `Three Disney characters are sitting in a park. Mickey Mouse is directly behind Donald Duck and directly left of Minnie Mouse. If Mickey and Donald are ${ num1 } feet apart, and Mickey and Minnie  are ${ num2 } feet apart, what is the distance between Donald and Minnie?`, `A soccer field is a rectangle ${ num1 } meters wide and ${ num2 } meters long.  The coach asks players to run from one corner to the corner diagonally across the field.   How far do the players run?`, `Whenever she visits Washington, MaryBeth has to drive ${ num1 } miles due north from home. Whenever she visits Silvergrove, she has to drive ${num2 } miles due east from home. How far apart are Washington and Silvergrove, measured in a straight line?`
]

let pytho2List = [
    `How far from the base of the house do you need to place a ${ num2 } ladder so that it exactly reaches the top of a ${ num1 }
    wall?`, `A bird was sitting ${ num1 } feet from the base of an oak tree and flew ${ num2 } feet to reach the top of the tree. How tall is the tree?`, `A mouse has made holes in opposite corners of a rectangular space. The width of the space is ${ num1 } meters and the distance between the mouse's holes is ${ num2 } meters. What is the length of the space?`
]
 
let trigList = [ sineList, sine2List, arcSineList, cosList, cos2List, arcCosList, tanList, tan2List, arcTanList, pythoList, pytho2List]
let get_random = (list) => list[Math.floor(Math.random() * list.length)]
let getList =  get_random(trigList)
let problem = get_random(getList)

const setPage = () => {
    document.getElementById("text").innerHTML = "<p>Here is your  problem:</p>" + problem  + "<br><p>Round your answers to two decimal places, as needed</p><br>"
}

const roundToTwo = (num) => {    
    return +(Math.round(num + "e+2")  + "e-2");
}
const sineAnswer= () => {
    let cAnswer = Math.sin(num2 * Math.PI/180.0) * num1;
    const sine = roundToTwo(cAnswer);
    console.log(num2, num1);
    console.log(Math.sin(num2));
    console.log(sine)  
    return sine;       
} 

const sine2Answer= () => {
    let cAnswer = num1 / Math.sin(num2 * Math.PI/180.0) ;
    const sine2 = roundToTwo(cAnswer);
    console.log(num2, num1);
    console.log(Math.sin(num2));
    console.log(sine2)   
    return sine2;       
} 

const sineResponse = (answer) => {
    return `No, you needed to use the sine ratio sin(angle) = opposite / hypoteneuse. The answer is: ${ answer }.

    Here is a tutorial on the sine ratio if you want to learn it:
    <a href="https://www.youtube.com/watch?v=NhK0Rdv32ww" target="_blank">Sine ratio tutorial</a>
   `
}

const arcSineAnswer= () => {
    let cAnswer = Math.asin(num1 / num2)  * 180.0/Math.PI;
    const arcsine = roundToTwo(cAnswer);
    console.log(num2, num1);
    console.log(Math.asin(num1/num2));
    console.log(arcsine)  
    return arcsine;       
} 

const arcSineResponse = (answer) => {
    return `No, you needed to use the sine inverse ratio of  angle = sin^-1 (opposite / hypoteneuse). The answer is: ${ answer }.

    Here is a tutorial on the inverse trig functions if you want to learn it:
    <a href="https://www.youtube.com/watch?v=y3LajBcnb7s" target="_blank">Inverse trig function tutorial</a>
   `
}

const coSineAnswer = () => {
    let cAnswer = Math.cos(num2 * Math.PI/180.0) * num1;
    const cosine = roundToTwo(cAnswer);
    console.log(num2, num1);
    console.log(Math.cos(num2));
    console.log(cosine)  
    return cosine;       
} 

const coSine2Answer = () => {
    let cAnswer = num1 / Math.cos(num2 * Math.PI/180.0);
    const cosine2 = roundToTwo(cAnswer);
    console.log(num2, num1);
    console.log(Math.cos(num2));
    console.log(cosine2)  
    return cosine2;  
}

const coSineResponse = (answer) => {
    return `No, you needed to use the cosine ratio cos(angle) = adjacent / hypoteneuse. The answer is: ${ answer }.

    Here is a tutorial on the sine, cosine and tangent ratios if you want to learn them:
    <a href="https://www.youtube.com/watch?v=8v9vwQvt6Rc" target="_blank">Trig ratios tutorial</a>
   `
}

const arcCosineAnswer= () => {
    let cAnswer = Math.acos(num1 / num2)  * 180.0/Math.PI;
    const arcCosine = roundToTwo(cAnswer);
    console.log(num2, num1);
    console.log(Math.acos(num1/num2));
    console.log(arcCosine)  
    return arcCosine;       
} 

const arcCosineResponse = (answer) => {
    return `No, you needed to use the cosine inverse ratio of  angle = cos^-1 (adjacent / hypoteneuse). The answer is: ${ answer }.

    Here is a tutorial on the inverse trig functions if you want to learn it:
    <a href="https://www.youtube.com/watch?v=y3LajBcnb7s" target="_blank">Inverse trig function tutorial</a>
   `
}

const tanAnswer= () => {
    let cAnswer = Math.tan(num2 * Math.PI/180.0) * num1;
    const tangent = roundToTwo(cAnswer);
    console.log(num2, num1);
    console.log(Math.tan(num2));
    console.log(tangent)  
    return tangent;       
} 

const tan2Answer = () => {
    let cAnswer = num1 / Math.tan(num2 * Math.PI/180.0);
    const tangent2 = roundToTwo(cAnswer);
    console.log(num2, num1);
    console.log(Math.tan(num2));
    console.log(tangent2)  
    return tangent2;

}

const tanResponse = (answer) => {
    return `No, you needed to use the tan ratio tan(angle) = opposite / adjacent. The answer is: ${ answer }.

    Here is a tutorial on the sine, cosine and tangent ratios if you want to learn them:

    <a href="https://www.youtube.com/watch?v=8v9vwQvt6Rc" target="_blank">Trig ratios tutorial</a>
   `
}

const arcTanAnswer= () => {
    let cAnswer = Math.atan(num1 / num2)  * 180.0/Math.PI;
    const arcTan = roundToTwo(cAnswer);
    console.log(num2, num1);
    console.log(Math.acos(num1/num2));
    console.log(arcTan)  
    return arcTan;       
} 

const arcTanResponse = (answer) => {
    return `No, you needed to use the tan inverse ratio of  angle = tan^-1 ( opposite / adjacent). The answer is: ${ answer }.

    Here is a tutorial on the inverse trig functions if you want to learn it:
    <a href="https://www.youtube.com/watch?v=y3LajBcnb7s" target="_blank">Inverse trig function tutorial</a>
   `
}

const pythoAnswer = () => {
    let cAnswer = Math.sqrt((num1 * num1) + (num2 * num2));
    const hypoteneuse = roundToTwo(cAnswer);
    console.log(num2, num1);
    console.log(cAnswer);
    console.log(hypoteneuse)  
    return hypoteneuse;  
}

const pytho2Answer = () => {
    let cAnswer = Math.sqrt((num2 * num2) - (num1 * num1));
    const leg = roundToTwo(cAnswer);
    console.log(num2, num1);
    console.log(cAnswer);
    console.log(leg)  
    return leg;  
}

const pythoResponse = (answer) => {
    return `No, you needed to use the Pythogorean theorem c^2 = a^2 + b^2.   The answer is: ${ answer }.

    Here is a tutorial on the Pythogoras theorem if you want to learn it:
    <a href="https://www.youtube.com/watch?v=-vXr5gwBxVg" target="_blank">Pythogoras theorem tutorial</a>
   `
}

const response = (answer, correctAnswer, result, cresponse) => {
    console.log(answer)
    if(answer === correctAnswer){
        result.innerHTML =  "Yes, you got that right, good job!"
    } 
    else {
        result.innerHTML = cresponse;
    }

}

const submit = () => {
    let result = document.getElementById("Results");
    let answer = document.getElementById("answer").value;
    console.log(answer)
    const floatAnswer = +answer;
    let correctAnswer = 0;
    let cresponse = '';
    if(sineList.includes(problem)){
        correctAnswer = sineAnswer();
        cresponse = sineResponse(correctAnswer);    
    }
    else if(sine2List.includes(problem)){
        correctAnswer = sine2Answer();
        cresponse = sineResponse(correctAnswer);
    }
    else if(arcSineList.includes(problem)){
        correctAnswer = arcSineAnswer();
        cresponse = arcSineResponse(correctAnswer);
    }
    else if(cosList.includes(problem)){
        correctAnswer = coSineAnswer();
        cresponse = coSineResponse(correctAnswer);
    }
    else if(cos2List.includes(problem)){
        correctAnswer = coSine2Answer();
        cresponse = coSineResponse(correctAnswer);
    }
    else if(arcCosList.includes(problem)) {
        correctAnswer = arcCosineAnswer();
        cresponse = arcCosineResponse(correctAnswer);
    }
    else if(tanList.includes(problem)) {
        correctAnswer = tanAnswer();
        cresponse = tanResponse(correctAnswer);
    }
    else if(tan2List.includes(problem)) {
        correctAnswer = tan2Answer();
        cresponse = tanResponse(correctAnswer);
    }
    else if(arcTanList.includes(problem)){
        correctAnswer = arcTanAnswer();
        cresponse = arcTanResponse(correctAnswer);
    }
    else if(pythoList.includes(problem)){
        correctAnswer = pythoAnswer();
        cresponse = pythoResponse(correctAnswer);
    }
    else if(pytho2List.includes(problem)){
        correctAnswer = pytho2Answer();
        cresponse = pythoResponse(correctAnswer);
    }
    response(floatAnswer, correctAnswer, result, cresponse);
    document.getElementById("nextButton").style.display ="inline-block";
}