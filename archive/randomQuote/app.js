const quotesList = `
"Life is 10% what happens to us and 90% how we react to it." - Charles R. Swindoll

"The purpose of our lives is to be happy." - Dalai Lama

"Life is either a daring adventure or nothing at all." - Helen Keller

"In the end, it's not the years in your life that count. It's the life in your years." - Abraham Lincoln

"Life is really simple, but we insist on making it complicated." - Confucius

"The best way to predict the future is to create it." - Peter Drucker

"Life is short, and it's up to you to make it sweet." - Sarah Louise Delany

"Life is a journey, not a destination." - Ralph Waldo Emerson

"The unexamined life is not worth living." - Socrates

"Life is what happens when you're busy making other plans." - John Lennon

"Believe you can and you're halfway there." - Theodore Roosevelt

"The only way to do great work is to love what you do." - Steve Jobs

"Success is not final, failure is not fatal: It is the courage to continue that counts." - Winston Churchill

"Your time is limited, don't waste it living someone else's life." - Steve Jobs

"The future belongs to those who believe in the beauty of their dreams." - Eleanor Roosevelt

"Don't watch the clock; do what it does. Keep going." - Sam Levenson

"You are never too old to set another goal or to dream a new dream." - C.S. Lewis

"Act as if what you do makes a difference. It does." - William James

"The only limit to our realization of tomorrow is our doubts of today." - Franklin D. Roosevelt

"Start where you are. Use what you have. Do what you can." - Arthur Ashe

"Success is walking from failure to failure with no loss of enthusiasm." - Winston Churchill

"Success usually comes to those who are too busy to be looking for it." - Henry David Thoreau

"The road to success and the road to failure are almost exactly the same." - Colin R. Davis

"Success is not the key to happiness. Happiness is the key to success." - Albert Schweitzer

"Success is the sum of small efforts, repeated day in and day out." - Robert Collier

"The secret of success is to do the common thing uncommonly well." - John D. Rockefeller

"Success is not in what you have, but who you are." - Bo Bennett

"Success is the result of perfection, hard work, learning from failure, loyalty, and persistence." - Colin Powell

"The only place where success comes before work is in the dictionary." - Vidal Sassoon

"Success is not just about making money. It's about making a difference." - Unknown

"Love is composed of a single soul inhabiting two bodies." - Aristotle


"The wisest mind has something yet to learn." - George Santayana

"Wisdom is the quality that keeps you from getting into situations where you need it." - Doug Larson
`



const quoteArray = quotesList.split('\n').filter((line)=> line.trim() !== "")
// console.log(quoteArray);

const button = document.getElementById('getRandomQuote')
const quoteArea = document.getElementById('quoteArea');

button.addEventListener('click', () =>{

  const quoteArrLenght = quoteArray.length;
  const randomInt = Math.floor(Math.random() * quoteArrLenght);
  console.log(randomInt);
  const randomQuote = quoteArray[randomInt];

  quoteArea.textContent = randomQuote;
})

