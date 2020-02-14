//1. COMPLETE VARIABLE AND FUNCTION DEFINITIONS//

const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

//2. RAW TEXT STRINGS//

var storyText = 'It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.';

var insertX = ['Willy the Goblin' , 'Big Daddy' , 'Father Christmas'];

var insertY = ['the soup kitchen' , 'Disneyland' , 'the White House'];

var insertZ = ['spontaneously combusted' , 'melted into a puddle on the sidewalk' , 'turned into a slug and crawled away'];


/*3. EVENT LISTENER AND PARTIAL FUNCTION DEFINITION
randomize.addEventListener('click', result);
 When randomize button is clicked,
 the result is a random value from :insertx:, :inserty: and :insertz:*/

randomize.addEventListener('click', result);

function result() {
    newStory = storyText

    /* New variable xItem, yItem and zItem is equal to the random value pulled from inside of the 
    arry  var insertX,  var insertY, and var insertZ */

    var xItem = randomValueFromArray(insertX)
    var yItem = randomValueFromArray(insertY)
    var zItem = randomValueFromArray(insertZ)

    /* New story now equals to the new value from xItem, yItem and zItem*/

    newStory = newStory.replace(':insertx:' , xItem);
    newStory = newStory.replace(':inserty:' , yItem);
    newStory = newStory.replace(':insertz:' , zItem);
    newStory = newStory.replace(':insertx:' , xItem);


    /* If custom name value is not equal to blank, let user name text
    = the custom name value. Then Replace Bob with user name text in newStory*/
  if(customName.value !== '') {
    let name = customName.value;
    newStory = newStory.replace('Bob' , name);
  }

/* If UK is checked as the location, take  the total weight and multiply it
 by the conversion rate, then round to the nearest decimal, and rename weight "stone".
 The temperature is then converted using the conversion rate, rounded to the nearest decimal, 
 and renamed "centigrade".
*/

  if(document.getElementById("uk").checked) {
    var weight = Math.round(300*0.0714286) + ' stone';
    var temperature =  Math.round((94-32)*5/9) + ' centigrade';
    newStory = newStory.replace('94 fahrenheit', temperature);
    newStory = newStory.replace('300 pounds', weight);

  }


  story.textContent = newStory;
  story.style.visibility = 'visible';
}