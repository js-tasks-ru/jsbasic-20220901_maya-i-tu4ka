function truncate(str, maxlength) {
	max = maxlength - 1;
	if (str.length < max) {
		return str;
	}
	str = str.substr(0, max) + "…";
	return str;
}
