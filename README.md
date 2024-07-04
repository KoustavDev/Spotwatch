# Stpowatch with Tailwind CSS, Vite, and Daisy UI

**Description:**

This project is a stopwatch built with modern web technologies:

* **HTML:** Provides the core structure of the stopwatch interface.
* **Tailwind CSS:** Offers utility-first classes for rapid styling.
* **DaisyUI:** Extends Tailwind CSS with pre-built components for a sleek and consistent look.
* **JavaScript:** Handles the logic for timer functionality and lap recording.
* **Vite:** Enhances development workflow with hot module replacement and bundling.

### Features

* **Start/Pause Timer:** Start, pause, and resume the stopwatch.
* **Reset Timer:** Clears the elapsed time and lap list.
* **Lap Recording:** Capture lap times with automatic naming (Lap 1, Lap 2, etc.).
* **Lap Renaming:** Edit the name assigned to each lap for better organization.
* **Local Storage:** Lap data persists across page refreshes.

### Functionality

* Clicking the "Start" button begins the timer.
* Clicking "Pause" halts the timer without resetting the elapsed time.
* "Reset" clears both the timer and recorded laps.
* The "Lap" button captures the current time and adds a new entry to the lap list.
* Lap entries display the captured time and their names (e.g., Lap 1, Lap 2).
* Clicking a lap name allows you to edit and rename it.
* Lap data is stored in the browser's local storage, ensuring persistence across page refreshes.

  **Installation:**

1. Clone this repository:

   ```bash
   git clone https://github.com/KoustavDev/TODO-list
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

**Development:**

1. Start the development server:

   ```bash
   npm run dev
   ```

   This will open the app in your browser, usually at `http://localhost:3000/`.

2. Make changes to the code in the `src` directory.
3. The development server will automatically reload the browser with your changes.

**Deployment:**

1. Build the production-ready version of the app:

   ```bash
   npm run build
   ```

   This will create an optimized `dist` directory containing the production-ready files.

2. Deploy the contents of the `dist` directory to your preferred hosting provider (e.g., GitHub Pages, Netlify).

**Contributing:**

Feel free to fork this repository and submit pull requests with your enhancements!

**Additional Notes:**

* Feel free to customize the project further by adding features or changing the styling.
* Refer to the official documentation for each technology used for more advanced usage:
    * HTML: [https://developer.mozilla.org/en-US/docs/Learn/HTML](https://developer.mozilla.org/en-US/docs/Learn/HTML)
    * CSS: [https://developer.mozilla.org/en-US/docs/Learn/CSS/First_steps](https://developer.mozilla.org/en-US/docs/Learn/CSS/First_steps)
    * JavaScript: [https://developer.mozilla.org/en-US/docs/Web/JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
    * Tailwind CSS: [https://tailwindcss.com/docs/installation](https://tailwindcss.com/docs/installation)
    * Vite: [https://vitejs.dev/guide/](https://vitejs.dev/guide/)
    * Daisy UI: [https://daisyui.com/](https://daisyui.com/)
