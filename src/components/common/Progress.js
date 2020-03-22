import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";

const Progress = () => {
    return <div className="wrap-progress">
        <CircularProgress color="primary" size="6rem" disableShrink />
    </div>
}
export default Progress