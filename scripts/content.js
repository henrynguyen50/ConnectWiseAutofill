function autofillCompany(className, info) {
  const input = document.querySelector(className);
  //validate if page has loaded then set value
  if (input) {
    input.value = info;
    
  } else {
    // Retry in 500ms if not found
    setTimeout(() => autofillCompany(className, info), 500);
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





