import './App.css';
import Header from './components/header'
import Footer from './components/footer'
import styled from 'styled-components'
import Numbers from './components/numbers'

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

const pStyle = {
  color : 'white', 
  fontSize : '2rem', // In Css font-size so if - is there remove - and write first letter in Capital
  background : 'pink',
  border : '2px solid white',
  borderRadius : '20%'
}

const Paragraph = styled.p`
  font-size : 3em;
  color : green
`;


function App() {
  const loggedIn = true;
  if (loggedIn) {
    return (
      <div className="App">
        <Header info = "This is Props Message" number = "7"/>
        <Header info = "This is Props Message2 " number = "4"/>
        <Paragraph>New Style</Paragraph>
        <p style = {pStyle}>Main content</p>
        
        <Footer trademark = "Page by Zia" myAlert = {createAlert}/>
        {/*<ShowMessage toShow= {true}/>*/}
        <Numbers/>
      </div>
    );
  }else {
    return <h2>Forbidden</h2>
  }
  
}

export  {App};

