g = 1
function addGuest()
{
    newGuest = document.createElement('li');
    newGuest.textContent = 'Guest ' + g;

    gList = document.querySelector('ul');
    gList.appendChild(newGuest);
    g++;
}


function removeGuest()
{
    gList = document.querySelector('ul');
    lastGuest = gList.lastElementChild;
    gList.removeChild(lastGuest)

    g = g - 1;
}