

## Create Readme

### Answer thequestions:

1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?
  Answer :  getElementById--> Dom এর ভিতরে কোনো নির্দিষ্ট উপাদান কে খুজতে getElementById ব্যবহার করা হয়। যে উপাদানকে দেখতে চাই তাকে একটা  id set করে দিয়ে then document.getElementById("id name") দিলে ওই নির্দিষ্ট উপাদানকে দেখা যায়।

  Difference:

   --> শুধু একটা element রিটার্ন করে (কারণ এক পেইজে একই id একবারই থাকে )।
  --> সরাসরি সেই element object দেয়।


  getElementsByClassName:  Dom এর ভিতরে যদি একাধিক উপাদান কে একসাথে খুজতে বা একাধিক উপাদানের উপর একসাথে ফাংশন ব্যবহার করতে চাই তখন প্রত্যেকের একটা common class name দিয়ে তারপর document.getElementByClassName("class name") দিয়ে প্রতিটা উপাদানকে একসাথে খুঁজে বের করা যায়  এবং প্রত্যেক উপাদানকে একটা একটা করে দেখতে for loop চালাতে হয়।

   --> একাধিক element থাকলে সবগুলো রিটার্ন করে।
   --> Output হয় একটা HTMLCollection (array-এর মত, কিন্তু পুরোপুরি array না)।
    তাই loop চালাতে হয় (for loop বা for...of)।


  querySelector: কোনো class/ id এর মধ্যে যদি একাধিক (id, class,tag সবকিছু ) এমন থাকে তাহলে তাদের মধ্যে ফাস্ট যে উপাদান থাকবে সেটা পেতে querySelector use করা হয় ।

   --> শুধু প্রথম element রিটার্ন করে যা match করে।

  querySelectorAll: কোনো class/ id এর মধ্য থেকে যদি কোনো p,h1 বা কোনো class  কে দেখতে চাই তখন querySelectorAll দিতে হবে। যেমন, document.querySelectorAll(" id/ class name span "); output : span গুলো
  
   --> সব matching element গুলো রিটার্ন করে।

   --> Output হয় একটা NodeList।
 

2. How do you **create and insert a new element into the DOM**?
  Answer:
   step1: প্রথমে parent node/ parent container  কে খুজে বের করতে হবে

   step2: createElement দিয়ে new  Child create করতে হবে

   step3:  তারপর যে element গুলো তৈরি করতে চাই সেই গুলো creat করতে হবে। এবং innerText/ innerHtml দিয়ে তার মধ্যে      element set করতে হবে।

   step5: then  appendChild এর মাধ্যমে child এর মধ্যে ঢুকাতে হবে।

   step6: তারপর create section / child কে parent container a appendChild করে দিতে।  তাহলে নতুন একটা child / section create হবে
 
3. What is **Event Bubbling** and how does it work?
   Answer:
   Event Bubbling হলো এমন একটা process যেখানে কোনো child element-এ event ঘটলে (যেমন click), সেটা শুধু ওই element-এই থেমে থাকে না — বরং event টা উপরে উপরে তার parent, তারপর grand-parent ... সব element এর মধ্যে propagate (বিস্তার) করতে থাকে।

   its work-->

   যদি html এর মধ্যে কোথাও ক্লিক করা হয় তাহলে এটা body থেকে section. Section থেকে element এবং তার ভিতরের w
   Element পর্যন্ত খুজতে থাকে কোথায় ক্লিক করা হয়ছে। আর তারপর bubble আকারে উপরে উঠে আসতে থাকে। 


4. What is **Event Delegation** in JavaScript? Why is it useful?
  Answer:
  Event Delegation : অনেকগুলো child element-এর জন্য আলাদা আলাদা event listener না দিয়ে, তাদের common parent element এ একটা event listener দিলে 
   event bubbling এর মাধ্যমে কোন child-এ event ঘটেছে
  সেটা বুঝা যায়।
  
  --> Performance বাড়ে : অনেক child element থাকলে প্রতিটায় আলাদা event listener না দিয়ে শুধু parent-এ একটাই event listener বসাতে হয়।


  --> Dynamic elements handle হয় :  নতুন কোনো child element DOM-এ যোগ হলো, তখনও event delegation এর কারণে সেটা কাজ করবে। আলাদাভাবে আবার নতুন listener দিতে হবে না।


5. What is the difference between **preventDefault() and stopPropagation()** methods?
 ‍ Answer:
     --> event.preventDefault()
     এই method কোনো element এর default behavior বন্ধ করে দেয়।

    --> event.stopPropagation()
    এই method event bubbling বন্ধ করে দেয়।
    event আর parent element পর্যন্ত propagate হবে না।







