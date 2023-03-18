function clearErrors(){

    errors = document.getElementsByClassName('formerror');
    for(let item of errors)
    {
        item.innerHTML = "";
    }


}
function seterror(id, error){
    //sets error inside tag of id 
    
    //var element = document.getElementsByClassName('formerror');
    //for(let item of element)
    //{
       //if(error!="")
        //item.innerHTML=error;
   // }
   var element=document.getElementById(id);
   element.getElementsByClassName[0].innerHTML=error;
   
}

function validateForm(){
    var returnval = true;
  
    clearErrors();
    //perform validation and if validation fails, set the value of returnval to false
    var name = document.getElementById("name").value;

    if (name.length<5){
        seterror("name", "*Length of name is too short");
        returnval = false;
    }

    if (name.length == 0){
        seterror("name", "*Length of name cannot be zero!");
        returnval = false;
    }

    var email = document.getElementById("email").value;

    if (email.length>15){
        seterror("email", "*Email length is too long");
        returnval = false;
    }

    var phone = document.getElementById("phone").value;

    if (phone.length != 10){
        seterror("phone", "*Phone number should be of 10 digits!");
        returnval = false;
    }

    var password = document.getElementById("password").value;

    if (password.length < 6){

        // Quiz: create a logic to allow only those passwords which contain atleast one letter, one number and one special character and one uppercase letter
        seterror("password", "*Password should be atleast 6 characters long!");
        returnval = false;
    }

    var cpassword = document.getElementById("cpassword").value;

    if (cpassword != password){
        seterror("cpassword", "*Password and Confirm password should match!");
        returnval = false;
    }
    
    return returnval;
     
   
}

const mainform = document.getElementById("form");
const mainform1 = document.getElementById("form");
mainform.addEventListener('submit', (event) => {
validateForm();
mainform1.addEventListener('submit', (event) => {
   
   //event.preventDefault();
let obj = {}
     show();    
});
});



function show() {
	const name = document.getElementById("name").value;
	const email = document.getElementById("email").value;
	const phone = document.getElementById("phone").value;
    const password = document.getElementById("password").value;
    const cpassword = document.getElementById("cpassword").value;
    const details = document.getElementById("details").value;

	obj = {
		name: name,
		email: email,
		phone: phone,
        password: password,
        cpassword: cpassword,
        details: details
	}
	alert(JSON.stringify(obj))
}


  const date = document.getElementById("date");
date.innerHTML = new Date().getFullYear();
 