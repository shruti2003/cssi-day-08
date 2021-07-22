//define the buttons function
const getMessages = () => {
    //get a value of the text box
    const passcode = document.querySelector("#passcode")
    //reference to database in firebase
    const messagesRef = firebase.database().ref();
    //event listener that retrieves the data
    messagesRef.on('value', (snapshot) => {
        const data = snapshot.val()
        console.log(data)
    })


}