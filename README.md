# NASA APOD Archive App

An app that shows NASA's Astronomy Picture of the day (NASA APOD), also giving users the ability to view past photos based on date input.

**Link to project:** https://johnmal-dev.github.io/nasa-apod-app/

![alt tag](/demo.gif)

## How It's Made:

**Tech used:** HTML, CSS, JavaScript

This app was built using HTML, CSS, and JavaScript.

Two main purposes of the JS file:
1. Enters today's date as default input on page load.
2. Find media (image or video) for enterred date, and load to container.

## Lessons Learned:

The purpose of this project was to build an app from scratch without the use of templates. With only my current knowledge and google searches, I successfully built this app!

Setting the default date was the first roadblock I encountered. The API's date property required a formatted date of 'YYYY-MM-dd', so I converted today's date to a the required format. I'm sure there's a simpler way to get this done but here's my code in all it's glory:
```
window.addEventListener("load", () => {
  const today = new Date();
  document.querySelector("input").value = `${today.getFullYear()}-${(
    today.getMonth() + 1
  )
    .toString()
    .padStart(2, "0")}-${today.getDate()}`;
});
```

My second setback was realizing some 'pictures of the day' are actually 'videos of the day'. The videos wouldn't render in an \<img> element. My logic said 'you'll need a \<video> tag for a video.' Unfortunately, the video tag didn't play nice with the youtube link. Fortunately, an iframes tag did the job. Project success!

## Other Projects:

Take a look at a few more projects that I have in my own portfolio:

**Who's That Wizard:** https://github.com/johnmal-dev/whosThatWizard
