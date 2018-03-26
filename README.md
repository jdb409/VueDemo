
   var app = new Vue({
            el: '#app',
            data: {
                message: 'Hello Vue!'
            }
        })

When anything changes in the data obj, the component will rerender

Attributes prefixed with v- are called directives. Apply special reactive behavior to the Dom. V-bind:title=‘message’ binds the title of the element to the message property of the data object

Uses a templating system similar to pug

V-bind, binds an attribute, id, class to a html element
	

V-on  registers a event listener

<a v-on:click="doSomething"> ... </a>

React vs Vue
Writing components is just HTML and Javascript in Vue, you don’t need to learn jsx or es6

All thats needed to start up a vue app is a simple script tag compared to the build process of webpack,babel,etc needed to start react.

The vue team has built in support for state management called VueX and its maintained by the vue core team. This compared to React which relies on other modules like Redux.

Vue treats animation as a first class citizen and has built in methods for it.  Allow you to add transitions when adding/removing elements to the dom



