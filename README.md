# Releaf-Book

## Author

| Roll No. | Name | GitHub username |
|---|---|---|
| 24ESKCS097 | CHIRAG DHARMASANI | [chirag070707](https://github.com/chirag070707) |

## About

Releaf-Book is a web-based platform for buying and selling pre-owned books. Users can browse available books, view listings, manage their wishlist, and use buying and selling related features through the web interface.

## Features

- Browse available books and view book listings
- Buy and sell pre-owned books through the web interface
- Add books to a wishlist
- View bought and sold book sections
- User login and registration pages

## Tech Stack

- Frontend: HTML, CSS, JavaScript
- Web Server: Nginx
- Backend: None (static web application)
- Database: None
- Containerization: Docker and Docker Compose
- CI: GitHub Actions
- Monitoring: Prometheus, Nginx Prometheus Exporter, and Grafana
- Container Registry: GitHub Container Registry (GHCR)

## Project Links

- **Live Website:** https://devops-24eskcs097.onrender.com
- **GitHub Repository:** https://github.com/skit-devops-2026/devops-24ESKCS097
- **GitHub Actions (CI):** https://github.com/skit-devops-2026/devops-24ESKCS097/actions
- **Container Image (GHCR):** https://github.com/orgs/skit-devops-2026/packages
- **Prometheus Configuration:** [monitoring/prometheus.yml](monitoring/prometheus.yml)
- **Grafana Dashboard JSON:** [monitoring/dashboard.json](monitoring/dashboard.json)
- **Deployment Screenshot:** [docs/deployment.png](docs/deployment.png)

## Running Locally

### Prerequisites

- Git
- Node.js
- Docker Desktop with Docker Compose

### Run the Application with Docker

Clone the repository:

```bash
git clone https://github.com/skit-devops-2026/devops-24ESKCS097.git
cd devops-24ESKCS097
```

Build and start the application:

```bash
docker compose up -d --build
```

Open the website:

http://localhost:8081

### Run Tests

```bash
make install
make test
make build
```

## Monitoring

The local monitoring stack uses Prometheus to collect metrics from the Nginx Prometheus Exporter, with Grafana providing dashboard visualization.

Start the monitoring stack:

```bash
docker compose up -d
```

Local monitoring interfaces:

- **Prometheus:** http://localhost:9090
- **Prometheus Targets:** http://localhost:9090/targets
- **Nginx Exporter Metrics:** http://localhost:9113/metrics
- **Grafana:** http://localhost:3000

Note: These monitoring URLs are accessible on the machine running Docker; they are not public internet links.

## Deployment Evidence

The deployment screenshot is stored at [docs/deployment.png](docs/deployment.png).

The Prometheus configuration and exported Grafana dashboard are included in the repository for inspection.