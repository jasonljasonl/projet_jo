import ReactDOM from 'react-dom';
function Header(props) {
    return <h1>Bonjour, {props.name}</h1>
}
const element = <Header name='Moi' />
ReactDOM.render(
    element,
    document.getElementById('root')
  );

  export default Header;