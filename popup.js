//Script to save user input 
//first get all values
//then save to chrome local storage

//on click init hashmap just like in manifest
document.getElementById("submitBtn").addEventListener("click", ()=> {
    //Split name
    let name = document.getElementById("name").value;
    const firstLast = name.split(" ");

    //.value gets text inside Id element
    const data = {
    ".cw_company": name,
    ".cw_companyId": name,
    ".cw_accountXref": name,
    ".cw_firstName": firstLast[0],
    ".cw_lastName": firstLast[1],
    ".cw_email": document.getElementById("email").value,
    ".cw_companyAddress1": document.getElementById("address").value,
    ".cw_companyCity": document.getElementById("city").value,
    ".cw_companyState": document.getElementById("state").value,
    ".cw_companyZipCode": document.getElementById("zip").value,
    ".cw_companyPhone": document.getElementById("phone").value,
    ".cw_phone": document.getElementById("phone").value,
  };
    //save data to autofillData in chromes local storage 
    chrome.storage.local.set({autofillData: data}).then(() => {
    console.log("Data saved");  
    })
    
    //reload tab 
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.reload(tabs[0].id);
    });

    window.location.reload();



})

