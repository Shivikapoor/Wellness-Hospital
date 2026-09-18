"use client"

import type React from "react"
import { Warp } from "@paper-design/shaders-react"

interface Feature {
  title: string
  description: string
  icon: React.ReactNode
}

const features: Feature[] = [
  {
    title: "Appointment booking",
    description: "Let patients find the right time and book appointments without back-and-forth calls.",
    icon: <CalendarIcon />,
  },
  {
    title: "Doctor and patient dashboards",
    description: "Give every care journey a clear home for schedules, progress, tasks, and next steps.",
    icon: <DashboardIcon />,
  },
  {
    title: "Real-time doctor chat",
    description: "Keep conversations moving with secure messages between patients and their care teams.",
    icon: <ChatIcon />,
  },
  {
    title: "Reports within the hour",
    description: "Upload online reports and make them available for patients to download as soon as they are ready.",
    icon: <ReportIcon />,
  },
  {
    title: "Private authentication",
    description: "Protect sensitive health information with a simple, secure sign-in experience.",
    icon: <ShieldIcon />,
  },
  {
    title: "Care reminders",
    description: "Send thoughtful notifications for regular checkups, medicines, and the routines that matter.",
    icon: <BellIcon />,
  },
]

const shaderConfigs = [
  { proportion: 0.3, softness: 0.8, distortion: 0.15, swirl: 0.6, swirlIterations: 8, shape: "checks" as const, shapeScale: 0.08, colors: ["hsl(280, 100%, 30%)", "hsl(320, 100%, 60%)", "hsl(340, 90%, 40%)", "hsl(300, 100%, 70%)"] },
  { proportion: 0.4, softness: 1.2, distortion: 0.2, swirl: 0.9, swirlIterations: 12, shape: "stripes" as const, shapeScale: 0.12, colors: ["hsl(200, 100%, 25%)", "hsl(180, 100%, 65%)", "hsl(160, 90%, 35%)", "hsl(190, 100%, 75%)"] },
  { proportion: 0.35, softness: 0.9, distortion: 0.18, swirl: 0.7, swirlIterations: 10, shape: "checks" as const, shapeScale: 0.1, colors: ["hsl(120, 100%, 25%)", "hsl(140, 100%, 60%)", "hsl(100, 90%, 30%)", "hsl(130, 100%, 70%)"] },
  { proportion: 0.45, softness: 1.1, distortion: 0.22, swirl: 0.8, swirlIterations: 15, shape: "stripes" as const, shapeScale: 0.09, colors: ["hsl(30, 100%, 35%)", "hsl(50, 100%, 65%)", "hsl(40, 90%, 40%)", "hsl(45, 100%, 75%)"] },
  { proportion: 0.38, softness: 0.95, distortion: 0.16, swirl: 0.85, swirlIterations: 11, shape: "checks" as const, shapeScale: 0.11, colors: ["hsl(250, 100%, 30%)", "hsl(270, 100%, 65%)", "hsl(260, 90%, 35%)", "hsl(265, 100%, 70%)"] },
  { proportion: 0.42, softness: 1, distortion: 0.19, swirl: 0.75, swirlIterations: 9, shape: "stripes" as const, shapeScale: 0.13, colors: ["hsl(330, 100%, 30%)", "hsl(350, 100%, 60%)", "hsl(340, 90%, 35%)", "hsl(345, 100%, 75%)"] },
]

export default function FeaturesCards() {
  return (
    <section className="feature-section" id="features" aria-labelledby="features-title">
      <div className="feature-section__inner">
        <div className="feature-section__heading">
          <span className="feature-section__eyebrow">Everything in one rhythm</span>
          <h2 id="features-title">Care that keeps moving <em>with you.</em></h2>
          <p>One calm workspace for the appointments, conversations, records, and reminders that make better care possible.</p>
        </div>

        <div className="feature-grid">
          {features.map((feature, index) => {
            const shaderConfig = shaderConfigs[index]
            return (
              <article className="feature-card" key={feature.title}>
                <div className="feature-card__shader" aria-hidden="true">
                  <Warp style={{ height: "100%", width: "100%" }} {...shaderConfig} scale={1} rotation={0} speed={0.8} />
                </div>
                <div className="feature-card__content">
                  <div className="feature-card__icon">{feature.icon}</div>
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                  <span className="feature-card__link">Explore workflow <ArrowIcon /></span>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function Icon({ children }: { children: React.ReactNode }) {
  return <svg className="feature-icon" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.7" viewBox="0 0 24 24">{children}</svg>
}

function CalendarIcon() { return <Icon><rect x="3" y="4" width="18" height="17" rx="2" /><path d="M16 2v4M8 2v4M3 10h18" /></Icon> }
function DashboardIcon() { return <Icon><rect x="3" y="3" width="7" height="7" rx="1" /><rect x="14" y="3" width="7" height="7" rx="1" /><rect x="3" y="14" width="7" height="7" rx="1" /><rect x="14" y="14" width="7" height="7" rx="1" /></Icon> }
function ChatIcon() { return <Icon><path d="M20 11.5a7.5 7.5 0 0 1-8 7.5 8.6 8.6 0 0 1-3.4-.7L4 20l1.3-3.7A7.3 7.3 0 0 1 4 11.5 7.5 7.5 0 0 1 12 4a7.5 7.5 0 0 1 8 7.5Z" /><path d="M8 12h.01M12 12h.01M16 12h.01" /></Icon> }
function ReportIcon() { return <Icon><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" /><path d="M14 2v6h6M8 13h8M8 17h6" /></Icon> }
function ShieldIcon() { return <Icon><path d="M12 3 20 6v5c0 5-3.4 8.7-8 10-4.6-1.3-8-5-8-10V6l8-3Z" /><path d="m8.5 12 2.3 2.3 4.8-4.8" /></Icon> }
function BellIcon() { return <Icon><path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9ZM10 21h4" /></Icon> }
function ArrowIcon() { return <svg className="feature-arrow" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" viewBox="0 0 24 24"><path d="M5 12h13M13 6l6 6-6 6" /></svg> }