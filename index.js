//array of images for tracking user style selections
let avatar = []

//for use in randomizeAvatar()
let avatarImageIDs = [
  ["background-1"],
  ["aura-aphroditian_dark_1", "aura-aphroditian_dark_2", "aura-aphroditian_dark_3", "aura-aphroditian_dark_4", "aura-aphroditian_dark_5", "aura-aphroditian_dark_6", "aura-aphroditian_dark_7", "aura-aphroditian_hipster", "aura-aphroditian_neptune", "aura-apollonian_dark_1", "aura-apollonian_dark_2", "aura-apollonian_dark_3", "aura-apollonian_dark_4", "aura-apollonian_dark_5", "aura-apollonian_dark_6", "aura-apollonian_dark_7", "aura-apollonian_hipster", "aura-apollonian_neptune"],
  ["skin-pale", "skin-brown", "skin-clay", "skin-pink", "skin-tan"],
  ["shirt-red_puffer", "shirt-ribbon_lolita", "shirt-sweater_tie", "shirt-punk_rock", "shirt-jesus_tank"],
  ["necklace-girl"],
  ["mouth-cheeky", "mouth-flat", "mouth-smile"],
  ["lens-green", "lens-black", "lens-blue", "lens-brown", "lens-fuschia", "lens-gray", "lens-green_blue", "lens-hazel", "lens-light_blue", "lens-peach", "lens-pink_tan", "lens-red", "lens-sunshine", "lens-white"],
  ["eyes-alien", "eyes-amber", "eyes-aqueous", "eyes-black_ceramic", "eyes-black_spiral", "eyes-bug", "eyes-glowing", "eyes-gold", "eyes-gray", "eyes-leaf_hearts", "eyes-lilac_hearts", "eyes-red_tv_hearts", "eyes-sleepy", "eyes-spectral", "eyes-tv_hearts", "eyes-white_spiral", "eyes-classic", "eyes-sparkle", "eyes-teary"],
  ["eyebrow-curious", "eyebrow-raised_long", "eyebrow-thick_short", "eyebrow-thin_long"],
  ["face-star_heart"],
  ["earring-diamond_stud", "earring-dual_gold_rings", "earring-dual_silver_rings", "earring-sakura"],
  ["glasses-blue_mottega"],
  ["hair-brown_bowl", "hair-og_blonde", "hair-og_blue", "hair-og_orange"],
  ["hat-fuzz_cow", "hat-trucker_911", "hat-fuzz_earmuffs"],
  ["extras-stoge"],
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
    else if(element.className == 'necklace') sortedAvatar[3]=element
    else if(element.className == 'shirt') sortedAvatar[4]=element
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
    let randomID = category[Math.floor(Math.random() * i)]
    let newElement = document.getElementById(randomID)
    changeInto(newElement)
    redrawAvatar()
  });
}

function download() {
  const canvas = document.getElementById("avatarCanvas");
  const image = canvas.toDataURL();
  const link = document.createElement("a");
  link.href = image;
  link.download = "image.png";
  link.click();
}