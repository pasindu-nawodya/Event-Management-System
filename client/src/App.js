import React , {Component} from 'react';
import {BrowserRouter as Router , Switch , Route} from 'react-router-dom';
import NavBar from './component/NavBar/NavBar';
import Footer from './component/Footer/Footer';
import HomePageBanner from './component/HomePage/HomeBanner';
import AddEvent from './component/AddEvent/AddEventMain';
import PublishedEvent from './component/EventList/EventListMain';
import EditEvent from './component/EditEvent/EditEventMain';
import AllEvent from './component/ShowEvent/AllEventMain';
import EventInfo from './component/ShowEvent/EventInfoMain';


export default class Appfunction extends Component {
    render(){
        return (
            <div>  
              <Router>                       
                <NavBar />
                <Switch>
                  <Route path="/" exact component={HomePageBanner}/>
                  <Route path="/addevent" exact component={AddEvent}/>
                  <Route path="/publishedevent" exact component={PublishedEvent}/>
                  <Route path="/allevent" exact component={AllEvent}/>
                  <Route path="/editevent/:id"  component={EditEvent}/>
                  <Route path="/eventinfo/:id"  component={EventInfo}/>
                </Switch>
                <Footer />
              </Router>
            </div>
        );
    }
}
