let selectedFilterColor = "Tamarama";
let deleteMode = false;
let allTickets = {};

function WardrobeApp(currDockIcon) {
  let appBox = `.box-box[appbox="Wardrobe"]`;
  toRemoveLaunchPad();
  currDockIcon.style.animation = "box 1s  alternate";
  if (!currDockIcon.querySelector(".active-dot")) {
    let divDot = document.createElement("div");
    divDot.setAttribute("appBox-dot", "Wardrobe-dot");
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
  div.setAttribute("appBox", "Wardrobe");
  div.style.zIndex = "75";
  // div.setAttribute('zIndex','Wardrobe')
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
                    Wardrobe
                </div>
            
            </div>
            <div class="container-Wardrobe">
                <div class="Wardrobe-title">
                    <div class="WardrobeLogo">
                        <img src="./images/Wardrobe.png" alt="">
                    </div>
                    <div class="WardrobeTBOx">
                        <div class="WardrobeTBox-name createBox">
                            Save
                        </div>
                    </div>
                    <div class="WardrobeTBOx">
                        <div class="WardrobeTBox-name createBox">
                            Random
                        </div>
                    </div>
                        </div>
                <div class="grid">
                            <div class="leftMenu">
                                
                        <div class="teamNSpaceArea2-box">
                            <div class="tns-box-Inner">
                                <span class="tns-box-InnerText">
                                    Backgrounds
                                </span>
                            </div>
                        </div>
                        <div class="teamNSpaceArea2-box">
                            <div class="tns-box-Inner">
                                <span class="tns-box-InnerText">
                                    Auras
                                </span>
                            </div>
                        </div>
                        <div class="teamNSpaceArea2-box">
                            <div class="tns-box-Inner">
                                <span class="tns-box-InnerText">
                                    Skin Tones
                                </span>
                            </div>
                        </div>
                        <div class="teamNSpaceArea2-box">
                            <div class="tns-box-Inner">
                                <span class="tns-box-InnerText">
                                    Jewelry
                                </span>
                            </div>
                        </div>
                        <div class="teamNSpaceArea2-box">
                            <div class="tns-box-Inner">
                                <span class="tns-box-InnerText">
                                    Outfit
                                </span>
                            </div>
                        </div>
                        <div class="teamNSpaceArea2-box">
                            <div class="tns-box-Inner">
                                <span class="tns-box-InnerText">
                                    Mouths
                                </span>
                            </div>
                        </div>
                        <div class="teamNSpaceArea2-box">
                            <div class="tns-box-Inner">
                                <span class="tns-box-InnerText">
                                    Eyes
                                </span>
                            </div>
                        </div>
                        <div class="teamNSpaceArea2-box">
                            <div class="tns-box-Inner">
                                <span class="tns-box-InnerText">
                                    Piercings
                                </span>
                            </div>
                        </div>
                        <div class="teamNSpaceArea2-box">
                            <div class="tns-box-Inner">
                                <span class="tns-box-InnerText">
                                    Face Decoration
                                </span>
                            </div>
                        </div>
                        <div class="teamNSpaceArea2-box">
                            <div class="tns-box-Inner">
                                <span class="tns-box-InnerText">
                                    Eyebrows
                                </span>
                            </div>
                        </div>
                        <div class="teamNSpaceArea2-box">
                            <div class="tns-box-Inner">
                                <span class="tns-box-InnerText">
                                    Eyewear
                                </span>
                            </div>
                        </div>
                        <div class="teamNSpaceArea2-box">
                            <div class="tns-box-Inner">
                                <span class="tns-box-InnerText">
                                    Hairstyles
                                </span>
                            </div>
                        </div>
                        <div class="teamNSpaceArea2-box">
                            <div class="tns-box-Inner">
                                <span class="tns-box-InnerText">
                                    Headwear
                                </span>
                            </div>
                        </div>
                        <div class="teamNSpaceArea2-box">
                            <div class="tns-box-Inner">
                                <span class="tns-box-InnerText">
                                    Accessories
                                </span>
                            </div>
                        </div>
                        <div class="teamNSpaceArea2-box">
                            <div class="tns-box-Inner">
                                <span class="tns-box-InnerText">
                                    Overlays
                                </span>
                            </div>
                        </div>
                    </div>
                    <div class="Wardrobe-right-container">
                        <section class="avi" id="avatarSection">
                        <canvas id="avatarCanvas" height="240px" width="200px" alt="Custom Milady Maker"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/5AUZL2xHAy6GWHap4EYuaNCWUaMjFV3k3ochzk5b8MHD/blue boutique.png" id="background-blue boutique" class="background"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/5AUZL2xHAy6GWHap4EYuaNCWUaMjFV3k3ochzk5b8MHD/grand_central.png" id="background-grand_central" class="background"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/5AUZL2xHAy6GWHap4EYuaNCWUaMjFV3k3ochzk5b8MHD/sedona.png" id="background-sedona" class="background"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/5AUZL2xHAy6GWHap4EYuaNCWUaMjFV3k3ochzk5b8MHD/silvermoon.png" id="background-silvermoon" class="background"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/5AUZL2xHAy6GWHap4EYuaNCWUaMjFV3k3ochzk5b8MHD/stormwind.png" id="background-stormwind" class="background"/>
                
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/aphroditian_adventurous.png" id="auras-aphroditian_adventurous" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/aphroditian_alcyone.png" id="auras-aphroditian_alcyone" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/aphroditian_altruistic.png" id="auras-aphroditian_altruistic" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/aphroditian_arizona.png" id="auras-aphroditian_arizona" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/aphroditian_artheaux.png" id="auras-aphroditian_artheaux" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/aphroditian_asterope.png" id="auras-aphroditian_asterope" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/aphroditian_baroque_sunburst.png" id="auras-aphroditian_baroque_sunburst" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/aphroditian_benevolent.png" id="auras-aphroditian_benevolent" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/aphroditian_bimbo.png" id="auras-aphroditian_bimbo" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/aphroditian_bisexual.png" id="auras-aphroditian_bisexual" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/aphroditian_bright.png" id="auras-aphroditian_bright" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/aphroditian_burnt_amber.png" id="auras-aphroditian_burnt_amber" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/aphroditian_calm.png" id="auras-aphroditian_calm" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/aphroditian_celaeno.png" id="auras-aphroditian_celaeno" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/aphroditian_compassionate.png" id="auras-aphroditian_compassionate" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/aphroditian_cursed.png" id="auras-aphroditian_cursed" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/aphroditian_dark_1.png" id="auras-aphroditian_dark_1" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/aphroditian_dark_2.png" id="auras-aphroditian_dark_2" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/aphroditian_dark_3.png" id="auras-aphroditian_dark_3" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/aphroditian_dark_4.png" id="auras-aphroditian_dark_4" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/aphroditian_dark_5.png" id="auras-aphroditian_dark_5" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/aphroditian_dark_6.png" id="auras-aphroditian_dark_6" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/aphroditian_dark_7.png" id="auras-aphroditian_dark_7" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/aphroditian_dark_magician.png" id="auras-aphroditian_dark_magician" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/aphroditian_devilish.png" id="auras-aphroditian_devilish" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/aphroditian_dragon_ener.png" id="auras-aphroditian_dragon_ener" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/aphroditian_druid.png" id="auras-aphroditian_druid" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/aphroditian_earth.png" id="auras-aphroditian_earth" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/aphroditian_effervescent.png" id="auras-aphroditian_effervescent" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/aphroditian_electra.png" id="auras-aphroditian_electra" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/aphroditian_electric_samurai-(don_t-use).png" id="auras-aphroditian_electric_samurai-(don_t-use)" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/aphroditian_elegant.png" id="auras-aphroditian_elegant" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/aphroditian_emo.png" id="auras-aphroditian_emo" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/aphroditian_ethereal.png" id="auras-aphroditian_ethereal" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/aphroditian_evil.png" id="auras-aphroditian_evil" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/aphroditian_fervent.png" id="auras-aphroditian_fervent" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/aphroditian_gay.png" id="auras-aphroditian_gay" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/aphroditian_gentle.png" id="auras-aphroditian_gentle" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/aphroditian_hipster.png" id="auras-aphroditian_hipster" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/aphroditian_horny.png" id="auras-aphroditian_horny" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/aphroditian_hot.png" id="auras-aphroditian_hot" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/aphroditian_intoxicating.png" id="auras-aphroditian_intoxicating" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/aphroditian_italian.png" id="auras-aphroditian_italian" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/aphroditian_jade_mcd.png" id="auras-aphroditian_jade_mcd" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/aphroditian_jazz.png" id="auras-aphroditian_jazz" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/aphroditian_jupiter.png" id="auras-aphroditian_jupiter" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/aphroditian_ketamine.png" id="auras-aphroditian_ketamine" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/aphroditian_laptop.png" id="auras-aphroditian_laptop" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/aphroditian_limewire.png" id="auras-aphroditian_limewire" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/aphroditian_maia.png" id="auras-aphroditian_maia" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/aphroditian_mars.png" id="auras-aphroditian_mars" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/aphroditian_mcdonalds.png" id="auras-aphroditian_mcdonalds" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/aphroditian_mercury.png" id="auras-aphroditian_mercury" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/aphroditian_merope.png" id="auras-aphroditian_merope" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/aphroditian_mid.png" id="auras-aphroditian_mid" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/aphroditian_neptune.png" id="auras-aphroditian_neptune" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/aphroditian_nightcore_clown.png" id="auras-aphroditian_nightcore_clown" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/aphroditian_nightcore_jazz.png" id="auras-aphroditian_nightcore_jazz" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/aphroditian_nightcore_sunset.png" id="auras-aphroditian_nightcore_sunset" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/aphroditian_orange-(don't-use).png" id="auras-aphroditian_orange-(don't-use)" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/aphroditian_pastoral.png" id="auras-aphroditian_pastoral" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/aphroditian_patriotic.png" id="auras-aphroditian_patriotic" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/aphroditian_popular.png" id="auras-aphroditian_popular" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/aphroditian_prideful.png" id="auras-aphroditian_prideful" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/aphroditian_psychic.png" id="auras-aphroditian_psychic" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/aphroditian_queen.png" id="auras-aphroditian_queen" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/aphroditian_radiant.png" id="auras-aphroditian_radiant" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/aphroditian_regal.png" id="auras-aphroditian_regal" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/aphroditian_retarded.png" id="auras-aphroditian_retarded" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/aphroditian_rothgro.png" id="auras-aphroditian_rothgro" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/aphroditian_sage.png" id="auras-aphroditian_sage" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/aphroditian_sanguine.png" id="auras-aphroditian_sanguine" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/aphroditian_saturn.png" id="auras-aphroditian_saturn" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/aphroditian_schizo.png" id="auras-aphroditian_schizo" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/aphroditian_shaman.png" id="auras-aphroditian_shaman" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/aphroditian_shy.png" id="auras-aphroditian_shy" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/aphroditian_snake.png" id="auras-aphroditian_snake" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/aphroditian_soft_magic.png" id="auras-aphroditian_soft_magic" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/aphroditian_spunky.png" id="auras-aphroditian_spunky" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/aphroditian_stoic.png" id="auras-aphroditian_stoic" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/aphroditian_sublime.png" id="auras-aphroditian_sublime" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/aphroditian_tactical.png" id="auras-aphroditian_tactical" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/aphroditian_taygeta.png" id="auras-aphroditian_taygeta" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/aphroditian_trad.png" id="auras-aphroditian_trad" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/aphroditian_twink.png" id="auras-aphroditian_twink" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/aphroditian_ukraine.png" id="auras-aphroditian_ukraine" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/aphroditian_unusual.png" id="auras-aphroditian_unusual" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/aphroditian_valiant.png" id="auras-aphroditian_valiant" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/aphroditian_vengeful.png" id="auras-aphroditian_vengeful" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/aphroditian_venus.png" id="auras-aphroditian_venus" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/aphroditian_vespertine.png" id="auras-aphroditian_vespertine" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/aphroditian_warrior_poet-(don_t-use).png" id="auras-aphroditian_warrior_poet-(don_t-use)" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/aphroditian_wicked.png" id="auras-aphroditian_wicked" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/aphroditian_wise.png" id="auras-aphroditian_wise" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/aphroditian_xerox.png" id="auras-aphroditian_xerox" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/aphroditian_young_thug.png" id="auras-aphroditian_young_thug" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/aphroditian_zestful.png" id="auras-aphroditian_zestful" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/apollonian_adventurous.png" id="auras-apollonian_adventurous" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/apollonian_alcyone.png" id="auras-apollonian_alcyone" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/apollonian_altruistic.png" id="auras-apollonian_altruistic" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/apollonian_arizona.png" id="auras-apollonian_arizona" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/apollonian_artheaux.png" id="auras-apollonian_artheaux" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/apollonian_asterope.png" id="auras-apollonian_asterope" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/apollonian_baroque_sunburst.png" id="auras-apollonian_baroque_sunburst" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/apollonian_benevolent.png" id="auras-apollonian_benevolent" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/apollonian_bimbo.png" id="auras-apollonian_bimbo" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/apollonian_bisexual.png" id="auras-apollonian_bisexual" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/apollonian_bright.png" id="auras-apollonian_bright" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/apollonian_burnt_amber.png" id="auras-apollonian_burnt_amber" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/apollonian_calm.png" id="auras-apollonian_calm" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/apollonian_celaeno.png" id="auras-apollonian_celaeno" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/apollonian_compassionate.png" id="auras-apollonian_compassionate" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/apollonian_cursed.png" id="auras-apollonian_cursed" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/apollonian_dark_1.png" id="auras-apollonian_dark_1" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/apollonian_dark_2.png" id="auras-apollonian_dark_2" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/apollonian_dark_3.png" id="auras-apollonian_dark_3" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/apollonian_dark_4.png" id="auras-apollonian_dark_4" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/apollonian_dark_5.png" id="auras-apollonian_dark_5" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/apollonian_dark_6.png" id="auras-apollonian_dark_6" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/apollonian_dark_7.png" id="auras-apollonian_dark_7" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/apollonian_dark_magician.png" id="auras-apollonian_dark_magician" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/apollonian_devilish.png" id="auras-apollonian_devilish" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/apollonian_dragon_ener.png" id="auras-apollonian_dragon_ener" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/apollonian_dreamer.png" id="auras-apollonian_dreamer" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/apollonian_druid.png" id="auras-apollonian_druid" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/apollonian_earth.png" id="auras-apollonian_earth" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/apollonian_effervescent.png" id="auras-apollonian_effervescent" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/apollonian_electra.png" id="auras-apollonian_electra" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/apollonian_electric_samurai.png" id="auras-apollonian_electric_samurai" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/apollonian_elegant.png" id="auras-apollonian_elegant" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/apollonian_emo.png" id="auras-apollonian_emo" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/apollonian_ethereal.png" id="auras-apollonian_ethereal" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/apollonian_evil.png" id="auras-apollonian_evil" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/apollonian_fervent.png" id="auras-apollonian_fervent" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/apollonian_gay.png" id="auras-apollonian_gay" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/apollonian_gentle.png" id="auras-apollonian_gentle" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/apollonian_hipster.png" id="auras-apollonian_hipster" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/apollonian_horny.png" id="auras-apollonian_horny" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/apollonian_hot.png" id="auras-apollonian_hot" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/apollonian_intoxicating.png" id="auras-apollonian_intoxicating" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/apollonian_italian.png" id="auras-apollonian_italian" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/apollonian_jade_mcd.png" id="auras-apollonian_jade_mcd" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/apollonian_jazz.png" id="auras-apollonian_jazz" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/apollonian_jupiter.png" id="auras-apollonian_jupiter" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/apollonian_ketamine.png" id="auras-apollonian_ketamine" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/apollonian_laptop.png" id="auras-apollonian_laptop" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/apollonian_limewire.png" id="auras-apollonian_limewire" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/apollonian_maia.png" id="auras-apollonian_maia" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/apollonian_mars.png" id="auras-apollonian_mars" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/apollonian_mcdonalds.png" id="auras-apollonian_mcdonalds" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/apollonian_mercury.png" id="auras-apollonian_mercury" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/apollonian_merope.png" id="auras-apollonian_merope" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/apollonian_mid.png" id="auras-apollonian_mid" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/apollonian_neptune.png" id="auras-apollonian_neptune" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/apollonian_nightcore_clown.png" id="auras-apollonian_nightcore_clown" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/apollonian_nightcore_jazz.png" id="auras-apollonian_nightcore_jazz" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/apollonian_nightcore_sunset.png" id="auras-apollonian_nightcore_sunset" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/apollonian_orange.png" id="auras-apollonian_orange" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/apollonian_pastoral.png" id="auras-apollonian_pastoral" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/apollonian_patriotic.png" id="auras-apollonian_patriotic" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/apollonian_popular.png" id="auras-apollonian_popular" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/apollonian_prideful.png" id="auras-apollonian_prideful" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/apollonian_psychic.png" id="auras-apollonian_psychic" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/apollonian_queen.png" id="auras-apollonian_queen" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/apollonian_radiant.png" id="auras-apollonian_radiant" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/apollonian_regal.png" id="auras-apollonian_regal" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/apollonian_retarded.png" id="auras-apollonian_retarded" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/apollonian_rothgro.png" id="auras-apollonian_rothgro" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/apollonian_sage.png" id="auras-apollonian_sage" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/apollonian_sanguine.png" id="auras-apollonian_sanguine" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/apollonian_saturn.png" id="auras-apollonian_saturn" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/apollonian_schizo.png" id="auras-apollonian_schizo" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/apollonian_shy.png" id="auras-apollonian_shy" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/apollonian_snake.png" id="auras-apollonian_snake" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/apollonian_soft_magic.png" id="auras-apollonian_soft_magic" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/apollonian_spunky.png" id="auras-apollonian_spunky" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/apollonian_stoic.png" id="auras-apollonian_stoic" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/apollonian_sublime.png" id="auras-apollonian_sublime" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/apollonian_tactical.png" id="auras-apollonian_tactical" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/apollonian_taygeta.png" id="auras-apollonian_taygeta" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/apollonian_trad.png" id="auras-apollonian_trad" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/apollonian_twink.png" id="auras-apollonian_twink" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/apollonian_ukraine.png" id="auras-apollonian_ukraine" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/apollonian_unusual.png" id="auras-apollonian_unusual" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/apollonian_valiant.png" id="auras-apollonian_valiant" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/apollonian_vengeful.png" id="auras-apollonian_vengeful" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/apollonian_venus.png" id="auras-apollonian_venus" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/apollonian_vespertine.png" id="auras-apollonian_vespertine" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/apollonian_warrior_poet.png" id="auras-apollonian_warrior_poet" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/apollonian_wicked.png" id="auras-apollonian_wicked" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/apollonian_wise.png" id="auras-apollonian_wise" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/apollonian_xerox.png" id="auras-apollonian_xerox" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/apollonian_young_thug.png" id="auras-apollonian_young_thug" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/apollonian_zestful.png" id="auras-apollonian_zestful" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/areian_adventurous.png" id="auras-areian_adventurous" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/areian_alcyone.png" id="auras-areian_alcyone" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/areian_altruistic.png" id="auras-areian_altruistic" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/areian_arizona.png" id="auras-areian_arizona" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/areian_artheaux.png" id="auras-areian_artheaux" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/areian_asterope.png" id="auras-areian_asterope" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/areian_baroque_sunburst.png" id="auras-areian_baroque_sunburst" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/areian_benevolent.png" id="auras-areian_benevolent" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/areian_bimbo.png" id="auras-areian_bimbo" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/areian_bisexual-(don_t-use).png" id="auras-areian_bisexual-(don_t-use)" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/areian_bright-(don_t-use).png" id="auras-areian_bright-(don_t-use)" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/areian_burnt_amber.png" id="auras-areian_burnt_amber" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/areian_calm.png" id="auras-areian_calm" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/areian_celaeno.png" id="auras-areian_celaeno" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/areian_compassionate.png" id="auras-areian_compassionate" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/areian_cursed.png" id="auras-areian_cursed" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/areian_dark_1.png" id="auras-areian_dark_1" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/areian_dark_2.png" id="auras-areian_dark_2" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/areian_dark_3.png" id="auras-areian_dark_3" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/areian_dark_4.png" id="auras-areian_dark_4" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/areian_dark_5.png" id="auras-areian_dark_5" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/areian_dark_6.png" id="auras-areian_dark_6" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/areian_dark_7.png" id="auras-areian_dark_7" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/areian_dark_magician.png" id="auras-areian_dark_magician" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/areian_devilish.png" id="auras-areian_devilish" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/areian_dragon_ener.png" id="auras-areian_dragon_ener" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/areian_dreamer.png" id="auras-areian_dreamer" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/areian_druid.png" id="auras-areian_druid" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/areian_earth.png" id="auras-areian_earth" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/areian_effervescent.png" id="auras-areian_effervescent" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/areian_electra.png" id="auras-areian_electra" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/areian_electric_samurai.png" id="auras-areian_electric_samurai" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/areian_elegant.png" id="auras-areian_elegant" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/areian_emo.png" id="auras-areian_emo" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/areian_ethereal.png" id="auras-areian_ethereal" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/areian_evil.png" id="auras-areian_evil" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/areian_fervent.png" id="auras-areian_fervent" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/areian_gay.png" id="auras-areian_gay" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/areian_gentle.png" id="auras-areian_gentle" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/areian_hipster.png" id="auras-areian_hipster" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/areian_horny.png" id="auras-areian_horny" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/areian_hot.png" id="auras-areian_hot" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/areian_intoxicating.png" id="auras-areian_intoxicating" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/areian_italian.png" id="auras-areian_italian" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/areian_jade_mcd.png" id="auras-areian_jade_mcd" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/areian_jazz.png" id="auras-areian_jazz" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/areian_jupiter.png" id="auras-areian_jupiter" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/areian_ketamine.png" id="auras-areian_ketamine" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/areian_laptop.png" id="auras-areian_laptop" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/areian_limewire.png" id="auras-areian_limewire" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/areian_maia.png" id="auras-areian_maia" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/areian_mars.png" id="auras-areian_mars" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/areian_mcdonalds.png" id="auras-areian_mcdonalds" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/areian_mercury.png" id="auras-areian_mercury" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/areian_merope.png" id="auras-areian_merope" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/areian_mid.png" id="auras-areian_mid" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/areian_neptune.png" id="auras-areian_neptune" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/areian_nightcore_clown.png" id="auras-areian_nightcore_clown" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/areian_nightcore_jazz.png" id="auras-areian_nightcore_jazz" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/areian_nightcore_sunset.png" id="auras-areian_nightcore_sunset" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/areian_orange.png" id="auras-areian_orange" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/areian_pastoral.png" id="auras-areian_pastoral" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/areian_patriotic.png" id="auras-areian_patriotic" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/areian_popular.png" id="auras-areian_popular" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/areian_prideful.png" id="auras-areian_prideful" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/areian_psychic.png" id="auras-areian_psychic" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/areian_queen.png" id="auras-areian_queen" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/areian_radiant.png" id="auras-areian_radiant" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/areian_regal.png" id="auras-areian_regal" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/areian_retarded.png" id="auras-areian_retarded" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/areian_rothgro.png" id="auras-areian_rothgro" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/areian_sage.png" id="auras-areian_sage" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/areian_sanguine-(don_t-use).png" id="auras-areian_sanguine-(don_t-use)" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/areian_saturn.png" id="auras-areian_saturn" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/areian_schizo.png" id="auras-areian_schizo" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/areian_shaman.png" id="auras-areian_shaman" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/areian_shy.png" id="auras-areian_shy" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/areian_snake.png" id="auras-areian_snake" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/areian_soft_magic.png" id="auras-areian_soft_magic" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/areian_spunky.png" id="auras-areian_spunky" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/areian_stoic.png" id="auras-areian_stoic" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/areian_sublime.png" id="auras-areian_sublime" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/areian_tactical.png" id="auras-areian_tactical" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/areian_taygeta.png" id="auras-areian_taygeta" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/areian_trad.png" id="auras-areian_trad" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/areian_twink.png" id="auras-areian_twink" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/areian_ukraine.png" id="auras-areian_ukraine" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/areian_unusual.png" id="auras-areian_unusual" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/areian_valiant.png" id="auras-areian_valiant" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/areian_vengeful.png" id="auras-areian_vengeful" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/areian_venus.png" id="auras-areian_venus" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/areian_vespertine.png" id="auras-areian_vespertine" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/areian_warrior_poet.png" id="auras-areian_warrior_poet" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/areian_wicked.png" id="auras-areian_wicked" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/areian_wise.png" id="auras-areian_wise" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/areian_xerox.png" id="auras-areian_xerox" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/areian_young_thug.png" id="auras-areian_young_thug" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/areian_zestful.png" id="auras-areian_zestful" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/artemian_adventurous.png" id="auras-artemian_adventurous" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/artemian_alcyone.png" id="auras-artemian_alcyone" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/artemian_altruistic.png" id="auras-artemian_altruistic" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/artemian_arizona.png" id="auras-artemian_arizona" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/artemian_artheaux.png" id="auras-artemian_artheaux" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/artemian_asterope.png" id="auras-artemian_asterope" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/artemian_baroque_sunburst.png" id="auras-artemian_baroque_sunburst" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/artemian_benevolent.png" id="auras-artemian_benevolent" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/artemian_bimbo.png" id="auras-artemian_bimbo" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/artemian_bisexual.png" id="auras-artemian_bisexual" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/artemian_bright.png" id="auras-artemian_bright" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/artemian_burnt_amber.png" id="auras-artemian_burnt_amber" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/artemian_calm.png" id="auras-artemian_calm" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/artemian_celaeno.png" id="auras-artemian_celaeno" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/artemian_compassionate.png" id="auras-artemian_compassionate" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/artemian_cursed.png" id="auras-artemian_cursed" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/artemian_dark_1.png" id="auras-artemian_dark_1" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/artemian_dark_2.png" id="auras-artemian_dark_2" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/artemian_dark_3.png" id="auras-artemian_dark_3" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/artemian_dark_4.png" id="auras-artemian_dark_4" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/artemian_dark_5.png" id="auras-artemian_dark_5" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/artemian_dark_6.png" id="auras-artemian_dark_6" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/artemian_dark_7.png" id="auras-artemian_dark_7" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/artemian_dark_electric_samurai.png" id="auras-artemian_dark_electric_samurai" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/artemian_dark_magician.png" id="auras-artemian_dark_magician" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/artemian_dragon_ener.png" id="auras-artemian_dragon_ener" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/artemian_dreamer.png" id="auras-artemian_dreamer" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/artemian_druid.png" id="auras-artemian_druid" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/artemian_earth.png" id="auras-artemian_earth" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/artemian_effervescent.png" id="auras-artemian_effervescent" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/artemian_electra.png" id="auras-artemian_electra" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/artemian_electric_samurai.png" id="auras-artemian_electric_samurai" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/artemian_elegant.png" id="auras-artemian_elegant" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/artemian_emo.png" id="auras-artemian_emo" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/artemian_ethereal.png" id="auras-artemian_ethereal" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/artemian_evil.png" id="auras-artemian_evil" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/artemian_fervent.png" id="auras-artemian_fervent" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/artemian_gay.png" id="auras-artemian_gay" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/artemian_gentle.png" id="auras-artemian_gentle" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/artemian_hipster.png" id="auras-artemian_hipster" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/artemian_horny.png" id="auras-artemian_horny" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/artemian_hot.png" id="auras-artemian_hot" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/artemian_intoxicating.png" id="auras-artemian_intoxicating" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/artemian_italian.png" id="auras-artemian_italian" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/artemian_jazz.png" id="auras-artemian_jazz" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/artemian_jupiter.png" id="auras-artemian_jupiter" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/artemian_ketamine.png" id="auras-artemian_ketamine" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/artemian_laptop.png" id="auras-artemian_laptop" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/artemian_limewire.png" id="auras-artemian_limewire" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/artemian_maia.png" id="auras-artemian_maia" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/artemian_mars.png" id="auras-artemian_mars" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/artemian_mercury.png" id="auras-artemian_mercury" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/artemian_merope.png" id="auras-artemian_merope" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/artemian_mid-(don_t-use).png" id="auras-artemian_mid-(don_t-use)" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/artemian_neptune.png" id="auras-artemian_neptune" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/artemian_nightcore_clown.png" id="auras-artemian_nightcore_clown" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/artemian_nightcore_jazz.png" id="auras-artemian_nightcore_jazz" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/artemian_nightcore_sunset.png" id="auras-artemian_nightcore_sunset" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/artemian_orange.png" id="auras-artemian_orange" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/artemian_pastoral.png" id="auras-artemian_pastoral" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/artemian_patriotic.png" id="auras-artemian_patriotic" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/artemian_popular.png" id="auras-artemian_popular" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/artemian_prideful.png" id="auras-artemian_prideful" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/artemian_psychic-(don_t-use).png" id="auras-artemian_psychic-(don_t-use)" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/artemian_queen.png" id="auras-artemian_queen" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/artemian_radiant.png" id="auras-artemian_radiant" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/artemian_regal.png" id="auras-artemian_regal" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/artemian_retarded.png" id="auras-artemian_retarded" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/artemian_rothgro.png" id="auras-artemian_rothgro" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/artemian_sage.png" id="auras-artemian_sage" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/artemian_sanguine.png" id="auras-artemian_sanguine" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/artemian_saturn.png" id="auras-artemian_saturn" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/artemian_schizo.png" id="auras-artemian_schizo" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/artemian_shy.png" id="auras-artemian_shy" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/artemian_snake.png" id="auras-artemian_snake" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/artemian_soft_magic.png" id="auras-artemian_soft_magic" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/artemian_spunky.png" id="auras-artemian_spunky" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/artemian_stoic.png" id="auras-artemian_stoic" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/artemian_sublime.png" id="auras-artemian_sublime" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/artemian_tactical.png" id="auras-artemian_tactical" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/artemian_taygeta.png" id="auras-artemian_taygeta" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/artemian_trad.png" id="auras-artemian_trad" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/artemian_twink.png" id="auras-artemian_twink" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/artemian_ukraine.png" id="auras-artemian_ukraine" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/artemian_unusual.png" id="auras-artemian_unusual" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/artemian_valiant.png" id="auras-artemian_valiant" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/artemian_vengeful.png" id="auras-artemian_vengeful" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/artemian_venus.png" id="auras-artemian_venus" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/artemian_vespertine.png" id="auras-artemian_vespertine" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/artemian_warrior_poet.png" id="auras-artemian_warrior_poet" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/artemian_wicked.png" id="auras-artemian_wicked" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/artemian_wise.png" id="auras-artemian_wise" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/artemian_xerox.png" id="auras-artemian_xerox" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/artemian_young_thug.png" id="auras-artemian_young_thug" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/artemian_zestful.png" id="auras-artemian_zestful" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/dionysian_adventurous.png" id="auras-dionysian_adventurous" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/dionysian_alcyone.png" id="auras-dionysian_alcyone" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/dionysian_altruistic.png" id="auras-dionysian_altruistic" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/dionysian_arizona.png" id="auras-dionysian_arizona" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/dionysian_artheaux.png" id="auras-dionysian_artheaux" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/dionysian_asterope.png" id="auras-dionysian_asterope" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/dionysian_barque_sunburst.png" id="auras-dionysian_barque_sunburst" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/dionysian_benevolent.png" id="auras-dionysian_benevolent" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/dionysian_bimbo.png" id="auras-dionysian_bimbo" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/dionysian_bisexual.png" id="auras-dionysian_bisexual" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/dionysian_bright-(don_t-use).png" id="auras-dionysian_bright-(don_t-use)" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/dionysian_burnt_amber.png" id="auras-dionysian_burnt_amber" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/dionysian_calm.png" id="auras-dionysian_calm" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/dionysian_celaeno.png" id="auras-dionysian_celaeno" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/dionysian_compassionate.png" id="auras-dionysian_compassionate" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/dionysian_cursed.png" id="auras-dionysian_cursed" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/dionysian_dark_1.png" id="auras-dionysian_dark_1" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/dionysian_dark_2.png" id="auras-dionysian_dark_2" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/dionysian_dark_3.png" id="auras-dionysian_dark_3" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/dionysian_dark_4.png" id="auras-dionysian_dark_4" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/dionysian_dark_5.png" id="auras-dionysian_dark_5" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/dionysian_dark_6.png" id="auras-dionysian_dark_6" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/dionysian_dark_7.png" id="auras-dionysian_dark_7" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/dionysian_dark_electric_samurai.png" id="auras-dionysian_dark_electric_samurai" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/dionysian_dark_magician.png" id="auras-dionysian_dark_magician" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/dionysian_devilish.png" id="auras-dionysian_devilish" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/dionysian_dragon_ener.png" id="auras-dionysian_dragon_ener" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/dionysian_dreamer.png" id="auras-dionysian_dreamer" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/dionysian_druid.png" id="auras-dionysian_druid" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/dionysian_earth.png" id="auras-dionysian_earth" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/dionysian_effervescent.png" id="auras-dionysian_effervescent" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/dionysian_electra.png" id="auras-dionysian_electra" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/dionysian_electric_samurai.png" id="auras-dionysian_electric_samurai" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/dionysian_elegant.png" id="auras-dionysian_elegant" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/dionysian_emo.png" id="auras-dionysian_emo" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/dionysian_ethereal.png" id="auras-dionysian_ethereal" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/dionysian_evil.png" id="auras-dionysian_evil" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/dionysian_fervent.png" id="auras-dionysian_fervent" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/dionysian_gay.png" id="auras-dionysian_gay" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/dionysian_gentle.png" id="auras-dionysian_gentle" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/dionysian_horny.png" id="auras-dionysian_horny" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/dionysian_hot.png" id="auras-dionysian_hot" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/dionysian_intoxicating-(don_t-use).png" id="auras-dionysian_intoxicating-(don_t-use)" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/dionysian_italian.png" id="auras-dionysian_italian" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/dionysian_jade_mcd.png" id="auras-dionysian_jade_mcd" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/dionysian_jazz.png" id="auras-dionysian_jazz" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/dionysian_jupiter.png" id="auras-dionysian_jupiter" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/dionysian_ketamine.png" id="auras-dionysian_ketamine" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/dionysian_laptop.png" id="auras-dionysian_laptop" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/dionysian_limewire.png" id="auras-dionysian_limewire" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/dionysian_maia.png" id="auras-dionysian_maia" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/dionysian_mars.png" id="auras-dionysian_mars" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/dionysian_mcdonalds.png" id="auras-dionysian_mcdonalds" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/dionysian_mercury.png" id="auras-dionysian_mercury" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/dionysian_merope.png" id="auras-dionysian_merope" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/dionysian_mid.png" id="auras-dionysian_mid" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/dionysian_neptune.png" id="auras-dionysian_neptune" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/dionysian_nightcore_clown.png" id="auras-dionysian_nightcore_clown" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/dionysian_nightcore_jazz.png" id="auras-dionysian_nightcore_jazz" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/dionysian_nightcore_sunset.png" id="auras-dionysian_nightcore_sunset" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/dionysian_orange.png" id="auras-dionysian_orange" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/dionysian_pastoral.png" id="auras-dionysian_pastoral" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/dionysian_patriotic.png" id="auras-dionysian_patriotic" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/dionysian_popular.png" id="auras-dionysian_popular" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/dionysian_prideful.png" id="auras-dionysian_prideful" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/dionysian_psychic.png" id="auras-dionysian_psychic" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/dionysian_queen.png" id="auras-dionysian_queen" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/dionysian_radiant.png" id="auras-dionysian_radiant" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/dionysian_regal.png" id="auras-dionysian_regal" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/dionysian_retarded.png" id="auras-dionysian_retarded" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/dionysian_sage.png" id="auras-dionysian_sage" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/dionysian_sanguine.png" id="auras-dionysian_sanguine" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/dionysian_saturn.png" id="auras-dionysian_saturn" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/dionysian_schizo.png" id="auras-dionysian_schizo" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/dionysian_shy.png" id="auras-dionysian_shy" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/dionysian_snake.png" id="auras-dionysian_snake" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/dionysian_soft_magic.png" id="auras-dionysian_soft_magic" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/dionysian_spunky.png" id="auras-dionysian_spunky" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/dionysian_stoic.png" id="auras-dionysian_stoic" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/dionysian_sublime.png" id="auras-dionysian_sublime" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/dionysian_tactical.png" id="auras-dionysian_tactical" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/dionysian_taygeta.png" id="auras-dionysian_taygeta" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/dionysian_trad.png" id="auras-dionysian_trad" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/dionysian_twink.png" id="auras-dionysian_twink" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/dionysian_ukraine.png" id="auras-dionysian_ukraine" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/dionysian_unusual.png" id="auras-dionysian_unusual" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/dionysian_valiant.png" id="auras-dionysian_valiant" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/dionysian_vengeful.png" id="auras-dionysian_vengeful" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/dionysian_venus.png" id="auras-dionysian_venus" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/dionysian_vespertine.png" id="auras-dionysian_vespertine" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/dionysian_warrior_poet.png" id="auras-dionysian_warrior_poet" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/dionysian_wicked-(don_t-use).png" id="auras-dionysian_wicked-(don_t-use)" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/dionysian_wise.png" id="auras-dionysian_wise" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/dionysian_xerox.png" id="auras-dionysian_xerox" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/dionysian_young_thug.png" id="auras-dionysian_young_thug" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/dionysian_zestful.png" id="auras-dionysian_zestful" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/hermian_adventurous.png" id="auras-hermian_adventurous" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/hermian_alcyone.png" id="auras-hermian_alcyone" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/hermian_altruistic.png" id="auras-hermian_altruistic" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/hermian_arizona.png" id="auras-hermian_arizona" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/hermian_artheaux.png" id="auras-hermian_artheaux" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/hermian_asterope.png" id="auras-hermian_asterope" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/hermian_baroque_sunburst.png" id="auras-hermian_baroque_sunburst" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/hermian_benevolent.png" id="auras-hermian_benevolent" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/hermian_bimbo.png" id="auras-hermian_bimbo" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/hermian_bisexual.png" id="auras-hermian_bisexual" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/hermian_bright.png" id="auras-hermian_bright" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/hermian_burnt_amber.png" id="auras-hermian_burnt_amber" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/hermian_calm.png" id="auras-hermian_calm" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/hermian_celaeno.png" id="auras-hermian_celaeno" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/hermian_compassionate.png" id="auras-hermian_compassionate" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/hermian_cursed.png" id="auras-hermian_cursed" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/hermian_dark_1.png" id="auras-hermian_dark_1" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/hermian_dark_2.png" id="auras-hermian_dark_2" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/hermian_dark_3.png" id="auras-hermian_dark_3" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/hermian_dark_4.png" id="auras-hermian_dark_4" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/hermian_dark_5.png" id="auras-hermian_dark_5" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/hermian_dark_6.png" id="auras-hermian_dark_6" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/hermian_dark_7.png" id="auras-hermian_dark_7" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/hermian_dark_electric_samurai.png" id="auras-hermian_dark_electric_samurai" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/hermian_dark_magician.png" id="auras-hermian_dark_magician" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/hermian_devilish.png" id="auras-hermian_devilish" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/hermian_dragon_ener.png" id="auras-hermian_dragon_ener" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/hermian_dreamer.png" id="auras-hermian_dreamer" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/hermian_druid.png" id="auras-hermian_druid" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/hermian_earth.png" id="auras-hermian_earth" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/hermian_effervescent.png" id="auras-hermian_effervescent" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/hermian_electra.png" id="auras-hermian_electra" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/hermian_electric_samurai.png" id="auras-hermian_electric_samurai" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/hermian_elegant.png" id="auras-hermian_elegant" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/hermian_emo.png" id="auras-hermian_emo" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/hermian_ethereal.png" id="auras-hermian_ethereal" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/hermian_evil.png" id="auras-hermian_evil" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/hermian_fervent.png" id="auras-hermian_fervent" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/hermian_gay.png" id="auras-hermian_gay" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/hermian_gentle.png" id="auras-hermian_gentle" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/hermian_hipster.png" id="auras-hermian_hipster" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/hermian_horny.png" id="auras-hermian_horny" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/hermian_hot.png" id="auras-hermian_hot" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/hermian_intoxicating-(don_t-use).png" id="auras-hermian_intoxicating-(don_t-use)" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/hermian_italian.png" id="auras-hermian_italian" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/hermian_jade_mcd.png" id="auras-hermian_jade_mcd" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/hermian_jazz.png" id="auras-hermian_jazz" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/hermian_jupiter.png" id="auras-hermian_jupiter" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/hermian_ketamine.png" id="auras-hermian_ketamine" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/hermian_laptop.png" id="auras-hermian_laptop" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/hermian_limewire.png" id="auras-hermian_limewire" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/hermian_maia.png" id="auras-hermian_maia" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/hermian_mars.png" id="auras-hermian_mars" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/hermian_mercury.png" id="auras-hermian_mercury" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/hermian_merope.png" id="auras-hermian_merope" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/hermian_mid-(don_t-use).png" id="auras-hermian_mid-(don_t-use)" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/hermian_neptune.png" id="auras-hermian_neptune" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/hermian_nightcore_clown.png" id="auras-hermian_nightcore_clown" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/hermian_nightcore_jazz.png" id="auras-hermian_nightcore_jazz" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/hermian_nightcore_sunset.png" id="auras-hermian_nightcore_sunset" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/hermian_orange.png" id="auras-hermian_orange" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/hermian_pastoral.png" id="auras-hermian_pastoral" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/hermian_patriotic.png" id="auras-hermian_patriotic" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/hermian_popular.png" id="auras-hermian_popular" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/hermian_prideful.png" id="auras-hermian_prideful" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/hermian_psychic.png" id="auras-hermian_psychic" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/hermian_queen.png" id="auras-hermian_queen" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/hermian_radiant.png" id="auras-hermian_radiant" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/hermian_regal.png" id="auras-hermian_regal" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/hermian_retarded.png" id="auras-hermian_retarded" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/hermian_sage.png" id="auras-hermian_sage" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/hermian_sanguine.png" id="auras-hermian_sanguine" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/hermian_saturn.png" id="auras-hermian_saturn" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/hermian_schizo.png" id="auras-hermian_schizo" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/hermian_shy.png" id="auras-hermian_shy" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/hermian_snake.png" id="auras-hermian_snake" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/hermian_soft_magic.png" id="auras-hermian_soft_magic" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/hermian_spunky.png" id="auras-hermian_spunky" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/hermian_stoic.png" id="auras-hermian_stoic" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/hermian_sublime.png" id="auras-hermian_sublime" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/hermian_tactical.png" id="auras-hermian_tactical" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/hermian_taygeta.png" id="auras-hermian_taygeta" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/hermian_trad.png" id="auras-hermian_trad" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/hermian_twink.png" id="auras-hermian_twink" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/hermian_ukraine.png" id="auras-hermian_ukraine" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/hermian_unusual.png" id="auras-hermian_unusual" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/hermian_valiant.png" id="auras-hermian_valiant" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/hermian_vengeful.png" id="auras-hermian_vengeful" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/hermian_venus.png" id="auras-hermian_venus" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/hermian_vespertine.png" id="auras-hermian_vespertine" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/hermian_warrior_poet.png" id="auras-hermian_warrior_poet" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/hermian_wicked.png" id="auras-hermian_wicked" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/hermian_wise.png" id="auras-hermian_wise" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/hermian_young_thug.png" id="auras-hermian_young_thug" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/hermian_zestful.png" id="auras-hermian_zestful" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/luminescent-(bruno-1_1).png" id="auras-luminescent-(bruno-1_1)" class="auras"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BE6tS4xnHnEbjF5ED6xEWZGeTA9De7upPiQC1ue7TnT6/mihad (charlie 1_1).png" id="auras-mihad (charlie 1_1)" class="auras"/>
                        
                        <img data-img-src="https://shdw-drive.genesysgo.net/8pJ2PZrrT2XpbXzktSkmGXUUa9G84MR3ctVa1kp7sDAq/pale.png" id="skin-pale" class="skin"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/8pJ2PZrrT2XpbXzktSkmGXUUa9G84MR3ctVa1kp7sDAq/alien.png" id="skin-alien" class="skin"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/8pJ2PZrrT2XpbXzktSkmGXUUa9G84MR3ctVa1kp7sDAq/brown.png" id="skin-brown" class="skin"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/8pJ2PZrrT2XpbXzktSkmGXUUa9G84MR3ctVa1kp7sDAq/clay.png" id="skin-clay" class="skin"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/8pJ2PZrrT2XpbXzktSkmGXUUa9G84MR3ctVa1kp7sDAq/pink.png" id="skin-pink" class="skin"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/8pJ2PZrrT2XpbXzktSkmGXUUa9G84MR3ctVa1kp7sDAq/tan.png" id="skin-tan" class="skin"/>
                
                        <img data-img-src="https://shdw-drive.genesysgo.net/Ga5RDWE9ASkGZrfszTXxsMNaMGArjwhCmCKxrcjMuC2q/girl%20necklace.png" id="necklace-girl" class="necklace"/>
                
                        <img data-img-src="https://shdw-drive.genesysgo.net/BVcrWigpnQV8vjGZp3aizsjgxVVuNVNygscdbsZProWz/red%20puffer.png" id="outfit-red_puffer" class="outfit"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BVcrWigpnQV8vjGZp3aizsjgxVVuNVNygscdbsZProWz/ribbon%20lolita.png" id="outfit-ribbon_lolita" class="outfit"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BVcrWigpnQV8vjGZp3aizsjgxVVuNVNygscdbsZProWz/sweater%20and%20tie.png" id="outfit-sweater_tie" class="outfit"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BVcrWigpnQV8vjGZp3aizsjgxVVuNVNygscdbsZProWz/punk%20rock.png" id="outfit-punk_rock" class="outfit"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BVcrWigpnQV8vjGZp3aizsjgxVVuNVNygscdbsZProWz/jesus%20tank.png" id="outfit-jesus_tank" class="outfit"/>
                
                        <img data-img-src="https://shdw-drive.genesysgo.net/B2pd9KJfCBJsiUZm1J3bGDijiK1MH825ywYqofzuHfZD/cheeky.png" id="mouth-cheeky" class="mouths"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/B2pd9KJfCBJsiUZm1J3bGDijiK1MH825ywYqofzuHfZD/flat.png" id="mouth-flat" class="mouths"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/B2pd9KJfCBJsiUZm1J3bGDijiK1MH825ywYqofzuHfZD/smile.png" id="mouth-smile" class="mouths"/>
                
                        <img data-img-src="https://shdw-drive.genesysgo.net/5aq1d4pbjJ57TWayRGsJ1EP513ra4wRWLTPbmnNXFyEg/green%20lens.png" id="lens-green" class="lens"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/5aq1d4pbjJ57TWayRGsJ1EP513ra4wRWLTPbmnNXFyEg/black%20lens.png" id="lens-black" class="lens"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/5aq1d4pbjJ57TWayRGsJ1EP513ra4wRWLTPbmnNXFyEg/blue%20lens.png" id="lens-blue" class="lens"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/5aq1d4pbjJ57TWayRGsJ1EP513ra4wRWLTPbmnNXFyEg/brown%20lens.png" id="lens-brown" class="lens"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/5aq1d4pbjJ57TWayRGsJ1EP513ra4wRWLTPbmnNXFyEg/fuschia%20lens.png" id="lens-fuschia" class="lens"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/5aq1d4pbjJ57TWayRGsJ1EP513ra4wRWLTPbmnNXFyEg/gray%20lens.png" id="lens-gray" class="lens"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/5aq1d4pbjJ57TWayRGsJ1EP513ra4wRWLTPbmnNXFyEg/green%20blue%20lens.png" id="lens-green_blue" class="lens"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/5aq1d4pbjJ57TWayRGsJ1EP513ra4wRWLTPbmnNXFyEg/hazel%20lens.png" id="lens-hazel" class="lens"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/5aq1d4pbjJ57TWayRGsJ1EP513ra4wRWLTPbmnNXFyEg/light%20blue%20lens.png" id="lens-light_blue" class="lens"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/5aq1d4pbjJ57TWayRGsJ1EP513ra4wRWLTPbmnNXFyEg/peach%20lens.png" id="lens-peach" class="lens"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/5aq1d4pbjJ57TWayRGsJ1EP513ra4wRWLTPbmnNXFyEg/pink%20tan%20lens.png" id="lens-pink_tan" class="lens"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/5aq1d4pbjJ57TWayRGsJ1EP513ra4wRWLTPbmnNXFyEg/red%20lens.png" id="lens-red" class="lens"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/5aq1d4pbjJ57TWayRGsJ1EP513ra4wRWLTPbmnNXFyEg/sunshine%20lens.png" id="lens-sunshine" class="lens"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/5aq1d4pbjJ57TWayRGsJ1EP513ra4wRWLTPbmnNXFyEg/white%20lens.png" id="lens-white" class="lens"/>
                
                        <img data-img-src="https://shdw-drive.genesysgo.net/6dHmeNNevSd5aEySPTMS4umX873yLyduV9rj67d8XmMR/alien.png" id="eyes-alien" class="eyes"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/6dHmeNNevSd5aEySPTMS4umX873yLyduV9rj67d8XmMR/amber.png" id="eyes-amber" class="eyes"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/6dHmeNNevSd5aEySPTMS4umX873yLyduV9rj67d8XmMR/aqueous.png" id="eyes-aqueous" class="eyes"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/6dHmeNNevSd5aEySPTMS4umX873yLyduV9rj67d8XmMR/black_ceramic.png" id="eyes-black_ceramic" class="eyes"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/6dHmeNNevSd5aEySPTMS4umX873yLyduV9rj67d8XmMR/black_spiral.png" id="eyes-black_spiral" class="eyes"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/6dHmeNNevSd5aEySPTMS4umX873yLyduV9rj67d8XmMR/bug.png" id="eyes-bug" class="eyes"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/6dHmeNNevSd5aEySPTMS4umX873yLyduV9rj67d8XmMR/glowing.png" id="eyes-glowing" class="eyes"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/6dHmeNNevSd5aEySPTMS4umX873yLyduV9rj67d8XmMR/gold.png" id="eyes-gold" class="eyes"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/6dHmeNNevSd5aEySPTMS4umX873yLyduV9rj67d8XmMR/gray.png" id="eyes-gray" class="eyes"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/6dHmeNNevSd5aEySPTMS4umX873yLyduV9rj67d8XmMR/leaf_hearts.png" id="eyes-leaf_hearts" class="eyes"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/6dHmeNNevSd5aEySPTMS4umX873yLyduV9rj67d8XmMR/lilac_hearts.png" id="eyes-lilac_hearts" class="eyes"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/6dHmeNNevSd5aEySPTMS4umX873yLyduV9rj67d8XmMR/red_tv_hearts.png" id="eyes-red_tv_hearts" class="eyes"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/6dHmeNNevSd5aEySPTMS4umX873yLyduV9rj67d8XmMR/sleepy.png" id="eyes-sleepy" class="eyes"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/6dHmeNNevSd5aEySPTMS4umX873yLyduV9rj67d8XmMR/spectral.png" id="eyes-spectral" class="eyes"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/6dHmeNNevSd5aEySPTMS4umX873yLyduV9rj67d8XmMR/tv_hearts.png" id="eyes-tv_hearts" class="eyes"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/6dHmeNNevSd5aEySPTMS4umX873yLyduV9rj67d8XmMR/white_spiral.png" id="eyes-white_spiral" class="eyes"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/6dHmeNNevSd5aEySPTMS4umX873yLyduV9rj67d8XmMR/classic.png" id="eyes-classic" class="eyes"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/6dHmeNNevSd5aEySPTMS4umX873yLyduV9rj67d8XmMR/sparkle.png" id="eyes-sparkle" class="eyes"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/6dHmeNNevSd5aEySPTMS4umX873yLyduV9rj67d8XmMR/teary.png" id="eyes-teary" class="eyes"/>
                
                        <img data-img-src="https://shdw-drive.genesysgo.net/DC4tYxHHqJf7mbFLhGMH7g7Xvk1dTPAhwbQHM2aLDjkR/curious.png" id="eyebrow-curious" class="eyebrows"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/DC4tYxHHqJf7mbFLhGMH7g7Xvk1dTPAhwbQHM2aLDjkR/raised%20elongated.png" id="eyebrow-raised_long" class="eyebrows"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/DC4tYxHHqJf7mbFLhGMH7g7Xvk1dTPAhwbQHM2aLDjkR/thick%20short.png" id="eyebrow-thick_short" class="eyebrows"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/DC4tYxHHqJf7mbFLhGMH7g7Xvk1dTPAhwbQHM2aLDjkR/thin%20elongated.png" id="eyebrow-thin_long" class="eyebrows"/>
                
                        <img data-img-src="https://shdw-drive.genesysgo.net/HcqrmwB7AUiVXhcpGFHN8A96bUGmqwdehf8nXekBH7M8/star%20heart%20tattoo.png" id="face-star_heart" class="face"/>
                
                        <img data-img-src="https://shdw-drive.genesysgo.net/D974uWtQ1HGHFdBjKps7uaBo7NPEGXiJSxj7c7pQNdA/diamond%20stud.png" id="piercings-diamond_stud" class="piercings"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/D974uWtQ1HGHFdBjKps7uaBo7NPEGXiJSxj7c7pQNdA/dual%20gold%20rings.png" id="piercings-dual_gold_rings" class="piercings"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/D974uWtQ1HGHFdBjKps7uaBo7NPEGXiJSxj7c7pQNdA/dual%20silver%20rings.png" id="piercings-dual_silver_rings" class="piercings"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/D974uWtQ1HGHFdBjKps7uaBo7NPEGXiJSxj7c7pQNdA/sakura%20flower.png" id="piercings-sakura" class="piercings"/>
                
                        <img data-img-src="https://shdw-drive.genesysgo.net/H9dEwDk9G6QLogegq16tk1YS5Tuy4bMzUsFEHR1NoMvw/blue%20mottega%20gsunglasses.png" id="eyewear-blue_mottega" class="eyewear"/>
                
                        <img data-img-src="https://shdw-drive.genesysgo.net/BbE42mmn3cPzt4hNjAxoBZt77Zpv8GDWCWQDJ544gNqE/brown%20bowl%20hair.png" id="hair-brown_bowl" class="hairstyles"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BbE42mmn3cPzt4hNjAxoBZt77Zpv8GDWCWQDJ544gNqE/og%20blonde.png" id="hair-og_blonde" class="hairstyles"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BbE42mmn3cPzt4hNjAxoBZt77Zpv8GDWCWQDJ544gNqE/og%20blue.png" id="hair-og_blue" class="hairstyles"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/BbE42mmn3cPzt4hNjAxoBZt77Zpv8GDWCWQDJ544gNqE/og%20orange.png" id="hair-og_orange" class="hairstyles"/>
                
                        <img data-img-src="https://shdw-drive.genesysgo.net/CFpBYrfxHCK8EeT3uHRtFsFA5AvNaufyzYyiFPLBaccx/fuzz%20cow%20bucket.png" id="headwear-fuzz_cow" class="headwear"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/CFpBYrfxHCK8EeT3uHRtFsFA5AvNaufyzYyiFPLBaccx/trucker%20hat%20911.png" id="headwear-trucker_911" class="headwear"/>
                        <img data-img-src="https://shdw-drive.genesysgo.net/CFpBYrfxHCK8EeT3uHRtFsFA5AvNaufyzYyiFPLBaccx/fuzz%20earmuffs.png" id="headwear-fuzz_earmuffs" class="headwear"/>
                
                        <img data-img-src="https://shdw-drive.genesysgo.net/5FSMjr4ontsxUxmDjoKH1b6VBMHsaFw6Vcj1WE3CrGiJ/stoge.png" id="accessories-stoge" class="accessories"/>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    `;
  divScreenContainer.append(div);

  //  let allTickets =  JSON.parse(localStorage.getItem('WardrobeAllTickets'));
  // if(allTickets){

  // }

  //Z-INdex
  let currBox = document.querySelector('.box-box[appbox="Wardrobe"]');
  if (currBox) {
    currDockIcon.addEventListener("click", function () {
      if ((lastZIndexAppBOx != lastZIndexAppBOx) != "Wardrobe") {
        let lastOpenBox = document.querySelector(
          `.box-box[appbox="${lastZIndexAppBOx}"]`
        );
        if (lastOpenBox) {
          lastOpenBox.style.zIndex = "0";
        }
      }
      let currBox = document.querySelector('.box-box[appbox="Wardrobe"]');
      currBox.style.zIndex = "80";
      lastZIndexAppBOx = "Wardrobe";
    });
  }

  cancelCircle(currDockIcon, appBox);
  fullScreenCircle(appBox);
  minimize(appBox);

  WardrobeLoadTask();
}

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