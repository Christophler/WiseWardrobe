<!-- TITLE -->
<h1 align="center">WiseWardrobe</h1>
<p align="center">
Your Wardrobe, Your Way
</p>


<!-- ABOUT THE PROJECT -->
## About The Project

WiseWardrobe is an intuitive web app designed to help take control of your wardrobe. 

Useful for managing everyday outfits, planning a vacation wardrobe, or just trying to remember where your favorite shirt went, WiseWardrobe makes it effortless. 

Log your clothing items, categorize them by type, color, and even create outfit combinations to save time and stress. Saving you from overbuying and rediscovering forgotten favorites, bringing a more organized, stylish you.



<!-- TECHNOLOGIES USED -->
## Built With

- MongoDB
- Espress.js
- React
- Node.js



<!-- GETTING STARTED -->
## Getting Started

### Prerequisites
- Ensure npm is installed
    ````sh
    npm ci npm@latest -g
    ````
- Install all required libraries
    ````sh
    npm i --prefix client
    npm i --prefix server
    ````

#### Frontend Libraries
- express
- mongoose
- dotenv
- nodemon
- nodemon

#### Backend Libraries
- chakra-ui v2
- react router
- react icons
- zustand


### Starting the Express backend server locally on port 5000
````sh
cd .\server\
npm run dev
````

### Starting the Vite frontend server locally on port 5173
````sh
cd .\client\
npm run dev
````



<!-- ROADMAP -->
## Roadmap
Essentials:
- [ ] Landing page
- [x] Feature inventory
- [x] Add an item to the inventory
- [x] Remove an item from the inventory
- [x] Modify an item
- [ ] Add a picture from a local directory
- [x] Preview pictures
- [ ] Wishlist

Additional QOL:
- [ ] Sort by item type
- [ ] Sort by colour
- [ ] Add a clothing item to the inventory or wishlist through an online product page
- [ ] Create outfit combinations
- [ ] Save outfit combinations
- [ ] User login
- [ ] Use an ML object identification to automatically organize and sort inventory items.
