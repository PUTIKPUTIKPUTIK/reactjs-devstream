import { useState } from 'react';
import './App.css';
import { ImagesPanel } from './ImagesPanel/ImagesPanel';
import { TermsOfUseModal } from './TermsOfUseModal/TermsOfUseModal';

function App() {
  const [isShown, setIsShown] = useState(true);
  return (
    <div className="App">
      <header className="App-header">
        {isShown && <TermsOfUseModal setShown={setIsShown}/>}
        <ImagesPanel/>
      </header>
    </div>
  );
}

export default App;
