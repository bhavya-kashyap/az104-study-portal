window.COURSE_DATA = {
  totalDays: 60,
  studyDays: 50,
  revisionDays: 10,
  domains: [
    { id:'D1', name:'Manage Azure Identities & Governance',    color:'blue',   icon:'fa-users-cog',     weight:'20-25%' },
    { id:'D2', name:'Implement & Manage Storage',              color:'teal',   icon:'fa-database',      weight:'15-20%' },
    { id:'D3', name:'Deploy & Manage Azure Compute',           color:'purple', icon:'fa-server',        weight:'20-25%' },
    { id:'D4', name:'Implement & Manage Virtual Networking',   color:'yellow', icon:'fa-network-wired', weight:'15-20%' },
    { id:'D5', name:'Monitor & Maintain Azure Resources',      color:'green',  icon:'fa-chart-bar',     weight:'10-15%' }
  ],
  schedule: [
    {day:1,  date:'2026-04-03',dow:'Fri',type:'weekday',hours:1.5,domain:'D1',topic:'Course Orientation + Azure AD / Entra ID Fundamentals',isExam:false},
    {day:2,  date:'2026-04-04',dow:'Sat',type:'weekend',hours:3,  domain:'D1',topic:'Users, Groups & Licenses in Microsoft Entra ID',isExam:true},
    {day:3,  date:'2026-04-05',dow:'Sun',type:'weekend',hours:3,  domain:'D1',topic:'Authentication: MFA, SSPR, Conditional Access',isExam:true},
    {day:4,  date:'2026-04-06',dow:'Mon',type:'weekday',hours:1.5,domain:'D1',topic:'Azure RBAC – Roles, Scopes & Custom Roles',isExam:false},
    {day:5,  date:'2026-04-07',dow:'Tue',type:'weekday',hours:1.5,domain:'D1',topic:'Azure Policy, Initiatives & Compliance',isExam:false},
    {day:6,  date:'2026-04-08',dow:'Wed',type:'weekday',hours:1.5,domain:'D1',topic:'Resource Locks, Tags & Resource Groups',isExam:false},
    {day:7,  date:'2026-04-09',dow:'Thu',type:'weekday',hours:1.5,domain:'D1',topic:'Management Groups, Subscriptions & Cost Management',isExam:false},
    {day:8,  date:'2026-04-10',dow:'Fri',type:'weekday',hours:1.5,domain:'D1',topic:'Azure AD Connect, Hybrid Identity & PIM Intro',isExam:false},
    {day:9,  date:'2026-04-11',dow:'Sat',type:'weekend',hours:3,  domain:'D1',topic:'⚡ Week 1 Exam: Domain 1 Practice (30 Qs)',isExam:true},
    {day:10, date:'2026-04-12',dow:'Sun',type:'weekend',hours:3,  domain:'D2',topic:'Storage Accounts: SKUs, Replication & Access Tiers',isExam:true},
    {day:11, date:'2026-04-13',dow:'Mon',type:'weekday',hours:1.5,domain:'D2',topic:'Blob Storage: Containers, Properties & Lifecycle',isExam:false},
    {day:12, date:'2026-04-14',dow:'Tue',type:'weekday',hours:1.5,domain:'D2',topic:'Azure Files, File Sync & NetApp Files',isExam:false},
    {day:13, date:'2026-04-15',dow:'Wed',type:'weekday',hours:1.5,domain:'D2',topic:'SAS Tokens, Stored Access Policies & Encryption',isExam:false},
    {day:14, date:'2026-04-16',dow:'Thu',type:'weekday',hours:1.5,domain:'D2',topic:'Storage Firewalls, VNet Rules & Private Endpoints',isExam:false},
    {day:15, date:'2026-04-17',dow:'Fri',type:'weekday',hours:1.5,domain:'D2',topic:'AzCopy, Storage Explorer & Object Replication',isExam:false},
    {day:16, date:'2026-04-18',dow:'Sat',type:'weekend',hours:3,  domain:'D2',topic:'⚡ Week 2 Exam: Domain 2 Practice (30 Qs)',isExam:true},
    {day:17, date:'2026-04-19',dow:'Sun',type:'weekend',hours:3,  domain:'D3',topic:'Azure VMs: Sizing, Availability Sets & Zones',isExam:true},
    {day:18, date:'2026-04-20',dow:'Mon',type:'weekday',hours:1.5,domain:'D3',topic:'VM Disks, Snapshots, Images & Managed Disks',isExam:false},
    {day:19, date:'2026-04-21',dow:'Tue',type:'weekday',hours:1.5,domain:'D3',topic:'VM Scale Sets (VMSS), Auto-Scale & Update Domains',isExam:false},
    {day:20, date:'2026-04-22',dow:'Wed',type:'weekday',hours:1.5,domain:'D3',topic:'Azure App Service: Plans, Deployment & Scaling',isExam:false},
    {day:21, date:'2026-04-23',dow:'Thu',type:'weekday',hours:1.5,domain:'D3',topic:'App Service Slots, SSL, Auth & Networking',isExam:false},
    {day:22, date:'2026-04-24',dow:'Fri',type:'weekday',hours:1.5,domain:'D3',topic:'Azure Container Instances (ACI) & Docker Basics',isExam:false},
    {day:23, date:'2026-04-25',dow:'Sat',type:'weekend',hours:3,  domain:'D3',topic:'⚡ Week 3 Exam: AKS, Containers & Compute (30 Qs)',isExam:true},
    {day:24, date:'2026-04-26',dow:'Sun',type:'weekend',hours:3,  domain:'D3',topic:'ARM Templates, Bicep & Azure CLI/PowerShell',isExam:true},
    {day:25, date:'2026-04-27',dow:'Mon',type:'weekday',hours:1.5,domain:'D3',topic:'Azure Automation: Runbooks, Update Management',isExam:false},
    {day:26, date:'2026-04-28',dow:'Tue',type:'weekday',hours:1.5,domain:'D3',topic:'Azure Functions & Logic Apps Overview',isExam:false},
    {day:27, date:'2026-04-29',dow:'Wed',type:'weekday',hours:1.5,domain:'D3',topic:'VM Backup: Azure Backup Vault & Recovery Services',isExam:false},
    {day:28, date:'2026-04-30',dow:'Thu',type:'weekday',hours:1.5,domain:'D3',topic:'Compute Review + Practice Blitz',isExam:false},
    {day:29, date:'2026-05-01',dow:'Fri',type:'weekday',hours:1.5,domain:'D3',topic:'Compute Scenarios & Troubleshooting',isExam:false},
    {day:30, date:'2026-05-02',dow:'Sat',type:'weekend',hours:3,  domain:'D3',topic:'⚡ Week 4 Exam: Full Domain 3 (40 Qs)',isExam:true},
    {day:31, date:'2026-05-03',dow:'Sun',type:'weekend',hours:3,  domain:'D4',topic:'Azure VNets, Subnets & IP Addressing',isExam:true},
    {day:32, date:'2026-05-04',dow:'Mon',type:'weekday',hours:1.5,domain:'D4',topic:'Network Security Groups (NSGs) & ASGs',isExam:false},
    {day:33, date:'2026-05-05',dow:'Tue',type:'weekday',hours:1.5,domain:'D4',topic:'Azure Firewall, Azure Bastion & DDoS Protection',isExam:false},
    {day:34, date:'2026-05-06',dow:'Wed',type:'weekday',hours:1.5,domain:'D4',topic:'VNet Peering, Service Endpoints & Private Link',isExam:false},
    {day:35, date:'2026-05-07',dow:'Thu',type:'weekday',hours:1.5,domain:'D4',topic:'Azure DNS: Public & Private Zones',isExam:false},
    {day:36, date:'2026-05-08',dow:'Fri',type:'weekday',hours:1.5,domain:'D4',topic:'VPN Gateways: S2S, P2S, BGP',isExam:false},
    {day:37, date:'2026-05-09',dow:'Sat',type:'weekend',hours:3,  domain:'D4',topic:'⚡ Week 5 Exam: Networking Mid-Point (30 Qs)',isExam:true},
    {day:38, date:'2026-05-10',dow:'Sun',type:'weekend',hours:3,  domain:'D4',topic:'ExpressRoute & WAN Connectivity',isExam:true},
    {day:39, date:'2026-05-11',dow:'Mon',type:'weekday',hours:1.5,domain:'D4',topic:'Azure Load Balancer: Standard, Basic & Pools',isExam:false},
    {day:40, date:'2026-05-12',dow:'Tue',type:'weekday',hours:1.5,domain:'D4',topic:'Application Gateway & WAF',isExam:false},
    {day:41, date:'2026-05-13',dow:'Wed',type:'weekday',hours:1.5,domain:'D4',topic:'Traffic Manager, Front Door & CDN',isExam:false},
    {day:42, date:'2026-05-14',dow:'Thu',type:'weekday',hours:1.5,domain:'D4',topic:'Route Tables, UDRs & Network Watcher',isExam:false},
    {day:43, date:'2026-05-15',dow:'Fri',type:'weekday',hours:1.5,domain:'D4',topic:'Networking Troubleshooting & IP Flow Verify',isExam:false},
    {day:44, date:'2026-05-16',dow:'Sat',type:'weekend',hours:3,  domain:'D4',topic:'⚡ Week 6 Exam: Full Domain 4 (40 Qs)',isExam:true},
    {day:45, date:'2026-05-17',dow:'Sun',type:'weekend',hours:3,  domain:'D5',topic:'Azure Monitor: Metrics, Logs & Workbooks',isExam:true},
    {day:46, date:'2026-05-18',dow:'Mon',type:'weekday',hours:1.5,domain:'D5',topic:'Log Analytics Workspace & KQL Queries',isExam:false},
    {day:47, date:'2026-05-19',dow:'Tue',type:'weekday',hours:1.5,domain:'D5',topic:'Alerts, Action Groups & Alert Rules',isExam:false},
    {day:48, date:'2026-05-20',dow:'Wed',type:'weekday',hours:1.5,domain:'D5',topic:'Azure Backup: Policies, Vaults & Recovery',isExam:false},
    {day:49, date:'2026-05-21',dow:'Thu',type:'weekday',hours:1.5,domain:'D5',topic:'Azure Site Recovery (ASR) & Business Continuity',isExam:false},
    {day:50, date:'2026-05-22',dow:'Fri',type:'weekday',hours:1.5,domain:'D5',topic:'Diagnostic Settings, Resource Health & Advisor',isExam:false},
    {day:51, date:'2026-05-23',dow:'Sat',type:'weekend',hours:3,  domain:'D5',topic:'⚡ Week 7 Exam: Domain 5 + Mixed (50 Qs)',isExam:true},
    {day:52, date:'2026-05-24',dow:'Sun',type:'weekend',hours:3,  domain:'ALL',topic:'Full Revision: D1 + D2 – Identity, Governance, Storage',isExam:true},
    {day:53, date:'2026-05-25',dow:'Mon',type:'weekday',hours:1.5,domain:'ALL',topic:'Revision: Compute – VMs, VMSS, App Service, AKS',isExam:false},
    {day:54, date:'2026-05-26',dow:'Tue',type:'weekday',hours:1.5,domain:'ALL',topic:'Revision: Networking – VNets, NSGs, DNS, LBs',isExam:false},
    {day:55, date:'2026-05-27',dow:'Wed',type:'weekday',hours:1.5,domain:'ALL',topic:'Revision: Monitor, Backup, ARM, CLI, PowerShell',isExam:false},
    {day:56, date:'2026-05-28',dow:'Thu',type:'weekday',hours:1.5,domain:'ALL',topic:'High-Frequency Topics & Exam Traps Review',isExam:false},
    {day:57, date:'2026-05-29',dow:'Fri',type:'weekday',hours:1.5,domain:'ALL',topic:'Weak Area Deep Dive (based on your scores)',isExam:false},
    {day:58, date:'2026-05-30',dow:'Sat',type:'weekend',hours:3,  domain:'ALL',topic:'🎯 FULL MOCK EXAM 1 — 60 Questions All Domains',isExam:true},
    {day:59, date:'2026-05-31',dow:'Sun',type:'weekend',hours:3,  domain:'ALL',topic:'🎯 FULL MOCK EXAM 2 — 60 Questions All Domains',isExam:true},
    {day:60, date:'2026-06-01',dow:'Mon',type:'weekday',hours:1.5,domain:'ALL',topic:'✅ Final Review: Flash Cards, Rest Well. You Got This!',isExam:false},
  ],

  // Returns the schedule with dates computed from the user's actual start date.
  // Falls back to the hardcoded dates when startDate is not provided.
  getSchedule(startDate) {
    if (!startDate) return this.schedule;
    const start = new Date(startDate + 'T00:00:00');
    const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    return this.schedule.map(entry => {
      const d = new Date(start);
      d.setDate(start.getDate() + entry.day - 1);
      const dow  = dayNames[d.getDay()];
      const type = (d.getDay() === 0 || d.getDay() === 6) ? 'weekend' : 'weekday';
      const date = d.toISOString().split('T')[0];
      return Object.assign({}, entry, { date, dow, type });
    });
  }
};