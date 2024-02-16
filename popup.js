chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.cookies.getAll({ url: tabs[0].url }, function (cookies) {
        var cookieTable = document.getElementById('cookieTable').getElementsByTagName('tbody')[0];
        cookies.forEach(function (cookie) {
            var row = cookieTable.insertRow();
            var nameCell = row.insertCell(0);
            var valueCell = row.insertCell(1);
            nameCell.textContent = cookie.name;
            valueCell.textContent = cookie.value;
        });
    });
});
