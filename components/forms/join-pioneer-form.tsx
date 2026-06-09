"use client";

import { useRouter } from "next/navigation";
import { useActionState, useEffect, useState } from "react";
import { useFormStatus } from "react-dom";

import { submitPioneerApplication, type JoinFormState } from "@/app/actions/pioneer";
import { Button } from "@/components/ui/button";

const initialState: JoinFormState = {
  status: "idle",
  message: "",
};

type Role = "tester" | "contributor" | "validator" | "educator";

type RoleCard = {
  role: Role;
  emoji: string;
  title: string;
  description: string;
  badge: string;
};

const roleCards: RoleCard[] = [
  {
    role: "tester",
    emoji: "📱",
    title: "Early User / Beta Tester",
    description:
      "Be the first to experience Wika. Test new features, report bugs, and shape the user experience before public launch.",
    badge: "PRIORITY ACCESS",
  },
  {
    role: "contributor",
    emoji: "✍️",
    title: "Language Contributor",
    description:
      "Help create lesson content, translate materials, or craft sample sentences and vocabulary in your language.",
    badge: "CO-CREATOR",
  },
  {
    role: "validator",
    emoji: "🔍",
    title: "Language Validator",
    description:
      "As a native speaker or linguistic expert, review content for cultural accuracy, grammar, and natural usage.",
    badge: "EXPERT REVIEW",
  },
  
  {
    role: "educator",
    emoji: "🏫",
    title: "Educator / Institutional Partner",
    description: "Bring Wika into your school, organization, or community group. Pilot our curriculum with your learners.",
    badge: "EDUCATION",
  },
];

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" variant="secondary" size="lg" className="w-full sm:w-auto" disabled={pending}>
      {pending ? "Submitting..." : "Claim My Spot"}
    </Button>
  );
}

