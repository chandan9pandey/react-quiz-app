import "./App.css";
import { useEffect, useMemo, useState } from "react";
import Start from "./components/Start";
import Timer from "./components/Timer";
import Trivia from "./components/Trivia";

function App() {
  const [username, setUsername] = useState(null);
  const [timeOut, setTimeOut] = useState(false);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [earned, setEarned] = useState("$ 0");

  const data = [
    {
      id: 1,
      question: "Rolex is a company that specializes in what type of product?",
      answers: [
        {
          text: "Phone",
          correct: false,
        },
        {
          text: "Watches",
          correct: true,
        },
        {
          text: "Food",
          correct: false,
        },
        {
          text: "Cosmetic",
          correct: false,
        },
      ],
    },
    {
      id: 2,
      question: "When did the website `Facebook` launch?",
      answers: [
        {
          text: "2004",
          correct: true,
        },
        {
          text: "2005",
          correct: false,
        },
        {
          text: "2006",
          correct: false,
        },
        {
          text: "2007",
          correct: false,
        },
      ],
    },
    {
      id: 3,
      question: "Who played the character of harry potter in movie?",
      answers: [
        {
          text: "Johnny Deep",
          correct: false,
        },
        {
          text: "Leonardo Di Caprio",
          correct: false,
        },
        {
          text: "Denzel Washington",
          correct: false,
        },
        {
          text: "Daniel Red Cliff",
          correct: true,
        },
      ],
    },
    {
      id: 4,
      question: "What is the full form of HTML ?",
      answers: [
        {
          text: "HyperText Makeup Language",
          correct: true,
        },
        {
          text: "HyperTest Makeup Language",
          correct: false,
        },
        {
          text: "HyperText Markup Language",
          correct: true,
        },
        {
          text: "HyperTest Making Language",
          correct: false,
        },
      ],
    },
    {
      id: 5,
      question: "With Which of these cards would you associate the phrase 'Aam Aadmi ka Adhikaar' ?",
      answers: [
        {
          text: "AADHAR Card",
          correct: true,
        },
        {
          text: "PAN Card",
          correct: false,
        },
        {
          text: "Voter Card",
          correct: false,
        },
        {
          text: "Ration Card",
          correct: false,
        },
      ],
    },
    {
      id: 6,
      question: "Which of these is not a feature of Facebook ?",
      answers: [
        {
          text: "Poke",
          correct: false,
        },
        {
          text: "Like",
          correct: false,
        },
        {
          text: "Retweet",
          correct: true,
        },
        {
          text: "Timeline",
          correct: false,
        },
      ],
    },
    {
      id: 7,
      question: "Which search engine has a button that says 'I'm feeling Lucky ?",
      answers: [
        {
          text: "Bing",
          correct: false,
        },
        {
          text: "Yahoo!",
          correct: false,
        },
        {
          text: "Google",
          correct: true,
        },
        {
          text: "Wikipedia",
          correct: false,
        },
      ],
    },
    {
      id: 8,
      question: "Poplin, Rubiya and flannel are types of what ?",
      answers: [
        {
          text: "Fabrics",
          correct: true,
        },
        {
          text: "Leather",
          correct: false,
        },
        {
          text: "Plastic",
          correct: false,
        },
        {
          text: "Rubber",
          correct: false,
        },
      ],
    },
    {
      id: 9,
      question: "On the bank of which of these rivers is a Union Territory located ?",
      answers: [
        {
          text: "Satluj",
          correct: false,
        },
        {
          text: "Yamuna",
          correct: true,
        },
        {
          text: "Shipra",
          correct: false,
        },
        {
          text: "Ganga",
          correct: false,
        },
      ],
    },
    {
      id: 10,
      question: "Which part of the eye is stored in eye banks for transplant ?",
      answers: [
        {
          text: "Iris",
          correct: false,
        },
        {
          text: "Pupils",
          correct: false,
        },
        {
          text: "Retina",
          correct: false,
        },
        {
          text: "Cornea",
          correct: true,
        },
      ],
    },
    {
      id: 11,
      question: "The leaves of which of these trees are the smallest ?",
      answers: [
        {
          text: "Babool",
          correct: true,
        },
        {
          text: "Neem",
          correct: false,
        },
        {
          text: "Peepal",
          correct: false,
        },
        {
          text: "Coconut",
          correct: false,
        },
      ],
    },
    {
      id: 12,
      question: "Who served as the backup cosmonaut for Rakesh Sharma on the Soyuz T-11 mission, which launched the first Indian into space ?",
      answers: [
        {
          text: "Nivedita Bhasin",
          correct: false,
        },
        {
          text: "Kamlesh Lulla",
          correct: false,
        },
        {
          text: "Trilochan Singh Brar",
          correct: false,
        },
        {
          text: "Ravish Malhotra",
          correct: true,
        },
      ],
    },
    {
      id: 13,
      question: "Where did Homi Jehangir Bhabha, the principal architect of India's nuclear energy program, die in a plane crash ?",
      answers: [
        {
          text: "Mont Blanc",
          correct: true,
        },
        {
          text: "Mont Rosa",
          correct: false,
        },
        {
          text: "Mont Ararat",
          correct: false,
        },
        {
          text: "Mont Elbrus",
          correct: false,
        },
      ],
    },
    {
      id: 14,
      question: "28 Aug 2013 marked the 50th anniversary of the historic 'I have a dream' speech of which leader ?",
      answers: [
        {
          text: "Kelucharan Mohapatra",
          correct: false,
        },
        {
          text: "Shambhu Maharaj",
          correct: false,
        },
        {
          text: "Uday Shankar",
          correct: true,
        },
        {
          text: "Lachhu Maharaj",
          correct: false,
        },
      ],
    },
    {
      id: 15,
      question: "In 2014, which athlete got upgraded to gold after Russia's Tatyana Kotovo was disqualified for doping at the 2005 World Athletics Final ?",
      answers: [
        {
          text: "K M Beenamol",
          correct: false,
        },
        {
          text: "Anuradha Biswal",
          correct: false,
        },
        {
          text: "Anju Bobby George",
          correct: true,
        },
        {
          text: "Neelam Jaswant Singh",
          correct: false,
        },
      ],
    },
  ];

  const moneyPyramid = useMemo(
    () =>
      [
        { id: 1, amount: "$ 100" },
        { id: 2, amount: "$ 200" },
        { id: 3, amount: "$ 300" },
        { id: 4, amount: "$ 500" },
        { id: 5, amount: "$ 1,000" },
        { id: 6, amount: "$ 2,000" },
        { id: 7, amount: "$ 4,000" },
        { id: 8, amount: "$ 8,000" },
        { id: 9, amount: "$ 16,000" },
        { id: 10, amount: "$ 32,000" },
        { id: 11, amount: "$ 64,000" },
        { id: 12, amount: "$ 125,000" },
        { id: 13, amount: "$ 250,000" },
        { id: 14, amount: "$ 500,000" },
        { id: 15, amount: "$ 1,000,000" },
      ].reverse(),
    []
  );

  useEffect(() => {
    questionNumber > 1 &&
      setEarned(moneyPyramid.find((m) => m.id === questionNumber - 1).amount);
  }, [questionNumber, moneyPyramid]);

  return (
    <div className="app">
      {!username ? (
        <Start setUsername={setUsername} />
      ) : (
        <>
          <div className="main">
            {timeOut ? (
              <h1 className="endText">You earned: {earned}</h1>
            ) : (
              <>
                <div className="top">
                  <div className="timer">
                    <Timer
                      setTimeOut={setTimeOut}
                      questionNumber={questionNumber}
                    />
                  </div>
                </div>
                <div className="bottom">
                  <Trivia
                    data={data}
                    questionNumber={questionNumber}
                    setQuestionNumber={setQuestionNumber}
                    setTimeOut={setTimeOut}
                  />
                </div>
              </>
            )}
          </div>
          <div className="pyramid">
            <ul className="moneyList">
              {moneyPyramid.map((m) => (
                <li
                  className={
                    questionNumber === m.id
                      ? "moneyListItem active"
                      : "moneyListItem"
                  }
                >
                  <span className="moneyListItemNumber">{m.id}</span>
                  <span className="moneyListItemAmount">{m.amount}</span>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
