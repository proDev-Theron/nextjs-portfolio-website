export const results = [
  { value: '130,000+', text: 'stuck customer emails recovered during an outage,', ok: 'none lost' },
  { value: '3.7 min', text: "median response to production alerts, vs the team's 6.0 min" },
  { value: '0 min', text: 'downtime during major platform upgrades' },
  { value: '69', text: 'production changes, each with a change request and outcome on record,', ok: 'about 6% rolled back safely' },
  { value: '100%', text: 'of random error pages eliminated,', ok: 'no downtime' },
];

export const wins = [
  { title: 'Fewer outages', text: 'I find weak spots before customers do and add monitoring that warns the team early.' },
  { title: 'Faster recovery', text: "When something breaks, I find the cause, fix it, and write down what happened so it doesn't repeat." },
  { title: 'Safer, auditable changes', text: 'Every change gets a ticket, a window, and a way back: no downtime surprises, and the paper trail SOC 2 and ISO auditors ask for.' },
];

export const models = [
  {
    name: 'Inversion',
    meaning: 'Ask how it could fail, then prevent that.',
    applied: 'Before platform upgrades, I listed how customer traffic could drop and capped how many servers could be replaced at once.',
    result: 'Upgrades with zero downtime',
  },
  {
    name: 'First principles',
    meaning: 'Find the real cause, not the symptom.',
    applied: 'Random error pages came down to two systems with mismatched timeout settings. I fixed the root setting everywhere at once.',
    result: '100% of those errors eliminated',
  },
  {
    name: 'Second-order thinking',
    meaning: 'Ask "and then what?" before acting.',
    applied: 'Releasing 130,000 queued emails at once could overwhelm the systems receiving them, so I tuned throughput and released them in controlled batches.',
    result: 'All delivered in 90 minutes, none lost',
  },
  {
    name: 'Margin of safety',
    meaning: 'Leave room for being wrong.',
    applied: 'My AI ops tools cannot change anything without a human approving it, and upgrades only run after a health check passes.',
    result: '100+ servers upgraded with safety checks',
  },
  {
    name: 'Checklists',
    meaning: 'Make the safe path the default path.',
    applied: 'Every production change went through the same change request: plan, window, rollback, recorded outcome.',
    result: '69 changes shipped, about 6% rolled back safely',
  },
  {
    name: 'The map is not the territory',
    meaning: 'Dashboards can be wrong. Check the source.',
    applied: 'Before publishing my on-call numbers, I checked who acted on each incident against the raw logs.',
    result: 'On-call numbers checked against raw logs',
  },
];

export const testimonials = [
  {
    quote: 'I’m incredibly grateful to my mentor, Theron Bueno, for an insightful and inspiring six-month mentorship. Thank you for generously sharing your knowledge, not just on technical topics but also on essential soft skills like tailoring resumes, interview preparation, and confidence during an interview.',
    name: 'Christian Ortiz',
    role: 'Full-Stack Software Developer, mentored through ULAP.org',
  },
];

export const reviewSteps = [
  { title: 'Week 1', text: 'Access, an architecture walkthrough, and a close look at your alerts, incidents, and change process.' },
  { title: 'Week 2', text: 'A written report ranking your top reliability risks by business impact, plus fixes for the quick wins.' },
  { title: 'Price', text: 'Fixed and agreed up front. No open-ended hours.' },
  { title: 'After', text: 'Continue monthly if it was useful. Either way, you keep the report and the fixes.' },
];

export const cases = [
  {
    ref: '01 · Email outage',
    problem: "A bank's transactional email stopped, and 130,000+ messages piled up.",
    why: "Customers weren't getting OTPs and receipts.",
    did: 'Found the bottleneck and cleared the backlog in controlled batches.',
    tech: 'Postfix concurrency and worker tuning',
    result: { ok: 'Every email delivered', rest: ' in 90 min, none lost.' },
  },
  {
    ref: '02 · Error pages',
    problem: 'Customers randomly hit "gateway timeout" errors.',
    why: 'Customers saw failed requests in a banking app.',
    did: 'Traced it to two systems with mismatched timeout settings and fixed it everywhere at once.',
    tech: 'ALB and Istio idle timeout, Terraform',
    result: { ok: 'Errors eliminated', rest: ' with no downtime.' },
  },
  {
    ref: '03 · Upgrades',
    problem: 'Platform upgrades risked taking the app offline.',
    why: "Banks can't schedule customer-facing outages.",
    did: 'Built an automated, staged upgrade process.',
    tech: 'EKS, Karpenter disruption budgets, Terraform',
    result: { ok: 'Upgrades shipped', rest: ' with no downtime.' },
  },
  {
    ref: '04 · On-call',
    problem: 'Production alerts fired around the clock for a SaaS platform law firms use.',
    why: 'Every slow response is a longer outage for customers.',
    did: 'Took on-call and acknowledged 277 production alerts.',
    tech: 'Squadcast, Azure, Salesforce',
    result: { ok: '3.7 min median response', rest: ', 38% faster than the team.' },
  },
];

