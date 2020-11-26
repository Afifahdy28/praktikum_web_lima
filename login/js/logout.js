function logout() {
	var oke = confirm(" Yakin Ingin Keluar?");
	if (oke) {
		document.write("Anda Berhasil Keluar");
		window.location = "Login.html";
	} else {
		document.write("oke stay here.. :)");
		window.location = "home.html"
	}
}