# AiStraX – Intelligent AI Planning Platform

## Overview

AiStraX is an intelligent planning platform developed as part of a Bachelor's Thesis project.

The application combines Artificial Intelligence, recommendation mechanisms, modern web technologies, and persistent data storage in order to assist users in generating structured execution plans.

The platform transforms high-level objectives into actionable plans and supports multiple planning domains through a unified and intuitive user interface.

Supported planning domains:

* Personal Planning
* Learning Planning
* Corporate Project Planning
* Public Event Planning

The platform follows a modular full-stack architecture consisting of a React frontend, a FastAPI backend, AI-powered services, recommendation mechanisms, and persistent data storage.

---

## Application Workflow

The execution flow of the platform is summarized below:

1. The user selects a planning category.
2. The user provides a planning objective.
3. The frontend validates and sends the request to the backend.
4. The backend processes the request through the planning services.
5. The AI service generates planning content.
6. The parser transforms the AI response into the internal data model.
7. Recommendations are retrieved from previously generated plans.
8. The generated plan is stored in the database.
9. The frontend displays the generated plan, recommendations, explanations, and insights.
10. The user can refine the generated plan or export it as PDF or PNG.

---

## Functionalities

### Planning Modules

* Personal Plan Generation
* Learning Plan Generation
* Corporate Plan Generation
* Public Event Plan Generation

### AI Features

* AI-powered task generation
* Task breakdown generation
* Plan explanation generation
* Plan modification and refinement

### Recommendation System

* Similar plan retrieval
* Rating-based recommendation ranking
* Historical plan reuse

### Export Features

* PDF Export
* PNG Export

### Additional Features

* Statistics Dashboard
* Insights Module
* Recommendation Management
* User Rating System
* Plan Persistence

---

## Project Structure

```text
AiStraX
│
├───AiStrax-backend
│   └───app
│       │   main.py
│       │   
│       ├───api
│       │       routes.py
│       │       
│       ├───core
│       │       database.py
│       │       
│       ├───db
│       │       plans.db
│       │       
│       ├───models
│       │       db_models.py
│       │       plan.py
│       │       task.py
│       │       
│       ├───planners
│       │       corporate_planner.py
│       │       learning_planner.py
│       │       personal_planner.py
│       │       public_planner.py
│       │       
│       ├───schemas
│       │       corporate_request.py
│       │       learning_request.py
│       │       modify_plan_request.py
│       │       personal_request.py
│       │       public_request.py
│       │       rate_plan_request.py
│       │       task_breakdown_request.py
│       │       
│       ├───services
│       │       ai_service.py
│       │       db_service.py
│       │       decision_service.py
│       │       explain_service.py
│       │       export_service.py
│       │       parser_service.py
│       │       prompt_builder.py
│       │       recommendation_service.py
│       │       
│       └───tests
│               test_corporate_plan.py
│               test_learning_plan.py
│               test_modify_recommended_plan.py
│               test_personal_plan.py
│               test_public_plan.py
│               test_rate_plan.py
│               test_recommendations.py
│               test_root.py
│               test_saved_plans.py
│               test_task_breakdown.py
│               test_validation.py
│               
└───AiStrax-frontend
    │   vite.config.js
    │   
    └───frontend
        │   index.html
        │   package-lock.json
        │   package.json
        │   
        └───src
            │   App.jsx
            │   main.jsx
            │   
            ├───animations
            │       variants.js
            │       
            ├───api
            │       axios.js
            │       planningApi.js
            │       recommendationApi.js
            │       
            ├───app
            │       providers.jsx
            │       router.jsx
            │       
            ├───assets
            │       hero.png
            │       logo.png
            │       logo_title.png
            │       
            ├───components
            │   ├───dashboard
            │   │       DashboardHero.jsx
            │   │       QuickActions.jsx
            │   │       RecentActivity.jsx
            │   │       RecommendationsPreview.jsx
            │   │       StatsCards.jsx
            │   │       
            │   ├───feedback
            │   │       EmptyState.jsx
            │   │       ErrorState.jsx
            │   │       
            │   ├───forms
            │   │       CorporatePlanForm.jsx
            │   │       LearningPlanForm.jsx
            │   │       PersonalPlanForm.jsx
            │   │       PublicPlanForm.jsx
            │   │       
            │   ├───loading
            │   │       LoadingScreen.jsx
            │   │       Skeleton.jsx
            │   │       
            │   ├───modals
            │   │       ExportModal.jsx
            │   │       FAQModal.jsx
            │   │       InsightsModal.jsx
            │   │       ModifyPlanModal.jsx
            │   │       StatisticsModal.jsx
            │   │       
            │   ├───navigation
            │   │       Sidebar.jsx
            │   │       Topbar.jsx
            │   │       
            │   ├───plan
            │   │       ExplanationPanel.jsx
            │   │       PlanViewer.jsx
            │   │       
            │   ├───recommendations
            │   │       RatingStars.jsx
            │   │       RecommendationCard.jsx
            │   │       
            │   └───ui
            │           Badge.jsx
            │           Button.jsx
            │           Card.jsx
            │           Input.jsx
            │           Section.jsx
            │           Textarea.jsx
            │           
            ├───config
            │       api.js
            │       theme.js
            │       
            ├───constants
            │       routes.js
            │       
            ├───hooks
            │       useModifyRecommendation.js
            │       usePlanGeneration.js
            │       useRating.js
            │       useRecommendations.js
            │       
            ├───layouts
            │       MainLayout.jsx
            │       
            ├───pages
            │       CorporatePlanPage.jsx
            │       Dashboard.jsx
            │       LearningPlanPage.jsx
            │       NotFound.jsx
            │       PersonalPlanPage.jsx
            │       PublicPlanPage.jsx
            │       RecommendationDetailsPage.jsx
            │       RecommendationsPage.jsx
            │       
            ├───styles
            │       globals.css
            │       
            └───utils
                    cn.js
                    exportPdf.js
                    exportPng.js
                    
```

