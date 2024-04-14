
let submitBtn = document.getElementById('submitBtn');


const firebaseConfig = {
    apiKey: "AIzaSyCfBCV0u3CKgZfXsaL8E_MvVFs4yi6BorA",
    authDomain: "love-calculator-7d45f.firebaseapp.com",
    databaseURL: "https://love-calculator-7d45f-default-rtdb.firebaseio.com",
    projectId: "love-calculator-7d45f",
    storageBucket: "love-calculator-7d45f.appspot.com",
    messagingSenderId: "632195509010",
    appId: "1:632195509010:web:ca7a5aff11c75ff93fe1cb"          
};


firebase.initializeApp(firebaseConfig);
let database = firebase.database();
function calculateLoveAndStore() {
 
  let yourName = document.getElementById("name").value.toLowerCase();
  let partnerName = document.getElementById("emailid").value.toLowerCase();
  let randomPercentage = Math.floor(Math.random() * 100);
  let result = document.getElementById("result");
 let relationship = '';
  switch(true){
    case randomPercentage>=0 && randomPercentage<20:
        relationship='Friend';
        break;
    case randomPercentage>=20 && randomPercentage<40:
        relationship='Sister';
        break;
    case randomPercentage>=40 && randomPercentage<60:
        relationship='Brother';
        break;
    case randomPercentage>=60 && randomPercentage<80:
        relationship='Couples';
        break;
    case randomPercentage>=80 && randomPercentage<100:
        relationship='Lovers';
        break;
    default:
        relationship='Parents';
        break;
  }
  if(yourName==''){
    alert("name entry panunga")
}
if(partnerName==''){
    alert("enna avasaram name entry panunga")
}
else if(yourName=="vishnu"&&partnerName=="loga"){
  result.innerHTML="hello"
}
else{
    result.innerHTML = `${yourName} and ${partnerName} love percentage is: ${randomPercentage}% and Your Relationship is ${relationship}  <i class="fa-regular fa-heart"></i>  <i class="fa-regular fa-heart"></i>  <i class="fa-regular fa-heart"></i>...`;
  }
  database.ref('loveCalculations').push({
    
    partnerName: partnerName,
    percentage: randomPercentage,
    relationship: relationship,
    yourName: yourName
  });

 

 
    submitBtn.disabled = true;
}
 
submitBtn.addEventListener('click', calculateLoveAndStore);

 
 


