const hiragana = [{name:"あ", odp:"a"},{name:"い",odp:"i"},{name:"う",odp:"u"},{name:"え",odp:"e"},{name:"お",odp:"o"},{name:"か",odp:"ka"},{name:"き",odp:"ki"},{name:"く",odp:"ku"},{name:"け",odp:"ke"},{name:"こ",odp:"ko"},{name:"さ",odp:"sa"},{name:"し",odp:"shi"},{name:"す",odp:"su"},{name:"せ",odp:"se"},{ name:"そ",odp:"so"},{ name:"た",odp:"ta"},{ name:"ち",odp:"chi"},{ name:"つ",odp:"tsu"},{ name:"て",odp:"te"},{ name:"と",odp:"to"},{ name:"な",odp:"na"},{ name:"に",odp:"ni"},{ name:"ぬ",odp:"nu"},{ name:"ね",odp:"ne"},{ name:"の",odp:"no"},{ name:"は",odp:"ha"},{ name:"ひ",odp:"hi"},{ name:"ふ",odp:"fu"},{ name:"へ",odp:"he"},{ name:"ほ",odp:"ho"},{ name:"ま",odp:"ma"},{ name:"み",odp:"mi"},{ name:"む",odp:"mu"},{ name:"め",odp:"me"},{ name:"も",odp:"mo"},{ name:"や",odp:"ya"},{ name:"ゆ",odp:"yu"},{ name:"よ",odp:"yo"},{ name:"ら",odp:"ra"},{ name:"り",odp:"ri"},{ name:"る",odp:"ru"},{ name:"れ",odp:"re"},{ name:"ろ",odp:"ro"},{ name:"わ",odp:"wa"},{ name:"を",odp:"wo"},{ name:"ん",odp:"n"}];

const dummy = [{name:"あ", odp:"a"},{name:"い",odp:"i"},{name:"う",odp:"u"},{name:"え",odp:"e"},{name:"お",odp:"o"},{name:"か",odp:"ka"},{name:"き",odp:"ki"},{name:"く",odp:"ku"},{name:"け",odp:"ke"},{name:"こ",odp:"ko"},{name:"さ",odp:"sa"},{name:"し",odp:"shi"},{name:"す",odp:"su"},{name:"せ",odp:"se"},{ name:"そ",odp:"so"},{ name:"た",odp:"ta"},{ name:"ち",odp:"chi"},{ name:"つ",odp:"tsu"},{ name:"て",odp:"te"},{ name:"と",odp:"to"},{ name:"な",odp:"na"},{ name:"に",odp:"ni"},{ name:"ぬ",odp:"nu"},{ name:"ね",odp:"ne"},{ name:"の",odp:"no"},{ name:"は",odp:"ha"},{ name:"ひ",odp:"hi"},{ name:"ふ",odp:"fu"},{ name:"へ",odp:"he"},{ name:"ほ",odp:"ho"},{ name:"ま",odp:"ma"},{ name:"み",odp:"mi"},{ name:"む",odp:"mu"},{ name:"め",odp:"me"},{ name:"も",odp:"mo"},{ name:"や",odp:"ya"},{ name:"ゆ",odp:"yu"},{ name:"よ",odp:"yo"},{ name:"ら",odp:"ra"},{ name:"り",odp:"ri"},{ name:"る",odp:"ru"},{ name:"れ",odp:"re"},{ name:"ろ",odp:"ro"},{ name:"わ",odp:"wa"},{ name:"を",odp:"wo"},{ name:"ん",odp:"n"}];

const katakana = [{name:"ア", odp:"a"},{name:"イ",odp:"i"},{name:"ウ",odp:"u"},{name:"エ",odp:"e"},{name:"オ",odp:"o"},{name:"カ",odp:"ka"},{name:"キ",odp:"ki"},{name:"ク",odp:"ku"},{name:"ケ",odp:"ke"},{name:"コ",odp:"ko"},{name:"サ",odp:"sa"},{name:"シ",odp:"shi"},{name:"ス",odp:"su"},{name:"セ",odp:"se"},{ name:"ソ",odp:"so"},{ name:"タ",odp:"ta"},{ name:"チ",odp:"chi"},{ name:"ツ",odp:"tsu"},{ name:"テ",odp:"te"},{ name:"ト",odp:"to"},{ name:"ナ",odp:"na"},{ name:"ニ",odp:"ni"},{ name:"ヌ",odp:"nu"},{ name:"ネ",odp:"ne"},{ name:"ノ",odp:"no"},{ name:"ハ",odp:"ha"},{ name:"ヒ",odp:"hi"},{ name:"フ",odp:"fu"},{ name:"ヘ",odp:"he"},{ name:"ほ",odp:"ho"},{ name:"マ",odp:"ma"},{ name:"ミ",odp:"mi"},{ name:"ム",odp:"mu"},{ name:"メ",odp:"me"},{ name:"モ",odp:"mo"},{ name:"ヤ",odp:"ya"},{ name:"ユ",odp:"yu"},{ name:"ヨ",odp:"yo"},{ name:"ラ",odp:"ra"},{ name:"リ",odp:"ri"},{ name:"ル",odp:"ru"},{ name:"レ",odp:"re"},{ name:"ロ",odp:"ro"},{ name:"ワ",odp:"wa"},{ name:"ヲ",odp:"wo"},{ name:"ン",odp:"n"}];

