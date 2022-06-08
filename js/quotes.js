const quotes = [
  {
    quote: "We can draw lessons from the past, but we cannot live in it.",
    author: "Lyndon B. Johnson",
  },
  {
    quote: "Regret for wasted time is more wasted time.",
    author: "Mason Cooley",
  },
  {
    quote: "No great genius has ever existed without some touch of madness.",
    author: "Aristotle",
  },
  {
    quote: "I'm as proud of what we don't do as I am of what we do.",
    author: "Steve Jobs",
  },
  {
    quote: "Frugality without creativity is deprivation.",
    author: "Amy Dacyczyn",
  },
  {
    quote: "인생이란 결코 공평하지 않다. 이 사실에 익숙해져라.",
    author: "빌 게이츠",
  },
  {
    quote: "실패란, 성공이란 질로를 알려주는 나침반이다.",
    author: "데이스 윌트리",
  },
  {
    quote: "서로에게 모든 것을 줄 때 평등한 거래가 된다. 각자가 모든 것을 얻게 된다.",
    author: "로이스 맥마스터 부욜",
  },
  {
    quote: "어떤 것이 당신에게 계획대로 되지 않는다고 해서 그것이 불필요한 것은 아니다.",
    author: "토마스 A 에디슨",
  },
  {
    quote: "게으름은 즐겁지만 괴로운 상태다. 우리는 행복해지기 위해서 무엇인가 하고 있어야 한다.",
    author: "마하트마 간디",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;