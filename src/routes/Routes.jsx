
import { createBrowserRouter } from 'react-router';
import Root from '../layout/Root';
import Errorpage from '../pages/Errorpage';
import Homepage from '../pages/Homepage';
import About from '../pages/About';
import Roles from '../pages/Roles';
import Award from '../pages/Award';
import Media from '../pages/Media';

import Public from '../pages/Public';
import Resume from '../pages/Resume';
import Contact from '../pages/Contact';
import Judges from '../pages/Judges';
import Publications from '../pages/Publications';
import ContactFrom from '../component/ContactFrom';

const Routes = createBrowserRouter ([
    {
        path:"/",
        element:<Root></Root>,
        errorElement:<Errorpage></Errorpage>,
        children:[
            {
                path:"/",
                element:<Homepage></Homepage>
            },

            {
                path:"/about",
                element:<About></About>
            },
            {
                path:"/roles",
                element:<Roles></Roles>
            },
            {
                path:"/award",
                element:<Award></Award>
            },
            {
                path:"/media",
                element:<Media></Media>
            },
            {
                path:"/judges",
                element:<Judges></Judges>
            },
            {
                path:"/public",
                element:<Public></Public>
            },
            {
                path:"/resume",
                element:<Resume></Resume>
            },
            {
                path:"/contact",
                element:<Contact></Contact>
            },
            {
                path:"/publications",
                element:<Publications></Publications>
            },
            {
                path:"/contactfrom",
                element:<ContactFrom></ContactFrom>
            },
        ]
    }
])


export default Routes;