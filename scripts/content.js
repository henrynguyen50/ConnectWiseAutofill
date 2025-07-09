

function autofillCompany(className, info, attempt = 0) {
  const maxRetries = 5;
  const delay = 1000;


  const input = document.querySelector(className);
  //focus and blur simulates a user clicking in the textbox then out
  //needed for elements that require a click in and out of field from a user
  if (input) {
      //since State is a dropdown input/change is not a usable event
      //Grid requires to be clicked to initialize it then clicked again to save the input
      //This way don't have to click the actual dropdown menu element
      if(className == ".cw_companyState") {
        const btn = document.querySelector('.GMDB3DUBHWH');
        btn.click();
        input.focus();
        input.value = info;
        input.blur();
        btn.click();

      }
      input.focus();

      input.value = info;
      input.dispatchEvent(new Event("input", { bubbles: true }));
      input.dispatchEvent(new Event("change", { bubbles: true }));
      
      input.blur();
    
  } else {
    if(attempt < maxRetries) {
      setTimeout(() => autofillCompany(className, info, attempt + 1), delay);
    }
  }
}


chrome.storage.local.get("autofillData").then((result) => { 
    const data = result.autofillData; 
    for(const className in data){
        autofillCompany(className, data[className])
    }
})

chrome.storage.local.clear(() => {
  console.log('Autofill data cleared');
});







