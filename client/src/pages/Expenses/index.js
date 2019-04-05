import React from "react";
import "./style.css";
import MediaQuery from 'react-responsive';
import { FlexRow, FlexCol } from "../../components/FlexWrap/index";

function Expenses(props){
    return (
        <MediaQuery minDeviceWidth={700}>
            {(matches) => {
                if (matches) {
                    return  <FlexRow>
                    <article className="flex-child title-area">
                        expenses title{/* {props.pagename} */}
                    </article>
                    <div className="flex-child left-child-p">
                        <article className="calendar-area-mini">
                            area for calendar
                        </article>
                        <article className="add-box">
                            add item area
                        </article>
                    </div>
                    <article className="flex-child right-child-p">
                        expenses list (quick view / expand view / update & delete)
                    </article>
                    </FlexRow>
                } else {
                    return  <FlexCol>
                    <article className="title-areaM">
                        expenses title{/* {props.pagename} */}
                    </article>
                    <article className="calendarM">
                        area for calendar / click to add
                    </article>
                    <article className="note-listM">
                        expenses list
                    </article>
                    </FlexCol>
                }
            }}
        </MediaQuery>
    );
}

export default Expenses;