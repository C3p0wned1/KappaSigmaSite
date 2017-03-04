var userName = prompt("What is your name?");

if (userName != null){
    document.getElementById("welcomeMessage").innerHTML = "Welcome " + userName+ " to Kappa Sigma Rho-Alpha's Website!";
}else{
    document.getElementById("welcomeMessage").innerHTML = "Welcome to Kappa Sigma Rho-Alpha's Website!";
}