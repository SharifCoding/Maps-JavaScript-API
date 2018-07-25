## Maps JavaScript API
![Maps JavaScript API](./basicREACT.png)

#### Google Map React Example
[Source: How To Render A Map Component Using ‘react-google-maps’](https://medium.com/@yelstin.fernandes/render-a-map-component-using-react-google-maps-5f7fb3e418bb)

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

Dependency [react-google-maps](https://github.com/google-map-react/google-map-reac)

#### Initial Setup for `Google Map React`:
- Create `.env` file in the root `/` folder along side `package.json`
- Add `GOOGLEMAP_API_KEY` to `.env` file
```bash
GOOGLEMAP_API_KEY="your googlemap api key"
```
#### Running the App:
To run this project you will need to download it onto your local machine and install all dependencies.
Navigate inside the folders and install all dependencies and run the app by entering the following command on your terminal window:
```bash
# install dependencies
npm install
# launch app on localhost:3000
npm start
```
If you want to end the process hold `control` and press `c` in mac, if you are not using mac hold `ctrl` and press `c`.

#### The Map Object
```js
map = new google.maps.Map(document.getElementById("map"), {...});
```
The JavaScript class that represents a map is the Map class. Objects of this class define a single map on a page. (You may create more than one instance of this class — each object will define a separate map on the page.) We create a new instance of this class using the JavaScript new operator.

When you create a new map instance, you specify a `<div>` HTML element in the page as a container for the map. HTML nodes are children of the JavaScript document object, and we obtain a reference to this element via the document.getElementById() method.

This code defines a variable (named map) and assigns that variable to a new Map object. The function Map() is known as a constructor and its definition is shown below:

#### Constructor Description
```js
Map( mapDiv:Node, opts?:MapOptions )
```
Creates a new map inside of the given HTML container — which is typically a DIV element — using any (optional) parameters that are passed.

[Return to README.md](../README.md)
