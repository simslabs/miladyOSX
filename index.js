let dockIconList = document.querySelectorAll(".dockIcon");
let divScreenContainer = document.querySelector(".screenContainer");
for (let i = 0; i < dockIconList.length; i++) {
  let dockAppName = dockIconList[i].getAttribute("dockApp");

  if (dockAppName == "Launch") {
    let currDockIcon = document.querySelector(
      `.dockIcon[dockapp="${dockAppName}"]`
    );

    currDockIcon.addEventListener("dblclick", function (e) {
      let lp = document.querySelector(".launchPad-container");

      let divDot = currDockIcon.querySelector(
        '.active-dot[appbox-dot="Launch-dot"]'
      );
      e.currentTarget.removeAttribute("style");

      lp.classList.add("lp-exit-ani");

      setTimeout(() => {
        lp.parentNode.removeChild(lp);
      }, 500);

      divDot.parentNode.removeChild(divDot);
      return;
    });

    currDockIcon.addEventListener("click", function (e) {
      //Rocket-Animation-Dock
      e.currentTarget.style.animation = "box 1s  alternate";

      //Dot-Representing-which App is open
      if (
        !e.currentTarget.querySelector('.active-dot[appbox-dot="Launch-dot"]')
      ) {
        let divDot = document.createElement("div");
        divDot.classList = "active-dot";
        divDot.setAttribute("appBox-dot", "Launch-dot");
        dockIconList[i].append(divDot);
      }

      let lp = document.querySelector(".launchPad-container");
      if (lp) {
        lp.removeAttribute("style");
        return;
      }
      let div = document.createElement("div");
      div.classList = "launchPad-container";
      div.innerHTML = `
                    <div class="lpSearch">
                        <input placeholder="Search">
                    </div>
                    <div class="lpApps">
                        <div class="lpApps-container">
                            <div class="lpApps-icon">
                                <img src="./images/Calculator.png" alt="Calculator">
                            </div>
                            <div class="launchpad-icon-Text">
                                Calculator
                            </div> 
                        </div>
                        <div class="lpApps-container">
                            <div class="lpApps-icon">
                                <img src="./images/Music.png" alt="Music">
                            </div>
                            <div class="launchpad-icon-Text">
                                Music
                            </div> 
                        </div>
                        <div class="lpApps-container">
                            <div class="lpApps-icon">
                                <img src="./images/miSpace.png" alt="miSpace">
                            </div>
                            <div class="launchpad-icon-Text">
                                miSpace
                            </div> 
                        </div>
                        <div class="lpApps-container">
                            <div class="lpApps-icon">
                                <img src="./images/Setting.png" alt="Setting">
                            </div>
                            <div class="launchpad-icon-Text">
                                Setting
                            </div> 
                        </div>
                        <div class="lpApps-container">
                            <div class="lpApps-icon">
                                <img src="./images/Camera.png" alt="Camera">
                            </div>
                            <div class="launchpad-icon-Text">
                                Camera
                            </div> 
                        </div>
                        <div class="lpApps-container">
                            <div class="lpApps-icon">
                                <img src="./images/Wardrobe.png" alt="Wardrobe">
                            </div>
                            <div class="launchpad-icon-Text">
                                Wardrobe
                            </div> 
                        </div>
                       
                        <div class="lpApps-container">
                            <div class="lpApps-icon">
                                <img src="./images/WhiteBoard.png" alt="WhiteBoard">
                            </div>
                            <div class="launchpad-icon-Text">
                                WhiteBoard
                            </div> 
                        </div>
                        <div class="lpApps-container">
                            <div class="lpApps-icon">
                                <img src="./images/Gallery.png" alt="Gallery">
                            </div>
                            <div class="launchpad-icon-Text">
                                Gallery
                            </div> 
                        </div>
                        <div class="lpApps-container">
                            <div class="lpApps-icon">
                                <img src="./images/Books.png" alt="Books">
                            </div>
                            <div class="launchpad-icon-Text">
                                Books
                            </div> 
                        </div>
                        <div class="lpApps-container">
                            <div class="lpApps-icon">
                                <img src="./images/Bin.png" alt="Bin">
                            </div>
                            <div class="launchpad-icon-Text">
                                Bin
                            </div> 
                        </div>
                `;
      divScreenContainer.append(div);

      let lpAppsContainer = document.querySelectorAll(".lpApps-container");

      for (let i = 0; i < lpAppsContainer.length; i++) {
        lpAppsContainer[i].addEventListener("click", function (e) {
          let lpAppsImg = e.currentTarget.querySelector(".lpApps-icon img");
          let appName = lpAppsImg.getAttribute("alt");
          let dockIcon = document.querySelectorAll(".dockIcon");

          for (let i = 0; i < dockIcon.length; i++) {
            let checkAppDock = dockIcon[i].querySelector(`[alt="${appName}"]`);
            toRemoveLaunchPad(); /*temp*/

            if (checkAppDock) {
              if (appName == "Wardrobe") {
                toRemoveLaunchPad();
                let launchPadDockIcon = document.querySelector(
                  '.dockIcon[dockapp="Launch"]'
                );
                launchPadDockIcon.removeAttribute("style");
                let appBox = `.box-box[appbox="Wardrobe"]`;
                let boxBox = document.querySelector(appBox);
                if (boxBox) {
                  let styleCheck = boxBox.getAttribute("style");
                  if (styleCheck && styleCheck.includes("display: none;")) {
                    let currDockIcon = document.querySelector(
                      `.dockIcon[dockApp="${appName}"]`
                    );
                    currDockIcon.removeAttribute("style");
                    setTimeout(function () {
                      currDockIcon.style.animation = "box 1s  alternate";
                      boxBox.style.display = "block";
                      return;
                    }, 220);
                  }
                }
                let currDockIcon = document.querySelector(
                  `.dockIcon[dockApp="${appName}"]`
                );
                WardrobeApp(currDockIcon);
                return;
              }
            }
            if (checkAppDock) {
              if (appName == "Camera") {
                toRemoveLaunchPad();
                let launchPadDockIcon = document.querySelector(
                  '.dockIcon[dockapp="Launch"]'
                );
                launchPadDockIcon.removeAttribute("style");
                let appBox = `.box-box[appbox="Camera"]`;
                let boxBox = document.querySelector(appBox);
                if (boxBox) {
                  let styleCheck = boxBox.getAttribute("style");
                  if (styleCheck && styleCheck.includes("display: none;")) {
                    let currDockIcon = document.querySelector(
                      `.dockIcon[dockApp="${appName}"]`
                    );
                    currDockIcon.removeAttribute("style");
                    setTimeout(function () {
                      currDockIcon.style.animation = "box 1s  alternate";
                      boxBox.style.display = "block";
                      return;
                    }, 220);
                  }
                }
                let currDockIcon = document.querySelector(
                  `.dockIcon[dockApp="${appName}"]`
                );
                camera(currDockIcon);
                return;
              }
            }
            if (checkAppDock) {
              if (appName == "WhiteBoard") {
                toRemoveLaunchPad();
                let launchPadDockIcon = document.querySelector(
                  '.dockIcon[dockapp="Launch"]'
                );
                launchPadDockIcon.removeAttribute("style");
                let appBox = `.box-box[appbox="WhiteBoard"]`;
                let boxBox = document.querySelector(appBox);
                if (boxBox) {
                  let styleCheck = boxBox.getAttribute("style");
                  if (styleCheck && styleCheck.includes("display: none;")) {
                    let currDockIcon = document.querySelector(
                      `.dockIcon[dockApp="${appName}"]`
                    );
                    currDockIcon.removeAttribute("style");
                    setTimeout(function () {
                      currDockIcon.style.animation = "box 1s  alternate";
                      boxBox.style.display = "block";
                      return;
                    }, 220);
                  }
                }
                let currDockIcon = document.querySelector(
                  `.dockIcon[dockApp="${appName}"]`
                );
                whiteBoard(currDockIcon);
                return;
              }
            }
            if (checkAppDock) {
              if (appName == "Music") {
                toRemoveLaunchPad();
                let launchPadDockIcon = document.querySelector(
                  '.dockIcon[dockapp="Launch"]'
                );
                launchPadDockIcon.removeAttribute("style");
                let appBox = `.box-box[appbox="Music"]`;
                let boxBox = document.querySelector(appBox);
                if (boxBox) {
                  let styleCheck = boxBox.getAttribute("style");
                  if (styleCheck && styleCheck.includes("display: none;")) {
                    let currDockIcon = document.querySelector(
                      `.dockIcon[dockApp="${appName}"]`
                    );
                    currDockIcon.removeAttribute("style");
                    setTimeout(function () {
                      currDockIcon.style.animation = "box 1s  alternate";
                      boxBox.style.display = "block";
                      return;
                    }, 220);
                  }
                }
                let currDockIcon = document.querySelector(
                  `.dockIcon[dockApp="${appName}"]`
                );
                music(currDockIcon);
                return;
              }
            }
            if (checkAppDock) {
              if (appName == "miSpace") {
                toRemoveLaunchPad();
                let launchPadDockIcon = document.querySelector(
                  '.dockIcon[dockapp="Launch"]'
                );
                launchPadDockIcon.removeAttribute("style");
                let appBox = `.box-box[appbox="miSpace"]`;
                let boxBox = document.querySelector(appBox);
                if (boxBox) {
                  let styleCheck = boxBox.getAttribute("style");
                  if (styleCheck && styleCheck.includes("display: none;")) {
                    let currDockIcon = document.querySelector(
                      `.dockIcon[dockApp="${appName}"]`
                    );
                    currDockIcon.removeAttribute("style");
                    setTimeout(function () {
                      currDockIcon.style.animation = "box 1s  alternate";
                      boxBox.style.display = "block";
                      return;
                    }, 220);
                  }
                }
                let currDockIcon = document.querySelector(
                  `.dockIcon[dockApp="${appName}"]`
                );
                miSpace(currDockIcon);
                return;
              }
            }
            if (checkAppDock) {
              if (appName == "Setting") {
                toRemoveLaunchPad();
                let launchPadDockIcon = document.querySelector(
                  '.dockIcon[dockapp="Launch"]'
                );
                launchPadDockIcon.removeAttribute("style");
                let appBox = `.box-box[appbox="Setting"]`;
                let boxBox = document.querySelector(appBox);
                if (boxBox) {
                  let styleCheck = boxBox.getAttribute("style");
                  if (styleCheck && styleCheck.includes("display: none;")) {
                    let currDockIcon = document.querySelector(
                      `.dockIcon[dockApp="${appName}"]`
                    );
                    currDockIcon.removeAttribute("style");
                    setTimeout(function () {
                      currDockIcon.style.animation = "box 1s  alternate";
                      boxBox.style.display = "block";
                      return;
                    }, 220);
                  }
                }
                let currDockIcon = document.querySelector(
                  `.dockIcon[dockApp="${appName}"]`
                );
                setting(currDockIcon);
                return;
              }
            }
            if (checkAppDock) {
              if (appName == "Bin") {
                toRemoveLaunchPad();
                let launchPadDockIcon = document.querySelector(
                  '.dockIcon[dockapp="Launch"]'
                );
                launchPadDockIcon.removeAttribute("style");
                let appBox = `.box-box[appbox="Bin"]`;
                let boxBox = document.querySelector(appBox);
                if (boxBox) {
                  let styleCheck = boxBox.getAttribute("style");
                  if (styleCheck && styleCheck.includes("display: none;")) {
                    let currDockIcon = document.querySelector(
                      `.dockIcon[dockApp="${appName}"]`
                    );
                    currDockIcon.removeAttribute("style");
                    setTimeout(function () {
                      currDockIcon.style.animation = "box 1s  alternate";
                      boxBox.style.display = "block";
                      return;
                    }, 220);
                  }
                }
                let currDockIcon = document.querySelector(
                  `.dockIcon[dockApp="${appName}"]`
                );
                bin(currDockIcon);
                return;
              }
            }
            if (checkAppDock) {
              if (appName == "Calculator") {
                toRemoveLaunchPad();
                let launchPadDockIcon = document.querySelector(
                  '.dockIcon[dockapp="Launch"]'
                );
                launchPadDockIcon.removeAttribute("style");
                let appBox = `.box-box[appbox="Calculator"]`;
                let boxBox = document.querySelector(appBox);
                if (boxBox) {
                  let styleCheck = boxBox.getAttribute("style");
                  if (styleCheck && styleCheck.includes("display: none;")) {
                    let currDockIcon = document.querySelector(
                      `.dockIcon[dockApp="${appName}"]`
                    );
                    currDockIcon.removeAttribute("style");
                    setTimeout(function () {
                      currDockIcon.style.animation = "box 1s  alternate";
                      boxBox.style.display = "block";
                      return;
                    }, 220);
                  }
                }
                let currDockIcon = document.querySelector(
                  `.dockIcon[dockApp="${appName}"]`
                );
                calculator(currDockIcon);
                return;
              }
            }
            if (checkAppDock) {
              if (appName == "Gallery") {
                toRemoveLaunchPad();
                let launchPadDockIcon = document.querySelector(
                  '.dockIcon[dockapp="Launch"]'
                );
                launchPadDockIcon.removeAttribute("style");
                let appBox = `.box-box[appbox="Gallery"]`;
                let boxBox = document.querySelector(appBox);
                if (boxBox) {
                  let styleCheck = boxBox.getAttribute("style");
                  if (styleCheck && styleCheck.includes("display: none;")) {
                    let currDockIcon = document.querySelector(
                      `.dockIcon[dockApp="${appName}"]`
                    );
                    currDockIcon.removeAttribute("style");
                    setTimeout(function () {
                      currDockIcon.style.animation = "box 1s  alternate";
                      boxBox.style.display = "block";
                      return;
                    }, 220);
                  }
                }
                let currDockIcon = document.querySelector(
                  `.dockIcon[dockApp="${appName}"]`
                );
                gallery(currDockIcon);
                return;
              }
            }
            if (checkAppDock) {
              if (appName == "Books") {
                toRemoveLaunchPad();
                let launchPadDockIcon = document.querySelector(
                  '.dockIcon[dockapp="Launch"]'
                );
                launchPadDockIcon.removeAttribute("style");
                let appBox = `.box-box[appbox="Books"]`;
                let boxBox = document.querySelector(appBox);
                if (boxBox) {
                  let styleCheck = boxBox.getAttribute("style");
                  if (styleCheck && styleCheck.includes("display: none;")) {
                    let currDockIcon = document.querySelector(
                      `.dockIcon[dockApp="${appName}"]`
                    );
                    currDockIcon.removeAttribute("style");
                    setTimeout(function () {
                      currDockIcon.style.animation = "box 1s  alternate";
                      boxBox.style.display = "block";
                      return;
                    }, 220);
                  }
                }
                let currDockIcon = document.querySelector(
                  `.dockIcon[dockApp="${appName}"]`
                );
                books(currDockIcon);
                return;
              }
            }
          }

          let dockEditable = document.querySelector(".dockIcon-editable");

          let div = document.createElement("div");
          div.classList = "dockIcon";
          div.setAttribute("dockApp", `${appName}`);
          div.innerHTML = `<img src="./images/${appName}.png" alt="${appName}">`;
          dockEditable.append(div);
          if (appName == "Wardrobe") {
            let WardrobeDockIcon = document.querySelector(
              '.dockIcon[dockapp="Wardrobe"]'
            );

            WardrobeDockIcon.addEventListener("click", function (e) {
              let currDockIcon = document.querySelector(
                '.dockIcon[dockapp="Wardrobe"]'
              );
              if (e.detail == 3) {
                let boxBox = document.querySelector(`.box-box[appbox="Wardrobe"]`);
                setTimeout(() => {
                  boxBox.parentNode.removeChild(boxBox);
                  currDockIcon.parentNode.removeChild(currDockIcon);
                }, 220);
              } else {
                WardrobeApp(currDockIcon);
              }
            });
            dockIconDblClick(WardrobeDockIcon, appName);

            WardrobeApp(WardrobeDockIcon);
          } else if (appName == "Camera") {
            let cameraDockIcon = document.querySelector(
              '.dockIcon[dockapp="Camera"]'
            );

            cameraDockIcon.addEventListener("click", function (e) {
              let currDockIcon = document.querySelector(
                '.dockIcon[dockapp="Camera"]'
              );
              if (e.detail == 3) {
                let boxBox = document.querySelector(
                  `.box-box[appbox="Camera"]`
                );
                setTimeout(() => {
                  boxBox.parentNode.removeChild(boxBox);
                  currDockIcon.parentNode.removeChild(currDockIcon);
                }, 220);
              } else {
                camera(currDockIcon);
              }
            });
            dockIconDblClick(cameraDockIcon, appName);

            camera(cameraDockIcon);
          } else if (appName == "WhiteBoard") {
            let cameraDockIcon = document.querySelector(
              '.dockIcon[dockapp="WhiteBoard"]'
            );

            cameraDockIcon.addEventListener("click", function (e) {
              let currDockIcon = document.querySelector(
                '.dockIcon[dockapp="WhiteBoard"]'
              );
              if (e.detail == 3) {
                let boxBox = document.querySelector(
                  `.box-box[appbox="WhiteBoard"]`
                );
                setTimeout(() => {
                  boxBox.parentNode.removeChild(boxBox);
                  currDockIcon.parentNode.removeChild(currDockIcon);
                }, 220);
              } else {
                whiteBoard(currDockIcon);
              }
            });
            dockIconDblClick(cameraDockIcon, appName);

            whiteBoard(cameraDockIcon);
          } else if (appName == "Music") {
            let cameraDockIcon = document.querySelector(
              '.dockIcon[dockapp="Music"]'
            );

            cameraDockIcon.addEventListener("click", function (e) {
              let currDockIcon = document.querySelector(
                '.dockIcon[dockapp="Music"]'
              );
              if (e.detail == 3) {
                let boxBox = document.querySelector(`.box-box[appbox="Music"]`);
                setTimeout(() => {
                  boxBox.parentNode.removeChild(boxBox);
                  currDockIcon.parentNode.removeChild(currDockIcon);
                }, 220);
              } else {
                music(currDockIcon);
              }
            });
            dockIconDblClick(cameraDockIcon, appName);

            music(cameraDockIcon);
          } else if (appName == "miSpace") {
            let cameraDockIcon = document.querySelector(
              '.dockIcon[dockapp="miSpace"]'
            );

            cameraDockIcon.addEventListener("click", function (e) {
              let currDockIcon = document.querySelector(
                '.dockIcon[dockapp="miSpace"]'
              );
              if (e.detail == 3) {
                let boxBox = document.querySelector(
                  `.box-box[appbox="miSpace"]`
                );
                setTimeout(() => {
                  boxBox.parentNode.removeChild(boxBox);
                  currDockIcon.parentNode.removeChild(currDockIcon);
                }, 220);
              } else {
                miSpace(currDockIcon);
              }
            });
            dockIconDblClick(cameraDockIcon, appName);

            miSpace(cameraDockIcon);
          } else if (appName == "Setting") {
            let cameraDockIcon = document.querySelector(
              '.dockIcon[dockapp="Setting"]'
            );

            cameraDockIcon.addEventListener("click", function (e) {
              let currDockIcon = document.querySelector(
                '.dockIcon[dockapp="Setting"]'
              );
              if (e.detail == 3) {
                let boxBox = document.querySelector(
                  `.box-box[appbox="Setting"]`
                );
                setTimeout(() => {
                  boxBox.parentNode.removeChild(boxBox);
                  currDockIcon.parentNode.removeChild(currDockIcon);
                }, 220);
              } else {
                setting(currDockIcon);
              }
            });
            dockIconDblClick(cameraDockIcon, appName);

            setting(cameraDockIcon);
          } else if (appName == "Bin") {
            let cameraDockIcon = document.querySelector(
              '.dockIcon[dockapp="Bin"]'
            );

            cameraDockIcon.addEventListener("click", function (e) {
              let currDockIcon = document.querySelector(
                '.dockIcon[dockapp="Bin"]'
              );
              if (e.detail == 3) {
                let boxBox = document.querySelector(`.box-box[appbox="Bin"]`);
                setTimeout(() => {
                  boxBox.parentNode.removeChild(boxBox);
                  currDockIcon.parentNode.removeChild(currDockIcon);
                }, 220);
              } else {
                bin(currDockIcon);
              }
            });
            dockIconDblClick(cameraDockIcon, appName);

            bin(cameraDockIcon);
          } else if (appName == "Calculator") {
            let cameraDockIcon = document.querySelector(
              '.dockIcon[dockapp="Calculator"]'
            );

            cameraDockIcon.addEventListener("click", function (e) {
              let currDockIcon = document.querySelector(
                '.dockIcon[dockapp="Calculator"]'
              );
              if (e.detail == 3) {
                let boxBox = document.querySelector(
                  `.box-box[appbox="Calculator"]`
                );
                setTimeout(() => {
                  boxBox.parentNode.removeChild(boxBox);
                  currDockIcon.parentNode.removeChild(currDockIcon);
                }, 220);
              } else {
                calculator(currDockIcon);
              }
            });
            dockIconDblClick(cameraDockIcon, appName);

            calculator(cameraDockIcon);
          } else if (appName == "Gallery") {
            let cameraDockIcon = document.querySelector(
              '.dockIcon[dockapp="Gallery"]'
            );

            cameraDockIcon.addEventListener("click", function (e) {
              let currDockIcon = document.querySelector(
                '.dockIcon[dockapp="Gallery"]'
              );
              if (e.detail == 3) {
                let boxBox = document.querySelector(
                  `.box-box[appbox="Gallery"]`
                );
                setTimeout(() => {
                  boxBox.parentNode.removeChild(boxBox);
                  currDockIcon.parentNode.removeChild(currDockIcon);
                }, 220);
              } else {
                gallery(currDockIcon);
              }
            });
            dockIconDblClick(cameraDockIcon, appName);

            gallery(cameraDockIcon);
          } else if (appName == "Books") {
            let cameraDockIcon = document.querySelector(
              '.dockIcon[dockapp="Books"]'
            );

            cameraDockIcon.addEventListener("click", function (e) {
              let currDockIcon = document.querySelector(
                '.dockIcon[dockapp="Books"]'
              );
              if (e.detail == 3) {
                let boxBox = document.querySelector(`.box-box[appbox="Books"]`);
                setTimeout(() => {
                  boxBox.parentNode.removeChild(boxBox);
                  currDockIcon.parentNode.removeChild(currDockIcon);
                }, 220);
              } else {
                books(currDockIcon);
              }
            });
            dockIconDblClick(cameraDockIcon, appName);

            books(cameraDockIcon);
          }
        });
      }
    });
  } else if (dockAppName == "Camera") {
    let currDockIcon = document.querySelector(
      `.dockIcon[dockapp="${dockAppName}"]`
    );

    dockIconDblClick(currDockIcon, dockAppName);
    currDockIcon.addEventListener("click", function (e) {
      let currDockIcon = document.querySelector('.dockIcon[dockapp="Camera"]');
      camera(currDockIcon);
    });
  } else if (dockAppName == "WhiteBoard") {
    let currDockIcon = document.querySelector(
      `.dockIcon[dockapp="${dockAppName}"]`
    );

    dockIconDblClick(currDockIcon, dockAppName);
    currDockIcon.addEventListener("click", function (e) {
      let currDockIcon = document.querySelector(
        '.dockIcon[dockapp="WhiteBoard"]'
      );
      whiteBoard(currDockIcon);
    });
  } else if (dockAppName == "Music") {
    let currDockIcon = document.querySelector(
      `.dockIcon[dockapp="${dockAppName}"]`
    );

    dockIconDblClick(currDockIcon, dockAppName);
    currDockIcon.addEventListener("click", function (e) {
      let currDockIcon = document.querySelector('.dockIcon[dockapp="Music"]');
      music(currDockIcon);
    });
  } else if (dockAppName == "miSpace") {
    let currDockIcon = document.querySelector(
      `.dockIcon[dockapp="${dockAppName}"]`
    );

    dockIconDblClick(currDockIcon, dockAppName);
    currDockIcon.addEventListener("click", function (e) {
      let currDockIcon = document.querySelector('.dockIcon[dockapp="miSpace"]');
      miSpace(currDockIcon);
    });
  } else if (dockAppName == "Setting") {
    let currDockIcon = document.querySelector(
      `.dockIcon[dockapp="${dockAppName}"]`
    );

    dockIconDblClick(currDockIcon, dockAppName);
    currDockIcon.addEventListener("click", function (e) {
      let currDockIcon = document.querySelector('.dockIcon[dockapp="Setting"]');
      setting(currDockIcon);
    });
  } else if (dockAppName == "Bin") {
    let currDockIcon = document.querySelector(
      `.dockIcon[dockapp="${dockAppName}"]`
    );

    dockIconDblClick(currDockIcon, dockAppName);
    currDockIcon.addEventListener("click", function (e) {
      let currDockIcon = document.querySelector('.dockIcon[dockapp="Bin"]');
      bin(currDockIcon);
    });
  } else if (dockAppName == "Calculator") {
    let currDockIcon = document.querySelector(
      `.dockIcon[dockapp="${dockAppName}"]`
    );

    dockIconDblClick(currDockIcon, dockAppName);
    currDockIcon.addEventListener("click", function (e) {
      let currDockIcon = document.querySelector(
        '.dockIcon[dockapp="Calculator"]'
      );
      calculator(currDockIcon);
    });
  } else if (dockAppName == "Gallery") {
    let currDockIcon = document.querySelector(
      `.dockIcon[dockapp="${dockAppName}"]`
    );

    dockIconDblClick(currDockIcon, dockAppName);
    currDockIcon.addEventListener("click", function (e) {
      let currDockIcon = document.querySelector('.dockIcon[dockapp="Gallery"]');
      gallery(currDockIcon);
    });
  } else if (dockAppName == "Books") {
    let currDockIcon = document.querySelector(
      `.dockIcon[dockapp="${dockAppName}"]`
    );

    dockIconDblClick(currDockIcon, dockAppName);
    currDockIcon.addEventListener("click", function (e) {
      let currDockIcon = document.querySelector('.dockIcon[dockapp="Books"]');
      books(currDockIcon);
    });
  }
}
