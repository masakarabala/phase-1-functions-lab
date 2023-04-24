// Code your solution in this file!
function distanceFromHqInBlocks(someValue){
    if(someValue>42){
        return someValue-42 ;
    }else{
        return 42-someValue;
    }
 
}
console.log(distanceFromHqInBlocks(30));//42-30=12

function distanceFromHqInFeet(someValue){
    const distanceInFeet = distanceFromHqInBlocks(someValue)*264;
    return distanceInFeet;
   // or return distanceFromHqInBlocks(someValue)*264 ;
}
console.log(distanceFromHqInFeet(30));//42-30=12 12*264=3168

function distanceTravelledInFeet(start,destination){
    if(start>destination){
        return (start-destination)*264 ;
    }else{
        return (destination-start)*264;
    }
}
console.log(distanceTravelledInFeet(13,5));

function calculatesFarePrice(start, destination) {
    let distance=distanceTravelledInFeet(start,destination);
    if(distance<=400){
        return 0;
    }
     else if (distance>400 && distance<=2000){
       //return (distance-400)* 0.02;
       return (distance-400)* 2 / 100;
    }
    else if (distance>2000 && distance<=2500){
        
        return 25;
     }
     else {
       
        return 'cannot travel that far';
     }
  }
  console.log(calculatesFarePrice(13,5));
 