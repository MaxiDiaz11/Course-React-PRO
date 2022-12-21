import { ComponentMeta, ComponentStory } from "@storybook/react";
import { MyLabel } from "../../components/MyLabel";

export default {
  title: "UI/Etiquetas/MyLabel",
  component: MyLabel,
} as ComponentMeta<typeof MyLabel>;

const Template: ComponentStory<typeof MyLabel> = (args) => (
  <MyLabel {...args}></MyLabel>
);

export const BasicLabel = Template.bind({});
BasicLabel.args = {
  label: "Hola Mundo",
  size: "normal",
};
