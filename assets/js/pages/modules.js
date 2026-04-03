Router.register('modules', () => {
  const colorMap = { blue:'#0078d4', teal:'#00b294', purple:'#8764b8', yellow:'#ffaa44', green:'#107c10' };
  const domainHtml = COURSE_DATA.domains.map(d => {
    const col = colorMap[d.color] || '#0078d4';
    return `
    <div class="card mb-6">
      <div class="card-title" style="font-size:18px">
        <i class="fas ${d.icon}" style="color:${col}"></i>
        ${d.name}
        <span class="badge badge-${d.color}" style="margin-left:auto">${d.weight}</span>
      </div>
      <div id="module-content-${d.id}">
        ${renderModuleSections(d.id, col)}
      </div>
    </div>`;
  }).join('');

  return `<div class="fade-in">
    <div class="page-header">
      <div class="page-title"><i class="fas fa-book-open blue"></i> Course Modules</div>
      <div class="page-subtitle">Complete study material for all 5 AZ-104 exam domains</div>
    </div>
    <div class="alert alert-success"><i class="fas fa-lightbulb"></i>
      <span>Each section contains concise notes, key concepts, and <strong>exam-focused tips</strong>.
      Read a section, then take the daily quiz to reinforce your knowledge.</span>
    </div>
    ${renderCloudShellModule()}
    ${domainHtml}
  </div>`;
});

function renderCloudShellModule() {
  const units = [
    { day: 1, title: 'Unit 1 — Introduction',          icon: 'fa-play-circle',    desc: 'Module overview, learning objectives, and why Cloud Shell matters for AZ-104.' },
    { day: 2, title: 'Unit 2 — What is Azure Cloud Shell?', icon: 'fa-terminal',  desc: 'Core definition, Bash vs PowerShell, access points, persistent storage, and pre-installed tools.' },
    { day: 3, title: 'Unit 3 — How Azure Cloud Shell Works', icon: 'fa-cogs',     desc: 'Architecture, authentication flow, storage setup (first launch), Monaco editor, Azure: drive, file transfers.' },
    { day: 4, title: 'Unit 4 — When to Use Azure Cloud Shell', icon: 'fa-question-circle', desc: 'Decision framework, use-case scenarios, limitations, and comparison with local CLI.' },
    { day: 5, title: 'Unit 5 — Knowledge Check',        icon: 'fa-check-square', desc: 'Official knowledge check questions plus additional AZ-104 practice questions with answer explanations.' },
    { day: 6, title: 'Unit 6 — Summary',               icon: 'fa-flag-checkered', desc: 'Complete module recap, key concept reference table, decision guide, and next steps.' }
  ];

  const unitRows = units.map(u => {
    const hasContent = window.STUDY_LESSONS && window.STUDY_LESSONS[u.day];
    return `
    <div style="border:1px solid var(--border);border-radius:var(--radius-sm);overflow:hidden;margin-bottom:12px">
      <div style="padding:14px 18px;background:var(--bg-input);display:flex;align-items:center;justify-content:space-between;gap:12px;flex-wrap:wrap">
        <div style="display:flex;align-items:center;gap:12px;flex:1;min-width:0">
          <div style="width:36px;height:36px;border-radius:50%;background:#0078d4;display:flex;align-items:center;justify-content:center;flex-shrink:0">
            <i class="fas ${u.icon}" style="color:#fff;font-size:14px"></i>
          </div>
          <div style="min-width:0">
            <div style="font-weight:600;font-size:14px">${u.title}</div>
            <div style="font-size:12px;color:var(--text-muted);margin-top:2px">${u.desc}</div>
          </div>
        </div>
        <div style="display:flex;gap:8px;align-items:center;flex-shrink:0">
          <span class="badge badge-blue" style="font-size:11px">Day ${u.day}</span>
          ${hasContent
            ? `<button class="btn btn-primary btn-sm" onclick="window._studyDay=${u.day};Router.navigate('study')">
                <i class="fas fa-book-open"></i> Study</button>`
            : `<span style="font-size:12px;color:var(--text-muted)">Loading...</span>`}
        </div>
      </div>
    </div>`;
  }).join('');

  return `
  <div class="card mb-6">
    <div class="card-title" style="font-size:18px">
      <i class="fas fa-terminal" style="color:#0078d4"></i>
      Prerequisite: Introduction to Azure Cloud Shell
      <span class="badge badge-blue" style="margin-left:auto">6 Units</span>
    </div>
    <p style="font-size:14px;color:var(--text-secondary);margin:0 0 16px">
      The official Microsoft Learn prerequisite module for AZ-104. Complete all 6 units to master Azure Cloud Shell —
      your primary tool for managing Azure resources throughout the exam preparation journey.
    </p>
    <div style="margin-bottom:16px;padding:12px 16px;background:var(--bg-input);border-radius:6px;border-left:4px solid #0078d4;font-size:13px">
      <i class="fas fa-external-link-alt" style="color:#0078d4;margin-right:6px"></i>
      <strong>Official module:</strong>
      <a href="https://learn.microsoft.com/en-us/training/modules/intro-to-azure-cloud-shell/" target="_blank" rel="noopener" style="margin-left:4px">
        learn.microsoft.com — Introduction to Azure Cloud Shell
      </a>
    </div>
    ${unitRows}
  </div>`;
}


