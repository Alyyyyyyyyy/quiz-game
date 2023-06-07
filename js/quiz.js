var quizNumber;
var op_1, op_2, op_3, op_4;
var score;
var level;
var hard;


function quiz_initial(hard) {
    level = hard;
    score = 0;
    quizNumber = 1;
    // console.log(hard);

    //讓封面圖消失
    question_cover.style.display = "none";

    // 設置背景色
    var x = document.getElementById("frame");
    x.style.setProperty("background-image", "linear-gradient(180deg,#ffe847,#ffce55)");

    // 顯示進度條
    process.style.display = "flex";

    // 隱藏結果畫面的圖片
    resultImageArea.style.display = "none";

    // 洗掉原本的選項，新增ul>四個li框架
    // document.getElementById("answer_frame").innerHTML = "<ul id='answer_options' class = 'quiz_choose_level' style:'display:none;'></ul>"
    document.getElementById("answer_frame").innerHTML = "<ul id='answer_options' class = 'quiz_choose_level'></ul>"
    document.getElementById("answer_options").innerHTML =
        `<li><button id = 'op1'></button></li><li><button id = 'op2'></button></li><li><button id = 'op3'></button></li><li><button id = 'op4'></button></li>`;


    op_1 = document.getElementById("op1");
    op_2 = document.getElementById("op2");
    op_3 = document.getElementById("op3");
    op_4 = document.getElementById("op4");

    //建next button框架，預設設為隱藏
    var next = document.createElement("button");
    next.innerText = "next";
    next.setAttribute("class", "quiz_next_btn");
    next.setAttribute("style", "display:none;");
    next.setAttribute("style", "position: relative;");
    next.setAttribute("style", "z-index: 5;");
    next.setAttribute("id", "next");
    next.setAttribute("onclick", level == true ? "quiz_hard()" : "quiz_easy()");
    document.querySelector('#answer_frame').appendChild(next);

    // console.log(hard);
    hard == true ? quiz_hard() : quiz_easy();

}

