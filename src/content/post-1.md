---
title: "Fetching data In ReactJS"
date: "2019-03-17"
draft: false
path: "/blog/example-title"
---

ReactJS class component provides a lifecycle method called componentDidMount. Once the React component renders all the elements or markdowns correctly, the React calls componentDidMount method. This is where we usually call the API and get the data from the server so we can display the data on the webpage.


```js
    class App extends React.Component {
      this.state = {
        users: []
      }
    
      componentDidMount() {
        console.log("i did mount");
      }
    
      render() {
        return (
          <div>Users</div>
        )
      }
    }
```
  
As you can see from the above code, I added the componentDidMount method after declaring a state. Once the render method gets rendered or render JSX correctly, React will call the componentDidMount method.
  
Let's fetch some data using third party library Axios.

```js  
    componentDidMount {
      axios.get("url").then((res) => {
        console.log(res)
        this.setState({
          users: res.data.data
        })
      }).catch((err) => {
        console.log(err)
      })
    }
```

Once you fetch the data, you can assign your data to the state users using the setState method. so we can render a list of users on the webpage.

```js
    render() {
      <React.Fragment>
        <h1>Users List</h1>
        <ul>
          {
            this.state.users.map((user) => {
              return (
                <div>
                  <p>{user.first_name} --> {user.email}</p>
                </div>
              )
            })
          }
        </ul>
      </React.Fragment>
    }
``` 

### Points to consider
- componentDidMount() method gets called after render() method successfully renders JSX.
- setState doesn't work inside render method.


