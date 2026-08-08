# Sathvik Sanka — AI/ML Engineer Portfolio

Interactive portfolio showcasing generative AI, RAG, MLOps, and production ML experience. Built with React and Tailwind CSS.

## Project structure

```
src/
├── App.js                 # Main layout & sections
├── components/
│   ├── background/        # Neural network canvas, grid, tokens
│   ├── hero/              # Hero visual, typing roles
│   ├── layout/            # Navbar, section headers
│   ├── experience/        # Timeline cards
│   ├── rag/               # Case study + live RAG demo
│   ├── ContactForm.js
│   └── AIPortfolioAssistant.js
├── data/
│   ├── portfolioData.js   # Experience, skills, projects, etc.
│   └── ragCorpus.js       # Sample corpus for RAG demo
├── hooks/
│   └── useInView.js
└── utils/
    └── ragRetrieval.js    # Browser-side retrieval pipeline
```

## Scripts

| Command | Description |
|---------|-------------|
| `npm start` | Run frontend (default port from CRA; may use 5000 if configured) |
| `npm run build` | Production build |
| `npm run server` | Contact form API (`server.js`) |
| `npm run dev` | Frontend + contact server together |

## Contact form

Copy `env.example` to `.env` and configure email settings. See `CONTACT_FORM_SETUP.md`.

## Live features

- AI-themed animated background (neural network + particles)
- Interactive **RAG Lab** with case study and browser demo
- AI portfolio chat assistant
