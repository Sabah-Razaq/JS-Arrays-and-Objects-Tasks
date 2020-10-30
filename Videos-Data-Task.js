// INTERMEDIATE

/*
Videos Data Task
*/
let videos = [
  {
  title: "Photoshop tutorial",
  lengthInMinutes: 70,
  category: "Education",
  uploadDate: new Date("07-22-2019"),
  tags: "design, digital, photoshop, creativity",
  features: ["Live", "360°", "HDR"],
  viewCount: 4700,
  rating: 4.3
  },
  {
  title: "Episode # 01 - The Best Comedy Show",
  lengthInMinutes: 19,
  category: "Entertainment",
  uploadDate: new Date("07-03-2019"),
  tags: "comedy, funny",
  features: ["Subtitles/CC", "3D", "HD"],
  viewCount: 145615,
  rating: 3.9
  },
  {
  title: "How to use FOR EACH loop - tutorial by Tech Karo",
  lengthInMinutes: 6,
  category: "Education",
  uploadDate: new Date("11-10-2018"),
  tags: "javascript, loops, keywords, web development",
  features: ["Subtitles/CC", "3D", "HD"],
  viewCount:3754,
  rating: 3.5
  },
/*
QUESTION # 01
Add at least 10 more videos to the above array and before writing the following programs in JS.
*/
{
  title: "Ertugrul Ghazi - TRT Ertugrul by PTV",
  lengthInMinutes: 40,
  category: "Entertainment",
  uploadDate: new Date("29-10-2020"),
  tags: "entertainment, islamic, morals",
  features: ["Subtitles/CC", "3D", "HD"],
  viewCount: 2705995,
  rating: 5
  },
  {
  title: "This and super keyword in Java - Code with Harry",
  lengthInMinutes: 13,
  category: "Education",
  uploadDate: new Date("29-10-2020"),
  tags: "javascript, loops, web development",
  features: ["Purchased", "HD"],
  viewCount: 9004,
  rating: 4.5
  },
  {
  title: "Ertugrul Ghazi Season 2- TRT Ertugrul by PTV",
  lengthInMinutes: 48,
  category: "Entertainment",
  uploadDate: new Date("17-10-2020"),
  tags: "entertainment, islamic, morals",
  features: ["Subtitles/CC", "3D", "HD"],
  viewCount: 6405475,
  rating: 5
  },
  {
  title: "CSS 3D - Kamil Niftaliav",
  lengthInMinutes: 10,
  category: "Education",
  uploadDate: new Date("5-3-2016"),
  tags: "css, animations, 3D, web development",
  features: ["Subtitles/CC", "3D", "HD"],
  viewCount: 50045,
  rating: 4.5
  },
  {
  title: "CSS Tutorial - Code with Harry",
  lengthInMinutes: 11,
  category: "Education",
  uploadDate: new Date("31-12-2019"),
  tags: "css, web development",
  features: ["Purchased", "HD"],
  viewCount: 114066,
  rating: 3.5
  },
  {
  title: "ReactJS For Beginners in One Video in Hindi With One Mini Project 2019 - Thapa Technical",
  lengthInMinutes: 90,
  category: "Education",
  uploadDate: new Date("11-10-2018"),
  tags: "javascript, reactjs, web development",
  features: ["Purchased", "HD"],
  viewCount: 266995,
  rating: 4.5
  },
  {
  title: "Website on WordPress Vs HTML CSS & JavaScript - Code with Harry",
  lengthInMinutes: 17,
  category: "Education",
  uploadDate: new Date("11-10-2018"),
  tags: "html, css, javascript, wordpress, web development",
  features: ["Purchased", "HD"],
  viewCount: 151732,
  rating: 4.5
  },
  {
  title: "NodeJS vs PHP - Technical Suneja",
  lengthInMinutes: 13,
  category: "Education",
  uploadDate: new Date("4-1-2020"),
  tags: "phpVSnode, bestAdvice",
  features: ["Purchased", "HD"],
  viewCount: 13308,
  rating: 3.5
  },
  {
  title: "Job vs Freelancing Which is Better ? - Hindi Tech Tutorials",
  lengthInMinutes: 6,
  category: "Education",
  uploadDate: new Date("19-10-2019"),
  tags: "freelancing, workfromhome",
  features: ["Purchased", "HD"],
  viewCount: 5902,
  rating: 4.5
  },
  {
  title: "Poultry farming with modern facilities (Furnished cage) - Sujith Kumar",
  lengthInMinutes: 5,
  category: "Education",
  uploadDate: new Date("5-10-2018"),
  tags: "poultry, farming, modernFarming",
  features: ["Subtitles/CC", "3D", "HD"],
  viewCount: 3308969,
  rating: 5
  },
];

