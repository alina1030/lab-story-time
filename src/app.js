//Progression 1:
//We've got some basic info about Karen's home
let moreAboutHome=(address, distanceFromTown, hasNeighbours)=>
{
    
    let a = typeof(address)+typeof(distanceFromTown)+typeof(hasNeighbours);
    return a;

//Debug the type of data provided
//Return the types concatenated in a single variable
}

//Progression 2:
let moreAboutKaren = (parents, noOfSiblings, isNuclearFamily) =>
{
    if (typeof(parents)==='string'&&typeof(noOfSiblings)==='number'&&typeof(isNuclearFamily)==='boolean')
     return true;
     else
     return false;
//Check if the data given is of the right type
//parents = String, noOfSiblings = Number, isNuclearFamily = Boolean
}

//Progression 3:
let doesFriendExist = (ageInText, ageInNumber)=>
{
    if(isNaN(ageInText))
     return ageInText;
    else if(isNaN(ageInNumber))
      return ageInNumber; 
    
//Lily is suspicious about Karen's new friend
//Karen tells her friend's age and even writes it down
//Check which one those is not a number (NaN) and return that value
}

//Progression 4:
//Lily gave Karen x sweets
//Karen ate y sweets herself
//On her way to the river, she ate another z sweets every n meters travelled
//Her friend divided the remaining sweets into 2 parts for each
//How many sweets did her friend get to eat?
let sweetTooth=(totalNoOfSweets, sweetsConsumedByKaren, sweetsConsumedInNMeters, metersToTravel)=>
{
    if(typeof(totalNoOfSweets)!=='number'||typeof(sweetsConsumedByKaren)!=='number'||typeof(sweetsConsumedInNMeters)!=='number'||typeof(metersToTravel)!=='number')
     {let a="No sweets for Karen's friend";
     return a;}

     else if(totalNoOfSweets==0&&sweetsConsumedByKaren==0&&sweetsConsumedInNMeters==0&&metersToTravel==0)
        return 0; 

    else
     return ((totalNoOfSweets - sweetsConsumedByKaren - sweetsConsumedInNMeters * metersToTravel)/2);     
       
}

//Progression 5:
//As Lily moves closer, it gets colder. She checks the temperature on her mobile
//It only shows in fahrenheit. Convert the data to celsius and return it.
let convertToCelsius =(fahrenheit)=>
{
    //return (5/9) * (fahrenheit-32);

    if(typeof(fahrenheit)==='undefined'||typeof(fahrenheit)==='string'||typeof(fahrenheit)==='object')
    {
        let a = 'Technical Error!';
        return a;
    }
    else
    return (5/9) * (fahrenheit-32);
}

//Progression 6:
//Lily can now do multiple things to deal with this
//1. Take her daughter to a doctor
//2. Talk to her husband about it
//3. Counsel her daughter herself
//4. Lock her daughter in her room
//Given a value, return which of these above actions Lily would take
 let aDifficultChoice=(choice)=>
 {
     switch(choice)
     {
         case 1: {let a = 'Take her daughter to a doctor'; return a; break;}
         case -1: {let a =  'Break down and give up all hope'; return a; break;}
         case undefined : {let a =  "Wasn't able to decide"; return a; break;}
         case 'I give up' : {let a =  'Refused to do anything for Karen'; return a; break;}
     }
 }

//Progression 7:
//Lily realized that she'd hurt her daughter
//All she wants now is for her to stop crying
//She refuses to talk to her but Lily doesn't stop trying
//She tries out multiple things hoping for the best
//Take all of Lily's strategies and concatenate them to a single var
//Seperate the strategies by a single space
//Return the length of the complete strategy
