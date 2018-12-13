window.onload = function () {
    document.getElementById('btn2').addEventListener("click", function () {
        let textarea2 = document.getElementById('textarea2').value;
        document.getElementById('textarea2').value = textarea2.replace(/'/g, function (match, i) {
            if (/(\w|[а-яёА-ЯЁ])/.test(textarea2[i - 1]) && /(\w|[а-яёА-ЯЁ])/.test(textarea2[i + 1])) {
                return "'"
            }
            else {
                return '"'
            }
        });
    });
}