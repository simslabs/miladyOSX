//array of images for tracking user style selections
let avatar = []

//for use in randomizeAvatar()
let avatarImageIDs = [
  [],
  []
]

//if the style selection is visible, change out of it.
//if the style selection is not visible, change into it.
function toggleVisibility(id){
  let element = document.getElementById(id)
  if( avatar.includes(element) ){
    changeOutOf(element)
  } else {
    changeInto(element)
  }
  redrawAvatar()
}

//updates canvas to be reflective of avatar[]
function redrawAvatar(){
  let context = document.getElementById('avatarCanvas').getContext('2d')
  context.clearRect(0, 0, context.canvas.width, context.canvas.height);
  //sort avatar so that the images get stacked correctly...
  let sortedAvatar = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null]
  avatar.forEach((element) => {
    if(element.className == 'background') sortedAvatar[0]=element
    else if(element.className =='auras') sortedAvatar[1]=element
    else if(element.className == 'skin') sortedAvatar[2]=element
    else if(element.className == 'shirt') sortedAvatar[3]=element
    else if(element.className == 'necklace') sortedAvatar[4]=element
    else if(element.className == 'mouths') sortedAvatar[5]=element
    else if(element.className =='lens') sortedAvatar[6]=element
    else if(element.className == 'eyes') sortedAvatar[7]=element
    else if(element.className == 'eyebrows') sortedAvatar[8]=element
    else if(element.className == 'face') sortedAvatar[9]=element
    else if(element.className == 'earring') sortedAvatar[10]=element
    else if(element.className =='glasses') sortedAvatar[11]=element
    else if(element.className == 'hairstyles') sortedAvatar[12]=element
    else if(element.className == 'hat') sortedAvatar[13]=element
    else if(element.className == 'extras') sortedAvatar[14]=element
  });
  sortedAvatar.forEach((element) => {
    if(element != null)
      context.drawImage(element,0,0,500,625)
  });
}

//adds newElement to avatar, removes all other elements that share a category with it
function changeInto(newElement){
  avatar.forEach((oldElement, i) => {
    if(oldElement.className == newElement.className)
      changeOutOf(oldElement)
  })
  avatar.push(newElement)
}

//a, b: img elements representing style-options for the avatar
//this works because the id of every mouth-image starts with the word "mouth", etc
// function sameCategory(imgElement1, imageElement2){
//   return imgElement1.id.substring(0,3) == imageElement2.id.substring(0,3)
// }

function changeOutOf(oldElement){
  avatar.splice(avatar.indexOf(oldElement), 1)
}

//randomly selects and changes into one style from each available category
//TODO: avatarImages is not populated yet
function randomizeAvatar() {
  avatarImageIDs.forEach((category, i) => {
    let randomID = category[Math.floor(Math.random() * 5)]
    let newElement = document.getElementById(randomID)
    changeInto(newElement)
    redrawAvatar()
  });
}