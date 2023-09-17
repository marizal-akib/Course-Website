# Course Registration Website

This is a React-based Course Registration website that allows users to explore and register for various courses. The website is deployed using Surge and can be accessed at [https://foamy-attack.surge.sh/](https://foamy-attack.surge.sh/).

## Features

### Course Listings

The website lists various courses, each with its details, including the course name, description, price, and credit hours.

### Course Descriptions

Each course has a detailed description that explains what the course covers. This helps potential students understand the course content and make informed decisions.

### Pricing Information

The price of each course is displayed, allowing users to see the cost associated with each course.

### Credit Hours

The credit hours for each course are mentioned, helping users understand the time commitment required for each course.

### Selection

Users have the option to select courses of interest by clicking the "[Select]" button. This implies that there might be a registration or enrollment feature.

### Summary

At the bottom of the page, there is a summary section that calculates the total credit hours selected and the total price based on the courses selected by the user.

### Remaining Credit Hours

There is a "Credit Hour Remaining" section that indicates the maximum credit hours a user can register for. This helps users stay within their credit hour limit.

### Total Price

The total price for the selected courses is displayed in USD, giving users a clear view of their financial commitment.

### Course Registration

While not explicitly mentioned, the presence of the "[Select]" buttons suggests that users can use this page for course registration.

## State Management

In this assignment project, state is managed using React's `useState` hook to keep track of various aspects of the user's interaction with the Course Registration website. Here's how state is handled:

### `addedCourses` State

```javascript
const [addedCourses, setAddedCourses] = useState([]);
```

The `addedCourses` state is initialized as an empty array. This state keeps track of the courses the user has selected to add to their cart.

### `totalHour` State

```javascript
const [totalHour, setTotalHour] = useState(0);
```

The `totalHour` state is initialized to 0. This state is used to calculate and display the total credit hours for the courses the user has selected.

### `remaining` State

```javascript
const [remaining, setRemaining] = useState(20);
```

The `remaining` state is initialized to 20, representing the maximum credit hours a user can select. This state is used to show the remaining credit hours available for selection.

### `price` State

```javascript
const [price, setPrice] = useState(0);
```

The `price` state is initialized to 0. This state keeps track of the total price of the selected courses.

### `handleSelectToCart` Function

The `handleSelectToCart(course)` function is called when a user clicks the "[Select]" button to add a course to their cart. It performs several tasks:

- Checks if the course has already been selected.
- Calculates the new total credit hours and price based on the selected courses.
- Ensures that the user does not exceed the maximum credit hour limit.
- Updates the state values accordingly.

## Usage

To use this Course Registration website:

1. Visit the website at [https://foamy-attack.surge.sh/](https://foamy-attack.surge.sh/).
2. Explore the course listings, read descriptions, and click the "[Select]" button to add courses to your cart.
3. View the summary section to see your total credit hours and the total price.
4. Ensure that you do not exceed the maximum credit hour limit.

Enjoy exploring and registering for courses!

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
