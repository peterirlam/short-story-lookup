let shortStories = {
	SF624: {
		title: 'Skeleton Crew',
		author: 'Stephen King',
		favorites: [ 'The Mist', "Mrs Todd's Shortcut", 'The Jaunt', 'Word Processor of the Gods' ]
	},
	SF283: {
		title: 'Night Shift',
		author: 'Stephen King',
		favorites: [ 'The Mangler', 'Gray Matter', 'The Ledge', 'The Lawnmower Man', 'Quitters, Inc.' ]
	},
	SF659: {
		title: 'The Preserving Machine',
		author: 'Phillip K Dick'
	},
	SF297: {
		title: 'I, Robot'
	}
};
function updateStories(libClass, prop, value) {
  if (value === '') delete shortStories[libClass][prop];
   else if (prop === 'favorites') {
    shortStories[libClass][prop] = shortStories[libClass][prop] || [];
    shortStories[libClass][prop].push(value);
  } else {
		shortStories[libClass][prop] = value;
	}
	return shortStories;
}
let update = updateStories('SF659', 'favorites', 'We Remember It For You, Wholesale');
console.log(update);
