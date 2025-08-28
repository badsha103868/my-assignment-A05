// 
// heart icon click funtion
const hearts = document.getElementsByClassName("heart-point")
 let heartBalance = 0;
for(const heart of hearts){
  heart.addEventListener("click", function(){
    heartBalance++;
   const availableHeartPoint = document.getElementById("heart-balance");
    availableHeartPoint.innerText = heartBalance;
  })
}

// call button click funtion






const callButtons = document.getElementsByClassName("call-button")
// console.log(callButtons)
  let coins = 100;
for(const callButton of callButtons){
  callButton.addEventListener("click", function(){
    const card = callButton.parentNode.parentNode;
    // console.log(card)
    const serviceName = card.querySelector(".title").innerText;
    const number = card.querySelector(".number").innerText;
    alert(`☎ Calling ${serviceName} ${number}`);
    
    

    if(coins >= 20){
      coins-=20
      const coinBalance = document.getElementById("coin-balance");
      coinBalance.innerText = coins;
      return;
    }
    else{
      alert("❌ আপনার পর্যাপ্ত পরিমাণ কয়েন নাই! কল করতে কমপক্ষে ২০ কয়েন লাগবে।")
    }
    
  })
}