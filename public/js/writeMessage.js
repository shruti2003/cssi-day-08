const onSubmit = () => {
    const passcodeInput = document.querySelector("#passcode").value
    const messageInput = document.querySelector("#message").value
    //creating an object --> key/value pair
    const payload = {
        passcode: passcodeInput, 
        message: messageInput
    };

    firebase.database().ref().push(payload)
}

