var quizNumber;
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
  x.style.setProperty(
    "background-image",
    "linear-gradient(180deg,#ffe847,#ffce55)"
  );

  // 顯示進度條
  process.style.display = "flex";

  // 隱藏結果畫面的圖片
  resultImageArea.style.display = "none";

  // 洗掉原本的選項，新增ul>四個li框架
  // document.getElementById("answer_frame").innerHTML = "<ul id='answer_options' class = 'quiz_choose_level' style:'display:none;'></ul>"
  document.getElementById("answer_frame").innerHTML =
    "<ul id='answer_options' class = 'quiz_choose_level'></ul>";
  document.getElementById(
    "answer_options"
  ).innerHTML = `<li><button id = 'op1'></button></li><li><button id = 'op2'></button></li><li><button id = 'op3'></button></li><li><button id = 'op4'></button></li>`;

  //建next button框架，預設設為隱藏
  var next = document.createElement("button");
  next.innerText = "next";
  next.setAttribute("class", "quiz_next_btn");
  next.setAttribute("style", "display:none;");
  next.setAttribute("style", "position: relative;");
  next.setAttribute("style", "z-index: 5;");
  next.setAttribute("id", "next");
  next.setAttribute("onclick", level == true ? "quiz_hard()" : "quiz_easy()");
  document.querySelector("#answer_frame").appendChild(next);

  // console.log(hard);
  hard == true ? quiz_hard() : quiz_easy();
}

