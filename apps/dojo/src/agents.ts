import "server-only";

import { HttpAgent } from "@ag-ui/client";

import { AgentIntegrationConfig } from "./types/integration";
import getEnvVars from "./env";

const envVars = getEnvVars();

export const agentsIntegrations: AgentIntegrationConfig[] = [
  {
    id: "agentscope-react",
    agents: async () => ({
      agentic_chat: new HttpAgent({
        url: `${envVars.reactAgentscopeUrl}/agents/demo-react`,
      }),
    }),
  },
];
