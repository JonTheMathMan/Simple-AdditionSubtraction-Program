var printOut =[];
var catagory;
var subNumber;
var answer;
pickCatagory();

function pickCatagory()
{
	catagory = Math.floor(Math.random()*8)+3;
	document.getElementById("catagory").value = catagory;
	printOut.push("Catagory:"+catagory+String.fromCharCode(10));
	subNumber = Math.floor(Math.random()*(catagory-1))+1;
	document.getElementById("subNumber").value = subNumber;
	printOut.push("subNumber:"+subNumber+String.fromCharCode(10));
}

function getAnswer()
{
	answer = document.getElementById("answer").value;
	printOut.push("Answer:"+answer+String.fromCharCode(10));
}

function gradeAnswer()
{
	if(answer == catagory - subNumber)
		{
			printOut.push("Correct"+String.fromCharCode(10));
		}else{
			printOut.push("Wrong"+String.fromCharCode(10));
		}
}

function updateText()
{
	document.getElementById("grades").value = printOut;
}

var field = document.getElementById("answer");

field.addEventListener("keydown", function (e){
    if (e.keyCode === 13) {
		if(document.getElementById("answer").value != "")
			{
				getAnswer();
				gradeAnswer();
				updateText();
				pickCatagory();
				document.getElementById("answer").value = "";
			}
        e.preventDefault();
        e.stopImmediatePropagation();
        e.stopPropagation();
    }
}, false);