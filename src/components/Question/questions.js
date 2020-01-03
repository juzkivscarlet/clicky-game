let questionsArr = [];

function Question(ques, img) {
	this.question = ques;
	this.answers = [];
    this.thumbnail = img;
    this.answerImgs = false;
}

const letters = ['A','B','C'];

const Answer = (arr, correct, question) => {
	for(var i=0; i<arr.length; i++) {
		let letter = letters[i];
		question.answers.push({
			letter: letter,
			text: arr[i],
			right: (letter===correct)
		});
	}
    question.correct = correct;
};

const Image = (url, source, ques, ans) => {
    questionsArr[ques].answers[ans].image = {
		url: url,
		source: source
    };
    questionsArr[ques].answerImgs = true;
};

questionsArr.push(new Question('Which country owns the Arctic archipelago, Svalbard?'));
Answer(['Norway', 'Russia', 'Sweden'], 'A', questionsArr[0]);
Image("https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Flag_of_Norway.svg/2000px-Flag_of_Norway.svg.png", 'Wikipedia', 0,0);
Image("https://upload.wikimedia.org/wikipedia/en/thumb/f/f3/Flag_of_Russia.svg/1280px-Flag_of_Russia.svg.png", "Wikipedia", 0,1);
Image("https://upload.wikimedia.org/wikipedia/en/thumb/4/4c/Flag_of_Sweden.svg/1600px-Flag_of_Sweden.svg.png", "Wikipedia", 0,2);

questionsArr.push(new Question('Pyongyang is the capital of which country?'));
Answer(['China', 'North Korea', 'South Korea'], 'B', questionsArr[1]);
Image("https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Flag_of_the_People%27s_Republic_of_China.svg/1280px-Flag_of_the_People%27s_Republic_of_China.svg.png", "Wikipedia", 1,0);
Image("https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Flag_of_North_Korea.svg/1600px-Flag_of_North_Korea.svg.png", "Wikipedia", 1,1);
Image("https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Flag_of_South_Korea.svg/1280px-Flag_of_South_Korea.svg.png", "Wikipedia", 1,2);

questionsArr.push(new Question('How many provinces does Canada have?'));
Answer(['13','8','12'], 'A', questionsArr[2]);

questionsArr.push(new Question('What is the capital city of the US state, Alaska?'));
Answer(['Ketchikan', 'Anchorage', 'Juneau'], 'C', questionsArr[3]);

for(var i=0; i<questionsArr.length; i++) {
	questionsArr[i].index = i+1;
}

console.log(questionsArr);

export default questionsArr;