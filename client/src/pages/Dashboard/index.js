import React from "react";
import "./style.css";
import MediaQuery from 'react-responsive';
import Calendar from "../../components/Calendar/index";
import { FlexRow, FlexCol } from "../../components/FlexWrap/index";
import {calendarList} from "../../components/List/index"

function Dashboard(props){
    return (
        <MediaQuery minDeviceWidth={700}>
            {(matches) => {
                if (matches) {
                    return  <FlexRow>
                    <article className="flex-child title-area custom-underline">
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
                } else {
                    return  <FlexCol>
                    <article className="title-areaM custom-underline">
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
                }
            }}
        </MediaQuery>
    );
}

export default Dashboard;