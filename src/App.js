import './App.css';
import Header from './components/header'
import Footer from './components/footer'

function createAlert() {
  alert('You clicked Props')
}


function OurText() {
  return (
    <div className = "OurText">
      <p>This is our text</p>
    </div>
  )
}

function ShowMessage(props) {
  if (props.toShow) {
    return <h2>This is the Message</h2>
  }else {
    return <h2>Forbidden</h2>
  }
}

function App() {
  const loggedIn = true;
  if (loggedIn) {
    return (
      <div className="App">
        <Header info = "This is Props Message" number = "7"/>
        <Header info = "This is Props Message2 " number = "4"/>
        <Footer trademark = "Page by Zia" myAlert = {createAlert}/>
        <ShowMessage toShow= {false}/>
      </div>
    );
  }else {
    return <h2>Forbidden</h2>
  }
  
}

export  {App};

