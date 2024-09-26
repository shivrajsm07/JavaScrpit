// function handleSubmit() {
//     let form = document.getElementById('myForm');
//     let data = new FormData(form);

//     let username = data.get('username');
//     let email = data.get('email');

//     // alert('Name: ' + name + ' , Email: '+ email)
//     alert(`username:  ${username} , Email: ${email}`)
// }



function handleSubmit() {
        let form = document.getElementById('myForm');
        let data = new FormData(form);

        let username = data.get('username');
        let email = data.get('email');
        let password = data.get('password');


        // validating username

        if(username!= '')
        {
            if (username.length < 5) {
                alert('Too short - Username should have minimum 5 characters');
            }
            else if(username.length > 12)
            {
                alert('Too long - Username should have maximum 12 characters');
            }
            else{
                alert('Valid Username');
            }
        }
        else{
            alert('Please provide a Username');
        }


    //    password  validation :

    if (password!='') 
    {
        if (password.length < 8 || password.length > 15) {
            alert('Too short - password should have minimum 8 characters & maximum 15');
        }
        else if(password.length > 15)
        {
            alert('Too long - password should have maximum 15 characters');
        }
        else if(!/[a-z]/.test(password))
        {
            alert('no lower case found');
        }
        else if(!/[A-Z]/.test(password))
        {
            alert('no upper case found');
        }
        else if(!/[0-9]/.test(password))
        {
            alert('no digit found');
        }
        else if(!/[_@]/.test(password))
        {
            alert('no special character found')
        }
        else
        {
            alert('Valid password');
        }
    }
    else
    {
        alert('Please provide a passowrd!');
    }
}

