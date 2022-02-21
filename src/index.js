module.exports = function reverse(n) {

   
    if (n < 0) {

        n = n * (-1);
    }

    let numToStr = String(n);
    
    let i = numToStr.length - 1;

    let totalStr = '';
    
        while(i >= 0) {
    
            totalStr = `${totalStr}${numToStr[i]}`;
            
            i = i - 1;

        }
    
    let strToNum = Number(totalStr);

    return strToNum;
    
}


        