---

# Backend

## Technologies

The backend was developed using:

* Python 3.12
* FastAPI
* SQLAlchemy
* SQLite
* OpenAI API
* Pydantic
* ReportLab
* Pillow

## Recommended IDE

PyCharm Professional or PyCharm Community Edition.

## Backend Setup

Open the backend project using PyCharm.

Open the integrated terminal and navigate to the application directory:

```bash
cd AiStrax-backend
```

Create a virtual environment:

```bash
python -m venv venv
```

Activate the virtual environment:

```bash
venv\Scripts\activate
```

Install the required dependencies:

```bash
pip install fastapi
pip install uvicorn
pip install sqlalchemy
pip install pydantic
pip install openai
pip install reportlab
pip install pillow
```

## Running the Backend

Start the FastAPI server:

```bash
python -m uvicorn app.main:app --reload
```

Backend URL:

```text
http://localhost:8000
```

Swagger API Documentation:

```text
http://localhost:8000/docs
```

---

# Frontend

## Technologies

The frontend was developed using:

* React
* Vite
* Axios
* Tailwind CSS
* Framer Motion
* Lucide React
* jsPDF

## Recommended IDE

JetBrains WebStorm.

## Frontend Setup

Open the frontend project using WebStorm.

Open the integrated terminal and navigate to the frontend directory:

```bash
cd AiStrax-frontend\frontend
```

Install all required dependencies:

```bash
npm install
```

This command automatically installs all packages defined in the project's package.json file.

## Running the Frontend

Start the development server:

```bash
npm run dev
```

Frontend URL:

```text
http://localhost:5173
```

---

# Database

The platform uses SQLite as its persistence layer.

Database file:

```text
AiStrax-backend/app/db/plans.db
```

The database stores:

* Generated Plans
* Plan Metadata
* Recommendations
* User Ratings
* Historical Planning Information

The database can be opened and inspected using:

* DB Browser for SQLite
* SQLiteStudio
* DBeaver

Recommended tool:

```text
DB Browser for SQLite
```

No additional database server installation is required.

---

# Summary and Notes

AiStraX was developed as part of a Bachelor's Thesis project at Babeș-Bolyai University.

The application demonstrates the integration of:

* Artificial Intelligence
* Intelligent Planning Systems
* Recommendation Mechanisms
* Full-Stack Web Development
* Persistent Data Management

The project was designed using a modular architecture that supports future extensions, including advanced AI models, external productivity integrations, collaborative planning environments, and scalable cloud-based deployments.

Author: Aura-Mihaela Stejeroiu

Specialization: Computer Science (English)

Faculty of Mathematics and Computer Science

Babeș-Bolyai University

2026

GitHub: https://github.com/aurastejeroiu/AiStrax