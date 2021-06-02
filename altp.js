let time = 30;
let point = 0;
let corectSound = new Audio("./sound/correct.mp3");
let startgameSound = new Audio("./sound/startgame.mp3");
let endgameSound = new Audio("./sound/endgame.mp3");

function timeDecrease() {
    time--;
    document.getElementById(`time`).innerHTML = `time ${time}`;
    return time
}

let timeGo;
const question = [
    {
        question: ' Từ nào sau đây miêu tả âm thanh?',
        answer: [
            'cục mịch',
            'cục tác',
            'cục súc',
            'cục cằn'
        ],
        correct: 1
    },
    {
        question: 'Thính được làm từ gì?',
        answer: [
            'Thịt',
            'Gạo',
            'Củ cải',
            'Mía'
        ],
        correct: 1
    },
    {
        question: 'Đâu là dụng cụ lao động?',
        answer: [
            'Đũa',
            'Thìa',
            'Gạo',
            'Thuổng'
        ],
        correct: 3
    },
    {
        question: 'Đâu là một thuật ngữ của ngành công nghệ thông tin?',
        answer: [
            'Tên Làng',
            'Tên Tỉnh',
            'Tên Miền',
            'Tên Phố'
        ],
        correct: 2
    },
    {
        question: 'Đâu là tên của một loại bánh ở Huế?',
        answer: [
            'Khoái',
            'Thích',
            'Vui',
            'Sướng'
        ],
        correct: 0
    }, {
        question: 'Bộ phim "Chị Dậu" được chuyển thể từ tác phẩm nào?',
        answer: [
            'Người mẹ cầm súng',
            'Vợ chồng A Phủ',
            'Tắt đèn',
            'Tuổi thơ dữ dội'
        ],
        correct: 2
    },
    {
        question: 'Cho tới thời điểm hiện nay, vườn quốc gia nào của nước ta chưa được công nhận là Vườn Di sản ASEAN?',
        answer: [
            'Vườn quốc gia Kon Ka Kinh',
            'Vườn quốc gia Tam Đảo',
            'Vườn quốc gia Chư Mom Ray',
            ' Vườn quốc gia Bái Tử Long'
        ],
        correct: 1
    }
]
let i = 0

function show() {

    document.getElementById("question").innerHTML = question[i].question
    document.getElementById('answer0').innerHTML = question[i].answer[0]
    document.getElementById('answer1').innerHTML = question[i].answer[1]
    document.getElementById('answer2').innerHTML = question[i].answer[2]
    document.getElementById('answer3').innerHTML = question[i].answer[3]
    document.getElementById(`time`).innerHTML = `Time: ${time}`;
    document.getElementById('diem').innerHTML = 'Score:' + ' ' +  point ;

}

show()

// setInterval(timeDecrease, 1000)

function check(answer) {
    if (answer === question[i].correct) {
        time = 30;
        point += 1000;

        i++
        if (i < 7) {
            corectSound.play()
            show()
        } else {
            alert('CHÚC MỪNG BẠN ĐÃ TRỞ THÀNH NHÀ TRIỆU PHÚ VỚI TỔNG GIÁ TRỊ : ' + point + 'USD');
            document.getElementById('start').style.display = '';
            document.getElementById('hide').style.display ="none";
            clearInterval(timeGo)
            time = 30;
            i = 0;
            point = 0;
            show();
        }
        document.getElementById('diem').innerHTML = 'Score:' + ' ' +  point ;
    } else {
        // point -= 500;
        document.getElementById('diem').innerHTML = 'Score:' + ' ' +  point ;
        document.getElementById('game').style.display = "none";
        document.getElementById('time').style.display = "none";
        endgameSound.play();
        alert('rất tiếc bạn đã trả lời sai và chúng ta dừng cuộc chơi tại đây' + point + 'USD là phần thưởng của bạn')
        document.getElementById('start').style.display = '';
        document.getElementById('hide').style.display ="none";
        clearInterval(timeGo)
        time = 30;
        i = 0;
        point = 0;
        show();
        return point
    }

}

function checker() {
    if (time === 0) {
        clearInterval(timeGo)
        time = 30
        i = 0
        point = 0
        alert('rất tiếc bạn đã không có câu trả lời và chúng ta dừng cuộc chơi tại đây');
        document.getElementById('start').style.display = '';
        document.getElementById('hide').style.display ="none";
        document.getElementById('diem').innerHTML = 'Score:' + ' ' +  point ;
        show();
    }
}

setInterval(checker, 1000);
function hideGame(){

        let x =document.getElementById('hide');
        document.getElementById("start").style.display =" none";
    document.getElementById('game').style.display = "";
    document.getElementById('time').style.display = "";
        if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
    timeGo = setInterval(timeDecrease, 1000)
    startgameSound.play()

}