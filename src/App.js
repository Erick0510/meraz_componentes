import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';


const Button = styled.button`
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

// A new component based on Button, but with some override styles
const TomatoButton = styled(Button)`
  color: tomato;
  border-color: tomato;
`;

function App() {
  return (
    <div className="App">
      <div>
    <a href="https://utd.edu.mx/" > <TomatoButton>UTD</TomatoButton></a> 
    <a href='https://github.com/Erick0510'><TomatoButton>GitHub</TomatoButton></a> 
    <a href='https://www.youtube.com/@instinct5424'><TomatoButton>YouTube</TomatoButton></a> 

  </div>
         
    </div>
  );
}

export default App;
