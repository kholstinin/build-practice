import cowImage from './assets/cow.jpeg';
import logo from './assets/logo.svg?external';

export const App = ({}) => {

  return <div>
    <img width="50%" src={cowImage}></img>
    <img width="50%" src={logo}></img>
  </div>
}
