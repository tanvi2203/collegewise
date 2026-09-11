# CollegeWise

CollegeWise is a college discovery platform built as a frontend project.

It helps students search for colleges, view college information, compare colleges and get college recommendations based on their score and preferred location.

## Features

- Search colleges by name
- View college details
- Compare up to three colleges
- Highlight better values during comparison
- College predictor based on score
- Filter predictor results by location
- Responsive design for different screen sizes
- Simple and easy-to-use interface

## Technologies Used

- Next.js
- React
- TypeScript
- Tailwind CSS

## Project Structure

```text
src/
└── app/
    ├── page.tsx
    ├── colleges/
    │   ├── page.tsx
    │   └── [id]/
    │       └── page.tsx
    ├── compare/
    │   └── page.tsx
    └── predictor/
        └── page.tsx
```

## Main Pages

### Home

The home page introduces the CollegeWise platform and provides navigation to the main features.

### Explore Colleges

Displays a list of colleges with information such as location, rating, annual fees and average placement.

Users can search for a college by name.

### College Details

Shows information about a selected college, including its location, rating, fees and average placement.

### Compare Colleges

Allows users to select up to three colleges and compare their location, rating, annual fees and average placement.

Better values are highlighted during comparison.

### College Predictor

Users can enter their score and preferred location to get suitable college recommendations.

## How to Run the Project

First, install the required packages:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open the project in your browser:

```text
http://localhost:3000
```

## Production Build

To create and check the production build:

```bash
npm run build
```

## Project Flow

Search → View College → Compare → Get Recommendations

## Future Improvements

The project can be extended in the future with:

- Real college data from an API
- User authentication
- More detailed college information
- Database integration
- Advanced prediction based on entrance exam data

## Author

Tanvi Dudhgaonkar