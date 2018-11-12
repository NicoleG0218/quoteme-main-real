

var masterquotelist = [
]



function insert ( ) {
var texts= document.getElementById('texts').value;
var author= document.getElementById('author').value;
var work= document.getElementById('work').value;
var tags= document.getElementById('tags').value;
masterquotelist.push(new newquote(texts, author, work, tags));
alert(masterquotelist[0].tags);
}

function newquote(texts, author, work, tags) {
    this.texts = texts;
    this.author = author;
    this.work = work;
    this.tags = tags;
}