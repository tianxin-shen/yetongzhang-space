import type { Meta, StoryObj } from "@storybook/react";

import { Tag } from "../app/components/molecules/tag";

const meta: Meta = {
  title: "Molecules/Tag",
  component: Tag,
};

export default meta;
type Story = StoryObj<typeof Tag>;

export const FirstStory: Story = {
  args: {
    tag: "Work",
  },
};
