/*
A problem that I am working on,
In an array of objects some of the values contain additional objects. I would like to know how to access these inner objects..

On my github I would like to know how to push the only 'bookmark' values.
I wrote a function that pushes the new values on line 37. 

Lets say I just want to only call the  'time' or bookmark.id values. 
My function code works for calling properties and values, I would like to dig deeper in objects. 
*/

function badboys() {
	var newReleases = [
		{
			"id": 70111470,
			"title": "Die Hard",
			"boxart": "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
			"uri": "http://api.netflix.com/catalog/titles/movies/70111470",
			"rating": [4.0],
			"bookmark": []
		},
		{
			"id": 654356453,
			"title": "Bad Boys",
			"boxart": "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
			"uri": "http://api.netflix.com/catalog/titles/movies/70111470",
			"rating": [5.0],
			"bookmark": [{ id:432534, time:65876586 }]
		},
		{
			"id": 65432445,
			"title": "The Chamber",
			"boxart": "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
			"uri": "http://api.netflix.com/catalog/titles/movies/70111470",
			"rating": [4.0],
			"bookmark": []
		},
		{
			"id": 675465,
			"title": "Fracture",
			"boxart": "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
			"uri": "http://api.netflix.com/catalog/titles/movies/70111470",
			"rating": [5.0],
			"bookmark": [{ id:432534, time:65876586 }]
		}
	]
	var videoAndTitlePairs = [];
  	newReleases.forEach(function(element){
		videoAndTitlePairs.push({bookmark:element.bookmark})
	})
	
	return videoAndTitlePairs;
}