export function JoinPioneerForm() {
  const [state, action] = useActionState(submitPioneerApplication, initialState);
  const router = useRouter();
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [selectedRoles, setSelectedRoles] = useState<Role[]>([]);

  const [testerNotes, setTesterNotes] = useState("");

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [location, setLocation] = useState("");

  const needsLanguageFields = selectedRoles.includes("contributor") || selectedRoles.includes("validator");

  const goToStep = (nextStep: 1 | 2 | 3) => {
    setStep(nextStep);
  };

  const toggleRole = (role: Role, checked: boolean) => {
    setSelectedRoles((prev) => {
      if (checked) return [...new Set([...prev, role])];
      return prev.filter((entry) => entry !== role);
    });
  };

  const canContinueStep1 = firstName.trim().length > 0 && lastName.trim().length > 0 && email.trim().length > 0 && location.trim().length > 0;
  const canContinueStep2 = selectedRoles.length > 0;

  useEffect(() => {
    if (state.status !== "error" || !state.fieldErrors) return;

    const keys = Object.keys(state.fieldErrors);
    if (keys.some((key) => ["firstName", "lastName", "email", "location"].includes(key))) {
      setStep(1);
      return;
    }

    if (keys.some((key) => ["roles", "primaryLanguage", "proficiency"].includes(key))) {
      setStep(2);
      return;
    }

    setStep(3);
  }, [state]);

  useEffect(() => {
    if (state.status !== "success") return;

    const safeFirstName = firstName.trim() || "Kaibigan";
    router.push(`/success?firstName=${encodeURIComponent(safeFirstName)}`);
  }, [firstName, router, state.status]);

  if (state.status === "success") {
    return (
      <section className="mx-auto w-full max-w-3xl rounded-3xl border border-surface-border bg-white p-8 text-center sm:p-12">
        <h1 className="font-headline text-3xl font-black text-primary sm:text-4xl">Saving your application...</h1>
        <p className="mx-auto mt-4 max-w-xl text-base text-on-background/75">Taking you to your confirmation page.</p>
      </section>
    );
  }

  return (
    <form action={action} className="mx-auto w-full max-w-4xl rounded-3xl border border-surface-border bg-white p-6 sm:p-10">
      <section className="space-y-3 border-b border-surface-border pb-6">
        <p className="inline-flex items-center rounded-full bg-primary-accent/15 px-4 py-1 text-xs font-black uppercase tracking-[0.2em] text-primary">
          Now Accepting Early Members
        </p>
        <h1 className="font-headline text-3xl font-black text-primary sm:text-4xl">Join the Wika Movement</h1>
        <p className="max-w-2xl text-on-background/75">
          Help us build the most inclusive Filipino language platform. Complete each section to submit your application.
        </p>

        <div className="flex items-center gap-2 pt-2">
          {[1, 2, 3].map((index) => (
            <div
              key={index}
              className={`h-2 rounded-full transition-all ${
                step === index ? "w-12 bg-primary" : step > index ? "w-8 bg-secondary" : "w-8 bg-surface-border"
              }`}
            />
          ))}
        </div>
      </section>

      <section className={`${step === 1 ? "mt-8 block wika-step-fade" : "hidden"}`}>
        <h2 className="font-headline text-xl font-extrabold text-primary">About You</h2>

        <div className="mt-5 grid gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <label htmlFor="firstName" className="text-sm font-bold text-on-background">
              First Name
            </label>
            <input
              id="firstName"
              name="firstName"
              value={firstName}
              onChange={(event) => setFirstName(event.target.value)}
              className="h-12 w-full rounded-xl border border-surface-border bg-white px-4 text-sm outline-none transition focus:border-primary"
              placeholder="Maria"
            />
            {state.fieldErrors?.firstName ? <p className="text-xs font-semibold text-red-600">{state.fieldErrors.firstName}</p> : null}
          </div>

          <div className="space-y-2">
            <label htmlFor="lastName" className="text-sm font-bold text-on-background">
              Last Name
            </label>
            <input
              id="lastName"
              name="lastName"
              value={lastName}
              onChange={(event) => setLastName(event.target.value)}
              className="h-12 w-full rounded-xl border border-surface-border bg-white px-4 text-sm outline-none transition focus:border-primary"
              placeholder="Santos"
            />
            {state.fieldErrors?.lastName ? <p className="text-xs font-semibold text-red-600">{state.fieldErrors.lastName}</p> : null}
          </div>
        </div>

        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-bold text-on-background">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className="h-12 w-full rounded-xl border border-surface-border bg-white px-4 text-sm outline-none transition focus:border-primary"
              placeholder="you@example.com"
            />
            {state.fieldErrors?.email ? <p className="text-xs font-semibold text-red-600">{state.fieldErrors.email}</p> : null}
          </div>

          <div className="space-y-2">
            <label htmlFor="location" className="text-sm font-bold text-on-background">
              Location
            </label>
            <select
              id="location"
              name="location"
              value={location}
              onChange={(event) => setLocation(event.target.value)}
              className="h-12 w-full rounded-xl border border-surface-border bg-white px-4 text-sm outline-none transition focus:border-primary"
            >
              <option value="" disabled>
                Select your region
              </option>
              <option value="ncr">NCR / Metro Manila</option>
              <option value="luzon">Luzon (outside NCR)</option>
              <option value="visayas">Visayas</option>
              <option value="mindanao">Mindanao</option>
              <option value="international">International / Overseas Filipino</option>
            </select>
            {state.fieldErrors?.location ? <p className="text-xs font-semibold text-red-600">{state.fieldErrors.location}</p> : null}
          </div>
        </div>

        <div className="mt-4 space-y-2">
          <label htmlFor="referral" className="text-sm font-bold text-on-background">
            How did you hear about Wika? <span className="font-normal text-on-background/60">(optional)</span>
          </label>
          <select
            id="referral"
            name="referral"
            defaultValue=""
            className="h-12 w-full rounded-xl border border-surface-border bg-white px-4 text-sm outline-none transition focus:border-primary"
          >
            <option value="" disabled>
              Select one
            </option>
            <option value="social">Social Media</option>
            <option value="friend">Friend or Family</option>
            <option value="school">School or University</option>
            <option value="community">Community Group</option>
            <option value="news">News or Blog</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div className="mt-6 flex justify-end">
          <Button type="button" variant="primary" onClick={() => goToStep(2)} disabled={!canContinueStep1}>
            Next
          </Button>
        </div>
      </section>

      <section className={`${step === 2 ? "mt-8 block wika-step-fade" : "hidden"}`}>
        <h2 className="font-headline text-xl font-extrabold text-primary">How would you like to contribute?</h2>
        <p className="mt-2 text-sm text-[#A5A5A5]">
          Select all that apply - your selections help us tailor your onboarding and ensure your skills go where
          they&apos;re needed most.
        </p>

        <div className="mt-5 grid gap-3">
          {roleCards.map((entry) => {
            const checked = selectedRoles.includes(entry.role);

            return (
              <label
                key={entry.role}
                className={`cursor-pointer rounded-2xl border p-4 transition ${
                  checked ? "border-primary bg-primary-accent/10" : "border-surface-border bg-white"
                }`}
              >
                <input
                  type="checkbox"
                  name="roles"
                  value={entry.role}
                  className="sr-only"
                  checked={checked}
                  onChange={(event) => toggleRole(entry.role, event.target.checked)}
                />
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-3">
                    <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-md border border-surface-border bg-white text-xs font-black text-primary">
                      {checked ? "✓" : ""}
                    </span>
                    <span className="text-xl leading-none">{entry.emoji}</span>
                    <div>
                      <p className="font-bold text-on-background">{entry.title}</p>
                      <p className="mt-1 text-sm text-[#A5A5A5]">{entry.description}</p>
                    </div>
                  </div>
                  <span className="rounded-full bg-secondary/15 px-3 py-1 text-xs font-black uppercase tracking-wider text-secondary-dark">
                    {entry.badge}
                  </span>
                </div>
              </label>
            );
          })}
        </div>
        {state.fieldErrors?.roles ? <p className="mt-2 text-xs font-semibold text-red-600">{state.fieldErrors.roles}</p> : null}

        {needsLanguageFields ? (
          <section className="mt-5 space-y-4 rounded-2xl border border-primary/20 bg-primary-accent/10 p-5">
            <h3 className="font-headline text-lg font-extrabold text-primary">Language Expertise</h3>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <label htmlFor="primaryLanguage" className="text-sm font-bold text-on-background">
                  Primary Language / Dialect
                </label>
                <select
                  id="primaryLanguage"
                  name="primaryLanguage"
                  defaultValue=""
                  className="h-12 w-full rounded-xl border border-surface-border bg-white px-4 text-sm outline-none transition focus:border-primary"
                >
                  <option value="" disabled>
                    Select a language
                  </option>
                  <option value="Tagalog / Filipino">Tagalog / Filipino</option>
                  <option value="Cebuano / Bisaya">Cebuano / Bisaya</option>
                  <option value="Ilocano">Ilocano</option>
                  <option value="Hiligaynon / Ilonggo">Hiligaynon / Ilonggo</option>
                  <option value="Waray-Waray">Waray-Waray</option>
                  <option value="Kapampangan">Kapampangan</option>
                  <option value="Bikol">Bikol</option>
                  <option value="Other">Other</option>
                </select>
                {state.fieldErrors?.primaryLanguage ? (
                  <p className="text-xs font-semibold text-red-600">{state.fieldErrors.primaryLanguage}</p>
                ) : null}
              </div>

              <div className="space-y-2">
                <label htmlFor="proficiency" className="text-sm font-bold text-on-background">
                  Proficiency
                </label>
                <select
                  id="proficiency"
                  name="proficiency"
                  defaultValue=""
                  className="h-12 w-full rounded-xl border border-surface-border bg-white px-4 text-sm outline-none transition focus:border-primary"
                >
                  <option value="" disabled>
                    Select your level
                  </option>
                  <option value="native">Native Speaker</option>
                  <option value="heritage">Heritage Speaker</option>
                  <option value="professional">Professional</option>
                  <option value="academic">Academic / Researcher</option>
                  <option value="advanced">Advanced Learner</option>
                </select>
                {state.fieldErrors?.proficiency ? <p className="text-xs font-semibold text-red-600">{state.fieldErrors.proficiency}</p> : null}
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="otherLanguage" className="text-sm font-bold text-on-background">
                If Other, specify
              </label>
              <input
                id="otherLanguage"
                name="otherLanguage"
                className="h-12 w-full rounded-xl border border-surface-border bg-white px-4 text-sm outline-none transition focus:border-primary"
                placeholder="e.g. Kankanaey"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="additionalLanguages" className="text-sm font-bold text-on-background">
                Additional languages <span className="font-normal text-on-background/60">(optional)</span>
              </label>
              <input
                id="additionalLanguages"
                name="additionalLanguages"
                className="h-12 w-full rounded-xl border border-surface-border bg-white px-4 text-sm outline-none transition focus:border-primary"
                placeholder="Separate by commas"
              />
            </div>
          </section>
        ) : null}

          {selectedRoles.includes("tester") ? (
            <div className="mt-4">
              <label htmlFor="testerNotes" className="text-sm font-bold text-on-background">
                Tell us about your testing setup or goals <span className="font-normal text-on-background/60">(optional)</span>
              </label>
              <textarea
                id="testerNotes"
                name="testerNotes"
                value={testerNotes}
                onChange={(e) => setTesterNotes(e.target.value)}
                className="mt-2 h-24 w-full rounded-xl border border-surface-border bg-white px-4 py-2 text-sm outline-none transition focus:border-primary"
                placeholder="Devices, platforms, availability, or what you'd like to test"
              />
            </div>
          ) : null}

        <div className="mt-6 flex items-center justify-between">
          <Button type="button" variant="ghost" onClick={() => goToStep(1)}>
            Back
          </Button>
          <Button type="button" variant="primary" onClick={() => goToStep(3)} disabled={!canContinueStep2}>
            Next
          </Button>
        </div>
      </section>

      <section className={`${step === 3 ? "mt-8 block wika-step-fade" : "hidden"}`}>
        <h2 className="font-headline text-xl font-extrabold text-primary">🎁 Your Founding Member Benefits</h2>

        <div className="mt-4 rounded-2xl border border-secondary/20 bg-secondary/10 p-5">
          <h3 className="font-headline text-lg font-extrabold text-secondary-dark">🌟 What you&apos;ll receive as an early member</h3>

            <div className="mt-4 space-y-4">
              <div>
                <p className="font-bold text-on-background">🏅 Founding Member Badge</p>
                <p className="text-sm text-[#A5A5A5]">
                  A permanent, verified badge on your Wika profile that marks you as one of the original builders of this movement.
                </p>
              </div>
              <div>
                <p className="font-bold text-on-background">🗳️ Direct Product Input</p>
                <p className="text-sm text-[#A5A5A5]">
                  Vote on the features we build next. Your feedback directly shapes our roadmap - no committee, no filter.
                </p>
              </div>
              <div>
                <p className="font-bold text-on-background">🔔 First Access to Beta</p>
                <p className="text-sm text-[#A5A5A5]">
                  Skip the public waitlist. Contributors and validators are onboarded in priority batches before our public launch.
                </p>
              </div>
              <div>
                <p className="font-bold text-on-background">🤝 Contributor Recognition</p>
                <p className="text-sm text-[#A5A5A5]">
                  Language contributors and validators are credited within the app and in our public community acknowledgments.
                </p>
              </div>
            </div>
        </div>

        <section className="mt-6 space-y-3 border-t border-surface-border pt-6">
          <label className="flex items-start gap-3 text-sm text-on-background/75">
            <input type="checkbox" name="agreedToTerms" className="mt-1 h-4 w-4 accent-primary" />
            <span>
              I agree to Wika&apos;s terms and privacy policy. My details will only be used for onboarding and community updates.
            </span>
          </label>
          {state.fieldErrors?.agreedToTerms ? <p className="text-xs font-semibold text-red-600">{state.fieldErrors.agreedToTerms}</p> : null}

          {state.status === "error" && state.message ? <p className="text-sm font-semibold text-red-600">{state.message}</p> : null}

          <div className="flex flex-col items-stretch justify-between gap-4 sm:flex-row sm:items-center">
            <div className="flex gap-3">
              <Button type="button" variant="ghost" onClick={() => goToStep(2)}>
                Back
              </Button>
              <p className="self-center text-xs text-on-background/60">Your data is secure and only used for Wika onboarding.</p>
            </div>
            <SubmitButton />
          </div>
        </section>
      </section>

      {selectedRoles.includes("contributor") ? <input type="hidden" name="contributorNotes" value="" /> : null}
      {selectedRoles.includes("validator") ? <input type="hidden" name="validatorNotes" value="" /> : null}
      {selectedRoles.includes("tester") ? (
        <input type="hidden" name="testerNotes" value={testerNotes} />
      ) : null}
      
    </form>
  );
}
