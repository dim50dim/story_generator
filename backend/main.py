from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(
    title: "Choose Your Own Adventure Game API",
    description= "api to generate cool stories",
    version="0.1.0",
    docs_url="/docs",
    redoc_url="redoc",
)

# Define allowed origins
origins = [
    "http://localhost:3000",  # React/Next.js local dev
    "http://127.0.0.1:3000",
    "https://yourdomain.com"  # Production domain
]

# Add CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,          # List of allowed origins
    allow_credentials=True,         # Allow cookies/auth
    allow_methods=["*"],             # Allow all HTTP methods
    allow_headers=["*"],             # Allow all headers
)

@app.get("/")
def read_root():
    return {"message": "Hello from FastAPI with CORS!"}