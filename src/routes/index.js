import React from 'react';
import { Switch, Route} from 'react-router-dom';

import LastSearches from '../pages/LastSearches/index';
import Index from '../pages/Index/index';

export default function Routes(){
    return(
    <Switch>
        <Route path='/' exact component={Index} />
        <Route path='/lastSearches'  component={LastSearches}/>
    </Switch>
    );
}