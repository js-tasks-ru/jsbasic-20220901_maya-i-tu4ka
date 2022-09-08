function truncate(str, maxlength) {
	if (str.length < maxlength) {
		return str;
	}
	str = str.substr(0,maxlength) + "…";
	return str;
}
