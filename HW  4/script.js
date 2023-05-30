window.addEventListener("DOMContentLoaded", (event)=> {
    /*Task 1
    console.log(NumbersCheck(1,3)); */
    
    /*Task 2
    console.log(Factorial(13)); */
    
    /*Task 3 
    console.log(ConcatNumbers(1,2,3));*/
    
    /*Task 4
    console.log(Rectangle(5,7));*/
    
    /*Task 5
    console.log(IsSuperNumber(6)); 
    console.log(IsSuperNumber(28));
    console.log(IsSuperNumber(496));*/
    
    /*Task 6
    console.log(IsSuperDiap(6,500));*/
    
    /*Task 7*/
    console.log(TimeReturn(12,35,35));
    
    /*Task 8*/
    console.log(Second(11,5,28)+ " секунд");
    
    /*Task 9*/
    console.log(Hours(39928));
    
    /*Task 10*/
    console.log(DateDiffer(10, 22, 3, 1, 2, 3));
    
    });
    
    //Task 1 
    function NumbersCheck(a, b) {
        if (!a || !b) return;
        if (a < b) return -1;
        if (a > b) return 1;
        if (a === b) return 0;
    }
    
    //Task 2 
    function Factorial(number)
    {
        if (!number) return;
        let i = 1;
        let result = i;
        while (i < number) {
            i++;
            result = result * i;
        }
        return result;
    }
    
    //Task 3 
    function ConcatNumbers (n1,n2,n3) 
    {
        return Number(n1 + "" + n2 + "" + n3);
    }
    
    //Task 4 
    function Rectangle(height, length) {
        if (length === undefined) return height ** 2;
        return height * length;
    }
    
    //Task 5 
    function IsSuperNumber(number) {
        let divisionsMassive = [];
        let sum = 0;
        for (let i = 1; i < number; i++) {
            if (number % i == 0) {
                divisionsMassive.push(i);
            }
        }
        for (let i = 0; i < divisionsMassive.length; i++) {
            sum += divisionsMassive[i];
        }
        if (number == sum) {
            return true;
        }    
        return false;
    }
    
    //Task 6 
    function IsSuperDiap(min, max)
    {
        if(!min || !max) return "Не соответствует диапазону";
        let number = min; let result=0;
        while(number<max){
            number++;
            if(IsSuperNumber(number)) console.log(number);
        }
    }
    
    //Task 7 
    function TimeReturn(h, m, s) {
        
        if (!m) m = '00';
        if (!s) s = '00';
        // return validateTime(h) + ':' + validateTime(m) + ':' + validateTime(s);
        return h + ":" + m  + ":" + s;
    }
       
    //Task 8 
    function Second(h, m, s) {
        return  h * 3600 + m * 60 + s;
    }
    
    //Task 9 
    function Hours(sec) {
    
        let hours = Math.floor(sec / 3600);
        let min = Math.floor(sec / 60) - hours * 60;
        let second = sec - (hours * 3600) - (min * 60);
        return TimeReturn(hours, min, second);
    }
    
    //Task 10 
    function DateDiffer(fHour, fMin, fSec, sHour, sMin, sSec) {
        const SecondFirst = Second(fHour, fMin, fSec);
        const SecondSecond = Second(sHour, sMin, sSec);
        let ForSandF = SecondFirst + SecondSecond;
        console.log(ForSandF);
        const secondDiffer = SecondFirst - SecondSecond;
        return Hours(secondDiffer);
    }