function quiz_easy() {

    // 出現答案選單
    document.getElementById("answer_options").style.display = "flex";
    document.getElementById("question").style.color = "black";

    // 顯示進度條
    process.style.display = "flex";

    switch (quizNumber) {
        case 1:
            // 新增題目
            document.getElementById("question").innerText = "耀西是什麼生物?";

            // 設置進度條
            process_text.innerText = "1/5";
            process_bar.style.flexBasis = "20%";

            //新增答案按鈕
            op_1.innerText = "恐龍";
            op_2.innerText = "蜥蜴";
            op_3.innerText = "烏龜";
            op_4.innerText = "壁虎";

            op_3.setAttribute("onclick", "AnswerRight()");

            op_1.setAttribute("onclick", "AnswerWrong()");
            op_2.setAttribute("onclick", "AnswerWrong()");
            op_4.setAttribute("onclick", "AnswerWrong()");

            break;

        case 2:
            // 新增題目
            document.getElementById("question").innerText = "路易吉是瑪利歐的?";

            // 設置進度條
            process_text.innerText = "2/5";
            process_bar.style.flexBasis = "40%";

            // 改變背景顏色
            question_frame.style.backgroundImage = "linear-gradient(180deg,#b4e3ff,#f1c5ff)";

            //新增答案按鈕
            op_1.innerText = "爸爸";
            op_2.innerText = "老闆";
            op_3.innerText = "兄弟";
            op_4.innerText = "同事";

            op_3.setAttribute("onclick", "AnswerRight()");

            op_1.setAttribute("onclick", "AnswerWrong()");
            op_2.setAttribute("onclick", "AnswerWrong()");
            op_4.setAttribute("onclick", "AnswerWrong()");

            break;

        case 3:
            // 新增題目
            document.getElementById("question").innerText = "瑪利歐是用哪裡撞磚塊的?";

            // 設置進度條
            process_text.innerText = "3/5";
            process_bar.style.flexBasis = "60%";

            // 改變背景顏色
            question_frame.style.backgroundImage = "linear-gradient(180deg, #b6f8ff, #bdffc1)";

            //新增答案按鈕
            op_1.innerText = "拳頭";
            op_2.innerText = "頭頂";
            op_3.innerText = "肚皮";
            op_4.innerText = "氣功";

            op_1.setAttribute("onclick", "AnswerRight()");

            op_2.setAttribute("onclick", "AnswerWrong()");
            op_3.setAttribute("onclick", "AnswerWrong()");
            op_4.setAttribute("onclick", "AnswerWrong()");

            break;

        case 4:
            // 新增題目
            document.getElementById("question").innerText = "什麼道具不能讓瑪利歐變強?";

            // 設置進度條
            process_text.innerText = "4/5";
            process_bar.style.flexBasis = "80%";

            // 改變背景顏色
            question_frame.style.backgroundImage = "linear-gradient(180deg,#e3ff72,#fff270)";

            //新增答案按鈕
            op_1.innerText = "無敵星星";
            op_2.innerText = "蘑菇";
            op_3.innerText = "火花";
            op_4.innerText = "超級熱狗";

            op_4.setAttribute("onclick", "AnswerRight()");

            op_1.setAttribute("onclick", "AnswerWrong()");
            op_2.setAttribute("onclick", "AnswerWrong()");
            op_3.setAttribute("onclick", "AnswerWrong()");

            break;

        case 5:
            // 新增題目
            document.getElementById("question").innerText = "可以讓瑪利歐飛翔的套裝是什麼?";

            // 設置進度條
            process_text.innerText = "5/5";
            process_bar.style.flexBasis = "100%";

            // 改變背景顏色
            question_frame.style.backgroundImage = "linear-gradient(180deg,#f0aeff,#ffb2f1)";

            //新增答案按鈕
            op_1.innerText = "超級套裝";
            op_2.innerText = "浣熊套裝";
            op_3.innerText = "海狸套裝";
            op_4.innerText = "蝙蝠套裝";

            op_2.setAttribute("onclick", "AnswerRight()");

            op_1.setAttribute("onclick", "AnswerWrong()");
            op_3.setAttribute("onclick", "AnswerWrong()");
            op_4.setAttribute("onclick", "AnswerWrong()");

            break;

        default:

            question.innerHTML = `Your Mario score is: <br><br> <span class="h1">${score}</span>`;

            // 顯示圖片
            if (window.innerWidth > 630) {
                resultImageArea.style.display = "block";
            }

            //隱藏next按鈕
            document.getElementById("next").style.display = "none";

            document.getElementById("answer_frame").innerHTML =
                "<ul class='quiz_choose_level'>" +
                "<li><button onclick = 'quiz_initial(false)'>重新開始</button></li>" +
                "<li><button onclick = 'quiz_initial(true)'>挑戰困難版</button></li>" +
                "</ul>";

            // 隱藏進度條
            process.style.display = "none";

            break;

    }

    // 隱藏next按鈕
    if (quizNumber <= 5) {
        document.getElementById("next").style.display = "none";
    }

}

