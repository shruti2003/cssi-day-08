var tries = 3; 
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
        //loop through properites in object and key takes the context of one of the property names 
      for(let key in data){
            if(data[key].passcode === passcode.value){
                console.log(data[key].passcode, passcode.value)
                const message = document.querySelector("#message");
                message.innerHTML = data[key].message;
            }
          /* 
            else {
                 console.log("Error")
                 const error = document.querySelector("#error")
                 error.classList.remove("hidden")
             }
             */
        } 
       
    })


}