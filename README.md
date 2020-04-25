# Cardo

Cardo is a mobile application that helps you find the perfect words for greeting cards.

Check it out the website [here](https://cardo.app), or the app here on the [Google Play Store!](https://play.google.com/store/apps/details?id=com.johnhannagan.cardo).

This repository contains the React Native app and the AWS Amplify backend.

## Overview

> Cardo helps you write meaningful and impactful messages on cards to your friends, family and loves ones. With Cardo, you'll never struggle to find the perfect way to say Happy Birthday or Merry Christmas. Pick from over 10 different categories of messages, and explore until you find the perfect one for your card.

> You can find the perfect text for greeting cards of all types with Cardo, including: Mother's Day, Father's Day, Easter, Birthdays, Get Well Soon, Thank You, Anniversaries, Weddings, Births, Sympathy, Christmas, Last Day, Apologies and Valentines.

> Didn't find the perfect message inside Cardo? You can also submit suggestions which will be reviewed and added for others to browse!

## Screenshots!

<image src="https://user-images.githubusercontent.com/492636/79265685-c8f64b80-7e96-11ea-8b8a-10770a42fabc.png" width="250"> <image src="https://user-images.githubusercontent.com/492636/79265698-cd226900-7e96-11ea-90b5-375b936b40bf.png" width="250">

## Details

This project is created with the following technologies:

- Typescript
- React
- React Native
- Expo
- AWS Amplify
- GraphQL
- Lerna

And separated into two main apps as part of the lerna reponsitory: `backend` and `app`

### backend

This contains the AWS Amplify project, which includes a GraphQL schema, custom resolvers and authentication.

#### Deploy

To deploy or update, inside the backend folder run:

```
amplify push
```

### app

This contains the React Native application build with Expo.

To run locally in development mode: `expo start`

Note: The application expects the backend to be built, and recevies backend service configurations from the generated `aws-exports.js`

## Special thanks

A huge and special thanks to all of the open source projects that make Cardo possible, and an **extra shout out** to Katerina Limpitsouni of the unDraw project.

[unDraw](https://undraw.co/) provides hundreds of beautiful, free and open source illustrations.
