

/*function changeColor()
{
    this.style.background = "#4169E1";
}

function revertColor()
{
    this.style.background = "#000066";
}
*/
const hiragana = [{name:"あ", odp:"a"},{name:"い",odp:"i"},{name:"う",odp:"u"},{name:"え",odp:"e"},{name:"お",odp:"o"},{name:"か",odp:"ka"},{name:"き",odp:"ki"},{name:"く",odp:"ku"},{name:"け",odp:"ke"},{name:"こ",odp:"ko"},{name:"さ",odp:"sa"},{name:"し",odp:"shi"},{name:"す",odp:"su"},{name:"せ",odp:"se"},{ name:"そ",odp:"so"},{ name:"た",odp:"ta"},{ name:"ち",odp:"chi"},{ name:"つ",odp:"tsu"},{ name:"て",odp:"te"},{ name:"と",odp:"to"},{ name:"な",odp:"na"},{ name:"に",odp:"ni"},{ name:"ぬ",odp:"nu"},{ name:"ね",odp:"ne"},{ name:"の",odp:"no"},{ name:"は",odp:"ha"},{ name:"ひ",odp:"hi"},{ name:"ふ",odp:"fu"},{ name:"へ",odp:"he"},{ name:"ほ",odp:"ho"},{ name:"ま",odp:"ma"},{ name:"み",odp:"mi"},{ name:"む",odp:"mu"},{ name:"め",odp:"me"},{ name:"も",odp:"mo"},{ name:"や",odp:"ya"},{ name:"ゆ",odp:"yu"},{ name:"よ",odp:"yo"},{ name:"ら",odp:"ra"},{ name:"り",odp:"ri"},{ name:"る",odp:"ru"},{ name:"れ",odp:"re"},{ name:"ろ",odp:"ro"},{ name:"わ",odp:"wa"},{ name:"を",odp:"wo"},{ name:"ん",odp:"n"}];


function BigCharacter()
{
    var mystring = this.id;
    mystring = mystring.replace('1','');
    document.getElementById("bigCharacter").innerHTML = this.innerHTML + " " + mystring;
    
}

