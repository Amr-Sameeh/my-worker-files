self.onmessage = function (event) {
    const sheetUrl = "https://script.google.com/macros/s/AKfycbwhA2NcrGCAPigH8A-0plHrl57bmezr_T5Ha_4HSusFGPTMNfaX5TLthigzlfClk2VL/exec";

    fetch(sheetUrl)
        .then(response => response.text())
        .then(data => {
            self.postMessage(data); // إرسال البيانات إلى التطبيق الرئيسي
        })
        .catch(error => {
            self.postMessage({ error: error.message }); // إرسال الخطأ
        });
};
