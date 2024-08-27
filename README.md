

# Card Customization App

A React application that allows users to select a card template, customize it with text, preview the card, and download it.

# Check it out!!
you can see the website here: https://card-maker-eid.web.app/

## Features

- **Card Selection**: Choose from multiple card templates.
- **Text Customization**: Enter and update text on the selected card.
- **Preview**: View a preview of the card with the customized text.
- **Download**: Download the card with high-quality text overlay.

## Technologies Used

- **React**: For building the user interface.
- **HTML5**: For structure and styling.
- **CSS**: For styling the components.

## Getting Started

To run this project locally, follow these steps:

### Prerequisites

- Node.js (recommended version: 18.x or later)
- npm (Node Package Manager)

### Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/your-username/card-customization-app.git
   ```

2. **Navigate to the Project Directory**

   ```bash
   cd card-customization-app
   ```

3. **Install Dependencies**

   ```bash
   npm install
   ```

### Running the Application

To start the development server and view the app in your browser:

```bash
npm start
```

The application will be accessible at `http://localhost:3000` by default.

### File Structure

- `src/`
  - `components/`
    - `Card.js`: card templates.
    - `CardList.js`: Component for displaying card templates.
    - `PreviewButton.js`: Button component for previewing the selected card.
    - `DownloadButton.js`: Button component for downloading the customized card.
  - `images/`: Folder containing card template images.
  -`styles/` : containes the css files. 
    - `App.css`: Styles for the application.
    - `Card.css`: Styles for the Card.
  - `App.js`: Main component managing state and rendering other components.
  - `index.js`
- `public/`
  - `index.html`: Main HTML file with basic setup.
- `package.json`: Project configuration and dependencies.

### How It Works

1. **Select a Card**: Click on a card template to select it.
2. **Customize Text**: Enter text into the input field to customize the card.
3. **Preview the Card**: Click the "Preview Card" button to see your customized card.
4. **Download the Card**: Click the "Download Card" button to download the card as a PNG file with the customized text.

