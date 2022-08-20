import React from "react";
import { useState } from "react";
import Button from "@mui/material/Button";
import VideoCall from "./group-video-call/VideoCall";

function MeetsPage() {
    const [inCall, setInCall] = useState(false);

    return (
        <div className="meetsPage">
            {inCall ? (
                <VideoCall setInCall={setInCall} />
            ) : (
                <div className="joinMeetingContainer">
                    <div className="joinInnerMeetingContainer">
                        <span className="joinMeetingTitle">Today's Upcoming Meeting</span>
                        <div className="meetingSchedule">
                            No meeting scheduled today
                        </div>
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={() => setInCall(true)}
                            style={{width:"40%" ,background: "#3D56F0"}}
                        >
                            Join Meeting
                        </Button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default MeetsPage;
