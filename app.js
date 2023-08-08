const grades = parseInt(prompt("성적을 입력 해주세요."));

if (isNaN(grades) || grades < 0) {
	alert("정확한 값을 입력 해주세요.");
} else if (grades >= 90) {
    alert('A');
} else if (grades >= 80) {
    alert('B');
} else if (grades >= 70) {
    alert('C');
} else {
    alert('D');
}