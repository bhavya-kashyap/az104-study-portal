Router.register('resources', () => {
  const sections = [
    {
      title: 'Official Microsoft Resources',
      icon: 'fa-microsoft',
      color: 'blue',
      links: [
        { icon: 'fab fa-microsoft', title: 'AZ-104 Certification Page', desc: 'Official exam page, schedule exam, skills measured', url: 'https://learn.microsoft.com/en-us/credentials/certifications/azure-administrator/', tag: 'badge-blue' },
        { icon: 'fas fa-book', title: 'Official AZ-104 Study Guide', desc: 'Skills measured, exam objectives breakdown', url: 'https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/az-104', tag: 'badge-blue' },
        { icon: 'fas fa-flask', title: 'Microsoft Learn Practice Assessment', desc: 'Free official practice questions from Microsoft', url: 'https://learn.microsoft.com/en-us/credentials/certifications/azure-administrator/?practice-assessment-type=certification', tag: 'badge-green' },
        { icon: 'fas fa-graduation-cap', title: 'Microsoft Learn AZ-104 Path', desc: 'Free structured learning path with labs', url: 'https://learn.microsoft.com/en-us/training/courses/az-104t00', tag: 'badge-blue' },
        { icon: 'fas fa-code', title: 'Azure CLI Documentation', desc: 'Command reference for az commands', url: 'https://learn.microsoft.com/en-us/cli/azure/', tag: 'badge-teal' },
        { icon: 'fas fa-terminal', title: 'Azure PowerShell Documentation', desc: 'Az module cmdlets reference', url: 'https://learn.microsoft.com/en-us/powershell/azure/', tag: 'badge-teal' },
      ]
    },
    {
      title: 'Free Practice Tests & Labs',
      icon: 'fa-vial',
      color: 'green',
      links: [
        { icon: 'fas fa-tasks', title: 'Whizlabs AZ-104 Practice Tests', desc: '400+ practice questions with explanations', url: 'https://www.whizlabs.com/microsoft-azure-certification-az-104/', tag: 'badge-yellow' },
        { icon: 'fas fa-microscope', title: 'MeasureUp Official Practice Test', desc: 'Microsoft authorized practice exam', url: 'https://www.measureup.com/microsoft-azure-administrator-az-104.html', tag: 'badge-yellow' },
        { icon: 'fas fa-cloud', title: 'Azure Free Account (Labs)', desc: 'Get $200 credit + 12 months free for hands-on practice', url: 'https://azure.microsoft.com/en-us/free/', tag: 'badge-green' },
        { icon: 'fas fa-laptop-code', title: 'Microsoft Learn Sandbox', desc: 'Free Azure sandbox — no credit card needed', url: 'https://learn.microsoft.com/en-us/training/modules/describe-azure-compute-networking-services/', tag: 'badge-green' },
      ]
    },
    {
      title: 'Video & Community Resources',
      icon: 'fa-play-circle',
      color: 'purple',
      links: [
        { icon: 'fab fa-youtube', title: 'John Savill AZ-104 Study Cram', desc: 'Best free video cram session on YouTube', url: 'https://www.youtube.com/watch?v=VOod_VNgdJk', tag: 'badge-red' },
        { icon: 'fab fa-youtube', title: 'Microsoft Azure YouTube Channel', desc: 'Official Azure how-to videos and demos', url: 'https://www.youtube.com/@MicrosoftAzure', tag: 'badge-red' },
        { icon: 'fab fa-reddit', title: 'r/AzureCertification', desc: 'Community tips, exam feedback, study advice', url: 'https://www.reddit.com/r/AzureCertification/', tag: 'badge-purple' },
        { icon: 'fas fa-comments', title: 'TechCommunity: Azure', desc: 'Microsoft official community forum', url: 'https://techcommunity.microsoft.com/t5/azure/ct-p/Azure', tag: 'badge-blue' },
      ]
    },
    {
      title: 'Quick Reference Cheat Sheets',
      icon: 'fa-file-alt',
      color: 'teal',
      links: [
        { icon: 'fas fa-file-code', title: 'Azure RBAC Built-in Roles Reference', desc: 'Complete list of Azure built-in roles and permissions', url: 'https://learn.microsoft.com/en-us/azure/role-based-access-control/built-in-roles', tag: 'badge-teal' },
        { icon: 'fas fa-network-wired', title: 'Azure Networking Services Overview', desc: 'All networking products compared side by side', url: 'https://learn.microsoft.com/en-us/azure/networking/fundamentals/networking-overview', tag: 'badge-teal' },
        { icon: 'fas fa-database', title: 'Azure Storage Redundancy Options', desc: 'LRS vs ZRS vs GRS vs RA-GZRS comparison', url: 'https://learn.microsoft.com/en-us/azure/storage/common/storage-redundancy', tag: 'badge-teal' },
        { icon: 'fas fa-server', title: 'Azure VM Sizes Overview', desc: 'All VM series with use cases', url: 'https://learn.microsoft.com/en-us/azure/virtual-machines/sizes/overview', tag: 'badge-purple' },
      ]
    }
  ];

  const sectionsHtml = sections.map(sec => `
    <div class="card mb-6">
      <div class="card-title" style="font-size:18px">
        <i class="fas ${sec.icon}" style="color:var(--azure-${sec.color})"></i>
        ${sec.title}
      </div>
      ${sec.links.map(link => `
        <a href="${link.url}" target="_blank" rel="noopener" class="resource-link">
          <i class="${link.icon}"></i>
          <div style="flex:1">
            <div class="resource-link-title">${link.title}</div>
            <div class="resource-link-desc">${link.desc}</div>
          </div>
          <span class="badge ${link.tag} resource-link-tag">
            <i class="fas fa-external-link-alt" style="margin-right:4px"></i>Open
          </span>
        </a>`).join('')}
    </div>`).join('');

  return `<div class="fade-in">
    <div class="page-header">
      <div class="page-title"><i class="fas fa-link blue"></i> Study Resources</div>
      <div class="page-subtitle">Hand-picked official and community resources for AZ-104 preparation</div>
    </div>
    <div class="alert alert-success mb-6"><i class="fas fa-star"></i>
      <span><strong>Top 3 Must-Use:</strong>
        (1) Microsoft Learn official practice assessment — free and closest to real exam.
        (2) John Savill's YouTube cram — covers everything in 3 hours.
        (3) Azure Free Account — hands-on practice beats everything.
      </span>
    </div>
    ${sectionsHtml}
  </div>`;
});