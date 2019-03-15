// const lyrics = ['never', 'gonna', 'give', 'you', 'up'];
// const uppercaseLyrics = ???

const lyrics = ['never', 'gonna', 'give', 'you', 'up'];

// This solution maps through the array [] of lyrics. using the .map() method
// It then uses a function called lyricWORD (this is banana lol) AND applies the method of charAt() to find the character
// at the 0 index which is the first letter. AND it then uppercase that letter by using the .toUpperCase() method. 

// FINALLY the last part uses the method substr()which takes an index (number)and will
// write out the remainder of that string from the index referenced.
// EX.
// let tester = lyrics.map(lyric => lyric.substr(1))
// console.log(tester)
// [ 'ever', 'onna', 'ive', 'ou', 'p' ]

// SOLUTION
let uppercaseLyrics = lyrics.map( lyricWORD => lyricWORD.charAt(0).toUpperCase() + lyricWORD.substr(1) );

console.log(uppercaseLyrics)
// ± |master ?:39 ✗| → node index.js
// [ 'Never', 'Gonna', 'Give', 'You', 'Up' ]




// Return an array of names for each of these person objects:

const people = [
	{
		name: 'George Michael',
		age: 14,
		title: 'Mr. Manager'
	},
	{
		name: 'T-Bone',
		age: 34,
		title: 'Arsonist'
	},
	{
		name: 'George Oscar',
		age: 32,
		title: 'Illusionist'
	}
];

const names = people.map(userName => userName.name)
const titles = people.map(userName => userName.title)

console.log(names)
console.log(titles)