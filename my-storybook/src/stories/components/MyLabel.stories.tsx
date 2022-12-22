import { ComponentMeta, ComponentStory } from "@storybook/react";
import { MyLabel } from "../../components/MyLabel";

export default {
  title: "UI/Etiquetas/MyLabel",
  component: MyLabel,
  argTypes: {
    color: { control: "select" },
    fontColor: { control: "color" },
  },
} as ComponentMeta<typeof MyLabel>;

const Template: ComponentStory<typeof MyLabel> = (args) => (
  <MyLabel {...args}></MyLabel>
);

export const BasicLabel = Template.bind({});
BasicLabel.args = {
  allCaps: false,
  size: "normal",
};

export const AllCaps = Template.bind({});
AllCaps.args = {
  size: "normal",
  allCaps: true,
};

export const Secondary = Template.bind({});
Secondary.args = {
  size: "normal",
  color: "secondary",
};

export const Terciary = Template.bind({});
Terciary.args = {
  size: "normal",
  color: "terciary",
};

export const FontColor = Template.bind({});
FontColor.args = {
  size: "h1",
  fontColor: "#5517ac",
};