/*
document.getElementById("a").addEventListener("mouseenter", changeColor);
document.getElementById("a").addEventListener("mouseout", revertColor);

document.getElementById("i").addEventListener("mouseenter", changeColor);
document.getElementById("i").addEventListener("mouseout", revertColor);

document.getElementById("u").addEventListener("mouseenter", changeColor);
document.getElementById("u").addEventListener("mouseout", revertColor);

document.getElementById("e").addEventListener("mouseenter", changeColor);
document.getElementById("e").addEventListener("mouseout", revertColor);

document.getElementById("o").addEventListener("mouseenter", changeColor);
document.getElementById("o").addEventListener("mouseout", revertColor);

document.getElementById("ka").addEventListener("mouseenter", changeColor);
document.getElementById("ka").addEventListener("mouseout", revertColor);

document.getElementById("ki").addEventListener("mouseenter", changeColor);
document.getElementById("ki").addEventListener("mouseout", revertColor);

document.getElementById("ku").addEventListener("mouseenter", changeColor);
document.getElementById("ku").addEventListener("mouseout", revertColor);

document.getElementById("ke").addEventListener("mouseenter", changeColor);
document.getElementById("ke").addEventListener("mouseout", revertColor);

document.getElementById("ko").addEventListener("mouseenter", changeColor);
document.getElementById("ko").addEventListener("mouseout", revertColor);

document.getElementById("sa").addEventListener("mouseenter", changeColor);
document.getElementById("sa").addEventListener("mouseout", revertColor);

document.getElementById("shi").addEventListener("mouseenter", changeColor);
document.getElementById("shi").addEventListener("mouseout", revertColor);

document.getElementById("su").addEventListener("mouseenter", changeColor);
document.getElementById("su").addEventListener("mouseout", revertColor);

document.getElementById("se").addEventListener("mouseenter", changeColor);
document.getElementById("se").addEventListener("mouseout", revertColor);

document.getElementById("so").addEventListener("mouseenter", changeColor);
document.getElementById("so").addEventListener("mouseout", revertColor);

document.getElementById("ta").addEventListener("mouseenter", changeColor);
document.getElementById("ta").addEventListener("mouseout", revertColor);

document.getElementById("chi").addEventListener("mouseenter", changeColor);
document.getElementById("chi").addEventListener("mouseout", revertColor);

document.getElementById("tsu").addEventListener("mouseenter", changeColor);
document.getElementById("tsu").addEventListener("mouseout", revertColor);

document.getElementById("te").addEventListener("mouseenter", changeColor);
document.getElementById("te").addEventListener("mouseout", revertColor);

document.getElementById("to").addEventListener("mouseenter", changeColor);
document.getElementById("to").addEventListener("mouseout", revertColor);

document.getElementById("na").addEventListener("mouseenter", changeColor);
document.getElementById("na").addEventListener("mouseout", revertColor);

document.getElementById("ni").addEventListener("mouseenter", changeColor);
document.getElementById("ni").addEventListener("mouseout", revertColor);

document.getElementById("nu").addEventListener("mouseenter", changeColor);
document.getElementById("nu").addEventListener("mouseout", revertColor);

document.getElementById("ne").addEventListener("mouseenter", changeColor);
document.getElementById("ne").addEventListener("mouseout", revertColor);

document.getElementById("no").addEventListener("mouseenter", changeColor);
document.getElementById("no").addEventListener("mouseout", revertColor);

document.getElementById("ha").addEventListener("mouseenter", changeColor);
document.getElementById("ha").addEventListener("mouseout", revertColor);

document.getElementById("hi").addEventListener("mouseenter", changeColor);
document.getElementById("hi").addEventListener("mouseout", revertColor);

document.getElementById("fu").addEventListener("mouseenter", changeColor);
document.getElementById("fu").addEventListener("mouseout", revertColor);

document.getElementById("he").addEventListener("mouseenter", changeColor);
document.getElementById("he").addEventListener("mouseout", revertColor);

document.getElementById("ho").addEventListener("mouseenter", changeColor);
document.getElementById("ho").addEventListener("mouseout", revertColor);

document.getElementById("ma").addEventListener("mouseenter", changeColor);
document.getElementById("ma").addEventListener("mouseout", revertColor);

document.getElementById("mi").addEventListener("mouseenter", changeColor);
document.getElementById("mi").addEventListener("mouseout", revertColor);

document.getElementById("mu").addEventListener("mouseenter", changeColor);
document.getElementById("mu").addEventListener("mouseout", revertColor);

document.getElementById("me").addEventListener("mouseenter", changeColor);
document.getElementById("me").addEventListener("mouseout", revertColor);

document.getElementById("mo").addEventListener("mouseenter", changeColor);
document.getElementById("mo").addEventListener("mouseout", revertColor);

document.getElementById("ya").addEventListener("mouseenter", changeColor);
document.getElementById("ya").addEventListener("mouseout", revertColor);

document.getElementById("yu").addEventListener("mouseenter", changeColor);
document.getElementById("yu").addEventListener("mouseout", revertColor);

document.getElementById("yo").addEventListener("mouseenter", changeColor);
document.getElementById("yo").addEventListener("mouseout", revertColor);

document.getElementById("ra").addEventListener("mouseenter", changeColor);
document.getElementById("ra").addEventListener("mouseout", revertColor);

document.getElementById("ri").addEventListener("mouseenter", changeColor);
document.getElementById("ri").addEventListener("mouseout", revertColor);

document.getElementById("ru").addEventListener("mouseenter", changeColor);
document.getElementById("ru").addEventListener("mouseout", revertColor);

document.getElementById("re").addEventListener("mouseenter", changeColor);
document.getElementById("re").addEventListener("mouseout", revertColor);

document.getElementById("ro").addEventListener("mouseenter", changeColor);
document.getElementById("ro").addEventListener("mouseout", revertColor);

document.getElementById("wa").addEventListener("mouseenter", changeColor);
document.getElementById("wa").addEventListener("mouseout", revertColor);

document.getElementById("wo").addEventListener("mouseenter", changeColor);
document.getElementById("wo").addEventListener("mouseout", revertColor);

document.getElementById("n").addEventListener("mouseenter", changeColor);
document.getElementById("n").addEventListener("mouseout", revertColor);





document.getElementById("a1").addEventListener("mouseenter", changeColor);
document.getElementById("a1").addEventListener("mouseout", revertColor);

document.getElementById("i1").addEventListener("mouseenter", changeColor);
document.getElementById("i1").addEventListener("mouseout", revertColor);

document.getElementById("u1").addEventListener("mouseenter", changeColor);
document.getElementById("u1").addEventListener("mouseout", revertColor);

document.getElementById("e1").addEventListener("mouseenter", changeColor);
document.getElementById("e1").addEventListener("mouseout", revertColor);

document.getElementById("o1").addEventListener("mouseenter", changeColor);
document.getElementById("o1").addEventListener("mouseout", revertColor);

document.getElementById("ka1").addEventListener("mouseenter", changeColor);
document.getElementById("ka1").addEventListener("mouseout", revertColor);

document.getElementById("ki1").addEventListener("mouseenter", changeColor);
document.getElementById("ki1").addEventListener("mouseout", revertColor);

document.getElementById("ku1").addEventListener("mouseenter", changeColor);
document.getElementById("ku1").addEventListener("mouseout", revertColor);

document.getElementById("ke1").addEventListener("mouseenter", changeColor);
document.getElementById("ke1").addEventListener("mouseout", revertColor);

document.getElementById("ko1").addEventListener("mouseenter", changeColor);
document.getElementById("ko1").addEventListener("mouseout", revertColor);

document.getElementById("sa1").addEventListener("mouseenter", changeColor);
document.getElementById("sa1").addEventListener("mouseout", revertColor);

document.getElementById("shi1").addEventListener("mouseenter", changeColor);
document.getElementById("shi1").addEventListener("mouseout", revertColor);

document.getElementById("su1").addEventListener("mouseenter", changeColor);
document.getElementById("su1").addEventListener("mouseout", revertColor);

document.getElementById("se1").addEventListener("mouseenter", changeColor);
document.getElementById("se1").addEventListener("mouseout", revertColor);

document.getElementById("so1").addEventListener("mouseenter", changeColor);
document.getElementById("so1").addEventListener("mouseout", revertColor);

document.getElementById("ta1").addEventListener("mouseenter", changeColor);
document.getElementById("ta1").addEventListener("mouseout", revertColor);

document.getElementById("chi1").addEventListener("mouseenter", changeColor);
document.getElementById("chi1").addEventListener("mouseout", revertColor);

document.getElementById("tsu1").addEventListener("mouseenter", changeColor);
document.getElementById("tsu1").addEventListener("mouseout", revertColor);

document.getElementById("te1").addEventListener("mouseenter", changeColor);
document.getElementById("te1").addEventListener("mouseout", revertColor);

document.getElementById("to1").addEventListener("mouseenter", changeColor);
document.getElementById("to1").addEventListener("mouseout", revertColor);

document.getElementById("na1").addEventListener("mouseenter", changeColor);
document.getElementById("na1").addEventListener("mouseout", revertColor);

document.getElementById("ni1").addEventListener("mouseenter", changeColor);
document.getElementById("ni1").addEventListener("mouseout", revertColor);

document.getElementById("nu1").addEventListener("mouseenter", changeColor);
document.getElementById("nu1").addEventListener("mouseout", revertColor);

document.getElementById("ne1").addEventListener("mouseenter", changeColor);
document.getElementById("ne1").addEventListener("mouseout", revertColor);

document.getElementById("no1").addEventListener("mouseenter", changeColor);
document.getElementById("no1").addEventListener("mouseout", revertColor);

document.getElementById("ha1").addEventListener("mouseenter", changeColor);
document.getElementById("ha1").addEventListener("mouseout", revertColor);

document.getElementById("hi1").addEventListener("mouseenter", changeColor);
document.getElementById("hi1").addEventListener("mouseout", revertColor);

document.getElementById("fu1").addEventListener("mouseenter", changeColor);
document.getElementById("fu1").addEventListener("mouseout", revertColor);

document.getElementById("he1").addEventListener("mouseenter", changeColor);
document.getElementById("he1").addEventListener("mouseout", revertColor);

document.getElementById("ho1").addEventListener("mouseenter", changeColor);
document.getElementById("ho1").addEventListener("mouseout", revertColor);

document.getElementById("ma1").addEventListener("mouseenter", changeColor);
document.getElementById("ma1").addEventListener("mouseout", revertColor);

document.getElementById("mi1").addEventListener("mouseenter", changeColor);
document.getElementById("mi1").addEventListener("mouseout", revertColor);

document.getElementById("mu1").addEventListener("mouseenter", changeColor);
document.getElementById("mu1").addEventListener("mouseout", revertColor);

document.getElementById("me1").addEventListener("mouseenter", changeColor);
document.getElementById("me1").addEventListener("mouseout", revertColor);

document.getElementById("mo1").addEventListener("mouseenter", changeColor);
document.getElementById("mo1").addEventListener("mouseout", revertColor);

document.getElementById("ya1").addEventListener("mouseenter", changeColor);
document.getElementById("ya1").addEventListener("mouseout", revertColor);

document.getElementById("yu1").addEventListener("mouseenter", changeColor);
document.getElementById("yu1").addEventListener("mouseout", revertColor);

document.getElementById("yo1").addEventListener("mouseenter", changeColor);
document.getElementById("yo1").addEventListener("mouseout", revertColor);

document.getElementById("ra1").addEventListener("mouseenter", changeColor);
document.getElementById("ra1").addEventListener("mouseout", revertColor);

document.getElementById("ri1").addEventListener("mouseenter", changeColor);
document.getElementById("ri1").addEventListener("mouseout", revertColor);

document.getElementById("ru1").addEventListener("mouseenter", changeColor);
document.getElementById("ru1").addEventListener("mouseout", revertColor);

document.getElementById("re1").addEventListener("mouseenter", changeColor);
document.getElementById("re1").addEventListener("mouseout", revertColor);

document.getElementById("ro1").addEventListener("mouseenter", changeColor);
document.getElementById("ro1").addEventListener("mouseout", revertColor);

document.getElementById("wa1").addEventListener("mouseenter", changeColor);
document.getElementById("wa1").addEventListener("mouseout", revertColor);

document.getElementById("wo1").addEventListener("mouseenter", changeColor);
document.getElementById("wo1").addEventListener("mouseout", revertColor);

document.getElementById("n1").addEventListener("mouseenter", changeColor);
document.getElementById("n1").addEventListener("mouseout", revertColor);
*/







