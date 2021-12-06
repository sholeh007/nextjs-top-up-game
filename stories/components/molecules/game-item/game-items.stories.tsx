import { Meta, ComponentStory } from "@storybook/react";
import GameItems, {
  GameProps,
} from "../../../../components/molecules/game-items";

export default {
  title: "Components/Molecules/GameItem",
  component: GameItems,
} as Meta;

const Template: ComponentStory<typeof GameItems> = (args: GameProps) => (
  <GameItems {...args} />
);

export const Default = Template.bind({});

Default.args = {
  category: "Mobile",
  title: "Mobile Legend",
  image: "Thumbnail-1",
  icon: "game-item",
  link: "#",
};
