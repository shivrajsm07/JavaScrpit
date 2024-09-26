num = 2567;
rev = 0;
while(num > 0)
    {
        rem = num % 10;
        rev = rev * 10 + rem;
        num = Math.floor(num / 10);     
    }
    console.log(rev);