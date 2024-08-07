export type AgentFrame = {
  sessionId: string;
  sessionUrl: string;
  debuggerUrl: string;
};

export type SearchResultItem = {
  id: string;
  title: string;
  url: string;
  description?: string;
  summary?: Record<string, unknown>[];
  debuggerUrl?: string;
  screenshot?: string;
};

export type PartialQuery = Partial<{
  primary: string;
  emoji: string;
  secondary?: string | undefined;
}> & {
  id?: string;
};
