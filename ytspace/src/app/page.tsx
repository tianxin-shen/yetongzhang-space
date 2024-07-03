import { Tag } from "./components/molecules/tag";
import { Repo } from "./assets/utils";
import { CodeCard } from "./components/molecules/codeCard";

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

export default function Home() {
  return (
    <div>
      <CodeCard repos={sampleRepos} />
    </div>
  );
}