const dummyKata = [{name:"ア", odp:"a"},{name:"イ",odp:"i"},{name:"ウ",odp:"u"},{name:"エ",odp:"e"},{name:"オ",odp:"o"},{name:"カ",odp:"ka"},{name:"キ",odp:"ki"},{name:"ク",odp:"ku"},{name:"ケ",odp:"ke"},{name:"コ",odp:"ko"},{name:"サ",odp:"sa"},{name:"シ",odp:"shi"},{name:"ス",odp:"su"},{name:"セ",odp:"se"},{ name:"ソ",odp:"so"},{ name:"タ",odp:"ta"},{ name:"チ",odp:"chi"},{ name:"ツ",odp:"tsu"},{ name:"テ",odp:"te"},{ name:"ト",odp:"to"},{ name:"ナ",odp:"na"},{ name:"ニ",odp:"ni"},{ name:"ヌ",odp:"nu"},{ name:"ネ",odp:"ne"},{ name:"ノ",odp:"no"},{ name:"ハ",odp:"ha"},{ name:"ヒ",odp:"hi"},{ name:"フ",odp:"fu"},{ name:"ヘ",odp:"he"},{ name:"ほ",odp:"ho"},{ name:"マ",odp:"ma"},{ name:"ミ",odp:"mi"},{ name:"ム",odp:"mu"},{ name:"メ",odp:"me"},{ name:"モ",odp:"mo"},{ name:"ヤ",odp:"ya"},{ name:"ユ",odp:"yu"},{ name:"ヨ",odp:"yo"},{ name:"ラ",odp:"ra"},{ name:"リ",odp:"ri"},{ name:"ル",odp:"ru"},{ name:"レ",odp:"re"},{ name:"ロ",odp:"ro"},{ name:"ワ",odp:"wa"},{ name:"ヲ",odp:"wo"},{ name:"ン",odp:"n"}];

const answerPlacement = ["1","2","3","4"];

var testActive = 0;

var maxQuestionCount;




var questioncounter = 1;
//shuffle function
function shuffle(hiragana) {
  let currentIndex = hiragana.length,  randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [hiragana[currentIndex], hiragana[randomIndex]] = [
      hiragana[randomIndex], hiragana[currentIndex]];
  }
  return hiragana;
}

  function shuffle(katakana) {
  let currentIndex = katakana.length,  randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [katakana[currentIndex], katakana[randomIndex]] = [
      katakana[randomIndex], katakana[currentIndex]];
  }
  return katakana;
}
  
function shuffle(dummy) 
{
let currentIndex = dummy.length,  randomIndex;
  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [dummy[currentIndex], dummy[randomIndex]] = [
      dummy[randomIndex], dummy[currentIndex]];
  }
  return dummy;
} 

function shuffle(dummyKata) 
{
let currentIndex = dummyKata.length,  randomIndex;
  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [dummyKata[currentIndex], dummyKata[randomIndex]] = [
      dummyKata[randomIndex], dummyKata[currentIndex]];
  }
  return dummyKata;
} 

function shuffle(answerPlacement) 
{
let currentIndex = answerPlacement.length,  randomIndex;
  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [answerPlacement[currentIndex], answerPlacement[randomIndex]] = [
      answerPlacement[randomIndex], answerPlacement[currentIndex]];
  }
  return answerPlacement;
} 




