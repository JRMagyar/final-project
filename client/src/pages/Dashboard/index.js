import React from "react";
import "./style.css";
import MediaQuery from 'react-responsive';
import Calendar from "../../components/Calendar/index";
import { FlexRow, FlexCol } from "../../components/FlexWrap/index";

function Dashboard(props){
    return (
        <MediaQuery minDeviceWidth={700}>
            {(matches) => {
                if (matches) {
                    return  <FlexRow>
                    <article className="flex-child title-area">
                        Dashboard{/* {props.pagename} */}
                    </article>
                    <article className="flex-child left-child">
                        <Calendar ></Calendar>
                    </article>
                    <article className="flex-child right-child">
                        notification list
                    </article>
                    </FlexRow>
                } else {
                    return  <FlexCol>
                    <article className="title-areaM">
                        Dashboard{/* {props.pagename} */}
                    </article>
                    <article className="calendarM">
                        <Calendar></Calendar>
                    </article>
                    <article className="note-listM">
                        notification list
                    </article>
                    </FlexCol>
                }
            }}
        </MediaQuery>
    );
}

export default Dashboard;