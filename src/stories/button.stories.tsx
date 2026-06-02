import React from "react";
import {
  Button as ButtonComponent,
  buttonVariants,
} from "@/components/ui/button";
import type { StoryDefault, Story } from "@ladle/react";
import type { VariantProps } from "class-variance-authority";

type ButtonVariant = VariantProps<typeof buttonVariants>["variant"];

const BUTTON_VARIANTS: ButtonVariant[] = [
  "default",
  "outline",
  "secondary",
  "ghost",
  "destructive",
  "link",
];

export default { title: "Components / Buttons" } satisfies StoryDefault;

export const Button: Story = () => (
  <div className="space-y-8">
    <div>
      <h2 className="text-xl font-bold tracking-tight">Button States Grid</h2>
      <p className="text-sm text-muted-foreground">
        Global audit page for variants and disabled states.
      </p>
    </div>

    <div className="grid grid-cols-3 gap-6 max-w-3xl rounded-xl border border-border p-6 bg-card">
      <div className="text-xs font-semibold uppercase text-muted-foreground">
        Variant
      </div>
      <div className="text-xs font-semibold uppercase text-muted-foreground">
        Active State
      </div>
      <div className="text-xs font-semibold uppercase text-muted-foreground">
        Disabled State
      </div>

      {BUTTON_VARIANTS.map((v) => (
        <React.Fragment key={v}>
          <div className="font-mono text-sm self-center font-semibold capitalize">
            {v}
          </div>
          <div className="flex items-center">
            <ButtonComponent className="btn" variant={v}>
              Action
            </ButtonComponent>
          </div>
          <div className="flex items-center">
            <ButtonComponent variant={v} disabled>
              Disabled
            </ButtonComponent>
          </div>
        </React.Fragment>
      ))}
    </div>
  </div>
);
