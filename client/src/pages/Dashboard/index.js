import React from "react";
import "./style.css";
import MediaQuery from 'react-responsive';
import Calendar from "../../components/Calendar/index";
import { FlexRow, FlexCol } from "../../components/FlexWrap/index";
<<<<<<< HEAD
import {calendarList} from "../../components/List/index"
=======
import Nav from "../../components/NavBar/index";
>>>>>>> b27213ae3967ce3261ab2697e2bd91d18d7b34e8

function Dashboard(props){
    return (
        <MediaQuery minDeviceWidth={700}>
            {(matches) => {
                if (matches) {
<<<<<<< HEAD
                    return  <FlexRow>
                    <article className="flex-child title-area custom-underline">
=======
                    return  <div>
                    <Nav />
                    <FlexRow>
                    <article className="flex-child title-area">
>>>>>>> b27213ae3967ce3261ab2697e2bd91d18d7b34e8
                        Dashboard{/* {props.pagename} */}
                    </article>
                    <article className="flex-child left-child">
                        <Calendar ></Calendar>
                    </article>
                    <article className="flex-child right-child">
                        <span className="custom-underline"> Notification List</span>
                       {/* <List>
                           <ListItem></ListItem>
                       </List> */}
                       <ListPlugin/>

                    </article>
                    </FlexRow>
                    </div>
                } else {
<<<<<<< HEAD
                    return  <FlexCol>
                    <article className="title-areaM custom-underline">
=======
                    return  <div>
                    <Nav />
                    <FlexCol>
                    <article className="title-areaM">
>>>>>>> b27213ae3967ce3261ab2697e2bd91d18d7b34e8
                        Dashboard{/* {props.pagename} */}
                    </article>
                   
                    <article className="calendarM">
                        <Calendar></Calendar>
                    </article>
                    
                    <article className="note-listM">
                        <span className="custom-underline"> Notification List</span>
                        <calendarList />
                    </article>
                    </FlexCol>
                    </div>
                }
            }}
        </MediaQuery>
    );
}

export default Dashboard;