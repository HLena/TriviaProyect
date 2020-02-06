let QuestionsA = [
    new Question("¿Cuál es el río más largo del mundo?", ["Rio Nilo", "Río Missisipi", "Rio Amazonas"], "Rio Amazonas"),
    new Question("¿Cuál es la montaña más alta del mundo?", ["Monte Everest", "Huascarán", "Aconcagua"], "Monte Everest"),
    new Question("¿Cuál es el desierto más grande del mundo?", ["Atacama", "Sahara", "Patagónico"], "Sahara")
];
let QuestionsB = [
    new Question("¿Cuál fue el imperio más grande originario de sudamérica?", ["Inca", "Mexicano", "Español"], "Inca"),
    new Question("¿Quién invento la primera computadora?", ["Steve Jobs", "Korand Zuse", "Bill Gates"], "Korand Zuse"),
    new Question("¿Quién invento la electricidad?", ["Benjamin Franklin", "Michael Faraday", "Nikola Tesla"], "Nikola Tesla")
];

function Question(question, options, answer) {
    this.question_ = question;
    this.options_ = options;
    this.answer_ = answer;
}


let questions = [];
let indexQuestion = 0;
let correctAnswers = 0;
let incorrectAnswers = 0;



function StartGame() {
    let name_user = document.getElementById("name-input").value;
    let wellcome_msm = document.getElementById("your_name");
    wellcome_msm.innerHTML = name_user;
    document.getElementById("conteiner-index").style.display = 'none';
    document.getElementById("conteiner-wellcome").style.display = 'inline-block';


}

function selectAnOption(type_question) {
    indexQuestion = 0;
    correctAnswers = 0;
    incorrectAnswers = 0;
    document.getElementById("conteiner-result").style.display = "none";
    if (type_question == 'a') {
        questions = QuestionsA;
    } else {
        questions = QuestionsB;
    }
    document.getElementById("conteiner-wellcome").style.display = 'none';
    document.getElementById("conteiner-questions").style.display = 'inline-block';
    ShowQuestions();
}

function ShowQuestions() {
    if (indexQuestion >= questions.length) {
        ShowResult();
    } else {
        let CurrentQuestion = questions[indexQuestion];
        document.getElementById("question").innerHTML = CurrentQuestion.question_;
        let options = CurrentQuestion.options_;
        for (let i = 0; i < options.length(); i++) {
            document.getElementById("btn" + i).innerHTML = options[i];
            checkAnswer("btn" + i, options[i], CurrentQuestion.answer_);
        }
        // document.getElementById("btn0").innerHTML = options[0];
        //     checkAnswer("btn0",options[0],CurrentQuestion.answer_);

        // document.getElementById("btn1").innerHTML = options[1];
        //     checkAnswer("btn1",options[1],CurrentQuestion.answer_);

        // document.getElementById("btn2").innerHTML = options[2];
        //     checkAnswer("btn2",options[2],CurrentQuestion.answer_);        
    }
}

function checkAnswer(id, answ, correct_answ) {
    let button = document.getElementById(id);
    button.onclick = function () {
        if (answ == correct_answ) {
            correctAnswers++;
        }
        else {
            incorrectAnswers++;
        }
        indexQuestion++;
        ShowQuestions();
    }
}

function ShowResult() {
    document.getElementById("conteiner-questions").style.display = 'none';
    document.getElementById("conteiner-result").style.display = 'inline-block';
    let correct = document.getElementById("score1");
    let incorrect = document.getElementById("score2");
    correct.innerHTML = correctAnswers;
    incorrect.innerHTML = incorrectAnswers;
    document.getElementById("result-div1").style.display = "inline-block";
    document.getElementById("result-div2").style.display = "none";

}

function PlayAgain(option) {
    if (option == "si") {
        document.getElementById("result-div2").style.display = "inline-block";
        document.getElementById("result-div1").style.display = "none";
    } else {
        document.getElementById("conteiner-index").style.display = "inline-block";
        document.getElementById("conteiner-result").style.display = "none";
    }
}





