import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { CodeCard } from "../app/components/molecules/codeCard";
import { Repo } from "@/app/assets/utils";

// Sample repositories data for stories
const sampleRepos: Repo[] = [
  {
    id: "1",
    name: "Reporsitory/Repo 1",
    description: "This is the first sample repository.",
    url: "https://github.com/sample/repo1",
  },
  {
    id: "2",
    name: "Reporsitory/Repo 2",
    description: "This is the second sample repository.",
    url: "https://github.com/sample/repo2",
  },
  {
    id: "3",
    name: "Reporsitory/Repo 3",
    description: "This is the second sample repository.",
    url: "https://github.com/sample/repo3",
  },
  {
    id: "4",
    name: "Reporsitory/Repo 4",
    description: "This is the second sample repository.",
    url: "https://github.com/sample/repo2",
  },
];

const meta: Meta = {
  title: "Components/CodeCard",
  component: CodeCard,
};

export default meta;
type Story = StoryObj<typeof CodeCard>;

export const FirstStory: Story = {
  args: {
    repos: sampleRepos,
  },
};
