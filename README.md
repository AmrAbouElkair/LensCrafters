   <h1 align="center">LensCrafter <img src="https://github.com/AmrAbouElkair/Nike-Store/assets/83710148/34b02ef8-faa3-4f26-8029-9f3bb0590422" width="25" alt="Logo" /> </h1>
  <div align="center">
  <img src="https://github.com/AmrAbouElkair/LensCrafters/assets/83710148/b2191e86-53d3-4eb5-a50d-b415243db26d" alt="mainImg"/>
  <div>
    <img src="https://img.shields.io/badge/-TypeScript-black?style=for-the-badge&logoColor=white&logo=typescript&color=3178C6" alt="typescript" />
     <img src="https://img.shields.io/badge/-React_JS-black?style=for-the-badge&logoColor=white&logo=react&color=1786ab" alt="react" />
    <img src="https://img.shields.io/badge/-Tailwind_CSS-black?style=for-the-badge&logoColor=white&logo=tailwindcss&color=06B6D4" alt="tailwindcss" />
  </div>
  </div>

## 📋 <a name="table">Table of Contents</a>

1. ![idea](https://github.com/AmrAbouElkair/LensCrafters/assets/83710148/c8e0ad20-4a63-4fa0-8c4f-6c8368ed0adf) [Introduction](#introduction)
2. 🤖 [Tech Stack](#tech-stack)
3. 🔋 [Features](#features)
4. 🤸 [Quick Start](#quick-start)
5. 🕸️ [Snippets](#snippets)
6. 📷 [Screenshots](#screenshots)
7. ![jigsaw (1)](https://github.com/AmrAbouElkair/LensCrafters/assets/83710148/316cd490-12f9-4b15-9977-f0d202c1d150) [Contribute](#contribute)

LensCrafters offers a modern and responsive digital showcase for photographers, featuring a meticulously crafted portfolio interface. The website is built on ReactJS, ensuring seamless user interactions and dynamic content presentation. It boasts a sophisticated aesthetic, tailored through Tailwind CSS, and enriched with fluid animations courtesy of Framer Motion. Additionally, LensCrafters is designed with user comfort in mind, offering a dark mode option to cater to varying viewing preferences. This platform is not just a website; it’s an immersive visual experience designed to highlight the artistry of photography in a digital space.

**Here is a live preview for the project _[LensCrafters](https://lens-crafters.vercel.app/)_!**

## <a name="introduction"> ![idea](https://github.com/AmrAbouElkair/LensCrafters/assets/83710148/c8e0ad20-4a63-4fa0-8c4f-6c8368ed0adf) Introduction</a>

Developed with React.js and leveraging its capabilities, the Photographer Portfolio Website presents various images types, showcasing comprehensive information in a well-designed for an enhanced user experience.

## <a name="tech-stack">🤖 Tech Stack</a>

- React.js
- TypeScript
- Tailwind CSS
- React Router Dom
- Context-Api
- Vite

## <a name="features">🔋 Features</a>

👉 **Home Page**: Showcases a visually appealing display of Images, providing a captivating introduction to the diverse range of fabulous Images.

👉 **TypeScript Types**: Utilize TypeScript to provide robust typing for enhanced code quality and better development

👉 **Responsive Website Design**: The website is designed to be visually pleasing and responsive, ensuring an optimal user experience across various devices.

👉 **Animation**: Utilize the best possible use of Framer Motion's capabilities to display amazing animation.

👉 **Routing**: React Router DOM was implemented to accommodate nested routes.

👉 **Vite Build Tool**: Vite was used as the replacement of the antiquated, incredibly slow Create React app.

👉 **Design Pattern**: Observing the principles of React Architecture and the Design pattern

👉 **Pnpm Package Manager**: Pnpm is utilized since it is significantly quicker and more reliable than yarn and npm.

and many more, including code architecture and reusability

## <a name="quick-start">🤸 Quick Start</a>

Follow these steps to set up the project locally on your machine.

**Prerequisites**

Make sure you have the following installed on your machine:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- Primarily, it operates with [pnpm](https://pnpm.io/); however, [npm](https://www.npmjs.com/) may also be used just remove `pnpm-lock.yaml` File.

**Cloning the Repository**

```bash
git clone https://github.com/AmrAbouElkair/LensCrafters.git
cd LensCrafters
```

**Installation**

Install the project dependencies using npm:

```bash
pnpm inatall or npm install
```

**Running the Project**

```bash
pnpm dev or npm run dev
```

Open [http://localhost:5173/](http://localhost:5173/) in your browser to view the project.

## <a name="snippets">🕸️ Snippets</a>

</details>

<details>
<summary><code>index.css</code></summary>

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  body {
    @apply overflow-hidden bg-white font-secondary text-primary;
  }
  .h1 {
    @apply mb-2 font-primary text-[54px] font-bold capitalize leading-[120%] tracking-[-0.05em] lg:text-[70px] xl:text-[100px];
  }
  .section {
    @apply h-screen w-screen duration-200 dark:bg-black;
  }
  .btn {
    @apply flex h-[66px] items-center justify-center rounded-lg bg-primary px-[50px] py-[18px] font-secondary text-lg font-bold uppercase text-white shadow-2xl dark:bg-slate-700;
  }
}
```

</details>

<details>
<summary><code>tailwind.config.js</code></summary>

```javascript
/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      primary: "Playfair Display",
      secondary: "Mulish",
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1192px",
    },
    extend: {
      colors: {
        primary: "#0E1112",
        grey: "#484B4B",

        accent: "#EEF7F9",
      },
    },
  },
  plugins: [],
};
```

</details>

## <a name="screenshots"> 📷 Screenshots</a>

![Lens1](https://github.com/AmrAbouElkair/LensCrafters/assets/83710148/9b29e42e-927f-4a9b-81e8-1f3300f2db11)
![Lens3](https://github.com/AmrAbouElkair/LensCrafters/assets/83710148/1e615d2a-eb70-4e2d-bf9f-d9ec4be8354a)
![Lens5](https://github.com/AmrAbouElkair/LensCrafters/assets/83710148/9846bf87-0bd4-4253-9ef6-99fc1010f371)
![Lens7](https://github.com/AmrAbouElkair/LensCrafters/assets/83710148/15794607-2456-4597-b509-b045ed6a3be3)

## <a name="contribute">![jigsaw](https://github.com/AmrAbouElkair/LensCrafters/assets/83710148/fa2848f1-94b6-4951-9334-fb9ec40c16a7) Contribute</a>

1. Fork the Project
2. Create your Feature Branch (git checkout -b `new branch`)
3. Commit your Changes (git commit -m 'Add some `commit name`)
4. Push to the Branch (git push origin `new branch`)
5. Open a Pull Request
