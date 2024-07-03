import type { Meta, StoryObj } from "@storybook/react";

import { CodeRepo } from "../app/components/molecules/codeRepo";

const meta: Meta = {
  title: "Molecules/CodeRepo",
  component: CodeRepo,
};

export default meta;
type Story = StoryObj<typeof CodeRepo>;

export const FirstStory: Story = {
  args: {
    repoName: "Example Repository",
    repoDescription: "This is an example description of a repository.",
    repoUrl: "https://github.com/example/repo",
  },
};
