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

const historyData = [];

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
    
      const data = {
        name: serviceName,
        number: number,
        date: new Date().toLocaleTimeString()
      }
      historyData.push(data);
      callHistory();
    }
    

    else{
      alert("❌ আপনার পর্যাপ্ত পরিমাণ কয়েন নাই! কল করতে কমপক্ষে ২০টি কয়েন প্রয়োজন ।")
    }
    
  })
}

// clear button section
document.getElementById("clear-button").addEventListener("click", function(){
  const historyContainer = document.getElementById("history-container")
  historyContainer.innerText = ""
  historyData.length =0;
});



// copy button section
 let copyBalance = 0;
 const copyButtons = document.getElementsByClassName("copy-button")
  for(const copyButton of copyButtons){

    copyButton.addEventListener("click", function(){
    const card = copyButton.parentNode.parentNode;
    const number = card.querySelector(".number").innerText;
    alert(`নম্বর Copy হয়েছে:${number}`);
     
    // copy hotline number and paste anywhere
     
    navigator.clipboard.writeText(number);
    
  // copy count
    copyBalance++;
   const availableCopyPoint = document.getElementById("copy-balance");
    availableCopyPoint.innerText = copyBalance;
      
   })
  }



//  call history section
// function call kora
function callHistory(){
  const historyContainer = document.getElementById("history-container")
    historyContainer.innerText = ""
    for(const data of historyData){
      const div = document.createElement("div")
      div.innerHTML =`
         <div class=" flex justify-between items-center bg-[#fafafa] rounded-xl  mt-3 p-4">
            <div>
             <h1>${data.name}</h1>
             <p>${data.number}</p>
             </div>
             <p>${data.date}</p>
         </div>
      `
      historyContainer.appendChild(div);
    }
}