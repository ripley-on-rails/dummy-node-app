import type { StoryDefault, Story } from "@ladle/react";
import { Button } from "@/components/ui/button";

export default { title: "Components / Buttons" } satisfies StoryDefault;

export const ButtonPlayground: Story<{
  variant:
    | "default"
    | "outline"
    | "secondary"
    | "ghost"
    | "destructive"
    | "link";
  size:
    | "default"
    | "xs"
    | "sm"
    | "lg"
    | "icon"
    | "icon-xs"
    | "icon-sm"
    | "icon-lg";
  label: string;
  disabled: boolean;
}> = ({ variant, size, label, disabled }) => (
  <Button variant={variant} size={size} disabled={disabled}>
    {label}
  </Button>
);

ButtonPlayground.args = {
  label: "Click me",
  disabled: false,
};

ButtonPlayground.argTypes = {
  variant: {
    options: [
      "default",
      "outline",
      "secondary",
      "ghost",
      "destructive",
      "link",
    ],
    control: { type: "radio" },
  },
  size: {
    options: [
      "default",
      "xs",
      "sm",
      "lg",
      "icon",
      "icon-xs",
      "icon-sm",
      "icon-lg",
    ],
    control: { type: "radio" },
  },
};