/*maxQuestionCount = hiragana.length + 1;
document.getElementById("sideBar").style.width = "0"; */
//test start function
function start() 
{
     if (document.getElementById("customRowDropdown").checked == true) {  //remove rows which are not selected from the array
if (document.getElementById("rowA").checked == false) {
var index = hiragana.map(function(g) { return g.odp; }).indexOf('a');
hiragana.splice(index, 5);
dummy.splice(index,5);
}
if (document.getElementById("rowKA").checked == false) {
var index = hiragana.map(function(g) { return g.odp; }).indexOf('ka');
hiragana.splice(index, 5);
dummy.splice(index,5);
}
if (document.getElementById("rowSA").checked == false) {
  var index = hiragana.map(function(g) { return g.odp; }).indexOf('sa');
  hiragana.splice(index, 5);
  dummy.splice(index,5);
}
if (document.getElementById("rowTA").checked == false) {
 var index = hiragana.map(function(g) { return g.odp; }).indexOf('ta');
  hiragana.splice(index, 5);
  dummy.splice(index,5);
}
if (document.getElementById("rowNA").checked == false) {
 var index = hiragana.map(function(g) { return g.odp; }).indexOf('na');
  hiragana.splice(index, 5);
  dummy.splice(index,5);
}
if (document.getElementById("rowHA").checked == false) {
 var index = hiragana.map(function(g) { return g.odp; }).indexOf('ha');
  hiragana.splice(index, 5);
  dummy.splice(index,5);
}
if (document.getElementById("rowMA").checked == false) {
 var index = hiragana.map(function(g) { return g.odp; }).indexOf('ma');
  hiragana.splice(index, 5);
  dummy.splice(index,5);
}
if (document.getElementById("rowYA").checked == false) {
 var index = hiragana.map(function(g) { return g.odp; }).indexOf('ya');
  hiragana.splice(index, 3);
  dummy.splice(index,3);
}
if (document.getElementById("rowRA").checked == false) {
 var index = hiragana.map(function(g) { return g.odp; }).indexOf('ra');
  hiragana.splice(index, 5);
  dummy.splice(index,5);
}
if (document.getElementById("rowWA").checked == false) {
 var index = hiragana.map(function(g) { return g.odp; }).indexOf('wa');
  hiragana.splice(index, 2);
  dummy.splice(index,2);
}
if (document.getElementById("rowN").checked == false) {
 var index = hiragana.map(function(g) { return g.odp; }).indexOf('n');
  hiragana.splice(index, 1);
  dummy.splice(index,1);
}

if (document.getElementById("rowA").checked == false) {
  var index = katakana.map(function(g) { return g.odp; }).indexOf('a');
  katakana.splice(index, 5);
  dummyKata.splice(index,5);
  }
  if (document.getElementById("rowKA").checked == false) {
  var index = katakana.map(function(g) { return g.odp; }).indexOf('ka');
  katakana.splice(index, 5);
  dummyKata.splice(index,5);
  }
  if (document.getElementById("rowSA").checked == false) {
    var index = katakana.map(function(g) { return g.odp; }).indexOf('sa');
    katakana.splice(index, 5);
    dummyKata.splice(index,5);
  }
  if (document.getElementById("rowTA").checked == false) {
   var index = katakana.map(function(g) { return g.odp; }).indexOf('ta');
    katakana.splice(index, 5);
    dummyKata.splice(index,5);
  }
  if (document.getElementById("rowNA").checked == false) {
   var index = katakana.map(function(g) { return g.odp; }).indexOf('na');
    katakana.splice(index, 5);
    dummyKata.splice(index,5);
  }
  if (document.getElementById("rowHA").checked == false) {
   var index = katakana.map(function(g) { return g.odp; }).indexOf('ha');
    katakana.splice(index, 5);
    dummyKata.splice(index,5);
  }
  if (document.getElementById("rowMA").checked == false) {
   var index = katakana.map(function(g) { return g.odp; }).indexOf('ma');
    katakana.splice(index, 5);
    dummyKata.splice(index,5);
  }
  if (document.getElementById("rowYA").checked == false) {
   var index = katakana.map(function(g) { return g.odp; }).indexOf('ya');
    katakana.splice(index, 3);
    dummyKata.splice(index,3);
  }
  if (document.getElementById("rowRA").checked == false) {
   var index = katakana.map(function(g) { return g.odp; }).indexOf('ra');
    katakana.splice(index, 5);
    dummyKata.splice(index,5);
  }
  if (document.getElementById("rowWA").checked == false) {
   var index = katakana.map(function(g) { return g.odp; }).indexOf('wa');
    katakana.splice(index, 2);
    dummyKata.splice(index,2);
  }
  if (document.getElementById("rowN").checked == false) {
   var index = katakana.map(function(g) { return g.odp; }).indexOf('n');
    katakana.splice(index, 1);
    dummyKata.splice(index,1);
  }
  if (document.getElementById("SetTestToHiragana").checked == true) 
  {
maxQuestionCount = hiragana.length + 1;
  }
  else
  {
maxQuestionCount = katakana.length + 1;
  }
console.log(hiragana);
console.log(maxQuestionCount);
    } 

maxQuestionCount = hiragana.length + 1;
document.getElementById("sideBar").style.width = "0";


if (document.getElementById("SetTestKanaToRomaji").checked == true)
    {
    
if (document.getElementById("SetTestToHiragana").checked == true)
    {
  document.getElementById("start").style.display="none"; //button responsible for starting the test disappears
  document.getElementById("TestSettingsOpen").style.display="none";
  document.getElementById("info").style.display="none";
  document.getElementById("bigButtonContainer").style.display="none";
  document.getElementById("wynik").style.display="block";
  shuffle(hiragana); //executes the shuffle function
  document.getElementById("wynik").innerHTML= hiragana[0].name;  //sets the div to the 0th index of the array
 document.getElementById("answerContainer").style.display="block";
        
  document.getElementById("option1").style.display="block";  //buttons responsible for losuj() function appears
  let correctanswer = hiragana[0].odp;
  document.getElementById("option1").innerHTML= correctanswer;
  
  
  shuffle(dummy); //shuffles the array with fake/dummy answers
  let DummyAnswerA = dummy[0].odp //sets dummies to display fake answers, the dummies never overlap
  let DummyAnswerB = dummy[1].odp
  let DummyAnswerC = dummy[2].odp
  
  if (DummyAnswerA == correctanswer) // checks if dummy equals the correct answer, if it does, picks a different value. the dummies here also don't overlap
  {
  DummyAnswerA = dummy[3].odp;
  }
  
  if (DummyAnswerB == correctanswer)
  {
  DummyAnswerB = dummy[4].odp;
  }
  
  if (DummyAnswerC == correctanswer)
  {
  DummyAnswerC = dummy[0].odp;
  if (DummyAnswerC == DummyAnswerA) {
    DummyAnswerC = dummy[3].odp;
    }
    if (DummyAnswerC == correctanswer) {
      DummyAnswerC = dummy[1].odp;
      }
      if (DummyAnswerC == DummyAnswerB) {
        DummyAnswerC == dummy[4].odp;
      }
  }
  
  document.getElementById("option2").style.display="block";
  document.getElementById("option2").innerHTML= DummyAnswerA;
  
  document.getElementById("option3").style.display="block";
  document.getElementById("option3").innerHTML= DummyAnswerB;
  
  document.getElementById("option4").style.display="block";
  document.getElementById("option4").innerHTML= DummyAnswerC;
    
    }
else if (document.getElementById("SetTestToKatakana").checked == true)
    {
        document.getElementById("start").style.display="none"; //button responsible for starting the test disappears
        document.getElementById("TestSettingsOpen").style.display="none";
        document.getElementById("info").style.display="none";
        document.getElementById("bigButtonContainer").style.display="none";
        document.getElementById("answerContainer").style.display="block";
  document.getElementById("wynik").style.display="block";
  shuffle(katakana); //executes the shuffle function
  document.getElementById("wynik").innerHTML= katakana[0].name;  //sets the div to the 0th index of the array
  
  document.getElementById("option1").style.display="block";  //buttons responsible for losuj() function appears
  let correctanswer = katakana[0].odp;
  document.getElementById("option1").innerHTML= correctanswer;
  
  
  shuffle(dummyKata); //shuffles the array with fake/dummy answers
  let DummyAnswerA = dummyKata[0].odp; //sets dummies to display fake answers, the dummies never overlap
  let DummyAnswerB = dummyKata[1].odp;
  let DummyAnswerC = dummyKata[2].odp;
  
  if (DummyAnswerA == correctanswer) // checks if dummy equals the correct answer, if it does, picks a different value. the dummies here also don't overlap
  {
  DummyAnswerA = dummyKata[3].odp;
  }
  
  if (DummyAnswerB == correctanswer)
  {
  DummyAnswerB = dummyKata[4].odp;
  }

  if (DummyAnswerC == correctanswer)
  {
  DummyAnswerC = dummyKata[0].odp;
  if (DummyAnswerC == DummyAnswerA) {
    DummyAnswerC = dummyKata[3].odp;
    }
    if (DummyAnswerC == correctanswer) {
      DummyAnswerC = dummyKata[1].odp;
      }
      if (DummyAnswerC == DummyAnswerB) {
        DummyAnswerC = dummyKata[4].odp;
      }
  }

  
  
  document.getElementById("option2").style.display="block";
  document.getElementById("option2").innerHTML= DummyAnswerA;
  
  document.getElementById("option3").style.display="block";
  document.getElementById("option3").innerHTML= DummyAnswerB;
  
  document.getElementById("option4").style.display="block";
  document.getElementById("option4").innerHTML= DummyAnswerC; 
      }      
    }
  
    
    
    
    
    
else if (document.getElementById("SetTestRomajiToKana").checked == true)  {
           
if (document.getElementById("SetTestToHiragana").checked == true)
    {
  document.getElementById("start").style.display="none"; //button responsible for starting the test disappears
document.getElementById("TestSettingsOpen").style.display="none";
document.getElementById("info").style.display="none";  
document.getElementById("bigButtonContainer").style.display="none";
document.getElementById("answerContainer").style.display="block";
document.getElementById("wynik").style.display="block";
  shuffle(hiragana); //executes the shuffle function
  document.getElementById("wynik").innerHTML= hiragana[0].odp;  //sets the div to the 0th index of the array
  
  document.getElementById("option1").style.display="block";  //buttons responsible for losuj() function appears
  let correctanswer = hiragana[0].name;
  document.getElementById("option1").innerHTML= correctanswer;
  
  
  shuffle(dummy); //shuffles the array with fake/dummy answers
  let DummyAnswerA = dummy[0].name //sets dummies to display fake answers, the dummies never overlap
  let DummyAnswerB = dummy[1].name
  let DummyAnswerC = dummy[2].name
  
  if (DummyAnswerA == correctanswer) // checks if dummy equals the correct answer, if it does, picks a different value. the dummies here also don't overlap
  {
  DummyAnswerA = dummy[3].name;
  }
  
  if (DummyAnswerB == correctanswer)
  {
  DummyAnswerB = dummy[4].name;
  }
  
  if (DummyAnswerC == correctanswer)
  {
  DummyAnswerC = dummy[0].name;
  if (DummyAnswerC == DummyAnswerA) {
    DummyAnswerC = dummy[3].name;
    }
    if (DummyAnswerC == correctanswer) {
      DummyAnswerC = dummy[1].name;
      }
      if (DummyAnswerC == DummyAnswerB) {
        DummyAnswerC == dummy[4].name;
      }
  }
  }
  
  document.getElementById("option2").style.display="block";
  document.getElementById("option2").innerHTML= DummyAnswerA;
  
  document.getElementById("option3").style.display="block";
  document.getElementById("option3").innerHTML= DummyAnswerB;
  
  document.getElementById("option4").style.display="block";
  document.getElementById("option4").innerHTML= DummyAnswerC;
    
    }
else if (document.getElementById("SetTestToKatakana").checked == true)
{
        document.getElementById("start").style.display="none"; //button responsible for starting the test disappears
        document.getElementById("answerContainer").style.display="block";
  document.getElementById("wynik").style.display="block";
  document.getElementById("TestSettingsOpen").style.display="none";
  document.getElementById("info").style.display="none";
  document.getElementById("bigButtonContainer").style.display="none";
  shuffle(katakana); //executes the shuffle function
  document.getElementById("wynik").innerHTML= katakana[0].odp;  //sets the div to the 0th index of the array
  
  document.getElementById("option1").style.display="block";  //buttons responsible for losuj() function appears
  let correctanswer = katakana[0].name;
  document.getElementById("option1").innerHTML= correctanswer;
  
  
  shuffle(dummyKata); //shuffles the array with fake/dummy answers
  let DummyAnswerA = dummyKata[0].name //sets dummies to display fake answers, the dummies never overlap
  let DummyAnswerB = dummyKata[1].name
  let DummyAnswerC = dummyKata[2].name
  
  if (DummyAnswerA == correctanswer) // checks if dummy equals the correct answer, if it does, picks a different value. the dummies here also don't overlap
  {
  DummyAnswerA = dummyKata[3].name;
  }
  
  if (DummyAnswerB == correctanswer)
  {
  DummyAnswerB = dummyKata[4].name;
  }
  
  if (DummyAnswerC == correctanswer)
  {
  DummyAnswerC = dummyKata[0].name;
  if (DummyAnswerC == DummyAnswerA) {
    DummyAnswerC = dummyKata[3].name;
    }
    if (DummyAnswerC == correctanswer) {
      DummyAnswerC = dummyKata[1].name;
      }
      if (DummyAnswerC == DummyAnswerB) {
        DummyAnswerC == dummyKata[4].name;
      }
  }
  
  
  document.getElementById("option2").style.display="block";
  document.getElementById("option2").innerHTML= DummyAnswerA;
  
  document.getElementById("option3").style.display="block";
  document.getElementById("option3").innerHTML= DummyAnswerB;
  
  document.getElementById("option4").style.display="block";
  document.getElementById("option4").innerHTML= DummyAnswerC; 
  }

  shuffle(answerPlacement);

  if (answerPlacement[0] == 1) {
    document.getElementById("option1").classList= "";
    document.getElementById("option2").classList= "";
    document.getElementById("option3").classList= "";
    document.getElementById("option4").classList= "";
    document.getElementById("option1").classList.add("button1");
    document.getElementById("option2").classList.add("button2");
    document.getElementById("option3").classList.add("button3");
    document.getElementById("option4").classList.add("button4");
  }
  if (answerPlacement[0] == 2) {
    document.getElementById("option1").classList= "";
    document.getElementById("option2").classList= "";
    document.getElementById("option3").classList= "";
    document.getElementById("option4").classList= "";
    document.getElementById("option1").classList.add("button2");
    document.getElementById("option2").classList.add("button3");
    document.getElementById("option3").classList.add("button4");
    document.getElementById("option4").classList.add("button1");
  }
  if (answerPlacement[0] == 3) {
    document.getElementById("option1").classList= "";
    document.getElementById("option2").classList= "";
    document.getElementById("option3").classList= "";
    document.getElementById("option4").classList= "";
    document.getElementById("option1").classList.add("button3");
    document.getElementById("option2").classList.add("button4");
    document.getElementById("option3").classList.add("button1");
    document.getElementById("option4").classList.add("button2");
  }
  if (answerPlacement[0] == 4) {
    document.getElementById("option1").classList= "";
    document.getElementById("option2").classList= "";
    document.getElementById("option3").classList= "";
    document.getElementById("option4").classList= "";
    document.getElementById("option1").classList.add("button4");
    document.getElementById("option2").classList.add("button1");
    document.getElementById("option3").classList.add("button2");
    document.getElementById("option4").classList.add("button3");
  }
}
  









