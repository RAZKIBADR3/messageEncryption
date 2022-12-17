alpha = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
function crepter(){
    inputCre = document.getElementById("inputCre").value;
    if(inputCre!=''){
        inputCre = inputCre.toLowerCase();
        cleCre = document.getElementById("cleCre").value;
        span = document.querySelectorAll(".progress_bar > span")[0];
        progress_number = document.querySelectorAll(".progress_number")[0];
        progress(span,progress_number);
        char = [];
        for(i=0;i<inputCre.length;i++){
            char.push(inputCre[i]);
        }
        output = new Array(char.length);
        pos1 = new Number();pos1 = new Number();
        for(i=0;i<char.length;i++){
            pos1 = alpha.indexOf(char[i]);
            pos2 = pos1 + Number(cleCre);
            if(pos2 == -1){
                output[i] = " ";
            }else{
                output[i] = alpha[pos2];
            }
        }
        result = "";
        for(i=0; i<output.length; i++){
            result += output[i] + "";
        }
        setTimeout(function(){run();}, 3200);
        function run(){
            document.getElementById("outputCre").value = result;
        }
    }else{
        alert('type first')
    }
}

function decrepter(){
    inputDec = document.getElementById("inputDec").value;
    if(inputDec!=''){
        cleDec = document.getElementById("cleDec").value;
        span = document.querySelectorAll(".progress_bar > span")[1];
        progress_number = document.querySelectorAll(".progress_number")[1];
        progress(span,progress_number);
        char = [];
        for(i=0;i<inputDec.length;i++){
            char.push(inputDec[i]);
        }
        output = new Array(char.length);
        pos1 = new Number();pos1 = new Number();
        for(i=0;i<char.length;i++){
            pos1 = alpha.indexOf(char[i]);
            pos2 = pos1 - Number(cleDec);
            if(pos2 == -1){
                output[i] = " ";
            }else{
                output[i] = alpha[pos2];
            }
        }
        result = "";
        for(i=0; i<output.length; i++){
            result += output[i] + "";
        }
        setTimeout(function(){run();}, 3200);
        function run(){
            document.getElementById("outputDec").value = result;
        }
    }else{
        alert('type first')
    }
}

function progress(span,progress_number){
    var i = 0;
    if (i == 0){
        i = 1;
        var width = 0;
        var id = setInterval(frame, 20);
        function frame() {
            if (width >= 100) {
                clearInterval(id);
                i = 0;
            }else {
                width++;
                span.style.width = width + "%";
                progress_number.innerHTML = width + "%";
            }
        }
    }
}