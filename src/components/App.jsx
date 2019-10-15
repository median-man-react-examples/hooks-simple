import React from 'react'

const todos = [
  {
    userId: 1,
    id: 1,
    title: 'delectus aut autem',
    completed: false
  },
  {
    userId: 1,
    id: 2,
    title: 'quis ut nam facilis et officia qui',
    completed: false
  },
  {
    userId: 1,
    id: 3,
    title: 'fugiat veniam minus',
    completed: false
  },
  {
    userId: 1,
    id: 4,
    title: 'et porro tempora',
    completed: true
  },
  {
    userId: 1,
    id: 5,
    title: 'laboriosam mollitia et enim quasi adipisci quia provident illum',
    completed: false
  }
]

class App extends React.Component {
  render() {
    return (
      <div>
        <div>
          <button>Posts</button>
          <button>Todos</button>
        </div>
        <ul>
          {todos.map(({ title }) => (
            <li>{title}</li>
          ))}
        </ul>
      </div>
    )
  }
}

export default App
