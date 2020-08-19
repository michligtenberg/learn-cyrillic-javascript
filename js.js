const start = document.getElementById("start");
const quiz = document.getElementById("quiz");
const question = document.getElementById("question");
const qImg = document.getElementById("qImg");
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const counter = document.getElementById("counter");
const timeGauge = document.getElementById("timeGauge");
const progress = document.getElementById("progress");
const scoreDiv = document.getElementById("scoreContainer");

let questions = [
    {
        question : "А",
        imgSrc : "img/a.png",
        choiceA : "A",
        choiceB : "D",
        choiceC : "S",
        correct : "A"
    },{
        question : "Б",
        imgSrc : "img/b.png",
        choiceA : "B",
        choiceB : "V",
        choiceC : "y",
        correct : "A"
    },{
        question : "В",
        imgSrc : "img/v.png",
        choiceA : "B",
        choiceB : "U",
        choiceC : "V",
        correct : "C"
      },{
          question : "Г",
          imgSrc : "img/g.png",
          choiceA : "R",
          choiceB : "L",
          choiceC : "G",
          correct : "C"
        },{
            question : "Д",
            imgSrc : "img/d.png",
            choiceA : "A",
            choiceB : "D",
            choiceC : "U",
            correct : "B"
        },{
            question : "Е",
            imgSrc : "img/e.png",
            choiceA : "A",
            choiceB : "H",
            choiceC : "E",
            correct : "C"
          },{
              question : "Ё",
              imgSrc : "img/gekkeE.png",
              choiceA : "J",
              choiceB : "E",
              choiceC : "Ë",
              correct : "C"
            },{
                question : "Ж",
                imgSrc : "img/gekkeX.png",
                choiceA : "X",
                choiceB : "Ž",
                choiceC : "ks",
                correct : "B"
            },{
                question : "З",
                imgSrc : "img/z.png",
                choiceA : "S",
                choiceB : "E",
                choiceC : "Z",
                correct : "C"
              },{
                  question : "И",
                  imgSrc : "img/i.png",
                  choiceA : "M",
                  choiceB : "N",
                  choiceC : "I",
                  correct : "C"
                },{
                    question : "Й",
                    imgSrc : "img/j.png",
                    choiceA : "N",
                    choiceB : "J",
                    choiceC : "M",
                    correct : "B"
                },{
                    question : "К",
                    imgSrc : "img/k.png",
                    choiceA : "T",
                    choiceB : "C",
                    choiceC : "K",
                    correct : "C"
                  },{
                      question : "Л",
                      imgSrc : "img/l.png",
                      choiceA : "U",
                      choiceB : "N",
                      choiceC : "L",
                      correct : "C"
                    },{
                        question : "М",
                        imgSrc : "img/m.png",
                        choiceA : "H",
                        choiceB : "M",
                        choiceC : "N",
                        correct : "B"
                    },{
                        question : "Н",
                        imgSrc : "img/n.png",
                        choiceA : "M",
                        choiceB : "H",
                        choiceC : "N",
                        correct : "C"
                      },{
                          question : "О",
                          imgSrc : "img/o.png",
                          choiceA : "F",
                          choiceB : "Z",
                          choiceC : "O",
                          correct : "C"
                        },{
                            question : "П",
                            imgSrc : "img/n.png",
                            choiceA : "U",
                            choiceB : "P",
                            choiceC : "N",
                            correct : "B"
                        },{
                            question : "Р",
                            imgSrc : "img/r.png",
                            choiceA : "ph",
                            choiceB : "P",
                            choiceC : "R",
                            correct : "C"
                          },{
                              question : "С",
                              imgSrc : "img/s.png",
                              choiceA : "K",
                              choiceB : "C",
                              choiceC : "S",
                              correct : "C"
                            },{
                                question : "Т",
                                imgSrc : "img/t.png",
                                choiceA : "th",
                                choiceB : "T",
                                choiceC : "Y",
                                correct : "B"
                            },{
                                question : "У",
                                imgSrc : "img/u.png",
                                choiceA : "R",
                                choiceB : "Y",
                                choiceC : "U",
                                correct : "C"
                              },{
                                  question : "Ф",
                                  imgSrc : "img/f.png",
                                  choiceA : "zh",
                                  choiceB : "O",
                                  choiceC : "F",
                                  correct : "C"
                                },{
                                    question : "Х",
                                    imgSrc : "img/h.png",
                                    choiceA : "sk",
                                    choiceB : "H",
                                    choiceC : "X",
                                    correct : "B"
                                },{
                                    question : "Ц",
                                    imgSrc : "img/c.png",
                                    choiceA : "Us",
                                    choiceB : "U",
                                    choiceC : "C",
                                    correct : "C"
                                  },{
                                      question : "Ч",
                                      imgSrc : "img/gekkeC.png",
                                      choiceA : "U",
                                      choiceB : "C",
                                      choiceC : "Č",
                                      correct : "C"
                                    },{
                                        question : "Ш",
                                        imgSrc : "img/w.png",
                                        choiceA : "W",
                                        choiceB : "Š",
                                        choiceC : "Zh",
                                        correct : "B"
                                    },{
                                        question : "Щ",
                                        imgSrc : "img/gekkeW.png",
                                        choiceA : "Zh",
                                        choiceB : "W",
                                        choiceC : "Ŝ",
                                        correct : "C"
                                      },{
                                          question : "Ъ",
                                          imgSrc : "img/bbop.png",
                                          choiceA : "V",
                                          choiceB : "B",
                                          choiceC : "ʺ",
                                          correct : "C"
                                        },{
                                            question : "Ы",
                                            imgSrc : "img/bl.png",
                                            choiceA : "zy",
                                            choiceB : "bl",
                                            choiceC : "Y",
                                            correct : "C"
                                          },{
                                              question : "Ь",
                                              imgSrc : "img/kleineb.png",
                                              choiceA : "bi",
                                              choiceB : "B",
                                              choiceC : "ʹ",
                                              correct : "C"
                                            },{
                                                question : "Э",
                                                imgSrc : "img/letter3.png",
                                                choiceA : "Ez",
                                                choiceB : "Z",
                                                choiceC : "È",
                                                correct : "C"
                                              },{
                                                  question : "Ю",
                                                  imgSrc : "img/io.png",
                                                  choiceA : "IO",
                                                  choiceB : "Ja",
                                                  choiceC : "Ju",
                                                  correct : "C"
                                                },{
                                                    question : "Я",
                                                    imgSrc : "img/omgedraaideR.png",
                                                    choiceA : "R",
                                                    choiceB : "Ju",
                                                    choiceC : "Ja",
                                                    correct : "C"
    }
];


