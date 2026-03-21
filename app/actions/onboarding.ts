"use server";

import { prisma } from "@/lib/prisma";
import type { OnboardingFormState, ProficiencyLevel } from "@/types/onboarding";

const allowedRoles = new Set(["Early Tester", "Contributor", "Validator"]);
const allowedProficiency = new Set<ProficiencyLevel>(["Conversational", "Fluent", "Native"]);

export async function submitOnboarding(
  _prevState: OnboardingFormState,
  formData: FormData,
): Promise<OnboardingFormState> {
  const name = String(formData.get("name") || "").trim();
  const email = String(formData.get("email") || "").trim().toLowerCase();
  const location = String(formData.get("location") || "").trim();
  const roles = formData
    .getAll("roles")
    .map((value) => String(value))
    .filter((role) => allowedRoles.has(role));
  const dialect = String(formData.get("dialect") || "").trim();
  const proficiency = String(formData.get("proficiency") || "").trim() as ProficiencyLevel;

  const fieldErrors: Record<string, string> = {};

  if (name.length < 2) {
    fieldErrors.name = "Please provide your full name.";
  }

  if (!email || !email.includes("@")) {
    fieldErrors.email = "Please enter a valid email address.";
  }

  if (!location) {
    fieldErrors.location = "Select your current location.";
  }

  if (!roles.length) {
    fieldErrors.roles = "Choose at least one role in the movement.";
  }

  const needsLanguageFields = roles.includes("Contributor") || roles.includes("Validator");
  if (needsLanguageFields) {
    if (!dialect) {
      fieldErrors.dialect = "Primary dialect is required for contributors and validators.";
    }

    if (!allowedProficiency.has(proficiency)) {
      fieldErrors.proficiency = "Select your proficiency level.";
    }
  }

  if (Object.keys(fieldErrors).length > 0) {
    return {
      status: "error",
      message: "Please review the highlighted fields.",
      fieldErrors,
    };
  }

  try {
    await prisma.user.upsert({
      where: { email },
      create: {
        name,
        email,
        location,
        roles,
        dialect: needsLanguageFields ? dialect : null,
        proficiency: needsLanguageFields ? proficiency : null,
      },
      update: {
        name,
        location,
        roles,
        dialect: needsLanguageFields ? dialect : null,
        proficiency: needsLanguageFields ? proficiency : null,
      },
    });

    return {
      status: "success",
      message: "Application received. Thank you for joining the Wika Pioneer Movement.",
    };
  } catch {
    return {
      status: "error",
      message: "Something went wrong while saving your details. Please try again.",
    };
  }
}