//actual function
function losuj()
{
if (document.getElementById("SetTestKanaToRomaji").checked == true) {
    if (document.getElementById("SetTestToHiragana").checked == true) //checks if the user wants to take the test in hiragana or katakana
    {
var questionnumber = 0; //states questionnumber

   questionnumber = (questionnumber+1); //adds one to questionnumber
   
   for (let i = 0; i < questionnumber; i++) //loops shift() to avoid repeat characters
  {
    hiragana.shift(); //removes previously chosen objects
  }
 
questioncounter = (questioncounter + 1);
  document.getElementById("CounterQuestion").innerHTML= questioncounter;
  
  if (questioncounter < maxQuestionCount)
  {
  
  document.getElementById("wynik").innerHTML= hiragana[0].name; //sets the div.innerHTML to the 0th index of the array, which is now a different object because of shift()
  let correctanswer = hiragana[0].odp;
  document.getElementById("option1").innerHTML= correctanswer;
  
  shuffle(dummy); //shuffles the array with fake/dummy answers
  let DummyAnswerA = dummy[0].odp //sets dummies to display fake answers, the dummies never overlap
  let DummyAnswerB = dummy[1].odp
  let DummyAnswerC = dummy[2].odp
  
  if (DummyAnswerA == correctanswer) // checks if dummy equals the correct answer, if it does, picks a different value. the dummies here also don't overlap
  {
  DummyAnswerA = dummy[3].odp;
  }
  
  if (DummyAnswerB == correctanswer)
  {
  DummyAnswerB = dummy[4].odp;
  }
  
  if (DummyAnswerC == correctanswer)
  {
  DummyAnswerC = dummy[0].odp;
  if (DummyAnswerC == DummyAnswerA) {
    DummyAnswerC = dummy[3].odp;
    }
    if (DummyAnswerC == correctanswer) {
      DummyAnswerC = dummy[1].odp;
      }
      if (DummyAnswerC == DummyAnswerB) {
        DummyAnswerC == dummy[4].odp;
      }
  }
  

  document.getElementById("option2").innerHTML= DummyAnswerA;
  document.getElementById("option3").innerHTML= DummyAnswerB; 
  document.getElementById("option4").innerHTML= DummyAnswerC;
}
}
  
  else if (questioncounter >= maxQuestionCount)
  {
  document.getElementById("option1").style.display="none";
  document.getElementById("option2").style.display="none";
  document.getElementById("option3").style.display="none";
  document.getElementById("option4").style.display="none";
  document.getElementById("answerstatus").innerHTML= "Your Score:";
  document.getElementById("wynik").innerHTML= "Congratulations, you finished the test!";
       }
    }
else if (document.getElementById("SetTestToKatakana").checked == true)
    {
        var questionnumber = 0; //states questionnumber

   questionnumber = (questionnumber+1); //adds one to questionnumber
   
   for (let i = 0; i < questionnumber; i++) //loops shift() to avoid repeat characters
  {
    katakana.shift(); //removes previously chosen objects
  }

questioncounter = (questioncounter + 1);
  document.getElementById("CounterQuestion").innerHTML= questioncounter;
  
  if (questioncounter < maxQuestionCount)
  {
  
  document.getElementById("wynik").innerHTML= katakana[0].name; //sets the div.innerHTML to the 0th index of the array, which is now a different object because of shift()
  let correctanswer = katakana[0].odp;
  document.getElementById("option1").innerHTML= correctanswer;
  
  shuffle(dummyKata); //shuffles the array with fake/dummy answers
  let DummyAnswerA = dummyKata[0].odp //sets dummies to display fake answers, the dummies never overlap
  let DummyAnswerB = dummyKata[1].odp
  let DummyAnswerC = dummyKata[2].odp
  
  if (DummyAnswerA == correctanswer) // checks if dummy equals the correct answer, if it does, picks a different value. the dummies here also don't overlap
  {
  DummyAnswerA = dummyKata[3].odp;
  }
  
  if (DummyAnswerB == correctanswer)
  {
  DummyAnswerB = dummyKata[4].odp;
  }
  
  if (DummyAnswerC == correctanswer)
  {
  DummyAnswerC = dummyKata[0].odp;
  if (DummyAnswerC == DummyAnswerA) {
    DummyAnswerC = dummyKata[3].odp;
    }
    if (DummyAnswerC == correctanswer) {
      DummyAnswerC = dummyKata[1].odp;
      }
      if (DummyAnswerC == DummyAnswerB) {
        DummyAnswerC == dummyKata[4].odp;
      }
  }
  

  document.getElementById("option2").innerHTML= DummyAnswerA;
  document.getElementById("option3").innerHTML= DummyAnswerB; 
  document.getElementById("option4").innerHTML= DummyAnswerC;
  }
  
  else if (questioncounter >= maxQuestionCount)
  {
  document.getElementById("option1").style.display="none";
  document.getElementById("option2").style.display="none";
  document.getElementById("option3").style.display="none";
  document.getElementById("option4").style.display="none";
  document.getElementById("answerstatus").innerHTML= "Your Score:";
  document.getElementById("wynik").innerHTML= "Congratulations, you finished the test!";
  }
}

else if (document.getElementById("SetTestRomajiToKana").checked == true) { //checks if the test is set to romaji
   if (document.getElementById("SetTestToHiragana").checked == true) //checks if the user wants to take the test in hiragana or katakana
    {
var questionnumber = 0; //states questionnumber

   questionnumber = (questionnumber+1); //adds one to questionnumber
   
   for (let i = 0; i < questionnumber; i++) //loops shift() to avoid repeat characters
  {
    hiragana.shift(); //removes previously chosen objects
  }

questioncounter = (questioncounter + 1);
  document.getElementById("CounterQuestion").innerHTML= questioncounter;
  
  if (questioncounter < maxQuestionCount)
  {
  
  document.getElementById("wynik").innerHTML= hiragana[0].odp; //sets the div.innerHTML to the 0th index of the array, which is now a different object because of shift()
  let correctanswer = hiragana[0].name;
  document.getElementById("option1").innerHTML= correctanswer;
  
  shuffle(dummy); //shuffles the array with fake/dummy answers
  let DummyAnswerA = dummy[0].name //sets dummies to display fake answers, the dummies never overlap
  let DummyAnswerB = dummy[1].name
  let DummyAnswerC = dummy[2].name
  
  if (DummyAnswerA == correctanswer) // checks if dummy equals the correct answer, if it does, picks a different value. the dummies here also don't overlap
  {
  DummyAnswerA = dummy[3].name;
  }
  
  if (DummyAnswerB == correctanswer)
  {
  DummyAnswerB = dummy[4].name;
  }
  
  if (DummyAnswerC == correctanswer)
  {
  DummyAnswerC = dummy[0].name;
  if (DummyAnswerC == DummyAnswerA) {
    DummyAnswerC = dummy[3].name;
    }
    if (DummyAnswerC == correctanswer) {
      DummyAnswerC = dummy[1].name;
      }
      if (DummyAnswerC == DummyAnswerB) {
        DummyAnswerC == dummy[4].name;
      }
  }
  

  document.getElementById("option2").innerHTML= DummyAnswerA;
  document.getElementById("option3").innerHTML= DummyAnswerB; 
  document.getElementById("option4").innerHTML= DummyAnswerC;
}
}
  
  else if (questioncounter >= maxQuestionCount)
  {
  document.getElementById("option1").style.display="none";
  document.getElementById("option2").style.display="none";
  document.getElementById("option3").style.display="none";
  document.getElementById("option4").style.display="none";
  document.getElementById("answerstatus").innerHTML= "Your Score:";
  document.getElementById("wynik").innerHTML= "Congratulations, you finished the test!";
       }
}
else if (document.getElementById("SetTestToKatakana").checked == true)
    {
        var questionnumber = 0; //states questionnumber

   questionnumber = (questionnumber+1); //adds one to questionnumber
   
   for (let i = 0; i < questionnumber; i++) //loops shift() to avoid repeat characters
  {
    katakana.shift(); //removes previously chosen objects
  }

questioncounter = (questioncounter + 1);
  document.getElementById("CounterQuestion").innerHTML= questioncounter;
  
  if (questioncounter < maxQuestionCount)
  {
  
  document.getElementById("wynik").innerHTML= katakana[0].odp; //sets the div.innerHTML to the 0th index of the array, which is now a different object because of shift()
  let correctanswer = katakana[0].name;
  document.getElementById("option1").innerHTML= correctanswer;
  
  shuffle(dummyKata); //shuffles the array with fake/dummy answers
  let DummyAnswerA = dummyKata[0].name //sets dummies to display fake answers, the dummies never overlap
  let DummyAnswerB = dummyKata[1].name
  let DummyAnswerC = dummyKata[2].name
  
  if (DummyAnswerA == correctanswer) // checks if dummy equals the correct answer, if it does, picks a different value. the dummies here also don't overlap
  {
  DummyAnswerA = dummyKata[3].name;
  }
  
  if (DummyAnswerB == correctanswer)
  {
  DummyAnswerB = dummyKata[4].name;
  }
  
  if (DummyAnswerC == correctanswer)
  {
  DummyAnswerC = dummyKata[0].name;
  if (DummyAnswerC == DummyAnswerA) {
    DummyAnswerC = dummyKata[3].name;
    }
    if (DummyAnswerC == correctanswer) {
      DummyAnswerC = dummyKata[1].name;
      }
      if (DummyAnswerC == DummyAnswerB) {
        DummyAnswerC == dummyKata[4].name;
      }
  }
  

  document.getElementById("option2").innerHTML= DummyAnswerA;
  document.getElementById("option3").innerHTML= DummyAnswerB; 
  document.getElementById("option4").innerHTML= DummyAnswerC;
 } 
}
shuffle(answerPlacement);

  if (answerPlacement[0] == 1) {
    document.getElementById("option1").classList= "";
    document.getElementById("option2").classList= "";
    document.getElementById("option3").classList= "";
    document.getElementById("option4").classList= "";
    document.getElementById("option1").classList.add("button1");
    document.getElementById("option2").classList.add("button2");
    document.getElementById("option3").classList.add("button3");
    document.getElementById("option4").classList.add("button4");
  }
  if (answerPlacement[0] == 2) {
    document.getElementById("option1").classList= "";
    document.getElementById("option2").classList= "";
    document.getElementById("option3").classList= "";
    document.getElementById("option4").classList= "";
    document.getElementById("option1").classList.add("button2");
    document.getElementById("option2").classList.add("button3");
    document.getElementById("option3").classList.add("button4");
    document.getElementById("option4").classList.add("button1");
  }
  if (answerPlacement[0] == 3) {
    document.getElementById("option1").classList= "";
    document.getElementById("option2").classList= "";
    document.getElementById("option3").classList= "";
    document.getElementById("option4").classList= "";
    document.getElementById("option1").classList.add("button3");
    document.getElementById("option2").classList.add("button4");
    document.getElementById("option3").classList.add("button1");
    document.getElementById("option4").classList.add("button2");
  }
  if (answerPlacement[0] == 4) {
    document.getElementById("option1").classList= "";
    document.getElementById("option2").classList= "";
    document.getElementById("option3").classList= "";
    document.getElementById("option4").classList= "";
    document.getElementById("option1").classList.add("button4");
    document.getElementById("option2").classList.add("button1");
    document.getElementById("option3").classList.add("button2");
    document.getElementById("option4").classList.add("button3");
  }
}



