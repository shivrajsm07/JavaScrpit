num = 12321;
k = num;
rev = 0;
do
    {
        rem = num % 10;
        rev = rev * 10 + rem;
        num = Math.floor(num / 10);     
    }
    while(num > 0)
        if(k == rev)
            console.log("Palindrome");
        else
            console.log("Not Palindrome");


            