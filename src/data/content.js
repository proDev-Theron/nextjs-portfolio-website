// Every claim here must trace to verified evidence. Unverified claims stay out.

export const evidence = [
  { value: '>99%', text: 'drop in ELB 504s, from ~22/hour to ~0.06/hour, after fixing an ALB↔Envoy idle-timeout mismatch' },
  { value: '13.6M', text: 'load-balancer log lines analyzed in one latency investigation' },
  { value: '25% → 100%', text: 'peer-approved IaC merges after the controls I drove, following an incident I caused' },
  { value: '6', text: 'release defects caught by tag validation before they shipped, during a registry migration' },
  { value: '3.7 min', text: "median alert acknowledgement on contract on-call, vs the team's 6.0 min" },
];

export const principles = [
  {
    name: 'Evidence before certainty',
    model: 'The map is not the territory',
    applied: 'When console latency regressed, slow requests showed 30/60/90-second steps consistent with a 30-second per-try timeout plus retries. I ruled out deployments, routing, the database, Redis, and node-pool config, and stated the leading hypothesis as a hypothesis.',
    result: 'No production changes made on an unproven cause',
  },
  {
    name: 'Find the mechanism',
    model: 'First principles',
    applied: 'Recurring 504s traced to a load balancer and proxy disagreeing on idle timeouts, not to the applications behind them.',
    result: 'ELB 504s down >99%',
  },
  {
    name: 'Ask how it happens again',
    model: 'Inversion',
    applied: 'After my stale Terraform branch auto-applied and destroyed production network resources, I asked what would let it recur, then drove mandatory approvals and branch protection across five IaC repositories.',
    result: 'Peer-approved merges: 21 of 28 unapproved before, 13 of 13 approved after',
  },
  {
    name: 'Leave a way back',
    model: 'Margin of safety',
    applied: 'Registry cutovers verified image digests and rolled back automatically. One timeout triggered a rollback, followed by a clean retry. Database upgrades shipped with pre-checks and a snapshot rollback plan.',
    result: '23 non-production workloads cut over with automatic rollback',
  },
  {
    name: 'And then what?',
    model: 'Second-order thinking',
    applied: 'A platform decommission showed ~$22.5k/year of tagged cost. Based on how the scheduler and Karpenter place workloads, I estimated realizable compute savings at $0 instead of claiming the headline number.',
    result: 'No overstated business case',
  },
  {
    name: 'Fix the system, not the symptom',
    model: 'Feedback loops',
    applied: 'Mail relays had been kept alive by purging queues. I traced a disk-exhaustion incident to ~15M deferred-message log entries and changed how logs rotate.',
    result: 'Hourly log rotation and a written postmortem',
  },
];

