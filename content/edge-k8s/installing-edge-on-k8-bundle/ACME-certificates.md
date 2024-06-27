---
weight: 11
title: Obtaining Valid Certificates with ACME Client and Auto Renewal
layout: redirect
---

To ensure that Edge always has valid SSL/TLS certificates, you can use an ACME (Automated Certificate Management Environment) client that supports automatic renewal. This example using Certbot, a popular ACME client, to obtain and automatically renew certificates.

### Prerequisites
Before proceeding, ensure you have:

A domain name pointed to the server where you want to install the certificate.
SSH access to your server with sudo privileges.

### Step-by-Step Example

#### 1. Install Certbot

SSH into your server.
Install Certbot using the package manager:

```bash
sudo apt-get update
sudo apt-get install certbot
```

#### 2. Obtain Initial Certificates

Run Certbot with your domain name to obtain SSL certificates. Replace your_domain.com with your actual domain name:

```bash
sudo certbot certonly --webroot -w /var/www/html -d <your_domain.com>
```

* --webroot specifies the webroot directory of your domain.
* -w /var/www/html specifies the path to your webroot directory.
* -d <your_domain.com> specifies your domain name

#### 3. Configure Automatic Renewal

Certbot can automatically renew certificates with a specific date and time chosen by the user. To set up a cron job for automatic renewal, run the following command:

```bash
sudo crontab -e
```
Add the following line to renew certificates, for example once a month at 2:00 AM:

```bash
0 2 1 * * certbot renew --quiet
```

* Minute (0): Specifies the minute of the hour when the command will be executed. 0 means the command will run at the beginning of the hour.
* Hour (2): Specifies the hour of the day when the command will be executed. Here, 2 corresponds to 2 AM (in 24-hour format).
* Day of the Month (1): Specifies the day of the month when the command will be executed. 1 means the command will run on the 1st day of every month.
* Month (\*): Specifies the month of the year when the command will be executed. The asterisk (\*) means "every month".
* Day of the Week (\*): Specifies the day of the week when the command will be executed. The asterisk (\*) means "every day of the week".

#### 4. Verify Automatic Renewal

Certbot will also automatically renew any certificate that is within 30 days of expiration. You can test the renewal process by running the below command to simulate the renewal process without actually renewing the certificates.

```bash
sudo certbot renew --dry-run
```
