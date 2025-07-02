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
//js object or hashmap
classes = {".cw_company": "", 
    ".cw_companyPhone": "", 
    ".cw_companyAddress1": "", 
    ".cw_companyCity": "", 
    ".cw_companyState": "", 
    ".cw_companyZipCode": "", 
    ".cw_companyId": "", 
    ".cw_firstName": "", 
    ".cw_lastName": "", 
    ".cw_email": "", 
    ".cw_phone": ""}

//need to get input from popup
//then set classes[key] to user input

for(const className in classes){
    autofillCompany(className, classes[className])
}
