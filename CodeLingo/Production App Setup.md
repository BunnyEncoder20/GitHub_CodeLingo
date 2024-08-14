In this document I will summaries all the structure and setup steps I've learnt to make while making a Full stack **MERN** application using **JS** (might be a little different for JS and TS setups).

# Backend

- Two main things to take care of before starting anything. Installing necessary packages (not all are necessary, install as requirement of project) and a standardized folder structure.

## Setup

1. Initialize a **node** project : 
```bash
npm init
package name : your_name
version : 1.0.0
description : backend
entry point : index.js
test command : 
git repository : 
auther : 
lience : (ISC)

is this OK (yes)
```
- or for a quick setup : 
```bash
npm init -y
```
- also setup typescript to work with your node application : 
```shell
npm install -D typescript ts-node @types/node @types/express @types/mongoose @types/cors nodemon
```
- Make a `./tsconfig.json` and add the following code : 
```json
{
  "compilerOptions": {
    "target": "ES6",
    "module": "commonjs",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "outDir": "./dist",
    "rootDir": "./src"
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules"]
}

```

1. Setup **GIT** if not already done
2. Setup a `.gitignore` 
3. Set **import** type as **module** in the `package.json` file.
```javascript
/* 
./package.json 
*/
...
"type":"module",
"main":"index.js",
...
```

5. Install `nodemon` for hot reloads of the server as a dev dependency
```bash 
npm i -D nodemon
```

6. Add the **script** for starting the `nodemon` server in our `package.json`
```javascript
/* 
./package.json 
*/
...
"scripts":{
	"dev" : "nodemon src/index.js"
}
...
```

7. Install the necessary **packages**
```bash 
npm i cors dotenv express zod mongoose
```
- **cors** : for making cross site access possible 
- **dotenv** : for sensitive environment variables 
- **express** : for restful API calls 
- **zod** : for validation 
- **mongoose** : for communicating with MongoDB

8. We could also install **Prettier** for uniform formatting of the code which will be written all over the project.
```bash
npm i -D prettier
```
- manually add the following files in the `root (./)` directory : 
```bash
touch .prettierrc .prettierignore
```
- add the following config in the `./.prettierrc`
```js
{
	"singleQuote":false,
	"bracketSpacing":true,
	"tabWidth":2,
	"semi":true,
	"trailingComma":"es5"
}
```
- add file names in the `./.prettierignore` (so that prettier doesn't format these files). given below is sample:
```js
/.vscode
/node_modules
./dist 

*.env
.env
.env.*
```
- **NOTE** : that these prettier configs can also be generated just like the `.gitignore` files.


---


## Folder Structure

- You can use the following command to print out the entire folder structure for the production backend folder : 
```bash 
myapp-backend
├── src
│   ├── config
│   │   └── db.ts
│   ├── controllers
│   │   └── userController.ts
│   ├── middleware
│   │   ├── errorHandler.ts
│   │   └── validateRequest.ts
│   ├── models
│   │   └── userModel.ts
│   ├── routes
│   │   └── userRoutes.ts
│   ├── utils
│   │   └── ApiResponse.ts
│   ├── app.ts
│   └── server.ts
├── .env
├── .gitignore
├── package.json
├── tsconfig.json
└── nodemon.json
```


### Root Level

- Following **files** should be at the `root  (./)` directory : 
```bash 
touch .gitignore .env
```

- Following **folders** should be at the `root (./)` directory : 
```bash 
mkdir public src 
```

- Following **files** should be there in the `./src` directory :
```bash 
touch app.js constants.js index.js
```

- Following **folders** which should be there in the `./src` directory : 
```bash
mkdir controllers  db 
```
1. **Controllers** : where all the major functionality api endpoints of the server are written.
2. **DB** : where all the connection logic to the Database are written here 
3. **middlewares** : where all the middleware of the app are written.
4. **models** : where all the schema data models of our data are written
5. **routes** : where all the routes redirects are written
6. **utils** : where all the utility functions which will be used by many functions (like email function, efficient sorting/searching algorithm) are kept here.


---


# Frontend

## Folder Structure 

```shell
myapp-frontend
├── public
│   └── index.html
├── src
│   ├── api
│   │   └── userApi.ts
│   ├── components
│   │   └── UserList.tsx
│   ├── pages
│   │   └── Home.tsx
│   ├── App.tsx
│   ├── index.tsx
│   └── react-app-env.d.ts
├── .gitignore
├── package.json
├── tsconfig.json
├── yarn.lock
└── README.md
```