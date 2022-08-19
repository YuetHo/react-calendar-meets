import { createClient, createMicrophoneAndCameraTracks } from "agora-rtc-react";

const appId = "03a39b9a96434b6f9a647738468ab530";
const token =
    "007eJxTYBBdtGrLBX5BZ7dOk2zhV2s3u5xe8P5E9hPRi3n95/r38YgpMBgYJxpbJlkmWpqZGJskmaVZJpqZmJsbW5iYWSQmmRobaHEzJK+MYUxmPqnBysgAgSA+C0NuYmYeAwMAGUseRw==";

export const config = { mode: "rtc", codec: "vp8", appId: appId, token: token };
export const useClient = createClient(config);
export const useMicrophoneAndCameraTracks = createMicrophoneAndCameraTracks();
export const channelName = "main";
