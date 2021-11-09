import { Guest } from "./Guest.js"
import { fetchGuests, guestList } from "./GuestProvider.js"


const guestTarget = document.querySelector(".guestContainer")

export const guestPost = () => {
    fetchGuests().then(() => {
        let guestArray = guestList()
        let GuestHTML = ""
        guestArray.forEach((singleGuest) => {
            GuestHTML += Guest(singleGuest)
        })
        guestTarget.innerHTML = GuestHTML
    })
}