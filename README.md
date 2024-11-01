# Creating new react project

https://docs.deno.com/runtime/tutorials/how_to_with_npm/react/
`deno run -A npm:create-vite@latest --template react-ts`

# Installing tailwind

https://tailwindcss.com/docs/guides/vite (replace npm with deno install
npm:something) `deno install npm:tailwindcss npm:postcss npm:autoprefixer`
`deno run npm:tailwindcss init -p`

```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

```
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```
