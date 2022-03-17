// Javascript File for Assignment #4 - CIS 2286
// By Michael Coombs
// March 17th, 2022

//MAIN FUNCTION FOR TRIVIA
function triviaFunction() {
    let value;
    let value2;
    let count = 0;
    var one = document.getElementById('questionOne').value;
    var two = document.getElementById('questionTwo').value;
    var e1 = document.getElementById("questionThree");
    var three = e1.options[e1.selectedIndex].text;
    var e2 = document.getElementById("questionFour");
    var four = e2.options[e2.selectedIndex].text;

    //CHECK FOR CORRECT ANSWERS OR EMPTY FIELDS
    if (one === '1977') {
        count = count + 1;
    } else if (one === '') {
        document.getElementById('errorOne').innerHTML = 'Please complete this section';
    }

    if (two === 'Lightsaber' || two === 'lightsaber') {
        count = count + 1;
    } else if (two === '') {
        document.getElementById('errorTwo').innerHTML = 'Please complete this section';
    }

    if (three === 'George Lucas') {
        count = count + 1;
    } else if (three === 'Choose One...') {
        document.getElementById('errorThree').innerHTML = 'Please complete this section';
    }

    if (four === 'Kashyyyk') {
        count = count + 1;
    } else if (four === 'Choose One...') {
        document.getElementById('errorFour').innerHTML = 'Please complete this section';
    }

    if (document.getElementById('questionFiveOptOne').checked) {
        value = document.getElementById('questionFiveOptOne').value;
    } else if (document.getElementById('questionFiveOptTwo').checked) {
        value = document.getElementById('questionFiveOptTwo').value;
    } else if (document.getElementById('questionFiveOptThree').checked) {
        value = document.getElementById('questionFiveOptThree').value;
    } else if (document.getElementById('questionFiveOptFour').checked) {
        value = document.getElementById('questionFiveOptFour').value;
    } else {
        document.getElementById('errorFive').innerHTML = 'Please complete this section';
    }

    if (value === 'Opt2') {
        count = count + 1;
    }

    if (document.getElementById('questionSixOptOne').checked) {
        value2 = document.getElementById('questionSixOptOne').value;
    } else if (document.getElementById('questionSixOptTwo').checked) {
        value2 = document.getElementById('questionSixOptTwo').value;
    } else if (document.getElementById('questionSixOptThree').checked) {
        value2 = document.getElementById('questionSixOptThree').value;
    } else if (document.getElementById('questionSixOptFour').checked) {
        value2 = document.getElementById('questionSixOptFour').value;
    } else {
        document.getElementById('errorSix').innerHTML = 'Please complete this section';
    }
    if (value2 === 'Opt2') {
        count = count + 1;
    }

    let value3One='';
    let value3Two;
    let value3Three;
    let value3Four='';
    if (document.getElementById('questionSevenOptOne').checked) {
        value3One = document.getElementById('questionSevenOptOne').value;
    }  if (document.getElementById('questionSevenOptTwo').checked) {
        value3Two = document.getElementById('questionSevenOptTwo').value;
    }  if (document.getElementById('questionSevenOptThree').checked) {
        value3Three = document.getElementById('questionSevenOptThree').value;
    }  if (document.getElementById('questionSevenOptFour').checked) {
        value3Four = document.getElementById('questionSevenOptFour').value;
    } else {
        document.getElementById('errorSeven').innerHTML = 'Please complete this section';
    }

    if (value3One === 'Opt1' && value3Three === 'Opt3' && !(value3Two === 'Opt2' || value3Four === 'Opt4')) {
        count = count + 1;
    }


    //CALCULATE AND DISPLAY SCORE WITH MATCHING COLOR
    document.getElementById('result').style.display = '';

    if (count === 1) {
        var r1 = (count * 100) / 7;
        document.getElementById('display').innerHTML = 'Your Result is : ' + r1.toFixed(2) + "%";
        document.getElementById('display').style.color = 'red';
    } else if (count === 2) {
        var r2 = (count * 100) / 7;
        document.getElementById('display').innerHTML = 'Your Result is : ' + r2.toFixed(2) + "%";
        document.getElementById('display').style.color = 'red';
    } else if (count === 3) {
        var r3 = (count * 100) / 7;
        document.getElementById('display').innerHTML = 'Your Result is : ' + r3.toFixed(2) + "%";
        document.getElementById('display').style.color = 'red';
    } else if (count === 4) {
        var r4 = (count * 100) / 7;
        document.getElementById('display').innerHTML = 'Your Result is : ' + r4.toFixed(2) + "%";
        document.getElementById('display').style.color = 'orange';
    } else if (count === 5) {
        var r5 = (count * 100) / 7;
        document.getElementById('display').innerHTML = 'Your Result is : ' + r5.toFixed(2) + "%";
        document.getElementById('display').style.color = 'red';
    } else if (count === 6) {
        var r6 = (count * 100) / 7;
        document.getElementById('display').innerHTML = 'Your Result is : ' + r6.toFixed(2) + "%";
        document.getElementById('display').style.color = 'green';
    } else if (count === 7) {
        var r7 = (count * 100) / 7;
        document.getElementById('display').innerHTML = 'Your Result is : ' + r7.toFixed(2) + "%";
        document.getElementById('display').style.color = 'green';
    }
}

//HINT FUNCTIONS
function hintOne() {
    alert('Late 70s');
}

function hintTwo() {
    alert('"Not as clumsy or random as a blaster; an elegant weapon for a more civilized age" - Obi Wan Kenobi');
}

function hintThree() {
    alert('Founded Lucasfilm in 1971')
}

function hintFour() {
    alert('It is not Kamino')
}

function hintFive() {
    alert('He was built by a slave on Tatooine')
}

function hintSix() {
    alert('Grand  _______  _______')
}

function hintSeven() {
    alert('Both of them lived until Luke joined the Rebel Alliance (or shortly before)')
}
