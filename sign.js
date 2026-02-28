document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("loginForm");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const confirmPasswordInput = document.getElementById("confirmPassword");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();
        const confirmPassword = confirmPasswordInput.value.trim();

        if (!email || !password || !confirmPassword) {
            alert("Vui lòng nhập đầy đủ thông tin!");
            return;
        }

        // Kiểm tra mật khẩu mạnh
        if (password.length < 6) {
            alert("Mật khẩu phải có ít nhất 6 ký tự!");
            return;
        }

        const hasUpperCase = /[A-Z]/.test(password);
        const hasLowerCase = /[a-z]/.test(password);
        const hasNumber = /[0-9]/.test(password);
        const hasSpecialChar = /[!@#$%^&*(),.?\":{}|<>]/.test(password);

        if (!hasUpperCase || !hasLowerCase || !hasNumber || !hasSpecialChar) {
            alert("Mật khẩu phải có chữ hoa, chữ thường, số và ký tự đặc biệt!");
            return;
        }

        if (password !== confirmPassword) {
            alert("Mật khẩu nhập lại không khớp!");
            return;
        }

        // Lấy danh sách user đã lưu
        let users = JSON.parse(localStorage.getItem("users")) || [];

        // Kiểm tra email đã tồn tại chưa
        const userExists = users.find(user => user.email === email);

        if (userExists) {
            alert("Email đã được đăng ký!");
            return;
        }

        // Tạo user mới
        const newUser = {
            email: email,
            password: password,
            isPremium: false
        };

        users.push(newUser);

        localStorage.setItem("users", JSON.stringify(users));

        alert("Đăng ký thành công! Chuyển sang trang đăng nhập.");

        window.location.href = "index.html";
    });
});
