var app = new Vue({
    el: '#app',
    data: {
        message: 'Uses templating syntax!'
    }
})

var app2 = new Vue({
    el: '#app-2',
    data: {
        message: 'You are hovering'
    }
})

// example condition
var app3 = new Vue({
    el: '#app-3',
    data: {
        seen: true
    }
})

// example loop
var app4 = new Vue({
    el: '#app-4',
    data: {
        todos: [
            { text: 'Learn Vue' },
            { text: 'Build something' }
        ]
    }
})

//  method usage 
var app5 = new Vue({
    el: '#app-5',
    data: {
        message: 'Using a method!'
    },
    methods: {
        reverseMessage: function () {
            this.message = this.message.split('').reverse().join('')
        }
    }
})

// input
var app6 = new Vue({
    el: '#app-6',
    data: {
        message: 'Type something.....',
        output: ''
    },
    created: function () {
        console.log('message is ', this.message)
    },
    updated: function () {
        console.log('message is now ', this.message)
    },
    methods: {
        handleClick: function () {
            this.output = this.message;
        }
    }
})

// vue components

Vue.component('todo-item', {
    props: ['todo'],
    template: '<li>{{ todo.text }}</li>'
})

var app7 = new Vue({
    el: '#app-7',
    data: {
        groceryList: [
            { id: 0, text: 'Meat' },
            { id: 1, text: 'Other meat' },
            { id: 2, text: 'Whatever else humans are supposed to eat' }
        ],
        otherList: [
            { id: 0, text: 'Socks' },
            { id: 1, text: 'Shoes' }
        ]
    }
})



// example transition
var app8 = new Vue({
    el: '#app-8',
    data: {
        show: true
    }
})

new Vue({
    el: '#transition-components-demo',
    data: {
      view: 'v-a'
    },
    components: {
      'v-a': {
        template: '<div>Component A</div>'
      },
      'v-b': {
        template: '<div>Component B</div>'
      }
    }
  })