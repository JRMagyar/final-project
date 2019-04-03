import React from "react";
import "./style.css";
import MediaQuery from 'react-responsive';
import { FlexRow, FlexCol } from "../../components/FlexWrap/index";

function Dashboard(){
    return (
        <FlexCol>
            <FlexRow>
                <article className="calendar">
                    area for calendar
                </article>
                <article className="note-list">
                    notification list
                </article>
            </FlexRow>
            {/* <FlexRow>
                <article id="expenses">expenses</article>
                <article id="finances">finances</article>
                <article id="schedules">schedules</article>
                <article id="grocery">grocery</article>
                <article id="event-plan">event planning</article>
            </FlexRow> */}
        </FlexCol>
    );
}

export default Dashboard;