import React from "react";
import "./style.css";
import MediaQuery from 'react-responsive';
import { FlexRow, FlexCol } from "../../components/FlexWrap/index";
import Nav from "../../components/NavBar/index";

function Finances(){
    return (
        <MediaQuery minDeviceWidth={700}>
            {(matches) => {
                if (matches) {
                    return  <div>
                    <Nav />
                    <FlexRow>
                    <article className="calendar">
                        area for calendar
                    </article>
                    <article className="note-list">
                        notification list
                    </article>
                    </FlexRow>
                    </div>
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