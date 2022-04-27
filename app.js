
/* Button_events start*/
function color_change(color){
    document.getElementById("color").style.color = color;
}
/* Button_events end*/

/* html with JS start*/
function date(a,b){
    let date = document.getElementById('date');
    for(let i=a;i<=b;i++){
    let option = document.createElement('option');
    let optionText = document.createTextNode(i);
    option.appendChild(optionText)
    date.appendChild(option)
    }
}
date(1,31)
/* html with JS end*/

/* result calculation start*/
function checkResult(){
    var Bangla= document.getElementById('num').value;
if(Bangla >= 80 && Bangla <= 100){
    document.getElementById('result').innerHTML= 'Bangla = A+'
}else if(Bangla >= 70 && Bangla <= 79){
    document.getElementById('result').innerHTML= 'Bangla = A'
}else if(Bangla >= 60 && Bangla <= 69){
    document.getElementById('result').innerHTML= 'Bangla = A-'
}else if(Bangla >= 50 && Bangla <= 59){
    document.getElementById('result').innerHTML= 'Bangla = B'
}else if(Bangla >= 40 && Bangla <= 49){
    document.getElementById('result').innerHTML= 'Bangla = C'
}else if(Bangla >= 33 && Bangla <= 39){
    document.getElementById('result').innerHTML= 'Bangla = D'
}else if(Bangla >= 1 && Bangla <= 32){
    document.getElementById('result').innerHTML= 'Bangla = Fail'
}else{
    document.getElementById('result').innerHTML= 'Invalid Number'
}
}
/* result calculation end*/

/* final result start*/
function show_result(){
    let ban = document.getElementById('ban').value;
    let eng = document.getElementById('eng').value;
    let fin = document.getElementById('fin').value;
    let acc = document.getElementById('acc').value;
    let mng = document.getElementById('mng').value;

if( ban>100 || eng>100 || fin>100 || acc>100 || acc>100 || mng>100){
    alert("Please Enter Mark in range of 100")
}


    let to = parseFloat(ban)+parseFloat(eng)+parseFloat(fin)+parseFloat(acc)+parseFloat(mng);
    
    let av = to/5

    if(av >= 80 && av <= 100){
        document.getElementById('gra').innerHTML= "A+"
    }else if(av >= 70 && av <= 79){
        document.getElementById('gra').innerHTML="A"
    }else if(av >= 60 && av <= 69){
        document.getElementById('gra').innerHTML= "A-"
    }else if(av >= 50 && av <= 59){
        document.getElementById('gra').innerHTML="B"
    }else if(av >= 40 && av <= 49){
        document.getElementById('gra').innerHTML="C"
    }else if(av >= 33 && av <= 39){
        document.getElementById('gra').innerHTML="D"
    }else if(av >= 1 && av <= 32){
        document.getElementById('gra').innerHTML="F"
    }

    document.getElementById('to').innerHTML= to;
    document.getElementById('av').innerHTML= av;

    if(av > 33){
        document.querySelector('.f-result h2').innerHTML= "You are passed";
    }else if(av < 33){
        document.querySelector('.f-result h2').innerHTML= "You are failed";
    }
}
/* final result end*/




