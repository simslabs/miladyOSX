function gallery(currDockIcon) {
  let appBox = `.box-box[appbox="Gallery"]`;
  toRemoveLaunchPad();
  currDockIcon.style.animation = "box 1s  alternate";
  if (!currDockIcon.querySelector(".active-dot")) {
    let divDot = document.createElement("div");
    divDot.setAttribute("appBox-dot", "Gallery-dot");
    divDot.classList = "active-dot";
    currDockIcon.append(divDot);
  }

  let boxBox = document.querySelector(appBox);
  if (boxBox) {
    currDockIcon.removeAttribute("style");
    return;
  }

  viewMedia();

  let div = document.createElement("div");
  div.classList = "box-box";
  div.setAttribute("appBox", "Gallery");
  div.style.zIndex = "75";
  div.innerHTML = `
        <div class="box-container">
            <div class="mac-dialogBox-title">
                <div class="mac-dialogBox-title-3option-box">
                    <div class="mac-dialogBox-title-icon1">
                    </div>
                    <div class="mac-dialogBox-title-icon2">
                    </div>
                    <div class="mac-dialogBox-title-icon3">
                    </div>
                </diV>
                <div class="mac-dialogBox-title-boxText">
                    Gallery
                </div>
            </div>
            <div class="gallery-appSiteBox">
                <div class="gallerySideNavBlur">
                    <div class="gallerySideNav">
                        <div class="navDataContainer">
                            <div class="navLib">Photos</div>
                            <div class="navbox specialNavBox">
                                    <span class="material-icons-outlined spanBox">
                                        photo_library
                                    </span>
                                    <span class="navText">
                                        Library
                                    </span>
                            </div>
                            <div class="navbox">
                                    <span class="material-icons-outlined spanBox">
                                        pending
                                    </span>
                                    <span class="navText">
                                        Memories
                                    </span>
                            </div>
                            <div class="navbox">
                                    <span class="material-icons-outlined spanBox">
                                            account_circle
                                    </span>
                                    <span class="navText">
                                        Memes
                                    </span>
                            </div>
                            <div class="navbox">
                                    <span class="material-icons-outlined spanBox">
                                        favorite_border
                                    </span>
                                    <span class="navText">
                                        Favorites
                                    </span>
                            </div>
                            <div class="navbox">
                                    <span class="material-icons-outlined spanBox">
                                        recent_actors
                                    </span>
                                    <span class="navText">
                                    Recent
                                    </span>
                            </div>
                            <div class="navbox">
                                    <span class="material-icons-outlined spanBox">
                                        file_download
                                    </span>
                                    <span class="navText">
                                        Import
                                    </span>
                            </div>
                        </div>
                        <div class="navDataContainer upperBorder2ndBox">
                            <div class="navLib">Albums</div>
                            <div class="navbox">
                                    <div class="albumsBox miladyMaker">
                                    </div>
                                    <span class="navText">
                                        Milady Maker
                                    </span>
                            </div>
                            
                            <div class="navbox">
                                    <div class="albumsBox miladyAura">
                                    </div>
                                    <span class="navText">
                                        Milady Aura
                                    </span>
                            </div>
                            <div class="navbox">
                                    <div class="albumsBox pixeladyMaker">
                                    </div>
                                    <span class="navText">
                                    Pixelady Maker
                                    </span>
                            </div>
                            <div class="navbox">
                                    <div class="albumsBox boredMiladyMaker">
                                    </div>
                                    <span class="navText">
                                        Bored Milady Maker
                                    </span>
                            </div>
                            <div class="navbox">
                                    <div class="albumsBox tojiCPU">
                                    </div>
                                    <span class="navText">
                                        Toji 100
                                    </span>
                            </div>
                            <div class="navbox">
                                    <div class="albumsBox tojiDiscBuddy">
                                    </div>
                                    <span class="navText">
                                        Disc Buddies
                                    </span>
                            </div>
                           
                        </div>
                    </div>
                </div>
                
                <div class="gallery-container">
                    <div class="galleryTitle">
                        <div class="periodPhotoDiv">
                            <div class="containerBox">
                                <div class="periodBox yearsBox">
                                    Years
                                </div>
                                <div class="periodBox monthsBox">
                                    Months
                                </div>
                                <div class="periodBox daysBox">
                                    Days
                                </div>
                                <div class="periodBox allPhotosBox">
                                    All Photos
                                </div>
                            </div>
                        </div>
                        <div class="iconPhotoDiv">
                            <div class="iconDiv infoIcon">
                                <span class="material-icons-outlined spanBox">
                                info
                                </span>
                            </div>
                            <div class="iconDiv">
                                <span class="material-icons-outlined spanBox">
                                file_upload
                                </span>
                            </div>
                            <div class="iconDiv">
                                <span class="material-icons-outlined spanBox">
                                favorite_border
                                </span>
                            </div>
                            <div class="iconDiv">
                                <span class="material-icons-outlined spanBox">
                                model_training
                                </span>
                            </div>
                            <div class="gallerySearchBox">
                                <input type="text"
                                placeholder="Search">
                            </div>
                        </div>
                    </div>
                    <div class="innerGalleryMediaContainer">
                            
                    </div>
                </div>
            </div>
        </div>
    `;
  divScreenContainer.append(div);

  //Z-INdex
  let currBox = document.querySelector('.box-box[appbox="Gallery"]');
  if (currBox) {
    currDockIcon.addEventListener("click", function () {
      if ((lastZIndexAppBOx != lastZIndexAppBOx) != "Gallery") {
        let lastOpenBox = document.querySelector(
          `.box-box[appbox="${lastZIndexAppBOx}"]`
        );
        if (lastOpenBox) {
          lastOpenBox.style.zIndex = "0";
        }
      }
      let currBox = document.querySelector('.box-box[appbox="Gallery"]');
      currBox.style.zIndex = "80";
      lastZIndexAppBOx = "Gallery";
    });
  }

  cancelCircle(currDockIcon, appBox);
  fullScreenCircle(appBox);
  minimize(appBox);
}
