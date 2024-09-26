function change()
{
//    container = document.getElementById('container');
//    container.style.backgroundColor = 'grey';
//    container.style.color ='white';

//     heading = document.getElementsByClassName('heading');

//     for(i=0 ; i < heading.length; i++)
//     {
//         heading[i].style.color = 'blue';
//     }

//     paras =  document.getElementsByTagName('p');
//     for(i = 0; i < paras.length; i++)
//     {
//         paras[i].style.color = 'red';
//     }

    //c = document.querySelector('#container')
    //c = document.querySelector('.content')

    
    c = document.querySelector('div')
    c.style.backgroundColor = 'yellow'

    para = document.querySelectorAll('p')
    for(i = 0; i < para.length; i++)
    {
        para[i].style.color = 'blue'
    }

    headings = document.querySelectorAll('.heading')
    for( i = 0; i < headings.length; i++)
    {
        headings[i].style.color = 'brown'
    }


}