## Description

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.2.6 and fetches and displays data from the Rick and Morty API. The API results are presented in a table format with infinite scroll and filtering functionalities. Users can search for characters by name using a search bar, apply filters to narrow down results based on criteria like character status, and scroll infinitely to load more results dynamically.

## Features
Infinite Scroll: Users can load more data as they scroll, providing a seamless experience.
Filtering: Users can refine results based on character properties such as status, ensuring relevant information is displayed.
Search Bar: A search input at the top left allows users to find specific characters by name.
Refresh Button: Clears filters and reloads data, acting like a reset.

## Technologies Used
Angular 18
TypeScript
RxJS
Angular Material (for the UI components like tables)
CSS/SCSS for styling
Rick and Morty API for the data source

## Setup and Installation

# Prerequisites
Ensure that you have the following installed on your machine:
Node.js (v16.x or higher)
Angular CLI (v18+)
Docker (optional, for Docker setup)

# Installation
cd rick-morty-angular
Install dependencies: npm install

# Configuration
Configuration files are used to store environment variables like API URLs and other settings.

## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding
Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build
Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests
Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests
Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help
To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

## Docker
docker build -t rick-morty-angular .
docker run -d -p 4200:80 rick-morty-angular

## Notes
API Integration: The application uses the Rick and Morty API to fetch character data. No authentication is required to access the API.
Responsiveness: The app adapts somehwat to both PC and tablet screen sizes, offering an optimized experience on different devices but could use some improvements if I had some more time :). I could definitely make the table layout more rsponsive with the columns as well as make them collapsible to optimize space and adapt to sizes better.
Reusable Components: Components are designed to be reusable and maintainable for future extensions.

As you cann probably tell by now I can not for the life of me figure out why some of my icons are loading and some are not. I've spent too many hours pouring over stackoverflow over broken links it blows my mind honestly and it's always the most minor things. All these years in the industry and a Master's degree and a broken image link might just be the death of me, but I guess some days you just can't get rid of a bomb. My 'ol Macbook did what she could. Happy Coding.