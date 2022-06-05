# NASA APOD Archive App

An app that shows NASA's Astronomy Picture of the day (NASA APOD), also giving users the ability to view past photos based on date input.

**Link to project:** https://johnmal-nasa-apod.herokuapp.com//

![alt tag](/demo.gif)

## How It's Made:

**Tech used:** HTML, CSS, JavaScript, Node, and Express

This app was built using HTML, CSS, JavaScript, Node and Express

Two main purposes of the JS file:

1. Enters today's date as default input on page load.
2. Find media (image or video) for enterred date, and load to container.

_June 4, 2022 Update_
I received some feedback about my exposed API key as well as a suggestion to remove the "Get Image" button.
This update follows through with those suggestions

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

_June 4, 2022 Update_

1. Hiding the exposed API key.
    Hide API? Easy. Install `dotenv`, hide the key in a `.env` file, push to github-pages. Simple right? You have much to learn young padawan.
    ![Yoda](yoda.jpeg)
    My initial project was frontend only, allowing me to upload to either GitHub-pages or Netlify. But if I wanted to hide the key, my only option would be to create a backend where the hidden API key can be pulled from. And since a backend is now involved, gh-pages or Netlify are out of the question. Enter Heroku. Since I am still in the early stages of learning Express, this was a great opportunity to learn.
    Several Youtube tutorials and ~6 hours later, I succeeded in my task of hiding the API key!
    Some things I learned:
    - The `public` folder contents can be seen by the end user. This is where my client-side html, css and js files live. Also, you will need to set the public folder to static like so:
    ```
    app.use(express.static(path.join(__dirname, 'public')));
    ```
    - `needle` is an option for quick HTTP requests
    - good practice to separate router functions in a `routes` folder
2. Remove 'Get Image' button
    Another simple task right? Not yet, at least. I first found a solution in which I added an `onChange` attribute to my HTML file which would run my `getAPOD()` function. The initial image load worked fine but for some reason, the change wouldn't work as expected. After 2 hours of troubleshooting, I found that the new date entry wasn't being read as expected. My first successful step was when I removed the function call from the HTML file. How could I forget the golden rule?! 
    After two hours of work, behold my solution!
    ```
    document.getElementById('dateInput').addEventListener('change', (e) => {
      getAPOD(e.target.value);
    });
    ```
    The real MVP for finding the solution was probably the DOM tool `$0`. When entered into the chrome console, you're shown the last clicked item. This helped me find the the real target of `e.target.value`.
## Other Projects:

Take a look at a few more projects that I have in my own portfolio:

**Who's That Wizard:** https://github.com/johnmal-dev/whosThatWizard
