var rows = document.querySelectorAll('tbody tr');

var songs = [];

for (var row of rows) {

	var artist = row.querySelector('a.artist').innerText;

	var song = row.querySelector('a.title').innerText.replace('19금 ', '');

	songs.push(`${artist} - ${song}`);

}

console.log(songs.join('\n'));
alert("Conversion Complete. To view the list, navigate to:\nInspect >>> Console")