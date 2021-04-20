var cat = {
 name: "Fluffy",
 activities: ['play', 'eat cat food'],
 catFriends: [
 {
 name: 'bar',
 activities: ['be grumpy', 'eat bread omblet'],
 weight: 8,
 furcolor: 'white'
 }, 
 {
 name: 'foo',
 activities: ['sleep', 'pre-sleep naps'],
 weight: 3
 }
 ]
}
//Adding height and weight to Fluffy
cat.height=3;
cat.weight=3;
//Fluffy name is spelled wrongly. Updating it to Fluffyy
cat.name="Fluffyy";
//Listing all the activities of Fluffyy’s catFriends.
for (let i in cat.catFriends)
{console.log(`Cat friend activities : ${cat.catFriends[i].activities}`);}
//printing the catFriends name
for (let i in cat.catFriends)
{console.log(`name = ${cat.catFriends[i].name}`);}
//printing the total weight of cat friends
let totalweight = 0;
for (let i in cat.catFriends){
    totalweight+=cat.catFriends[i].weight;
}
console.log(`Total weight = ${totalweight}`);
//printing the total activities of all cats
console.log(`Total activities : ${cat.activities}`);
for (let i in cat.catFriends){
    console.log(cat.catFriends[i].activities);
}
//Adding 2 more activities to bar & foo cats
cat.catFriends[0].activities.push("sleep");
cat.catFriends[0].activities.push("play");
cat.catFriends[1].activities.push("eat");
cat.catFriends[1].activities.push("be lazy");
//updating the fur colour of bar
cat.catFriends[0].furcolor="grey";



