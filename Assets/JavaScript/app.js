
//LOAD START BUTTON ON PAGE LOAD
$(document).ready(function(){
        $('#question').html('<img id="gamestart" src="Assets/Images/start.png">');
        });



var wins = 0;
var losses= 0;
var seconds = 10;

var x = 0
var timer; 



        $(document).on('click', '#gamestart', function(gamestart, startTimer){
                $('#gamestart').hide();
                $('#divfour').text("00:" + seconds);
                        timer = setInterval(startTimer, 1000);

 
                $('#question').text(question[x].question);
                $('#answerA').text(question[x].A[0]).addClass((question[x].A[1]));
                $('#answerB').text(question[x].B[0]).addClass((question[x].B[1]));
                $('#answerC').text(question[x].C[0]).addClass((question[x].C[1]));
                $('#answerD').text(question[x].D[0]).addClass((question[x].D[1]));

                        $(document).on('click','.answerbox', function(){

                                console.log($(this)[0].classList[1]);

                        if ($(this)[0].classList[1] == "wrong") {
                                        $('.wrong').addClass('looser');
                                        $('.correct').addClass('winner');
                                        losses++
                                        $('#divsix').text(losses);
                                        x++
                        }

                        if ($(this)[0].classList[1] == "correct") {
                                        $('.correct').addClass('winner');
                                        wins++
                                        $('#divtwo').text(wins);
                                        x++
                                        seconds=(seconds+5)

                                        
                        }

                        console.log(x);
                        }) 

                
                


                function startTimer(){
                        seconds--;
                        $('#divfour').text("00:" + seconds);

                        if (seconds < 10) {
                        $('#divfour').text("00:0" + seconds);     
                        }

                        if (seconds === 0) {
                                clearInterval(timer)
                                $('#gamefrost').html('<img id="gameover" src="Assets/Images/gameover.jpg">');
                        }
                }

        });









//GAME TRIVIA QUESTIONS
var question = [
        {
        question: "Which of these species of Pinniped are known to dive the deepest?",
        A: ["Harbor Seal","wrong"], B: ["Grey Whale","wrong"], C: ["Elephant Seal","correct"], D: ["Diver Seal","wrong"]
        },

        {
        question: "Which of these seals is the most endangered?",
        A: ["Elephant Seal ","wrong"], B: ["Harbor Seal","wrong"], C: ["Hawaiian Monk Seal","correct"], D: ["Crabeater Seal","wrong"]
        },

        {
        question: "The largest dolphin species in the world is the: ",
        A: ["Amazon River Dolphin","wrong"], B: [" Bottlenose Dolphin","wrong"], C: ["Spinner Dolphin","wrong"], D: ["Killer Whale","correct"]
        },

        {
        question: "Which of these species of Pinniped are known to dive the deapest?",
        A: ["Harbor Seal","wrong"], B: ["Grey Whale","wrong"], C: ["Elephant Seal","correct"], D: ["Diver Seal","wrong"]
        },

        {
        question: "Which of these whales can eat up to 4 tons (8,000 lbs) of food per day?",
        A: ["Fin Whale","wrong"], B: ["Blue Whale","correct"], C: ["Sperm Whale ","wrong"], D: ["Bowhead Whale","wrong"]
        },

        {
        question: "Which one of these animals is classified as a “marine mammal?",
        A: ["Polar Bear","correct"], B: ["River Otter","wrong"], C: ["Beaver","wrong"], D: ["Moose","wrong"]
        },

        {
        question: "Which one of these whales has teeth?",
        A: ["Humpback Whale ","wrong"], B: ["Minke Whale","wrong"], C: ["Sei Whale","wrong"], D: ["Sperm Whale","correct"]
        },

        {
        question: "Which one of these seals lives in Antarctica?",
        A: ["Weddel Seal","correct"], B: ["Harp Seal","wrong"], C: ["Ribbon Seal","wrong"], D: ["Ringed Seal","wrong"]
        },

        {
        question: "Which one of these marine mammals migrates the longest distance?",
        A: ["California Sea Lion","wrong"], B: ["Bottlenose Dolphin","wrong"], C: ["Gray Whale","correct"], D: ["Harbor Seal","wrong"]
        },

        {
        question: "Which of these whales can hold its breath for up to 2 hours?",
        A: ["Blue Whale","wrong"], B: ["Sperm Whale","correct"], C: ["Fin Whale","wrong"], D: ["Minke Whale","wrong"]
        },

        {
        question: "Which of these eared seals can be found along the entire west coast of the United States (Washington to Southern California?",
        A: ["Guadalupe Fur Seal","wrong"], B: ["Galápagos Sea Lion","wrong"], C: ["California Sea Lion","correct"], D: ["Galapagos Fur Seal","wrong"]
        },

        {
        question: "Which marine mammal can swim the fastest?",
        A: ["Killer Whale","correct"], B: ["Manatee","wrong"], C: ["Gray Whale","wrong"], D: ["Bottlenose Dolphin","wrong"]
        },
        ]






            

