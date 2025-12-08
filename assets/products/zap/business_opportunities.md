ZAP studio - Product Overview
---------------------------------------


#Introduction

This is a local-first application for generating scripted videos with AI. 
It allows users to create engaging video content by combining AI-generated stories, 
voiceovers, and illustrations.

The core workflow is a multi-stage pipeline:
1.  **Story Generation:** Generates a story using a configurable provider (e.g., Anthropic's Claude).
2.  **Voice Generation:** Converts the story text into audio narration (e.g., using ElevenLabs).
3.  **Image Generation:** Creates illustrations for each scene in the story (e.g., using OpenAI's DALL-E 3).
4.  **Video Assembly:** Combines the audio and images into a final video file using FFmpeg.

Each stage requires manual review and approval from the user, giving them full control over the creative process.

The user has control over the visual style, the characters included and its appearence.
The user can modify the script/story , scenes to illustrate and create the video.
The app support multiple AI content providers

# Business Opportunities & Use Cases

This document outlines potential commercial and creative applications for the "Content Factory" engine (Text → Story → Voice → Images → Video).

## 1. Educational Explainers & Tutors
**Concept:** "Explain Like I'm 5" videos for complex topics (Science, History, Math).
**Why it fits:** The narrative structure works perfectly for breaking down concepts.
**Implementation:**
- **Prompt:** "You are an expert tutor. Explain [Topic] simply..."
- **Visuals:** Minimalist vector art or diagrammatic styles.
- **Value:** High demand for educational content on YouTube/TikTok.

## 2. Guided Meditations & Affirmations
**Concept:** Relaxation videos, sleep stories, and daily affirmations.
**Why it fits:**
- **Audio:** Multi-speaker/Emotional tags (`[whispering]`, `[calm]`) create high-quality ASMR/relaxation audio.
- **Visuals:** Abstract, watercolor, or nature imagery requires less strict consistency than characters.
**Implementation:**
- **Prompt:** "Write a soothing visualization script..."
- **Audio:** Slow pace, soft voices.

## 3. Marketing Shorts / Product Teasers
**Concept:** Rapid production of 15-30s vertical videos for social media ads.
**Why it fits:** Speed and volume. Generate 10 variations of a script to test engagement.
**Implementation:**
- **Visuals:** Potential to integrate user-uploaded product images (requires pipeline update).
- **Format:** Native 9:16 support.

## 4. "Visualized" Audiobooks & Podcasts
**Concept:** Converting text-only content (blogs, book chapters, podcasts) into video.
**Why it fits:**
- **Input:** Direct text input bypasses the "Story Generation" step.
- **Audio:** Auto-tagging speakers (`[Host]`, `[Guest]`) automates the tedious part of audio production.
**Value:** Repurposing content for video-first platforms (YouTube, Instagram).

## 5. Corporate Training & Onboarding
**Concept:** Standardized videos for "Code of Conduct", "Safety", or "Company Values".
**Why it fits:**
- **Consistency:** Use a consistent "Company Mascot" character.
- **Cost:** Fraction of the cost of filming real actors or hiring animation studios.
- **Updates:** Easy to regenerate if policy changes (just edit text and regen).

## 6. Language Learning Scenarios
**Concept:** Short dialogues between two characters to teach languages.
**Why it fits:**
- **Multi-Speaker:** Perfect use of the `[Male]`/`[Female]` tags to simulate conversation.
- **Visuals:** Contextual images help learning (e.g., "At the bakery").
**Implementation:**
- **Prompt:** "Write a dialogue in Spanish between a tourist and a waiter..."

## 7. Personalized E-Cards / Greetings
**Concept:** "Happy Birthday" or "Congratulations" videos customized with names.
**Why it fits:**
- **Personalization:** The engine is built for variable input.
- **Scale:** Could be a SaaS where users type a name and get a video.
**Implementation:**
- **Template:** Fixed story structure, just swap the name variable.

## 8. News & Article Summaries
**Concept:** Turning daily news or long articles into 1-minute video summaries.
**Why it fits:**
- **Speed:** The "Local-First" speed allows for near real-time generation.
- **Visuals:** "Newsroom" or "Collage" style visuals.
**Implementation:**
- **Input:** Scrape article text -> Summarize LLM -> Video Pipeline.

## 9. Real Estate "Virtual Staging" / Neighborhood Tours
**Concept:** Story-driven tours of a neighborhood or property vibe.
**Why it fits:**
- **Story:** "Imagine living here..." narrative.
- **Visuals:** Generative architectural styles.
**Implementation:**
- **Visuals:** Would benefit heavily from "Image-to-Image" using actual property photos as a base.

## 10. Interactive "Choose Your Own Adventure" Games
**Concept:** A video game where the story pauses, and the user picks a path (Video A or Video B).
**Why it fits:**
- **Modular:** The scene-based architecture allows generating branching paths.
- **Engagement:** High interactivity.
**Implementation:**
- **Structure:** Generate multiple short clips instead of one long video. Link them via a simple UI.