function correct() {
  if (questioncounter < maxQuestionCount)
    {
document.getElementById("answerstatus").style.display= "block";
document.getElementById("answerstatus").innerHTML= "Correct Answer!";
document.getElementById("circle").style.display= "block";
document.getElementById("circle").classList.add("fade-Out");
setTimeout(removeRAC, 1000);
    }
  else if (questioncounter >= maxQuestionCount)
  {
    document.getElementById("option1").style.display="none";
    document.getElementById("option2").style.display="none"; 
    document.getElementById("option3").style.display="none";
    document.getElementById("option4").style.display="none";
    document.getElementById("answerContainer").style.display="none";
    document.getElementById("answerstatus").innerHTML= "Your Score:";
    document.getElementById("wynik").innerHTML= "Congratulations, you finished the test!";
  }
	
}

function incorrect()
{
if (questioncounter < maxQuestionCount)
    {
document.getElementById("answerstatus").style.display= "block";
document.getElementById("answerstatus").innerHTML= "Wrong Answer!";
document.getElementById("cross").style.display= "block";
document.getElementById("cross").classList.add("fade-Out");
setTimeout(removeWAC, 1000);
 }
  else if (questioncounter >= maxQuestionCount)
  {
    document.getElementById("option1").style.display="none";
    document.getElementById("option2").style.display="none"; 
    document.getElementById("option3").style.display="none";
    document.getElementById("option4").style.display="none";
    document.getElementById("answerContainer").style.display="none";
    document.getElementById("answerstatus").innerHTML= "Your Score:";
    document.getElementById("wynik").innerHTML= "Congratulations, you finished the test!";
  }
}


function removeRAC() {
  document.getElementById("circle").style.opacity="0";
  document.getElementById("circle").style.display="none";
}

function removeWAC() {
  document.getElementById("cross").style.opacity="0";
  document.getElementById("cross").style.display="none";
}