function renderModuleSections(domainId, col) {
  const content = {
    D1: [
      { title:'Microsoft Entra ID Fundamentals', content: `<p>Microsoft Entra ID (formerly Azure AD) is Microsoft's cloud-based identity and access management service. It handles authentication and authorization for Azure, Microsoft 365, and thousands of SaaS apps.</p>
        <h4 style="margin:14px 0 8px;color:var(--azure-blue)">Entra ID Editions</h4>
        <table style="width:100%;font-size:13px;border-collapse:collapse">
          <tr style="background:var(--bg-input)"><th style="padding:8px;text-align:left">Edition</th><th style="padding:8px;text-align:left">Key Features</th></tr>
          <tr><td style="padding:8px;border-bottom:1px solid var(--border)">Free</td><td style="padding:8px;border-bottom:1px solid var(--border)">User/group mgmt, SSO for 10 apps, MFA</td></tr>
          <tr><td style="padding:8px;border-bottom:1px solid var(--border)">P1</td><td style="padding:8px;border-bottom:1px solid var(--border)">Conditional Access, SSPR, Hybrid Identity, Dynamic Groups, Group-based Licensing</td></tr>
          <tr><td style="padding:8px">P2</td><td style="padding:8px">PIM, Identity Protection, Access Reviews</td></tr>
        </table>
        <div class="alert alert-warning mt-4"><i class="fas fa-star"></i><span><strong>🎯 Exam Tips:</strong> PIM = P2. Conditional Access = P1. Entra ID ≠ on-prem AD (cloud-native, no LDAP/Kerberos). Guest users = B2B. External customers = B2C.</span></div>` },
      { title:'Users, Groups & Licenses', content: `<p><strong>User types:</strong> Member users (internal), Guest users (B2B invited), Service principals (app identities).</p>
        <p style="margin-top:10px"><strong>Group types:</strong></p>
        <ul style="margin:8px 0 8px 20px;line-height:2">
          <li><strong>Security groups</strong> — RBAC & app access control</li>
          <li><strong>Microsoft 365 groups</strong> — Teams, SharePoint collaboration</li>
          <li><strong>Dynamic groups</strong> — Auto-membership via attribute rules (requires P1)</li>
        </ul>
        <div class="alert alert-warning mt-4"><i class="fas fa-star"></i><span><strong>🎯 Exam Tips:</strong> Dynamic groups require P1/P2. Bulk operations via CSV. UPN must be unique per tenant. Group-based licensing requires P1.</span></div>` },
      { title:'Azure RBAC — Roles, Scopes & Custom Roles', content: `<p>RBAC controls who can do what on Azure resources. It is separate from Entra ID directory roles.</p>
        <h4 style="margin:14px 0 8px;color:var(--azure-blue)">Key Built-in Roles</h4>
        <ul style="margin:0 0 12px 20px;line-height:2;font-size:14px">
          <li><strong>Owner</strong> — Full access + manage access</li>
          <li><strong>Contributor</strong> — Full resource access, cannot manage access</li>
          <li><strong>Reader</strong> — View only, no changes</li>
          <li><strong>User Access Administrator</strong> — Manage access only, no resource changes</li>
        </ul>
        <p><strong>Scope hierarchy:</strong> Management Group �� Subscription → Resource Group → Resource</p>
        <div class="alert alert-warning mt-4"><i class="fas fa-star"></i><span><strong>🎯 Exam Tips:</strong> RBAC is additive. Deny Assignments override role assignments. Custom roles limit = 5,000/tenant. Assignments flow downward (child inherits parent).</span></div>` },
      { title:'Azure Policy & Initiatives', content: `<p>Azure Policy enforces organizational standards and evaluates compliance across your Azure environment.</p>
        <h4 style="margin:14px 0 8px;color:var(--azure-blue)">Policy Effects (in evaluation order)</h4>
        <ol style="margin:0 0 12px 20px;line-height:2;font-size:14px">
          <li><strong>Disabled</strong> — Not evaluated</li>
          <li><strong>Append</strong> — Adds fields to resource request</li>
          <li><strong>Audit</strong> — Logs non-compliance, doesn't block</li>
          <li><strong>AuditIfNotExists</strong> — Audits if related resource is missing</li>
          <li><strong>Deny</strong> — Blocks non-compliant resource creation/modification</li>
          <li><strong>DeployIfNotExists</strong> — Deploys related resource if missing</li>
          <li><strong>Modify</strong> — Add/update/remove tags or properties</li>
        </ol>
        <div class="alert alert-warning mt-4"><i class="fas fa-star"></i><span><strong>🎯 Exam Tips:</strong> DeployIfNotExists & Modify require a Managed Identity. Remediation tasks fix existing non-compliant resources. Initiatives = grouped policies assigned together.</span></div>` },
      { title:'Resource Locks, Tags & Management Groups', content: `<p><strong>Resource Locks:</strong> Prevent accidental changes or deletion.</p>
        <ul style="margin:8px 0 12px 20px;line-height:2">
          <li><strong>CanNotDelete</strong> — Read & modify allowed; delete blocked</li>
          <li><strong>ReadOnly</strong> — Only reads allowed; no modifications or deletes</li>
        </ul>
        <p><strong>Tags:</strong> Key-value metadata for organization, cost tracking, and automation. Not inherited by child resources by default (use Policy to enforce).</p>
        <p style="margin-top:10px"><strong>Management Groups:</strong> Organize subscriptions into a hierarchy. Apply RBAC and Policy at scale. Up to 6 levels deep (root + 5). Each subscription belongs to exactly one management group.</p>
        <div class="alert alert-warning mt-4"><i class="fas fa-star"></i><span><strong>🎯 Exam Tips:</strong> Locks apply to ALL child resources. ReadOnly on a storage account blocks listing keys (write action). Tags are NOT inherited without Policy enforcement.</span></div>` },
      { title:'Hybrid Identity & Azure AD Connect / PIM', content: `<p><strong>Azure AD Connect (Entra ID Connect):</strong> Syncs on-prem AD identities to Entra ID.</p>
        <ul style="margin:8px 0 12px 20px;line-height:2">
          <li><strong>Password Hash Sync (PHS)</strong> — Hash of hash synced to cloud (simplest, recommended)</li>
          <li><strong>Pass-through Authentication (PTA)</strong> — Auth happens on-prem, no hash stored in cloud</li>
          <li><strong>Federation (ADFS)</strong> — Auth fully delegated to on-prem ADFS</li>
        </ul>
        <p><strong>PIM (Privileged Identity Management):</strong> Just-in-time privileged access. Requires P2. Features: eligible roles, time-bound access, approval workflows, access reviews, audit logs.</p>
        <div class="alert alert-warning mt-4"><i class="fas fa-star"></i><span><strong>🎯 Exam Tips:</strong> PHS is most resilient (works if on-prem is down). PTA requires on-prem connectivity. Seamless SSO works with PHS and PTA. PIM = P2 only.</span></div>` },
    ],
    D2: [
      { title:'Storage Account Types & Redundancy', content: `<h4 style="margin:0 0 10px;color:var(--azure-blue)">Redundancy Options</h4>
        <table style="width:100%;font-size:13px;border-collapse:collapse">
          <tr style="background:var(--bg-input)"><th style="padding:8px;text-align:left">Type</th><th style="padding:8px;text-align:left">Copies</th><th style="padding:8px;text-align:left">Protection</th></tr>
          <tr><td style="padding:8px;border-bottom:1px solid var(--border)">LRS</td><td style="padding:8px;border-bottom:1px solid var(--border)">3 — same datacenter</td><td style="padding:8px;border-bottom:1px solid var(--border)">Hardware failure only</td></tr>
          <tr><td style="padding:8px;border-bottom:1px solid var(--border)">ZRS</td><td style="padding:8px;border-bottom:1px solid var(--border)">3 — across 3 AZs</td><td style="padding:8px;border-bottom:1px solid var(--border)">Zone failure</td></tr>
          <tr><td style="padding:8px;border-bottom:1px solid var(--border)">GRS</td><td style="padding:8px;border-bottom:1px solid var(--border)">6 — LRS + paired region LRS</td><td style="padding:8px;border-bottom:1px solid var(--border)">Regional failure</td></tr>
          <tr><td style="padding:8px">RA-GZRS</td><td style="padding:8px">6 — ZRS + paired region LRS</td><td style="padding:8px">Zone + regional + read access</td></tr>
        </table>
        <h4 style="margin:14px 0 8px;color:var(--azure-blue)">Blob Access Tiers</h4>
        <ul style="margin:0 0 12px 20px;line-height:2;font-size:14px">
          <li><strong>Hot</strong> — Frequent access. Low access cost, high storage cost</li>
          <li><strong>Cool</strong> — 30-day minimum. Low storage cost, higher access cost</li>
          <li><strong>Cold</strong> — 90-day minimum. Even lower storage cost</li>
          <li><strong>Archive</strong> — 180-day minimum. Offline — must rehydrate to read</li>
        </ul>
        <div class="alert alert-warning mt-4"><i class="fas fa-star"></i><span><strong>🎯 Exam Tips:</strong> Archive = offline (rehydration takes up to 15h standard, 1h priority). LRS cannot survive datacenter loss. RA-GRS/RA-GZRS = read access to secondary. Only GPv2 supports all tiers.</span></div>` },
      { title:'Blob Storage, Azure Files & SAS Tokens', content: `<p><strong>Blob types:</strong> Block Blobs (files, videos — most common), Append Blobs (logging), Page Blobs (VM disks, random read/write).</p>
        <p style="margin-top:10px"><strong>Azure Files:</strong> Fully managed SMB/NFS file shares. Mountable on Windows, Linux, macOS. Use Azure File Sync to sync on-prem file servers.</p>
        <h4 style="margin:14px 0 8px;color:var(--azure-blue)">SAS Token Types</h4>
        <ul style="margin:0 0 12px 20px;line-height:2;font-size:14px">
          <li><strong>User Delegation SAS</strong> — Secured by Entra ID (most secure ✅)</li>
          <li><strong>Service SAS</strong> — Scoped to one storage service</li>
          <li><strong>Account SAS</strong> — Scoped to one or more services</li>
        </ul>
        <div class="alert alert-warning mt-4"><i class="fas fa-star"></i><span><strong>🎯 Exam Tips:</strong> Always prefer User Delegation SAS. Stored Access Policies let you revoke SAS without regenerating account keys. AzCopy = CLI for high-speed transfers. Storage Explorer = GUI.</span></div>` },
      { title:'Lifecycle Management, Encryption & Immutability', content: `<p><strong>Lifecycle Management:</strong> JSON-based rules that automatically transition blobs between tiers or delete them based on age or last access time.</p>
        <p style="margin-top:10px"><strong>Encryption:</strong></p>
        <ul style="margin:8px 0 12px 20px;line-height:2;font-size:14px">
          <li><strong>Encryption at rest</strong> — Always on (AES-256, cannot be disabled)</li>
          <li><strong>Customer-managed keys (CMK)</strong> — Store keys in Azure Key Vault for compliance</li>
          <li><strong>Encryption in transit</strong> — HTTPS enforced; enable "Secure transfer required"</li>
        </ul>
        <p><strong>Immutable Storage (WORM):</strong> Time-based retention policy or legal hold. Cannot be deleted or modified during retention period. Required for compliance (SEC, FINRA).</p>
        <div class="alert alert-warning mt-4"><i class="fas fa-star"></i><span><strong>🎯 Exam Tips:</strong> "Secure transfer required" = HTTPS only (blocks HTTP). CMK requires Azure Key Vault + Managed Identity. WORM policies can be locked (irreversible) for compliance.</span></div>` },
    ],
    D3: [
      { title:'Azure Virtual Machines Deep Dive', content: `<h4 style="margin:0 0 10px;color:var(--azure-blue)">VM Availability Options</h4>
        <table style="width:100%;font-size:13px;border-collapse:collapse">
          <tr style="background:var(--bg-input)"><th style="padding:8px;text-align:left">Option</th><th style="padding:8px;text-align:left">Protection</th><th style="padding:8px;text-align:left">SLA</th></tr>
          <tr><td style="padding:8px;border-bottom:1px solid var(--border)">No redundancy</td><td style="padding:8px;border-bottom:1px solid var(--border)">None</td><td style="padding:8px;border-bottom:1px solid var(--border)">99.9% (Premium SSD)</td></tr>
          <tr><td style="padding:8px;border-bottom:1px solid var(--border)">Availability Set</td><td style="padding:8px;border-bottom:1px solid var(--border)">Rack/update domain failures</td><td style="padding:8px;border-bottom:1px solid var(--border)">99.95%</td></tr>
          <tr><td style="padding:8px;border-bottom:1px solid var(--border)">Availability Zones</td><td style="padding:8px;border-bottom:1px solid var(--border)">Datacenter failures</td><td style="padding:8px;border-bottom:1px solid var(--border)">99.99%</td></tr>
          <tr><td style="padding:8px">VMSS + Zones</td><td style="padding:8px">Zone failures + auto-scale</td><td style="padding:8px">99.99%</td></tr>
        </table>
        <div class="alert alert-warning mt-4"><i class="fas fa-star"></i><span><strong>🎯 Exam Tips:</strong> Availability Set ≠ zone-redundant. Resize within same family = no downtime. Cross-family resize = deallocate required. Managed disks: LRS or ZRS based on availability config.</span></div>` },
      { title:'App Service, AKS & Containers', content: `<h4 style="margin:0 0 10px;color:var(--azure-blue)">App Service Plans</h4>
        <ul style="margin:0 0 12px 20px;line-height:2;font-size:14px">
          <li><strong>Free/Shared</strong> — Shared infrastructure, no SLA, no custom domain SSL</li>
          <li><strong>Basic</strong> — Dedicated VMs, manual scale, custom domains</li>
          <li><strong>Standard</strong> — Auto-scale, deployment slots (5), custom domains + SSL</li>
          <li><strong>Premium</strong> — Higher scale, VNet integration, more slots (20)</li>
          <li><strong>Isolated</strong> — Dedicated environment (ASE), VNet injection</li>
        </ul>
        <p><strong>ACI:</strong> Serverless containers — no cluster management. Best for short tasks, burst workloads.</p>
        <p style="margin-top:8px"><strong>AKS:</strong> Managed Kubernetes. Node pools, auto-scale (cluster + HPA), integrated with Entra ID, ACR, Monitor.</p>
        <div class="alert alert-warning mt-4"><i class="fas fa-star"></i><span><strong>🎯 Exam Tips:</strong> Deployment slots = zero-downtime swap. Auto-scale = Standard+. ACI = fastest container start, no orchestration. AKS = orchestration needed. VNet integration = Standard+.</span></div>` },
      { title:'ARM Templates, Bicep & Automation', content: `<h4 style="margin:0 0 10px;color:var(--azure-blue)">ARM Template Structure</h4>
        <pre style="background:var(--bg-input);padding:14px;border-radius:6px;font-family:'Fira Code',monospace;font-size:12px;overflow-x:auto">{
  "$schema": "https://schema.management.azure.com/schemas/2019-04-01/deploymentTemplate.json#",
  "contentVersion": "1.0.0.0",
  "parameters": {},
  "variables": {},
  "resources": [],
  "outputs": {}
}</pre>
        <p style="margin-top:12px"><strong>Deployment modes:</strong></p>
        <ul style="margin:8px 0 12px 20px;line-height:2;font-size:14px">
          <li><strong>Incremental (default)</strong> — Adds/updates resources; leaves existing untouched</li>
          <li><strong>Complete</strong> — Deletes resources NOT in template ⚠️</li>
        </ul>
        <p><strong>Bicep:</strong> Simpler DSL that compiles to ARM JSON. Use <code>bicep build</code> to convert. First-class VS Code support.</p>
        <div class="alert alert-warning mt-4"><i class="fas fa-star"></i><span><strong>🎯 Exam Tips:</strong> What-if = preview changes before deploy. dependsOn = explicit ordering. Template Specs = versioned, shared templates. Complete mode is dangerous — use with caution!</span></div>` },
    ],
    D4: [
      { title:'VNets, Subnets, Peering & DNS', content: `<p><strong>Azure VNet:</strong> Logically isolated network in Azure. Scoped to a region. Contains one or more subnets.</p>
        <p style="margin-top:10px"><strong>Azure reserves 5 IPs per subnet:</strong> .0 (network), .1 (gateway), .2 & .3 (DNS), .255 (broadcast)</p>
        <p style="margin-top:10px"><strong>VNet Peering:</strong> Connects two VNets (same or different regions). Non-transitive by default. Low latency, Microsoft backbone.</p>
        <p style="margin-top:10px"><strong>Azure Private DNS Zones:</strong> Custom DNS names that resolve within VNets. Link VNets to the zone. Supports auto-registration of VM DNS records.</p>
        <div class="alert alert-warning mt-4"><i class="fas fa-star"></i><span><strong>🎯 Exam Tips:</strong> Peering requires two peering objects (one each direction). Address spaces cannot overlap in peered VNets. For transitive routing use hub-spoke + Azure Firewall or NVA. Global peering = cross-region.</span></div>` },
      { title:'NSGs, Azure Firewall & Bastion', content: `<p><strong>NSG Rule Priority:</strong> 100–4096. Lower number = higher priority. Last rules: DenyAllInbound (65500), DenyAllOutbound (65500).</p>
        <p style="margin-top:10px"><strong>Application Security Groups (ASGs):</strong> Group VMs by role (e.g., "WebServers") and reference in NSG rules instead of IPs.</p>
        <p style="margin-top:10px"><strong>Azure Firewall:</strong> Fully stateful, managed firewall. L4+L7 rules. FQDN filtering. Threat intelligence. Centralized in hub VNet.</p>
        <p style="margin-top:10px"><strong>Azure Bastion:</strong> Browser-based RDP/SSH to VMs via Azure portal. No public IP on VMs needed. Deployed in dedicated AzureBastionSubnet (/26 minimum).</p>
        <div class="alert alert-warning mt-4"><i class="fas fa-star"></i><span><strong>🎯 Exam Tips:</strong> NSG applied at both subnet AND NIC = both evaluated (most restrictive applies). Azure Bastion subnet must be named "AzureBastionSubnet" exactly. Firewall = paid; NSG = free.</span></div>` },
      { title:'Load Balancing, VPN & ExpressRoute', content: `<h4 style="margin:0 0 10px;color:var(--azure-blue)">Load Balancing Services</h4>
        <table style="width:100%;font-size:13px;border-collapse:collapse">
          <tr style="background:var(--bg-input)"><th style="padding:8px;text-align:left">Service</th><th style="padding:8px;text-align:left">Layer</th><th style="padding:8px;text-align:left">Use Case</th></tr>
          <tr><td style="padding:8px;border-bottom:1px solid var(--border)">Azure Load Balancer</td><td style="padding:8px;border-bottom:1px solid var(--border)">L4 (TCP/UDP)</td><td style="padding:8px;border-bottom:1px solid var(--border)">Internal & public VM load balancing</td></tr>
          <tr><td style="padding:8px;border-bottom:1px solid var(--border)">Application Gateway</td><td style="padding:8px;border-bottom:1px solid var(--border)">L7 (HTTP/S)</td><td style="padding:8px;border-bottom:1px solid var(--border)">URL routing, SSL offload, WAF</td></tr>
          <tr><td style="padding:8px;border-bottom:1px solid var(--border)">Traffic Manager</td><td style="padding:8px;border-bottom:1px solid var(--border)">DNS</td><td style="padding:8px;border-bottom:1px solid var(--border)">Global routing, failover, geographic</td></tr>
          <tr><td style="padding:8px">Azure Front Door</td><td style="padding:8px">L7 (Global)</td><td style="padding:8px">Global HTTP LB + WAF + CDN + SSL</td></tr>
        </table>
        <p style="margin-top:12px"><strong>VPN Gateway:</strong> S2S (IPsec, on-prem↔Azure), P2S (individual client), VNet-to-VNet. BGP supported on VpnGw1+.</p>
        <p style="margin-top:8px"><strong>ExpressRoute:</strong> Private dedicated connection (not over internet). Up to 100 Gbps. Co-location, Point-to-point, or IPVPN.</p>
        <div class="alert alert-warning mt-4"><i class="fas fa-star"></i><span><strong>🎯 Exam Tips:</strong> Traffic Manager = DNS-based (not a proxy). App Gateway = session affinity cookie. ExpressRoute = private, not encrypted by default. VPN Gateway Basic SKU = no BGP, no active-active.</span></div>` },
    ],
    D5: [
      { title:'Azure Monitor, Log Analytics & KQL', content: `<p><strong>Azure Monitor</strong> collects metrics (numerical, 93-day retention) and logs (events/traces in Log Analytics Workspace).</p>
        <h4 style="margin:14px 0 8px;color:var(--azure-blue)">Key Log Tables</h4>
        <ul style="margin:0 0 12px 20px;line-height:2;font-size:14px">
          <li><strong>AzureActivity</strong> — Subscription-level events (who did what)</li>
          <li><strong>AzureMetrics</strong> — Resource metric data</li>
          <li><strong>Heartbeat</strong> — VM agent connectivity</li>
          <li><strong>SecurityEvent</strong> — Windows security events</li>
          <li><strong>Syslog</strong> — Linux system logs</li>
        </ul>
        <h4 style="margin:14px 0 8px;color:var(--azure-blue)">Essential KQL Operators</h4>
        <pre style="background:var(--bg-input);padding:14px;border-radius:6px;font-family:'Fira Code',monospace;font-size:12px;overflow-x:auto">AzureActivity
| where TimeGenerated > ago(24h)
| where OperationNameValue has "delete"
| project TimeGenerated, Caller, ResourceGroup, OperationNameValue
| order by TimeGenerated desc
| take 20</pre>
        <div class="alert alert-warning mt-4"><i class="fas fa-star"></i><span><strong>🎯 Exam Tips:</strong> Activity Log = 90 days retention, subscription-scoped. Diagnostic settings needed for resource logs. Azure Monitor Agent (AMA) replaces legacy Log Analytics Agent. VM Insights = AMA required.</span></div>` },
      { title:'Azure Backup & Site Recovery', content: `<h4 style="margin:0 0 10px;color:var(--azure-blue)">Vault Comparison</h4>
        <table style="width:100%;font-size:13px;border-collapse:collapse">
          <tr style="background:var(--bg-input)"><th style="padding:8px;text-align:left">Vault Type</th><th style="padding:8px;text-align:left">Supports</th></tr>
          <tr><td style="padding:8px;border-bottom:1px solid var(--border)">Recovery Services Vault</td><td style="padding:8px;border-bottom:1px solid var(--border)">Azure VMs, SQL, SAP HANA, Azure Files, on-prem workloads</td></tr>
          <tr><td style="padding:8px">Backup Vault</td><td style="padding:8px">Azure Blobs, Managed Disks, AKS, PostgreSQL Flexible Server</td></tr>
        </table>
        <p style="margin-top:12px"><strong>Backup Policy:</strong> Defines schedule (daily/weekly) + retention (daily/weekly/monthly/yearly GFS).</p>
        <p style="margin-top:10px"><strong>Azure Site Recovery (ASR):</strong> Disaster recovery via continuous replication. RPO: minutes. Failover to secondary region. Supports Azure VMs, VMware, Hyper-V, Physical servers.</p>
        <div class="alert alert-warning mt-4"><i class="fas fa-star"></i><span><strong>🎯 Exam Tips:</strong> Soft delete protects backup data for 14 days after deletion. Cross-region restore requires GRS vault. ASR = DR (low RPO); Backup = data protection (hours RPO). Replication policy ≠ backup policy.</span></div>` },
      { title:'Alerts, Advisor & Governance Monitoring', content: `<p><strong>Alert Rules:</strong> Condition (metric/log/activity) + Action Group (email, SMS, webhook, ITSM, Function, Logic App).</p>
        <p style="margin-top:10px"><strong>Alert types:</strong></p>
        <ul style="margin:8px 0 12px 20px;line-height:2;font-size:14px">
          <li><strong>Metric alerts</strong> — Near real-time (~1 min). Threshold on a metric value.</li>
          <li><strong>Log search alerts</strong> — KQL query result triggers alert (1–5 min frequency).</li>
          <li><strong>Activity log alerts</strong> — Triggered by subscription events.</li>
        </ul>
        <p><strong>Azure Advisor:</strong> Personalized recommendations in 5 pillars: Cost, Security, Reliability, Operational Excellence, Performance.</p>
        <p style="margin-top:10px"><strong>Azure Service Health:</strong> Tracks Azure service issues, planned maintenance, health advisories affecting your resources.</p>
        <div class="alert alert-warning mt-4"><i class="fas fa-star"></i><span><strong>🎯 Exam Tips:</strong> Action Groups are reusable across multiple alert rules. Alert states: Fired → Resolved. Advisor integrates with Security Center for security recommendations. Cost recommendations often = rightsize or reserved instances.</span></div>` },
    ]
  };

  const sections = content[domainId] || [];
  return sections.map((s, i) => `
    <div style="margin-bottom:16px;border:1px solid var(--border);border-radius:var(--radius-sm);overflow:hidden">
      <div onclick="toggleSection('${domainId}_${i}')"
        style="padding:14px 18px;cursor:pointer;display:flex;justify-content:space-between;align-items:center;background:var(--bg-input);font-weight:600;font-size:14px">
        <span><i class="fas fa-book-reader" style="color:${col};margin-right:8px"></i>${s.title}</span>
        <i class="fas fa-chevron-down" id="chev_${domainId}_${i}" style="color:var(--text-muted);transition:transform .2s"></i>
      </div>
      <div id="sec_${domainId}_${i}" style="display:none;padding:20px 22px;font-size:14px;line-height:1.8;color:var(--text-secondary)">
        ${s.content}
      </div>
    </div>`).join('');
}

window.toggleSection = function(id) {
  const el   = document.getElementById('sec_' + id);
  const chev = document.getElementById('chev_' + id);
  const open = el.style.display === 'block';
  el.style.display = open ? 'none' : 'block';
  chev.style.transform = open ? '' : 'rotate(180deg)';
};