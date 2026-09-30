export const results = [
  { value: '130,000+', text: 'stuck customer emails recovered during an outage,', ok: 'none lost' },
  { value: '3.7 min', text: 'median response to production alerts, 38% faster than the team' },
  { value: '69', text: 'production changes shipped,', ok: '88% successful' },
  { value: '0 min', text: 'downtime during major platform upgrades' },
  { value: '100%', text: 'of random error pages eliminated,', ok: 'no downtime' },
];

export const wins = [
  { title: 'Fewer outages', text: 'I find weak spots before customers do and add monitoring that warns the team early.' },
  { title: 'Faster recovery', text: "When something breaks, I find the cause, fix it, and write down what happened so it doesn't repeat." },
  { title: 'Safer changes', text: 'I automate upgrades and releases so they happen without downtime or late-night surprises.' },
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
    did: 'Took on-call, mostly outside business hours, and acknowledged 277 alerts.',
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
    text: 'On call for a platform law firms rely on: resolved incidents, shipped 69 production changes in maintenance windows, and closed 128 service requests.',
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
  { title: 'On-call', text: '93% of my recent incident work was outside local business hours.' },
  { title: 'First two weeks', text: 'Get access, then deliver a written report on your biggest reliability risks and how to fix them.' },
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
  linkedin: 'https://www.linkedin.com/in/prodev-theron/',
  github: 'https://github.com/proDev-Theron',
};
