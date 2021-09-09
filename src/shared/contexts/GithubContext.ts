import React from "react";

import GitHubStore from "@store/GitHubStore";

export type GithubContextType = {
  store: GitHubStore;
};

const GithubContext = React.createContext<GithubContextType | null>(null);

export default GithubContext;
