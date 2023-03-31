import { ImageComponent } from './components/ImageComponent';
import TextComponent from './components/TextComponent';
import './styles.css';

function App() {
  return (
    <main>
      <div className='card-container'>
        <ImageComponent/>
        <TextComponent/>
      </div>
    </main>
  );
}

export default App;