export const cases = [
  {
    id: 'console-latency',
    title: 'Console latency and 504s',
    status: 'Ongoing',
    steps: [
      ['Context', 'A customer-facing console had recurring latency spikes and ELB 504s. Weekly p99 had sat around 30–59 seconds.'],
      ['Signal', '504s at ~22/hour, plus slow requests that never showed up as application errors.'],
      ['Hypotheses', 'Application slowness, database, cache, ingress, or load-balancer behavior.'],
      ['Evidence', 'Analyzed ~13.6M load-balancer log lines. Found the ALB and Envoy idle timeouts disagreed. Later rounds found Istio retry behavior and frontend resource limits adding latency.'],
      ['Decision', 'Align the timeouts first, then address retries and resource limits as separate mechanisms.'],
      ['Result', '504s fell from ~22/hour to ~0.06/hour (>99%). Weekly p99 reached ~0.5 seconds during the improved period.'],
      ['What changed', 'A regression began in late September. Slow requests are isolated to the console target groups and concentrated in one availability zone, and requests over 25 seconds rose from ~0.1% to 2–3.5%. The leading hypothesis is newer ingress node types, which is not yet proven. No production changes have been made on it.'],
    ],
  },
  {
    id: 'terraform-incident',
    title: 'A production incident I caused, and the controls that followed',
    status: 'Controls in place',
    steps: [
      ['Context', 'Network infrastructure managed in Terraform, with pipelines that apply to production.'],
      ['Signal', 'My feature branch, 13 commits behind main, was auto-applied to production and destroyed 16 network resources, including cross-account transit gateway attachments, routes, and monitoring.'],
      ['Evidence', 'A customer-facing endpoint failed completely. It was a Sev-2, detected about 55 minutes after the apply.'],
      ['Decision', 'Recover first with a teammate and a partner bank engineer, then fix the process that let a stale branch reach production.'],
      ['Result', 'I wrote the postmortem (timeline, 5 whys, corrective actions) and drove mandatory approvals and branch protection across five Terraform repositories.'],
      ['What changed', 'Peer-approved merges went from 7 of 28 before the controls to 13 of 13 after. Prevent-destroy protection is still incomplete.'],
    ],
  },
  {
    id: 'ecr-migration',
    title: 'Container registry migration',
    status: 'Production cutover in progress',
    steps: [
      ['Context', 'Release publishing for 8 services moving to a centralized AWS ECR.'],
      ['Signal', 'Registry moves can silently ship the wrong image or break releases.'],
      ['Evidence', 'Tag-validation tests caught 6 CI and release defects before release, across ~35 merged changes.'],
      ['Decision', 'Cut over with image-digest verification and automatic rollback.'],
      ['Result', '23 non-production workloads cut over. One timeout triggered a rollback, then a clean retry. Production workloads are verified pulling from ECR.'],
      ['What changed', 'Production cutover is not yet confirmed complete.'],
    ],
  },
  {
    id: 'mysql-upgrade',
    title: 'MySQL 8.0 to 8.4',
    status: 'Complete',
    steps: [
      ['Context', 'Test, staging, and production databases on MySQL 8.0.'],
      ['Decision', 'Major-version upgrade through Terraform during a planned maintenance window.'],
      ['Evidence', 'I wrote the pre-checks, the staging and production runbooks, and a snapshot rollback plan.'],
      ['Result', 'All three environments run MySQL 8.4.'],
    ],
  },
  {
    id: 'smtp',
    title: 'Mail relay reliability',
    status: 'Complete',
    steps: [
      ['Context', 'A mail relay fleet handling ~1.2M requests/day.'],
      ['Signal', 'A bounce spike, a disk-exhaustion incident, and LDAP/TLS failures against hardened directory servers.'],
      ['Evidence', 'Traced the Spamhaus-related bounce spike to stale queued messages, and the 22 GB disk exhaustion to ~15M deferred-message log entries. Investigated the TLS failures between hardened Active Directory and older relay OpenSSL versions.'],
      ['Decision', 'Stop relying on queue purges. Fix rotation, and roll out DKIM/SPF-signed relays gradually with weighted DNS.'],
      ['Result', 'Hourly log rotation, signed relays in service, and a postmortem for the disk incident.'],
    ],
  },
  {
    id: 'networking',
    title: 'Cross-account AWS networking',
    status: 'Ongoing',
    steps: [
      ['Context', 'Services and partners connected across AWS accounts.'],
      ['Evidence', '24 merged Terraform networking changes and ~12 connectivity requests across transit gateways, routes, NLBs, and security groups.'],
      ['Result', 'Documented when to use a transit gateway versus peering, and the routing and security-group rules for each.'],
    ],
  },
];

export const tooling = [
  {
    title: 'Read-only incident checker',
    text: 'Checks the health of an OTP/SMS pipeline across about five systems without changing anything. Separately, I found that send-rate degradation comes before backlog growth: OTP delivery slows 2.5–4.1× before a backlog forms.',
    tech: 'Notification platform, ~6.9M messages/day (shared)',
  },
  {
    title: 'Deployment pipeline watcher',
    text: 'Classifies failed stages of multi-hour pipelines as timeout, transient, data-validation, or fatal, and retries only the safe classes. Migration errors are never rerun.',
    tech: 'Azure DevOps',
  },
  {
    title: 'Ticketing agent with approval gates',
    text: 'Works cases and change requests from a link. Every write needs explicit human approval, enforced by tool permissions rather than instructions.',
    tech: 'Salesforce',
  },
];

export const feedback = [
  {
    text: 'A teammate publicly recognized that I pair technical analysis with a recommended next step when communicating issues to customers. They noted it was well received and proposed making it a team standard for L1/L2 uptraining.',
    source: 'Peer recognition, current role',
  },
  {
    text: 'An internal recognition for the mail relays noted that the team had relied on band-aids like queue purging, and that I investigated and fixed the underlying issue.',
    source: 'Achiever recognition, current role',
  },
  {
    text: 'Recognized for solving problems with little context in a short amount of time.',
    source: 'Quick Thinker recognition, current role',
  },
];

