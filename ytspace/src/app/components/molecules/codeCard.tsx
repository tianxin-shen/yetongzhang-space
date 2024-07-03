import React, { useEffect, useState } from "react";
import { CodeRepo } from "./codeRepo";
import { Tag } from "./tag";
import { BORDER } from "@/app/assets/colors/colorConstants";
import { Repo } from "@/app/assets/utils";

export function CodeCard({ repos }: { repos: Repo[] }) {
  return (
    <div
      className="flex flex-col w-100 md:max-w-[30rem] md:p-[0.625rem] md:rounded-xl rounded-lg bg-zinc-900"
      style={{ border: "1px solid " + BORDER }}
    >
      <Tag tag="Code Library" />
      {repos.map((repo) => (
        <CodeRepo
          key={repo.id}
          repoName={repo.name}
          repoDescription={repo.description}
          repoUrl={repo.url}
        />
      ))}
    </div>
  );
}
