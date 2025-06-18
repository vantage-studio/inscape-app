// GCP Asset Type to Policy Mapping
export const gcpAssetTypes = {
  gke: {
    name: "Google Kubernetes Engine",
    policies: [
      "Secure GKE Clusters with Private Cluster Configuration",
      "Enable VPC Flow Logs and Intranode Visibility for GKE Cluster",
      "Disable Legacy Authorization for GKE Cluster",
      "Enable Integrity Monitoring for Shielded GKE Nodes",
      "Enable Auto-Repair for GKE Nodes",
      "Disable Kubernetes Web UI",
      "Deny Access to GKE Cluster",
      "Disable Alpha Clusters for Production Workloads",
      "Enable Auto-Upgrade for GKE Nodes",
      "Enable Secure Boot for Shielded GKE Nodes",
      "Disable Client Certificate Authentication for GKE Cluster",
      "Create Clusters with Private Nodes",
      "Configure VPC-Native for Clusters in GKE",
      "Enable Red Hat ACS On Kubernetes Cluster",
      "Enable Cloud Logging and Monitoring for GKE Cluster",
      "Encrypt GKE Cluster Node using CMK",
      "Encrypt Application Layer Secrets for GKE Cluster",
    ],
  },
  cloudsql: {
    name: "Cloud SQL",
    policies: [
      "Assign Mandatory Tags to CloudSQL",
      "Deny Public Access to SQL Port 1433",
      "Disable Contained Database Authentication Flag for SQL Server Database Instances",
      "Deny Public Access to MySQL Server Port 3306",
      "Disable Local_infile DB Flag for Cloud SQL",
      "Enable skip_show_database Flag for Cloud SQL",
      "Enable Automated Backups for Cloud SQL Database",
      "Disable Log_min_duration_statement Database Flag for PostgreSQL Instance",
      "Enable Log_connections DB Flag for PostgreSQL",
      "Disable External Scripts Enabled Flag for SQL Server Database Instances",
      "Enable the log_hostname DB Flag for Postgres and Cloud SQL",
      "Enable Log_disconnections DB Flag for PostgreSQL",
      "Set log_min_error_statement Database Flag for Postgres Instance to Error or Stricter",
      "Enable cloudsql.enable_pgaudit Database Flag for PostgreSQL Instance",
      "Enforce user Connections Database Flag for Sql Server Instance is Set to Non-limiting Value",
      "Disable Cross DB Ownership Flag for SQL DB Server",
      "Enforce cloud SQL Incoming Connections To Use SSL",
      "Encrypt Cloud SQL Using CMEK",
      "Disable Database Remote Access Flag for SQL Server Database Instances",
      "Remove User Options Database Flag for Cloud SQL SERVER Instance",
      "Deny Public Access to Cloud SQL Database",
      "Disable 3625 (trace flag) Database Flag for Cloud SQL Server Instance",
    ],
  },
  vpcfirewall: {
    name: "VPC Firewall",
    policies: [
      "Assign Mandatory Tags to VPC Firewall",
      "Deny Public Access to Egress on all Ports",
      "Deny Public Access to Uncommon Ports",
      "Deny Public Access to ICMP",
      "Deny Legacy Subnet Mode for VPC",
    ],
  },
  cloudstorage: {
    name: "Cloud Storage",
    policies: [
      "Assign Mandatory Tags to CloudStorage",
      "Enable Uniform Bucket Level Access",
      "Encrypt Cloud Storage using Customer Managed Encryption Keys",
      "Deny Public Access to Cloud Storage",
    ],
  },
  vminstance: {
    name: "Compute Engine VM Instance",
    policies: [
      "Enable Compute Engine Using Instance-level SSH Keys",
      "Enable Shielded VM for Compute Instance",
      "Encrypt VM Disk with Customer-Managed Encryption Keys",
      "Enable OS Login for a Project",
      "Assign Mandatory Tags to VM",
      "Delete Unused VM Disk",
      "Enable Confidential Computing for Compute Instances",
      "Migrate VM Instance during Maintenance",
      "Enable MFA on Google Cloud VM Instances for OS Login",
      "Deny Public Access to VM Instance",
      "Disable IP Forwarding for Compute Instances",
      "Deny Public Access to SSH Port 22",
      "Disable 'Connecting to Serial Ports' for VM Instance",
      "Encrypt VM Disk with Customer-Supplied Encryption Keys",
      "Deny Usage of Service Accounts with Full Cloud API Access for VM Instances",
    ],
  },
  bigquery: {
    name: "BigQuery",
    policies: [
      "Encrypt Big Query Using Customer-Managed Encryption Keys",
      "Deny Public Access to Big Query",
      "Assign Mandatory Tags to BigQueryDataset",
      "Assign Mandatory Tags with BigQueryTable",
    ],
  },
  kmskey: {
    name: "Cloud KMS",
    policies: [
      "Check for Publicly Accessible Cloud KMS Keys",
      "Rotate KMS Key every N days",
      "Enforce Separation of Duties while Assigning KMS Related Roles to Users",
    ],
  },
  serviceaccounts: {
    name: "Service Accounts",
    policies: [
      "Deny Usage of Default Service Accounts for Instances",
      "Deny Admin Privileges to Service Accounts",
      "Enforce Separate Service Account Duties for Users",
      "Disable User Managed Service Account Key Creation",
      "Avoid Assigning Service Roles to IAM Users on a Project Level",
    ],
  },
  // Additional mappings can be added as needed
};

// Export the raw lists for reference
export const rawAssetTypes = [
  "gke",
  "cloudsql_mysqlserver",
  "cloudsql",
  "serviceaccounts",
  "project",
  "networks",
  "cloudsql_postgres",
  "cloudsql_sqlserver",
  "gcpdisks",
  "vpcfirewall",
  "cloudstorage",
  "apikeys",
  "pubsub",
  "vminstance",
  "gcploadbalancer",
  "kmskey",
  "bigquerytable",
  "clouddns",
  "gkecontainer",
  "iamusers",
  "dataproc",
  "cloudfunction",
  "bigquerydataset",
  "cloudfunctiongen1",
  "artifactregistrydockerimages",
];

// Export all policies for reference
export const allPolicies = [
  "Enable Rapid7 Vulnerability Scan",
  "Enable Compute Engine Using Instance-level SSH Keys",
  // ... (all other policies)
  "Encrypt Application Layer Secrets for GKE Cluster",
];

// Export vulnerability scan policies separately for easy reference
export const vulnerabilityScanPolicies = {
  rapid7: [
    "Enable Rapid7 Vulnerability Scan",
    "Rapid7 found high Vulnerabilities",
    "Rapid7 found medium Vulnerabilities",
    "Rapid7 found critical Vulnerabilities",
  ],
  tenable: [
    "Enable Tenable Vulnerability Scan",
    "Tenable Found critical Vulnerabilities",
    "Tenable Found high Vulnerabilities",
    "Tenable Found medium Vulnerabilities",
    "Tenable Found low Vulnerabilities",
  ],
  crowdstrike: [
    "Enable CrowdStrike Vulnerability Scan",
    "CrowdStrike Found Critical Vulnerabilities",
    "CrowdStrike Found High Vulnerabilities",
    "CrowdStrike Found Medium Vulnerabilities",
    "CrowdStrike Found Low Vulnerabilities",
  ],
  qualys: [
    "Enable Qualys Vulnerability Scan",
    "Qualys Found critical Vulnerabilities",
    "Qualys Found high Vulnerabilities",
    "Qualys Found medium Vulnerabilities",
    "Qualys Found low Vulnerabilities",
  ],
};
