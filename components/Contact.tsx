"use client";

import { Mail, MessageCircle, Zap, ShieldCheck, Send, Loader2, CheckCircle, AlertCircle } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { contactConfig } from "@/lib/config";
import { useActionState } from "react";
import { submitContactForm } from "@/app/actions/contact";
import { useTranslations } from "next-intl";

const initialState = {
  success: false,
  message: "",
  errors: {},
};

export default function Contact() {
  const [state, action, isPending] = useActionState(submitContactForm, initialState);
  const t = useTranslations("Contact");

  return (
    <section className="border-t border-border-color bg-background-dark py-24" id="contact">
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
          <div>
            <div className="mb-6 flex items-center gap-4">
              <div className="flex size-12 items-center justify-center rounded-full bg-purple-500/10 text-purple-400">
                <span className="text-2xl">👋</span>
              </div>
              <h2 className="text-3xl font-bold text-white md:text-4xl">{t("title")}</h2>
            </div>
            <p className="mb-8 text-lg text-slate-400">
              {t("description")}
            </p>
            <div className="space-y-6">
              <div className="flex gap-4 rounded-xl border border-border-color bg-surface-card p-5">
                <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-background-dark text-white border border-border-color">
                  <Zap className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-bold text-white">{t("fastTurnaround.title")}</h3>
                  <p className="text-sm text-slate-500">{t("fastTurnaround.description")}</p>
                </div>
              </div>
              <div className="flex gap-4 rounded-xl border border-border-color bg-surface-card p-5">
                <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-background-dark text-white border border-border-color">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-bold text-white">{t("qualityGuarantee.title")}</h3>
                  <p className="text-sm text-slate-500">{t("qualityGuarantee.description")}</p>
                </div>
              </div>
            </div>
            <div className="mt-12" id="location">
              <p className="mb-4 text-xs font-bold uppercase tracking-widest text-slate-500">{t("connectDirectly")}</p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href={`mailto:${contactConfig.email}`}
                  className="group flex items-center gap-2 rounded-lg border border-border-color bg-surface-card px-4 py-2.5 text-sm text-slate-300 transition-colors hover:border-white/20 hover:text-white"
                >
                  <Mail className="h-5 w-5" /> {t("emailMe")}
                </Link>
                <Link
                  href={contactConfig.socials.reddit}
                  target="_blank"
                  className="group flex items-center gap-2 rounded-lg border border-border-color bg-surface-card px-4 py-2.5 text-sm text-slate-300 transition-colors hover:border-white/20 hover:text-white"
                >
                  <MessageCircle className="h-5 w-5" /> Reddit
                </Link>
              </div>
            </div>
          </div>
          <div className="rounded-2xl border border-border-color bg-surface-card p-6 md:p-8">
            <form action={action} className="space-y-5">
              <div className="grid gap-5 md:grid-cols-2">
                <div className="space-y-2">
                  <label className="text-xs font-semibold uppercase text-slate-500" htmlFor="name">
                    {t("form.name")}
                  </label>
                  <input
                    className="w-full rounded-lg border border-border-color bg-background-dark px-4 py-3 text-sm text-white placeholder-slate-600 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 focus:outline-none"
                    id="name"
                    name="name"
                    placeholder={t("form.namePlaceholder")}
                    type="text"
                    required
                  />
                  {state.errors?.name && <p className="text-red-500 text-xs">{state.errors.name}</p>}
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-semibold uppercase text-slate-500" htmlFor="email">
                    {t("form.email")}
                  </label>
                  <input
                    className="w-full rounded-lg border border-border-color bg-background-dark px-4 py-3 text-sm text-white placeholder-slate-600 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 focus:outline-none"
                    id="email"
                    name="email"
                    placeholder={t("form.emailPlaceholder")}
                    type="email"
                    required
                  />
                  {state.errors?.email && <p className="text-red-500 text-xs">{state.errors.email}</p>}
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-semibold uppercase text-slate-500" htmlFor="type">
                  {t("form.projectType")}
                </label>
                <select
                  className="w-full rounded-lg border border-border-color bg-background-dark px-4 py-3 text-sm text-white focus:border-purple-500 focus:ring-1 focus:ring-purple-500 focus:outline-none"
                  id="type"
                  name="type"
                >
                  <option value="Web Development">{t("form.types.webDev")}</option>
                  <option value="UI/UX Design">{t("form.types.uiux")}</option>
                  <option value="Consultation">{t("form.types.consultation")}</option>
                  <option value="Other">{t("form.types.other")}</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-semibold uppercase text-slate-500" htmlFor="message">
                  {t("form.message")}
                </label>
                <textarea
                  className="w-full rounded-lg border border-border-color bg-background-dark px-4 py-3 text-sm text-white placeholder-slate-600 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 focus:outline-none"
                  id="message"
                  name="message"
                  placeholder={t("form.messagePlaceholder")}
                  rows={4}
                  required
                ></textarea>
                {state.errors?.message && <p className="text-red-500 text-xs">{state.errors.message}</p>}
              </div>

              <button
                className="mt-2 flex w-full items-center justify-center gap-2 rounded-lg bg-white py-3.5 font-bold text-black transition-colors hover:bg-slate-200 disabled:opacity-70 disabled:cursor-not-allowed"
                type="submit"
                disabled={isPending}
              >
                {isPending ? (
                  <>
                    <Loader2 className="h-5 w-5 animate-spin" /> {t("form.sending")}
                  </>
                ) : (
                  <>
                    <Send className="h-5 w-5" /> {t("form.send")}
                  </>
                )}
              </button>

              {state.success && (
                <div className="flex items-center gap-2 rounded-lg bg-green-500/10 p-3 text-sm text-green-500 border border-green-500/20">
                  <CheckCircle className="h-5 w-5 shrink-0" />
                  {state.message}
                </div>
              )}
              {state.success === false && state.message && (
                <div className="flex items-center gap-2 rounded-lg bg-red-500/10 p-3 text-sm text-red-500 border border-red-500/20">
                  <AlertCircle className="h-5 w-5 shrink-0" />
                  {state.message}
                </div>
              )}

              <p className="text-center text-xs text-slate-500">
                {t("form.preferUpwork")}{" "}
                <Link href={contactConfig.socials.upwork} target="_blank" className="text-purple-400 hover:underline">
                  {t("form.messageMe")}
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
