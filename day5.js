function getAnswers()
{
    q = document.getElementById('q')
    q.textContent = 'Answers'

    q1 = document.getElementById('q1')
    q1.textContent = 'byte - 1byte'

    q2 = document.getElementById('q2')
    q2.textContent = 'int - 4bytes'

    q3 = document.getElementById('q3')
    q3.textContent = 'double - 8bytes'
}

function goDark()
{
    container = document.getElementById('container')
    container.style.backgroundColor = 'black'
    container.style.color = 'white'

}