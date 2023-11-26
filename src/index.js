console.log('Write your code here');

fetch('http://127.0.0.1:3000/current-exhibits')
.then(resp => resp.json())
.then(exhibits => {
    exhibits.forEach(exhibit => {

    const title = document.getElementById('exhibit-title')
    const description = document.getElementById('exhibit-description')
    const image = document.getElementById('exhibit-image')
    const tickets = document.getElementById('tickets-bought')
    const comments = document.getElementById('comments-section')
    const commentPElement = document.createElement('p')

    title.textContent = exhibit.title
    description.textContent = exhibit.description
    image.src = exhibit.image
    tickets.textContent = exhibit.tickets_bought
    
    commentPElement.textContent = exhibit.comments
    comments.appendChild(commentPElement)


})

})