<div>
  <h1>A Photographer Portfolio Website</h1>
  <div>
    <img src="https://img.shields.io/badge/-TypeScript-black?style=for-the-badge&logoColor=white&logo=typescript&color=3178C6" alt="typescript" />
     <img src="https://img.shields.io/badge/-React_JS-black?style=for-the-badge&logoColor=white&logo=react&color=1786ab" alt="react" />
    <img src="https://img.shields.io/badge/-Tailwind_CSS-black?style=for-the-badge&logoColor=white&logo=tailwindcss&color=06B6D4" alt="tailwindcss" />
  </div>
    <br/>
  <p>LensCrafters offers a modern and responsive digital showcase for photographers, featuring a meticulously crafted portfolio interface. The website is built on ReactJS, ensuring seamless user interactions and dynamic content presentation. It boasts a sophisticated aesthetic, tailored through Tailwind CSS, and enriched with fluid animations courtesy of Framer Motion. Additionally, LensCrafters is designed with user comfort in mind, offering a dark mode option to cater to varying viewing preferences. This platform is not just a website; it’s an immersive visual experience designed to highlight the artistry of photography in a digital space.</p>
</div>

**Here is a live preview for the project _[LensCrafters](https://lens-crafters.vercel.app/)_!**

## <a id="introduction" name="introduction">🤖 Introduction</a>

Developed with React.js and leveraging its capabilities, the Photographer Portfolio Website presents various images types, showcasing comprehensive information in a well-designed for an enhanced user experience.

## <a name="tech-stack">⚙️ Tech Stack</a>

- React.js
- TypeScript
- Tailwind CSS
- React Router Dom
- Context-Api

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
- Primarily, it operates with [pnpm](https://pnpm.io/); however, [npm](https://www.npmjs.com/) may also be used.

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
<summary><code>globals.css</code></summary>

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  body {
    @apply overflow-hidden text-primary font-secondary bg-white;
  }
  .h1 {
    @apply text-[54px] lg:text-[70px] xl:text-[100px] font-primary font-bold capitalize leading-[120%] tracking-[-0.05em] mb-2;
  }
  .section {
    @apply h-screen w-screen dark:bg-black duration-200;
  }
  .btn {
    @apply py-[18px] px-[50px] h-[66px] flex items-center justify-center uppercase font-secondary bg-primary text-white rounded-lg font-bold shadow-2xl dark:bg-slate-700 text-lg;
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

## <a name="more">🚀 More</a>

**A few screenshots from the project**

|                                            |                                                 |
| ------------------------------------------------------- | :-----------------------------------------------------: |
|![Lens1](https://github.com/AmrAbouElkair/LensCrafters/assets/83710148/86ff6429-769f-4f97-a829-c4336b81798d) | ![Lens2](https://github.com/AmrAbouElkair/LensCrafters/assets/83710148/5dd9b4c4-7dcf-45c5-97e1-522a737f67ae) |

|                                         |                                                 |
| ------------------------------------------------------- | :-----------------------------------------------------: |
| ![Lens3](https://github.com/AmrAbouElkair/LensCrafters/assets/83710148/11d39d0b-c5a5-4d7c-a71a-e247e5dc6902) | ![Lens4](https://github.com/AmrAbouElkair/LensCrafters/assets/83710148/c09ed4d5-58e1-4499-87ce-158d5842644f) |
| ![Lens5](https://github.com/AmrAbouElkair/LensCrafters/assets/83710148/85f9271e-04e8-429a-95d3-fa8d15d801ed) | ![Lens6](https://github.com/AmrAbouElkair/LensCrafters/assets/83710148/c77868f6-b994-45cc-baf6-46ee4e2c6ab1) |
| ![Lens7](https://github.com/AmrAbouElkair/LensCrafters/assets/83710148/f12cb6ff-555b-4c3b-b8ea-19f5eea4bf40) | ![Lens8](https://github.com/AmrAbouElkair/LensCrafters/assets/83710148/cf0c3911-4317-40be-9bae-3198f5dc5223) |
