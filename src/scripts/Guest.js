export const Guest = (guest) => {
    return `
    <div id="guestCard">
        Name: ${guest.name}<br>
        Age: ${guest.age}<br>
        Favorite Food:${guest.favDish}<br>
        Right-handed? ${guest.rHand}<br>
        Image: ${guest.imgUrl}<br>
    </div>`
}