function quiz_easy() {
  // 出現答案選單
  document.getElementById("answer_options").style.display = "flex";
  document.getElementById("question").style.color = "black";

  // 顯示進度條
  process.style.display = "flex";

  // 設置進度條
  process_text.innerText = `${quizNumber}/5`;
  process_bar.style.flexBasis = `${(quizNumber / 5) * 100}%`;

  switch (quizNumber) {
    case 1:
      // 新增題目、新增答案按鈕
      setQuiz("耀西是什麼生物?", ["恐龍", "蜥蜴", "烏龜", "壁虎"]);

      setOptionAction(3);
      break;

    case 2:
      // 新增題目、新增答案按鈕
      setQuiz("路易吉是瑪利歐的?", ["爸爸", "老闆", "兄弟", "同事"]);

      // 改變背景顏色
      question_frame.style.backgroundImage =
        "linear-gradient(180deg,#b4e3ff,#f1c5ff)";

      setOptionAction(3);
      break;

    case 3:
      // 新增題目、新增答案按鈕
      setQuiz("瑪利歐是用哪裡撞磚塊的?", ["拳頭", "頭頂", "肚皮", "氣功"]);

      // 改變背景顏色
      question_frame.style.backgroundImage =
        "linear-gradient(180deg, #b6f8ff, #bdffc1)";

      setOptionAction(1);
      break;

    case 4:
      // 新增題目、新增答案按鈕
      setQuiz("什麼道具不能讓瑪利歐變強?", [
        "無敵星星",
        "蘑菇",
        "火花",
        "超級熱狗",
      ]);

      // 改變背景顏色
      question_frame.style.backgroundImage =
        "linear-gradient(180deg,#e3ff72,#fff270)";

      setOptionAction(4);
      break;

    case 5:
      // 新增題目、新增答案按鈕
      setQuiz("可以讓瑪利歐飛翔的套裝是什麼?", [
        "超級套裝",
        "浣熊套裝",
        "海狸套裝",
        "蝙蝠套裝",
      ]);

      // 改變背景顏色
      question_frame.style.backgroundImage =
        "linear-gradient(180deg,#f0aeff,#ffb2f1)";

      setOptionAction(2);
      break;

    default:
      showResult(false);

      //   document.getElementById("answer_frame").innerHTML =
      //     "<ul class='quiz_choose_level'>" +
      //     "<li><button onclick = 'quiz_initial(false)'>重新開始</button></li>" +
      //     "<li><button onclick = 'quiz_initial(true)'>挑戰困難版</button></li>" +
      //     "</ul>";

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

  // 設置進度條
  process_text.innerText = `${quizNumber}/5`;
  process_bar.style.flexBasis = `${(quizNumber / 5) * 100}%`;

  switch (quizNumber) {
    case 1:
      // 新增題目、新增答案按鈕
      setQuiz("瑪利歐初期是穿什麼顏色的吊帶褲?", [
        "藍色",
        "黃色",
        "紅色",
        "紫色",
      ]);

      setOptionAction(3);

      break;

    case 2:
      // 新增題目、新增答案按鈕
      setQuiz("瑪利歐第一次出現在?", [
        "大力水手",
        "薩爾達傳說",
        "大金剛",
        "洛克人",
      ]);

      // 改變背景顏色
      question_frame.style.backgroundImage =
        "linear-gradient(180deg,#b4e3ff,#f1c5ff)";

      setOptionAction(3);

      break;

    case 3:
      // 新增題目、新增答案按鈕
      setQuiz("瑪利歐在遊戲中最初的職業是?", [
        "木匠",
        "水管工人",
        "賣蘑菇的",
        "養烏龜的",
      ]);

      // 改變背景顏色
      question_frame.style.backgroundImage =
        "linear-gradient(180deg, #b6f8ff, #bdffc1)";

      setOptionAction(1);

      break;

    case 4:
      // 新增題目、新增答案按鈕
      setQuiz("瑪利歐的星座是?", ["巨蟹", "水瓶", "獅子", "處女"]);

      // 改變背景顏色
      question_frame.style.backgroundImage =
        "linear-gradient(180deg,#e3ff72,#fff270)";

      setOptionAction(4);

      break;

    case 5:
      // 新增題目、新增答案按鈕
      setQuiz("瑪利歐為什麼要留鬍子，戴帽子?", [
        "符合角色定位",
        "當時的技術限制",
        "員工投票",
        "致敬遊戲設計師",
      ]);

      // 改變背景顏色
      question_frame.style.backgroundImage =
        "linear-gradient(180deg,#f0aeff,#ffb2f1)";

      setOptionAction(2);
      break;

    default:
      showResult(true);
      break;
  }

  // 隱藏next按鈕
  if (quizNumber <= 5) {
    document.getElementById("next").style.display = "none";
  }
}

function AnswerRight() {
  score += 20;
  quizNumber++;

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

// 新增題目、新增答案按鈕
function setQuiz(title, options, correct) {
  document.getElementById("question").innerText = title;

  //新增答案按鈕
  options.forEach((value, key) => {
    document.getElementById(`op${key + 1}`).innerText = value;
  });
}

// 選項按鈕監聽事件
function setOptionAction(correct) {
  const opts = document.querySelectorAll("#answer_options>li>button");
  opts.forEach((button, index) => {
    if (index == correct - 1) {
      button.removeEventListener("click", AnswerWrong);
      button.addEventListener("click", AnswerRight);
    } else {
      button.removeEventListener("click", AnswerRight);
      button.addEventListener("click", AnswerWrong);
    }
  });
}

// 呈現結果
function showResult(isHard) {
  question.innerHTML = `Your Mario score is: <br><br> <span class="h1">${score}</span>`;

  // 顯示圖片
  if (window.innerWidth > 630) {
    resultImageArea.style.display = "block";
  }

  //隱藏next按鈕
  document.getElementById("next").style.display = "none";

  // 隱藏進度條
  process.style.display = "none";

  document.getElementById(
    "answer_frame"
  ).innerHTML = `<ul class='quiz_choose_level'>
  <li><button onclick = 'quiz_initial(${isHard})'>重新開始</button></li> 
  <li><button onclick = 'quiz_initial(${!isHard})'>挑戰${
    isHard ? "簡單" : "困難"
  }版</button></li>
  </ul>`;
}
