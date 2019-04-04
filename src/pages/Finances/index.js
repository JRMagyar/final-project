import React from "react";
import "./style.css";
import MediaQuery from 'react-responsive';
import { FlexRow, FlexCol } from "../../components/FlexWrap/index";

function Finances(){
    return (
        <MediaQuery minDeviceWidth={700}>
            {(matches) => {
                if (matches) {
                    return  <FlexRow>
                    <article className="calendar">
                        area for calendar
                    </article>
                    <article className="note-list">
                        notification list
                    </article>
                    </FlexRow>
                } else {
                    return  <FlexCol>
                    <article className="calendar">
                        area for calendar
                    </article>
                    <article className="note-list">
                        notification list
                    </article>
                    </FlexCol>
                }
            }}
        </MediaQuery>
    );
}

export default Finances;