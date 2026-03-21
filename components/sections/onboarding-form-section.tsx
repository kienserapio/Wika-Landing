"use client";

import { useActionState, useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";

import { submitOnboarding } from "@/app/actions/onboarding";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import type { OnboardingFormState, PioneerRole } from "@/types/onboarding";

const initialState: OnboardingFormState = {
  status: "idle",
  message: "",
};

const locations = [
  "Metro Manila",
  "Luzon",
  "Visayas",
  "Mindanao",
  "Outside the Philippines",
];

const roles: PioneerRole[] = ["Early Tester", "Contributor", "Validator"];

export function OnboardingFormSection() {
  const router = useRouter();
  const [state, formAction, pending] = useActionState(submitOnboarding, initialState);
  const [selectedRoles, setSelectedRoles] = useState<PioneerRole[]>([]);

  const showLanguageFields = useMemo(() => {
    return selectedRoles.includes("Contributor") || selectedRoles.includes("Validator");
  }, [selectedRoles]);

  useEffect(() => {
    if (state.status === "success") {
      router.push("/success");
    }
  }, [router, state.status]);

  function handleRoleToggle(role: PioneerRole, checked: boolean) {
    setSelectedRoles((current) => {
      if (checked) {
        return current.includes(role) ? current : [...current, role];
      }

      return current.filter((item) => item !== role);
    });
  }

  return (
    <section id="join" className="px-6 py-16 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-3xl rounded-3xl border border-slate-200 bg-white p-8 shadow-[0_24px_60px_-35px_rgba(15,23,42,0.4)] sm:p-10">
        <div className="mb-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700">Onboarding</p>
          <h2 className="mt-2 text-3xl font-bold text-slate-900">Join the Wika Pioneer Movement</h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-600">
            Tell us how you want to contribute. We are building this with and for language communities.
          </p>
        </div>

        <form action={formAction} className="space-y-5">
          <div>
            <label htmlFor="name" className="mb-2 block text-sm font-medium text-slate-700">
              Full Name
            </label>
            <Input id="name" name="name" required />
            {state.fieldErrors?.name ? <p className="mt-1 text-xs text-red-600">{state.fieldErrors.name}</p> : null}
          </div>

          <div>
            <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-700">
              Email
            </label>
            <Input id="email" type="email" name="email" required />
            {state.fieldErrors?.email ? <p className="mt-1 text-xs text-red-600">{state.fieldErrors.email}</p> : null}
          </div>

          <div>
            <label htmlFor="location" className="mb-2 block text-sm font-medium text-slate-700">
              Location
            </label>
            <Select id="location" name="location" defaultValue="" required>
              <option value="" disabled>
                Select your location
              </option>
              {locations.map((location) => (
                <option key={location} value={location}>
                  {location}
                </option>
              ))}
            </Select>
            {state.fieldErrors?.location ? <p className="mt-1 text-xs text-red-600">{state.fieldErrors.location}</p> : null}
          </div>

          <fieldset>
            <legend className="mb-2 text-sm font-medium text-slate-700">Role</legend>
            <div className="grid gap-2 sm:grid-cols-3">
              {roles.map((role) => (
                <label
                  key={role}
                  className="flex cursor-pointer items-center gap-2 rounded-xl border border-slate-300 bg-slate-50 px-3 py-2 text-sm text-slate-700"
                >
                  <input
                    type="checkbox"
                    name="roles"
                    value={role}
                    checked={selectedRoles.includes(role)}
                    onChange={(event) => handleRoleToggle(role, event.target.checked)}
                    className="rounded border-slate-300 text-emerald-700"
                  />
                  {role}
                </label>
              ))}
            </div>
            {state.fieldErrors?.roles ? <p className="mt-1 text-xs text-red-600">{state.fieldErrors.roles}</p> : null}
          </fieldset>

          <div className={showLanguageFields ? "grid gap-5 sm:grid-cols-2" : "hidden"}>
            <div>
              <label htmlFor="dialect" className="mb-2 block text-sm font-medium text-slate-700">
                Primary Dialect
              </label>
              <Input id="dialect" name="dialect" placeholder="e.g. Tagalog, Cebuano, Ilocano" required={showLanguageFields} />
              {state.fieldErrors?.dialect ? <p className="mt-1 text-xs text-red-600">{state.fieldErrors.dialect}</p> : null}
            </div>
            <div>
              <label htmlFor="proficiency" className="mb-2 block text-sm font-medium text-slate-700">
                Proficiency Level
              </label>
              <Select id="proficiency" name="proficiency" defaultValue="" required={showLanguageFields}>
                <option value="" disabled>
                  Select proficiency
                </option>
                <option value="Conversational">Conversational</option>
                <option value="Fluent">Fluent</option>
                <option value="Native">Native</option>
              </Select>
              {state.fieldErrors?.proficiency ? (
                <p className="mt-1 text-xs text-red-600">{state.fieldErrors.proficiency}</p>
              ) : null}
            </div>
          </div>

          {state.status === "error" && state.message ? <p className="text-sm text-red-700">{state.message}</p> : null}

          <Button type="submit" className="w-full" disabled={pending}>
            {pending ? "Submitting..." : "Submit Application"}
          </Button>
        </form>
      </div>
    </section>
  );
}
