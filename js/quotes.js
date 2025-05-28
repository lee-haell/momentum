const message = [
    {
        quotes: "모른다는 말로 도망치는 사람과 모른다는 말로 다가가는 사람",
        author: "Pinterest"
    },
    {
        quotes: "죽은 것은 이미 정해진 일이기에 명랑하게 살아라",
        author: "Pinterest"
    },
    {
        quotes: "타협하지 않을 것, 또 흔들리지 말 것",
        author: "Pinterest"
    },
    {
        quotes: "이루고자 하는 목표를 생각할 것",
        author: "Pinterest"
    },
    {
        quotes: "조용히 반복하는 일이 결국 나를 키운다",
        author: "Pinterest"
    },
    {
        quotes: "자신과의 대화가 잘 통하는 사람은 차분하다",
        author: "Pinterest"
    },
    {
        quotes: "어떤 일이 생겨도 해야 할 일을 반복한다",
        author: "Pinterest"
    },
    {
        quotes: "인생이라는 수많은 장면은 내가 창조한다",
        author: "Pinterest"
    },
    {
        quotes: "지금부터 하나하나 내면에 쌓으면 된다",
        author: "Pinterest"
    },
    {
        quotes: "산다는것 그것은 치열한 전투이다",
        author: "Pinterest"
    }
]

const quote = document.getElementById("quotes");
const author = document.getElementById("author");

//Manth.random() > 0, 1 사이 숫자 랜덤(0.1872678193...(매번 바뀜)), * 변수 quotes의 개수, 10 = 랜덤한 숫자를 Math.floor로 뒷내림한 숫자
const todaysQuotes = message[Math.floor(Math.random() * message.length)]; 

quote.innerText = todaysQuotes.quotes;
author.innerText = todaysQuotes.author;

