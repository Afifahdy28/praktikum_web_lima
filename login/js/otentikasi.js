function validasi() {
	var user = document.getElementById("username").value;
	var pass = document.getElementById("password").value;
	if (user == "" && pass == "") {
		alert('Username Tidak Boleh Kosong');
		return false;
	}
	else if (pass.length < 6){
		alert('Password Kurang Dari 6');
		return false;
	}
	else if (user == "afifah" && pass == "12345678"){
		alert('Anda Berhasil Login');
		window.location = "home.html";
		return false;
	}else{
		alert("Username / Password Anda Salah, Coba Lagi");
	}
		
}