import React from "react";
import { ImageCard as Component } from "components";

export default {
  title: "components/ImageCard",
  component: Component,
};

const Template = (args) => <Component {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
