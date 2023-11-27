const detailComment = document.getElementById('comments-section')
        const detailPElement = document.createElement('p')

fetch('http://127.0.0.1:3000/current-exhibits')
.then(resp => resp.json())
.then(exhibits => {
    exhibits.forEach(art => {
        const detailTitle = document.getElementById('exhibit-title')
        const detailImage = document.getElementById('exhibit-image')
        const detailDescription = document.getElementById('exhibit-description')

        

        detailTitle.textContent = art.title
        detailImage.src = art.image
        detailDescription.textContent = art.description

        detailPElement.textContent = art.comments

        detailComment.appendChild(detailPElement)
    })

    const commentForm = document.getElementById('comment-form')
    commentForm.addEventListener('submit', e => {
        e.preventDefault()
        const detailPElement = document.createElement('p')
        detailPElement.textContent = e.target[0].value
        detailComment.appendChild(detailPElement)

        commentForm.reset()
    })


    const tixButton = document.getElementById('buy-tickets-button')
    tixButton.addEventListener('click', e => {
        const tixBoughtElement = document.getElementById('tickets-bought')
        let currentTixBought = Number(tixBoughtElement.textContent.split(' ')[0])
        currentTixBought += 1
        tixBoughtElement.textContent = `${currentTixBought} Tickets Bought`
    })


})
























































// console.log('Write your code here');

// fetch('http://127.0.0.1:3000/current-exhibits')
// .then(resp => resp.json())
// .then(exhibits => {
//     exhibits.forEach(exhibit => {

//     const title = document.getElementById('exhibit-title')
//     const description = document.getElementById('exhibit-description')
//     const image = document.getElementById('exhibit-image')
//     const tickets = document.getElementById('tickets-bought')
//     const comments = document.getElementById('comments-section')
//     const commentPElement = document.createElement('p')

//     title.textContent = exhibit.title
//     description.textContent = exhibit.description
//     image.src = exhibit.image
//     tickets.textContent = exhibit.tickets_bought
    
//     commentPElement.textContent = exhibit.comments
//     comments.appendChild(commentPElement)

// })
//     const commentForm = document.getElementById('comment-form')
//     const commentSection = document.getElementById('comments-section')
//     commentForm.addEventListener('submit', e => {
//         e.preventDefault()

//         const pElement = document.createElement('p')
//         pElement.textContent = e.target[0].value
//         commentSection.appendChild(pElement)

//         commentForm.reset()
//     } )

//     //3
//     const tixButton = document.getElementById('buy-tickets-button')
//     tixButton.addEventListener('click', e => {

//         const tixBought = document.getElementById('tickets-bought')
//         let sum = Number(tixBought.textContent.split(' ')[0])
//         console.log(sum)
//         sum += 1
//         tixBought.textContent = `${sum} Tickets Bought`

//     })


// })