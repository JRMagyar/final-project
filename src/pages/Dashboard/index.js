import React from "react";
import FlexWrap from "../../components/FlexWrap/index";
import "./style.css"

function Dashboard(){
    return (
        <div id="root">
            <FlexWrap>
                <article className="calendar">
                    area for calendar
                </article>
                <article className="note-list">
                    notification list
                </article>
            </FlexWrap>
            <FlexWrap>
                <article id="expenses">expenses</article>
                <article id="finances">finances</article>
                <article id="schedules">schedules</article>
                <article id="grocery">grocery</article>
                <article id="event-plan">event planning</article>
            </FlexWrap>
        </div>
    );
}

export default Dashboard;