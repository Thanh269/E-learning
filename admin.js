document.addEventListener("DOMContentLoaded", function () {
    hienThiUsers();
});

function hienThiUsers() {
    const bangUser = document.getElementById("bang-user");
    const tongSoUser = document.getElementById("tong-so-user");

    let users = JSON.parse(localStorage.getItem("users")) || [];

    tongSoUser.textContent = "Tổng: " + users.length + " tài khoản";

    if (users.length === 0) {
        bangUser.innerHTML = `
            <tr>
                <td colspan="4" class="text-center text-muted">
                    Chưa có tài khoản nào
                </td>
            </tr>
        `;
        return;
    }

    let html = "";

    users.forEach((user, index) => {
        html += `
            <tr>
                <td>${index + 1}</td>
                <td>${user.email}</td>
                <td>
                    ${
                      user.isPremium
                        ? '<span class="badge bg-success">Premium</span>'
                        : '<span class="badge bg-secondary">Free</span>'
                    }
                </td>
                <td>
                    <button class="btn btn-sm btn-warning me-1"
                        onclick="togglePremium(${index})">
                        ${
                          user.isPremium
                            ? "Khóa Premium"
                            : "Mở Premium"
                        }
                    </button>

                    <button class="btn btn-sm btn-danger"
                        onclick="xoaUser(${index})">
                        Xóa
                    </button>
                </td>
            </tr>
        `;
    });

    bangUser.innerHTML = html;
}

function togglePremium(index) {
    let users = JSON.parse(localStorage.getItem("users")) || [];

    users[index].isPremium = !users[index].isPremium;

    localStorage.setItem("users", JSON.stringify(users));

    alert("Cập nhật Premium thành công!");

    hienThiUsers();
}

function xoaUser(index) {
    let users = JSON.parse(localStorage.getItem("users")) || [];

    if (confirm("Bạn có chắc muốn xóa tài khoản này?")) {
        users.splice(index, 1);
        localStorage.setItem("users", JSON.stringify(users));
        hienThiUsers();
    }
}

function xoaTatCa() {
    if (confirm("Bạn có chắc muốn xóa toàn bộ tài khoản?")) {
        localStorage.removeItem("users");
        hienThiUsers();
    }
}