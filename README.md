typescript ts-node-dev -D
npx tsc --init
    "rootDir": "./src" 
    "outDir": "./dist",     
package.json
    "dev": "ts-node-dev --respawn -transpileOnly src/index.ts"
express @trpc/server morgan
    @types/express -D
***************client***************
pnpm add @trpc/client  @trpc/server @trpc/react-query @tanstack/react-query
###
pnpm add --save @typegoose/typegoose # add typegoose itself

// desactivar constructor ts en models/note.ts 
"strictPropertyInitialization": false 
// config typegoose works
"experimentalDecorators": true 

tailwind
pnpm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

tailwind.config.cjs

    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",

    /** @type {import('tailwindcss').Config} */
    module.exports = {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {},
    },
    plugins: [],
    }

index.css

    @tailwind base;
    @tailwind components;
    @tailwind utilities;