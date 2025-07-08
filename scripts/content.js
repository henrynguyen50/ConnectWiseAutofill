

function autofillCompany(className, info, attempt = 0) {
  const maxRetries = 5;
  const delay = 1000;


  const input = document.querySelector(className);
  //validate if page has loaded then set value
  //focus and blur simulates a user clicking in the textbox then out
  //needed for elements that require a click in and out of field from a user
  if (input) {
    
      //simulate a user clicking into the textbox
      input.focus();

      //set the value and dispatch events to notify the website
      input.value = info;
      input.dispatchEvent(new Event("input", { bubbles: true }));
      input.dispatchEvent(new Event("change", { bubbles: true }));
      
      //simulate a user clicking out of the textbox
      input.blur();
    
  } else {
    if(attempt < maxRetries) {
      
      // Retry in 1000ms if not found
      setTimeout(() => autofillCompany(className, info, attempt + 1), delay);
    }
  }
}


//need to get input from popup
chrome.storage.local.get("autofillData").then((result) => { 
    const data = result.autofillData; //get all key:value pairs in autofillData
    for(const className in data){
        autofillCompany(className, data[className])
    }
})

//clear data after done
chrome.storage.local.clear(() => {
  console.log('Autofill data cleared');
});







