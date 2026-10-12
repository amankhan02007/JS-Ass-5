//Employ login sys
let correctpass = "abc123";
let userinput = prompt("Enter correct pass: ");
let ispasscorrect = (userinput === correctpass);
if(ispasscorrect){
    console.log("Login successfull");
}else{
    console.log("Incorrect Password");
}

//Online order approval;
let ispaymentdone = false;
if(ispaymentdone === true){
    console.log("Approve the order");
}else{
    console.log("Reject the order");
}

//Std result sys;
let marks = 65;
if(marks>=50){
    console.log("Pass");
}else{
    console.log("fail");
}

//Office attendince check;
let IsOnTime = true;
if(IsOnTime === true){
    console.log("Present");
}else{
    console.log("Late/Absent");
}

//Disc Eligibility;
let PremiumUser = true;
if(PremiumUser === true){
    console.log("Discount Applied");
} else{
    console.log("No Discount Available");
}

//Multiple cond;
let performance = 90;
if(performance>=90){
    console.log("Excellent");
}else if(performance>=70){
    console.log("Good");
}else if(performance>=50){
    console.log("Average");
}else{
    console.log("Poor");
}

