import React from 'react';
import { Switch, Route} from 'react-router-dom';

import LastSearches from '../pages/LastSearches/index';
import Index from '../pages/Index/index';
import Ranking from '../pages/Ranking/index';

export default function Routes(){
    return(
    <Switch>
        <Route path='/' exact component={Index} />
        <Route path='/lastSearches'  component={LastSearches}/>
        <Route path='/ranking'  component={Ranking}/>
    </Switch>
    );
}