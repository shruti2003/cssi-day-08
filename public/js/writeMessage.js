const onSubmit = () => {
    const passcodeInput = document.querySelector("#passcode").value
    const messageInput = document.querySelector("#message").value
    
    if (messageInput.length > 100){
        window.alert("Message is Too Long");


    }
    else if(!passcodeInput.includes("!", "?")){
        window.alert("Password must contain special character");
    }
    
    else{
        //creating an object --> key/value pair
     const payload = {
        passcode: passcodeInput, 
        message: messageInput
        };

    firebase.database().ref().push(payload)
        }

    }
    