export const tools = [
  {
    title: 'Deployment pipeline watcher',
    text: 'Watches multi-hour deployments, sorts failures by type, and retries only the safe ones. Real data errors are never rerun automatically.',
    tech: 'Azure DevOps, AI agent tooling',
  },
  {
    title: 'Support ticket agent',
    text: "Works support cases and change requests from a link, but can't change anything without my explicit approval.",
    tech: 'Salesforce, tool-level permissions',
  },
  {
    title: 'On-call metrics report',
    text: 'Pulls incident data read-only and reports only totals, never client data.',
    tech: 'Squadcast API',
  },
];

export const roles = [
  {
    period: 'Dec 2025 – now',
    title: 'Site Reliability Engineer, Digital bank',
    text: "Keep a digital bank's apps and services online on Amazon Web Services.",
    tech: 'AWS EKS, Karpenter, Istio, Terraform, Dynatrace, AWS DevOps Agent',
  },
  {
    period: 'Dec 2024 – Dec 2025',
    title: 'Site Reliability Engineer, ING Hubs Philippines',
    text: 'Ran monitoring, disaster recovery drills, and upgrades for a global bank.',
    tech: 'Azure, RHEL, OpenShift, Elastic Stack, LGTM, Ansible',
  },
  {
    period: 'Dec 2023 – Dec 2024',
    title: 'Backend Engineer, ING Hubs Philippines',
    text: 'Built internal tools and took over a critical login service.',
    tech: 'Java, Spring Boot, Node.js, Go',
  },
  {
    period: 'Contract',
    title: 'DevOps / Support Engineer, Legal tech SaaS company',
    text: 'On call for a platform law firms rely on: resolved incidents, ran 69 production changes through change management, and handled 128 service requests.',
    tech: 'Azure, Azure DevOps, Squadcast, Salesforce',
  },
  {
    period: '2018 – 2023',
    title: 'Freelance full-stack developer',
    text: 'Built and ran websites and web apps for 30+ clients.',
  },
];

export const howIWork = [
  { title: 'Engagement', text: 'Remote contract, long-term preferred.' },
  { title: 'Hours', mono: 'UTC+8', text: ': full overlap with Australia and Asia, EU mornings, and overnight coverage for US teams.' },
  { title: 'Communication', text: 'Clear written updates, plus runbooks and post-incident reports for everything I touch.' },
];

export const stack = [
  ['Cloud and servers', 'Linux (RHEL), AWS (EKS, EC2), Azure, Kubernetes, OpenShift, Karpenter, Istio, Docker'],
  ['Automation', 'Terraform, Ansible'],
  ['Monitoring', 'Dynatrace, Elastic Stack, Loki, Grafana, Tempo, Mimir'],
  ['Release pipelines', 'GitLab CI, GitHub Actions, Azure DevOps'],
  ['Incident management', 'Squadcast, Salesforce'],
  ['Languages', 'Python, Bash, Go, Java, Node.js'],
  ['AI operations', 'AWS DevOps Agent, Claude, GitHub Copilot, Cursor'],
];

export const certifications = [
  'Microsoft Certified: Azure Developer Associate (AZ-204)',
  'Microsoft Certified: Azure Fundamentals (AZ-900)',
  'AWS Certified Cloud Practitioner',
  'Google IT Support Professional Certificate',
];

export const links = {
  email: 'mailto:prodev.theron@gmail.com',
  review: 'mailto:prodev.theron@gmail.com?subject=Reliability%20review',
  linkedin: 'https://www.linkedin.com/in/prodev-theron/',
  github: 'https://github.com/proDev-Theron',
};
