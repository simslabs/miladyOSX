function books(currDockIcon) {
  let appBox = `.box-box[appbox="Books"]`;
  toRemoveLaunchPad();
  currDockIcon.style.animation = "box 1s  alternate";
  if (!currDockIcon.querySelector(".active-dot")) {
    let divDot = document.createElement("div");
    divDot.setAttribute("appBox-dot", "Books-dot");
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
  div.setAttribute("appBox", "Books");
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
                    Books
                </div>
            </div>
            <div class="book-appSiteBox">
                <div class="bookSideNavBlur">
                    <div class="bookSideNav">
                            <div class=" music-navDataContainer">
                                <div class="navLib">Milady Books</div>
                                <div class="music-navbox-input">
                                    <input type="text" placeholder="Search">
                                </div>
                                <div class="music-navbox specialmusic-NavBox">
                                       
                                        <span class="material-icons-round music-spanBox">
                                            stars
                                        </span>
                                        <span class="music-navText">
                                            Featured
                                        </span>
                                </div>
                                <div class="music-navbox">
                                        <span class="material-icons-round music-spanBox">
                                            local_mall
                                        </span>
                                        <span class="music-navText">
                                            Categories
                                        </span>
                                </div>
                                <div class="music-navbox">
                                        <span class="material-icons-round music-spanBox">
                                            supervised_user_circle
                                        </span>
                                        <span class="music-navText">
                                            Milady Authors
                                        </span>
                                </div>
                            </div>
                    </div>
                </div>
                <div class="book-container">
                    <div class="book-banner-box"></div>
                    <br><br>
                        <div class="book-stallBook">
                            <div class="bookImg-stall">
                            <img class="stardust"  src="./appFiles/books/image/stardust.png">
                                <div class="boomImg-name">
                                Stardust Dialect
                                </div>
                                <div class="boomImg-authorName">
                                Stardust
                                </div>
                            </div>
                        </div>
                    </div>


                    

                </div>
            </div>
        </div>
    `;
  divScreenContainer.append(div);

  //Z-INdex
  let currBox = document.querySelector('.box-box[appbox="Books"]');
  if (currBox) {
    currDockIcon.addEventListener("click", function () {
      if ((lastZIndexAppBOx != lastZIndexAppBOx) != "Books") {
        let lastOpenBox = document.querySelector(
          `.box-box[appbox="${lastZIndexAppBOx}"]`
        );
        if (lastOpenBox) {
          lastOpenBox.style.zIndex = "0";
        }
      }
      let currBox = document.querySelector('.box-box[appbox="Books"]');
      currBox.style.zIndex = "80";
      lastZIndexAppBOx = "Books";
    });
  }

  cancelCircle(currDockIcon, appBox);
  fullScreenCircle(appBox);
  minimize(appBox);

  
  let stardust = document.querySelector(".stardust");
  stardust.addEventListener("click", function () {
    let bookContainer = document.querySelector(".book-container");
    let div = document.createElement("div");
    div.classList = "pdf-box-book";
    div.innerHTML = `
            <span class="material-icons-round book-cancel-btn">
            cancel
            </span>
            <embed src="https://mirror.xyz/stardustdialect.eth" type="application/pdf" width="100%" height="100%" />
            `;
    bookContainer.append(div);
    let cancelBtn = div.querySelector(".book-cancel-btn");
    cancelBtn.addEventListener("click", function (e) {
      e.currentTarget.parentElement.remove();
    });
  });

}
