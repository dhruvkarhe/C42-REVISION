var name1;
var weekEnd = "sunday";
function setup() {
  if (weekEnd === "monday") {
    console.log("its a weekday");
  } else if (weekEnd === "sunday") {
    console.log("its a weekend");
  }
  name1 = "my exams are over";
  console.log(name1.length);
  console.log(name1.toLowerCase());
  console.log(name1.replace("over", "finished"));

  var arr = ["Dhruv", "Yagami", "Riyausaki", 19, 21];
  console.log(arr.length);
  console.log(arr[2]);
  console.log(arr[4]);

for(var i=0;i<arr.length;i=i+1){
  console.log(arr[i])

}




  var stateObj = [
    {
      state: "Maharashtra",
      food: "misal pav",
    },

    {
      state: "Punjab",
      food: "aloo Paratha",
    },
    {
      state: "west Bengal",
      food: "fish",
    },
  ];
  for(var state in stateObj){
    console.log(stateObj[state].state);
console.log(stateObj[state].food)
  }
}

function draw() {
  drawSprites();
}
