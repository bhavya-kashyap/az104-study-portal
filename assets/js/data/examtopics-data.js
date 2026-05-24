window.EXAMTOPICS_DATA = {
  "meta": {
    "source": "ExamTopics AZ-104 Microsoft Azure Administrator",
    "sourceUrl": "https://www.examtopics.com/exams/microsoft/az-104/",
    "totalQuestionsAvailable": 606,
    "lastUpdated": "2026-05-11",
    "disclaimer": "Community study resource. Not affiliated with Microsoft Corporation or ExamTopics."
  },
  "questions": [
    {
      "id": 1,
      "topic": 1,
      "question": "Your company has several departments. Each department has a number of virtual machines (VMs). The company has an Azure subscription that contains a resource group named RG1. All VMs are located in RG1. You want to associate each VM with its respective department. What should you do?",
      "options": [
        "Create Azure Management Groups for each department.",
        "Create a resource group for each department.",
        "Assign tags to the virtual machines.",
        "Modify the settings of the virtual machines."
      ],
      "answer": "C",
      "answerIndex": 2,
      "communityVote": "C (98%)",
      "explanation": "Tags are key-value pairs you can assign to Azure resources to logically organize and associate them with metadata such as department, environment, or cost centre. Assigning a 'Department' tag to each VM is the correct and most efficient approach without restructuring resource groups or management groups.",
      "discussion": []
    },
    {
      "id": 2,
      "topic": 1,
      "note": "The question is included in a number of questions that depicts the identical set-up. However, every question has a distinctive result. Establish if the solution satisfies the requirements.",
      "question": "Your company has an Azure Active Directory (Azure AD) subscription. You want to implement an Azure AD conditional access policy. The policy must be configured to require members of the Global Administrators group to use Multi-Factor Authentication and an Azure AD-joined device when they connect to Azure AD from untrusted locations. Solution: You access the multi-factor authentication page to alter the user settings. Does the solution meet the goal?",
      "options": [
        "Yes",
        "No"
      ],
      "answer": "B",
      "answerIndex": 1,
      "communityVote": "B (99%)",
      "explanation": "Altering user settings on the legacy Multi-Factor Authentication page only configures per-user MFA — it does not create a Conditional Access policy. To require both MFA and an Azure AD-joined device from untrusted locations, you must configure a Conditional Access policy with the appropriate Grant controls in the Azure AD (Entra ID) portal.",
      "discussion": []
    },
    {
      "id": 3,
      "topic": 1,
      "note": "The question is included in a number of questions that depicts the identical set-up. However, every question has a distinctive result. Establish if the solution satisfies the requirements.",
      "question": "Your company has an Azure Active Directory (Azure AD) subscription. You want to implement an Azure AD conditional access policy. The policy must be configured to require members of the Global Administrators group to use Multi-Factor Authentication and an Azure AD-joined device when they connect to Azure AD from untrusted locations. Solution: You access the Azure portal to alter the session control of the Azure AD conditional access policy. Does the solution meet the goal?",
      "options": [
        "Yes",
        "No"
      ],
      "answer": "B",
      "answerIndex": 1,
      "communityVote": "B (92%)",
      "explanation": "Session controls in Conditional Access manage things like sign-in frequency and persistent browser sessions — they do not allow you to require MFA or an Azure AD-joined device. Those requirements must be configured under Grant controls, not session controls.",
      "discussion": []
    },
    {
      "id": 4,
      "topic": 1,
      "note": "The question is included in a number of questions that depicts the identical set-up. However, every question has a distinctive result. Establish if the solution satisfies the requirements.",
      "question": "Your company has an Azure Active Directory (Azure AD) subscription. You want to implement an Azure AD conditional access policy. The policy must be configured to require members of the Global Administrators group to use Multi-Factor Authentication and an Azure AD-joined device when they connect to Azure AD from untrusted locations. Solution: You access the Azure portal to alter the grant control of the Azure AD conditional access policy. Does the solution meet the goal?",
      "options": [
        "Yes",
        "No"
      ],
      "answer": "A",
      "answerIndex": 0,
      "communityVote": "A (76%)",
      "explanation": "Grant controls in Conditional Access are where you specify access requirements such as requiring MFA and requiring a device to be Azure AD-joined or compliant. Configuring the Grant control of the Conditional Access policy is the correct solution to enforce both requirements.",
      "discussion": []
    },
    {
      "id": 5,
      "topic": 1,
      "question": "You are planning to deploy an Ubuntu Server virtual machine to your company's Azure subscription. You are required to implement a custom deployment that includes adding a particular trusted root certification authority (CA). Which of the following should you use to create the virtual machine?",
      "options": [
        "The New-AzureRmVm cmdlet.",
        "The New-AzVM cmdlet.",
        "The Create-AzVM cmdlet.",
        "The az vm create command."
      ],
      "answer": "D",
      "answerIndex": 3,
      "communityVote": "D (96%)",
      "explanation": "The `az vm create` command (Azure CLI) supports the `--custom-data` parameter, which passes a cloud-init script or configuration file to the VM during provisioning. This is the standard way to inject custom configurations — such as adding a trusted root CA — at VM creation time for Linux VMs. `Create-AzVM` does not exist, and the PowerShell cmdlets do not have direct cloud-init support.",
      "discussion": []
    },
    {
      "id": 6,
      "topic": 1,
      "note": "The question is included in a number of questions that depicts the identical set-up. However, every question has a distinctive result. Establish if the solution satisfies the requirements.",
      "question": "Your company makes use of Multi-Factor Authentication for when users are not in the office. The Per Authentication option has been configured as the usage model. After the acquisition of a smaller business and the addition of the new staff to Azure Active Directory (Azure AD), you are informed that these employees should also make use of Multi-Factor Authentication. To achieve this, the Per Enabled User setting must be set for the usage model. Solution: You reconfigure the existing usage model via the Azure portal. Does the solution meet the goal?",
      "options": [
        "Yes",
        "No"
      ],
      "answer": "B",
      "answerIndex": 1,
      "communityVote": "B (95%)",
      "explanation": "The usage model (Per Authentication vs. Per Enabled User) of an existing Azure MFA provider cannot be changed after it has been created — the option is immutable. You would need to create a new MFA provider with the desired usage model. Reconfiguring via the portal does not accomplish this.",
      "discussion": []
    },
    {
      "id": 7,
      "topic": 1,
      "note": "The question is included in a number of questions that depicts the identical set-up. However, every question has a distinctive result. Establish if the solution satisfies the requirements.",
      "question": "Your company's Azure solution makes use of Multi-Factor Authentication for when users are not in the office. The Per Authentication option has been configured as the usage model. After the acquisition of a smaller business and the addition of the new staff to Azure Active Directory (Azure AD), you are informed that these employees should also make use of Multi-Factor Authentication. To achieve this, the Per Enabled User setting must be set for the usage model. Solution: You reconfigure the existing usage model via the Azure CLI. Does the solution meet the goal?",
      "options": [
        "Yes",
        "No"
      ],
      "answer": "B",
      "answerIndex": 1,
      "communityVote": "B (84%)",
      "explanation": "Just like the portal, the Azure CLI cannot change the usage model of an existing MFA provider — the usage model is set at creation and is immutable. Using the CLI to reconfigure the existing provider does not meet the requirement.",
      "discussion": []
    },
    {
      "id": 8,
      "topic": 1,
      "note": "The question is included in a number of questions that depicts the identical set-up. However, every question has a distinctive result. Establish if the solution satisfies the requirements.",
      "question": "Your company's Azure solution makes use of Multi-Factor Authentication for when users are not in the office. The Per Authentication option has been configured as the usage model. After the acquisition of a smaller business and the addition of the new staff to Azure Active Directory (Azure AD), you are informed that these employees should also make use of Multi-Factor Authentication. To achieve this, the Per Enabled User setting must be set for the usage model. Solution: You create a new Multi-Factor Authentication provider with a backup from the existing Multi-Factor Authentication provider data. Does the solution meet the goal?",
      "options": [
        "Yes",
        "No"
      ],
      "answer": "B",
      "answerIndex": 1,
      "communityVote": "B (89%)",
      "explanation": "Creating a new MFA provider and restoring a backup from the existing provider copies the old data but does not change the usage model — the new provider would still inherit the old configuration. The correct approach is to create a brand-new MFA provider explicitly set to the 'Per Enabled User' usage model.",
      "discussion": []
    },
    {
      "id": 9,
      "topic": 1,
      "note": "The question is included in a number of questions that depicts the identical set-up. However, every question has a distinctive result. Establish if the solution satisfies the requirements.",
      "question": "Your company has an Azure Active Directory (Azure AD) tenant named weyland.com that is configured for hybrid coexistence with the on-premises Active Directory domain. You have a server named DirSync1 that is configured as a DirSync server. You create a new user account in the on-premise Active Directory. You now need to replicate the user information to Azure AD immediately. Solution: You run the Start-ADSyncSyncCycle -PolicyType Initial PowerShell cmdlet. Does the solution meet the goal?",
      "options": [
        "Yes",
        "No"
      ],
      "answer": "B",
      "answerIndex": 1,
      "communityVote": "B (73%)",
      "explanation": "The `-PolicyType Initial` parameter triggers a full synchronisation of all objects, which takes significantly longer and is not appropriate for immediately replicating a single new user. The correct cmdlet to immediately replicate changes (including a newly created user) is `Start-ADSyncSyncCycle -PolicyType Delta`, which syncs only objects that have changed since the last sync cycle.",
      "discussion": []
    },
    {
      "id": 10,
      "topic": 1,
      "note": "The question is included in a number of questions that depicts the identical set-up. However, every question has a distinctive result. Establish if the solution satisfies the requirements.",
      "question": "Your company has an Azure Active Directory (Azure AD) tenant named weyland.com that is configured for hybrid coexistence with the on-premises Active Directory domain. You have a server named DirSync1 that is configured as a DirSync server. You create a new user account in the on-premise Active Directory. You now need to replicate the user information to Azure AD immediately. Solution: You use Active Directory Sites and Services to force replication of the Global Catalog on a domain controller. Does the solution meet the goal?",
      "options": [
        "Yes",
        "No"
      ],
      "answer": "B",
      "answerIndex": 1,
      "communityVote": "B (100%)",
      "explanation": "Active Directory Sites and Services forces replication between on-premises domain controllers — it has no effect on Azure AD Connect / DirSync synchronisation to Azure AD (Entra ID). To replicate a new user to Azure AD immediately, you must trigger an Azure AD Connect delta sync using `Start-ADSyncSyncCycle -PolicyType Delta`.",
      "discussion": []
    },
    {
      "id": 11,
      "topic": 1,
      "note": "The question is included in a number of questions that depicts the identical set-up. However, every question has a distinctive result. Establish if the solution satisfies the requirements.",
      "question": "Your company has an Azure Active Directory (Azure AD) tenant named weyland.com that is configured for hybrid coexistence with the on-premises Active Directory domain. You have a server named DirSync1 that is configured as a DirSync server. You create a new user account in the on-premise Active Directory. You now need to replicate the user information to Azure AD immediately. Solution: You restart the NetLogon service on a domain controller. Does the solution meet the goal?",
      "options": [
        "Yes",
        "No"
      ],
      "answer": "B",
      "answerIndex": 1,
      "communityVote": "B (100%)",
      "explanation": "Restarting the NetLogon service on a domain controller only affects Kerberos authentication and domain join operations — it has no bearing on Azure AD Connect / DirSync synchronisation to Azure AD. The correct approach remains triggering a delta sync via `Start-ADSyncSyncCycle -PolicyType Delta`.",
      "discussion": []
    },
    {
      "id": 12,
      "topic": 1,
      "question": "Your company has a Microsoft Azure subscription. The company has datacenters in Los Angeles and New York. You are configuring the two datacenters as geo-clustered sites for site resiliency. You need to recommend an Azure storage redundancy option. You have the following data storage requirements: Data must be stored on multiple nodes. Data must be stored on nodes in separate geographic locations. Data can be read from the secondary location as well as from the primary location. Which of the following Azure storage redundancy options should you recommend?",
      "options": [
        "Geo-redundant storage",
        "Read-only geo-redundant storage",
        "Zone-redundant storage",
        "Locally redundant storage"
      ],
      "answer": "B",
      "answerIndex": 1,
      "communityVote": "B (76%)",
      "explanation": "Read-only geo-redundant storage (RA-GRS) stores data in a primary region (LRS-replicated) and asynchronously replicates it to a secondary region. It is the only standard option that satisfies all three requirements: multiple nodes, geographically separate storage, and the ability to read from the secondary location. Standard GRS replicates to a secondary region but does NOT allow reads from that secondary location without a failover.",
      "discussion": []
    },
    {
      "id": 13,
      "topic": 1,
      "note": "The question is included in a number of questions that depicts the identical set-up. However, every question has a distinctive result. Establish if the solution satisfies the requirements.",
      "question": "Your company has an Azure subscription that includes a storage account, a resource group, a blob container and a file share. A colleague named Jon Ross makes use of a solitary Azure Resource Manager (ARM) template to deploy a virtual machine and an additional Azure Storage account. You want to review the ARM template that was used by Jon Ross. Solution: You access the Virtual Machine blade. Does the solution meet the goal?",
      "options": [
        "Yes",
        "No"
      ],
      "answer": "B",
      "answerIndex": 1,
      "communityVote": "B (95%)",
      "explanation": "The Virtual Machine blade only shows information about the VM resource itself and does not expose the ARM template used to deploy it along with other resources. Because the deployment included multiple resources (a VM and a Storage account) from a single template, the ARM template is recorded at the Resource Group level under Deployments, not on an individual resource blade.",
      "discussion": []
    },
    {
      "id": 14,
      "topic": 1,
      "note": "The question is included in a number of questions that depicts the identical set-up. However, every question has a distinctive result. Establish if the solution satisfies the requirements.",
      "question": "Your company has an Azure subscription that includes a storage account, a resource group, a blob container and a file share. A colleague named Jon Ross makes use of a solitary Azure Resource Manager (ARM) template to deploy a virtual machine and an additional Azure Storage account. You want to review the ARM template that was used by Jon Ross. Solution: You access the Resource Group blade. Does the solution meet the goal?",
      "options": [
        "Yes",
        "No"
      ],
      "answer": "B",
      "answerIndex": 1,
      "communityVote": "B (51%)",
      "explanation": "While the Resource Group blade does include a Deployments section where ARM templates are recorded, the question specifies that the deployment created resources inside an existing resource group that already contained a storage account, blob container, and file share. The answer is contested (51/49 split) because in many scenarios accessing the Resource Group deployments would work — however, if the VM was deployed into the existing resource group, you would navigate to Resource Group > Deployments > select the deployment > View template. The official answer is B (No) because the deployment used only a partial set of the listed resources.",
      "discussion": []
    },
    {
      "id": 15,
      "topic": 1,
      "note": "The question is included in a number of questions that depicts the identical set-up. However, every question has a distinctive result. Establish if the solution satisfies the requirements.",
      "question": "Your company has an Azure subscription that includes a storage account, a resource group, a blob container and a file share. A colleague named Jon Ross makes use of a solitary Azure Resource Manager (ARM) template to deploy a virtual machine and an additional Azure Storage account. You want to review the ARM template that was used by Jon Ross. Solution: You access the Container blade. Does the solution meet the goal?",
      "options": [
        "Yes",
        "No"
      ],
      "answer": "B",
      "answerIndex": 1,
      "communityVote": "B (100%)",
      "explanation": "The Blob Container blade provides access to blob data and container settings, not ARM deployment history. Deployment templates are not accessible from a container blade. The ARM template that was used to deploy the VM and storage account is stored in the Resource Group's Deployments section.",
      "discussion": []
    },
    {
      "id": 16,
      "topic": 1,
      "question": "Your company has three virtual machines (VMs) that are included in an availability set. You try to resize one of the VMs, which returns an allocation failure message. It is imperative that the VM is resized. Which of the following actions should you take?",
      "options": [
        "You should only stop one of the VMs.",
        "You should stop two of the VMs.",
        "You should stop all three VMs.",
        "You should remove the necessary VM from the availability set."
      ],
      "answer": "C",
      "answerIndex": 2,
      "communityVote": "C (73%)",
      "explanation": "When VMs are in an availability set and the desired size is not available on the current hardware cluster, Azure may not be able to resize just one VM. Stopping (deallocating) all VMs in the availability set releases their cluster allocation, allowing Azure to redeploy all of them — potentially on a different cluster — where the new size is available. Stopping only some VMs does not free the cluster lock.",
      "discussion": []
    },
    {
      "id": 17,
      "topic": 1,
      "question": "You have an Azure virtual machine (VM) that has a single data disk. You have been tasked with attaching this data disk to another Azure VM. You need to make sure that your strategy allows for the virtual machines to be offline for the least amount of time possible. Which of the following is the action you should take FIRST?",
      "options": [
        "Stop the VM that includes the data disk.",
        "Stop the VM that the data disk must be attached to.",
        "Detach the data disk.",
        "Delete the VM that includes the data disk."
      ],
      "answer": "C",
      "answerIndex": 2,
      "communityVote": "C (81%)",
      "explanation": "To minimise downtime, detach the data disk first while both VMs are still running (Azure supports hot-detach of data disks from a running VM). Once the disk is detached it can be immediately attached to the target VM without needing to stop either VM. Stopping a VM unnecessarily increases downtime.",
      "discussion": []
    },
    {
      "id": 18,
      "topic": 1,
      "question": "Your company has an Azure subscription. You need to deploy a number of Azure virtual machines (VMs) using Azure Resource Manager (ARM) templates. You have been informed that the VMs will be included in a single availability set. You are required to make sure that the ARM template you configure allows for as many VMs as possible to remain accessible in the event of fabric failure or maintenance. Which of the following is the value that you should configure for the platformFaultDomainCount property?",
      "options": [
        "10",
        "30",
        "Min Value",
        "Max Value"
      ],
      "answer": "D",
      "answerIndex": 3,
      "communityVote": "D (99%)",
      "explanation": "The platformFaultDomainCount property controls how many fault domains (separate physical racks with independent power and networking) the availability set spans. Setting it to the maximum value (typically 2 or 3 depending on region) maximises the number of VMs that remain accessible if a fault domain fails, because VMs are spread across the most physical isolation boundaries possible.",
      "discussion": []
    },
    {
      "id": 19,
      "topic": 1,
      "question": "Your company has an Azure subscription. You need to deploy a number of Azure virtual machines (VMs) using Azure Resource Manager (ARM) templates. You have been informed that the VMs will be included in a single availability set. You are required to make sure that the ARM template you configure allows for as many VMs as possible to remain accessible in the event of fabric failure or maintenance. Which of the following is the value that you should configure for the platformUpdateDomainCount property?",
      "options": [
        "10",
        "20",
        "30",
        "40"
      ],
      "answer": "B",
      "answerIndex": 1,
      "communityVote": "B (94%)",
      "explanation": "The platformUpdateDomainCount property controls how many update domains (groups of VMs rebooted together during planned maintenance) the availability set uses. The maximum allowed value is 20. Setting it to 20 ensures the fewest VMs are rebooted simultaneously during any single maintenance window, maximising availability.",
      "discussion": []
    },
    {
      "id": 20,
      "topic": 1,
      "question": "You have downloaded an Azure Resource Manager (ARM) template to deploy numerous virtual machines (VMs). The ARM template is based on a current VM, but must be adapted to reference an administrative password. You need to make sure that the password cannot be stored in plain text. You are preparing to create the necessary components to achieve your goal. What should you create to achieve your goal?",
      "options": [
        "An Azure Key Vault and a Key Vault secret to store the password",
        "An Azure Storage Account and a SAS token",
        "An Azure Managed Identity and a certificate",
        "An Azure AD Application and a client secret"
      ],
      "answer": "A",
      "answerIndex": 0,
      "communityVote": "A (implied — Key Vault)",
      "explanation": "Azure Key Vault allows you to store sensitive values such as passwords as secrets. An ARM template parameter file can reference a Key Vault secret using a resource ID and secret name — the password is never stored in plain text in the template or parameter file. At deployment time, ARM retrieves the secret value directly from Key Vault. This is the recommended best practice for secure credential management in ARM deployments.",
      "discussion": []
    }
  ]
};
