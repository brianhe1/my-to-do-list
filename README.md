# **My To Do List**
## **Video Demo**:  https://youtu.be/SCNNmz9MVfg
## **Description**:
### *What is this project?*
My project is a simple task management tool to optimize daily productivity, or in other words, a ***to-do list***. It is a clean and minimalist to do list that eliminates clutter and simplifies organization.

### ***What features does it have?***
My project lets users effortlessly plan their daily to dos as the current date is displayed prominently at the top center of the screen. The to do list is housed within a container, complete with an easy-to-use feature at the bottom for adding additional to dos. Additionally, to make the experience even more enjoyable, the interface comes with an adorable companion - the loyal sky bison, ***Appa***! <sub>(Avatar: The Last Airbender)

### ***File Breakdown***
1. `index.html`

    My `.html` file is split into two larger sections, titled with tags `<head>` and `<body>`. In the `<head>` section, I included a `<link>` to my CSS stylesheet file named `styles.css`, a `<link>` to Google Fonts (Lato & Roboto Mono) that I used for my project, and  a `<link>` to [Font Awesome](https://fontawesome.com/), an icon library. I included these links so I can access them in the code to come in the `.html` file and the `styles.css` file.

    The `<body>` section starts with two header tags (`<h1>`) to include the title of my project ("my to dos") and the date. Next, I included a `<div>` tag to block out the container in which the to do list is housed in. Nested inside that `<div>` tag are two additional `<div>` tags that seperate the list of to dos from the feature at the bottom that adds more tasks to the said list. The second nested `<div>` tag consists of a `<form>` tag which contains a `<input>` and `<button>` tag, which I can later access in my Javascript file (`script.js`). Continuing further down into the `.html` file, there is an `<img>` tag which contains our companion, Appa. Following that tag is another `<div>` tag with `<input type="checkbox">` which serves to remove Appa from the interface at user convenience. Next, there is a `<template>` tag that is accessed within the `script.js` file to format and render each new to do task identically on the interface. Lastly, before the `<body>` section is completed, there is a `<script>` tag to reference the `script.js` file, which was mentioned several times above.
    
    <sub>***Note:*** *almost every tag mentioned earlier has a `class` associated with it, which is later referenced for formatting in the `styles.css` file.*</sub>

2. `styles.css`

    My `.css` file is split into classes, each formatting a different tag in the `.html` file. The classes mentioned are styled using standard CSS syntax, so I won't go into much detail on them. Some interesting formatting syntax that I came across when doing this project was adding slight "animations" using solely CSS. For "animation", I wrote code in which enlarges and darkens the opacity the "+" button when hovered over. I did this by first setting the button to `opacity: 0.8;` and then included `transition: opacity 150ms ease-in, transform 150ms ease-in-out;`. Then, I added a state to the button so that when the button is hovered over, the styling changes and I did this with the `:hover` syntax. I also included code which makes Appa float on the screen, rather than him being a static image thrown onto the screen. I did this by including `animation: float 4s ease-out infinite;` into the container which contains the image. Then. I added a `@keyframes` rule to transform that image up and down `25px`. My `.css` file ends with a `@media` query which formats the interface differently at a smaller window size.

3. `script.js`

    My `.js` file starts with code that checks if a `'todos'` key is stored in local storage, and if it is, load it into my declared variable, `listOfTasksArray`. If not, an empty array is assigned to the said  variable. Next, I created a function called `displayDate()` that displays today's date on the UI. After, I created a function called `displayTasks()` and inside that function, there is another function named `deleteListeners()`. The function code follows that of the code for `displayTasks()` and what this function does is listen to when the completed check icon is clicked, and once it is, it deletes that task from local storage and UI by calling the `deleteTask()` function. The code for this function follows and it does as the name suggests, deletes the task. Next, I added an `EventListener` for the `+` button which calls the function `createTask()` when clicked. The code for `createTask()` is located after and it adds the new task into `listOfTasksArray` and also adds the task to local storage. After that, there is another `EventListener` to control whether Appa shows on the interface. Last but not least, I included a Window event listener function. The `window.onload` function is called when the window object has finished loading. The function contains two other functions, `displayDate()` and `displayTasks()`, which are executed when the window has finished loading.

    <sub>***Note:*** *For a more in-depth explanation, refer to the comments in the `script.js` file.*</sub>


### ***Design Choices & Challenges***
1. At first, I had planned to simply have a static image of Appa on the interface. But as I was browsing TikTok, I stumbled upon a tutorial video that featured an image floating up and down on the screen, which was perfect for my Appa illustration (which I proudly drew myself :)) as he is a flying bison. So, I modified my CSS code to bring this idea to life.

    However, modifying the CSS code to do this was a bit of a challenge. The addition of the floating animation for Appa meant that sometimes he would cover the buttons for the to-do list, making it difficult for users to check off tasks. After much searching and frustration, I finally stumbled upon the line of code `pointer-events: none;`. This line allowed Appa to become irresponsive to mouse events and let mouse clicks pass through him to the elements behind him. This was the solution I was looking for to fix the issue. On a side note, some people may find Appa to be a bit distracting :(, so I added a checkbox that removes him from the interface if needed.

2. I also initially disregarded the idea of incorporating the date into my project, but as I progressed with the coding, I realized I frequently forgot the date or wanted to reference the date (for some reason). So, I decided to add it prominently on the interface, centered and displayed in large text, to serve as a helpful reminder for users like myself.

    Again, this was a challenge as I had no prior experience coding this kind of feature in JavaScript. Luckily, I discovered that many other coders faced the same confusion, so I was able to find numerous resources to reference from.

3. Finally, adding local storage support using JavaScript was a very challenging task for me. I wanted my to-do list to be saved locally so users wouldn't have to keep the tab open constantly. At first, I didn't include this feature, so the to-do list would start from scratch every time the user closed the tab.

    I initially struggled with the idea of incorporating local storage using JavaScript into my project. I tried watching multiple tutorials on YouTube, but found them to be too complex for a beginner like me. But just when I was about to call it a day, I mustered up the motivation to watch one more tutorial, and it was a lifesaver! This tutorial was concise, easy to understand and not too long. Thanks to it, I was finally able to implement the local storage feature.



