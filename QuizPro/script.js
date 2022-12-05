const correctAns = ['A', 'B', 'A', 'A'];
const form = document.querySelector('.quiz-form');
const result = document.querySelector('.result');

form.addEventListener('submit', (e)=>{
    e.preventDefault();

    let score = 0;

    const userAns = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];

    //check answers
    userAns.forEach((answer, index)=>{
        if(answer === correctAns[index]){
            score += 25;
        }
    });

    //display answer
    scrollTo(0, 0);
    // result.querySelector('span').textContent = `${score} %`;
    result.classList.remove('d-none');
    
    //score animation
    let i=0;
    const timer = setInterval(()=>{
        result.querySelector('span').textContent = `${i} %`;
        if(i === score){
                clearInterval(timer);
        } 
        else{
                i++;
        }
    }, 10);
});