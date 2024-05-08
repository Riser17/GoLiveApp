//Auth token we will use to generate a meeting and connect to it
export const authToken =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGlrZXkiOiI3NTkwNjViOS0zNDk1LTQwZGItODU3Yy1iMjA3MGE0NDU0YjkiLCJwZXJtaXNzaW9ucyI6WyJhbGxvd19qb2luIl0sImlhdCI6MTcxNTA3NTY5MCwiZXhwIjoxODcyODYzNjkwfQ.zIQ3Um2zLMtnBqDjxFHwcBO_sVBIl7XzUvtJ3-kELWg';
// API call to create meeting
export const createMeeting = async ({token}) => {
  const res = await fetch(`https://api.videosdk.live/v2/rooms`, {
    method: 'POST',
    headers: {
      authorization: `${authToken}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({}),
  });
  //Destructuring the roomId from the response
  const {roomId} = await res.json();
  return roomId;
};
