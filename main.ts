//Making Array of countries to be vist
let countriesTOVisit = ["Japan","Saudi Arabia","Italy","Germany"]

console.log("orignal order",countriesTOVisit);

 //print the array in alphatical order without modifying the actual array
 console.log("Alphabetical Order",[...countriesTOVisit].sort());

 // Show that Array is still in its orignal order
 console.log("still in its orignal Order",countriesTOVisit);

  //print the array in reverse alphatical order without modifying the actual array
  console.log("Alphabetical Order",[...countriesTOVisit].reverse());

  // Show that Array is still in its orignal order
 console.log("still in its orignal Order",countriesTOVisit);

 //We have changed the orignal array order
 console.log("orignal array reversed",countriesTOVisit.reverse());

 //print the array to show that its back to its orignal order
 console.log(" Back to orignal order",countriesTOVisit.reverse());

 //Print the array to show that its order has been changed in alphabetical order
 console.log("sorted in alphabetical order",countriesTOVisit.sort());

  //We have changed again the orignal array order in reverse order again
  console.log("orignal array reversed",countriesTOVisit.reverse());