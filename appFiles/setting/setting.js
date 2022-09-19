let globalDarkMode = false;

function setting(currDockIcon){
    let appBox=`.box-box[appbox="Setting"]`
    toRemoveLaunchPad();
    currDockIcon.style.animation="box 1s  alternate";
    if(!currDockIcon.querySelector('.active-dot')){
            let divDot =  document.createElement("div");
            divDot.setAttribute('appBox-dot','Setting-dot');
            divDot.classList = "active-dot";
            currDockIcon.append(divDot);
    }

    let boxBox = document.querySelector(appBox); 
    if(boxBox){
        currDockIcon.removeAttribute('style');
        return;
    }

    let div =  document.createElement("div");
    div.classList ="box-box";
    div.setAttribute('appBox',"Setting");
    div.style.zIndex = "75";
    div.innerHTML = 
    `
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
                    Settings
                </div>
            </div>
            <div class="setting-appSiteBox">
                <div class="inner-settingAppSiteBox">
                    <div class="setting-desktopHeadBox">
                        <div class="inner-desktopHeadBox">
                            Desktop
                        </div>
                    </div>
                    <div class="setting-wallpaperView-container">
                        <div class="wallpaper-viewBox">
                            <img src="../../wallpaper/MontereyLight.jpg">
                        </div>
                        <div class="wallpaper-viewBox-text">
                            <div class="setting-modeBox-text">
                                Change DeskTop Background And Colors
                            </div>
                        </div>
                    </div>

                    <div class="setting-wallpaper-container">
                        <div class="inner-setting-wallpaper">
                            <div class="setting-innerSideNav">
                                <div class="setting-innerSideNavText">
                                    Milady
                                </div>
                                <div class="setting-innerSideNavText2">
                                    <span class="material-icons-round">
                                    topic
                                    </span>
                                    Desktop Pictures
                                </div>
                            </div>
                            <div class="setting-wallPaper-box-inner">
                                <div class="wallpaper-boxImg settingBigSur"></div>
                                <div class="wallpaper-boxImg settingLake "></div>
                                <div class="wallpaper-boxImg MontereyLight "></div>
                            </div>
                        </div>
                    </div>
                
                </div>
            </div>
        </div>
    `
    divScreenContainer.append(div);


    //Z-INdex                  
    let currBox = document.querySelector('.box-box[appbox="Setting"]');
    if(currBox){
        currDockIcon.addEventListener("click",function(){

            if(lastZIndexAppBOx != lastZIndexAppBOx!='Setting' ){
                let lastOpenBox = document.querySelector(`.box-box[appbox="${lastZIndexAppBOx}"]`);
                if(lastOpenBox){
                    lastOpenBox.style.zIndex = "0";
                }
            }
            let currBox = document.querySelector('.box-box[appbox="Setting"]');
            currBox.style.zIndex = "80";
            lastZIndexAppBOx = "Setting";
        })
    }

    cancelCircle(currDockIcon,appBox);
    fullScreenCircle(appBox);
    minimize(appBox);

    
    let settingBigSur = document.querySelector(".settingBigSur");
    settingBigSur.addEventListener("click",function(){
        console.log("a");
        let mainBody =  document.querySelector(".main-body");
        mainBody.style.backgroundImage  = "url('./wallpaper/BigSur.jpg')";
    })

    let settingLake = document.querySelector(".settingLake");
    settingLake.addEventListener("click",function(){
        console.log("a");
        let mainBody =  document.querySelector(".main-body");
        mainBody.style.backgroundImage  = "url('./wallpaper/Lake.jpg')";
    })
    
    let MontereyLight = document.querySelector(".MontereyLight");
    MontereyLight.addEventListener("click",function(){
        console.log("a");
        let mainBody =  document.querySelector(".main-body");
        mainBody.style.backgroundImage  = "url('./wallpaper/MontereyLight.jpg')";
    })


}