var inputField = document.getElementsByClassName('userInput')

function validate() {
    for(var i = 0; i < inputField.length; i++) {
        if(inputField[i].value == "") {
            alert("Please fill out all fields")
            return false
        }
    }
    alert("Data tersimpan!")
}