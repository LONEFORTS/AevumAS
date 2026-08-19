# ⏳ Aevum — Student Management System (Capstone)

Premium black (X/Twitter-grade) UI · Django 4.2 + DRF + SQLite · phone-first workflow.

## Features
- Auth: register / login / logout
- Dashboard with 49-day activity heatmap (GitHub-style), stat cards, badges
- Notes: CRUD, tags, file attachments, pin, public/private visibility
- Code Vault: snippets with language tags, syntax-styled viewer
- One-tap GitHub publish for snippets (GitHub Contents API, personal access token)
- Kanban board (To Do / Doing / Done) with instant status moves
- Calendar (month grid, colored event chips)
- Focus timer (Pomodoro) + session log
- Achievements engine (8 auto-awarded badges)
- Public shareable profile at /u/<username>/
- Global search across notes, snippets, tasks
- REST API: /api/notes/ /api/snippets/ /api/tasks/ /api/events/ /api/focus/ /api/stats/

## Quick start
```bash
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver 0.0.0.0:8000
```

## Deploy from your phone (recommended)
1. Create a GitHub repo, upload these files (web upload works on phone).
2. Open the repo → Code → Codespaces → Create codespace.
3. In the Codespaces terminal: `pip install -r requirements.txt && python manage.py migrate && python manage.py runserver`
4. Ports tab → port 8000 → right-click → "Make Public" → copy the URL → that's your external checker link.

## GitHub publishing from Aevum
1. github.com → Settings → Developer settings → Personal access tokens (classic) → scope `repo`.
2. Aevum → Share → paste username + token → Save.
3. Code Vault → open any snippet → "Publish to GitHub".

## Test
```bash
python inprocess_test.py   # full in-process E2E suite
```
