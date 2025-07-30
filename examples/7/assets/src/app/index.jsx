import cowImage from './assets/cow.jpeg';

const logo = new URL('./assets/logo.svg', import.meta.url).href;

export const App = ({}) => {

  return <div>
    <img width="50%" src={cowImage}></img>
    <img width="50%" src={logo}></img>
  </div>
}
