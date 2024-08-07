import { AgentFrame, MDSAgentFrame } from '@multion/mds';

const MDSButtonExample = () => {
  const frame: AgentFrame = {
    sessionId: '123',
    debuggerUrl:
      'https://www.browserbase.com/devtools-fullscreen/inspector.html?wss=connect.browserbase.com/debug/93b07253-af5d-4fc6-a0f8-2682b0ff6358/devtools/page/6F62B3E87CDF35C1BA606D801A545382?debug=true',
    sessionUrl: 'https://www.browserbase.com',
  };
  return (
    <div className="flex flex-col space-y-4">
      <MDSAgentFrame frame={frame} />
    </div>
  );
};

export default MDSButtonExample;
