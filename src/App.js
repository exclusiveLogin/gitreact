import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UserCard from './UserCard/UserCard';
import Loading from './Loading/Loading';
import Error from './Error/Error';

class App extends Component {
  constructor(){
    super();
    this.state = {
      searchString: '',
      users: [],
      error: false,
      loading: false,
    };

    this.keyHandler = this.keyHandler.bind(this);
    this.searchChanged = this.searchChanged.bind(this);
  }

  keyHandler(event){
    if (event.key == "Enter"){
      this.setState((state) => {
        return {
          ...state,
          loading: true,
          error: false,
          users: []
        };
      });
      fetch('https://api.github.com/search/users?q='+this.state.searchString)
        .then((result)=>{
          console.log('1st then:', result);
          if(result.status == 200) {
            return result.json();
          }
        },(error)=>{
          this.setState((state) => {
            return {
              ...state,
              error: true,
              loading: false,
            };
          });
          console.error('Произошла ошибка при получении списка пользователей: ', error);
        }).then((json)=>{
          console.log('2nd then:', json);
          if (json && json.items){
            this.setState((state) => {
            return {
              ...state,
              users: json.items,
              loading: false,
              error:false,
              };
            })
          }
        });
    }
  }
  searchChanged(e){
    const str = e.target.value;
    this.setState((state)=>{
      return {
        ...state,
        searchString: str
      }
    });
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Поиск по GitHub.com</h1>
          <input type="text" className="searchInput" onKeyPress={this.keyHandler} onChange={this.searchChanged}/>
        </header>
        <div className="container">
          {(this.state.error) ? <Error /> : null}
          {(this.state.loading) ? <Loading /> : null}
          {this.state.users.map((user, idx)=>{
            return <UserCard key={idx} data={user}/>
          })}
        </div>
      </div>
    );
  }
}

export default App;
