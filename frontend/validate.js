function messageLogin()
{
    alert("Login successful");
}
function messageSignup()
{
    alert("Signup successful");
}
function validate_input()
{
    const username = document.getElementById("username").value;
    if (username === "") {
    alert("Username is required");
    return;
    }
    if(validate_email() && validate_password())
        alert("Signup Successfull");
    else
        alert('Invalid input');
}
function validate_email()
{
   const mail = document.getElementById("userEmail").value;
   console.log(mail);
   if(mail.includes('@') && mail.includes('.com')){
    return true;
   }
   else{
    alert('Incorrect email');
    return false;
   }
}
function validate_password()
{
   const pass = document.getElementById("pass").value;
   let number_capital_letters = 0 ,number_small_letters = 0 , number_digits = 0;
   let number_special_characters = 0;
   for(let i = 0;i<pass.length;i++)
   {
    if(pass[i]>='a' && pass[i]<='z')
        number_small_letters++;
    else if(pass[i]>='A' && pass[i]<='Z')
        number_capital_letters++;
    else if(pass[i]>='0' && pass[i]<='9')
        number_digits++;
    else
        number_special_characters++;
   }
   if(number_capital_letters >=1 && number_small_letters >=1 && number_digits >=1 && number_special_characters >=1)
    {
      return true;
    }
   else{
    if(number_capital_letters <1)
       alert('Minimum number of capital letters must be 1');
    if(number_small_letters <1)
       alert('Minimum number of small letters must be 1');
    if(number_digits <1)
       alert('Minimum number of digits must be 1');
    if(number_special_characters <1)
       alert('Minimum number of special characters must be 1');
    return false;
   }
}
