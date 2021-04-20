var myCar = {
 make: 'Bugatti',
 model: 'Bugatti La Voiture Noire',
 year: 2019,
 accidents: [
 {
 date: '3/15/2019',
 damage_points: '5000',
 atFaultForAccident: true
 },
 {
 date: '7/4/2022',
 damage_points: '2200',
 atFaultForAccident: true
 },
 {
 date: '6/22/2021',
 damage_points: '7900',
 atFaultForAccident: true
 }
 ]
}
//Looping over the accidents array. Change atFaultForAccident from true to false.
for(let i in myCar.accidents){
    myCar.accidents[i].atFaultForAccident=false;
}
//Printing the dates of my accidents
for(let i in myCar.accidents){
    console.log(`Accident date : ${myCar.accidents[i].date}`);
}