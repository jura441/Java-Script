/*Task 1*/
function string_statistics(){
    var text = prompt("Введите любое количество разных символов на английской раскладке");
        letters = 0;
        digits = 0;
        other = 0;

    for (let i = 0; i < text.length; i++){
        if (text[i].charCodeAt(0) >= 65 && text[i].charCodeAt(0) <= 90){
            letters++;
        }else if (text[i].charCodeAt(0) >= 97 && text[i].charCodeAt(0) <= 122){
            letters++;
        }else if (text[i].charCodeAt(0) >= 48 && text[i].charCodeAt(0) <= 57){
            digits++;
        }else{
            other++;
        }
    }
    console.log(`Количество букв: ${letters}`);
    console.log(`Количество цифр: ${digits}`);
    console.log(`Количество других знаков: ${other}`);
}
/*Task 3*/
function MSG(){
    var text = prompt("Введите любое количество разных символов на английской раскладке"),
    msg_text = "";
    
    for(let i = 0; i < text.length; i++){
        if(text[i].charCodeAt(0) >= 65 && text[i].charCodeAt(0) <= 90){
            msg_text += String.fromCharCode(text[i].charCodeAt(0) + 32);
        }else if(text[i].charCodeAt(0) >= 97 && text[i].charCodeAt(0) <= 122){
            msg_text += String.fromCharCode(text[i].charCodeAt(0) - 32);
        }else if(text[i].charCodeAt(0) >= 48 && text[i].charCodeAt(0) <= 57){
            msg_text += "_";
        }else{
            msg_text += text[i];
        }
    }
    console.log(msg_text);
}
/*Task 4*/
function CSS_style(){
    let style = prompt("Введите CSS стиль с дефисом"),
        cc_style = "",
        ind = 0;

    style = style.trim();
    ind = style.indexOf("-");
    cc_style = style.slice(0, ind) + style[ind + 1].toLocaleUpperCase() + style.slice(ind + 2);
    console.log(cc_style);
}

/*Task 9*/
function slash(){
    let text = prompt("Введите строку"),
        len = text.length,
        sep = prompt("Введите разделитель"),
        arr = [],
        ind = 0;

    for (let i = 0; i < len; i++) {
        if (text[i] == sep) {
            arr.push(text.slice(ind, i));
            ind = i + 1;
        }else if(i == (len - 1)){
            arr.push(text.slice(ind));
        }        
    }
    console.log(arr);
}