export const mentorQuote = {
  quote: 'I’m incredibly grateful to my mentor, Theron Bueno, for an insightful and inspiring six-month mentorship. Thank you for generously sharing your knowledge, not just on technical topics but also on essential soft skills like tailoring resumes, interview preparation, and confidence during an interview.',
  name: 'Christian Ortiz',
  role: 'Full-Stack Software Developer, mentored through ULAP.org',
};

export const roles = [
  {
    period: 'Dec 2025 – now',
    title: 'Site Reliability Engineer, Digital bank',
    text: 'AWS, EKS, Terraform, and networking for a shared platform serving hundreds of millions of load-balancer requests a day.',
    bullets: [
      'Investigated recurring console latency across several failure modes. Cut ELB 504s from ~22/hour to ~0.06/hour (>99%), and am still investigating a September regression.',
      'Triggered a Sev-2 when a stale Terraform branch auto-applied and destroyed 16 network resources. Wrote the postmortem and drove approvals and branch protection across 5 IaC repos (peer-approved merges 25% → 100%).',
      'Upgraded four EKS clusters from 1.32 to 1.34, ran the production upgrade, and wrote the team runbook.',
      'Upgraded MySQL 8.0 to 8.4 in test, staging, and production, with pre-checks, runbooks, and a snapshot rollback plan.',
      'Migrated release publishing for 8 services to ECR. Caught 6 release defects before release and cut over 23 non-production workloads with digest checks and automatic rollback.',
      'Mitigated Redis memory exhaustion (peak utilization ~37% → ~14–19%) and found unbounded no-TTL key growth. Enabled database storage autoscaling when free space fell below 10 GB.',
      'Fixed autoscaler flapping on two services by aligning CPU targets with requests and adding scale-down stabilization.',
    ],
    tech: 'AWS, EKS, Karpenter, Istio/Envoy, Terraform, ECR, RDS MySQL, ElastiCache Redis, Transit Gateway, Dynatrace, Postfix',
  },
  {
    period: 'Contract',
    title: 'DevOps / Support Engineer, Legal tech SaaS company',
    text: 'On-call and change management for an Azure-hosted platform used by law firms.',
    bullets: [
      "Acknowledged 277 production alerts with a 3.7-minute median, vs the team's 6.0.",
      'Ran 69 production changes (38 deployments, 9 emergency) through change requests; about 6% rolled back.',
      'Handled 128 cloud service requests: access, decommissions, and database refreshes.',
    ],
    tech: 'Azure, Azure DevOps, Squadcast, Salesforce',
  },
  {
    period: 'Dec 2024 – Dec 2025',
    title: 'Site Reliability Engineer, ING Hubs Philippines',
    text: 'Observability and Linux platform operations for bank systems.',
    tech: 'Azure, RHEL, OpenShift, Elastic Stack, LGTM, Ansible',
  },
  {
    period: 'Dec 2023 – Dec 2024',
    title: 'Backend Engineer, ING Hubs Philippines',
    text: 'Internal platform tooling and ownership of an authentication service.',
    tech: 'Java, Spring Boot, Node.js, Go',
  },
  {
    period: '2018 – 2023',
    title: 'Freelance full-stack developer',
    text: 'Built and ran web applications for 30+ clients.',
    tech: 'React, Next.js, Node.js, Nuxt, WordPress',
  },
];

export const writing = [
  'Two production postmortems, including one for an incident I caused',
  'The team RCA template',
  'EKS upgrade and MySQL upgrade runbooks',
  'A progressive-delivery guide for Flagger',
  'Critical user journey documentation',
  'DKIM rollout documentation',
];

export const capabilities = [
  ['Cloud and Kubernetes', 'AWS (EKS, EC2, ECR, RDS, ElastiCache), Azure, Kubernetes, Karpenter, OpenShift, Linux'],
  ['Infrastructure as code', 'Terraform, Ansible'],
  ['Networking', 'Transit Gateway, VPC peering, ALB/NLB, security groups, Istio/Envoy'],
  ['Observability', 'Dynatrace, Elastic Stack, Loki, Grafana, Tempo, Mimir'],
  ['Data and messaging', 'MySQL, Redis, Postfix/SMTP'],
  ['Delivery', 'GitLab CI, GitHub Actions, Azure DevOps, Flagger'],
  ['Languages', 'Python, Bash, Go, Java, Node.js'],
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
