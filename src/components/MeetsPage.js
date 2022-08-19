import React from "react";
import { useState } from "react";
import Button from "@mui/material/Button";
import VideoCall from "./group-video-call/VideoCall";

function MeetsPage() {
    const [inCall, setInCall] = useState(false);
    // <div className="meetsPage">
    return (
        <div style={{ height: "100%" }}>
            {inCall ? (
                <VideoCall setInCall={setInCall} />
            ) : (
                <Button
                    variant="contained"
                    color="primary"
                    onClick={() => setInCall(true)}
                >
                    Join Meeting
                </Button>
            )}
        </div>
    );
}

export default MeetsPage;
