import React from "react";
import "./style.css";
import MediaQuery from 'react-responsive';
import Calendar from "../../components/Calendar/index";
import ListView from "../../components/ListView/index";
import { FlexRow, FlexCol } from "../../components/FlexWrap/index";
import Nav from "../../components/NavBar/index";


function Dashboard(props){
    return (
        <MediaQuery minDeviceWidth={700}>
            {(matches) => {
                if (matches) {
                    return  <div>
                    <Nav />
                    <FlexRow>
                    <article className="flex-child title-area">
                        Dashboard{/* {props.pagename} */}
                    </article>
                    <article className="flex-child left-child">
                        <Calendar ></Calendar>
                    </article>
                    <article className="flex-child right-child">
                        <ListView></ListView>
                    </article>
                    </FlexRow>
                    </div>
                } else {
                    return  <div>
                    <Nav />
                    <FlexCol>
                    <article className="title-areaM">
                        Dashboard{/* {props.pagename} */}
                    </article>
                    <article className="calendarM">
                        <Calendar></Calendar>
                    </article>
                    <article className="note-listM">
                    <ListView></ListView>
                    </article>
                    </FlexCol>
                    </div>
                }
            }}
        </MediaQuery>
    );
}

export default Dashboard;