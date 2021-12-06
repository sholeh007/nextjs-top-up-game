import { ComponentStory, ComponentMeta } from "@storybook/react";
import Input, { propTypes } from "../../../../components/atoms/input";

export default {
  title: "Components/Atoms/Input",
  component: Input,
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args: propTypes) => (
  <Input {...args} />
);

export const Default = Template.bind({});
Default.args = {
  placeholder: "Nama Lengkap",
  type: "text",
  name: "Name Input",
};
