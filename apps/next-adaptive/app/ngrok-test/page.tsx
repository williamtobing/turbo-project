import React from 'react';

const NgrokTestPage = () => {
  const ngrokUrl = process.env.NEXT_PUBLIC_NGROK_TEST_URL;

  if (!ngrokUrl) {
    return <div>ngrokUrl is not set</div>;
  }

  return <a href={ngrokUrl}>{ngrokUrl}</a>;
};

export default NgrokTestPage;

