# Introduction
* [Project requirement](https://drive.google.com/file/d/1x5l_hC5c26MauhTpACwGaa2nBUDo5uad/view)
* Deployed at: https://blog-example-sooty.vercel.app/

## Getting Started
### 1. Installations
```bash
npm install
```
### 2. Run the development server
```bash
npm run dev
# or
next dev
# or
npx next dev
```
### 3. Build for production
```bash
npm run build 
# or
next build
# or
npx next build
```
### 4. Run production build
```bash
npm start
# or
next start
# or
npx next start
```

## System Design and Implementation 
[Project note](https://hackmd.io/@archielai/B1U7-pl2p)

### System Requirements
* Package Manager: npm
* Language: TypeScript
* Framework: Next.js v14.1.0
* CSS: TailwindCSS v3.3.0
* UI Library: MUI v5.15.10

### Project Structure
```
root/
   ├── src/
   │   ├── app/
   │   │   ├── post/[id]/
   │   │   │     └── page.tsx
   │   │   ├── redirect/
   │   │   │     └── page.tsx
   │   │   ├── globals.css
   │   │   ├── layout.tsx
   │   │   └── page.tsx
   │   ├── component/ 
   │   ├── public/  
   │   ├── service/  
   │   └── types/
   ├── next.config.mjs
   ├── package.json
   └── tailwind.config.ts
```
#### Directory Descriptions
* component：Reusable ui components.
* public: Static assets including images.
* service：API functions.
* types: TypeScript types and interfaces.
#### Configurations
* Next.js Configuration: next.config.mjs
* Tailwind CSS Configuration: tailwind.config.ts

### Routes
* `/`: Home page listing all posts.
* `/redirect`: Redirect to home page after Github Oauth app authentication.
* `/post/[id]`: Dynamic routes of each post.

### Caching Strategies
* [Project note on caching](https://hackmd.io/FvY8WJ3MQlm_ow0QWvvX2Q?view#3%E8%B3%87%E6%96%99%E5%8F%96%E5%BE%97%E5%8F%8A%E5%BF%AB%E5%8F%96)

* Diagram of token caching
   * Access token is cached on the server side for safety concern.
![token cache diagram](/src/public/image/tokenCache.jpg)

* Diagram of data caching
   * Data is cached on the client side (context) for the ease of rendering dynamic routes, also cached on the server side by default.
![data cache diagram](/src/public/image/dataCache.jpg)