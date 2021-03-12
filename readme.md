<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Thanks again! Now go create something AMAZING! :D
***
***
***
*** To avoid retyping too much info. Do a search and replace for the following:
*** github_username, buttery, twitter_handle, email, project_title, project_description
-->

<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
<!-- [![Contributors][contributors-shield]][contributors-url] -->
<!-- [![Forks][forks-shield]][forks-url] -->

<!-- [![Stargazers][stars-shield]][stars-url] -->
<!-- [![Issues][issues-shield]][issues-url] -->
<!-- [![MIT License][license-shield]][license-url] -->
<!-- [![LinkedIn][linkedin-shield]][linkedin-url] -->

<!-- PROJECT LOGO -->

<!-- <br /> -->
<p align="center">
  <a href="https://github.com/michael-gann/Petsy">
    <img src="./Petsy/images/petsy-logo.png" alt="Logo" width=200" height="200">
  </a>

  <h3 align="center">Petsy</h3>

  <p align="center">
    Petsy* (an Etsy clone) is a marketplace for pets and their owners, or those looking to add another member to their family! Petsy also offers items for all your pet needs. You can create an account and browse the different items the site has to offer, and even checkout! (Don't worry, checking out with items in your cart will only pretend to send those items your way. You will not be charged. But you also won't get a new pet or any of our cool items... )
    <br />
    <!-- <a href="https://github.com/michael-gann/buttery"><strong>Explore the docs »</strong></a> -->
    <br />
    <br />
    <a href="https://petsy-g5.herokuapp.com/">View Live Project</a>
    <!-- · -->
    <!-- <a href="https://github.com/michael-gann/buttery/issues">Report Bug</a> -->
    <!-- · -->
    <!-- <a href="https://github.com/michael-gann/buttery/issues">Request Feature</a> -->
  </p>
</p>

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary><h2 style="display: inline-block">Table of Contents</h2></summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgements">Acknowledgements</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->
## About The Project

<p align="center">
  <img src="https://i.postimg.cc/kgg0M2cy/Screen-Shot-2021-02-15-at-12-22-49-PM.png" alt="screenshot of app" width="80%">
</p>

<!-- ![Alt Text](https://media.giphy.com/media/ClZZPi3QXgXXoNRyyG/giphy.gif) -->

### Built With

* [React](https://reactjs.org/)
* [Redux](https://redux.js.org/)
* [Flask](https://flask.palletsprojects.com/en/1.1.x/)

<!-- GETTING STARTED -->
## Getting Started

To start using the app, create an account [here](https://petsy-g5.herokuapp.com/) by clicking on **Sign up** in the top right of your screen.<br> Alternatively, head over [here](https://petsy-g5.herokuapp.com/) and click **Login** in the top right of your screen. Inside the modal, click the **Demo login** button to login as a demo user without creating an account. Or login with your credentials if you have an account.

<!-- ### Prerequisites

* npm

  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Clone the repo

   ```sh
   git clone https://github.com/michael-gann/buttery.git
   ```

2. Install NPM packages

   ```sh
   npm install
   ```

3. Change directory to app and install backend packages using pip

  ```sh
  pip install
  ``` -->

<!-- USAGE EXAMPLES -->
## Usage

### Product Listings

<!-- <p align="center">
  <img src="https://media.giphy.com/media/PNmFVaGepwlIryAPVf/giphy.gif" alt="site navigation gif">
</p> -->

You can browse the site, which is currently broken down into two categories of products, Pets and Items, through the navbar at the top of the page. In the body of the page you will see the products listed. If you are logged in you will see an add to cart button associated with each product, otherwise you will only see the description and price of that item, as well as the average star rating. You can click on a product to get a more detailed view of each product.

### Shopping Cart

<!-- <p align="center">
  <img src="https://media.giphy.com/media/PNmFVaGepwlIryAPVf/giphy.gif" alt="site navigation gif">
</p> -->

You can view your cart if you are logged in to the site. You can get there by clicking on the cart icon in the top right of the screen. You can add items from the site to your cart that you are interested in purchasing. If you come back later those items will still be there. This way you can keep track of items you may be interested in purchasing and purchase them later down the line. You can see your carts' total price as well as the products currently in your cart. Next to your cart contents you can click on checkout to get a confirmation screen letting you know your items are ordered and on the way. Don't worry! This is only to bring an end to the customer journey as this is just a mock e-commerce site.

### Comments/Reviews

<!-- <p align="center">
  <img src="https://media.giphy.com/media/PNmFVaGepwlIryAPVf/giphy.gif" alt="site navigation gif">
</p> -->

If you are logged in, you can add comments or reviews to products on Petsy! Navigate to an item by clicking on its image from the main page or by using the search feature at the top of the screen to find a particular item by name. Once in the detailed view of an item scroll down to reviews. Here, you can type into a text area and add a comment with your thoughts on the current item, or if you've purchased it, leave a review and let others know how your experience with it by rating it between 1 and 5 stars!

## DB Schema

<p align="center">
<img src="https://i.imgur.com/pQqWg7M.png" width="80%">
</p>

<!-- ROADMAP -->
## Roadmap

Please browse the [wiki](https://github.com/michael-gann/Petsy/wiki) to see the beginning of Petsy from design to wireframing of each feature.

See the [open issues](https://github.com/michael-gann/Petsy/issues) for a list of proposed features (and known issues).

<!-- CONTRIBUTING -->
<!-- ## Contributing

Contributions are what make the open source community such an amazing place to be for learning, inspiring, and creating. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request -->

<!-- LICENSE -->
<!-- CONTACT -->
## Contact

### Nick Matthews

- [Portfolio](https://www.nickfmatthews.com/)
- [LinkedIn](https://www.linkedin.com/in/nickfmatthews/)
- nickfmatthews@gmail.com

### Ryan Young

- [Portfolio](https://ryan-young.herokuapp.com/)
- [LinkedIn](https://www.linkedin.com/in/ryan-young-b67a7aab/)
- ryoung7986@gmail.com

### Michael Gann

- [Portfolio](https://michael-gann.github.io/michael-gann.github.io/)
- [LinkedIn](https://www.linkedin.com/in/michael-gann-1a2161201/)
- mchlgnn@protonmail.com

### Danny Pong

<!-- [Portfolio](https://michael-gann.github.io/michael-gann.github.io/)

[LinkedIn](https://www.linkedin.com/in/michael-gann-1a2161201/) -->

<!-- ACKNOWLEDGEMENTS -->

## Acknowledgements

* [othneildrew/best-README-template](https://github.com/othneildrew/Best-README-Template)
* [better-react-spinkit](https://www.npmjs.com/package/better-react-spinkit)
* [react-promise-tracker](https://www.npmjs.com/package/react-promise-tracker)
<br> <br> *\*No animals were harmed in the making of this site.*

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/michael-gann/repo.svg?style=for-the-badge
[contributors-url]: https://github.com/michael-gann/buttery/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/michael-gann/repo.svg?style=for-the-badge
[forks-url]: https://github.com/michael-gann/repo/network/members
[stars-shield]: https://img.shields.io/github/stars/michael-gann/buttery.svg?style=for-the-badge
[stars-url]: https://github.com/michael-gann/buttery/stargazers
[issues-shield]: https://img.shields.io/github/issues/michael-gann/repo.svg?style=for-the-badge
[issues-url]: https://github.com/michael-gann/buttery/issues
[license-shield]: https://img.shields.io/github/license/michael-gann/repo.svg?style=for-the-badge
[license-url]: https://github.com/michael-gann/repo/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/michael-gann-1a2161201/
[react-url]: https://img.shields.io/badge/react
