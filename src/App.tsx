import * as React from 'react';
import { render } from 'react-dom';

import ExpandingCards from './ExpandingCards';
import {cardsData} from './dummyData';

const App = () => {
  return (
      <ExpandingCards data={cardsData} />
  )
}

export default App;
