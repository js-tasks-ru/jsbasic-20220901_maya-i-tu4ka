function checkSpam(str) {
	if (/^(1[xX]be[tT])|([xX][xX][xX\d])|[]]$/gm.test(str)) {
		return true;
	} 
	return false;
}