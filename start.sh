#!/bin/bash
# ============================================
# Eland Expert Engineers — Quick Start Script
# Run this once to set up and start the server
# Usage: bash start.sh
# ============================================

set -e

echo ""
echo "  ╔═══════════════════════════════════════════╗"
echo "  ║   Eland Expert Engineers — Setup          ║"
echo "  ╚═══════════════════════════════════════════╝"
echo ""

# Check Node
if ! command -v node &> /dev/null; then
  echo "  ✗ Node.js not found. Install it first:"
  echo "    curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash"
  echo "    source ~/.bashrc && nvm install 20"
  exit 1
fi

NODE_VER=$(node --version)
echo "  ✓ Node.js $NODE_VER detected"

# Install dependencies
if [ ! -d "node_modules" ]; then
  echo "  → Installing dependencies..."
  npm install
  echo "  ✓ Dependencies installed"
else
  echo "  ✓ Dependencies already installed"
fi

# Create .env if missing
if [ ! -f ".env" ]; then
  cp .env.example .env
  echo "  ✓ Created .env from template"
  echo ""
  echo "  ⚠  IMPORTANT: Edit .env to add your Gmail credentials"
  echo "     nano .env"
  echo ""
fi

# Set up database
echo "  → Setting up database..."
node server/db/setup.js
echo "  ✓ Database ready"

echo ""
echo "  ╔═══════════════════════════════════════════╗"
echo "  ║   Starting development server...          ║"
echo "  ║   Open: http://localhost:3000             ║"
echo "  ╚═══════════════════════════════════════════╝"
echo ""

# Start server
npm run dev
