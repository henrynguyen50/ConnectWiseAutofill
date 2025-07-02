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

classes = [".cw_company", ".cw_companyPhone", ".cw_companyAdress1", ".cw_companyCity", ".cw_companyState", ".cw_companyZipCode", ".cw_companyId", ".cw_firstName", ".cw_lastName", ".cw_email", ".cw_phone"]

autofillCompany(".cw_company", "Henry Nguyen");
