const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg ;

function preload() {
    // create getBackgroundImg( ) here
      getBackgroundImg();
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;


}

function draw(){
    if(backgroundImg){
       background(backgroundImg);
    }
    // add condition to check if any background image is there to add


    Engine.update(engine);

    // write code to display time in correct format here
   


}

async function getBackgroundImg(){

    // write code to fetch time from API
    var response = await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata");
    //change the data in JSON format
    var responseJson = await response.json();
    var datetime = responseJson.datetime;
   // write code slice the datetime
    var hour = datetime.slice(11,13);
    // add conditions to change the background images from sunrise to sunset
    if(hour >= 02 && hour <= 03)
    {
        bg = "sunrise1.png"

    }
    if(hour >=04 && hour <= 05 )
    {

        bg = "sunrise2.png"
    }
    if(hour >= 06 && hour <= 07)
    {
        bg = "sunrise3.png"
    }
    if(hour >= 08 && hour <= 10)
    {
        bg = "sunrise5.png"
    }
    if(hour >= 11 && hour <= 12)
    {
        bg = "sunrise6.png"
    }
    if(hour >= 13 && hour <= 14)
    {
        bg = "sunset7.png"
    }
    if(hour >= 15 && hour <= 16)
    {
        bg = "sunset8.png"
    }
    if(hour >= 17 && hour <= 18)
    {
        bg = "sunset9.png"

    }
    if(hour >= 19 && hour <= 20)
    {
        bg = "sunset10.png"

    }
    if(hour >= 21 && hour <= 22)
    {
        bg = "sunset11.png"
    }
    if(hour >= 23 && hour <= 24)
    {
        bg = "sunset12.png"
    }
    


    //load the image in backgroundImg variable here
    backgroundImg = loadImage(bg);

}