/*
QUESTION # 02
Print each video in this format:
Title: Photoshop tutorial
Length: 70 minutes
Category: Education
Views: 4,700
Uploaded On: 22-July-2019
Rating: 
*/
videos.forEach(function (video) {
  console.log('Title: ' + video.title);
  console.log('Length: ' + video.lengthInMinutes + ' minutes');
  console.log('Category: ' + video.category);
  console.log('Views: ' + video.viewCount);
  console.log('Uploded on: ' + video.uploadDate);
  console.log('Rating: ' + video.rating);
});

console.log('******************************');

/*
QUESTION # 03
Print titles of all short ( less than 3 minutes ) videos.
*/
videos.forEach(function (video) {
  if(video.lengthInMinutes <= 3) {
    console.log('Title: ' + video.title);
  } else {
    console.log('Not any video is less than 3 minutes');
  }
});

console.log('******************************');

/*
QUESTION # 04
Print titles of all long ( greater than 20 minutes ) videos.
*/
videos.forEach(function (video) {
  if(video.lengthInMinutes >= 20) {
    console.log('Title: ' + video.title);
  }
});

console.log('******************************');

/*
QUESTION # 05
Print titles of all medium length videos.
*/
videos.forEach(function (video) {
  if(video.lengthInMinutes < 20 && video.lengthInMinutes > 3) {
    console.log('Title: ' + video.title);
  }
});

console.log('******************************');

/*
QUESTION # 06
Print title of the longest video
*/
videos.forEach(function (video) {
  if(video.lengthInMinutes >= 50) {
    console.log('Title: ' + video.title);
  }
});

console.log('******************************');

/*
QUESTION # 07
Print titles of all "Educational" videos
*/
videos.forEach(function (video) {
  if(video.category == 'Education') {
    console.log('Title: ' + video.title);
  }
});

console.log('******************************');

/*
QUESTION # 08
Print titles of all videos with tag "Javascript"
*/
videos.forEach(function (video) {
  if(video.tags.includes('javascript')) {
    console.log('Title: ' + video.title);
  }
});

console.log('******************************');

/*
QUESTION # 09
Print titles of all videos with HD feature
*/
videos.forEach(function (video) {
  if(video.features.includes('HD')) {
    console.log('Title: ' + video.title);
  }
});

console.log('******************************');

/*
QUESTION # 10
Print titles of all videos uploaded today
*/
videos.forEach(function (video) {
  if(video.uploadDate.getDate() == new Date()) {
    console.log('Title: ' + video.title);
  } else {
    console.log('Not any video is uploaded today');
  }
});

console.log('******************************');

/*
QUESTION # 11
Print titles of all videos uploaded this week
*/
videos.forEach(function (video) {
  if(video.uploadDate.getDate() == new Date()) {
    console.log('Title: ' + video.title);
  } else {
    console.log('Not any video was uploded iin this week');
  }
});

console.log('******************************');

/*
QUESTION # 12
Print titles of all videos uploaded this month
*/
videos.forEach(function (video) {
  if(video.uploadDate.getMonth()) {
    console.log('Title: ' + video.title);
  } 
});

console.log('******************************');

/*
QUESTION # 13
Print titles of all videos uploaded this year
*/
videos.forEach(function (video) {
  if(video.uploadDate.getFullYear()) {
    console.log('Title: ' + video.title);
  } 
});

console.log('******************************');

/*
QUESTION # 14
Sort the array in ascending order of number of views and print the titles
*/
videos.sort((a, b) => a.viewCount - b.viewCount).forEach(video => console.log('Title: ' + video.title));

console.log('******************************');

/*
QUESTION # 15
Sort the array in ascending order of rating and print the titles
*/
videos.sort((a, b) => a.rating - b.rating).forEach(video => console.log('Title: ' + video.title));

console.log('******************************');



