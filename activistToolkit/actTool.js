/* .js files add interaction to your website */

// start of fact generator on climate change page
var factList=[
  "2021 was the sixth-warmest year on record. The average global temperature was 0.84°C (1.51°F) above the 20th century average. It was also 0.15°C (0.27°F) below 2016, the warmest year on record.", /*0*/
  "Average US rainfall for the last decade is 3.6% higher than the average rainfall for the previous decade.", /*1*/
  "The biggest villain in this climate emergency is the fossil fuel industry", /*2*/
  "The people who contribute the least to climate change are the ones who face the worst impacts. For example, due to the effects of climate change an estimated 13 million people across Ethiopia, Kenya, and Somalia have been displaced in search of water and pasture, just in the first quarter of 2022, despite having done little to cause the climate crisis.", /*3*/
  "The richest one percent of the world's population are responsible for more than twice as much carbon pollution as the three billion people who made up the poorest half of humanity in the last 25 years.", /*4*/
  "While the US has many laws in place—like the National Environmental Policy Act and the Clean Air Act—that could be protecting communities from fossil fuel pollution and climate change, unfortunately, politics and big polluters often get in the way." /*5*/
  
];

var fact = document.getElementById("fact");
var myButton = document.getElementById("myButton");
var count = 0;

myButton.addEventListener("click", displayFact);

function displayFact(){
  fact.innerHTML = factList[count];
  count++;
  if(count ==factList.length){
    count = 0;
  }
}



// end of fact generator on climate change page
