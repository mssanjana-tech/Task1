const questions=[
{
question:"HTML stands for?",
options:["Hyper Text Markup Language","High Text Machine Language"],
answer:"Hyper Text Markup Language"
},
{
question:"CSS is used for?",
options:["Styling","Database"],
answer:"Styling"
},
{
question:"JavaScript adds?",
options:["Interactivity","Hardware"],
answer:"Interactivity"
}
];

let current=0;
let score=0;

function startQuiz(){
document.getElementById('startScreen').classList.add('hidden');
document.getElementById('quizScreen').classList.remove('hidden');
loadQuestion();
}

function loadQuestion(){
let q=questions[current];
document.getElementById('qNo').innerText='Question '+(current+1);
document.getElementById('question').innerText=q.question;
let options=document.getElementById('options');
options.innerHTML='';

document.getElementById('feedback').innerText='';
document.getElementById('nextBtn').classList.add('hidden');

q.options.forEach(option=>{
let btn=document.createElement('button');
btn.innerText=option;
btn.className='option';
btn.onclick=function(){checkAnswer(option)};
options.appendChild(btn);
});
}

function checkAnswer(choice){
if(choice===questions[current].answer){
document.getElementById('feedback').innerText='Correct!';
score++;
}else{
document.getElementById('feedback').innerText='Wrong!';
}

document.getElementById('nextBtn').classList.remove('hidden');
}

function nextQuestion(){
current++;
if(current<questions.length){
loadQuestion();
}else{
showResult();
}
}

function showResult(){
document.getElementById('quizScreen').classList.add('hidden');
document.getElementById('resultScreen').classList.remove('hidden');
document.getElementById('result').innerText='Score: '+score+'/'+questions.length;
}

function restartQuiz(){
current=0;
score=0;
document.getElementById('resultScreen').classList.add('hidden');
document.getElementById('startScreen').classList.remove('hidden');
}
