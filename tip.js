 // Defining and assigning required variables

 const amount = document.querySelector("#amount");
 const guests = document.querySelector("#guests");
 const willingGuest = document.querySelector("#yes");
 const quality = document.querySelector("#quality");
 const tipAmount = document.querySelector("#result");
 const reset = document.querySelector('#reset')
 
 // the function that will be used to calculate the tip is defined
 
 const calculate = () => {
     // If the guest(s) are wiling to share the tip bill, this line of code will run
 
     if (willingGuest.value === '1') {
         const tip = ((amount.value * quality.value) / (guests.value)).toFixed(2)
         amount.value = "";
         guests.value = "";
         quality.value = "";
            //  console.log(tip);
         // This is to keep the code from displaying technical jargon to the client
 
         if (tip === "NaN") {
             tipAmount.textContent ='Enter a valid amount'
 
         }
         else{
             tipAmount.textContent ='Tip ₦' + tip + 'each'
         }
     }
     // This syntax will run if the guest(s) is not willing to share the bill
     else {
         tip = ((amount.value * quality.value)).toFixed(2)
         amount.value = "";
         guests.value = "";
         quality.value = "";
         
         // This is to keep the code from displaying technical jargon to user
 
         if (tip === "NaN") {
             tipAmount.textContent = 'Enter Valid amount'
         }
         else{
             tipAmount.textContent = 'Enter valid amount'  
         }
     }
 
    //  console.log(tipAmount);
 }
 
 reset.onclick = () => {
     tipAmount.textContent = " "
 }

 
 // The naira symbol was copied from https://www.cyberdefinitions.com/symbols/currency-symbols/naira-sign.html
 
