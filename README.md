# Introduction-to-React
Introduction to the JavaScript Framework React

# Contents

 * [Section 1 - JSX](#section-1---jsx)
   * [JSX Empty Elements Syntax](#jsx-empty-elements-syntax)
   * [JSX Attributes](#jsx-attributes)
   * [JSX className](#jsx-classname)
   * [Multiline JSX Expression](#multiline-jsx-expression)
   * [Nested JSX Expression](#nested-jsx-expression)
   * [Embedding JavaScript in JSX](#embedding-javascript-in-jsx)
     * [Setting JSX attribute values with embedded JavaScript](#setting-jsx-attribute-values-with-embedded-javascript)
   * [Javascript Conditionals](#javascript-conditionals)
     * [&& Operator](#&&-operator)
     * [Tenary Statements](#tenary-statements)
     * [if/else Statements](#if-else-statements)
   * [JSX Key Attribute](#jsx-key-attribute)
   * [JSX Element Event Listeners](#jsx-element-event-listeners)
   * [JSX .map() method](#jsx--map----method)
   * [Rendering JSX](#rendering-jsx)
      * [ReactDOM JavaScript library](#reactdom-javascript-library)
      * [The Virtual DOM](#the-virtual-dom)
      * [React.createElement() Creates Virtual DOM Elements](#eeact.createelement---creates-virtual-dom-elements)

## Section 1 - JSX

JSX stands for JavaScript XML and it allows HTML to be written in React. Making it easier to write and add HTML in React. A JavaScript file containing JSX has to be compiled before it reaches a web browser. An example of the syntax is shown below:

```javascript
const element = <h1>Hello world!</h1>;
```

### JSX Empty Elements Syntax

In JSX, empty elements must explicitly be closed using a closing slash at the end of their tag: <tagName />.

```javascript
<br />
<img src="example_url" />
```
### JSX Attributes

The syntax of JSX attributes closely resembles that of HTML attributes. With the attribute being added  opening tag of the JSX element:

```javascript
const example = <h1 id="example">JSX Attributes</h1>;
```

### JSX className

In JSX, the word 'class' cannot be used, and className has to be used instead. This is because JSX gets translated into JavaScript, and class is a reserved word in JavaScript.

```javascript
const heading = <h1 className="large-heading">Codecademy</h1>;
```

### Multiline JSX Expression

A JSX expression that spans multiple lines must be wrapped in parentheses:

```javascript
const myList = (
  <ul>
    <li>item 1</li>
    <li>item 2</li>
    <li>item 3</li>
  </ul>
);
```

### Nested JSX Expression

In order for the code to compile, a JSX expression must have exactly one outermost element. If this is not the case you can just wrap the JSX expression in a \<div>:

```javascript
const element = (
  <div>
    <h1>Hello world 1</h1>;
    <h1>Hello world 2</h1>;
  </div>
);
```

### Embedding JavaScript in JSX

JavaScript expressions may be embedded within JSX expressions. The embedded JavaScript expression must be wrapped in curly braces.

```javascript
//displays 100
let expr = <h1>{10 * 10}</h1>;
```

#### Setting JSX attribute values with embedded JavaScript

When writing JSX, it’s common to set attributes using embedded JavaScript variables.

```javascript
const introClass = "introduction";
const introParagraph = <p className={introClass}>Hello world</p>;
```

### Javascript Conditionals

JSX does not support if/else syntax in embedded JavaScript. There are three ways to express conditionals for use with JSX elements:

1. The && operator
2. A ternary within curly braces in JSX
3. An if statement outside a JSX element


#### && Operator

In JSX, && is commonly used to render an element based on a boolean condition. && works best in conditionals that will sometimes do an action, but other times do nothing at all.

```javascript
Renders as empty div if length is 0
const unreadMessages = [ 'hello?', 'remember me!'];

const update = (
  <div>
    {unreadMessages.length > 0 &&
      <h1>
        You have {unreadMessages.length} unread messages.
      </h1>
    }
  </div>
);
```

#### Tenary Statements

```javascript
const headline = (
  <h1>
    { age >= drinkingAge ? 'Buy Drink' : 'Do Teen Stuff' }
  </h1>
);
```

#### if/else Statements

```javascript
let text;

if (age >= drinkingAge) { text = 'Buy Drink' }
else { text = 'Do Teen Stuff' }

const headline = <h1>{ text }</h1>
```

### JSX Key Attribute

In JSX elements in a list, the key attribute is used to uniquely identify individual elements. It is declared like any other attribute.

Keys can help performance because they allow React to keep track of whether individual list items should be rendered, or if the order of individual items is important.

```javascript
<ul>
  <li key="key1">One</li>
  <li key="key2">Two</li>
  <li key="key3">Three</li>
  <li key="key4">Four</li>
</ul>
```

### JSX Element Event Listeners

In JSX, event listeners are specified as attributes on elements. An event listener attribute’s name should be written in camelCase, such as onClick for an onclick event, and onMouseOver for an onmouseover event.

An event listener attribute’s value should be a function. Event listener functions can be declared inline or as variables and they can optionally take one argument representing the event

```javascript
const handleClick = () => alert("Hello world!");

const button = <button onClick={handleClick}>Click here</button>;

// Example with event parameter
const handleMouseOver = (event) => event.target.style.color = 'purple';

const button2 = <div onMouseOver={handleMouseOver}>Drag here to change color</div>;
```

### JSX .map() method

The array method map() comes up often in React. It’s good to get in the habit of using it alongside JSX.
If you want to create a list of JSX elements from a given array, then map() over each element in the array, returning a list item for each one.

```javascript
const strings = ['Home', 'Shop', 'About Me'];

const listItems = strings.map(string => <li>{string}</li>);

<ul>{listItems}</ul>
```

### Rendering JSX

### Importing React

In order to use React, we must first import the React library. When we import the library, it creates an object that contains properties needed to make React work, including JSX and creating custom components.

```javascript
import React from 'react';
```

### Importing ReactDOM

To render JSX to the DOM, ReactDOM must be imported

```javascript

import ReactDOM from 'react-dom';
```

#### ReactDOM JavaScript library

The JavaScript library react-dom, sometimes called ReactDOM, renders JSX elements to the DOM by taking a JSX expression, creating a corresponding tree of DOM nodes, and adding that tree to the DOM.

```javascipt
ReactDOM.render(
  <h1>This is an example.</h1>, 
  document.getElementById('app')
);
```

#### The Virtual DOM

React uses Virtual DOM, which can be thought of as a blueprint of the DOM. When any changes are made to React elements, the Virtual DOM is updated. The Virtual DOM finds the differences between it and the DOM and re-renders only the elements in the DOM that changed. This makes the Virtual DOM faster and more efficient than updating the entire DOM.

#### React.createElement() Creates Virtual DOM Elements

The React.createElement() function is used by React to actually create virtual DOM elements from JSX. When the JSX is compiled, it is replaced by calls to React.createElement().

You usually won’t write this function yourself, but it’s useful to know about.

```javascript
// The following JSX...
const h1 = <h1 className="header">Hello world</h1>;

// ...will be compiled to the following:
const h1 = React.createElement(
  'h1',
  {
    className: 'header',
  },
  'Hello world'
);
```

## Section 2 - React Components

React components act as blueprint in which multiple instances of the component can be created.

### JSX Capitalization

React requires that the first letter of components be capitalized. JSX will use this capitalization to tell the difference between an HTML tag and a component instance. If the first letter of a name is capitalized, then JSX knows it’s a component instance; if not, then it’s an HTML element.

```javascript
// This is considered a component by React.
<ThisComponent />
  
// This is considered a JSX HTML tag. 
<div>
```
### React Component Base Class

A React component is a reusable piece of code used to define the appearance, behavior, and state of a portion of a web app’s interface. Components are defined as functions or as classes. Using the component as a factory, an infinite number of component instances can be created.

```javascript
class MyComponent extends React.Component {
  render() {
    return <h1>Hello world!</h1>;
  }
}
```

### render() Method

React class components must have a render() method. This method should return some React elements created with JSX.

```javascript
class MyComponent extends React.Component {
  render() {
    return <h1>Hello from the render method!</h1>;
  }
}
```
### ReactDOM.render()

ReactDOM.render()‘s first argument is a component instance. It will render that component instance. In this example, we will render an instance of MyComponent.


```javascript

import React from 'react';
import ReactDOM from 'react-dom';

class MyComponent extends React.Component {
  render() {
    return <h1>Hello world!</h1>;
  }
}

ReactDOM.render(<MyComponent />, document.getElementById('app'));
```

### Code in render()

A React component can contain JavaScript before any JSX is returned. The JavaScript before the return statement informs any logic necessary to render the component.

In the example code, we see JavaScript prior to the return statement which rounds the value to an integer.

```javascript
class Integer extends React.Component {
  render() {
    const value = 3.14;
    const asInteger = Math.round(value);
    return <p>{asInteger}</p>;
  }
}
```
