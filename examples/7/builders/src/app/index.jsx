import cowImage from './assets/cow.jpeg?inline';
import logo from './assets/logo.svg';

export const App = ({}) => {

  return <div>
    <img width="50%" src={cowImage}></img>
    <img width="50%" src={logo}></img>
  </div>
}
