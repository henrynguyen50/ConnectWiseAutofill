//Script to save user input 
//first get all values
//then save to chrome local storage

//on click init hashmap just like in manifest
document.getElementById("submitBtn").addEventListener("click", ()=> {
    //.value gets text inside Id element
    const data = {
    ".cw_company": document.getElementById("name").value,
    ".cw_email": document.getElementById("email").value,
    ".cw_companyAddress1": document.getElementById("address").value,
    ".cw_companyCity": document.getElementById("city").value,
    ".cw_companyState": document.getElementById("state").value,
    ".cw_companyZipCode": document.getElementById("zip").value,
    ".cw_companyCountry": document.getElementById("country").value,
    ".cw_companyPhone": document.getElementById("phone").value,
  };
})

//save data to autofillData in chromes local storage 
chrome.storage.local.set({autofillData: data})