import React from "react";
import "./style.css";
import MediaQuery from 'react-responsive';
import { FlexRow, FlexCol } from "../../components/FlexWrap/index";

function Dashboard(props){
    return (
        <MediaQuery minDeviceWidth={700}>
            {(matches) => {
                if (matches) {
                    return  <FlexRow>
                    <article className="flex-child title-area">
                        title name{/* {props.pagename} */}
                    </article>
                    <article className="flex-child calendar">
                        area for calendar
                    </article>
                    <article className="flex-child note-list">
                        notification list
                    </article>
                    </FlexRow>
                } else {
                    return  <FlexCol>
                    <article className="title-areaM">
                        title name{/* {props.pagename} */}
                    </article>
                    <article className="calendarM">
                        area for calendar
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