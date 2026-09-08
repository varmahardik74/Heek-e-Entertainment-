# Heek-E Entertainment

Official website for **Heek-E Entertainment**, a digital marketing and entertainment-focused website built with Next.js.

## Overview

The website provides information about Heek-E Entertainment, its services, work, testimonials, company information, and contact options.

It also includes a protected admin dashboard for managing contact submissions.

## Tech Stack

- Next.js 16
- React
- TypeScript
- Tailwind CSS
- Supabase
- Resend
- Git / GitHub

## Features

### Public Website

- Responsive marketing website
- Home page
- Services overview
- Individual service detail pages
- Case studies
- Testimonials
- About page
- Contact page

### Contact System

- Contact form with validation
- Contact submissions stored in Supabase
- Email notifications through Resend
- Submitter email available through `Reply-To`

### Admin

- Protected admin login
- Server-side admin authorization
- Admin dashboard
- Contact submission management
- Submission status updates
- Protected admin API routes

## Project Structure

```text
src/
├── app/
│   ├── about/
│   ├── admin/
│   │   ├── login/
│   │   └── page.tsx
│   ├── api/
│   │   ├── admin/
│   │   └── contact/
│   ├── case-studies/
│   ├── contact/
│   ├── services/
│   │   └── [slug]/
│   ├── testimonials/
│   ├── loading.tsx
│   ├── not-found.tsx
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
│
├── components/
│   └── shared UI components
│
├── lib/
│   ├── admin.ts
│   ├── notify.ts
│   └── Supabase helpers
│
└── proxy.ts