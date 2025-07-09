//Babel-es6,es7,es5

//source to source complier-it converts to newer version of js to older version.It functions in browser.

//Features of babel
//transpile ES6+ to ES5.
//Support JSX(React)
//Support typescript

//Working
//Parser:Convert your js code to abstract syntax tree(AST)
//transformer:Modify the AST for desired transformer
//Gnerator: converts AST back into js code

//ES7->Parser(it will convert into AST)->Transformer(covnert to ES5)->Generator


//Webpack it is modular bundler.It takes multiple modules(js code,CSS,images,font,etc) it bundles all this together
//bundle.js-browser take this file and load whole site using this.

//entry-the main file where webpack starts bundling
//output-bundle.js
//loader-Helps Webpack handle other files(CSS,images,babel for js).
//plugins-peprform advanced taks like environmental variable
//Mode-develpoment,production
//DevServer-Pun a local server-live preview.

//Folder:

// my-app/
//   |
//   |-dist/
//      |-index.html
//   |src/
//     |-index.js
//   package.json
//   webpack.config.js
//   .babelrc
//   .gitignore