# 🏛️ CivicConnect

**Smart Government Complaint Portal**

CivicConnect is a modern digital platform designed to bridge the gap between citizens and municipal authorities. It empowers citizens to report civic issues, track their resolution in real-time, and ensures transparency in public services.

![CivicConnect Banner](public/pwa-512x512.png)

## 🚀 Features

### 👥 For Citizens
- **Easy Complaint Registration:** Report issues like potholes, garbage, water supply, etc., with location and details.
- **Real-time Tracking:** Track the status of filed complaints from "Pending" to "Resolved".
- **Dashboard:** View history of reported issues and their current status.
- **Profile Management:** Manage personal details and view activity analytics.

### 👮 For Officers
- **Task Management:** View and manage assigned complaints in specific zones.
- **Status Updates:** Update the status of complaints (In Progress, Resolved, Rejected) with remarks.
- **Map View:** Visualize complaint locations on an interactive map for better route planning.
- **Broadcast Alerts:** Send notifications to citizens about maintenance or issues.

### 🛡️ For Admins
- **System Overview:** Monitor total complaints, resolution rates, and active officers.
- **Officer Management:** Add or remove officers and assign them to zones.
- **Reports & Analytics:** View detailed system logs and export performance reports.

### 📱 Technical Highlights
- **Progressive Web App (PWA):** Installable on mobile and desktop with offline support.
- **Dark Mode:** Fully supported dark/light theme toggling.
- **Responsive Design:** Optimized interface for both mobile and desktop experiences.
- **App-like Feel:** Bottom navigation bar for mobile users in standalone mode.

## 🛠️ Tech Stack

- **Frontend:** [React](https://reactjs.org/) (Vite)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Routing:** [React Router DOM](https://reactrouter.com/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **PWA:** [Vite PWA Plugin](https://vite-pwa-org.netlify.app/)
- **Maps:** Google Maps Embed (Placeholder/Integration ready)

## 📦 Installation

1.  **Clone the repository**
    ```bash
    git clone https://github.com/yourusername/CivicConnect.git
    cd CivicConnect
    ```

2.  **Install dependencies**
    ```bash
    npm install
    ```

3.  **Run the development server**
    ```bash
    npm run dev
    ```

4.  **Build for production**
    ```bash
    npm run build
    ```

## 🖥️ Usage

Since this is a frontend prototype, authentication is simulated using local storage. You can explore the different roles using the landing page.

1.  **Landing Page:** Choose your role (Civilian, Officer, Admin).
2.  **Authentication:**
    *   **Civilian:** Sign up or log in to access the citizen dashboard.
    *   **Officer:** Log in to view assigned tasks (Mock credentials can be used).
    *   **Admin:** Log in to access system settings (Mock credentials can be used).
3.  **PWA Installation:**
    *   Click the "Install App" button in the popup or the browser's install icon to add CivicConnect to your home screen.

## 📂 Project Structure

```
CivicConnect/
├── public/              # Static assets (icons, manifest, offline.html)
├── src/
│   ├── components/      # Reusable UI components (Navbar, Footer, etc.)
│   ├── pages/           # Application pages (Dashboards, Login, Profiles)
│   ├── utils/           # Utility functions (Theme logic)
│   ├── App.jsx          # Main application component & Routing
│   └── main.jsx         # Entry point
├── index.html           # HTML template
├── vite.config.js       # Vite & PWA configuration
└── tailwind.config.js   # Tailwind CSS configuration
```

## 🎨 Customization

- **Theme:** The app uses a `dark` class on the `html` element. Colors are defined in Tailwind classes.
- **PWA:** Modify `vite.config.js` to change manifest details (name, icons, colors).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1.  Fork the project
2.  Create your feature branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

## 📄 License

This project is licensed under the MIT License.