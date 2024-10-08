# Frontend Mentor - Newsletter sign-up form with success message solution

This is a solution to the [Newsletter sign-up form with success message challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/newsletter-signup-form-with-success-message-3FC1AZbNrv). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [The challenge](#the-challenge)
- [Screenshots](#screenshots)
  - [1. Desktop version](#1-desktop-version)
  - [2. Mobile version](#2-mobile-version)
- [PageSpeed Insights results](#pagespeed-insights-results)
- [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [Tested with](#tested-with)
  - [What I learned](#what-i-learned)
- [Acknowledgement](#acknowledgement)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- Add their email and submit the form
- See a success message with their email after successfully submitting the form
- See form validation messages if:
  - The field is left empty
  - The email address is not formatted correctly
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshots

##### 1. Desktop version

![Newsletter sign up form - default](./screenshots/desktop/Newsletter-sign-up-form-default.png)
![Newsletter sign up form - active](./screenshots/desktop/Newsletter-sign-up-form-active.png)
![Newsletter sign up form - error](./screenshots/desktop/Newsletter-sign-up-form-error.png)
![Success message - default](./screenshots/desktop/Success-message-default.png)
![Success message - active](./screenshots/desktop/Success-message-active.png)

##### 2. Mobile version

![Newsletter sign up form - default](./screenshots/mobile/Newsletter-sign-up-form-default.png)
![Newsletter sign up form - active](./screenshots/mobile/Newsletter-sign-up-form-active.png)
![Newsletter sign up form - error](./screenshots/mobile/Newsletter-sign-up-form-error.png)
![Success message - default](./screenshots/mobile/Success-message-default.png)
![Success message - active](./screenshots/mobile/Success-message-active.png)

### PageSpeed Insights results

[Mobile version](https://pagespeed.web.dev/analysis/https-rupali317-github-io-newsletter-sign-up-with-success-message-main/or6uukti8p?form_factor=mobile)

[Desktop version](https://pagespeed.web.dev/analysis/https-rupali317-github-io-newsletter-sign-up-with-success-message-main/or6uukti8p?form_factor=desktop)

### Links

- Solution URL: [Github solution](https://github.com/rupali317/newsletter-sign-up-with-success-message-main)
- Live Site URL: [Live URL](https://rupali317.github.io/newsletter-sign-up-with-success-message-main/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS grid
- Mobile-first workflow
- Javascript
- [Github Pages](https://pages.github.com/) - Allows to host static websites directly from a GitHub repository.

### Tested with

- Browsers used for testing: Google Chrome, Firefox, Safari, Brave, Microsoft Edge.
- Devices:
  - (Real) MacBook Pro (15-inch), Samsung Galaxy A33 5G, Samsung Galaxy S20+, iPad Air 2, MacBook Pro (13-inch).
  - (Virtual) The mobile and tablet devices mentioned under Chrome's dev console.
- Screen reader: MacOS VoiceOver.

### What I learned

- Based on the requirement, I implemented the solution related to checking the email format via Javascript. However, it could also be achieved by using the `pattern` attribute in the `input` tag along with CSS's `:invalid` psuedo class.

- I tested my solution using VoiceOver. For the success message, I have aria-live="polite", so when a valid email is entered, VoiceOver reads all the content in the success component. However, I noticed that while VoiceOver reads the success message, the black outline (focus indicator) was completely missing. It was present in the sign-up form but not in the success message. Moreover, when I pressed Ctrl + Option + Space, I thought the dismiss button was clicked, but actually, the subscribe button was being clicked. This was fixed by adding `tabindex="-1"` to the heading elements. `tabindex="-1"` removes the element from the tab order, making it focusable only via JavaScript. Additionally, using `focus()` on these elements ensures that focus is explicitly moved to the correct heading when switching between sections, such as when the success message appears or when returning to the sign-up form. This approach ensures that the focus is correctly managed and that screen readers properly announce the relevant content.

## Acknowledgement

- I express my gratitude towards my mentor - Deborah for the insightful code review session and for suggesting improvements.
- I also thank Grace Snow from Frontend Mentor community who suggested how to tackle the accessibility issue related to applying focus on the heading elements so that screen reader can highlight the appropriate content.

## Author

- Website - [Rupali Roy Choudhury](https://www.linkedin.com/in/rupali-rc/)
- Frontend Mentor - [@rupali317](https://www.frontendmentor.io/profile/rupali317)