function quiz_hard() {

    // 出現答案選單
    document.getElementById("answer_options").style.display = "flex";
    document.getElementById("question").style.color = "black";

    // 顯示進度條
    process.style.display = "flex";

    switch (quizNumber) {
        case 1:
            // 新增題目
            document.getElementById("question").innerText = "瑪利歐初期是穿什麼顏色的吊帶褲?";

            // 設置進度條
            process_text.innerText = "1/5";
            process_bar.style.flexBasis = "20%";

            //新增答案按鈕
            op_1.innerText = "藍色";
            op_2.innerText = "黃色";
            op_3.innerText = "紅色";
            op_4.innerText = "紫色";

            op_3.setAttribute("onclick", "AnswerRight()");

            op_1.setAttribute("onclick", "AnswerWrong()");
            op_2.setAttribute("onclick", "AnswerWrong()");
            op_4.setAttribute("onclick", "AnswerWrong()");

            break;

        case 2:
            // 新增題目
            document.getElementById("question").innerText = "瑪利歐第一次出現在?";

            // 設置進度條
            process_text.innerText = "2/5";
            process_bar.style.flexBasis = "40%";

            // 改變背景顏色
            question_frame.style.backgroundImage = "linear-gradient(180deg,#b4e3ff,#f1c5ff)";

            //新增答案按鈕
            op_1.innerText = "大力水手";
            op_2.innerText = "薩爾達傳說";
            op_3.innerText = "大金剛";
            op_4.innerText = "洛克人";

            op_3.setAttribute("onclick", "AnswerRight()");

            op_1.setAttribute("onclick", "AnswerWrong()");
            op_2.setAttribute("onclick", "AnswerWrong()");
            op_4.setAttribute("onclick", "AnswerWrong()");

            break;

        case 3:
            // 新增題目
            document.getElementById("question").innerText = "瑪利歐在遊戲中最初的職業是?";

            // 設置進度條
            process_text.innerText = "3/5";
            process_bar.style.flexBasis = "60%";

            // 改變背景顏色
            question_frame.style.backgroundImage = "linear-gradient(180deg, #b6f8ff, #bdffc1)";

            //新增答案按鈕
            op_1.innerText = "木匠";
            op_2.innerText = "水管工人";
            op_3.innerText = "賣蘑菇的";
            op_4.innerText = "養烏龜的";

            op_1.setAttribute("onclick", "AnswerRight()");

            op_2.setAttribute("onclick", "AnswerWrong()");
            op_3.setAttribute("onclick", "AnswerWrong()");
            op_4.setAttribute("onclick", "AnswerWrong()");

            break;

        case 4:
            // 新增題目
            document.getElementById("question").innerText = "瑪利歐的星座是?";

            // 設置進度條
            process_text.innerText = "4/5";
            process_bar.style.flexBasis = "80%";

            // 改變背景顏色
            question_frame.style.backgroundImage = "linear-gradient(180deg,#e3ff72,#fff270)";

            //新增答案按鈕
            op_1.innerText = "巨蟹";
            op_2.innerText = "水瓶";
            op_3.innerText = "獅子";
            op_4.innerText = "處女";

            op_4.setAttribute("onclick", "AnswerRight()");

            op_1.setAttribute("onclick", "AnswerWrong()");
            op_2.setAttribute("onclick", "AnswerWrong()");
            op_3.setAttribute("onclick", "AnswerWrong()");

            break;

        case 5:
            // 新增題目
            document.getElementById("question").innerText = "瑪利歐為什麼要留鬍子，戴帽子?";

            // 設置進度條
            process_text.innerText = "5/5";
            process_bar.style.flexBasis = "100%";

            // 改變背景顏色
            question_frame.style.backgroundImage = "linear-gradient(180deg,#f0aeff,#ffb2f1)";

            //新增答案按鈕
            op_1.innerText = "符合角色定位";
            op_2.innerText = "當時的技術限制";
            op_3.innerText = "員工投票";
            op_4.innerText = "致敬遊戲設計師";

            op_2.setAttribute("onclick", "AnswerRight()");

            op_1.setAttribute("onclick", "AnswerWrong()");
            op_3.setAttribute("onclick", "AnswerWrong()");
            op_4.setAttribute("onclick", "AnswerWrong()");

            break;

        default:

            question.innerHTML = `Your Mario score is: <br><br> <span class="h1">${score}</span>`;

            document.getElementById("answer_frame").innerHTML =
                "<ul class='quiz_choose_level'>" +
                "<li><button onclick = 'quiz_initial(true)'>重新開始</button></li>" +
                "<li><button onclick = 'quiz_initial(false)'>挑戰簡單版</button></li>" +
                "</ul>";

            // 隱藏進度條
            process.style.display = "none";

            // 顯示圖片
            if (window.innerWidth > 630) {
                resultImageArea.style.display = "block";
            }

            break;

    }

    // 隱藏next按鈕
    if (quizNumber <= 5) {
        document.getElementById("next").style.display = "none";
    }

}

function AnswerRight() {
    // console.log("good");
    score += 20;
    quizNumber++;
    // console.log(score);

    // 出現答對了畫面
    document.getElementById("question").innerText = "You’re right!";
    document.getElementById("question").style.color = "green";

    // 隱藏答案選單
    document.getElementById("answer_options").style.display = "none";

    // 出現"下一題"按鈕
    document.getElementById("next").style.display = "block";

    // 隱藏進度條
    process.style.display = "none";
}

function AnswerWrong() {
    quizNumber++;

    // 出現答錯了畫面
    document.getElementById("question").innerText = "Oops!";
    document.getElementById("question").style.color = "red";

    // 出現"下一題"按鈕
    document.getElementById("next").style.display = "block";

    // 隱藏答案選單
    document.getElementById("answer_options").style.display = "none";

    // 隱藏進度條
    process.style.display = "none";
}
