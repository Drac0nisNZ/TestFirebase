import {
    getfirestore,
    collection,
    addDoc,
    onSnapshot,
    doc,
    updateDoc,
    deleteDoc,
} from "https://www.gstatic.com/firebasejs/10.5.0/firebase-firestore.js"

const db = getFirestore()
const dbRef = collection(db, "contacts")
//TODO - App view

const leftCol = document.getElementById("left-col")
const rightCol = document.getElementById("right-col")
const backBtn = document.getElementById("back-btn")

backBtn.addEventListener('click', (e) => {
    leftCol.style.display = "block"
    rightCol.syle.display = "none"
})

const toggleLeftAndRightViewsOnMobile = () => {
    if(document.body.clientWidth <= 600) {
        leftCol.style.display = "none"
        rightCol.style.display = "block"
    }
}


//SECTION - Data

let contacts = []

const getContacts = async () => {
    try {
        // onSnapshot checks with firebase to get some updates for data
        await onSnapshot(dbRef, (docsSnap) => {
            contacts = []

            docsSnap.forEach((doc) => {
                const contact = doc.data()
                contact.id = doc.id
                contacts.push(contact)
            })
            showContacts(contacts)
        })
    } catch(err) {
        console.log(`Get Contacts ${err}`)
    }
}

getContacts()
