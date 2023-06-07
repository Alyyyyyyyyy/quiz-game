// ----------模組化後---------------
// 展開角色card
function expand(chaName) {

    var chaNameLower = chaName.toLowerCase();

    // 框架出現border
    document.getElementById(`main${chaName}`).style.border = "3px solid white";

    //換圖片 
    // 螢幕寬度於830px上 or 下換不同圖片
    if (window.innerWidth > 830) {
        document.getElementById(`main${chaName}Img`).src = "./img/" + chaNameLower + "-unstack-open.png";
    } else {
        document.getElementById(`main${chaName}Img`).classList.remove(`main${chaName}Img`);
        document.getElementById(`main${chaName}Img`).classList.add(`main${chaName}ImgOpen`);
    }

    // 顯示文字介紹區塊
    document.getElementById(`${chaNameLower}_introduce`).style.display = "block";

    // 改按鈕點擊動作為收合框架
    document.getElementById(`${chaNameLower}Btn`).onclick = function () { collapse(chaName) };

    // 改按鈕區塊高度
    document.getElementById(`${chaNameLower}Btn`).style.height = "108px";

    // 改按鈕圖案
    document.getElementById(`arrow${chaName}_1`).innerHTML = '<path d="M30 20 L16 8 2 20" />';
    document.getElementById(`arrow${chaName}_2`).innerHTML = '<path d="M30 20 L16 8 2 20" />';
}

// 縮合角色card
function collapse(chaName) {

    var chaNameLower = chaName.toLowerCase();

    // 框架取消border
    document.getElementById(`main${chaName}`).style.border = "none";

    // 換圖片
    // 螢幕寬度於830px上 or 下換不同圖片
    if (window.innerWidth > 830) {
        document.getElementById(`main${chaName}Img`).src = "./img/" + chaNameLower + "-unstack-closed.png";
    } else {
        document.getElementById(`main${chaName}Img`).classList.remove(`main${chaName}ImgOpen`);
        document.getElementById(`main${chaName}Img`).classList.add(`main${chaName}Img`);
    }

    // 顯示文字介紹區塊
    document.getElementById(`${chaNameLower}_introduce`).style.display = "none";

    // 改按鈕點擊動作為展開框架
    document.getElementById(`${chaNameLower}Btn`).onclick = function () { expand(chaName) };

    // 改按鈕區塊高度
    document.getElementById(`${chaNameLower}Btn`).style.height = "100%";

    // 改按鈕圖案
    document.getElementById(`arrow${chaName}_1`).innerHTML = '<path d="M30 12 L16 24 2 12" />';
    document.getElementById(`arrow${chaName}_2`).innerHTML = '<path d="M30 12 L16 24 2 12" />';

}


// ----------模組化前---------------
function expand_mario() {

    // 展開框架
    mainMario.style.height = "435.41px";
    // 框架加border
    mainMario.style.border = "3px solid white";

    //換圖片 
    mainMarioImg.src = "./img/mario-unstack-open.png";

    // 顯示文字介紹區塊
    mario_introduce.style.display = "block";

    // 改按鈕點擊動作為收合框架
    marioBtn.onclick = collapse_mario;

    // 改按鈕區塊高度
    marioBtn.style.height = "128px";

    // 改按鈕圖案
    arrow1.innerHTML = '<path d="M30 20 L16 8 2 20" />';
    arrow2.innerHTML = '<path d="M30 20 L16 8 2 20" />';

}

function collapse_mario() {

    // 收合框架
    mainMario.style.height = "auto";
    // 框架取消border
    mainMario.style.border = "none";

    //換圖片 
    mainMarioImg.src = "./img/mario-unstack-closed.png";

    // 顯示文字介紹區塊
    mario_introduce.style.display = "none";

    // 改按鈕點擊動作為展開框架
    marioBtn.onclick = expand_mario;

    // 改按鈕區塊高度
    marioBtn.style.height = "100%";

    // 改按鈕圖案
    arrow1.innerHTML = '<path d="M30 12 L16 24 2 12" />';
    arrow2.innerHTML = '<path d="M30 12 L16 24 2 12" />';

}

function expand_luigi() {

    // 展開框架
    mainLuigi.style.height = "435.41px";
    // 框架取消border
    mainLuigi.style.border = "3px solid white";

    //換圖片 
    mainLuigiImg.src = "./img/luigi-unstack-open.png";

    // 顯示文字介紹區塊
    luigi_introduce.style.display = "block";

    // 改按鈕點擊動作為收合框架
    luigiBtn.onclick = collapse_luigi;

    // 改按鈕區塊高度
    luigiBtn.style.height = "128px";

    // 改按鈕圖案
    arrow_2_1.innerHTML = '<path d="M30 20 L16 8 2 20" />';
    arrow_2_2.innerHTML = '<path d="M30 20 L16 8 2 20" />';

}

function collapse_luigi() {

    // 收合框架
    mainLuigi.style.height = "auto";
    // 框架取消border
    mainLuigi.style.border = "none";

    //換圖片 
    mainLuigiImg.src = "./img/luigi-unstack-closed.png";

    // 顯示文字介紹區塊
    luigi_introduce.style.display = "none";

    // 改按鈕點擊動作為展開框架
    luigiBtn.onclick = expand_luigi;

    // 改按鈕區塊高度
    luigiBtn.style.height = "100%";

    // 改按鈕圖案
    arrow_2_1.innerHTML = '<path d="M30 12 L16 24 2 12" />';
    arrow_2_2.innerHTML = '<path d="M30 12 L16 24 2 12" />';

}

function expand_peach() {

    // 展開框架
    mainPeach.style.height = "435.41px";
    // 框架取消border
    mainPeach.style.border = "3px solid white";

    //換圖片 
    mainPeachImg.src = "./img/peach-unstack-open.png";

    // 顯示文字介紹區塊
    peach_introduce.style.display = "block";

    // 改按鈕點擊動作為收合框架
    peachBtn.onclick = collapse_peach;

    // 改按鈕區塊高度
    peachBtn.style.height = "128px";

    // 改按鈕圖案
    arrow_3_1.innerHTML = '<path d="M30 20 L16 8 2 20" />';
    arrow_3_2.innerHTML = '<path d="M30 20 L16 8 2 20" />';

}

function collapse_peach() {

    // 收合框架
    mainPeach.style.height = "auto";
    // 框架取消border
    mainPeach.style.border = "none";

    //換圖片 
    mainPeachImg.src = "./img/peach-unstack-closed.png";

    // 顯示文字介紹區塊
    peach_introduce.style.display = "none";

    // 改按鈕點擊動作為展開框架
    peachBtn.onclick = expand_peach;

    // 改按鈕區塊高度
    peachBtn.style.height = "100%";

    // 改按鈕圖案
    arrow_3_1.innerHTML = '<path d="M30 12 L16 24 2 12" />';
    arrow_3_2.innerHTML = '<path d="M30 12 L16 24 2 12" />';

}


