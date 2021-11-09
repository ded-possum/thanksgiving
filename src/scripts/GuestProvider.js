let guests = []

export const guestList = () => {
    return guests.slice()
}

export const fetchGuests = () => {
    return fetch("http://localhost:8088/guests")
    .then(response => response.json())
    .then(fetchedGuests => {
        guests = fetchedGuests
    })
}
    
export const saveGuest = (guest) => {
    return fetch("http://localhost:8088/guests", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(guest)
    })
    .then(fetchGuests)
}

