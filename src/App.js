import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Introduction from './Component/introduction/Page/introduction';
import Accueil from './Component/Accueil/Page/Accueil';
import NotFound from './Component/NotFound/Page/Notfound';
import Histoire from './Component/Histoire/Page/Histoire';
import Lieu from './Component/Lieu/Page/lieu';
import Records from './Component/Records/Page/records';

const App = () => {
  return (
    <div>
      <Router>
      <Switch>
        <Route path="/" exact component={Introduction} />
        <Route path="/accueil" exact component={Accueil}/>
        <Route path="/histoire" exact component={Histoire}/>
        <Route path="/lieu" exact component={Lieu}/>
        <Route path="/records" exact component={Records}/>
        <Route component={NotFound} />

      </Switch>
      </Router>
    </div>
  );
};

export default App;