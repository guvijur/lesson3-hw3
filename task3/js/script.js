window.onload = function () {
    document.getElementById('fSubmit').addEventListener("click", function () {
        let fName = document.getElementById('name').value;
        let fPhone = document.getElementById('phone').value;
        let fEmail = document.getElementById('email').value;
        if (/^[a-zа-яё ]+$/ig.test(fName)) {
            document.getElementById('name').classList.remove("is-invalid");
            document.getElementById('name').classList.add("is-valid");
        }
        else {
            document.getElementById('name').classList.remove("is-valid");
            document.getElementById('name').classList.add("is-invalid");
        }
        if (/^\+7\(\d{3}\)\d{3}\-\d{4}$/ig.test(fPhone)) {
            document.getElementById('phone').classList.remove("is-invalid");
            document.getElementById('phone').classList.add("is-valid");
        }
        else {
            document.getElementById('phone').classList.remove("is-valid");
            document.getElementById('phone').classList.add("is-invalid");
        }
        if (/^[\w.-]+\@[a-z]+.[a-z]{1,5}$/ig.test(fEmail)) {
            document.getElementById('email').classList.remove("is-invalid");
            document.getElementById('email').classList.add("is-valid");
        }
        else {
            document.getElementById('email').classList.remove("is-valid");
            document.getElementById('email').classList.add("is-invalid");
        }
    });
}