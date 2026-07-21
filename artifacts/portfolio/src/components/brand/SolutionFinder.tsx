import { useMemo, useState } from "react";
import { Link } from "wouter";
import { ArrowRight, RotateCcw } from "lucide-react";

const questions = [
  {
    key: "stage",
    label: "What stage is your product in?",
    options: [
      "Idea",
      "Designing",
      "Building",
      "Existing product",
      "Preparing to launch",
    ],
  },
  {
    key: "product",
    label: "What are you creating?",
    options: [
      "Mobile app",
      "Website",
      "Web application",
      "Brand",
      "Complete product",
    ],
  },
  {
    key: "support",
    label: "What support do you need?",
    options: [
      "Strategy",
      "UI/UX",
      "Development",
      "Branding",
      "Launch",
      "Everything",
    ],
  },
] as const;

type Answers = {
  stage: string;
  product: string;
  support: string;
};

const initialAnswers: Answers = { stage: "", product: "", support: "" };

function getRecommendation(answers: Answers) {
  if (
    answers.support === "Everything" ||
    answers.product === "Complete product"
  ) {
    return { title: "Complete Product Partnership", href: "#complete-product" };
  }
  if (answers.product === "Brand" || answers.support === "Branding") {
    return { title: "Brand Identity and Graphic Design", href: "#branding" };
  }
  if (answers.stage === "Preparing to launch" || answers.support === "Launch") {
    return {
      title: "Product Refinement, Launch, and Growth Support",
      href: "#launch",
    };
  }
  if (answers.product === "Mobile app") {
    return {
      title: "Mobile Application Design and Development",
      href: "#mobile-applications",
    };
  }
  if (answers.product === "Website" || answers.product === "Web application") {
    return {
      title: "Website and Web Application Design and Development",
      href: "#web-products",
    };
  }
  if (answers.stage === "Idea" || answers.support === "Strategy") {
    return {
      title: "Product Strategy and Idea Development",
      href: "#product-strategy",
    };
  }
  return {
    title: "UI/UX and Product Experience Design",
    href: "#product-design",
  };
}

export default function SolutionFinder() {
  const [answers, setAnswers] = useState<Answers>(initialAnswers);
  const isComplete = Object.values(answers).every(Boolean);
  const recommendation = useMemo(() => getRecommendation(answers), [answers]);

  return (
    <div className="border border-white/15 bg-white/[0.035] p-6 md:p-10">
      <div className="space-y-10">
        {questions.map((question, questionIndex) => (
          <fieldset key={question.key}>
            <legend className="text-lg font-semibold text-white">
              <span className="mr-3 font-mono text-sm text-primary">
                0{questionIndex + 1}
              </span>
              {question.label}
            </legend>
            <div className="mt-4 flex flex-wrap gap-2">
              {question.options.map((option) => {
                const checked = answers[question.key] === option;
                return (
                  <label
                    key={option}
                    className={`inline-flex min-h-11 cursor-pointer items-center border px-4 py-2 text-sm transition-colors focus-within:ring-2 focus-within:ring-primary ${
                      checked
                        ? "border-primary bg-primary text-white"
                        : "border-white/18 text-white/70 hover:border-white/45 hover:text-white"
                    }`}
                  >
                    <input
                      type="radio"
                      name={question.key}
                      value={option}
                      checked={checked}
                      onChange={() =>
                        setAnswers((current) => ({
                          ...current,
                          [question.key]: option,
                        }))
                      }
                      className="sr-only"
                    />
                    {option}
                  </label>
                );
              })}
            </div>
          </fieldset>
        ))}
      </div>

      <div aria-live="polite" className="mt-10 border-t border-white/15 pt-8">
        {isComplete ? (
          <div className="grid items-end gap-6 md:grid-cols-[1fr_auto]">
            <div>
              <div className="font-mono text-xs tracking-[0.16em] text-[#e6b01d] uppercase">
                Recommended starting point
              </div>
              <h3 className="mt-3 text-2xl font-bold text-white md:text-3xl">
                {recommendation.title}
              </h3>
            </div>
            <a
              href={recommendation.href}
              className="inline-flex min-h-12 items-center justify-center gap-2 bg-white px-6 py-3 font-semibold text-foreground hover:bg-primary hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              View Recommendation <ArrowRight size={17} aria-hidden="true" />
            </a>
          </div>
        ) : (
          <p className="text-white/55">
            Choose one answer in each group to see a recommended solution.
          </p>
        )}
        <div className="mt-6 flex flex-wrap items-center gap-5">
          <button
            type="button"
            onClick={() => setAnswers(initialAnswers)}
            className="inline-flex min-h-11 items-center gap-2 text-sm font-medium text-white/65 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          >
            <RotateCcw size={16} aria-hidden="true" /> Reset answers
          </button>
          {isComplete && (
            <Link
              href="/contact"
              className="inline-flex min-h-11 items-center text-sm font-semibold text-primary hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              Request a custom scope
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
