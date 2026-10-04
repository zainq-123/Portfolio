import { site } from "@/lib/data";

// GEO/AEO policy: search engines and AI *search/answer* bots may crawl everything (so the site can be
// ranked, cited and linked), while crawlers whose only job is collecting model-training data are blocked.
// Tokens verified against each vendor's crawler docs (OpenAI, Anthropic, Perplexity, Google, Apple).
const training = [
  "GPTBot", // OpenAI — model training
  "ClaudeBot", // Anthropic — model training
  "anthropic-ai", // Anthropic — legacy training token
  "Google-Extended", // Gemini training; does not affect Google Search or AI Overviews
  "Applebot-Extended", // Apple — model training
  "CCBot", // Common Crawl — public training dataset
  "Meta-ExternalAgent", // Meta — model training
  "Bytespider", // ByteDance — model training
];

const searchAndAnswers = [
  "Googlebot", // Google Search + AI Overviews
  "Bingbot", // Bing + Copilot answers
  "OAI-SearchBot", // ChatGPT search
  "ChatGPT-User", // ChatGPT fetching a page a user asked about
  "Claude-SearchBot", // Claude search
  "Claude-User", // Claude fetching a page a user asked about
  "PerplexityBot", // Perplexity search index (not used for training)
  "Perplexity-User", // Perplexity user-initiated fetches
  "Applebot", // Siri / Spotlight search
];

export default function robots() {
  return {
    rules: [
      { userAgent: training, disallow: "/" },
      { userAgent: searchAndAnswers, allow: "/" },
      { userAgent: "*", allow: "/" },
    ],
    sitemap: `${site.url}/sitemap.xml`,
    host: site.url,
  };
}
