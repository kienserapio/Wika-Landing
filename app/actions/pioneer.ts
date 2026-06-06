"use server";

import { prisma } from "@/lib/prisma";

export type JoinFormState = {
  status: "idle" | "success" | "error";
  message: string;
  fieldErrors?: Record<string, string>;
};

const allowedRoles = new Set(["tester", "contributor", "validator", "educator"]);
const allowedProficiency = new Set(["native", "heritage", "professional", "academic", "advanced"]);

export async function submitPioneerApplication(
  _prevState: JoinFormState,
  formData: FormData,
): Promise<JoinFormState> {
  const firstName = String(formData.get("firstName") || "").trim();
  const lastName = String(formData.get("lastName") || "").trim();
  const email = String(formData.get("email") || "").trim().toLowerCase();
  const location = String(formData.get("location") || "").trim();
  const referral = String(formData.get("referral") || "").trim() || null;
  const roles = formData
    .getAll("roles")
    .map((value) => String(value))
    .filter((role) => allowedRoles.has(role));

  const primaryLanguage = String(formData.get("primaryLanguage") || "").trim() || null;
  const otherLanguage = String(formData.get("otherLanguage") || "").trim() || null;
  const proficiency = String(formData.get("proficiency") || "").trim() || null;
  const additionalLanguagesRaw = String(formData.get("additionalLanguages") || "").trim();
  const additionalLanguages = additionalLanguagesRaw
    ? additionalLanguagesRaw
        .split(",")
        .map((value) => value.trim())
        .filter(Boolean)
    : [];

  const contributorNotes = String(formData.get("contributorNotes") || "").trim() || null;
  const validatorNotes = String(formData.get("validatorNotes") || "").trim() || null;
  const testerNotes = String(formData.get("testerNotes") || "").trim() || null;
  
  const agreedToTerms = formData.get("agreedToTerms") === "on";

  const needsLanguageFields = roles.includes("contributor") || roles.includes("validator");

  const fieldErrors: Record<string, string> = {};

  if (!firstName) fieldErrors.firstName = "First name is required.";
  if (!lastName) fieldErrors.lastName = "Last name is required.";
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    fieldErrors.email = "A valid email is required.";
  }
  if (!location) fieldErrors.location = "Please select your location.";
  if (roles.length === 0) fieldErrors.roles = "Pick at least one role.";

  if (needsLanguageFields) {
    if (!primaryLanguage) fieldErrors.primaryLanguage = "Primary language is required for this role.";
    if (!proficiency || !allowedProficiency.has(proficiency)) {
      fieldErrors.proficiency = "Select your language proficiency.";
    }
  }

  if (!agreedToTerms) {
    fieldErrors.agreedToTerms = "You need to accept the terms to continue.";
  }

  if (Object.keys(fieldErrors).length > 0) {
    return {
      status: "error",
      message: "Please review the highlighted fields.",
      fieldErrors,
    };
  }

  try {
    await prisma.pioneerApplication.upsert({
      where: { email },
      create: {
        firstName,
        lastName,
        email,
        location,
        referral,
        roles,
        primaryLanguage: needsLanguageFields ? primaryLanguage : null,
        otherLanguage,
        proficiency: needsLanguageFields ? proficiency : null,
        additionalLanguages,
        contributorNotes,
        validatorNotes,
        testerNotes,
        agreedToTerms,
      },
      update: {
        firstName,
        lastName,
        location,
        referral,
        roles,
        primaryLanguage: needsLanguageFields ? primaryLanguage : null,
        otherLanguage,
        proficiency: needsLanguageFields ? proficiency : null,
        additionalLanguages,
        contributorNotes,
        validatorNotes,
        testerNotes,
        agreedToTerms,
      },
    });

    return {
      status: "success",
      message: "Application received. Welcome to the Wika founding community.",
    };
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error("submitPioneerApplication error:", err);

    return {
      status: "error",
      message: "We could not save your form right now. Please try again.",
    };
  }
}