document.getElementById("a").addEventListener("mouseenter", BigCharacter);
document.getElementById("i").addEventListener("mouseenter", BigCharacter);
document.getElementById("u").addEventListener("mouseenter", BigCharacter);
document.getElementById("e").addEventListener("mouseenter", BigCharacter);
document.getElementById("o").addEventListener("mouseenter", BigCharacter);
document.getElementById("ka").addEventListener("mouseenter", BigCharacter);
document.getElementById("ki").addEventListener("mouseenter", BigCharacter);
document.getElementById("ku").addEventListener("mouseenter", BigCharacter);
document.getElementById("ke").addEventListener("mouseenter", BigCharacter);
document.getElementById("ko").addEventListener("mouseenter", BigCharacter);
document.getElementById("sa").addEventListener("mouseenter", BigCharacter);
document.getElementById("shi").addEventListener("mouseenter", BigCharacter);
document.getElementById("su").addEventListener("mouseenter", BigCharacter);
document.getElementById("se").addEventListener("mouseenter", BigCharacter);
document.getElementById("so").addEventListener("mouseenter", BigCharacter);
document.getElementById("ta").addEventListener("mouseenter", BigCharacter);
document.getElementById("chi").addEventListener("mouseenter", BigCharacter);
document.getElementById("tsu").addEventListener("mouseenter", BigCharacter);
document.getElementById("te").addEventListener("mouseenter", BigCharacter);
document.getElementById("to").addEventListener("mouseenter", BigCharacter);
document.getElementById("na").addEventListener("mouseenter", BigCharacter);
document.getElementById("ni").addEventListener("mouseenter", BigCharacter);
document.getElementById("nu").addEventListener("mouseenter", BigCharacter);
document.getElementById("ne").addEventListener("mouseenter", BigCharacter);
document.getElementById("no").addEventListener("mouseenter", BigCharacter);
document.getElementById("ha").addEventListener("mouseenter", BigCharacter);
document.getElementById("hi").addEventListener("mouseenter", BigCharacter);
document.getElementById("fu").addEventListener("mouseenter", BigCharacter);
document.getElementById("he").addEventListener("mouseenter", BigCharacter);
document.getElementById("ho").addEventListener("mouseenter", BigCharacter);
document.getElementById("ma").addEventListener("mouseenter", BigCharacter);
document.getElementById("mi").addEventListener("mouseenter", BigCharacter);
document.getElementById("mu").addEventListener("mouseenter", BigCharacter);
document.getElementById("me").addEventListener("mouseenter", BigCharacter);
document.getElementById("mo").addEventListener("mouseenter", BigCharacter);
document.getElementById("ya").addEventListener("mouseenter", BigCharacter);
document.getElementById("yu").addEventListener("mouseenter", BigCharacter);
document.getElementById("yo").addEventListener("mouseenter", BigCharacter);
document.getElementById("ra").addEventListener("mouseenter", BigCharacter);
document.getElementById("ri").addEventListener("mouseenter", BigCharacter);
document.getElementById("ru").addEventListener("mouseenter", BigCharacter);
document.getElementById("re").addEventListener("mouseenter", BigCharacter);
document.getElementById("ro").addEventListener("mouseenter", BigCharacter);
document.getElementById("wa").addEventListener("mouseenter", BigCharacter);
document.getElementById("wo").addEventListener("mouseenter", BigCharacter);
document.getElementById("n").addEventListener("mouseenter", BigCharacter);



