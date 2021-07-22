//define the buttons function
const getMessages = () => {
    //get a value of the text box
    const passcode = document.querySelector("#passcode")
    //reference to database in firebase
    const messagesRef = firebase.database().ref();
    //event listener that retrieves the data
    messagesRef.on('value', (snapshot) => {
        const data = snapshot.val()
        //loop through properites in object and key takes the context of one of the property names 
        for(let key in data){
             if(data[key] === passcode.value){
            console.log("match found")
        }
        }
       
    })


}