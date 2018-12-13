window.onload = function () {
    document.getElementById('btn1').addEventListener("click", function () {
        let textarea1 = document.getElementById('textarea1').value;
        document.getElementById('textarea1').value = textarea1.replace(/\'/g, '"');
    });
}