import React from "react";

const GoogleSchdule = () => {
    const handleCreateMeet = () => {
        // Event details
        const title = "Google Meet Meeting"; // Meeting title
        const startTime = new Date(Date.now() + 15 * 60 * 1000).toISOString(); // 15 minutes from now
        const endTime = new Date(Date.now() + 60 * 60 * 1000).toISOString(); // 1 hour from now
        const details = "Join us for a virtual meeting!";
        const location = "Google Meet"; // Indicate virtual meeting
        const calendarURL = `https://calendar.google.com/calendar/u/0/r/eventedit?text=${encodeURIComponent(
            title
        )}&dates=${startTime.replace(/-|:|\.\d+/g, "")}/${endTime.replace(
            /-|:|\.\d+/g,
            ""
        )}&details=${encodeURIComponent(details)}&location=${encodeURIComponent(
            location
        )}`;

        // Open the URL in a new tab
        window.open(calendarURL, "_blank");
    };

    return (
        <button
            onClick={handleCreateMeet}
            style={{
                padding: "10px 20px",
                backgroundColor: "#4285F4",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
            }}
        >
            Launch Google Meet
        </button>
    );
};

export default GoogleSchdule;