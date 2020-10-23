let url = "https://opentdb.com/api.php?amount=5&category=21&difficulty=easy&type=multiple"
fetch(url)
    .then(function (res) {
        return res.json()
    })
    .then(function (res) {
        let point=0
        let answer = ""
        let data = res.results
        let isOver = false
        document.getElementById("next").addEventListener("click", function () {
            data.shift()
            loadQuiz(data[0])
            document.getElementById("next").classList.add("hide")
        })
        function loadQuiz(quiz) {
            if(!quiz){
                alert("Diem cua ban la"+point)
                return
            }
            else{
            isOver = false
            document.getElementById("question").innerHTML = quiz.question
            let choice = []
            answer = quiz.correct_answer
            console.log(answer)
            choice.push(quiz.correct_answer)
            choice.push(...quiz.incorrect_answers)
            choice.sort(function () {
                return 0.5 - Math.random()
            })
            let alphabets = ['A', 'B', 'C', 'D']
            for (let i = 0; i < alphabets.length; i++) {
                document.getElementById(`choice${alphabets[i]}`).innerHTML = choice[i]
                document.getElementById(`choice${alphabets[i]}`).addEventListener("click", checkAns)
                document.getElementById(`choice${alphabets[i]}`).parentNode.firstElementChild.classList.remove("fail")
                document.getElementById(`choice${alphabets[i]}`).parentNode.firstElementChild.classList.remove("success")
            }
            }
        }
        function checkAns() {
            if (isOver == false) {
                if (answer == this.innerHTML) {
                    this.parentNode.firstElementChild.classList.add("success")
                     point=point+10
                     alert ("Success")
                    
                } else {
                    this.parentNode.firstElementChild.classList.add("fail")
                    alert ("Fail")
                }
                isOver = true
                document.getElementById("next").classList.remove("hide")
            }
            console.log(point)
            document.getElementById("point").innerHTML="diem cua ban la "+ point
        }
        loadQuiz(data[0])
    })
document.getElementById("reset").addEventListener("click",()=>{
    window.location.assign("http://127.0.0.1:5500/Bai%203/bai3.html")
})