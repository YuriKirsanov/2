let students = []
let current = 0

function loadFromSite() {
	$.get('http://217.71.129.139:4035/students.php', function(data){
        students = JSON.parse(data)['response'];
        });
} 

function load_student(id) {
    $('#name').val(students[id].name)
    $('#surname').val(students[id].surname)
}

function next() {
	load_student(current)
	current++

	if (current === students.length) {
		//$('#btn_next').attr(disabled, true)
	}
}