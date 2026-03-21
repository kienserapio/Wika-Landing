export const ROLE_OPTIONS = ["Early Tester", "Contributor", "Validator"] as const;

export type PioneerRole = (typeof ROLE_OPTIONS)[number];

export type ProficiencyLevel = "Conversational" | "Fluent" | "Native";

export type OnboardingFormState = {
  status: "idle" | "success" | "error";
  message: string;
  fieldErrors?: Record<string, string>;
};

export type FeatureCard = {
  title: string;
  description: string;
  icon: "gamepad" | "scroll" | "languages" | "shield";
};