const lastQuestion = questions.length - 1;
let runningQuestion = 0;
let count = 0;
const questionTime = 10;
const gaugeWidth = 150;
const gaugeUnit = gaugeWidth / questionTime;
let TIMER;
let score = 0;

function renderQuestion(){
    let q = questions[runningQuestion];

    question.innerHTML = "<p>"+ q.question +"</p>";
    qImg.innerHTML = "<img src="+ q.imgSrc +">";
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
}

start.addEventListener("click",startQuiz);

function startQuiz(){
    start.style.display = "none";
    renderQuestion();
    quiz.style.display = "block";
    renderProgress();
    renderCounter();
    TIMER = setInterval(renderCounter,1000);
}

function renderProgress(){
    for(let qIndex = 0; qIndex <= lastQuestion; qIndex++){
        progress.innerHTML += "<div class='prog' id="+ qIndex +"></div>";
    }
}

function renderCounter(){
    if(count <= questionTime){
        counter.innerHTML = count;
        timeGauge.style.width = count * gaugeUnit + "px";
        count++
    }else{
        count = 0;
        answerIsWrong();
        if(runningQuestion < lastQuestion){
            runningQuestion++;
            renderQuestion();
        }else{
            clearInterval(TIMER);
            scoreRender();
        }
    }
}

function checkAnswer(answer){
    if( answer == questions[runningQuestion].correct){
        score++;
        answerIsCorrect();
    }else{
        answerIsWrong();
    }
    count = 0;
    if(runningQuestion < lastQuestion){
        runningQuestion++;
        renderQuestion();
    }else{
        clearInterval(TIMER);
        scoreRender();
    }
}

function answerIsCorrect(){
    document.getElementById(runningQuestion).style.backgroundColor = "#0f0";
}

function answerIsWrong(){
    document.getElementById(runningQuestion).style.backgroundColor = "#f00";
}

function scoreRender(){
    scoreDiv.style.display = "block";
    const scorePerCent = Math.round(100 * score/questions.length);
    let img = (scorePerCent >= 80) ? "img/5.png" :
              (scorePerCent >= 60) ? "img/4.png" :
              (scorePerCent >= 40) ? "img/3.png" :
              (scorePerCent >= 20) ? "img/2.png" :
              "img/1.png";

    scoreDiv.innerHTML = "<img src="+ img +">";
    scoreDiv.innerHTML += "<p>"+ scorePerCent +"%</p>";
}
