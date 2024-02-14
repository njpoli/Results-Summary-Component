# Frontend Mentor - Product preview card component solution

This is a solution to the [Results summary component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/results-summary-component-CE_K6s0maV). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page
- **Bonus**: Use the local JSON data to dynamically populate the content

### Screenshot

![](./screenshot.png)

### Links

- Solution URL: [https://github.com/njpoli/Results-Summary-Component](https://github.com/njpoli/Results-Summary-Component)
- Live Site URL: [https://results-summary-component-ten-liard.vercel.app/](https://results-summary-component-ten-liard.vercel.app/)

## My process

### Built with

- [React](https://reactjs.org/) - JS library
- [Next.js](https://nextjs.org/) - React framework
- [tailwindcss](https://tailwindcss.com/) - For styles

### What I learned

I learned the difference between client and server components in nextjs. When building an app in Vercel, a server component with a fetch to a local nextjs API route will cause the build to fail, as it is trying to fetch while building. I needed to refactor the component to a client component, which had the pleasant side-effect of being able to use a relative url instead of the fully qualified url.

## Author

- Website - [njpoli](https://www.github.com/njpoli)
- Frontend Mentor - [@njpoli](https://www.frontendmentor.io/profile/njpoli)
