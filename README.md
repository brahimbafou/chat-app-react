# Chat App

A simple chat application built with React that allows users to send and receive messages in real-time using local storage. This app enables multiple users on the same browser (different tabs) to communicate.

## Features

✅ **User Registration** - Users enter a username to join the chat. 
✅ **Persistent Messages** - Messages are stored in `localStorage` and remain even after refreshing the page.
✅ **Multi-Tab Communication** - Messages are synced across multiple tabs using the `storage` event.
✅ **Basic UI & Styling** - Custom classes for styling, with a structured and clean UI for messaging.

## Tech Stack

- **React** (useState, useEffect, useRef...)
- **LocalStorage** for message storage and username persistence
- **React Router** for navigation between pages
- **CSS** for styling (custom utility classes)

## Installation

1. **Clone the Repository:**
   ```bash
   git clone http://github.com/brahimbafou/chat-app-react.git
   cd chat-app
   ```

2. **Install Dependencies:**
   ```bash
   npm install
   ```

3. **Run the App:**
   ```bash
   npm start
   ```

## Project Structure

```
chat-app/
│── public/
│   ├── favicon.svg
│── src/
│   ├── components/
│   │   ├── Home.jsx
│   │   ├── Inscription.jsx
│   │   ├── Inscription.css
│   │   ├── Chat.jsx
│   │   ├── Chat.css
│   ├── theme/
│   │   ├── base.css
│   │   ├── color.css
│   │   ├── effects.css
│   │   ├── responsive.css
│   │   ├── typo.css
│   ├── App.jsx
│   ├── main.jsx
│── index.html
│── package.json
│── package-lock.json
│── README.md
```

## Usage

1. Open the app and navigate to the **Inscription** page.
2. Enter a username and join the chat.
3. Send and receive messages. If another user joins in a new tab, they will see the previous messages and can send new ones.

## How It Works

- **Username & Avatar**: Stored in `localStorage`.
- **Messages**: Stored in `localStorage` and updated using the `storage` event for real-time sync.
- **Auto Scroll**: Chat scrolls automatically when new messages arrive.
- **Navigation**: Uses `react-router-dom` to switch between pages.

## Future Improvements

🚀 Implement WebSockets for real-time messaging without relying on local storage.
🚀 Add user avatars and a better UI/UX experience.
🚀 Support for multimedia messages (images, GIFs, etc.).

## License

This project is licensed under the MIT License.