document.getElementById("a1").addEventListener("mouseenter", BigCharacter);
document.getElementById("i1").addEventListener("mouseenter", BigCharacter);
document.getElementById("u1").addEventListener("mouseenter", BigCharacter);
document.getElementById("e1").addEventListener("mouseenter", BigCharacter);
document.getElementById("o1").addEventListener("mouseenter", BigCharacter);
document.getElementById("ka1").addEventListener("mouseenter", BigCharacter);
document.getElementById("ki1").addEventListener("mouseenter", BigCharacter);
document.getElementById("ku1").addEventListener("mouseenter", BigCharacter);
document.getElementById("ke1").addEventListener("mouseenter", BigCharacter);
document.getElementById("ko1").addEventListener("mouseenter", BigCharacter);
document.getElementById("sa1").addEventListener("mouseenter", BigCharacter);
document.getElementById("shi1").addEventListener("mouseenter", BigCharacter);
document.getElementById("su1").addEventListener("mouseenter", BigCharacter);
document.getElementById("se1").addEventListener("mouseenter", BigCharacter);
document.getElementById("so1").addEventListener("mouseenter", BigCharacter);
document.getElementById("ta1").addEventListener("mouseenter", BigCharacter);
document.getElementById("chi1").addEventListener("mouseenter", BigCharacter);
document.getElementById("tsu1").addEventListener("mouseenter", BigCharacter);
document.getElementById("te1").addEventListener("mouseenter", BigCharacter);
document.getElementById("to1").addEventListener("mouseenter", BigCharacter);
document.getElementById("na1").addEventListener("mouseenter", BigCharacter);
document.getElementById("ni1").addEventListener("mouseenter", BigCharacter);
document.getElementById("nu1").addEventListener("mouseenter", BigCharacter);
document.getElementById("ne1").addEventListener("mouseenter", BigCharacter);
document.getElementById("no1").addEventListener("mouseenter", BigCharacter);
document.getElementById("ha1").addEventListener("mouseenter", BigCharacter);
document.getElementById("hi1").addEventListener("mouseenter", BigCharacter);
document.getElementById("fu1").addEventListener("mouseenter", BigCharacter);
document.getElementById("he1").addEventListener("mouseenter", BigCharacter);
document.getElementById("ho1").addEventListener("mouseenter", BigCharacter);
document.getElementById("ma1").addEventListener("mouseenter", BigCharacter);
document.getElementById("mi1").addEventListener("mouseenter", BigCharacter);
document.getElementById("mu1").addEventListener("mouseenter", BigCharacter);
document.getElementById("me1").addEventListener("mouseenter", BigCharacter);
document.getElementById("mo1").addEventListener("mouseenter", BigCharacter);
document.getElementById("ya1").addEventListener("mouseenter", BigCharacter);
document.getElementById("yu1").addEventListener("mouseenter", BigCharacter);
document.getElementById("yo1").addEventListener("mouseenter", BigCharacter);
document.getElementById("ra1").addEventListener("mouseenter", BigCharacter);
document.getElementById("ri1").addEventListener("mouseenter", BigCharacter);
document.getElementById("ru1").addEventListener("mouseenter", BigCharacter);
document.getElementById("re1").addEventListener("mouseenter", BigCharacter);
document.getElementById("ro1").addEventListener("mouseenter", BigCharacter);
document.getElementById("wa1").addEventListener("mouseenter", BigCharacter);
document.getElementById("wo1").addEventListener("mouseenter", BigCharacter);
document.getElementById("n1").addEventListener("mouseenter", BigCharacter);

