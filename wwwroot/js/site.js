if (typeof navigator.requestMediaKeySystemAccess !== "undefined") {
	alert("navigator.requestMediaKeySystemAccess exists");
}
else {
	alert("navigator.requestMediaKeySystemAccess does not exist");
}

if (typeof window.MediaKeys !== "undefined") {
	alert("window.MediaKeys exists");
}
else {
	alert("window.MediaKeys does not exist");
}