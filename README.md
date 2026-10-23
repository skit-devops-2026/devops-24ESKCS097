# Releaf-Book

## Author

| Roll No. | Name | GitHub username |
|---|---|---|
| 24ESKCS097 | CHIRAG DHARMASANI | [chirag070707](https://github.com/chirag070707) |

## Live URL

**Live URL:** https://devops-24eskcs097.onrender.com

## Project Links

- **GitHub Repository:** [devops-24ESKCS097](https://github.com/skit-devops-2026/devops-24ESKCS097)
- **GitHub Actions (CI):** [Workflow Runs](https://github.com/skit-devops-2026/devops-24ESKCS097/actions)
- **Container Image (GHCR):** [Organization Packages](https://github.com/orgs/skit-devops-2026/packages)
- **Prometheus Configuration:** [monitoring/prometheus.yml](monitoring/prometheus.yml)
- **Grafana Dashboard JSON:** [monitoring/dashboard.json](monitoring/dashboard.json)
- **Deployment Screenshot:** [docs/deployment.png](docs/deployment.png)
- **Kubernetes Deployment:** [k8s/deployment.yaml](k8s/deployment.yaml)
- **Kubernetes Service:** [k8s/service.yaml](k8s/service.yaml)

## About

Releaf-Book is a web-based platform for buying and selling pre-owned books. Users can browse available books, view listings, manage their wishlist, and use buying and selling related features through the web interface.

## Features

- Browse available books and view book listings
- Buy and sell pre-owned books through the web interface
- Add books to a wishlist
- View bought and sold book sections
- User login and registration pages

## Tech Stack

- **Frontend:** HTML, CSS, JavaScript
- **Web Server:** Nginx
- **Backend:** None (static web application)
- **Database:** None
- **Containerization:** Docker and Docker Compose
- **CI:** GitHub Actions
- **Monitoring:** Prometheus, Nginx Prometheus Exporter, and Grafana
- **Container Registry:** GitHub Container Registry (GHCR)
- **Orchestration:** Kubernetes

## Running Locally

### Prerequisites

- Git
- Node.js
- Docker Desktop with Docker Compose

### Clone the Repository

```bash
git clone https://github.com/skit-devops-2026/devops-24ESKCS097.git
cd devops-24ESKCS097
```

### Run the Application with Docker

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

**Note:** These monitoring URLs are accessible on the machine running Docker; they are not public internet links.

## Kubernetes Deployment

The project includes Kubernetes Deployment and Service manifests in the `k8s/` directory.

- **Deployment manifest:** `k8s/deployment.yaml`
- **Service manifest:** `k8s/service.yaml`
- **Container image:** `ghcr.io/skit-devops-2026/devops-24eskcs097:latest`
- **Deployment name:** `releaf-book`
- **Service type:** NodePort
- **Service port:** `80`
- **NodePort:** `30080`

Check the Kubernetes resources:

```bash
kubectl get deployment,service,pods
```

To access the application locally using port forwarding:

```bash
kubectl port-forward service/releaf-book 8888:80
```

Then open:

http://localhost:8888

Keep the terminal running while accessing the forwarded website.

## Deployment Evidence

The deployment screenshot is available at [docs/deployment.png](docs/deployment.png).

The Prometheus configuration and exported Grafana dashboard are included in the repository for inspection.
