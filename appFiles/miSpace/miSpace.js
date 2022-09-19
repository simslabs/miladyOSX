function miSpace(currDockIcon) {
  let appBox = `.box-box[appbox="miSpace"]`;
  toRemoveLaunchPad();
  currDockIcon.style.animation = "box 1s  alternate";
  if (!currDockIcon.querySelector(".active-dot")) {
    let divDot = document.createElement("div");
    divDot.setAttribute("appBox-dot", "miSpace-dot");
    divDot.classList = "active-dot";
    currDockIcon.append(divDot);
  }

  let boxBox = document.querySelector(appBox);
  if (boxBox) {
    currDockIcon.removeAttribute("style");
    return;
  }

  let div = document.createElement("div");
  div.classList = "box-box";
  div.setAttribute("appBox", "miSpace");
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
                    miSpace
                </div>
            </div>
            <div class="miSpace-appSiteBox">
                <div class="miSpace-headBox"> 
                    <div class="headBox-container">
                        <div class="logoSearch-container">
                            <div class="miSpace-logo">
                                <img src="./images/miSpace.png" alt="logo">
                            </div>
                            <div class="miSpace-searchBox">
                                <input type="text" placeholder="Search">
                            </div>
                        </div>
                        <div class="miSpace-iconContainer">
                            <div class="miSpace-iconBox">
                                <span class="material-icons-round">
                                home
                                </span>
                                Home
                                
                            </div>
                            <div class="miSpace-iconBox">
                                <span class="material-icons-round">
                                people
                                </span>
                                Network
                            </div>
                            <div class="miSpace-iconBox">
                                <span class="material-icons-round">
                                notifications
                                </span>
                                Notifications
                            </div>
                            <div class="miSpace-iconBox ldln-iconBox-MeText">
                                <span class="ldln-iconBox-Me">
                                
                                </span>
                                Profile
                                <div class="miSpace-iconBox-select">
                                </div>
                            </div>
                        </div>
                    </div>   
                </div>
                <div class="profile-view-container">
                    
                    <div class="profile-view-left-container">
                        <div class="inner-profileView-Box">
                            <div class="inner-profileView-Banner">
                                <div class="banner-Camera-Icon">
                                    <span class="material-icons-round">
                                    photo_camera
                                    </span>
                                </div>
                                <img  class="prfile-mypic" src="./appFiles/miSpace/image/miladyIntern.png" alt="profile">
                            </div>
                            <div class="inner-profileView-content">

                                <div class="inner-profileView-content-logo">
                                    <span class="material-icons-outlined">
                                        edit
                                    </span>
                                </div>

                                <div class="inner-profileView-content-Text">
                                    Simslabs
                                </div>
                                <div class="inner-profileView-content-bioText">
                                Class of 2022 Milady that tinkers with self-existence
                                </div>
                                <div class="inner-profileView-content-address">
                                Midnight Fields, Network Gardens
                                </div>
                                <div class="inner-profileView-content-connections"> <span>9000+ Connections</span>
                                </div>

                                <div class="inner-profileView-content-optionBox">
                                    <div class="content-optionBox openToBox">Friend</div>
                                    <div class="content-optionBox">More</div>
                                </div>

                            </div>
                        </div> 
                        <div class="inner-dashBoard-container">
                            <div class="inner-dashboard-viewsDetail-container">
                                <div class="viewsDetail-box">
                                    <div class="viewsDetail-box-number">9999</div>
                                    <div class="viewsDetail-box-TextData"> Who Viewed Your Profile
                                    </div>
                                </div>

                                <div class="viewsDetail-box viewsDetail2ndBox">
                                    <div class="viewsDetail-box-number">2222</div>
                                    <div class="viewsDetail-box-TextData"> Friends
                                    </div>
                                </div>

                                <div class="viewsDetail-box viewsDetail3rdBox">
                                    <div class="viewsDetail-box-number">09/18/2022</div>
                                    <div class="viewsDetail-box-TextData">  Last Login
                                    </div>
                                </div>
                            </div>
                            <div class="inner-dashboard-data-container">
                                
                            </div>
                        </div>
                        <div class="inner-blank-view"></div>


                    </div>
                    <div class="profile-view-midBlank-container">
                    </div>
                    <div class="profile-view-right-container">
                        <div class="edit-langProfile-box">
                            <div class= "langProfile-box langProfile-border">
                                Edit Public Profile
                                <span class="material-icons-round questionMarkIcon">
                                help
                                </span>
                            </div>
                        </div>
                        <div class="people-viewed-container">
                            <div class="peopleAlsoViewed">
                                Things That Interest Me
                            </div>
                            <div class="inner-profileView-content-bioText">
                                <li>Fish</li>
                                <li>Milady</li>
                                <li>You <3</>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
  divScreenContainer.append(div);

  //Z-INdex
  let currBox = document.querySelector('.box-box[appbox="miSpace"]');
  if (currBox) {
    currDockIcon.addEventListener("click", function () {
      if ((lastZIndexAppBOx != lastZIndexAppBOx) != "miSpace") {
        let lastOpenBox = document.querySelector(
          `.box-box[appbox="${lastZIndexAppBOx}"]`
        );
        if (lastOpenBox) {
          lastOpenBox.style.zIndex = "0";
        }
      }
      let currBox = document.querySelector('.box-box[appbox="miSpace"]');
      currBox.style.zIndex = "80";
      lastZIndexAppBOx = "miSpace";
    });
  }

  cancelCircle(currDockIcon, appBox);
  fullScreenCircle(appBox);
  minimize(appBox);
}
