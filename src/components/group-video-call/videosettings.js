import { createClient, createMicrophoneAndCameraTracks } from "agora-rtc-react";

const appId = "03a39b9a96434b6f9a647738468ab530";
const token =
    "007eJxTYHi77qTK3E8nhFdoTVPawy95+IOwUzVXNkf+2Scxi3g15xQrMBgYJxpbJlkmWpqZGJskmaVZJpqZmJsbW5iYWSQmmRobXJj+L8n/5f+kWXN/sDAyQCCIz8KQm5iZx8AAAGOlIus=";

export const config = { mode: "rtc", codec: "vp8", appId: appId, token: token };
export const useClient = createClient(config);
export const useMicrophoneAndCameraTracks = createMicrophoneAndCameraTracks();
export const channelName = "main";