// Code your solution here
//drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby'];
//drivers2 = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'bobby'];

function findMatching(drivers, string){
let result = drivers.filter((item)=>{return item.toLowerCase()===string.toLowerCase();});
return result;
}
findMatching(drivers, 'Bobby');
findMatching(drivers, 'Sammy');
findMatching(drivers, 'Bobby');


function fuzzyMatch (drivers, string2){
let result1= drivers.filter((item)=>{return item.toLowerCase().substring(0,string2.length)===string2.toLowerCase();});
return result1;
}
fuzzyMatch(drivers, 'Sa');
fuzzyMatch(drivers, 'y');
fuzzyMatch(drivers, 'mm');

function matchName(drivers,string3){
    let result2= drivers.filter((item)=>{
        return item.name===string3;
    });
    return result2;
}
matchName(drivers, 'Bobby');