let music_1 = { title: "music 1", author: "author 1" };
let music_2 = { title: "music 2", author: "author 2" };
let music_3 = { title: "music 3", author: "author 3" };
let music_4 = { title: "music 4", author: "author 4" };
let music_5 = { title: "music 5", author: "author 5" };

var playList = new Set();

/**
 * Features
 */

// add music
playList.add(music_1);
playList.add(music_3);

// delete music
playList.delete(music_1);

playList.clear();

console.log("------------------------------------");
console.log(playList.size);
console.log(playList);
console.log("------------------------------------");

for (const music of playList) {
  console.log(music);
}
