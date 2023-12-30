const questions = [
    {
        question:"'समाजशास्त्र अन्य विज्ञानों की न तो दासी है और न ही स्वामिनी वरन् यह उसकी बहिन है।' यह कथन किस विद्वान का है?",
        answers: [
            { text: "स्पेन्सर", correct: false},
            { text: "मार्क्स", correct: false},
            { text: "वार्न्स एवं बीकर", correct: true},
            { text: "सोरोकिन", correct: false},
        ] 
    },

    {
        question:"धर्म, अर्थ, काम तथा मोक्ष क्या है?",
        answers: [
            { text: "पुरुषार्थ", correct: true},
            { text: "वर्ण           ", correct: false},
            { text: "जाति", correct: false},
            { text: "आश्रम", correct: false},
        ] 
    },

    {
        question:"किस समाजशास्त्री ने मानवशास्त्र एवं समाजशास्त्र को जुड़वां बहने माना है?",
        answers: [
            { text: "बेकर", correct: false},
            { text: "ऑगस्त काम्ते", correct: false},
            { text: "सोरोकिन", correct: false},
            { text: "क्रोबर", correct: true},
        ] 
    },

    {
        question:"'Modern Sociology' नामक पुस्तक के लेखक हैं-",
        answers: [
            { text: "ग्रीन", correct: false},
            { text: "बोगार्डस", correct: false},
            { text: "गोल्डनर", correct: true},
            { text: "समनर", correct: false},
        ] 
    },

    {
        question:"What is Sociology पुस्तक किसने लिखी है?",
        answers: [
            { text: "सोरोकिन", correct: false},
            { text: "वार्ड", correct: false},
            { text: "बॉटोमोर", correct: false},
            { text: "ऐलेक्स इंकलिस", correct: true},
        ] 
    },

    {
        question:"सामाजिक नियमों के संग्रह को कहते हैं-",
        answers: [
            { text: "संस्था", correct: true},
            { text: "मिश्रित", correct: false},
            { text: "समूह", correct: false},
            { text: "समाज ।", correct: false},
        ] 
    },

    {
        question:"ब्रिटिश शासन के दौरान भारत में जमींदारी व्यवस्था का आरंभ किसके द्वारा किया गया ?",
        answers: [
            { text: "लॉर्ड कार्नवालिस", correct: true},
            { text: "लॉर्ड लिन्टन", correct: false},
            { text: "महारानी विक्टोरिया", correct: false},
            { text: "लॉर्ड माउण्टबेटन", correct: false},
        ] 
    },

    {
        question:"संस्था के संबंध में कौन-सा कथन सही है?",
        answers: [
            { text: "संस्था अस्थायी होती है", correct: false},
            { text: "संस्था पीढ़ी-दर-पीढ़ी हस्तांतरित होती है", correct: true},
            { text: "प्रत्येक संस्था की संरचना होती है", correct: false},
            { text: "उपर्युक्त सभी", correct: false},
        ] 
    },

    {
        question:"जब कुछ व्यक्ति अपने उद्देश्यों को पूरा करने के लिए एक नियमबद्ध संगठन का निर्माण करते हैं तो वह संगठन कहलाता है-",
        answers: [
            { text: "समुदाय", correct: false},
            { text: "जनरीति           ", correct: false},
            { text: "संस्था", correct: false},
            { text: "समिति", correct: true},
        ] 
    },

    {
        question:"समाजशास्त्र के पिता या जनक हैं-",
        answers: [
            { text: "इमाइल दुर्खीम", correct: false},
            { text: "ऑगस्त काम्ते", correct: true},
            { text: "मैक्स वैबर", correct: false},
            { text: "पारसन्स", correct: false},
        ] 
    },

   
];


const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer)
    });
} 

function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct ==="true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "start quiz again";
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
})

startQuiz(); 