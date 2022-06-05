let requestBodyEl = document.getElementById("requestBody");
let sendPostRequestBtnEl = document.getElementById("sendPostRequestBtn");
let requestStatusEl = document.getElementById("requestStatus");
let httpResponseEl = document.getElementById("httpResponse");
let loadingEl = document.getElementById("loading");


function httpRequest() {
    let requestBody = requestBodyEl.value;

    let url = "https://gorest.co.in/public-api/users";
    let options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: "Bearer 3a07ce45d73a9e81ef818446eb817e2b0c5a4f5de468c4753931addeccb46882"
        },
        body: requestBody
    };
    loadingEl.classList.remove("d-none");
    requestStatusEl.classList.add("d-none");
    fetch(url, options)
        .then(function(response) {
            return response.json()
        })
        .then(function(jsonData) {
            loadingEl.classList.add("d-none");
            requestStatusEl.classList.remove("d-none");
            let requestStatus = jsonData.code;
            let httpResponse = JSON.stringify(jsonData);
            requestStatusEl.textContent = requestStatus;
            httpResponseEl.textContent = httpResponse;
        })
}

sendPostRequestBtnEl.addEventListener("click", httpRequest);