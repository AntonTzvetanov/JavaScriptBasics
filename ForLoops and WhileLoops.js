const names = ["Ed", "John","Maria","Dimitar","Slavi","Toni","Sasho"]

for(name of names ) {
    console.log(name);

   if(name === "Maria") {
    console.log("Maria is on my list");
    // now after we found our record we need to stop the cycle, so we will add break; 
     break;
   }

   let loading = 0; 

   while(loading < 5) { 
    console.log("Website is still loading...");
    loading ++; 
   }

}