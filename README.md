# Async Calls Express

## Description:

This is a simple Node.js and Express.js project that demonstrates asynchronous calls using a simulated user account creation scenario. The project allows you to create new user accounts through a browser interface and provides examples of making asynchronous API calls in JavaScript.

In the browser's developer console, you can use the provided JavaScript code in index.html to make asynchronous API calls to the server and retrieve user data.

invoke01() uses the fetch API for asynchronous calls.
invoke02() uses the superagent library for asynchronous calls.

New users can be created in the browser by running:

```
http://localhost:3000/account/create/{name}/{email}/{password}

```

example:

```
$ node index.js
Running on port 3000
{ name: 'peter', email: 'peter@mit.edu', password: 'secret' }
{ name: 'wall-e', email: 'wall-e@mit.edu', password: 'secret' }
```

## Dependencies

- `npm init -y`
- `npm install express`

## Roadmap of Future Improvement

Enhance the project by developing a proper frontend and backend to build a fully functional application.

## License Info

[MIT](https://choosealicense.com/licenses/mit/)  
_Copyright (c) 2023 Jessica Cousins_

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

## Contributing

Contributions to this project are welcome. If you find any issues or have suggestions for improvements, please open an issue or submit a pull request.
