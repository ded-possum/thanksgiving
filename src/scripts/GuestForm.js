import { guestList, saveGuest } from "./GuestProvider.js"
import { guestPost } from "./GuestHTML.js"

const contentTarget = document.querySelector(".addGuest")

export const guestForm = () => {
    contentTarget.innerHTML = `
    <section class="guestForm">
    <div id="nameEntry">
        <label for="nameEntry">Name of Guest:</label>
        <input type="text" id="nameEntryField">
    </div>

    <div id=ageEntry>
        <label for="ageEntry">Age:</label>
        <input type="text" id="ageEntryField">
    </div>

    <div id=dishEntry>
        <label for="dishEntry">Favorite Dish:</label>
        <input type="text" id="dishEntryField">
    </div>

    <div id=rHandEntry>
        <label for="rHandEntry">Right-Handed?</label>
        <select name="Guest Dominant Hand" id="hand">
            <option value="right">true</option>
            <option value="left">false</option>
        </select>
    </div>

    <div id=ageEntry>
        <label for="imgEntry">Guest Image URL:</label>
        <input type="text" id="imgEntryField">
    </div>

    <button id="saveGuest">Save</button>
    `
}

contentTarget.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "saveGuest") {

        const guestName = document.querySelector("#nameEntryField")
        const guestAge = document.querySelector("#ageEntryField")
        const guestDish = document.querySelector("#dishEntryField")
        const guestHand = document.querySelector("#hand")
        const guestImg = document.querySelector("#imgEntryField")
    
    const newGuest = {
        name: guestName.value,
        age: guestAge.value,
        favDish: guestDish.value,
        rHand: guestHand.value,
        imgUrl: guestImg.value
    }
    console.log(newGuest)
    saveGuest(newGuest)
    .then(guestPost)
    }
})
